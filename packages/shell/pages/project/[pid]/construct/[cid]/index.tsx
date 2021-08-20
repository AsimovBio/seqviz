import type { WithPageAuthRequiredProps } from '@auth0/nextjs-auth0';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import useLocalStorage from 'hooks/useLocalStorage';
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
import { Dashboard } from 'pages';
import { useCallback, useEffect } from 'react';
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
  const [recentConstructs, setRecentConstructs] = useLocalStorage<unknown[]>(
    'recentConstructs',
    []
  );
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
      const constructs = [...recentConstructs];
      const existingIdx = constructs.findIndex(
        ({ id }) => id === currentConstruct?.id
      );

      if (existingIdx !== -1) {
        constructs.splice(existingIdx, 1, currentConstruct);
      } else {
        constructs.push(currentConstruct);
      }

      setRecentConstructs(constructs);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = useCallback(
    ({ target: { name, value } }) => {
      mutate('Projects', async (data) => {
        if (data) {
          try {
            const { project: projects } = data;

            const { update_construct_by_pk: updatedConstruct } =
              await sdk.UpdateConstruct({
                id: currentConstruct?.id,
                input: { [name]: value },
              });

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
    },
    [currentConstruct?.id, pid]
  );

  return (
    <Dashboard data={initialData} key={cid as string}>
      <Header as="header">
        <Label htmlFor="construct-name">
          <Icon label="Circle" />
        </Label>
        <Input
          css={{ border: 'none', flex: 1, m: 0 }}
          defaultValue={currentConstruct?.name}
          id="construct-name"
          name="name"
          onChange={debounce(handleChange, 500)}
        />
      </Header>
      {currentConstruct && (
        <ConstructDesigner
          construct_parts={currentConstruct.construct_parts}
          id={currentConstruct.id}
        />
      )}
    </Dashboard>
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

export default withPageAuthRequired(Construct);
