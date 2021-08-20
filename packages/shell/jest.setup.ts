import '@testing-library/jest-dom';

import { cache } from 'swr';
import { server } from 'test/msw/server';

beforeAll(() => {
  // Mock scrollIntoView for ConstructDesigner
  global.HTMLDivElement.prototype.scrollIntoView = jest.fn();
  global.ResizeObserver = class ResizeObserver {
    cb;
    constructor(cb) {
      this.cb = cb;
    }
    observe() {
      this.cb([{ borderBoxSize: { inlineSize: 0, blockSize: 0 } }]);
    }
    disconnect() {}
    unobserve() {}
  };

  global.DOMRect = {
    fromRect: () => ({
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
      x: 0,
      y: 0,
      toJSON: jest.fn(),
    }),
  } as any;

  server.listen({
    onUnhandledRequest: 'warn',
  });
});

afterEach(() => server.resetHandlers());

afterAll(() => {
  server.close();
  cache.clear();
  jest.clearAllMocks();
  jest.clearAllTimers();
});
