import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useMachine } from '@xstate/react';
import type { ConstructEvent } from 'components/construct-designer/construct-machine';
import { constructMachine } from 'components/construct-designer/construct-machine';
import Header from 'components/header';
import Layout from 'components/layout';
import PartsLibrary from 'components/part-library';
import type { PartLibEvent } from 'components/part-library/part-lib-machine';
import { partLibMachine } from 'components/part-library/part-lib-machine';
import Sidebar from 'components/sidebar';
import type { PartsQuery, ProjectsQuery } from 'models/graphql';
import { PartsDocument } from 'models/graphql';
import { ProjectsDocument } from 'models/graphql';
import type { GetServerSidePropsContext, NextApiRequest } from 'next';
import type { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import { createContext } from 'react';
import { useCallback } from 'react';
import { mutate } from 'swr';
import requestUtil, { sdk } from 'utils/request';
import { createMachine, forwardTo } from 'xstate';
import type { ActorRef } from 'xstate/lib/types';

const Box: any = dynamic(() => import('common/components/box'));
const Text = dynamic(() => import('common/components/text'));

type Props = {
  data?: PartsQuery & ProjectsQuery;
  children?: ReactNode;
};

type ContextProps = {
  constructSvc: ActorRef<ConstructEvent>;
  partLibSvc: ActorRef<PartLibEvent>;
};

export const dashboardMachine = createMachine(
  {
    id: 'dashboard',
    context: {},
    initial: 'ready',
    states: {
      ready: {
        invoke: [
          {
            id: 'partLibSvc',
            src: 'partLibMachine',
          },
          {
            id: 'constructSvc',
            src: 'constructMachine',
          },
        ],
        on: {
          'PARTLIB.ENGAGE': {
            actions: forwardTo('partLibSvc'),
          },
          'PARTLIB.SELECT': { actions: forwardTo('constructSvc') },
        },
      },
    },
  },
  { services: { partLibMachine, constructMachine } }
);

export const DashboardContext = createContext<ContextProps | undefined>(
  undefined
);

function DashboardProvider({ children }) {
  const [state] = useMachine(dashboardMachine, {
    devTools: process.env.NODE_ENV === 'development',
  });

  const {
    children: { constructSvc, partLibSvc },
  } = state;

  return (
    <DashboardContext.Provider value={{ constructSvc, partLibSvc }}>
      {children}
    </DashboardContext.Provider>
  );
}

export function Dashboard({ children, data: initialData }: Props) {
  const { error, isLoading } = useUser();
  const router = useRouter();
  const pid = router.query?.pid;

  const { data, error: err } = sdk.useProjects('Projects', null, {
    initialData,
  });

  if (error || err) {
    console.error(error || err);
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
    <DashboardProvider>
      <Layout>
        {isLoading && <p>Loading...</p>}

        {error && (
          <>
            <h4>Error</h4>
            <pre>{error.message}</pre>
          </>
        )}
        <Sidebar onCreate={handleCreate} projects={projects} />
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
              '"construct detail" \
            "library detail"',
            gridTemplateColumns: '1.5fr 1fr',
            gridTemplateRows: 'max-content auto',
            justifyContent: 'stretch',
          }}
        >
          <Box
            css={{
              display: 'flex',
              flexDirection: 'column',
              gridArea: 'construct',
              justifyContent: 'space-between',
              overflow: 'hidden',
            }}
          >
            {children}
          </Box>
          <Box
            css={{
              backgroundColor: '$overlay',
              gridArea: 'detail',
              px: '$3',
              py: '$2',
            }}
          >
            <Text>Parts list</Text>
          </Box>
          <Box
            css={{
              backgroundColor: '$overlay',
              gridArea: 'library',
              px: '$3',
              py: '$2',
            }}
          >
            <Text>Parts library</Text>
            <PartsLibrary initialData={initialData} />
          </Box>
        </Box>
      </Layout>
    </DashboardProvider>
  );
}

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  returnTo: '/',
  async getServerSideProps({ req, res }: GetServerSidePropsContext) {
    let projects;
    let parts;

    try {
      (req as NextApiRequest).body = { query: ProjectsDocument };
      projects = await requestUtil(req, res);

      (req as NextApiRequest).body = { query: PartsDocument };
      parts = await requestUtil(req, res);
    } catch (err) {
      console.error(err);
    }

    if (!parts && !projects) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        data: { ...projects, ...parts },
      },
    };
  },
});

export default withPageAuthRequired(Dashboard);
