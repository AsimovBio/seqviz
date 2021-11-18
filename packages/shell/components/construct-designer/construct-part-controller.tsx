import { useActor } from '@xstate/react';
import dynamic from 'next/dynamic';
import React, { memo } from 'react';
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

type Props = { constructPartRef: ActorRef<any, any>; isLabelShown: boolean };

function ConstructPartController({
  constructPartRef,
  isLabelShown = true,
}: Props) {
  const [state, send] = useActor(constructPartRef);

  const {
    orientation,
    part: {
      name,
      type: { name: typeName },
    },
  } = state.context;

  return (
    <Box
      css={{
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        '&::after': {
          backgroundColor: '$text',
          content: '',
          left: '50%',
          position: 'absolute',
          width: '1px',
          height: orientation === 'reverse' ? '1em' : '2em',
          bottom: 0,
        },
      }}
    >
      <MiniController context={state.context} onEvent={send} />
      {isLabelShown && (
        <Label
          css={{
            overflow: 'hidden',
            textAlign: 'right',
            textOverflow: 'ellipsis',
            transform: 'rotate(-45deg)',
            transformOrigin: 'right top',
            whiteSpace: 'nowrap',
            position: 'absolute',
            top: '100%',
            right: '50%',
          }}
          title={`${name}\n${typeName}`}
        >
          <Text
            as="span"
            css={{
              display: 'block',
              width: '100%',
            }}
            size={0}
          >
            {name}
          </Text>
        </Label>
      )}
    </Box>
  );
}

export default memo(ConstructPartController);
