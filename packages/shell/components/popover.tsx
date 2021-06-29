import dynamic from 'next/dynamic';
import type { SyntheticEvent } from 'react';

const Box: any = dynamic(() => import('common/components/box'));
const Button = dynamic(() => import('common/components/button'));
const Icon = dynamic(() => import('common/components/icon'));
const Popover = dynamic(() => import('common/components/popover'), {
  ssr: false,
});

type Props = {
  onCreate: (type: string) => void;
  projectId?: string | string[];
};

export default function PopoverCreate({ projectId, onCreate }: Props) {
  const handleClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    onCreate(e.currentTarget.value);
  };

  return (
    <Popover
      content={
        <Box
          css={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: '16.5em',
            button: { textTransform: 'uppercase' },
          }}
        >
          <Button
            aria-label="Create project"
            css={{ p: '$2', mb: '$1' }}
            onClick={handleClick}
            value="project"
          >
            Project
            <Icon name="Plus" />
          </Button>
          <Button
            aria-label="Create construct"
            css={{ p: '$2' }}
            disabled={!projectId}
            onClick={handleClick}
            value="construct"
          >
            Construct
            <Icon name="Plus" />
          </Button>
        </Box>
      }
    >
      <>
        <Icon css={{ mr: '$2' }} name="PlusCircled" />
        <Box as="span" css={{ mr: '$3' }}>
          New
        </Box>
      </>
    </Popover>
  );
}
