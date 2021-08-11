import { constructMachine } from 'components/construct-designer/construct-machine';
import { construct, constructPart } from 'test/__mocks__/construct';
import * as xstate from 'xstate';

describe('constructMachine', () => {
  const constructSvc = xstate.interpret(constructMachine);

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
          isFocused: false,
          prevPart: constructPart,
        });
      }
    );
  });

  it('should sort constructParts on "ADD"', () => {
    constructSvc.send({
      type: 'BOOTSTRAP',
      constructParts: [constructPart],
      constructId: construct.id,
    });

    constructSvc.onTransition(
      ({ context: { constructParts }, event: { type } }) => {
        if (type === 'CONSTRUCTPART.ADD') {
          expect(constructParts[0]).toEqual(
            expect.objectContaining({
              index: 0,
              part: expect.objectContaining({ name: 'Untitled part' }),
            })
          );
        }
      }
    );

    constructSvc.send({ type: 'CONSTRUCTPART.ADD', index: -1 });
  });
});
