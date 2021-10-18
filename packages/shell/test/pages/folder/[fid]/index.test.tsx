import { Folder } from 'pages/folder/[fid]';
import { folder } from 'test/__mocks__/folder';
import { render, screen } from 'test/testUtils';

jest.mock('utils/import');

jest.mock('next/router', () => ({
  useRouter() {
    return {
      query: { fid: folder.id },
      asPath: `/folder/${folder.id}`,
    };
  },
}));

describe('Folder page', () => {
  const renderComponent = () => render(<Folder />);

  it('renders without errors', async () => {
    renderComponent();

    expect(
      await screen.findByText(
        'Create a new Construct or select an existing Construct from the sidebar'
      )
    ).toBeInTheDocument();
  });
});
