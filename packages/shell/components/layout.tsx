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
          href="/apple-touch-icon.png"
          rel="apple-touch-icon"
          sizes="180x180"
        />
        <link
          href="/favicon-32x32.png"
          rel="icon"
          sizes="32x32"
          type="image/png"
        />
        <link
          href="/favicon-16x16.png"
          rel="icon"
          sizes="16x16"
          type="image/png"
        />
        <link href="/site.webmanifest" rel="manifest" />
        <link href="/safari-pinned-tab.svg" rel="mask-icon" />
        <meta content="#6d08f6" name="msapplication-TileColor" />
        <meta content="#F8F8F8" name="theme-color" />
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
