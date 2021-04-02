/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC, ReactElement } from 'react';
import { jsx } from 'theme-ui';

// @ts-ignore
const Button = (await import('common/components/button')).default;

export default function Dashboard() {
  return (
    <div
      sx={{
        display: 'grid',
        flex: 1,
        gridGap: 2,
        gridTemplateColumns: '1.618fr 1fr',
        gridTemplateRows: 'auto',
      }}
    >
      <section
        sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}
      >
        <Button>I'm a federated button</Button>
      </section>
      <section sx={{ alignItems: 'center', display: 'flex' }}></section>
    </div>
  );
}
