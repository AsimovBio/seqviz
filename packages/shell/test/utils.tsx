import { UserProvider } from '@auth0/nextjs-auth0';
import { render as defaultRender } from '@testing-library/react';
import { SWRConfig } from 'swr';

import user from './__mocks__/user';

type DefaultParams = Parameters<typeof defaultRender>;
type RenderUI = DefaultParams[0];
type RenderOptions = DefaultParams[1];

const Wrapper = ({ children }) => {
  return (
    <UserProvider user={user}>
      <SWRConfig value={{ dedupingInterval: 0 }}>{children}</SWRConfig>
    </UserProvider>
  );
};

const render = (ui: RenderUI, options: RenderOptions = {}) =>
  defaultRender(ui, { wrapper: Wrapper, ...options });

export * from '@testing-library/react';

export { render };
