import type { MouseEvent } from 'react';
import { SyntheticEvent, useRef } from 'react';
import { memo } from 'react';
import { debounce } from 'ts-debounce';

import { styled } from '../stitches.config';
import Button from './button';
import Glyph from './glyph';

export type Props = {
  context: {
    index: number;
    isActive: boolean;
    isColored: boolean;
    orientation: 'forward' | 'reverse';
    part: { type: { glyph: string; slug: string }; name: string };
  };
  onEvent: (event: string | { type: string; [key: string]: unknown }) => void;
};

export const StyledPartWrapper = styled(Button, {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  lineHeight: 0,
  padding: 0,
  position: 'relative',
  transformOrigin: 'center center',
  transition: '$standard',
  cursor: 'text',
  '&.reverse': {
    transform: 'rotate(180deg)',
  },
  '&::after': {
    backgroundColor: '$text',
    content: '',
    height: '2px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '100%',
    zIndex: 0,
  },
});

const PART_TYPE_COLOR_MAP = {
  '5-utr': '$senary',
  'polyadenylation-signal': '$octonary',
  '3-utr': '$senary',
  cds: '$denary',
  'pol-ii-promoter': '$nonary',
  'fluorescent-protein': '$senary',
  'selection-system': '$denary',
  'heavy-chain': '$denary',
  'light-chain': '$denary',
  'nuclear-trafficking-tag': '$senary',
};

function MiniController({
  context: {
    isActive,
    orientation,
    part: {
      name,
      type: { glyph },
    },
  },
  onEvent,
}: Props) {
  const handleMouseDown = () => {
    onEvent({ type: 'SELECT_START' });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (e.buttons !== 1 || e.isDefaultPrevented()) {
      return;
    }

    onEvent('ACTIVATE');
  };

  const handleMouseEnter = ({ buttons }: MouseEvent) => {
    if (buttons === 1) {
      onEvent('SELECT_CHANGE');
    }
  };

  let className = orientation;

  if (isActive) {
    className += ' active';
  }

  return (
    <StyledPartWrapper
      className={className}
      css={{
        color: 'inherit',
        mb: '$2',
        '&, &:hover, &:focus, &.active, &:active': {
          backgroundColor: isActive ? '$senary' : '$transparent',
        },
        svg: { fill: isActive ? '$senary' : '$overlay' },
        '&::after': {
          width: name.includes('Backbone') ? '50%' : '100%',
          left: name === "Backbone 5'" ? '50%' : 0,
          right: name === "Backbone 3'" ? '50%' : 0,
        },
      }}
      data-testid="mini-controller-container"
      onMouseDown={handleMouseDown}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
    >
      <Glyph glyph={glyph} name={name} />
    </StyledPartWrapper>
  );
}

export default memo(MiniController);
