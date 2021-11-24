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

  const [state, sendToConstruct] = useActor<any, any>(constructSvc);

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

  const cPartIds = activeParts.map(({ id }) => id);

  const annotations = construct.annotations?.map(({ label, ...rest }) => ({
    name: label,
    ...rest,
  }));

  const selectedAnnotations =
    annotations
      ?.filter((a) => cPartIds.includes(a.construct_part_id))
      .sort((a) => a.start) || [];

  const selectedRange = {
    start: selectedAnnotations[0]?.start,
    end: selectedAnnotations[selectedAnnotations.length - 1]?.end,
    ref: selectedAnnotations.map(({ id }) => id),
  };

  const resetSelections = () => {
    sendToConstruct({ type: 'RESET' });
  };

  return (
    <Box
      css={{
        backgroundColor: '$overlay',
        display: 'flex',
        flex: 1,
        my: '0.2em',
      }}
    >
      <ScrollContainer css={{ maxWidth: '20rem', justifyContent: 'center' }}>
        <Box
          as="ul"
          css={{
            listStyle: 'none',
            maxWidth: 'fit-content',
            px: '$3',
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
                onClick={() => {
                  resetSelections();
                  send({ type: 'ACTIVATE' });
                }}
              >
                <Icon css={{ size: 12 }} label="Plus" />
                &nbsp;
                {name}
              </Box>
            ))}
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
            if (selection.type === 'ANNOTATION') {
              // Toggle active part if a different annotation was clicked within SeqViz
              const newSelectedAnnotation = annotations.find(({ id }) =>
                selection.ref.includes(id)
              );
              const newSelectedPart = constructParts.find(
                ({ id }) => id === newSelectedAnnotation?.construct_part_id
              );
              resetSelections();
              newSelectedPart?.ref?.send({ type: 'ACTIVATE' });
            } else if (
              selection.type === 'SEQ' &&
              selection.start === selection.end
            ) {
              // Deactivate currently active part if a single cursor was dropped in SeqViz
              resetSelections();
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
