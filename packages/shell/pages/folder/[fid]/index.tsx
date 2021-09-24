import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { DashboardLayout } from 'components/layout/dashboard-layout';
import {
  ConstructTemplatesDocument,
  FoldersDocument,
  PartsDocument,
} from 'models/graphql';
import type { GetServerSideProps, NextApiRequest } from 'next';
import type { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';
import type { NextPageWithLayout } from 'pages/_app';
import type { ReactElement } from 'react';
import { getModule } from 'utils/import';
import requestUtil from 'utils/request';

const Text: any = dynamic(getModule('./components/text'), { ssr: false });

export function Folder() {
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
    let folders;
    let parts;
    let templates;

    try {
      // TODO: create a combined query for the initial payload
      (req as NextApiRequest).body = { query: FoldersDocument };
      folders = await requestUtil(req, res);

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
        data: { ...folders, ...parts, ...templates },
      },
    };
  },
});

const FolderPage: NextPageWithLayout = withPageAuthRequired(Folder);

FolderPage.getLayout = function getLayout(page: ReactElement) {
  return <DashboardLayout {...page.props}>{page}</DashboardLayout>;
};

export default FolderPage;
