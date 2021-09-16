import { Project } from 'pages/project/[pid]';
import { project } from 'test/__mocks__/project';
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
  const renderComponent = () => render(<Project />);

  it('renders without errors', async () => {
    renderComponent();

    expect(
      await screen.findByText(
        'Create a new Construct or select an existing Construct from the sidebar'
      )
    ).toBeInTheDocument();
  });
});
