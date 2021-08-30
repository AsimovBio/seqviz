import { act, fireEvent, screen } from '@testing-library/react';
import CopyToClipboard from 'components/copy-to-clipboard';
import { render } from 'test/utils';

// Mocking navigator.clipboard here since it doesn't currently exist in JSDom
Object.assign(navigator, {
  clipboard: {
    writeText: () => {},
  },
});

describe('CopyToClipboard', () => {
  jest.spyOn(navigator.clipboard, 'writeText');
  const renderComponent = () => {
    const testString = 'Test string';
    render(
      <CopyToClipboard text={testString}>
        <p>{testString}</p>
      </CopyToClipboard>
    );
  };

  it('should call navigator.clipboard.writeText on button click', async () => {
    renderComponent();

    await act(async () => {
      fireEvent.click(await screen.findByTestId('copy-to-clipboard-button'));
    });

    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('Test string');
  });
});
