import { createPartMachine } from 'components/construct-designer/construct-part-machine';
import ConstructToolbar from 'components/construct-designer/toolbar';
import { constructPart } from 'test/__mocks__/construct';
import { fireEvent, render, screen } from 'test/testUtils';
import { interpret } from 'xstate';

jest.mock('xstate', () => {
  const originalModule = jest.requireActual('xstate');
  return {
    ...originalModule,
    sendParent: jest.fn(),
  };
});

describe('ConstructToolbar', () => {
  const constructPartMachine = createPartMachine({ context: constructPart });
  const constructPartSvc = interpret(constructPartMachine);
  const onEventSpy = jest.fn();
  const onToggleLabelsSpy = jest.fn();

  const renderComponent = () =>
    render(
      <ConstructToolbar
        canMove={true}
        canRedo={true}
        canUndo={true}
        clipboardItems={[]}
        onEvent={onEventSpy}
        onToggleLabels={onToggleLabelsSpy}
      />
    );

  beforeAll(() => {
    constructPartSvc.start();
  });

  beforeEach(renderComponent);

  afterAll(() => {
    constructPartSvc.stop();
  });

  it('handles events', async () => {
    const trigger = await screen.findByTestId('button-toggle-flip');
    fireEvent.click(trigger);

    expect(onEventSpy).toHaveBeenLastCalledWith({
      type: 'FLIP',
    });
  });
});
