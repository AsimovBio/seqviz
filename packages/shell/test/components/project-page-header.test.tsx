import { fireEvent, waitFor } from '@testing-library/react';
import { dashboardMachine } from 'components/dashboard/dashboard-machine';
import ProjectPageHeader from 'components/project-page-header';
import { DashboardContext } from 'pages';
import { construct } from 'test/__mocks__/construct';
import { project } from 'test/__mocks__/project';
import { render, screen } from 'test/utils';
import { interpret } from 'xstate';

describe('ProjectPageHeader', () => {
  const setMenuActiveSpy = jest.fn();
  const dashboardSvc = interpret(dashboardMachine);
  const template = { ...construct, name: 'Test template', is_template: true };
  let state;
  let send;
  let sendSpy;

  const renderComponent = () => {
    return render(
      <DashboardContext.Provider value={{ state, send, service: dashboardSvc }}>
        <ProjectPageHeader
          currentProject={project}
          setMenuActive={setMenuActiveSpy}
          templates={[template]}
        />
      </DashboardContext.Provider>
    );
  };

  beforeAll(() => {
    dashboardSvc.start();
    sendSpy = jest.spyOn(dashboardSvc, 'send');
    ({ send, state } = dashboardSvc);
  });

  afterAll(() => {
    dashboardSvc.stop();
  });

  it('renders without errors', async () => {
    renderComponent();

    expect(await screen.findByText(project.name)).toBeInTheDocument();
  });

  it('handles the construct create event', async () => {
    const event = {
      key: 'Enter',
      keyCode: 13,
      code: 'Enter',
    };
    renderComponent();

    const trigger = await screen.findByTestId('create-construct-trigger');
    fireEvent.focus(trigger);
    fireEvent.keyDown(trigger, event);

    expect(setMenuActiveSpy).toHaveBeenCalledWith(true);

    const item = await screen.findByText('Test template');
    fireEvent.focus(item);
    fireEvent.keyDown(item, event);

    expect(sendSpy).toHaveBeenCalledWith({
      pid: project.id,
      type: 'CREATE',
      value: 'construct',
      ...template,
    });
  });
});
