import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { DashboardLayout } from 'components/layout/dashboard-layout';
import type {
  ConstructQuery,
  ConstructTemplatesQuery,
  PartsQuery,
  ProjectsQuery,
} from 'models/graphql';
import { PartsDocument } from 'models/graphql';
import { ProjectsDocument } from 'models/graphql';
import type { GetServerSidePropsContext, NextApiRequest } from 'next';
import type { GetServerSideProps } from 'next';
import dynamic from 'next/dynamic';
import type { ReactElement, ReactNode } from 'react';
import { getModule } from 'utils/import';
import requestUtil from 'utils/request';

type DashboardQuery = PartsQuery &
  ProjectsQuery &
  ConstructQuery &
  ConstructTemplatesQuery;

export type Props = {
  data?: Partial<DashboardQuery>;
  children?: ReactNode;
};

const Text: any = dynamic(getModule('./components/text'), { ssr: false });

const Dashboard = () => {
  return (
    <Text
      css={{ px: '$3', py: '$6', textAlign: 'center', color: '$mutedText' }}
    >
      Select a Construct from the sidebar to view it here
    </Text>
  );
};

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

const DashboardPage = withPageAuthRequired(Dashboard);

DashboardPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default DashboardPage;
