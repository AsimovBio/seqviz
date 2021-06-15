import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0';
import Header from 'components/header';
import Layout from 'components/layout';
import Sidebar from 'components/sidebar';
import { gql, request } from 'graphql-request';
import type { GetServerSidePropsContext, NextApiRequest } from 'next';
import { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import type { ReactNode } from 'react';
import { useCallback } from 'react';
import useSWR from 'swr';
import requestUtil from 'utils/request';

const Box: any = dynamic(() => import('common/components/box'));

type Props = {
  data?: unknown;
  children?: ReactNode;
};

const PROJECTS_QUERY = gql`
  query ProjectsQuery {
    project {
      id
      name
      description
      created_at
      project_constructs {
        construct {
          id
          name
        }
      }
    }
  }
`;

export function Dashboard({ children, data: initialData }: Props) {
  const { error, isLoading } = useUser();

  const { data } = useSWR(
    PROJECTS_QUERY,
    (query) => request('/api/graphql', query),
    {
      initialData,
    }
  );

  const handleCreate = useCallback((type) => {
    alert(`Create ${type} not yet implemented!`);
  }, []);

  const { project: projects } = data ?? {};

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
        css={{
          display: 'flex',
          flex: '1 1 auto',
          gridArea: 'main',
          justifyContent: 'stretch',
          px: '$3',
          py: '$2',
        }}
      >
        {children}
      </Box>
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  returnTo: '/',
  async getServerSideProps({ req, res }: GetServerSidePropsContext) {
    let data = null;

    try {
      (req as NextApiRequest).body = { query: PROJECTS_QUERY };
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
