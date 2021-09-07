import { memo } from 'react';

import { styled } from '../stitches.config';

const StyledButton = styled('button', {
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
          '& svg path': { fill: '$quaternary' },
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
});

export default memo(StyledButton);
