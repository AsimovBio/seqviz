import { useActor } from '@xstate/react';
import dynamic from 'next/dynamic';
import type { Ref } from 'react';
import React, { forwardRef, memo } from 'react';
import { getModule } from 'utils/import';
import type { ActorRef } from 'xstate/lib/types';

const MiniController = dynamic(getModule('./components/mini-controller'), {
  ssr: false,
});
const Box: any = dynamic(getModule('./components/box'), { ssr: false });
const Text: any = dynamic(getModule('./components/text'), { ssr: false });

const Label: any = dynamic(
  async () => {
    const mod = await getModule('./components/form');
    return mod.Label;
  },
  { ssr: false }
);

type Props = { constructPartRef: ActorRef<any, any> };

function ConstructPartController(
  { constructPartRef }: Props,
  ref: Ref<HTMLDivElement>
) {
  const [state, send] = useActor(constructPartRef);

  const {
    part: { name },
  } = state.context;

  return (
    <div ref={ref}>
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
              transform: 'translate(0, -3px)',
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
    </div>
  );
}

export default memo(forwardRef(ConstructPartController));
