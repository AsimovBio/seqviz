import ConstructDesigner from 'components/construct-designer';
import { dashboardMachine } from 'components/dashboard/dashboard-machine';
import { DashboardContext } from 'components/layout/dashboard-layout';
import { construct } from 'test/__mocks__/construct';
import { fireEvent, getByTestId, render, screen } from 'test/testUtils';
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

    return render(<ConstructDesigner construct={construct} />, {
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
    ).toHaveLength(construct.parts.length);

    expect(sendSpy).toHaveBeenCalledWith({
      type: 'BOOTSTRAP',
      constructParts: construct.parts,
      constructId: construct.id,
    });
  });

  it('activates multiple parts at a time', () => {
    renderComponent();

    const partControllers = screen.getAllByTestId('construct-part-container');
    const [firstPartController, secondPartController] = partControllers;

    clickPart(firstPartController, 'part-controller-activate');

    expect(firstPartController.classList.contains('hovered')).toBe(true);

    clickPart(secondPartController, 'part-controller-activate');

    expect(
      partControllers.filter((controller) =>
        controller.classList.contains('hovered')
      )
    ).toHaveLength(2);
  });

  xit('handles handles keyboard events for undo/redo', async () => {
    const { container } = renderComponent();
    const event = {
      key: 'z',
      keyCode: 90,
      code: 'KeyZ',
      metaKey: true,
    };
    const testId = 'construct-part-container';

    const partControllers = screen.getAllByTestId(testId);

    clickPart(partControllers[0], 'part-controller-activate');

    fireEvent.click(await screen.findByTestId('button-copy'));
    fireEvent.click(await screen.findByTestId('button-paste'));

    let updatedPartControllers = screen.getAllByTestId(testId);

    expect(updatedPartControllers.length).toEqual(partControllers.length + 1);

    // undo copy/paste
    fireEvent.keyDown(container, event);

    updatedPartControllers = screen.getAllByTestId(testId);

    expect(updatedPartControllers.length).toEqual(partControllers.length);

    clickPart(updatedPartControllers[0], 'part-controller-activate');
    fireEvent.click(await screen.findByTestId('button-delete'));

    updatedPartControllers = screen.getAllByTestId(testId);

    expect(updatedPartControllers.length).toEqual(partControllers.length - 1);

    // undo delete
    fireEvent.keyDown(container, event);

    updatedPartControllers = screen.getAllByTestId(testId);

    expect(updatedPartControllers.length).toEqual(partControllers.length);

    // redo delete
    fireEvent.keyDown(container, { ...event, shiftKey: true });

    updatedPartControllers = screen.getAllByTestId(testId);

    expect(updatedPartControllers.length).toEqual(partControllers.length - 1);
  });

  xit('handles activation of newly added part', async () => {
    renderComponent();

    const partControllers = screen.getAllByTestId('construct-part-container');
    const [firstPartController] = partControllers;

    clickPart(firstPartController, 'part-controller-activate');

    expect(firstPartController.classList.contains('hovered')).toBe(true);

    fireEvent.click(await screen.findByTestId('button-copy'));
    fireEvent.click(await screen.findByTestId('button-paste'));

    const updatedPartControllers = screen.getAllByTestId(
      'construct-part-container'
    );

    const [_, newPartController] = updatedPartControllers;

    expect(newPartController.classList.contains('hovered')).toBe(true);
  });
});
