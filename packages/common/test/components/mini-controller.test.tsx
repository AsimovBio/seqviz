import type { Props } from 'components/mini-controller';
import MiniController from 'components/mini-controller';
import { fireEvent, render, screen } from 'test/utils';

describe('MiniController', () => {
  const onEventSpy = jest.fn();
  const renderComponent = (props?: Props) =>
    render(
      <MiniController
        context={{
          index: 0,
          isActive: true,
          isFocused: true,
          orientation: 'forward',
          part: { type: { glyph: '' }, name: '' },
        }}
        onEvent={onEventSpy}
        {...props}
      />
    );

  beforeEach(() => {
    onEventSpy.mockClear();
  });

  it('should call onEvent on mouseEnter/mouseLeave', async () => {
    renderComponent();

    fireEvent.mouseEnter(await screen.findByTestId('construct-part-container'));
    expect(onEventSpy).toHaveBeenCalledWith({ type: 'FOCUS', value: true });

    fireEvent.mouseLeave(await screen.findByTestId('construct-part-container'));
    expect(onEventSpy).toHaveBeenCalledWith({ type: 'FOCUS', value: false });
  });

  it('should call onEvent on button click', async () => {
    renderComponent();

    fireEvent.click(await screen.findByTestId('part-controller-activate'));
    expect(onEventSpy).toHaveBeenLastCalledWith({ type: 'TOGGLE_ACTIVE' });
  });
});
