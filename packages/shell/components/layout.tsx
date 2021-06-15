import dynamic from 'next/dynamic';
import Head from 'next/head';
import type { ReactNode } from 'react';
import React from 'react';

const Box: any = dynamic(() => import('common/components/box'));

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
  return (
    <>
      <Head>
        <title>Asimov – Intelligent Design of Living Systems</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" />
        <meta name="msapplication-TileColor" content="#6d08f6" />
        <meta name="theme-color" content="#F8F8F8" />
      </Head>
      <Box
        css={{
          display: 'grid',
          gridTemplateColumns: 'auto 1fr',
          gridTemplateRows: '2.75em 1fr',
          gridTemplateAreas:
            '"sidebar header" \
            "sidebar main" \
            "sidebar footer"',
          gridGap: '$1',
          p: '$1',
          minHeight: '100vh',
          '> *': {
            backgroundColor: '$overlay',
          },
        }}
      >
        {children}
      </Box>
    </>
  );
}
