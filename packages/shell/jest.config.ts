import type { Config } from '@jest/types';
import proxy from 'identity-obj-proxy';

const config: Config.InitialOptions = {
  verbose: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  preset: 'ts-jest',
  roots: ['<rootDir>/test'],
  modulePaths: ['<rootDir>'],
  setupFiles: ['<rootDir>/jest.bootstrap.ts'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
  ],
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/test/tsconfig.test.json',
    },
  },
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': proxy,
    '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/file.ts',
    'common/(.*)': ['<rootDir>../common/$1'],
  },
  watchPlugins: [
    'jest-watch-typeahead/filename',
    'jest-watch-typeahead/testname',
  ],
  testURL: 'http://localhost',
};

export default config;
