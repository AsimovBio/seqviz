import type {
  Construct_Part,
  Construct_Part_Insert_Input,
  ConstructQuery,
  Part,
} from 'models/graphql';
import { mutate } from 'swr';
import { getAnnotationsFromParts } from 'utils/getAnnotationsFromParts';
import { sdk } from 'utils/request';
import { v4 as uuidv4 } from 'uuid';
import { actions, assign, createMachine, sendParent, spawn } from 'xstate';

import { createPartMachine } from './construct-part-machine';

const { pure, send } = actions;

type ConstructPart = Partial<Construct_Part> & { ref: any };

export type ConstructContext = {
  anchorIndex: number;
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

export type ConstructEvent = {
  type: string;
  [key: string]: any;
};

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

        const input: Construct_Part_Insert_Input = constructParts.map(
          ({
            ref: {
              state: {
                context: {
                  construct_id,
                  id,
                  index,
                  orientation,
                  part_id,
                  part: {
                    id: partId,
                    name: partName,
                    type: { id: typeId },
                  },
                },
              },
            },
          }) => {
            const payload = {
              construct_id,
              id,
              index,
              orientation,
              part_id,
            };

            if (!partId) {
              Object.assign(payload, {
                partId: undefined,
                part: {
                  data: { name: partName, part_type_id: typeId },
                },
              });
            }

            return payload;
          }
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
          input: getAnnotationsFromParts(updatedConstructParts, constructId),
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

export const filterActive = (cPart) => {
  if (!cPart?.ref) {
    return false;
  }

  const {
    ref: {
      state: {
        context: { isActive },
      },
    },
  } = cPart;

  return isActive;
};

export const arePartsDiscontiguous = (
  { constructParts }: ConstructContext,
  event?: ConstructEvent
) => {
  const activeCParts = [...constructParts, event?.context].filter(filterActive);

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
      i: number
    ) => {
      const {
        ref: {
          state: { context },
        },
      } = activeCParts[i];

      return index - context.index;
    }
  );

  return differenceArr.some((value) => value !== 1);
};

export const createConstructPart = (props?: Partial<Construct_Part>) => ({
  id: uuidv4(),
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

  const ref = spawn(
    createPartMachine({
      context: newPart,
      initial: 'editing',
    }),
    {
      name: `constructPart-${newPart.id}`,
    }
  );

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
      anchorIndex: null,
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
        target: 'updating',
      },
      MOVE: {
        actions: ['updatePrev', 'moveActive'],
        cond: (context) => !arePartsDiscontiguous(context),
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
      RESET: {
        actions: 'resetParts',
      },
      'CONSTRUCTPART.ACTIVATE': {
        actions: 'resetParts',
        cond: 'arePartsDiscontiguous',
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
        cond: 'isIndexWithinBounds',
        target: 'updating',
      },
      'CONSTRUCTPART.SELECT_START': {
        actions: ['selectStart', 'resetParts'],
      },
      'CONSTRUCTPART.SELECT_CHANGE': {
        actions: ['selectChange'],
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
      resetParts: pure(({ constructParts }, { context }) =>
        constructParts
          .filter(
            ({
              ref: {
                state: { context: cPart },
              },
            }) => cPart.id !== context?.id
          )
          .map(({ ref }) => send({ type: 'RESET' }, { to: ref }))
      ),
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
        constructParts: ({ constructParts }, { index: newIdx, value }) => {
          const activeCParts = constructParts.filter(filterActive);

          let {
            ref: {
              state: {
                context: { index },
              },
            },
          } = activeCParts[0];

          if (value) newIdx = index + parseInt(value, 10);

          if (newIdx && newIdx >= 0) {
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
                  context: constructPart,
                }),
                {
                  name: `constructPart-${id}`,
                }
              ),
            };
          }),
      }),
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
      selectStart: assign({
        anchorIndex: (_, { context: { index }, movementX }) => index,
      }),
      selectChange: pure(
        ({ anchorIndex, constructParts }, { context: { id, index } }) => {
          const activeCParts = constructParts.filter(filterActive);

          if (anchorIndex === index) {
            return activeCParts.map(({ ref }) =>
              send({ type: 'RESET' }, { to: ref })
            );
          }

          const method = anchorIndex > index ? 'shift' : 'pop';
          const { ref } = activeCParts[method]();

          if (ref.state.context.id !== id) {
            return send({ type: 'RESET' }, { to: ref });
          }

          return null;
        }
      ),
    },
    delays: { TIMEOUT: 1000 },
    guards: {
      arePartsDiscontiguous,
      isNotOnly: ({ constructParts }) => constructParts.length > 1,
      isIndexWithinBounds: ({ constructParts }, { index }) =>
        index >= 0 && index < constructParts.length,
      isDiffConstruct: (context, event) =>
        context.constructId !== event.constructId,
    },
  }
);
