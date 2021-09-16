import { fireEvent } from '@testing-library/react';
import { DashboardLayout } from 'components/layout/dashboard-layout';
import { graphql } from 'msw';
import { cache } from 'swr';
import { project } from 'test/__mocks__/project';
import { server } from 'test/msw/server';
import { render, screen } from 'test/utils';

jest.mock('utils/import');

jest.mock('next/router', () => ({
  useRouter() {
    return {
      query: { pid: project.id },
      asPath: `/project/${project.id}`,
    };
  },
}));

describe('Dashboard Layout', () => {
  const renderComponent = () => render(<DashboardLayout />);

  it('renders without errors', async () => {
    renderComponent();

    expect(
      await screen.findByDisplayValue('Test project', {}, { timeout: 5000 })
    ).toBeInTheDocument();
  });

  it('calls the API on input change', async () => {
    renderComponent();

    const inputNode = await screen.findByDisplayValue('Test project');

    expect(await screen.findByDisplayValue('Test project')).toBeInTheDocument();
    server.use(
      graphql.query('Projects', (req, res, ctx) => {
        return res(
          ctx.data({
            project: [{ ...project, name: 'New project' }],
          })
        );
      })
    );

    cache.clear();

    fireEvent.change(inputNode, { target: { value: 'New project' } });

    expect(await screen.findByText('New project')).toBeInTheDocument();
  });
});
