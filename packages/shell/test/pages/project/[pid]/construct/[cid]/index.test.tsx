import { fireEvent, waitFor } from '@testing-library/react';
import { dashboardMachine } from 'components/dashboard/dashboard-machine';
import { graphql } from 'msw';
import { Construct } from 'pages/project/[pid]/construct/[cid]';
import { construct } from 'test/__mocks__/construct';
import { project } from 'test/__mocks__/project';
import { server } from 'test/msw/server';
import { render, screen } from 'test/utils';
import { interpret } from 'xstate';

jest.mock('utils/import');

jest.mock('next/router', () => ({
  useRouter() {
    return {
      query: { cid: construct.id, pid: project.id },
      asPath: `/project/${project.id}/construct/${construct.id}`,
    };
  },
}));

describe('Construct page', () => {
  it('renders without errors', async () => {
    render(<Construct data={{ construct: [construct] }} user={{}} />);

    expect(
      await screen.findByDisplayValue('Test construct')
    ).toBeInTheDocument();
  });

  it('calls the API on input change', async () => {
    render(<Construct data={{ construct: [construct] }} user={{}} />);

    const inputNode = await screen.findByDisplayValue('Test construct');

    server.use(
      graphql.query('Projects', (req, res, ctx) => {
        return res(
          ctx.data({
            project: [
              {
                ...project,
                project_constructs: [
                  { construct: { ...construct, name: 'New construct' } },
                ],
              },
            ],
          })
        );
      })
    );

    fireEvent.change(inputNode, { target: { value: 'New construct' } });

    await waitFor(() => {
      expect(screen.getByText('New construct')).toBeInTheDocument();
    });
  });
});

describe('dashboardMachine', () => {
  const dashboardSvc = interpret(dashboardMachine);

  beforeEach(() => {
    dashboardSvc.start();
  });

  afterEach(() => {
    dashboardSvc.stop();
    jest.clearAllMocks();
  });

  it('should forward events to partLibSvc', () => {
    dashboardSvc.onTransition(
      ({ children: { partLibSvc }, event: { type } }) => {
        const spy = jest.spyOn(partLibSvc, 'send');

        if (type === 'PARTLIB.ENGAGE') {
          expect(spy).toHaveBeenCalledWith(
            expect.objectContaining({ name: 'PARTLIB.ENGAGE' })
          );
        }
      }
    );

    dashboardSvc.send({
      type: 'PARTLIB.ENGAGE',
    });
  });

  it('should forward events to constructSvc', () => {
    dashboardSvc.onTransition(
      ({ children: { constructSvc }, event: { type } }) => {
        const spy = jest.spyOn(constructSvc, 'send');

        if (type === 'PARTLIB.SELECT') {
          expect(spy).toHaveBeenCalledWith(
            expect.objectContaining({ name: 'PARTLIB.SELECT' })
          );
        }
      }
    );

    dashboardSvc.send({
      type: 'PARTLIB.SELECT',
    });
  });
});
