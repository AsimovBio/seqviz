import type { WithPageAuthRequiredProps } from '@auth0/nextjs-auth0';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { gql, request } from 'graphql-request';
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextApiRequest,
} from 'next';
import { useRouter } from 'next/router';
import { Dashboard } from 'pages';
import useSWR from 'swr';
import requestUtil from 'utils/request';

type Props = {
  data?: unknown;
} & WithPageAuthRequiredProps;

const PROJECT_QUERY = gql`
  query ProjectQuery($id: uuid!) {
    project(where: { id: { _eq: $id } }) {
      id
      name
    }
  }
`;

export function Project({ data: initialData }: Props) {
  const router = useRouter();
  const pid = router.query.pid || [];
  let project;

  const { data } = useSWR(
    pid ? PROJECT_QUERY : null,
    (query) => request('/api/graphql', query, { id: pid }),
    {
      initialData,
    }
  );

  if (data) {
    ({
      project: [project],
    } = data);
  }

  return (
    <Dashboard>
      <h1>Project: {project?.name}</h1>
    </Dashboard>
  );
}

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  returnTo: '/',
  async getServerSideProps({ req, res, query }: GetServerSidePropsContext) {
    const { pid } = query;
    let data = null;

    try {
      (req as NextApiRequest).body = {
        query: PROJECT_QUERY,
        variables: { id: pid },
      };
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

export default withPageAuthRequired(Project);
