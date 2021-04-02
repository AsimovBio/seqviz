import { render } from '@testing-library/react';
import { ThemeProvider } from 'theme-ui';

const Wrapper = ({ children }) => {
  return <ThemeProvider theme={{}}>{children}</ThemeProvider>;
};

const customRender = (ui, options = {}) =>
  render(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';

export { customRender as render };
