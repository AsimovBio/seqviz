import { createPartMachine } from 'components/construct-designer/construct-part-machine';
import { constructPart } from 'test/__mocks__/construct';

describe('partMachine', () => {
  const machine = createPartMachine({ context: constructPart });

  it('should transition to "editing" on the "TOGGLE_ACTIVE" event', () => {
    const actualState = machine.transition('reading', 'ACTIVATE');

    expect(actualState.matches('editing')).toBeTruthy();
  });

  it('should transition to "reading" on the "RESET" event', () => {
    const actualState = machine.transition('editing', { type: 'RESET' });

    expect(actualState.matches('reading')).toBeTruthy();
  });
});
