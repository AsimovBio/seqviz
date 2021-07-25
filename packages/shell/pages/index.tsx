import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useMachine } from '@xstate/react';
import { dashboardMachine } from 'components/dashboard/dashboard-machine';
import { default as PageHeader } from 'components/header';
import Layout from 'components/layout';
import PartsLibrary from 'components/part-library';
import Sidebar from 'components/sidebar';
import type { PartsQuery, ProjectsQuery } from 'models/graphql';
import { PartsDocument } from 'models/graphql';
import { ProjectsDocument } from 'models/graphql';
import type { GetServerSidePropsContext, NextApiRequest } from 'next';
import type { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import requestUtil, { sdk } from 'utils/request';

const Box: any = dynamic(() => import('common/components/box'));
const Header: any = dynamic(() => import('common/components/header'));
const Text = dynamic(() => import('common/components/text'));

type Props = {
  data?: PartsQuery & ProjectsQuery;
  children?: ReactNode;
};

type ContextProps = {
  send: any;
  service: any;
  state: any;
};

export const DashboardContext = createContext<ContextProps | undefined>(
  undefined
);

export function Dashboard({ children, data: initialData }: Props) {
  const router = useRouter();
  const pid = router.query?.pid;
  const [state, send, service] = useMachine<any, any>(dashboardMachine, {
    devTools: process.env.NODE_ENV === 'development',
  });
  const { newConstruct, newProject } = state.context;
  const { error, isLoading } = useUser();

  const { data, error: err } = sdk.useProjects('Projects', null, {
    initialData,
  });

  if (error || err) {
    console.error(error || err);
  }

  const { project: projects } = data ?? {};

  useEffect(() => {
    send('BOOTSTRAP', {
      projects,
    });
  }, [projects, send]);

  useEffect(() => {
    let url;

    if (!newProject && !newConstruct) {
      return;
    }

    if (newProject) {
      url = `/project/${newProject.id}`;
    } else if (newConstruct) {
      url = `/project/${pid}/construct/${newConstruct.id}`;
    }

    router.push(url);
  }, [newConstruct, newProject, pid, router]);

  return isLoading ? (
    <p>Loading…</p>
  ) : (
    <DashboardContext.Provider value={{ state, send, service }}>
      <Layout>
        <Sidebar />
        <PageHeader />
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
              gridArea: 'detail',
            }}
          >
            <Header as="header">
              <Text>Parts list</Text>
            </Header>
          </Box>
          <Box
            css={{
              gridArea: 'library',
            }}
          >
            <Header as="header">
              <Text>Parts library</Text>
            </Header>
            <PartsLibrary initialData={initialData} />
          </Box>
        </Box>
      </Layout>
    </DashboardContext.Provider>
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
