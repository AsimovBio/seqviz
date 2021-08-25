import { createMachine, sendParent } from 'xstate';

export type PartLibContext = {};

interface PartLibStateSchema {
  context: PartLibContext;
  states: {
    selecting: {};
    ready: {};
  };
  value: any;
}

export type PartLibEvent = { type: string; [key: string]: any };

export const partLibMachine = createMachine<
  PartLibContext,
  PartLibEvent,
  PartLibStateSchema
>(
  {
    id: 'partLib',
    context: {},
    initial: 'ready',
    states: {
      ready: {
        on: {
          'PARTLIB.ENGAGE': {
            target: 'selecting',
          },
        },
      },
      selecting: {
        on: {
          'PARTLIB.RESET': {
            target: 'ready',
          },
          SELECT: { actions: 'select' },
        },
      },
    },
  },
  {
    actions: {
      select: sendParent((_, { value }) => ({
        type: 'PARTLIB.SELECT',
        part: value,
        part_id: value.id,
      })),
    },
    guards: {},
  }
);
