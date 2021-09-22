import { useUser } from '@auth0/nextjs-auth0';
import { useMachine } from '@xstate/react';
import { dashboardMachine } from 'components/dashboard/dashboard-machine';
import FolderPageHeader from 'components/folder-page-header';
import Layout from 'components/layout/base-layout';
import PartsLibrary from 'components/part-library';
import Sidebar from 'components/sidebar';
import type {
  Construct,
  ConstructQuery,
  ConstructTemplatesQuery,
  Folder,
  FoldersQuery,
  PartsQuery,
} from 'models/graphql';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { sdk } from 'utils/request';

const Box: any = dynamic(() => import('common/components/box'));
const Header: any = dynamic(() => import('common/components/header'));
const ScrollContainer: any = dynamic(
  () => import('common/components/scroll-container')
);
const Text = dynamic(() => import('common/components/text'));

type DashboardQuery = PartsQuery &
  FoldersQuery &
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

export function DashboardLayout({ children, data: initialData = {} }: Props) {
  const router = useRouter();
  const fid = router.query?.fid;
  const isNew = router.query ? router.query['is-new'] === 'true' : false;
  const { folder, template } = initialData;
  const persistedConstructs =
    typeof window !== 'undefined' && localStorage.getItem('recentConstructs');

  const [state, send, service] = useMachine<any, any>(dashboardMachine, {
    devTools: process.env.NODE_ENV === 'development',
    context: {
      recentConstructs: persistedConstructs
        ? JSON.parse(persistedConstructs)
        : [],
    },
  });

  const [isMenuActive, setMenuActive] = useState(false);
  const { newConstruct, newFolder } = state.context;
  const { error: userError, isLoading } = useUser();

  const { data: foldersData, error: foldersError } = sdk.useFolders(
    'Folders',
    null,
    {
      initialData: { folder },
      revalidateOnMount: true,
    }
  );

  const { data: templatesData, error: templatesError } =
    sdk.useConstructTemplates(fid ? 'Templates' : null, null, {
      initialData: { template },
    });

  if (userError || foldersError || templatesError) {
    console.error(userError || foldersError || templatesError);
  }

  const { folder: folders } = foldersData ?? {};
  const { template: templates } = templatesData ?? {};

  const currentFolder = folders?.find((folder) => folder.id === fid);

  useEffect(() => {
    const recentConstructs = persistedConstructs
      ? JSON.parse(persistedConstructs)
      : [];

    send('BOOTSTRAP', {
      folders,
      recentConstructs,
    });
  }, [folders, persistedConstructs, send]);

  useEffect(() => {
    let url;

    if (!newFolder && !newConstruct) {
      return;
    }

    if (newFolder) {
      url = `/folder/${newFolder.id}?is-new=true`;
    } else if (newConstruct) {
      url = `/folder/${fid}/construct/${newConstruct.id}`;
    }

    router.push(url);

    send('BOOTSTRAP', {
      newFolder: null,
      newConstruct: null,
    });
  }, [newConstruct, newFolder, fid, router, send]);

  const handleResetUrl = () => {
    const [path] = router.asPath.split('?');
    router.push(path, undefined, { shallow: true });
  };

  return isLoading ? (
    <p>Loading…</p>
  ) : (
    <DashboardContext.Provider value={{ state, send, service }}>
      <Layout>
        <Sidebar />
        <FolderPageHeader
          currentFolder={currentFolder as Partial<Folder>}
          isNewFolder={!!isNew}
          resetUrl={handleResetUrl}
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
              minHeight: '18.25em',
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
              <PartsLibrary />
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
