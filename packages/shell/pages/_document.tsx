/* eslint-disable @next/next/no-sync-scripts */
import Document, { Head, Html, Main, NextScript } from 'next/document';
import dynamic from 'next/dynamic';

const StitchesTag = dynamic(() => import('common/components/stitches-tag'));

export default class CustomDocument extends Document {
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
