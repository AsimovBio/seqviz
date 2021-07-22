/* eslint-disable @next/next/no-sync-scripts */
import type { GetServerSideProps } from 'next';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import dynamic from 'next/dynamic';
import { resetServerContext } from 'react-beautiful-dnd';

const StitchesTag = dynamic(() => import('common/components/stitches-tag'));

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            src={`${process.env.NEXT_PUBLIC_FEDERATED_URL_COMMON}/_next/static/runtime/remoteEntry.js`}
          />
          <StitchesTag />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export const getServerSideProps: GetServerSideProps = async () => {
  /**
   * resetServerContext is react-beautiful-dnd's solution for working with SSR:
   * https://github.com/atlassian/react-beautiful-dnd/blob/master/docs/api/reset-server-context.md
   */
  resetServerContext();
  return { props: {} };
};
