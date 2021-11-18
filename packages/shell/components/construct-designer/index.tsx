import { useActor } from '@xstate/react';
import { DashboardContext } from 'components/layout/dashboard-layout';
import type { Construct, Part_Type } from 'models/graphql';
import dynamic from 'next/dynamic';
import { memo, useCallback, useContext, useEffect, useState } from 'react';
import type {
  DraggableProvided,
  DraggableStateSnapshot,
  DragStart,
  DroppableProvided,
  DroppableStateSnapshot,
  DropResult,
  OnDragEndResponder,
  OnDragStartResponder,
} from 'react-beautiful-dnd';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { useHotkeys } from 'react-hotkeys-hook';
import { getBackgroundColor } from 'utils/dnd';
import { getModule } from 'utils/import';

import {
  arePartsDiscontiguous,
  createConstructPart,
  DEFAULT_PART,
} from './construct-machine';
import ConstructPartController from './construct-part-controller';
import PartPalette from './part-palette';
import ConstructToolbar from './toolbar';

const Box: any = dynamic(getModule('./components/box'), { ssr: false });
const ScrollArea: any = dynamic(getModule('./components/scroll-area'), {
  ssr: false,
});

type Props = { construct: Partial<Construct>; partTypes: Partial<Part_Type>[] };

export function ConstructDesigner({ construct, partTypes }: Props) {
  const dashboardContext = useContext(DashboardContext);
  const {
    state: {
      children: { constructSvc },
    },
  } = dashboardContext;

  const [state, send] = useActor<any, any>(constructSvc);
  const { clipboardItems, constructParts, prev, next } = state.context;
  const [areLabelsShowing, setLabelsShowing] = useState(true);
  const [isCombineEnabled, setCombineEnabled] = useState(false);

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

  const onDragStart: OnDragStartResponder = useCallback(
    ({ draggableId, source: { droppableId } }: DragStart) => {
      setCombineEnabled(droppableId === 'palette');

      const activeDraggable = constructParts.find(
        ({ id }) => id === draggableId
      );

      if (!activeDraggable) {
        send({ type: 'RESET' });
      }
    },
    [constructParts, send]
  );

  const onDragEnd: OnDragEndResponder = useCallback(
    ({
      combine,
      destination,
      draggableId,
      source: { droppableId },
      reason,
    }: DropResult) => {
      let index = destination?.index;

      if (reason === 'CANCEL') {
        return;
      }

      if (droppableId === 'palette') {
        const type = partTypes.find(
          ({ id: partTypeId }) => partTypeId === parseInt(draggableId, 10)
        );

        if (!type) return;

        if (combine) {
          index = constructParts.findIndex(
            ({ id }) => id === combine.draggableId
          );
          send({ type: 'CONSTRUCTPART.DELETE', id: combine.draggableId });
        }

        if (typeof index === 'undefined') {
          return;
        }

        send({
          type: 'CONSTRUCTPART.ADD',
          part: { ...DEFAULT_PART, type },
          index,
        });
      } else {
        send({
          type: 'MOVE',
          index,
        });
      }
      send('INDEX');
    },
    [constructParts, partTypes, send]
  );

  if (!constructParts?.length) {
    return null;
  }

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      <Box
        css={{
          display: 'grid',
          flex: 1,
          gridTemplateColumns: '4.25em 1fr',
          gridTemplateRows: 'min-content 1fr',
          gridTemplateAreas: '"toolbar palette" \
            "toolbar ."',
        }}
      >
        <ConstructToolbar
          canMove={!arePartsDiscontiguous(state.context)}
          canRedo={!!next.length}
          canUndo={!!prev.length}
          clipboardItems={clipboardItems}
          onEvent={handleEvent}
          onToggleLabels={() => setLabelsShowing(!areLabelsShowing)}
        />
        <PartPalette onEvent={handleEvent} partTypes={partTypes} />
        <ScrollArea asChild>
          <Droppable
            direction="horizontal"
            droppableId="schematic"
            isCombineEnabled={isCombineEnabled}
          >
            {(
              { droppableProps, innerRef, placeholder }: DroppableProvided,
              { draggingFromThisWith, isDraggingOver }: DroppableStateSnapshot
            ) => {
              return (
                <Box
                  {...droppableProps}
                  css={{
                    justifyContent: 'center',
                    display: 'flex',
                    px: '$5',
                    py: '$3',
                  }}
                  forwardedRef={innerRef}
                >
                  {constructParts.map(({ id, ref }) => {
                    const {
                      state: {
                        context: { index, isActive },
                      },
                    } = ref;

                    return (
                      <Draggable
                        draggableId={id}
                        index={index}
                        isDragDisabled={!isActive}
                        key={id}
                      >
                        {(
                          {
                            innerRef,
                            draggableProps,
                            dragHandleProps,
                          }: DraggableProvided,
                          snapshot: DraggableStateSnapshot
                        ) => {
                          return (
                            <Box
                              forwardedRef={innerRef}
                              {...draggableProps}
                              {...dragHandleProps}
                              css={{
                                button: {
                                  backgroundColor: getBackgroundColor(snapshot),
                                  pointerEvents: snapshot.combineTargetFor
                                    ? 'none'
                                    : 'auto',
                                },
                              }}
                            >
                              <ConstructPartController
                                constructPartRef={ref}
                                isLabelShown={areLabelsShowing}
                                key={id}
                              />
                            </Box>
                          );
                        }}
                      </Draggable>
                    );
                  })}
                  {placeholder}
                </Box>
              );
            }}
          </Droppable>
        </ScrollArea>
      </Box>
    </DragDropContext>
  );
}

export default memo(ConstructDesigner);
