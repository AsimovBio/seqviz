import { Root } from '@radix-ui/react-accessible-icon';

import { styled } from '../stitches.config';

type Props = { css?: any; name: string; size?: string };

export default function Icon({ css, name }: Props) {
  const Icon = styled(require('@radix-ui/react-icons')[`${name}Icon`], css);

  return (
    <Root label={name}>
      <Icon />
    </Root>
  );
}
