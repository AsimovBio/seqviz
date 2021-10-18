import type { DropdownMenuProps } from '@radix-ui/react-dropdown-menu';
import { Content, Item, Root, Trigger } from '@radix-ui/react-dropdown-menu';
import type { ReactNode } from 'react';
import React from 'react';

import { styled } from '../stitches.config';
import { buttonCss } from './button';

type Props = { children: ReactNode; content: ReactNode } & DropdownMenuProps;

export const StyledTrigger = styled(Trigger, buttonCss);

const StyledContent = styled(Content, {
  backgroundColor: '$overlay',
  borderRadius: 0,
});

export const StyledItem = styled(Item, {
  alignItems: 'center',
  display: 'flex',
  px: '$2',
  py: '$3',
  '&:hover, &:focus, &.active, &:active': {
    backgroundColor: '$active',
    color: '$quaternary',
  },
  '&:focus-visible': {
    outline: 'none',
  },
  '&[data-disabled]': { color: '$mutedText' },
});

export default function DropdownMenu({
  children,
  content,
  onOpenChange,
}: Props) {
  return (
    <Root onOpenChange={onOpenChange}>
      {children}
      <StyledContent align="start" avoidCollisions={false} loop sideOffset={14}>
        {content}
      </StyledContent>
    </Root>
  );
}
