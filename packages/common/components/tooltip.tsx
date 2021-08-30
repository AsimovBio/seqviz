import type { TooltipContentOwnProps } from '@radix-ui/react-tooltip';
import { Arrow, Content, Root, Trigger } from '@radix-ui/react-tooltip';
import type { ReactElement, ReactNode } from 'react';

import { styled } from '../stitches.config';

type Props = {
  children: ReactElement<any, any>;
  content: ReactNode;
  disabled?: boolean;
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
  alignItems: 'center',
  background: 'transparent',
  border: 'none',
  display: 'flex',
  p: 0,
});

export default function Tooltip({
  children,
  content,
  disabled = false,
  ...props
}: Props) {
  return disabled ? (
    children
  ) : (
    <Root>
      <StyledTrigger>{children}</StyledTrigger>
      <StyledContent {...props}>
        {content}
        <StyledArrow />
      </StyledContent>
    </Root>
  );
}
