import type { Construct } from 'models/graphql';
import dynamic from 'next/dynamic';
import { useCallback } from 'react';

const Box: any = dynamic(() => import('common/components/box'));
const Icon = dynamic(() => import('common/components/icon'));
const DropdownMenu = dynamic(() => import('common/components/dropdown-menu'));

const StyledTrigger: any = dynamic(
  async () => {
    const { StyledTrigger } = await import('common/components/dropdown-menu');
    return StyledTrigger;
  },
  {
    ssr: false,
  }
);

const StyledItem = dynamic<any>(
  async () => {
    const { StyledItem } = await import('common/components/dropdown-menu');
    return StyledItem;
  },
  {
    ssr: false,
  }
);

type Props = {
  onCreateConstruct: (template: Construct) => void;
  onMenuOpen: (isOpen: boolean) => void;
  templates: Construct[];
};

export default function TemplatesDropdown({
  onCreateConstruct,
  onMenuOpen,
  templates,
}: Props) {
  const makeHandleSelect = useCallback(
    (template: Construct) => () => {
      onCreateConstruct(template);
    },
    [onCreateConstruct]
  );

  return (
    <DropdownMenu
      content={
        <Box
          css={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '43.5em',
          }}
        >
          {templates?.map((template) => {
            const { name, id } = template;
            return (
              <StyledItem
                color="transparent"
                key={id}
                onSelect={makeHandleSelect(template)}
              >
                <Icon label="Plus" />
                &nbsp;{name}
              </StyledItem>
            );
          })}
        </Box>
      }
      onOpenChange={onMenuOpen}
    >
      <StyledTrigger
        aria-label="Create construct"
        color="tertiary"
        css={{
          fontSize: '$1',
          '&[data-state=open]': {
            backgroundColor: '$quaternary',
            color: '$background',
          },
          '&:focus-visible': { outline: 'none' },
        }}
        data-testid="create-construct-trigger"
        value="construct"
      >
        <Icon label="Plus" />
        &nbsp;Construct
      </StyledTrigger>
    </DropdownMenu>
  );
}
