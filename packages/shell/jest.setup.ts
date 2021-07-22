import '@testing-library/jest-dom';

import { cache } from 'swr';
import { server } from 'test/msw/server';

beforeAll(() => {
  // Mock scrollIntoView for ConstructDesigner
  window.HTMLDivElement.prototype.scrollIntoView = jest.fn();

  server.listen({
    onUnhandledRequest: 'warn',
  });
});

afterEach(() => server.resetHandlers());

afterAll(() => {
  server.close();
  cache.clear();
});
