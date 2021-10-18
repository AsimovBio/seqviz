import type { Construct_Part, ConstructQuery, Part } from 'models/graphql';
import { mutate } from 'swr';
import { getAnnotationsFromParts } from 'utils/getAnnotationsFromParts';
import { sdk } from 'utils/request';
import { v4 as uuidv4 } from 'uuid';
import { assign, createMachine, sendParent, spawn } from 'xstate';

import { createPartMachine } from './construct-part-machine';

type ConstructPart = Partial<Construct_Part> & { isNew: boolean; ref: any };

export type ConstructContext = {
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
    persisting: {};
  };
  value: any;
}

export type ConstructEvent = { type: string; [key: string]: any };

export const DEFAULT_PART = {
  type: {
    glyph:
      '<svg id="empty" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="20"/></svg>',
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
          .map(({ part: { sequence = '' } }) => sequence)
          .join('');

        await sdk.UpdateConstruct({
          id: constructId,
          input: { sequence },
        });

        const input = constructParts.map(
          ({ construct_id, id, index, orientation, part_id }) => ({
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
            constructParts.map(({ part }) => part),
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

export const createConstructPart = (props?: Partial<Construct_Part>) => ({
  ...props,
  id: uuidv4(),
  isNew: true,
  orientation: 'forward',
  part: DEFAULT_PART as Part,
});

export const constructMachine = createMachine<
  ConstructContext,
  ConstructEvent,
  ConstructStateSchema
>(
  {
    id: 'construct',
    context: {
      prev: [],
      constructParts: [],
      next: [],
      constructId: null,
    },
    initial: 'idle',
    states: {
      idle: {},
      loading: {
        entry: 'hydrate',
        always: 'ready',
      },
      ready: {},
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
          (_, initialData) => initialData as Partial<ConstructContext>
        ),
        cond: 'isDiffConstruct',
      },
      'CONSTRUCTPART.ACTIVATE': { actions: 'activate' },
      'CONSTRUCTPART.ADD': {
        actions: ['updatePrev', 'add', 'sort'],
        target: 'persisting',
      },
      'CONSTRUCTPART.COMMIT': {
        actions: ['updatePrev', 'commit'],
        target: 'persisting',
      },
      'CONSTRUCTPART.DELETE': {
        actions: ['updatePrev', 'delete', 'sort'],
        cond: 'isNotOnly',
        target: 'persisting',
      },
      'CONSTRUCTPART.MOVE': {
        actions: ['updatePrev', 'move', 'sort'],
        cond: 'indexIsWithinBounds',
        target: 'persisting',
      },
      'PARTLIB.ENGAGE': {
        actions: ['activate', 'engage'],
      },
      'PARTLIB.RESET': {
        actions: 'reset',
      },
      'PARTLIB.SELECT': {
        actions: ['updatePrev', 'swap', 'commit'],
        target: 'persisting',
      },
      UNDO: {
        actions: ['undo', 'hydrate', 'sort'],
        cond: ({ prev }) => prev.length > 0,
      },
      REDO: {
        actions: ['redo', 'hydrate', 'sort'],
        cond: ({ next }) => next.length > 0,
      },
    },
  },
  {
    actions: {
      add: assign({
        constructParts: ({ constructId, constructParts }, { index }) => {
          const newPart = createConstructPart({
            construct_id: constructId,
            index,
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
        },
      }),
      activate: ({ constructParts }, { id: constructPartId, isActive }) => {
        constructParts.forEach(({ id, ref }) => {
          if (id === constructPartId) {
            ref.send('CHANGE', {
              isActive: !isActive,
              isNew: false,
            });
          } else {
            ref.send('CHANGE', { isActive: false });
            ref.send('RESET');
          }
        });
      },
      engage: sendParent(() => ({
        type: 'PARTLIB.ENGAGE',
      })),
      commit: assign({
        constructParts: ({ constructParts }, { type, ...value }) => {
          const activeConstructPart = constructParts.find(
            ({
              id,
              ref: {
                state: {
                  context: { isActive },
                },
              },
            }) => isActive || id === value.id
          );

          return constructParts.map((constructPart) =>
            activeConstructPart?.id === constructPart.id
              ? {
                  ...constructPart,
                  ...value,
                }
              : constructPart
          );
        },
      }),
      delete: assign({
        constructParts: ({ constructParts }, { id: constructPartId }) =>
          constructParts.filter(({ id }) => id !== constructPartId),
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
            existing = constructParts[idx];
            constructParts.splice(idx, 1);
            constructParts.splice(index, 0, existing);
          }

          return constructParts;
        },
      }),
      hydrate: assign({
        constructParts: ({ constructParts }) =>
          constructParts?.map((constructPart) => {
            if (!constructPart.part) {
              constructPart.part = DEFAULT_PART as Part;
            }

            return {
              ...constructPart,
              ref: spawn(createPartMachine(constructPart), {
                name: `constructPart-${constructPart.id}`,
              }),
            };
          }),
      }),
      reset: sendParent(() => ({
        type: 'PARTLIB.RESET',
      })),
      sort: assign({
        constructParts: ({ constructParts }) =>
          constructParts.map((constructPart, i) => {
            constructPart.ref.send('CHANGE', { index: i });
            return { ...constructPart, index: i };
          }),
      }),
      swap: ({ constructParts }, { part, part_id }) => {
        const activeConstructPart = constructParts.find(
          ({
            ref: {
              state: {
                context: { isActive },
              },
            },
          }) => isActive
        );

        activeConstructPart?.ref.send('CHANGE', { part, part_id });
      },
      updatePrev: assign(({ constructParts, prev }) => ({
        prev: [...prev, [...constructParts]],
        next: [],
      })),
      undo: assign(({ constructParts, next, prev }) => {
        const previous = prev.pop();

        return {
          constructParts: previous,
          next: [constructParts, ...next],
          prev,
        };
      }),
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
    guards: {
      isNotOnly: ({ constructParts }) => constructParts.length > 1,
      indexIsWithinBounds: ({ constructParts }, { index }) =>
        index >= 0 && index < constructParts.length,
      isDiffConstruct: (context, event) =>
        context.constructId !== event.constructId,
    },
  }
);
