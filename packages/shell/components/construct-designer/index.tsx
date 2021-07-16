import { useActor } from '@xstate/react';
import type { Construct } from 'models/graphql';
import dynamic from 'next/dynamic';
import { DashboardContext } from 'pages';
import { useContext } from 'react';
import { useEffect } from 'react';

import ConstructPartController from './construct-part-controller';

const Box = dynamic(() => import('common/components/box'));

type Props = Partial<Construct>;

export default function ConstructDesigner({
  construct_parts: initialConstructParts,
  id: constructId,
}: Props) {
  const { constructSvc } = useContext(DashboardContext);

  const [state, send] = useActor(constructSvc);

  useEffect(() => {
    send({
      type: 'BOOTSTRAP',
      constructParts: initialConstructParts,
      constructId,
    });
  }, [constructId, initialConstructParts, send]);

  if (!state) {
    return null;
  }

  const { constructParts } = state.context;

  return (
    <Box
      css={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-evenly',
      }}
    >
      {constructParts?.map(({ id, ref }) => (
        <ConstructPartController constructPartRef={ref} key={id} />
      ))}
    </Box>
  );
}
