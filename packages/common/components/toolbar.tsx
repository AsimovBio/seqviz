import { Button, Link, Root, Separator } from '@radix-ui/react-toolbar';

import { styled } from '../stitches.config';
import { buttonCss } from './button';

export const StyledRoot = styled(Root, {
  backgroundColor: '$background',
  display: 'flex',
  justifyContent: 'center',
});
export const StyledButton = styled(Button, buttonCss);
export const StyledLink = styled(Link, {});
export const StyledSeparator = styled(Separator, {});
