import { useActor } from '@xstate/react';
import dynamic from 'next/dynamic';
import type { Ref } from 'react';
import React, { forwardRef, memo } from 'react';
import { getModule } from 'utils/import';
import type { ActorRef } from 'xstate/lib/types';

const MiniController: any = dynamic(getModule('./components/mini-controller'), {
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
    part: {
      name,
      part_type: { name: type },
    },
  } = state.context;

  return (
    <div ref={ref}>
      <Box
        css={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          maxWidth: '7.75rem',
        }}
      >
        <MiniController context={state.context} onNotify={send} />
        <Label
          css={{
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            px: '$2',
            py: '$3',
            textAlign: 'center',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
          title={`${name}\n${type}`}
        >
          <Text as="span" css={{ display: 'block', width: '100%' }} size={0}>
            {name}
          </Text>
          <Text
            as="span"
            css={{
              color: '$mutedText',
              display: 'block',
              mt: '$1',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              width: '100%',
            }}
            size={0}
          >
            {type}
          </Text>
        </Label>
      </Box>
    </div>
  );
}

export default memo(forwardRef(ConstructPartController));
