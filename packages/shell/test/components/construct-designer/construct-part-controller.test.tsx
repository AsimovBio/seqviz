import { fireEvent, waitFor } from '@testing-library/react';
import ConstructPartController from 'components/construct-designer/construct-part-controller';
import { createPartMachine } from 'components/construct-designer/construct-part-machine';
import { constructPart } from 'test/__mocks__/construct';
import { render, screen } from 'test/utils';
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
    render(<ConstructPartController constructPartRef={constructPartSvc} />);

  beforeAll(() => {
    constructPartSvc.start();
  });

  afterAll(() => {
    constructPartSvc.stop();
  });

  it('handles events', async () => {
    const sendSpy = jest.spyOn(constructPartSvc, 'send');
    renderComponent();

    fireEvent.mouseOver(await screen.findByTestId('construct-part-container'));
    await waitFor(() => {
      expect(sendSpy).toHaveBeenCalledWith({
        type: 'FOCUS',
        value: true,
      });
    });

    await waitFor(() => {
      const trigger = screen.getByTestId('toggle-flip');
      expect(trigger).toBeInTheDocument();
      fireEvent.click(trigger);
    });

    expect(sendSpy).toHaveBeenLastCalledWith({
      type: 'FLIP',
      value: '',
    });
  });

  it('toggles its active state on click', async () => {
    const sendSpy = jest.spyOn(constructPartSvc, 'send');
    const onTransitionSpy = jest.fn();
    constructPartSvc.onTransition(onTransitionSpy);

    renderComponent();

    await waitFor(() => {
      const trigger = screen.getByTestId('toggle-active');
      expect(trigger).toBeInTheDocument();
      fireEvent.click(trigger);
    });

    expect(sendSpy).toHaveBeenLastCalledWith({
      type: 'ENGAGE',
      value: '',
    });

    expect(onTransitionSpy).toHaveBeenCalledWith(
      expect.objectContaining({ value: 'editing' }),
      { type: 'ENGAGE', value: '' }
    );
  });
});
