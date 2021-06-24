import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Header from 'components/header';
import Layout from 'components/layout';
import Sidebar from 'components/sidebar';
import type { ProjectsQuery } from 'models/graphql';
import type { GetServerSidePropsContext, NextApiRequest } from 'next';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import { useCallback } from 'react';
import { mutate } from 'swr';
import requestUtil, { sdk } from 'utils/request';

const Box: any = dynamic(() => import('common/components/box'));
const Text = dynamic(() => import('common/components/text'));

type Props = {
  data?: ProjectsQuery;
  children?: ReactNode;
};

export function Dashboard({ children, data: initialData }: Props) {
  const { error, isLoading } = useUser();
  const router = useRouter();
  const pid = router.query?.pid;

  const { data, error: err } = sdk.useProjects('Projects', null, {
    initialData,
  });

  if (err) {
    console.error(err);
  }

  const { project: projects } = data ?? {};

  const handleCreate = useCallback(
    (type) => {
      switch (type) {
        case 'project':
          mutate('Projects', async (data) => {
            try {
              const { insert_project_one: newProject } =
                await sdk.CreateProject({
                  input: { name: 'New project', description: '' },
                });

              data.project.push(newProject);
            } catch (err) {
              console.error(err);
            }
            return data;
          });

          break;
        case 'construct':
          if (!pid) break;
          mutate('Projects', async (data) => {
            try {
              const { project: projects } = data;

              const { insert_construct_one: construct } =
                await sdk.CreateConstruct({
                  input: { name: 'New construct' },
                });

              await sdk.CreateProjectConstruct({
                input: { project_id: pid, construct_id: construct.id },
              });

              const activeProject = projects.find(({ id }) => id === pid);

              if (activeProject) {
                activeProject.project_constructs.push({ construct });
              }
            } catch (err) {
              console.error(err);
            }

            return data;
          });
          break;
        default:
          break;
      }
    },
    [pid]
  );

  return (
    <Layout>
      {isLoading && <p>Loading...</p>}

      {error && (
        <>
          <h4>Error</h4>
          <pre>{error.message}</pre>
        </>
      )}
      <Sidebar projects={projects} onCreate={handleCreate} />
      <Header />
      <Box
        as="main"
        css={{
          backgroundColor: '$background',
          display: 'grid',
          flex: '1 1 auto',
          gridArea: 'main',
          gridGap: '$1',
          gridTemplateAreas:
            '"construct parts" \
            "simulation parts"',
          gridTemplateColumns: '1.5fr 1fr',
          gridTemplateRows: '1fr 2fr',
          justifyContent: 'stretch',
        }}
      >
        <Box
          css={{
            gridArea: 'construct',
          }}
        >
          {children}
        </Box>
        <Box
          css={{
            backgroundColor: '$overlay',
            gridArea: 'parts',
            px: '$3',
            py: '$2',
          }}
        >
          <Text>Parts</Text>
        </Box>
        <Box
          css={{
            backgroundColor: '$overlay',
            gridArea: 'simulation',
            px: '$3',
            py: '$2',
          }}
        >
          <Text>Simulation</Text>
        </Box>
      </Box>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  returnTo: '/',
  async getServerSideProps({ req, res }: GetServerSidePropsContext) {
    let data = null;

    try {
      (req as NextApiRequest).body = { query: 'Projects' };
      data = await requestUtil(req, res);
    } catch (err) {
      console.error(err);
    }

    if (!data) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        data,
      },
    };
  },
});

export default withPageAuthRequired(Dashboard);
