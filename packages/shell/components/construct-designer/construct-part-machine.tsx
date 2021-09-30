import type { Construct_Part } from 'models/graphql';
import { actions, assign, createMachine, send, sendParent } from 'xstate';

export type ConstructPartContext = {
  prevPart: Construct_Part;
  isActive: boolean;
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
        isFocused: false,
        prevPart: constructPart,
      },
      on: {
        ADD: {
          target: 'reading',
          actions: 'add',
        },
        CHANGE: {
          actions: ['change'],
        },
        DELETE: 'deleted',
        FLIP: {
          actions: ['setOrientation', 'commit'],
        },
        FOCUS: {
          actions: 'setFocused',
        },
        MOVE: {
          actions: ['move', 'commit'],
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
          entry: assign({ prevPart: (context) => context }),
          on: {
            COMMIT: [
              {
                target: 'reading',
                actions: 'commit',
              },
            ],
            RESET: [
              {
                target: 'reading',
              },
            ],
            SWAP: {
              actions: 'swap',
            },
            TOGGLE_ACTIVE: {
              actions: ['activate', 'disengage'],
              target: 'reading',
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
        add: sendParent((_, { value: index }) => ({
          type: 'CONSTRUCTPART.ADD',
          index,
        })),
        activate: sendParent(({ id, isActive }) => ({
          type: 'CONSTRUCTPART.ACTIVATE',
          id,
          isActive,
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
        engage: sendParent(({ id }) => ({
          type: 'PARTLIB.ENGAGE',
          id,
        })),
        move: sendParent(({ id }, { value: index }) => ({
          type: 'CONSTRUCTPART.MOVE',
          id,
          index,
        })),
        disengage: sendParent(({ id }) => ({
          type: 'PARTLIB.RESET',
          id,
        })),
        setFocused: assign({
          isFocused: (_, { value }) => value,
        }),
        setOrientation: assign({
          orientation: ({ orientation }) =>
            orientation === 'forward' ? 'reverse' : 'forward',
        }),
        swap: assign({
          part: (_, { value }) => value,
          part_id: (_, { value: { id } }) => id,
        }),
      },
      guards: {
        isNew: ({ isNew }) => {
          return isNew;
        },
      },
    }
  );
