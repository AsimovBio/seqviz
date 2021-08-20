import { fireEvent } from '@testing-library/react';
import { graphql } from 'msw';
import { Project } from 'pages/project/[pid]';
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

describe('Project page', () => {
  const renderComponent = () =>
    render(<Project data={{ project: [project] }} />);

  it('renders without errors', async () => {
    renderComponent();

    expect(await screen.findByDisplayValue('Test project')).toBeInTheDocument();
  });

  it('calls the API on input change', async () => {
    renderComponent();

    const inputNode = await screen.findByDisplayValue('Test project');

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
