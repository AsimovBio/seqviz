import ConstructDesigner from 'components/construct-designer';
import { dashboardMachine } from 'components/dashboard/dashboard-machine';
import { DashboardContext } from 'components/layout/dashboard-layout';
import { construct, constructParts } from 'test/__mocks__/construct';
import { partType } from 'test/__mocks__/parts';
import {
  fireEvent,
  getByTestId,
  render,
  screen,
  waitFor,
} from 'test/testUtils';
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

    return render(
      <ConstructDesigner construct={construct} partTypes={[partType]} />,
      {
        wrapper: DashboardWrapper,
      }
    );
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
      await screen.findAllByTestId('mini-controller-container')
    ).toHaveLength(construct.parts.length);

    expect(sendSpy).toHaveBeenCalledWith({
      type: 'BOOTSTRAP',
      constructParts: construct.parts,
      constructId: construct.id,
    });
  });

  it('activates multiple parts at a time', () => {
    renderComponent();

    const partControllers = screen.getAllByTestId('mini-controller-container');
    const [firstPartController, secondPartController] = partControllers;

    fireEvent.mouseMove(firstPartController, { buttons: 1 });
    expect(firstPartController.classList.contains('active')).toBe(true);

    fireEvent.mouseMove(secondPartController, { buttons: 1 });

    expect(
      partControllers.filter((controller) =>
        controller.classList.contains('active')
      )
    ).toHaveLength(2);
  });

  it('handles handles keyboard events for undo/redo', async () => {
    const { container, debug } = renderComponent();
    const event = {
      key: 'z',
      keyCode: 90,
      code: 'KeyZ',
      metaKey: true,
    };
    const testId = 'mini-controller-container';
    let updatedPartControllers;

    const partControllers = await screen.findAllByTestId(testId);

    fireEvent.mouseMove(partControllers[3], { buttons: 1 });

    fireEvent.click(screen.getByTestId('button-copy'));
    fireEvent.click(screen.getByTestId('button-paste'));

    updatedPartControllers = screen.getAllByTestId(testId);

    expect(updatedPartControllers.length).toEqual(partControllers.length + 1);

    // undo copy/paste
    fireEvent.keyDown(container, event);

    updatedPartControllers = screen.getAllByTestId(testId);

    expect(updatedPartControllers.length).toEqual(partControllers.length);

    fireEvent.mouseMove(updatedPartControllers[0], { buttons: 1 });
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

  it('handles activation of newly added part', async () => {
    renderComponent();

    const partControllers = screen.getAllByTestId('mini-controller-container');
    const [firstPartController] = partControllers;

    fireEvent.mouseMove(firstPartController, { buttons: 1 });

    expect(firstPartController.classList.contains('active')).toBe(true);

    fireEvent.click(await screen.findByTestId('button-copy'));
    fireEvent.click(await screen.findByTestId('button-paste'));

    const updatedPartControllers = screen.getAllByTestId(
      'mini-controller-container'
    );

    const [_, newPartController] = updatedPartControllers;

    expect(newPartController.classList.contains('active')).toBe(true);
  });
});
