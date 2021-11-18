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
    const container = await screen.findByTestId('mini-controller-container');

    fireEvent.mouseDown(container);
    expect(onEventSpy).toHaveBeenLastCalledWith({ type: 'SELECT_START' });

    fireEvent.mouseEnter(container, { buttons: 1 });
    expect(onEventSpy).toHaveBeenLastCalledWith('SELECT_CHANGE');

    fireEvent.mouseMove(container, { buttons: 1 });
    expect(onEventSpy).toHaveBeenLastCalledWith('ACTIVATE');
  });
});
