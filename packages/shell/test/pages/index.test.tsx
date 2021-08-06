import { project } from 'test/__mocks__/project';

import { Dashboard } from '../../pages';
import { render, screen } from '../utils';

jest.mock('utils/import');

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/',
      query: { pid: project.id },
    };
  },
}));

describe('Dashboard', () => {
  it('renders without errors', async () => {
    const children = <div>children</div>;
    render(<Dashboard>{children}</Dashboard>);

    expect(await screen.findByText('children')).toBeInTheDocument();
  });
});
