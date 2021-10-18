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

  const [state, _] = useActor<any, any>(constructSvc);

  const { constructParts } = state.context;

  const activePart = constructParts.find(
    (part) => part.ref._state.context.isActive
  );

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
                    backgroundColor: activePart?.id === id ? '$senary' : '',
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
          search={{ query: activePart?.part?.sequence, mismatch: 0 }}
          seq={construct.sequence}
          viewer="linear"
        />
      </Box>
    </Box>
  );
}
