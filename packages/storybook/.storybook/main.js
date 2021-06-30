const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  stories: ['../stories/**/*.stories.mdx', '../stories/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'webpack5',
  },
  previewHead: (head) => `
    ${head}
    <script
      data-webpack="common"
      src="${process.env.NEXT_PUBLIC_FEDERATED_URL_COMMON}/_next/static/runtime/remoteEntry.js"
    ></script>
  `,
  webpackFinal: async (config) => {
    config.plugins.push(new ModuleFederationPlugin({
      name: 'storybook',
      library: { type: 'var', name: 'storybook'},
      filename: 'static/runtime/remoteEntry.js',
      remotes: {
        common: `common`,
      },
    }));

    return config;
  }
};
