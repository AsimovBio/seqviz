import 'regenerator-runtime/runtime';

import type { Props } from 'components/sequence-viewer';
import SequenceViwer from 'components/sequence-viewer';
import { render } from 'test/utils';

describe('SequenceViwer', () => {
  const renderComponent = (props?: Props) =>
    render(<SequenceViwer sequence="GATTACA" {...props} />);

  it('renders without errors', async () => {
    const { container } = renderComponent();

    expect(container).toBeInTheDocument();
  });
});
