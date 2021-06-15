import type { AccordionOwnProps } from '@radix-ui/react-accordion';
import { Button, Header, Item, Panel, Root } from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import type { ReactNode } from 'react';

import { styled } from '../stitches.config';
import Icon from './icon';

type Props = {
  children: ReactNode;
  icon?: string;
  isChevronShown: boolean;
  title: string;
} & AccordionOwnProps;

export const StyledAccordion = styled(Root, {
  backgroundColor: '$background',
  marginTop: '$1',
});

export const StyledItem = styled(Item, {
  color: 'inherit',
  textDecoration: 'none',
});

export const StyledHeader = styled(Header, {
  backgroundColor: '$background',
  display: 'flex',
  justifyContent: 'space-between',
  margin: 0,
});

export const StyledButton = styled(Button, {
  backgroundColor: '$overlay',
  border: 'none',
  display: 'flex',
  flex: 1,
  fontSize: '$2',
  fontWeight: '$bold',
  justifyContent: 'space-between',
  px: 0,
  py: '$2',
  textAlign: 'left',
  textTransform: 'uppercase',
  '&[aria-expanded="true"] > svg:last-of-type': {
    transform: 'rotate(180deg)',
  },
});

const StyledChevron = styled(ChevronDownIcon, {
  flex: '0 2.75em',
  transition: 'transform $standard',
  '[data-state=open] &': {
    transform: 'rotate(180deg)',
  },
});

export const StyledPanel = styled(Panel, {
  a: {
    alignItems: 'center',
    backgroundColor: '$overlay',
    color: 'inherit',
    display: 'flex',
    mt: '$1',
    py: '$1',
    textDecoration: 'none',
    '&:hover, &:focus': {
      backgroundColor: '$highlight',
    },
    '&.active, &:active': {
      backgroundColor: '$active',
      'svg path': { fill: '$primary' },
    },
    ':first-child': {
      flex: '0 2.75em',
    },
  },
});

export const StyledDiv = styled('div', {
  display: 'flex',
  width: '100%',
  svg: { flex: '0 2.75em', path: { fill: '$primary' } },
});

export default function Accordion({
  children,
  icon,
  isChevronShown = true,
  type = 'single',
  title,
  ...props
}: Props) {
  return (
    <StyledAccordion type={type} {...props}>
      <StyledItem value={title}>
        <StyledHeader>
          <StyledButton>
            <StyledDiv>
              {icon && <Icon name={icon} />}
              <span className="text">{title}</span>
            </StyledDiv>
            {isChevronShown && <StyledChevron aria-hidden />}
          </StyledButton>
        </StyledHeader>
        <StyledPanel>{children}</StyledPanel>
      </StyledItem>
    </StyledAccordion>
  );
}
