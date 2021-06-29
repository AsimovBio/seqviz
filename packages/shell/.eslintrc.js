module.exports = {
  extends: ['next', 'next/core-web-vitals', 'prettier'],
  plugins: ['jest-dom', 'simple-import-sort'],
  rules: {
    'react/jsx-sort-props': 'warn',
    'simple-import-sort/exports': 'warn',
    'simple-import-sort/imports': 'warn',
  },
};
