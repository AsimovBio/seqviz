import { styled } from '../stitches.config';
import Box from './box';
import Icon from './icon';

type Props = {
  isActive: boolean;
  isHovered: boolean;
  part: any;
};

export default function MiniController({
  isHovered = false,
  isActive = false,
  part,
}: Props) {
  const StyledContainer = styled(Box, {
    width: '7.5rem',
    height: '7.5rem',
    display: 'flex',
    justifyContent: 'center',
  });

  const StyledRow = styled(Box, {
    display: 'flex',
    flex: 1,
  });

  const StyledButton = styled('button', {
    $$primary: '#fde5f280',
    $$secondary: '#ebecff80',
    $$tertiary: '#ffeee380',
    $$primaryHover: '#fde5f2',
    $$secondaryHover: '#ebecff',
    $$tertiaryHover: '#ffeee3',

    border: '1px solid $dark',
    backgroundColor: '$highlight',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 'unset',
    cursor: 'pointer',

    '& svg path': {
      stroke: '$text',
      strokeWidth: '0.5px',
    },

    variants: {
      color: {
        primary: {
          backgroundColor: isActive ? '$$primary' : '$highlight',
          '&:hover': {
            backgroundColor: '$$primaryHover',
          },
        },
        secondary: {
          backgroundColor: isActive ? '$$secondary' : '$highlight',
          '&:hover': {
            backgroundColor: '$$secondaryHover',
          },
        },
        tertiary: {
          backgroundColor: isActive ? '$$tertiary' : '$highlight',
          '&:hover': {
            backgroundColor: '$$tertiaryHover',
          },
        },
      },
    },
  });

  const StyledPartWrapper = styled(Box, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  });

  const UndefinedPart = () => (
    <Icon
      css={{ width: 40, height: 40, stroke: '$text', strokeWidth: '0.5px' }}
      name="QuestionMarkCircled"
    />
  );
  if (!isHovered && !isActive) {
    return (
      <StyledContainer>
        <StyledPartWrapper>{part || <UndefinedPart />}</StyledPartWrapper>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer
      css={{ flexDirection: 'column', border: '1px solid $dark' }}
    >
      <StyledRow>
        <StyledButton color="primary" type="button">
          <Icon name="ArrowLeft" />
        </StyledButton>
        <StyledButton color="primary" css={{ flex: 5 }} type="button">
          <Icon name="Minus" />
        </StyledButton>
        <StyledButton color="primary" type="button">
          <Icon name="ArrowRight" />
        </StyledButton>
      </StyledRow>
      <StyledRow css={{ flex: 5 }}>
        <StyledButton color="secondary" type="button">
          <Icon name="Plus" />
        </StyledButton>
        <StyledPartWrapper css={{ flex: 5, border: '1px solid $dark' }}>
          {part || <UndefinedPart />}
        </StyledPartWrapper>
        <StyledButton color="secondary" type="button">
          <Icon name="Plus" />
        </StyledButton>
      </StyledRow>
      <StyledRow>
        <StyledButton color="tertiary" type="button">
          <Icon css={{ width: 12, height: 12 }} name="Reload" />
        </StyledButton>
        <StyledButton color="tertiary" type="button">
          <Icon name="ChevronDown" />
        </StyledButton>
      </StyledRow>
    </StyledContainer>
  );
}
