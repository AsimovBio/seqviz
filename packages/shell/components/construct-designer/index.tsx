import { useActor } from '@xstate/react';
import { DashboardContext } from 'components/layout/dashboard-layout';
import type { Construct } from 'models/graphql';
import dynamic from 'next/dynamic';
import { memo, useCallback, useContext, useEffect, useState } from 'react';
import type {
  DraggableProvided,
  DroppableProvided,
  DropResult,
  OnDragEndResponder,
} from 'react-beautiful-dnd';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useHotkeys } from 'react-hotkeys-hook';
import { getModule } from 'utils/import';

import {
  areConsecutiveParts,
  createConstructPart,
  filterActive,
} from './construct-machine';
import ConstructPartController from './construct-part-controller';
import ConstructToolbar from './toolbar';

const Box: any = dynamic(getModule('./components/box'), { ssr: false });

type Props = { construct: Partial<Construct> };

export function ConstructDesigner({ construct }: Props) {
  const dashboardContext = useContext(DashboardContext);
  const {
    state: {
      children: { constructSvc },
    },
  } = dashboardContext;

  const [state, send] = useActor<any, any>(constructSvc);
  const { clipboardItems, constructParts, prev, next } = state.context;
  const [areLabelsShowing, setLabelsShowing] = useState(true);

  useEffect(() => {
    const { parts: initialConstructParts, id: constructId } = construct;

    const constructParts = initialConstructParts?.length
      ? initialConstructParts
      : [createConstructPart({ construct_id: constructId, index: 0 })];

    send({
      type: 'BOOTSTRAP',
      constructParts,
      constructId,
    });
  }, [construct, send]);

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

  // TODO: move all of these to a custom hook and scope to ConstructDesigner
  useHotkeys('command+z', (e) => {
    e.preventDefault();
    send('UNDO');
    send('INDEX');
  });

  useHotkeys('command+shift+z', (e) => {
    e.preventDefault();
    send('REDO');
    send('INDEX');
  });

  useHotkeys('command+c', (e) => {
    e.preventDefault();
    send('COPY');
  });

  useHotkeys('command+x', (e) => {
    e.preventDefault();
    send('CUT');
    send('INDEX');
  });

  useHotkeys('command+v', (e) => {
    e.preventDefault();
    send('PASTE');
    send('INDEX');
  });

  const handleEvent = useCallback(
    (event) => {
      const { type } = event;

      switch (type) {
        case 'COPY':
        case 'CUT':
        case 'DELETE':
        case 'MOVE':
        case 'PASTE':
        case 'REDO':
        case 'UNDO':
          send(event);
          break;
        default:
          constructParts.forEach(({ ref: { send } }) => {
            send(event);
          });
          break;
      }
      send('INDEX');
    },
    [constructParts, send]
  );

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
    send('INDEX');
  };

  if (!constructParts?.length) {
    return null;
  }

  return (
    <Box
      css={{
        display: 'flex',
      }}
    >
      <ConstructToolbar
        canMove={areConsecutiveParts(state.context)}
        canRedo={!!next.length}
        canUndo={!!prev.length}
        clipboardItems={clipboardItems}
        onEvent={handleEvent}
        onToggleLabels={() => setLabelsShowing(!areLabelsShowing)}
      />
      <Box
        css={{
          display: 'flex',
          flex: 1,
          overflow: 'auto',
          p: '$3',
        }}
      >
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable direction="horizontal" droppableId="droppable">
            {(provided: DroppableProvided) => (
              <div ref={provided.innerRef} {...provided.droppableProps}>
                <Box
                  css={{
                    alignItems: 'top',
                    display: 'inline-flex',
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
                            isLabelShown={areLabelsShowing}
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
    </Box>
  );
}

export default memo(ConstructDesigner);
