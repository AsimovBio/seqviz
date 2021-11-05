import type { Construct_Part, ConstructQuery, Part } from 'models/graphql';
import { mutate } from 'swr';
import { getAnnotationsFromParts } from 'utils/getAnnotationsFromParts';
import { sdk } from 'utils/request';
import { v4 as uuidv4 } from 'uuid';
import { actions, assign, createMachine, sendParent, spawn } from 'xstate';

import { createPartMachine } from './construct-part-machine';

const { pure, send } = actions;

type ConstructPart = Partial<Construct_Part> & { isNew: boolean; ref: any };

export type ConstructContext = {
  clipboardItems: ConstructPart[];
  constructId: string;
  constructParts: ConstructPart[];
  next: ConstructPart[][];
  prev: ConstructPart[][];
};

export interface ConstructStateSchema {
  context: ConstructContext;
  states: {
    loading: {};
    ready: {};
    updating: {};
    persisting: {};
  };
  value: any;
}

export type ConstructEvent = { type: string; [key: string]: any };

export const DEFAULT_PART = {
  type: {
    glyph:
      '<svg id="empty" viewBox="0 0 24 48"><rect id="part" x="6" y="12" width="12" height="12"></rect><path id="axis" fill="none" stroke="#000" stroke-miterlimit="10" d="M-.5 24h37"></path></svg>',
  },
  name: 'Untitled part',
};

const persist = ({ constructId, constructParts }) =>
  mutate(
    constructId,
    async (data: ConstructQuery | undefined) => {
      try {
        let cachedConstruct = {};

        if (data) {
          ({
            construct: [cachedConstruct],
          } = data);
        }

        const sequence = constructParts
          .map(
            ({
              ref: {
                state: {
                  context: {
                    part: { sequence = '' },
                  },
                },
              },
            }) => sequence
          )
          .join('');

        await sdk.UpdateConstruct({
          id: constructId,
          input: { sequence },
        });

        const input = constructParts.map(
          ({
            ref: {
              state: {
                context: { construct_id, id, index, orientation, part_id },
              },
            },
          }) => ({
            construct_id,
            id,
            index,
            orientation,
            part_id,
          })
        );

        const {
          insert_construct_part: { returning: updatedConstructParts },
        } = await sdk.InsertConstructPart({
          construct_id: constructId,
          input,
        });

        const {
          insert_annotation: { returning: updatedAnnotations },
        } = await sdk.InsertAnnotation({
          construct_id: constructId,
          input: getAnnotationsFromParts(
            constructParts.map(
              ({
                ref: {
                  state: {
                    context: { part },
                  },
                },
              }) => part
            ),
            constructId
          ),
        });

        return {
          construct: [
            {
              ...cachedConstruct,
              parts: updatedConstructParts,
              annotations: updatedAnnotations,
              sequence,
            },
          ],
        };
      } catch (err) {
        console.error(err);
      }

      return data;
    },
    false
  );

export const filterActive = ({
  ref: {
    state: {
      context: { isActive },
    },
  },
}) => isActive;

export const areConsecutiveParts = ({ constructParts }) => {
  const activeCParts = constructParts.filter(filterActive);

  if (!activeCParts.length) {
    return false;
  }

  const differenceArr = activeCParts.slice(1).map(
    (
      {
        ref: {
          state: {
            context: { index },
          },
        },
      },
      i
    ) => {
      const {
        ref: {
          state: { context },
        },
      } = activeCParts[i];

      return index - context.index;
    }
  );

  return differenceArr.every((value) => value === 1);
};

export const createConstructPart = (props?: Partial<Construct_Part>) => ({
  id: uuidv4(),
  isNew: true,
  orientation: 'forward',
  part: DEFAULT_PART as Part,
  ...props,
});

export const insertPart = (
  { constructId, constructParts },
  { id, ...rest }: Partial<ConstructPart>
) => {
  const { index } = rest;
  const newPart = createConstructPart({
    construct_id: constructId,
    ...rest,
  });

  const ref = spawn(createPartMachine(newPart), {
    name: `constructPart-${newPart.id}`,
  });

  if (index === 0) {
    const first = constructParts.shift();
    return [first, { ...newPart, ref }, ...constructParts];
  } else if (index < 0) {
    constructParts.unshift({
      ...newPart,
      ref,
    });
  } else {
    constructParts.splice(index, 0, {
      ...newPart,
      ref,
    });
  }

  return constructParts;
};

export const constructMachine = createMachine<
  ConstructContext,
  ConstructEvent,
  ConstructStateSchema
>(
  {
    id: 'construct',
    context: {
      clipboardItems: [],
      constructId: null,
      constructParts: [],
      next: [],
      prev: [],
    },
    initial: 'idle',
    states: {
      idle: {},
      loading: {
        entry: 'hydrate',
        always: 'ready',
      },
      ready: {},
      updating: {
        after: {
          TIMEOUT: { target: 'persisting' },
        },
      },
      error: {},
      persisting: {
        invoke: {
          id: 'persist',
          src: persist,
          onDone: {
            target: 'ready',
          },
          onError: {
            target: 'error',
            actions: () => {
              console.error('Save error!');
            },
          },
        },
      },
    },
    on: {
      BOOTSTRAP: {
        target: 'loading',
        actions: assign(
          (_, fallbackData) => fallbackData as Partial<ConstructContext>
        ),
        cond: 'isDiffConstruct',
      },
      COPY: {
        actions: ['copy'],
      },
      CUT: {
        actions: ['copy', 'cut'],
      },
      DELETE: {
        actions: ['updatePrev', 'deleteActive'],
      },
      MOVE: {
        actions: ['updatePrev', 'moveActive'],
        cond: 'areConsecutiveParts',
        target: 'updating',
      },
      PASTE: {
        actions: ['updatePrev', 'paste'],
        target: 'updating',
      },
      RECORD: {
        actions: ['updatePrev'],
      },
      INDEX: {
        actions: ['index'],
      },
      UNDO: {
        actions: ['updateNext', 'undo', 'hydrate'],
        cond: ({ prev }) => prev.length > 0,
        target: 'updating',
      },
      REDO: {
        actions: ['redo', 'hydrate'],
        cond: ({ next }) => next.length > 0,
        target: 'updating',
      },
      'CONSTRUCTPART.ADD': {
        actions: ['updatePrev', 'add'],
        target: 'updating',
      },
      'CONSTRUCTPART.COMMIT': {
        target: 'updating',
      },
      'CONSTRUCTPART.DELETE': {
        actions: ['updatePrev', 'delete'],
        cond: 'isNotOnly',
        target: 'updating',
      },
      'CONSTRUCTPART.MOVE': {
        actions: ['updatePrev', 'move'],
        cond: 'indexIsWithinBounds',
        target: 'updating',
      },
      'PARTLIB.ENGAGE': {
        actions: 'engage',
      },
      'PARTLIB.RESET': {
        actions: 'resetLib',
      },
      'PARTLIB.SELECT': {
        actions: ['updatePrev', 'swap'],
        target: 'updating',
      },
    },
  },
  {
    actions: {
      add: assign({
        constructParts: insertPart,
      }),
      engage: sendParent(() => ({
        type: 'PARTLIB.ENGAGE',
      })),
      copy: assign({
        clipboardItems: ({ constructParts }) =>
          constructParts.filter(filterActive),
      }),
      cut: pure(({ constructParts }) =>
        constructParts
          .filter(filterActive)
          .map(({ id, ref }) => send({ type: 'DELETE', id }, { to: ref }))
      ),
      paste: assign((context) => {
        const { clipboardItems, constructParts } = context;
        const activeConstructParts = constructParts.filter(filterActive);

        const lastActivePart =
          activeConstructParts[activeConstructParts.length - 1];

        let index = constructParts.length;

        if (lastActivePart) {
          ({
            ref: {
              state: {
                context: { index },
              },
            },
          } = lastActivePart);
        }

        [...clipboardItems].reverse().forEach(
          (
            {
              ref: {
                state: { context: cPartContext },
              },
            },
            i
          ) => insertPart(context, { ...cPartContext, index: index + 1 })
        );

        return context;
      }),
      delete: assign({
        constructParts: ({ constructParts }, { id: constructPartId }) =>
          constructParts.filter(({ id }) => id !== constructPartId),
      }),
      deleteActive: assign({
        constructParts: ({ constructParts }) =>
          constructParts.filter(
            ({
              ref: {
                state: {
                  context: { isActive },
                },
              },
            }) => !isActive
          ),
      }),
      move: assign({
        constructParts: (
          { constructParts },
          { id: constructPartId, index }
        ) => {
          const idx = constructParts.findIndex(
            ({ id }) => id === constructPartId
          );
          let existing;

          if (idx !== -1) {
            [existing] = constructParts.splice(idx, 1);
            constructParts.splice(index, 0, existing);
          }

          return constructParts;
        },
      }),
      moveActive: assign({
        constructParts: ({ constructParts }, { value }) => {
          const activeCParts = constructParts.filter(filterActive);
          const {
            ref: {
              state: {
                context: { index },
              },
            },
          } = activeCParts[0];

          const newIdx = index + parseInt(value, 10);

          if (newIdx >= 0) {
            const cParts = constructParts.splice(index, activeCParts.length);
            constructParts.splice(newIdx, 0, ...cParts);
          }

          return constructParts;
        },
      }),
      hydrate: assign({
        constructParts: ({ constructParts }) =>
          constructParts?.map((constructPart) => {
            const { id, part, ref } = constructPart;

            if (!part) {
              constructPart.part = DEFAULT_PART as Part;
            }

            // clean up old actors
            if (ref) {
              ref.stop();
              delete constructPart.ref;
            }

            return {
              ...constructPart,
              ref: spawn(
                createPartMachine({
                  ...constructPart,
                }),
                {
                  name: `constructPart-${id}`,
                }
              ),
            };
          }),
      }),
      resetParts: pure(({ constructParts }) =>
        constructParts.map(({ ref }) => send('RESET', { to: ref }))
      ),
      resetLib: sendParent(() => ({
        type: 'PARTLIB.RESET',
      })),
      index: pure(({ constructParts }) =>
        constructParts.map(({ ref }, i) =>
          send({ type: 'CHANGE', index: i }, { to: ref })
        )
      ),
      swap: pure(({ constructParts }, { part }) =>
        constructParts
          .filter(filterActive)
          .map(({ ref }) => send({ type: 'SWAP', part }, { to: ref }))
      ),
      updatePrev: assign(({ constructParts, prev }) => ({
        prev: [...prev, [...constructParts]],
        next: [],
      })),
      updateNext: assign(({ constructParts, next }) => {
        const partsContext = constructParts.map(
          ({ ref }) => ref.getSnapshot().context
        );
        return {
          next: [partsContext, ...next],
        };
      }),
      undo: assign(({ prev }) => ({
        constructParts: prev.pop(),
        prev,
      })),
      redo: assign(({ constructParts, next, prev }) => {
        const future = next[0];
        const newFuture = next.slice(1);

        return {
          next: newFuture,
          constructParts: future,
          prev: [...prev, constructParts],
        };
      }),
    },
    delays: { TIMEOUT: 1000 },
    guards: {
      areConsecutiveParts,
      isNotOnly: ({ constructParts }) => constructParts.length > 1,
      indexIsWithinBounds: ({ constructParts }, { index }) =>
        index >= 0 && index < constructParts.length,
      isDiffConstruct: (context, event) =>
        context.constructId !== event.constructId,
    },
  }
);
