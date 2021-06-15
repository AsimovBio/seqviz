import type { TooltipContentOwnProps } from '@radix-ui/react-tooltip';
import { Arrow, Content, Root, Trigger } from '@radix-ui/react-tooltip';
import type { ReactNode } from 'react';

import { styled } from '../stitches.config';

type Props = {
  children: ReactNode;
  content: ReactNode;
} & TooltipContentOwnProps;

const StyledContent = styled(Content, {
  backgroundColor: '$overlay',
  borderRadius: '$2',
  boxShadow: '$small',
  p: '$2',
});

const StyledArrow = styled(Arrow, {
  fill: '$overlay',
});

const StyledTrigger = styled(Trigger, {
  background: 'transparent',
  border: 'none',
  p: 0,
});

export default function Tooltip({ children, content, ...props }: Props) {
  return (
    <Root>
      <StyledTrigger>{children}</StyledTrigger>
      <StyledContent {...props}>
        {content}
        <StyledArrow />
      </StyledContent>
    </Root>
  );
}
