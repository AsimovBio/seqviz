import { fireEvent, getByTestId } from '@testing-library/react';
import ConstructDesigner from 'components/construct-designer';
import { dashboardMachine } from 'components/dashboard/dashboard-machine';
import { DashboardContext } from 'pages';
import { construct } from 'test/__mocks__/construct';
import { render, screen } from 'test/utils';
import { interpret } from 'xstate';

jest.mock('utils/import');

describe('ConstructDesigner', () => {
  const dashboardSvc = interpret(dashboardMachine);
  let state;
  let send;

  const renderComponent = () => {
    const DashboardWrapper = ({ children }) => {
      return (
        <DashboardContext.Provider
          value={{ state, send, service: dashboardSvc }}
        >
          {children}
        </DashboardContext.Provider>
      );
    };

    return render(<ConstructDesigner {...(construct as any)} />, {
      wrapper: DashboardWrapper,
    });
  };

  const clickPart = (part, triggerId) => {
    const trigger = getByTestId(part, triggerId);
    expect(trigger).toBeInTheDocument();
    fireEvent.click(trigger);
  };

  beforeAll(() => {
    dashboardSvc.start();
    ({ send, state } = dashboardSvc);
  });

  afterAll(() => {
    dashboardSvc.stop();
  });

  it('renders without errors', async () => {
    const {
      children: { constructSvc },
    } = state;
    const sendSpy = jest.spyOn(constructSvc, 'send');
    renderComponent();

    expect(
      await screen.findAllByTestId('construct-part-container')
    ).toHaveLength(construct.construct_parts.length);

    expect(sendSpy).toHaveBeenCalledWith({
      type: 'BOOTSTRAP',
      constructParts: construct.construct_parts,
      constructId: construct.id,
    });
  });

  it('handles activation of part when swap mode is clicked', () => {
    renderComponent();

    const partControllers = screen.getAllByTestId('construct-part-container');
    const [firstPartController, secondPartController] = partControllers;

    clickPart(firstPartController, 'toggle-active');

    expect(firstPartController.classList.contains('hovered')).toBe(true);

    clickPart(secondPartController, 'toggle-active');

    expect(firstPartController.classList.contains('hovered')).toBe(false);
    expect(secondPartController.classList.contains('hovered')).toBe(true);
    expect(
      partControllers.filter((controller) =>
        controller.classList.contains('hovered')
      )
    ).toHaveLength(1);
  });

  it('handles activation of newly added part', () => {
    renderComponent();

    const [firstPartController] = screen.getAllByTestId(
      'construct-part-container'
    );

    clickPart(firstPartController, 'add-right');

    expect(firstPartController.classList.contains('hovered')).toBe(false);

    const updatedPartControllers = screen.getAllByTestId(
      'construct-part-container'
    );

    const [_, newPartController] = updatedPartControllers;

    expect(newPartController.classList.contains('hovered')).toBe(true);
    expect(
      updatedPartControllers.filter((controller) =>
        controller.classList.contains('hovered')
      )
    ).toHaveLength(1);
  });

  it('handles handles keyboard events for undo/redo', async () => {
    const { container } = renderComponent();
    const event = {
      key: 'z',
      keyCode: 90,
      code: 'KeyZ',
      metaKey: true,
    };
    const testId = 'construct-part-container';

    const partControllers = screen.getAllByTestId(testId);

    clickPart(partControllers[0], 'add-right');

    let updatedPartControllers = screen.getAllByTestId(testId);

    expect(updatedPartControllers.length).toEqual(partControllers.length + 1);

    fireEvent.keyDown(container, event);

    updatedPartControllers = screen.getAllByTestId(testId);

    expect(updatedPartControllers.length).toEqual(partControllers.length);

    clickPart(updatedPartControllers[0], 'delete');
    clickPart(updatedPartControllers[1], 'delete');

    updatedPartControllers = screen.getAllByTestId(testId);

    expect(updatedPartControllers.length).toEqual(partControllers.length - 2);

    fireEvent.keyDown(container, event);

    updatedPartControllers = screen.getAllByTestId(testId);

    expect(updatedPartControllers.length).toEqual(partControllers.length - 1);

    fireEvent.keyDown(container, { ...event, shiftKey: true });

    updatedPartControllers = screen.getAllByTestId(testId);

    expect(updatedPartControllers.length).toEqual(partControllers.length - 2);
  });
});
