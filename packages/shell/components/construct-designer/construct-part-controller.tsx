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

type Props = { constructPartRef: ActorRef<any, any>; isLabelShown: boolean };

const BACKGROUND_COLORS_MAP = {
  '5-utr': '$senary',
  'polyadenylation-signal': '$octonary',
  '3-utr': '$senary',
  cds: '$denary',
  'pol-ii-promoter': '$nonary',
  'fluorescent-protein': '$senary',
  'selection-system': '$denary',
  'heavy-chain': '$denary',
  'light-chain': '$denary',
  'nuclear-trafficking-tag': '$senary',
};

function ConstructPartController(
  { constructPartRef, isLabelShown = true }: Props,
  ref: Ref<HTMLDivElement>
) {
  const [state, send] = useActor(constructPartRef);

  const {
    isActive,
    isFocused,
    isColored,
    part: {
      name,
      type: { name: typeName, slug },
    },
  } = state.context;

  return (
    <div ref={ref}>
      <Box
        css={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          maxWidth: '7.75rem',
          svg: {
            stroke: isColored ? BACKGROUND_COLORS_MAP[slug] : 'currentColor',
          },
        }}
      >
        <MiniController context={state.context} onEvent={send} />
        {isLabelShown && (
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
            title={`${name}\n${typeName}`}
          >
            <Text
              as="span"
              css={{
                backgroundColor: isActive
                  ? '$senary'
                  : isFocused
                  ? BACKGROUND_COLORS_MAP[slug]
                  : 'none',
                color: isActive ? '$quaternary' : 'inherit',
                display: 'block',
                mb: '$1',
                width: '100%',
              }}
              size={0}
            >
              {name}
            </Text>
            <Text
              as="span"
              css={{
                color: '$mutedText',
                display: 'block',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                width: '100%',
              }}
              size={0}
            >
              {typeName}
            </Text>
          </Label>
        )}
      </Box>
    </div>
  );
}

export default memo(forwardRef(ConstructPartController));
