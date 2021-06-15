import { UserProvider } from '@auth0/nextjs-auth0';
import { render as defaultRender } from '@testing-library/react';
import { SWRConfig } from 'swr';
import { RouterContext } from 'next/dist/next-server/lib/router-context';
import type { NextRouter } from 'next/router';
import user from './__mocks__/user';

type DefaultParams = Parameters<typeof defaultRender>;
type RenderUI = DefaultParams[0];
type RenderOptions = DefaultParams[1] & { router?: Partial<NextRouter> };

const Wrapper = ({ children }) => {
  return (
    <RouterContext.Provider value={mockRouter}>
      <UserProvider user={user}>
        <SWRConfig value={{}}>{children}</SWRConfig>
      </UserProvider>
    </RouterContext.Provider>
  );
};

const render = (ui: RenderUI, options: RenderOptions = {}) =>
  defaultRender(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';

export { render };

const mockRouter: NextRouter = {
  asPath: '/',
  basePath: '',
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
  isLocaleDomain: false,
  isPreview: false,
  isReady: true,
  pathname: '/',
  query: {},
  route: '/',
  back: jest.fn(() => Promise.resolve(true)),
  beforePopState: jest.fn(() => Promise.resolve(true)),
  prefetch: jest.fn(() => Promise.resolve()),
  push: jest.fn(() => Promise.resolve(true)),
  reload: jest.fn(() => Promise.resolve(true)),
  replace: jest.fn(() => Promise.resolve(true)),
};
