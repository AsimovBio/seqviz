import { patchSharing } from '@module-federation/nextjs-mf';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { InitializeColorMode } from 'theme-ui';

export default class CustomDocument extends Document<unknown> {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        {patchSharing()}
        <script
          src={`${process.env.NEXT_PUBLIC_FEDERATED_URL_COMMON}/_next/static/runtime/remoteEntry.js`}
        />
        <Head />
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
