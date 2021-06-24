import { styled } from '../stitches.config';

export const Input = styled('input', {
  '&:focus-visible': { outline: '$active auto 1px;' },
});

export const Label = styled('label', {
  alignItems: 'center',
  display: 'flex',
});

export default styled('form', {});
