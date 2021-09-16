import type { WithPageAuthRequiredProps } from '@auth0/nextjs-auth0';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import {
  DashboardContext,
  DashboardLayout,
} from 'components/layout/dashboard-layout';
import {
  ConstructTemplatesDocument,
  PartsDocument,
  ProjectsDocument,
} from 'models/graphql';
import { ConstructDocument } from 'models/graphql';
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextApiRequest,
} from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import type { Props as DashboardProps } from 'pages';
import type { ReactElement } from 'react';
import { useContext } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { mutate } from 'swr';
import { debounce } from 'ts-debounce';
import { getModule } from 'utils/import';
import requestUtil, { sdk } from 'utils/request';

type Props = DashboardProps & WithPageAuthRequiredProps;

const Header: any = dynamic(getModule('./components/header'), { ssr: false });
const Icon: any = dynamic(getModule('./components/icon'), { ssr: false });

const Input: any = dynamic(
  async () => {
    const mod = await getModule('./components/form');
    return mod.Input;
  },
  { ssr: false }
);

const Label: any = dynamic(
  async () => {
    const mod = await getModule('./components/form');
    return mod.Label;
  },
  { ssr: false }
);

/**
 * Drag'n'drop with react-beautiful-dnd breaks with SSR in Next.js v11, so we cannot use SSR for ConstructDesigner for now.
 * react-beautiful-dnd does historically support SSR, but that seems to break with more recent versions of Next.
 * https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/reset-server-context.md
 */
const ConstructDesigner = dynamic(
  () => import('components/construct-designer'),
  { ssr: false }
);

export function Construct({ data: initialData = {} }: Props) {
  const router = useRouter();
  const { cid, pid } = router.query;
  const { send } = useContext(DashboardContext);

  const { construct } = initialData;
  let currentConstruct;

  const { data } = sdk.useConstruct(
    cid ? cid : null,
    { id: cid },
    {
      initialData: { construct },
    }
  );

  if (data) {
    ({
      construct: [currentConstruct],
    } = data);
  }

  useEffect(() => {
    if (currentConstruct) {
      send({
        type: 'OPEN_CONSTRUCT',
        value: currentConstruct,
      });
    }
  }, [currentConstruct, send]);

  const updateProjects = useMemo(
    () =>
      debounce(async (name, value) => {
        const { update_construct_by_pk: updatedConstruct } =
          await sdk.UpdateConstruct({
            id: currentConstruct?.id,
            input: { [name]: value },
          });

        mutate('Projects', async (data) => {
          if (data) {
            try {
              const { project: projects } = data;

              const activeProject = projects.find(({ id }) => id === pid);

              if (activeProject) {
                const filteredConstructs =
                  activeProject.project_constructs.filter(
                    ({ id }) => id !== updatedConstruct.id
                  );
                activeProject.project_constructs = [
                  updatedConstruct,
                  ...filteredConstructs,
                ];
              }
            } catch (err) {
              console.error(err);
            }
          }

          return data;
        });

        // Update SWR cache for this Construct (triggers useEffect above to update recentConstructs)
        mutate(
          cid,
          () => ({
            construct: [{ ...currentConstruct, ...updatedConstruct }],
          }),
          false
        );
      }, 500),
    [cid, currentConstruct, pid]
  );

  const handleChange = ({ target: { name, value } }) => {
    setInputValue(value);
    updateProjects(name, value);
  };

  const [inputValue, setInputValue] = useState(currentConstruct?.name);

  useEffect(() => {
    if (!!currentConstruct?.name) {
      setInputValue(currentConstruct.name);
    }
  }, [currentConstruct]);

  return (
    <>
      <Header as="header">
        <Label htmlFor="construct-name">
          <Icon label="Circle" />
        </Label>
        <Input
          css={{ border: 'none', flex: 1, m: 0 }}
          id="construct-name"
          name="name"
          onChange={handleChange}
          value={inputValue}
        />
      </Header>
      {currentConstruct && (
        <ConstructDesigner
          construct_parts={currentConstruct.construct_parts}
          id={currentConstruct.id}
        />
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  returnTo: '/',
  async getServerSideProps({ req, res, query }: GetServerSidePropsContext) {
    const { cid } = query;
    let projects;
    let parts;
    let construct;
    let templates;

    try {
      // TODO: create a combined query for the initial payload
      (req as NextApiRequest).body = { query: ProjectsDocument };
      projects = await requestUtil(req, res);

      (req as NextApiRequest).body = { query: PartsDocument };
      parts = await requestUtil(req, res);

      (req as NextApiRequest).body = {
        query: ConstructDocument,
        variables: { id: cid },
      };
      construct = await requestUtil(req, res);

      (req as NextApiRequest).body = { query: ConstructTemplatesDocument };
      templates = await requestUtil(req, res);
    } catch (err) {
      console.error(err);
    }

    if (!construct) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        data: { ...projects, ...parts, ...construct, ...templates },
      },
    };
  },
});

const ConstructPage = withPageAuthRequired(Construct);

ConstructPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default ConstructPage;
