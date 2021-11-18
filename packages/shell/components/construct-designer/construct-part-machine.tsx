import type { Construct_Part } from 'models/graphql';
import { actions, assign, createMachine, sendParent } from 'xstate';

const { choose } = actions;

export type ConstructPartContext = {
  isActive: boolean;
  isColored: boolean;
} & Construct_Part;

interface ConstructPartStateSchema {
  context: ConstructPartContext;
  states: {
    reading: {};
    editing: {};
    deleted: {};
  };
  value: any;
}

export type ConstructPartEvent = { type: string; [key: string]: any };

export const createPartMachine = (config) => {
  const { context, ...restConfig } = config;

  return createMachine<
    ConstructPartContext,
    ConstructPartEvent,
    ConstructPartStateSchema
  >(
    {
      id: 'constructPart',
      initial: 'reading',
      context: {
        ...context,
        isActive: false,
        isColored: false,
      },
      on: {
        ADD: {
          actions: 'add',
        },
        CHANGE: {
          actions: ['change'],
        },
        DELETE: {
          target: 'deleted',
          cond: 'isActive',
        },
        FLIP: {
          actions: ['record', 'setOrientation', 'commit'],
          cond: 'isActive',
        },
        MOVE: {
          actions: ['move'],
          cond: 'isActive',
        },
        SELECT_START: {
          actions: ['selectStart'],
        },
        SELECT_CHANGE: {
          actions: ['selectChange'],
          cond: 'isActive',
        },
      },
      states: {
        reading: {
          entry: choose([
            {
              actions: assign({ isActive: false }) as any,
            },
          ]),
          on: {
            ACTIVATE: {
              actions: ['activate', 'engage'],
              target: 'editing',
            },
          },
        },
        editing: {
          entry: assign({ isActive: true }) as any,
          on: {
            RESET: {
              target: 'reading',
            },
            SWAP: {
              actions: 'swap',
              cond: 'isActive',
            },
            TOGGLE_COLOR: {
              actions: ['record', 'setColor', 'commit'],
              cond: 'isActive',
            },
          },
        },
        deleted: {
          onEntry: 'delete',
        },
      },
      ...restConfig,
    },
    {
      actions: {
        activate: sendParent((context) => ({
          type: 'CONSTRUCTPART.ACTIVATE',
          context,
        })),
        add: sendParent(({ index }) => ({
          type: 'CONSTRUCTPART.ADD',
          index: index + 1,
        })),
        change: assign((context, { type, ...rest }) => ({
          ...context,
          ...rest,
        })),
        commit: sendParent((context) => ({
          type: 'CONSTRUCTPART.COMMIT',
          ...context,
        })),
        delete: sendParent(({ id }) => ({
          type: 'CONSTRUCTPART.DELETE',
          id,
        })),
        disengage: sendParent(({ id }) => ({
          type: 'PARTLIB.RESET',
          id,
        })),
        record: sendParent(() => ({
          type: 'RECORD',
        })),
        engage: sendParent(({ id }) => ({
          type: 'PARTLIB.ENGAGE',
          id,
        })),
        move: sendParent(({ id, index }, { value }) => ({
          type: 'CONSTRUCTPART.MOVE',
          id,
          index: index + parseInt(value, 10),
        })),
        selectStart: sendParent((context) => ({
          type: 'CONSTRUCTPART.SELECT_START',
          context,
        })),
        selectChange: sendParent((context) => ({
          type: 'CONSTRUCTPART.SELECT_CHANGE',
          context,
        })),
        setColor: assign({
          isColored: (_, { value }) => value,
        }),
        setOrientation: assign({
          orientation: ({ orientation }) =>
            orientation === 'forward' ? 'reverse' : 'forward',
        }),
        swap: assign({
          part: (_, { part }) => part,
          part_id: (_, { part: { id } }) => id,
        }),
      },
      guards: {
        isActive: ({ isActive }) => isActive,
      },
    }
  );
};
