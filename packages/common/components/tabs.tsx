import { Content, List, Root, Trigger } from '@radix-ui/react-tabs';
import type { ReactNode } from 'react';

import { styled } from '../stitches.config';

const StyledContent = styled(Content, {
  '&[data-state=active]': {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    overflowY: 'auto',
    position: 'relative',
  },
});

const StyledList = styled(List, {
  display: 'flex',
});

const StyledRoot = styled(Root, {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  overflowY: 'auto',
  position: 'relative',
});

const StyledTrigger = styled(Trigger, {
  backgroundColor: '$background',
  cursor: 'pointer',
  fontSize: '$1',
  outline: 'none',
  padding: '$2 $3',
  textTransform: 'uppercase',
  '&[data-state=active]': {
    backgroundColor: '$overlay',
  },
  '&[data-disabled]': {
    color: '$mutedText',
    cursor: 'not-allowed',
  },
});

type Tab = {
  title: string;
  value: string;
  content: ReactNode;
};

type Props = {
  defaultValue: string;
  tabs: Tab[];
};

export default function Tabs({ defaultValue, tabs }: Props) {
  return (
    <StyledRoot defaultValue={defaultValue}>
      <StyledList aria-label="tabs">
        {tabs.map(({ content, title, value }) => (
          <StyledTrigger disabled={!content} key={value} value={value}>
            {title}
          </StyledTrigger>
        ))}
      </StyledList>
      {tabs.map(({ value, content }) => (
        <StyledContent key={value} value={value}>
          {content}
        </StyledContent>
      ))}
    </StyledRoot>
  );
}
