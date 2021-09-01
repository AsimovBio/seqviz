import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import {
  ConstructTemplatesDocument,
  PartsDocument,
  ProjectsDocument,
} from 'models/graphql';
import type { GetServerSideProps, NextApiRequest } from 'next';
import type { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import type { Props as DashboardProps } from 'pages';
import { Dashboard } from 'pages';
import type { ReactNode } from 'react';
import { getModule } from 'utils/import';
import requestUtil from 'utils/request';

const Text: any = dynamic(getModule('./components/text'), { ssr: false });

type Props = DashboardProps & {
  children?: ReactNode;
};

export function Project({ data: initialData }: Props) {
  const router = useRouter();
  const pid = router.query?.pid;

  return (
    <Dashboard data={initialData} key={pid as string}>
      <Text
        css={{ px: '$3', py: '$6', textAlign: 'center', color: '$mutedText' }}
      >
        Create a new Construct or select an existing Construct from the sidebar
      </Text>
    </Dashboard>
  );
}

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  returnTo: '/',
  async getServerSideProps({ req, res }: GetServerSidePropsContext) {
    let projects;
    let parts;
    let templates;

    try {
      // TODO: create a combined query for the initial payload
      (req as NextApiRequest).body = { query: ProjectsDocument };
      projects = await requestUtil(req, res);

      (req as NextApiRequest).body = { query: PartsDocument };
      parts = await requestUtil(req, res);

      (req as NextApiRequest).body = { query: ConstructTemplatesDocument };
      templates = await requestUtil(req, res);
    } catch (err) {
      console.error(err);
    }

    if (!templates) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        data: { ...projects, ...parts, ...templates },
      },
    };
  },
});

export default withPageAuthRequired(Project);
