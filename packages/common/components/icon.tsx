import { Root } from '@radix-ui/react-accessible-icon';
import * as icons from '@radix-ui/react-icons';
import type { ReactNode } from 'react';
import { memo } from 'react';

import { styled } from '../stitches.config';

const iconsMap = Object.fromEntries(Object.entries(icons));

type Props = { children?: ReactNode; label: keyof typeof iconsMap; css?: any };

const iconDefault = iconsMap['SquareIcon'];

function Icon({ children, label, css }: Props) {
  const Icon = styled(iconsMap[`${label}Icon`] ?? iconDefault, {});

  return <Root label={label as string}>{children ?? <Icon css={css} />}</Root>;
}

export default memo(Icon);
