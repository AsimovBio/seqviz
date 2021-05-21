const { withModuleFederation } = require('@module-federation/nextjs-mf');
const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = {
  compress: false,
  poweredByHeader: false,
  webpack: (config, options) => {
    const { isServer } = options;

    const mfConf = {
      name: 'shell',
      library: {
        type: config.output.libraryTarget,
        name: 'shell',
      },
      filename: 'static/runtime/remoteEntry.js',
      remotes: {
        common: isServer
          ? path.resolve(
              __dirname,
              '../common/.next/server/static/runtime/remoteEntry.js'
            )
          : 'common',
      },
      exposes: {
        './components/layout': './components/layout',
      },
      shared: [],
    };

    if (!isServer) {
      config.output.publicPath = `${process.env.FEDERATED_URL_SHELL}/_next/`;
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
