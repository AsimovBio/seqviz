import type { Construct_Part } from 'models/graphql';
import { actions, assign, createMachine, send, sendParent } from 'xstate';

export type ConstructPartContext = {
  isActive: boolean;
  isColored: boolean;
  isFocused: boolean;
  isNew?: boolean;
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

export const createPartMachine = (constructPart) =>
  createMachine<
    ConstructPartContext,
    ConstructPartEvent,
    ConstructPartStateSchema
  >(
    {
      id: 'constructPart',
      initial: 'reading',
      context: {
        ...constructPart,
        isActive: false,
        isColored: false,
        isFocused: false,
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
        FOCUS: {
          actions: 'setFocused',
        },
        MOVE: {
          actions: ['move'],
          cond: 'isActive',
        },
        RESET: {
          target: 'reading',
        },
      },
      states: {
        reading: {
          entry: actions.choose([
            {
              actions: send({ type: 'TOGGLE_ACTIVE' }),
              cond: 'isNew',
            },
          ]),
          on: {
            TOGGLE_ACTIVE: {
              actions: ['activate', 'engage'],
              target: 'editing',
            },
          },
        },
        editing: {
          on: {
            SWAP: {
              actions: 'swap',
              cond: 'isActive',
            },
            TOGGLE_ACTIVE: {
              actions: [
                assign({ isNew: false }) as any,
                'activate',
                'disengage',
              ],
              target: 'reading',
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
    },
    {
      actions: {
        activate: assign(({ isActive }) => ({
          isActive: !isActive,
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
        setFocused: assign({
          isFocused: (_, { value }) => value,
        }),
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
        isNew: ({ isNew }) => isNew,
      },
    }
  );
