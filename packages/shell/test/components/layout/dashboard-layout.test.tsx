import { fireEvent } from '@testing-library/react';
import { DashboardLayout } from 'components/layout/dashboard-layout';
import { graphql } from 'msw';
import { cache } from 'swr';
import { construct } from 'test/__mocks__/construct';
import { folder } from 'test/__mocks__/folder';
import { server } from 'test/msw/server';
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

describe('Dashboard Layout', () => {
  const renderComponent = (initialData?) =>
    render(<DashboardLayout data={initialData} />);

  it('renders without errors', async () => {
    renderComponent();

    expect(
      await screen.findByDisplayValue('Test folder', {}, { timeout: 5000 })
    ).toBeInTheDocument();
  });

  it('calls the API on input change', async () => {
    renderComponent();

    const inputNode = await screen.findByDisplayValue('Test folder');

    expect(await screen.findByDisplayValue('Test folder')).toBeInTheDocument();
    server.use(
      graphql.query('Folders', (req, res, ctx) => {
        return res(
          ctx.data({
            folder: [{ ...folder, name: 'New folder' }],
          })
        );
      })
    );

    cache.clear();

    fireEvent.change(inputNode, { target: { value: 'New folder' } });

    expect(await screen.findByText('New folder')).toBeInTheDocument();
  });

  it('should render Sequence tab when a construct is provided', async () => {
    renderComponent({ construct: [construct] });
    const activeTab = await screen.findByRole('tab', { selected: true });
    expect(activeTab).toHaveTextContent('Sequence');
  });

  it('should render Genetic Parts Library tab when a construct is not provided', async () => {
    renderComponent();
    const activeTab = await screen.findByRole('tab', { selected: true });
    expect(activeTab).toHaveTextContent('Genetic Parts Library');
  });
});
