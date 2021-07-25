import { useActor } from '@xstate/react';
import type { Construct } from 'models/graphql';
import dynamic from 'next/dynamic';
import { DashboardContext } from 'pages';
import { useContext, useEffect, useState } from 'react';
import type {
  DraggableProvided,
  DroppableProvided,
  DropResult,
  OnDragEndResponder,
} from 'react-beautiful-dnd';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { createConstructPart } from './construct-machine';

import ConstructPartController from './construct-part-controller';

const Box = dynamic(() => import('common/components/box'));

type Props = Partial<Construct>;

export default function ConstructDesigner({
  construct_parts: initialConstructParts,
  id: constructId,
}: Props) {
  const context = useContext(DashboardContext);
  const {
    state: {
      children: { constructSvc },
    },
  } = context;

  const [state, send] = useActor<any, any>(constructSvc);

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

  if (!constructParts) {
    return null;
  }

  return (
    <Box css={{ overflow: 'auto' }}>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable direction="horizontal" droppableId="droppable">
          {(provided: DroppableProvided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <Box
                css={{
                  alignItems: 'center',
                  display: 'inline-flex',
                  margin: 'auto',
                  padding: '2em',
                }}
              >
                {constructParts?.map(({ id, ref }, index) => (
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
