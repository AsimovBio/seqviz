import { useActor } from '@xstate/react';
import dynamic from 'next/dynamic';
import type { ActorRef } from 'xstate/lib/types';

const MiniController = dynamic(
  () => import('common/components/mini-controller'),
  { ssr: false }
);
const Box = dynamic(() => import('common/components/box'));
const Text: any = dynamic(() => import('common/components/text'));
const Label = dynamic(async () => {
  const { Label } = await import('common/components/form');
  return Label;
});

type Props = { constructPartRef: ActorRef<any, any> };

export default function ConstructPartController({ constructPartRef }: Props) {
  const [state, send] = useActor(constructPartRef);

  const {
    part: { name },
  } = state.context;

  return (
    <Box css={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <Box
        css={{
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          '&::after': {
            backgroundColor: '$dark',
            content: '',
            height: '2px',
            position: 'absolute',
            top: '50%',
            transform: 'translate(0, -1px)',
            width: '100%',
          },
        }}
      >
        <MiniController {...state.context} onNotify={send} />
      </Box>
      <Label
        css={{
          textAlign: 'center',
          whiteSpace: 'nowrap',
          py: '$3',
        }}
      >
        <Text
          as="span"
          css={{
            display: 'block',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: '100%',
          }}
          size={1}
        >
          {name}
        </Text>
      </Label>
    </Box>
  );
}
