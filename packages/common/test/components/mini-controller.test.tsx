import { fireEvent, screen } from '@testing-library/react';
import type { Props } from 'components/mini-controller';
import MiniController from 'components/mini-controller';
import { render } from 'test/utils';

describe('MiniController', () => {
  const onNotifySpy = jest.fn();
  const renderComponent = (props?: Props) =>
    render(
      <MiniController
        context={{
          index: 0,
          isActive: true,
          isFocused: true,
          orientation: 'forward',
          part: { part_type: { glyph: '' }, name: '' },
        }}
        onNotify={onNotifySpy}
        {...props}
      />
    );

  beforeEach(() => {
    onNotifySpy.mockClear();
  });

  it('should call onNotify on mouseEnter/mouseLeave', async () => {
    renderComponent();

    fireEvent.mouseEnter(await screen.findByTestId('construct-part-container'));
    expect(onNotifySpy).toHaveBeenCalledWith({ type: 'FOCUS', value: true });

    fireEvent.mouseLeave(await screen.findByTestId('construct-part-container'));
    expect(onNotifySpy).toHaveBeenCalledWith({ type: 'FOCUS', value: false });
  });

  it('should call onNotify on button click', async () => {
    renderComponent();

    fireEvent.click(await screen.findByTitle('Delete part'));
    expect(onNotifySpy).toHaveBeenLastCalledWith({ type: 'DELETE', value: '' });

    fireEvent.click(await screen.findByTitle('Add part left'));
    expect(onNotifySpy).toHaveBeenLastCalledWith({ type: 'ADD', value: '0' });
  });
});
