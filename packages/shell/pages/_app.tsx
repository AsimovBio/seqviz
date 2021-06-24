import { UserProvider } from '@auth0/nextjs-auth0';
import { IdProvider } from '@radix-ui/react-id';
import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import React, { StrictMode } from 'react';
import { SWRConfig } from 'swr';

const GlobalStyles = dynamic(async () => {
  const { GlobalStyles } = await import('common/components/stitches-tag');
  return GlobalStyles;
});

export default function App({ Component, pageProps }: AppProps) {
  const { user } = pageProps;

  return (
    <StrictMode>
      <GlobalStyles />
      <UserProvider user={user}>
        <SWRConfig value={{}}>
          <IdProvider>
            <Component {...pageProps} />
          </IdProvider>
        </SWRConfig>
      </UserProvider>
    </StrictMode>
  );
}
