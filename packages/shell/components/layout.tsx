/** @jsxRuntime classic */
/** @jsx jsx */
import Head from 'next/head';
import type { FC, ReactElement, ReactNode } from 'react';
import React, { Suspense } from 'react';
import { jsx } from 'theme-ui';

import Header from './header';

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Asimov – Intelligent Design of Living Systems</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header />
        <main
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            justifyContent: 'stretch',
          }}
        >
          {children}
        </main>
        <footer sx={{ bg: 'primary', p: 3 }}>Footer</footer>
      </div>
    </>
  );
}
