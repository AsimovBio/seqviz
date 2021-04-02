import { patchSharing } from '@module-federation/nextjs-mf';
import Document, { Head, Html, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document<unknown> {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        {patchSharing()}
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
