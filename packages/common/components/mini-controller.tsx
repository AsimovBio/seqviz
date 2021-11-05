import type { SyntheticEvent } from 'react';
import { memo } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { styled } from '../stitches.config';
import Box from './box';
import Button from './button';
import Glyph from './glyph';

export type Props = {
  context: {
    index: number;
    isActive: boolean;
    isColored: boolean;
    isFocused: boolean;
    orientation: 'forward' | 'reverse';
    part: { type: { glyph: string; slug: string }; name: string };
  };
  onEvent: ({ type: string, value: unknown }) => void;
};

const StyledContainer = styled(Box, {
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  button: {
    position: 'relative',
    zIndex: 1,
  },
  '&::after': {
    content: '',
    height: '2px',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '100%',
    zIndex: 0,
  },
});

const StyledPartWrapper = styled(Button, {
  alignItems: 'center',
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  lineHeight: 0,
  padding: 0,
  transformOrigin: 'center center',
  transition: '$standard',
  '&.reverse': {
    transform: 'rotate(180deg)',
  },
});

function MiniController({
  context: {
    isActive,
    isFocused,
    isColored,
    orientation,
    part: {
      name,
      type: { glyph, slug },
    },
  },
  onEvent,
}: Props) {
  const [isHovering, setHovering] = useState<boolean>(false);
  const handleEvent = ({ currentTarget: { name, value } }) => {
    onEvent({ type: name, value: value ? value : undefined });
  };

  const handleHover = (e: SyntheticEvent<HTMLDivElement>) => {
    setHovering(e.type === 'mouseenter');
  };

  useEffect(() => {
    onEvent({ type: 'FOCUS', value: isHovering });

    return () => {
      onEvent({ type: 'FOCUS', value: false });
    };
  }, [isHovering, onEvent]);

  return (
    <StyledContainer
      className={isFocused || isActive ? 'hovered' : undefined}
      css={{
        '&::after': {
          backgroundColor: isActive ? '$quaternary' : '$text',
          width: name.includes('Backbone') ? '50%' : '100%',
          left: name === "Backbone 5'" ? '50%' : '0',
          right: name === "Backbone 3'" ? '50%' : '0',
        },
      }}
      data-testid="construct-part-container"
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <StyledPartWrapper
        className={orientation}
        color="transparent"
        css={{
          color: isActive ? '$quaternary' : 'inherit',
        }}
        data-testid="part-controller-activate"
        name="TOGGLE_ACTIVE"
        onClick={handleEvent}
      >
        <Glyph glyph={glyph} name={name} />
      </StyledPartWrapper>
    </StyledContainer>
  );
}

export default memo(MiniController);
