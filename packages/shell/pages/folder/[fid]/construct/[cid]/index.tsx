import type { WithPageAuthRequiredProps } from '@auth0/nextjs-auth0';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import {
  DashboardContext,
  DashboardLayout,
} from 'components/layout/dashboard-layout';
import {
  ConstructDocument,
  ConstructTemplatesDocument,
  FoldersDocument,
  PartsDocument,
  PartTypesDocument,
} from 'models/graphql';
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextApiRequest,
} from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import type { Props as DashboardProps } from 'pages';
import type { NextPageWithLayout } from 'pages/_app';
import type { ReactElement } from 'react';
import { useContext } from 'react';
import { useEffect, useMemo, useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { mutate } from 'swr';
import { debounce } from 'ts-debounce';
import { getModule } from 'utils/import';
import requestUtil, { sdk } from 'utils/request';

type Props = DashboardProps & WithPageAuthRequiredProps;

const Header: any = dynamic(getModule('./components/header'), { ssr: false });
const Icon: any = dynamic(getModule('./components/icon'), { ssr: false });
const ErrorFallback: any = dynamic(getModule('./components/error-fallback'), {
  ssr: false,
});

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

export function Construct({ data: fallbackData = {} }: Props) {
  const router = useRouter();
  const { cid, fid } = router.query;
  const { send } = useContext(DashboardContext);
  const { construct, part_type } = fallbackData;

  let currentConstruct;

  const { data: constructData, error: constructError } = sdk.useConstruct(
    cid ? cid : null,
    { id: cid },
    {
      fallbackData: { construct },
    }
  );

  if (constructData) {
    ({
      construct: [currentConstruct],
    } = constructData);
  }

  const { data: partTypesData, error: partTypesError } = sdk.usePartTypes(
    fid ? 'PartTypes' : null,
    null,
    {
      fallbackData: { part_type },
    }
  );
  const { part_type: partTypes } = partTypesData ?? {};

  useEffect(() => {
    if (currentConstruct) {
      send({
        type: 'OPEN_CONSTRUCT',
        value: currentConstruct,
      });
    }
  }, [currentConstruct, send]);

  const updateFolders = useMemo(
    () =>
      debounce(async (name, value) => {
        const { update_construct_by_pk: updatedConstruct } =
          await sdk.UpdateConstruct({
            id: currentConstruct?.id,
            input: { [name]: value },
          });

        mutate('Folders', async (data) => {
          if (data) {
            try {
              const { folder: folders } = data;

              const activeFolder = folders.find(({ id }) => id === fid);

              if (activeFolder) {
                const filteredConstructs = activeFolder.constructs.filter(
                  ({ id }) => id !== updatedConstruct.id
                );
                activeFolder.constructs = [
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
    [cid, currentConstruct, fid]
  );

  const handleChange = ({ target: { name, value } }) => {
    setInputValue(value);
    updateFolders(name, value);
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
          <Icon label="DotsCircleHorizontal" />
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
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <ConstructDesigner
            construct={currentConstruct}
            partTypes={partTypes}
          />
        </ErrorBoundary>
      )}
    </>
  );
}

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  returnTo: '/',
  async getServerSideProps({ req, res, query }: GetServerSidePropsContext) {
    const { cid } = query;
    let folders;
    let parts;
    let partTypes;
    let construct;
    let templates;

    try {
      // TODO: create a combined query for the initial payload
      (req as NextApiRequest).body = { query: FoldersDocument };
      folders = await requestUtil(req, res);

      (req as NextApiRequest).body = { query: PartsDocument };
      parts = await requestUtil(req, res);

      (req as NextApiRequest).body = { query: PartTypesDocument };
      partTypes = await requestUtil(req, res);

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
        data: {
          ...construct,
          ...folders,
          ...partTypes,
          ...parts,
          ...templates,
        },
      },
    };
  },
});

const ConstructPage: NextPageWithLayout = withPageAuthRequired(Construct);

ConstructPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout {...page.props}>{page}</DashboardLayout>;
};

export default ConstructPage;
