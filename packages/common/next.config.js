const { withModuleFederation } = require('@module-federation/nextjs-mf');
const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = {
  compress: false,
  poweredByHeader: false,
  webpack: (config, options) => {
    const { isServer } = options;

    const mfConf = {
      mergeRuntime: true,
      name: 'common',
      library: {
        type: config.output.libraryTarget,
        name: 'common',
      },
      filename: 'static/runtime/remoteEntry.js',
      remotes: {},
      exposes: {
        './components/button': './components/button',
      },
      shared: [],
    };

    if (!isServer) {
      config.output.publicPath = `${process.env.NEXT_PUBLIC_FEDERATED_URL_COMMON}/_next/`;
    }

    // Configures ModuleFederation and other Webpack properties
    withModuleFederation(config, options, mfConf);

    config.module.rules.push(
      // gets rid of noisy "Critical dependency: the request of a dependency is an expression" warning
      // see https://github.com/lukechilds/keyv/pull/119
      {
        test: /keyv/,
        use: 'ignore-loader',
      },
      {
        test: /\.pnp\.cjs$/,
        loader: 'ignore-loader',
      }
    );

    return config;
  },
};
