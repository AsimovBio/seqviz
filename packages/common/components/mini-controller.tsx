import type { SyntheticEvent } from 'react';
import { memo } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import { styled } from '../stitches.config';
import Box from './box';
import Button from './button';
import Glyph from './glyph';
import Icon from './icon';

export type Props = {
  context: {
    index: number;
    isActive: boolean;
    isFocused: boolean;
    orientation: 'forward' | 'reverse';
    part: { type: { glyph: string }; name: string };
  };
  onNotify: ({ type: string, value: unknown }) => void;
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
    top: '48%',
    width: '100%',
    zIndex: 0,
  },
});

const StyledCol = styled(Box, {
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
});

const StyledButton = styled('button', {
  $$primary: '#F8EFF4',
  $$secondary: '#EFEAF9',
  $$tertiary: '#F8F1EC',
  $$secondaryHover: '#E9DFFD',
  $$tertiaryHover: '#F4E0D3',

  alignItems: 'center',
  backgroundColor: '$highlight',
  border: '1px solid $dark',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  padding: 'unset',
  visibility: 'hidden',

  '& svg path': {
    strokeWidth: '0.5',
  },

  '.hovered &': {
    visibility: 'visible',
  },

  variants: {
    active: {
      true: {},
    },
    color: {
      primary: {
        backgroundColor: '$highlight',
        '&:hover': {
          backgroundColor: '$warningLight',
        },
      },
      secondary: {
        backgroundColor: '$highlight',
        '&:hover': {
          backgroundColor: '$$secondaryHover',
        },
      },
      tertiary: {
        backgroundColor: '$highlight',
        '&:hover': {
          backgroundColor: '$$tertiaryHover',
        },
      },
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      active: true,
      css: {
        backgroundColor: '$$primary',
        '&:hover': { color: '$warning' },
      },
    },
    {
      color: 'secondary',
      active: true,
      css: {
        backgroundColor: '$$secondary',
        '&:hover': { color: '$quaternary' },
      },
    },
    {
      color: 'tertiary',
      active: true,
      css: {
        backgroundColor: '$$tertiary',
        '&:hover': { color: '$primary' },
      },
    },
  ],
});

const StyledPartWrapper = styled(Button, {
  alignItems: 'center',
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
  padding: 0,
  transition: '$standard',
  transformOrigin: 'center center',
  '&.reverse': {
    top: '-2%',
    transform: 'rotate(180deg)',
  },
});

function MiniController({
  context: {
    index,
    isActive,
    isFocused,
    orientation,
    part: {
      name,
      type: { glyph },
    },
  },
  onNotify,
}: Props) {
  const [isHovering, setHovering] = useState<boolean>(false);
  const handleEvent = ({ currentTarget: { name, value } }) => {
    onNotify({ type: name, value });
  };

  const handleHover = (e: SyntheticEvent<HTMLDivElement>) => {
    setHovering(e.type === 'mouseenter');
  };

  useEffect(() => {
    onNotify({ type: 'FOCUS', value: isHovering });

    return () => {
      onNotify({ type: 'FOCUS', value: false });
    };
  }, [isHovering, onNotify]);

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
      <StyledButton
        active={isActive}
        color="secondary"
        css={{
          borderTopLeftRadius: '$1',
          borderBottomLeftRadius: '$1',
          flex: '0 1.25em',
        }}
        data-testid="add-left"
        name="ADD"
        onClick={handleEvent}
        title="Add part left"
        type="button"
        value={index}
      >
        <Icon label="Plus" />
      </StyledButton>

      <StyledCol css={{ flex: 5, flexDirection: 'column' }}>
        <StyledButton
          active={isActive}
          color="primary"
          css={{ borderLeft: 'none', borderRight: 'none', flex: '0 1.25em' }}
          data-testid="delete"
          name="DELETE"
          onClick={handleEvent}
          title="Delete part"
          type="button"
        >
          <Icon label="Minus" />
        </StyledButton>

        <StyledPartWrapper
          className={orientation}
          color="transparent"
          css={{
            color: isActive ? '$quaternary' : 'inherit',
          }}
          data-testid="activate"
          name="TOGGLE_ACTIVE"
          onClick={handleEvent}
        >
          <Glyph glyph={glyph} name={name} />
        </StyledPartWrapper>

        <StyledButton
          active={isActive}
          color="tertiary"
          css={{ borderLeft: 'none', borderRight: 'none', flex: '0 1.25em' }}
          data-testid="toggle-flip"
          name="FLIP"
          onClick={handleEvent}
          title="Flip orientation"
          type="button"
        >
          <Icon css={{ width: 12, height: 12 }} label="Reload" />
        </StyledButton>
      </StyledCol>

      <StyledButton
        active={isActive}
        color="secondary"
        css={{
          borderTopRightRadius: '$1',
          borderBottomRightRadius: '$1',
          flex: '0 1.25em',
        }}
        data-testid="add-right"
        name="ADD"
        onClick={handleEvent}
        title="Add part right"
        type="button"
        value={index + 1}
      >
        <Icon label="Plus" />
      </StyledButton>
    </StyledContainer>
  );
}

export default memo(MiniController);
