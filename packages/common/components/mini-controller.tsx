import type { ReactNode } from 'react';
import { useEffect } from 'react';
import { useHoverIntent } from 'react-use-hoverintent';

import { styled } from '../stitches.config';
import Box from './box';
import Button from './button';
import Icon from './icon';

type Props = {
  children: ReactNode;
  index: number;
  isActive: boolean;
  isFocused: boolean;
  orientation: 'forward' | 'reverse';
  part: { part_type: { glyph: string }; name: string };
  onNotify: ({ type: string, value: unknown }) => void;
};

const StyledContainer = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  height: '7.5rem',
  justifyContent: 'center',
  position: 'relative',
  width: '7.5rem',
  zIndex: 1,
});

const StyledRow = styled(Box, {
  display: 'flex',
  flex: 1,
  justifyContent: 'center',
});

const StyledButton = styled('button', {
  $$primary: '#fde5f280',
  $$secondary: '#ebecff80',
  $$tertiary: '#ffeee380',
  $$primaryHover: '#fde5f2',
  $$secondaryHover: '#ebecff',
  $$tertiaryHover: '#ffeee3',

  alignItems: 'center',
  backgroundColor: '$highlight',
  border: '1px solid $dark',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  padding: 'unset',
  visibility: 'hidden',

  '& svg path': {
    stroke: '$text',
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
          backgroundColor: '$$primaryHover',
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
      },
    },
    {
      color: 'secondary',
      active: true,
      css: {
        backgroundColor: '$$secondary',
      },
    },
    {
      color: 'tertiary',
      active: true,
      css: {
        backgroundColor: '$$tertiary',
      },
    },
  ],
});

const StyledPartWrapper = styled(Button, {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  transition: '$standard',
  svg: {
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'square',
    strokeAlignment: 'inner',
    strokeWidth: '1.5',
    width: '2rem',
    transform: 'translate(0, -50%)',
  },
});

export default function MiniController({
  index,
  isActive,
  isFocused,
  onNotify,
  orientation,
  part: {
    name,
    part_type: { glyph },
  },
}: Props) {
  const [isHovering, ref] = useHoverIntent<HTMLDivElement>({ timeout: 200 });
  const handleEvent = ({ currentTarget: { name, value } }) => {
    onNotify({ type: name, value });
  };

  useEffect(() => {
    onNotify({ type: 'FOCUS', value: isHovering });
  }, [isHovering, onNotify]);

  const part = (
    <StyledPartWrapper
      color="transparent"
      css={{
        flex: 1,
        transform: orientation === 'reverse' ? 'rotate(180deg)' : undefined,
      }}
      name="TOGGLE_ACTIVE"
      onClick={handleEvent}
    >
      <Icon label={name}>
        <span dangerouslySetInnerHTML={{ __html: glyph }} />
      </Icon>
    </StyledPartWrapper>
  );

  return (
    <StyledContainer
      className={isFocused || isActive ? 'hovered' : undefined}
      data-testid="construct-part-container"
      ref={ref}
    >
      <StyledRow>
        <StyledButton
          active={isActive}
          color="primary"
          name="MOVE"
          onClick={handleEvent}
          type="button"
          value={index - 1}
        >
          <Icon label="ArrowLeft" />
        </StyledButton>
        <StyledButton
          active={isActive}
          color="primary"
          css={{ borderWidth: '1px 0', flex: 1 }}
          data-testid="delete"
          name="DELETE"
          onClick={handleEvent}
          type="button"
        >
          <Icon label="Minus" />
        </StyledButton>
        <StyledButton
          active={isActive}
          color="primary"
          name="MOVE"
          onClick={handleEvent}
          type="button"
          value={index + 1}
        >
          <Icon label="ArrowRight" />
        </StyledButton>
      </StyledRow>

      <StyledRow css={{ flex: 5 }}>
        <StyledButton
          active={isActive}
          color="secondary"
          css={{ borderWidth: '0 1px' }}
          data-testid="add-left"
          name="ADD"
          onClick={handleEvent}
          type="button"
          value={index}
        >
          <Icon label="Plus" />
        </StyledButton>
        {part}
        <StyledButton
          active={isActive}
          color="secondary"
          css={{ borderWidth: '0 1px' }}
          data-testid="add-right"
          name="ADD"
          onClick={handleEvent}
          type="button"
          value={index + 1}
        >
          <Icon label="Plus" />
        </StyledButton>
      </StyledRow>

      <StyledRow>
        <StyledButton
          active={isActive}
          color="tertiary"
          css={{ flex: 1 }}
          data-testid="toggle-flip"
          name="FLIP"
          onClick={handleEvent}
          type="button"
        >
          <Icon css={{ width: 12, height: 12 }} label="Reload" />
        </StyledButton>
        <StyledButton
          active={isActive}
          color="tertiary"
          css={{ flex: 1, borderLeft: 'none' }}
          data-testid="toggle-active"
          name="ENGAGE"
          onClick={handleEvent}
          type="button"
        >
          <Icon label="ChevronDown" />
        </StyledButton>
      </StyledRow>
    </StyledContainer>
  );
}
