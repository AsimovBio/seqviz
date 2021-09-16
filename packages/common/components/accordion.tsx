import type { AccordionOwnProps } from '@radix-ui/react-accordion';
import {
  Content,
  Header,
  Item,
  Root,
  Trigger,
} from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import type { ReactNode } from 'react';

import { styled } from '../stitches.config';
import Icon from './icon';

type Props = {
  children: ReactNode;
  headerContent?: ReactNode;
  icon?: string;
  isChevronShown: boolean;
  title: string;
} & AccordionOwnProps;

export const StyledAccordion = styled(Root, {
  backgroundColor: '$background',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  marginTop: '$1',
});

export const StyledItem = styled(Item, {
  color: 'inherit',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  textDecoration: 'none',
});

export const StyledHeader = styled(Header, {
  alignItems: 'center',
  backgroundColor: '$overlay',
  color: 'inherit',
  display: 'flex',
  fontSize: '$1',
  fontWeight: '$bold',
  justifyContent: 'space-between',
  margin: 0,
  textAlign: 'left',
  textTransform: 'uppercase',
  '&[aria-expanded="true"] > svg:last-of-type': {
    transform: 'rotate(180deg)',
  },
  px: 0,
  py: '$2',

  '.text': {
    marginLeft: '1em',
  },

  variants: {
    withIcon: {
      true: {
        '.text': {
          marginLeft: 'unset',
        },
      },
    },
  },
});

export const StyledTrigger = styled(Trigger, {
  backgroundColor: 'inherit',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  flex: 1,
  justifyContent: 'space-between',
});

const StyledChevron = styled(ChevronDownIcon, {
  flex: '0 2.75em',
  transition: 'transform $standard',
  '[data-state=open] &': {
    transform: 'rotate(180deg)',
  },
});

export const StyledContent = styled(Content, {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  a: {
    alignItems: 'center',
    backgroundColor: '$overlay',
    color: 'inherit',
    display: 'flex',
    height: '1.5em',
    mt: '$1',
    py: '$1',
    textDecoration: 'none',
    '&:hover, &:focus, &:active': {
      backgroundColor: '$highlight',
    },
    '&.active': {
      backgroundColor: '$active',
      'svg path': { fill: '$primary' },
    },
    ':first-child': {
      flex: '0 2.75em',
    },
  },
});

export const StyledDiv = styled('div', {
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  '> svg': { flex: '0 2.75em', path: { fill: '$primary' } },
});

export default function Accordion({
  children,
  headerContent,
  icon,
  isChevronShown = true,
  type = 'single',
  title,
  ...props
}: Props) {
  return (
    <StyledAccordion type={type} {...props}>
      <StyledItem value={title}>
        <StyledHeader withIcon={!!icon}>
          <StyledDiv>
            {icon && <Icon label={icon} />}
            <span className="text">{title}</span>
            {headerContent}
          </StyledDiv>
          <StyledTrigger>
            {isChevronShown && <StyledChevron aria-hidden />}
          </StyledTrigger>
        </StyledHeader>
        <StyledContent>{children}</StyledContent>
      </StyledItem>
    </StyledAccordion>
  );
}
