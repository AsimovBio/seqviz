import '@testing-library/jest-dom';

import { cache } from 'swr';
import { server } from 'test/msw/server';

beforeAll(() =>
  server.listen({
    onUnhandledRequest: 'warn',
  })
);

afterEach(() => server.resetHandlers());

afterAll(() => {
  server.close();
  cache.clear();
});
