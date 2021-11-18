import { constructMachine } from 'components/construct-designer/construct-machine';
import { waitFor } from 'test/testUtils';
import { construct, constructPart } from 'test/__mocks__/construct';
import { interpret } from 'xstate';

jest.mock('xstate', () => {
  const originalModule = jest.requireActual('xstate');

  return {
    ...originalModule,
    sendParent: jest.fn(),
  };
});

describe('constructMachine', () => {
  const constructSvc = interpret(constructMachine);

  beforeEach(() => {
    constructSvc.start();
  });

  afterEach(() => {
    constructSvc.stop();
  });

  it('should "hydrate" constructParts from the loading state', () => {
    const {
      context: { constructParts },
      matches,
    } = constructMachine.transition('idle', {
      type: 'BOOTSTRAP',
      constructParts: [constructPart],
      constructId: construct.id,
    });

    expect(matches('ready')).toBeTruthy();

    constructMachine.transition('loading', { type: null });

    constructParts.forEach(
      ({
        ref: {
          state: { context },
        },
      }) => {
        expect(context).toEqual({
          ...constructPart,
          isActive: false,
          isColored: false,
        });
      }
    );
  });

  it('should sort constructParts on "ADD"', async () => {
    constructSvc.send({
      type: 'BOOTSTRAP',
      constructParts: [constructPart],
      constructId: construct.id,
    });

    constructSvc.onTransition(
      ({ context: { constructParts }, event: { type } }) => {
        const [
          {
            ref: {
              state: { context },
            },
          },
        ] = constructParts;

        if (type === 'INDEX') {
          expect(context).toEqual(
            expect.objectContaining({
              index: 0,
              part: expect.objectContaining({ name: 'Untitled part' }),
            })
          );
        }
      }
    );

    constructSvc.send({ type: 'CONSTRUCTPART.ADD', index: -1 });
    constructSvc.send({ type: 'INDEX' });
  });
});
