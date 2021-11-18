import { useActor } from '@xstate/react';
import { DashboardContext } from 'components/layout/dashboard-layout';
import dynamic from 'next/dynamic';
import { useContext } from 'react';

const Box: any = dynamic(() => import('common/components/box'));
const Icon = dynamic(() => import('common/components/icon'));
const ScrollContainer: any = dynamic(
  () => import('common/components/scroll-container')
);
const SequenceViewer: any = dynamic(
  () => import('common/components/sequence-viewer'),
  { ssr: false }
);

export default function SequencePanel({ construct }) {
  const context = useContext(DashboardContext);
  const {
    state: {
      children: { constructSvc },
    },
  } = context;

  const [state] = useActor<any, any>(constructSvc);

  const { constructParts } = state.context;

  const activeParts = constructParts.filter(
    ({
      ref: {
        state: {
          context: { isActive },
        },
      },
    }) => isActive
  );
  const lastPart = activeParts[activeParts.length - 1];
  const cPartIds = activeParts.map(({ id }) => id);

  const annotations = construct.annotations?.map(({ label, ...rest }) => ({
    name: label,
    ...rest,
  }));

  const {
    start,
    end,
    id: ref,
  } = annotations?.find((a) => a.construct_part_id === lastPart?.id) || {};

  const selectedRange = { start, end, ref };

  return (
    <Box
      css={{
        backgroundColor: '$overlay',
        display: 'flex',
        flex: 1,
        my: '0.2em',
      }}
    >
      <ScrollContainer>
        <Box
          as="ul"
          css={{
            listStyle: 'none',

            li: {
              display: 'flex',
              alignItems: 'center',
            },
          }}
        >
          <Box
            as="ul"
            css={{
              listStyle: 'none',
              pl: '$2',
              li: {
                display: 'flex',
                alignItems: 'center',
              },
            }}
          >
            {constructParts &&
              constructParts.map(({ id, part: { name }, ref: { send } }) => (
                <Box
                  as="li"
                  css={{
                    backgroundColor: cPartIds.includes(id) ? '$senary' : '',
                    cursor: 'pointer',
                    pl: '$1',
                  }}
                  key={id}
                  onClick={() => send({ type: 'TOGGLE_ACTIVE' })}
                >
                  <Icon css={{ size: 12 }} label="Plus" />
                  &nbsp;
                  {name}
                </Box>
              ))}
          </Box>
        </Box>
      </ScrollContainer>
      <Box css={{ flex: 2 }}>
        <SequenceViewer
          annotations={construct.annotations?.map(({ label, ...rest }) => ({
            name: label,
            ...rest,
          }))}
          css={{ width: '100%', height: '100%' }}
          name={construct.name}
          onSelection={(selection) => {
            if (
              selection.type === 'ANNOTATION' &&
              selection.ref !== selectedRange?.ref
            ) {
              // Toggle active part if a different annotation was clicked within SeqViz
              const newSelectedAnnotation = annotations.find(
                (a) => a.id === selection.ref
              );
              const newSelectedPart = constructParts.find(
                (cp) => cp.id === newSelectedAnnotation?.construct_part_id
              );
              newSelectedPart?.ref?.send({ type: 'TOGGLE_ACTIVE' });
            } else if (
              selection.type === 'SEQ' &&
              selection.start === selection.end
            ) {
              // Deactivate currently active part if a single cursor was dropped in SeqViz
              lastPart?.ref?.send({ type: 'TOGGLE_ACTIVE' });
            }
          }}
          selectedRange={selectedRange}
          seq={construct.sequence}
          viewer="linear"
        />
      </Box>
    </Box>
  );
}
