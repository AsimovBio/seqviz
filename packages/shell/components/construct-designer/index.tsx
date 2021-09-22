import { useActor } from '@xstate/react';
import { DashboardContext } from 'components/layout/dashboard-layout';
import type { Construct } from 'models/graphql';
import dynamic from 'next/dynamic';
import { useContext, useEffect, useState } from 'react';
import type {
  DraggableProvided,
  DroppableProvided,
  DropResult,
  OnDragEndResponder,
} from 'react-beautiful-dnd';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useHotkeys } from 'react-hotkeys-hook';
import { getModule } from 'utils/import';

import { createConstructPart } from './construct-machine';
import ConstructPartController from './construct-part-controller';

const Box: any = dynamic(getModule('./components/box'), { ssr: false });

type Props = Partial<Construct>;

export default function ConstructDesigner({
  parts: initialConstructParts,
  id: constructId,
}: Props) {
  const context = useContext(DashboardContext);
  const {
    state: {
      children: { constructSvc },
    },
  } = context;

  const [state, send] = useActor<any, any>(constructSvc);

  useHotkeys('command+z', (e) => {
    e.preventDefault();
    send('UNDO');
  });

  useHotkeys('command+shift+z', (e) => {
    e.preventDefault();
    send('REDO');
  });

  const { constructParts } = state?.context;

  /**
   * Using useState instead of useRef in order to use setNewPartRef as a callback ref.
   * This offers more control over timing of setting newPartRef
   */
  const [newPartRef, setNewPartRef] = useState<HTMLDivElement>(null);

  useEffect(() => {
    if (newPartRef) {
      newPartRef.scrollIntoView({
        block: 'end',
        inline: 'nearest',
        behavior: 'smooth',
      });
    }
  }, [newPartRef]);

  useEffect(() => {
    const constructParts = initialConstructParts?.length
      ? initialConstructParts
      : [createConstructPart({ construct_id: constructId, index: 0 })];

    send({
      type: 'BOOTSTRAP',
      constructParts,
      constructId,
    });
  }, [constructId, initialConstructParts, send]);

  const onDragEnd: OnDragEndResponder = ({
    destination,
    draggableId: id,
  }: DropResult) => {
    if (!destination) return;
    const { index } = destination;

    send({
      type: 'CONSTRUCTPART.MOVE',
      id,
      index,
    });
  };

  if (!constructParts?.length) {
    return null;
  }

  return (
    <Box css={{ overflow: 'auto', mx: '$3' }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable direction="horizontal" droppableId="droppable">
          {(provided: DroppableProvided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <Box
                css={{
                  alignItems: 'top',
                  display: 'inline-flex',
                  margin: 'auto',
                  py: '$4',
                }}
              >
                {constructParts.map(({ id, ref }, index) => (
                  <Draggable draggableId={id} index={index} key={id}>
                    {(provided: DraggableProvided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <ConstructPartController
                          constructPartRef={ref}
                          key={id}
                          ref={setNewPartRef}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Box>
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </Box>
  );
}
