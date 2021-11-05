import type { CSS } from '@stitches/react';
import { memo } from 'react';

import { styled } from '../stitches.config';

export const buttonCss: CSS = {
  alignItems: 'center',
  backgroundColor: '$overlay',
  border: 'none',
  borderRadius: '$1',
  color: '$lightText',
  cursor: 'pointer',
  display: 'flex',
  fontWeight: '$body',
  justifyContent: 'space-between',
  px: '$2',
  py: '$1',
  '&:hover, &:focus': {
    backgroundColor: '$highlight',
  },
  '&.active, &:active': {
    backgroundColor: '$active',
  },
  '&:disabled, &[disabled]': {
    cursor: 'not-allowed',
    opacity: 0.5,
    pointerEvents: 'none',
  },
  variants: {
    color: {
      primary: {
        backgroundColor: '$primary',
      },
      secondary: {
        backgroundColor: '$secondary',
      },
      tertiary: {
        backgroundColor: '$quinary',

        '&:hover': {
          backgroundColor: '$senary',
          color: '$text',
          '& svg path': { stroke: '$quaternary' },
        },
      },
      transparent: {
        '&, &:hover, &:focus, &.active, &:active': {
          backgroundColor: 'transparent',
        },
        border: 'none',
        color: '$text',
      },
    },
    size: {
      small: {
        fontSize: '$2',
      },
    },
  },
};

const StyledButton = styled('button', buttonCss);

export default memo(StyledButton);
