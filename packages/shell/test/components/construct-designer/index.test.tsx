import ConstructDesigner from 'components/construct-designer';
import { constructMachine } from 'components/construct-designer/construct-machine';
import { partLibMachine } from 'components/part-library/part-lib-machine';
import { DashboardContext } from 'pages';
import { construct } from 'test/__mocks__/construct';
import { render, screen } from 'test/utils';
import { interpret } from 'xstate';

describe('ConstructDesigner', () => {
  const constructSvc = interpret(constructMachine);
  const partLibSvc = interpret(partLibMachine);

  const renderComponent = () => {
    const DashboardWrapper = ({ children }) => {
      return (
        <DashboardContext.Provider value={{ constructSvc, partLibSvc }}>
          {children}
        </DashboardContext.Provider>
      );
    };
    return render(<ConstructDesigner {...(construct as any)} />, {
      wrapper: DashboardWrapper,
    });
  };

  beforeAll(() => {
    constructSvc.start();
    partLibSvc.start();
  });

  afterAll(() => {
    constructSvc.stop();
    partLibSvc.stop();
  });

  it('renders without errors', async () => {
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
