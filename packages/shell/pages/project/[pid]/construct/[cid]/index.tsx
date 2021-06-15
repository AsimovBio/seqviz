import type { WithPageAuthRequiredProps } from '@auth0/nextjs-auth0';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { gql, request } from 'graphql-request';
import useLocalStorage from 'hooks/useLocalStorage';
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextApiRequest,
} from 'next';
import { useRouter } from 'next/router';
import { Dashboard } from 'pages';
import { useEffect } from 'react';
import useSWR from 'swr';
import requestUtil from 'utils/request';

type Props = {
  data?: unknown;
} & WithPageAuthRequiredProps;

const CONSTRUCT_QUERY = gql`
  query ConstructQuery($id: uuid!) {
    construct(where: { id: { _eq: $id } }) {
      id
      name
      construct_projects {
        project_id
      }
    }
  }
`;

export function Construct({ data: initialData }: Props) {
  const router = useRouter();
  const cid = router.query.cid || [];
  const [recentConstructs, setRecentConstructs] = useLocalStorage<unknown[]>(
    'recentConstructs',
    []
  );
  let construct;

  const { data } = useSWR(
    cid ? CONSTRUCT_QUERY : null,
    (query) => request('/api/graphql', query, { id: cid }),
    {
      initialData,
    }
  );

  if (data) {
    ({
      construct: [construct],
    } = data);
  }

  useEffect(() => {
    if (construct) {
      const existingIdx = recentConstructs.findIndex(
        ({ id }) => id === construct.id
      );
      const constructs = [...recentConstructs];

      if (existingIdx !== -1) {
        constructs.splice(existingIdx, 1, construct);
      } else {
        constructs.push(construct);
      }

      setRecentConstructs(constructs);
    }
  }, [construct, cid]);

  return (
    <Dashboard>
      <h1>Construct: {construct?.name}</h1>
    </Dashboard>
  );
}

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  returnTo: '/',
  async getServerSideProps({ req, res, query }: GetServerSidePropsContext) {
    const { cid } = query;

    let data = null;

    try {
      (req as NextApiRequest).body = {
        query: CONSTRUCT_QUERY,
        variables: { id: cid },
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

export default withPageAuthRequired(Construct);
