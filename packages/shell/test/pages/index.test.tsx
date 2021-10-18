import { folder } from 'test/__mocks__/folder';

import { render, screen } from '../testUtils';

jest.mock('utils/import');

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '/',
      query: { fid: folder.id },
    };
  },
}));

describe('Dashboard', () => {
  it('renders without errors', async () => {
    const children = <div>children</div>;
    render(children);

    expect(await screen.findByText('children')).toBeInTheDocument();
  });
});
