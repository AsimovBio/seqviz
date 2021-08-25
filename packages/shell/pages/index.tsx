import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { useMachine } from '@xstate/react';
import { dashboardMachine } from 'components/dashboard/dashboard-machine';
import Layout from 'components/layout';
import PartsLibrary from 'components/part-library';
import ProjectPageHeader from 'components/project-page-header';
import Sidebar from 'components/sidebar';
import type {
  Construct,
  ConstructQuery,
  ConstructTemplatesQuery,
  PartsQuery,
  Project,
  ProjectsQuery,
} from 'models/graphql';
import { PartsDocument } from 'models/graphql';
import { ProjectsDocument } from 'models/graphql';
import type { GetServerSidePropsContext, NextApiRequest } from 'next';
import type { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import requestUtil, { sdk } from 'utils/request';

const Box: any = dynamic(() => import('common/components/box'));
const Header: any = dynamic(() => import('common/components/header'));
const ScrollContainer: any = dynamic(
  () => import('common/components/scroll-container')
);
const Text = dynamic(() => import('common/components/text'));

type DashboardQuery = PartsQuery &
  ProjectsQuery &
  ConstructQuery &
  ConstructTemplatesQuery;

export type Props = {
  data?: Partial<DashboardQuery>;
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

export function Dashboard({ children, data: initialData = {} }: Props) {
  const router = useRouter();
  const pid = router.query?.pid;
  const { part, project, template } = initialData;

  const [state, send, service] = useMachine<any, any>(dashboardMachine, {
    devTools: process.env.NODE_ENV === 'development',
  });

  const [isMenuActive, setMenuActive] = useState(false);
  const { newConstruct, newProject } = state.context;
  const { error: userError, isLoading } = useUser();

  const { data: projectsData, error: projectsError } = sdk.useProjects(
    'Projects',
    null,
    {
      initialData: { project },
    }
  );

  const { data: templatesData, error: templatesError } =
    sdk.useConstructTemplates(pid ? 'Templates' : null, null, {
      initialData: { template },
    });

  if (userError || projectsError || templatesError) {
    console.error(userError || projectsError || templatesError);
  }

  const { project: projects } = projectsData ?? {};
  const { template: templates } = templatesData ?? {};

  const currentProject = projects?.find((project) => project.id === pid);

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

    send('BOOTSTRAP', {
      newProject: null,
      newConstruct: null,
    });
  }, [newConstruct, newProject, pid, router, send]);

  return isLoading ? (
    <p>Loading…</p>
  ) : (
    <DashboardContext.Provider value={{ state, send, service }}>
      <Layout>
        <Sidebar />
        <ProjectPageHeader
          currentProject={currentProject as Partial<Project>}
          setMenuActive={setMenuActive}
          templates={templates as Construct[]}
        />
        <Box
          as="main"
          css={{
            backgroundColor: '$background',
            display: 'grid',
            flex: '1 1 auto',
            gridArea: 'main',
            gridGap: '$1',
            gridTemplateAreas: '"construct" \
              "library"',
            gridTemplateColumns: 'auto',
            gridTemplateRows: 'max-content 1fr',
            justifyContent: 'stretch',
            position: 'relative',
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
              gridArea: 'library',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Header as="header">
              <Text font="bold" size={1} uppercase>
                Genetic Parts Library
              </Text>
            </Header>
            <ScrollContainer>
              <PartsLibrary initialData={{ part }} />
            </ScrollContainer>
          </Box>
          {isMenuActive && (
            <Box
              css={{
                backgroundColor: '$muted',
                bottom: 0,
                left: 0,
                opacity: 0.6,
                pointerEvents: false,
                position: 'absolute',
                right: 0,
                top: 0,
                zIndex: 3,
              }}
            />
          )}
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
      // TODO: create a combined query for the initial payload
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
