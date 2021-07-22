import type { Construct_Part, ConstructQuery, Part } from 'models/graphql';
import { mutate } from 'swr';
import { sdk } from 'utils/request';
import { v4 as uuidv4 } from 'uuid';
import { assign, createMachine, sendParent, spawn } from 'xstate';

import { createPartMachine } from './construct-part-machine';

type ConstructPart = Partial<Construct_Part> & { isNew: boolean; ref: any };

export type ConstructContext = {
  constructParts: ConstructPart[];
  constructId: string;
};

interface ConstructStateSchema {
  context: ConstructContext;
  states: {
    loading: {};
    ready: {};
  };
  value: any;
}

export type ConstructEvent = { type: string; [key: string]: any };

const DEFAULT_PART = {
  glyph:
    '<svg id="help-circle" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
  name: 'Untitled',
};

export const createConstructPart = (props: Partial<Construct_Part>) => ({
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
      constructParts: [],
      constructId: null,
    },
    initial: 'idle',
    states: {
      idle: {
        on: {
          BOOTSTRAP: {
            target: 'loading',
            actions: assign(
              (_, initialData) => initialData as Partial<ConstructContext>
            ),
          },
        },
      },
      loading: {
        entry: 'rehydrate',
        always: 'ready',
      },
      ready: {},
    },
    on: {
      'CONSTRUCTPART.ACTIVATE': { actions: 'activate' },
      'CONSTRUCTPART.ADD': {
        actions: ['add', 'sort', 'persist'],
      },
      'CONSTRUCTPART.COMMIT': {
        actions: ['commit', 'persist'],
      },
      'CONSTRUCTPART.DELETE': {
        actions: ['delete', 'sort', 'persist'],
      },
      'CONSTRUCTPART.MOVE': {
        actions: ['move', 'sort', 'persist'],
        cond: 'indexIsWithinBounds',
      },
      'PARTLIB.ENGAGE': {
        actions: sendParent(() => ({
          type: 'PARTLIB.ENGAGE',
        })),
      },
      'PARTLIB.SELECT': { actions: ['swap', 'commit', 'persist'] },
    },
  },
  {
    actions: {
      add: assign({
        constructParts: ({ constructId, constructParts }, { index }) => {
          constructParts.forEach(({ ref }) =>
            ref.send('CHANGE', { isNew: false })
          );
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
        constructParts.forEach(({ ref }) =>
          ref.send('CHANGE', { isActive: false })
        );

        const activeConstructPart = constructParts.find(
          ({ id }) => id === constructPartId
        );

        activeConstructPart?.ref.send('CHANGE', {
          isActive: !isActive,
        });
      },
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
      persist: ({ constructId, constructParts }) => {
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

              const {
                insert_construct_part: { returning: updatedConstructParts },
              } = await sdk.InsertConstructPart({
                construct_id: constructId,
                input: constructParts
                  .filter(({ part_id }) => !!part_id)
                  .map(({ construct_id, id, index, orientation, part_id }) => ({
                    construct_id,
                    id,
                    index,
                    orientation,
                    part_id,
                  })),
              });

              return {
                construct: [
                  {
                    ...cachedConstruct,
                    construct_parts: updatedConstructParts,
                  },
                ],
              };
            } catch (err) {
              console.error(err);
            }

            return data;
          },
          true
        );
      },
      rehydrate: assign({
        constructParts: ({ constructParts }, {}) =>
          constructParts.map((constructPart) => ({
            ...constructPart,
            ref: spawn(createPartMachine(constructPart), {
              name: `constructPart-${constructPart.id}`,
            }),
          })),
      }),
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
    },
    guards: {
      indexIsWithinBounds: ({ constructParts }, { index }) =>
        index >= 0 && index < constructParts.length,
    },
  }
);
