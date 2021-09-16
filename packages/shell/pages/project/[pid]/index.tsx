import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { DashboardLayout } from 'components/layout/dashboard-layout';
import {
  ConstructTemplatesDocument,
  PartsDocument,
  ProjectsDocument,
} from 'models/graphql';
import type { GetServerSideProps, NextApiRequest } from 'next';
import type { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';
import type { ReactElement } from 'react';
import { getModule } from 'utils/import';
import requestUtil from 'utils/request';

const Text: any = dynamic(getModule('./components/text'), { ssr: false });

export function Project() {
  return (
    <Text
      css={{ px: '$3', py: '$6', textAlign: 'center', color: '$mutedText' }}
    >
      Create a new Construct or select an existing Construct from the sidebar
    </Text>
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

const ProjectPage = withPageAuthRequired(Project);

ProjectPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export default ProjectPage;
