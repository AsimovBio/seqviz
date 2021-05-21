import { UserProvider } from '@auth0/nextjs-auth0';
import type { AppProps } from 'next/app';
import React, { StrictMode } from 'react';
import { SWRConfig } from 'swr';
import { ThemeProvider } from 'theme-ui';
import theme from '../utils/theme';

export default function App({ Component, pageProps }: AppProps) {
  const { user } = pageProps;

  return (
    <StrictMode>
      <UserProvider user={user}>
        <SWRConfig value={{}}>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </SWRConfig>
      </UserProvider>
    </StrictMode>
  );
}
