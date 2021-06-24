import { styled } from '../stitches.config';

const StyledButton = styled('button', {
  alignItems: 'center',
  backgroundColor: '$overlay',
  border: 'none',
  color: 'inherit',
  display: 'flex',
  fontWeight: '$bold',
  justifyContent: 'space-between',
  p: '$2',
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

export default function Button({ children, ...props }) {
  return (
    <StyledButton type="button" {...props}>
      {children}
    </StyledButton>
  );
}
