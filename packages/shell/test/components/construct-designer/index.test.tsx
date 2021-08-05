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

    expect(await screen.findByText('Test part')).toBeInTheDocument();

    expect(sendSpy).toHaveBeenCalledWith({
      type: 'BOOTSTRAP',
      constructParts: construct.construct_parts,
      constructId: construct.id,
    });
  });
});
