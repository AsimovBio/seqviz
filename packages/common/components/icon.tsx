import * as icons from '@heroicons/react/outline';
import { Root } from '@radix-ui/react-accessible-icon';
import type { ReactNode } from 'react';
import { memo } from 'react';

import { styled } from '../stitches.config';

const iconsMap = Object.fromEntries(Object.entries(icons));

function SquareIcon(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        height="16"
        rx="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        width="16"
        x="4"
        y="4"
      />
    </svg>
  );
}
SquareIcon.toString = () => 'SquareIcon';

Object.assign(iconsMap, {
  SquareIcon,
});

type Props = { children?: ReactNode; label: keyof typeof iconsMap; css?: any };

function Icon({ children, label = 'Square', css }: Props) {
  const StyledIcon = styled(iconsMap[`${label}Icon`], {
    height: '1rem',
    width: '1rem',
  });

  return (
    <Root label={label as string}>{children ?? <StyledIcon css={css} />}</Root>
  );
}

export default memo(Icon);
