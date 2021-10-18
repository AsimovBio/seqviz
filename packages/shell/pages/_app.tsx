import { UserProvider } from '@auth0/nextjs-auth0';
import { IdProvider } from '@radix-ui/react-id';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import type { ReactElement, ReactNode } from 'react';
import React, { StrictMode } from 'react';
import { SWRConfig } from 'swr';

const GlobalStyles = dynamic(async () => {
  const { GlobalStyles } = await import('common/components/stitches-tag');
  return GlobalStyles;
});

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const { user } = pageProps;

  const pageContent = getLayout(<Component {...pageProps} />);

  return (
    <StrictMode>
      <GlobalStyles />
      <UserProvider user={user}>
        <SWRConfig
          value={{
            dedupingInterval: 150000,
            fetcher: fetch,
            focusThrottleInterval: 15000,
          }}
        >
          <IdProvider>{pageContent}</IdProvider>
        </SWRConfig>
      </UserProvider>
    </StrictMode>
  );
}
