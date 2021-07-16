module.exports = {
  extends: ['next', 'next/core-web-vitals', 'prettier'],
  ignorePatterns: ['**/*.json'],
  plugins: ['@typescript-eslint', 'jest-dom', 'simple-import-sort'],
  rules: {
    'react/jsx-sort-props': 'warn',
    '@typescript-eslint/consistent-type-imports': 'error',
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': 'warn',
    '@next/next/no-html-link-for-pages': ['error', 'packages/shell/pages'],
  },
};
