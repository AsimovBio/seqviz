import { Dashboard } from '../../pages';
import { act, render, screen } from '../testUtils';
import project from 'test/__mocks__/project';

describe('Dashboard', () => {
  it('renders without crashing', async () => {
    const children = <div>test</div>;

    act(() => {
      render(<Dashboard data={{ project: [project] }}>{children}</Dashboard>);
    });

    expect(await screen.findByText('test')).toBeInTheDocument();
    expect(await screen.findByText('Test project')).toBeInTheDocument();
  });
});
