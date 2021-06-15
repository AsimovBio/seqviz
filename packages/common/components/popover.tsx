import { Arrow, Content, Root, Trigger } from '@radix-ui/react-popover';
import type { ReactNode } from 'react';

import { styled } from '../stitches.config';

type Props = { children: ReactNode; content: ReactNode };

const StyledContent = styled(Content, {
  borderRadius: 3,
  padding: '$1',
  backgroundColor: '$background',
  boxShadow: '$primary',
});

const StyledArrow = styled(Arrow, {
  fill: '$overlay',
});

const StyledTrigger = styled(Trigger, {
  alignItems: 'center',
  backgroundColor: '$overlay',
  border: 'none',
  borderRadius: 0,
  display: 'flex',
  p: '$1',
  '&:hover, &:focus': {
    backgroundColor: '$highlight',
  },
  '&.active, &:active': {
    backgroundColor: '$active',
  },
});

export default function Popover({ children, content }: Props) {
  return (
    <Root>
      <StyledTrigger>{children}</StyledTrigger>
      <StyledContent>
        <StyledArrow />
        {content}
      </StyledContent>
    </Root>
  );
}
