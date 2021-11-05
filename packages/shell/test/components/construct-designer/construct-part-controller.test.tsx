import ConstructPartController from 'components/construct-designer/construct-part-controller';
import { createPartMachine } from 'components/construct-designer/construct-part-machine';
import { constructPart } from 'test/__mocks__/construct';
import { fireEvent, render, screen, waitFor } from 'test/testUtils';
import { interpret } from 'xstate';

jest.mock('utils/import');

jest.mock('xstate', () => {
  const originalModule = jest.requireActual('xstate');
  return {
    ...originalModule,
    sendParent: jest.fn(),
  };
});

describe('ConstructPartController', () => {
  const constructPartMachine = createPartMachine(constructPart);
  const constructPartSvc = interpret(constructPartMachine);

  const renderComponent = () =>
    render(
      <ConstructPartController
        constructPartRef={constructPartSvc}
        isLabelShown={true}
      />
    );

  beforeAll(() => {
    constructPartSvc.start();
  });

  afterAll(() => {
    constructPartSvc.stop();
  });

  it('toggles its active state on click', async () => {
    const sendSpy = jest.spyOn(constructPartSvc, 'send');
    const onTransitionSpy = jest.fn();
    constructPartSvc.onTransition(onTransitionSpy);

    renderComponent();

    await waitFor(() => {
      const trigger = screen.getByTestId('part-controller-activate');
      expect(trigger).toBeInTheDocument();
      fireEvent.click(trigger);
    });

    expect(sendSpy).toHaveBeenLastCalledWith({
      type: 'TOGGLE_ACTIVE',
    });

    expect(onTransitionSpy).toHaveBeenCalledWith(
      expect.objectContaining({ value: 'editing' }),
      { type: 'TOGGLE_ACTIVE' }
    );
  });
});
