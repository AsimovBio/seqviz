import Layout from '../components/layout';
import { getSession, useUser } from '@auth0/nextjs-auth0';
import useSWR from 'swr';
import { getAccessToken, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { gql, request } from 'graphql-request';
import { GetServerSideProps } from 'next';
import Dashboard from '../components/dashboard';

const PROJECTS_QUERY = gql`
  query ProjectsQuery {
    project {
      id
      name
      description
      created_at
      project_constructs {
        construct {
          name
        }
      }
    }
  }
`;

function App({ data: initialData }) {
  const { error, isLoading } = useUser();

  const { data } = useSWR(
    PROJECTS_QUERY,
    (query) => request('/api/graphql', query),
    {
      initialData,
    }
  );

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

      <Dashboard projects={projects} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  returnTo: '/',
  async getServerSideProps({ req, res }) {
    let data = null;
    const client = require('./api/graphql').client;

    try {
      const { idToken } = await getSession(req, res);

      if (!idToken) {
        throw new Error('invalid session!');
      }

      client.setHeader('authorization', `Bearer ${idToken}`);

      data = await client.request(PROJECTS_QUERY);
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

export default withPageAuthRequired(App);
