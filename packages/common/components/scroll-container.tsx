import type { ReactNode } from 'react';

import { styled } from '../stitches.config';
import Box from './box';

type Props = { children: ReactNode; maxHeight?: string };

const ScrollContainer = ({ children, maxHeight, ...props }: Props) => {
  if (maxHeight) {
    return <Box css={{ maxHeight, overflowY: 'auto' }}>{children}</Box>;
  }
  return (
    <Box
      {...props}
      css={{
        flex: 1,
        overflowY: 'auto',
        position: 'relative',
      }}
    >
      <Box
        css={{
          position: 'absolute',
          width: '100%',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default styled(ScrollContainer, {});
