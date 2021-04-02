import { render } from '@testing-library/react';
import { ThemeProvider } from 'theme-ui';
import theme from '../utils/theme';

const Wrapper = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';

export { customRender as render };
