// @ts-check

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const { withModuleFederation } = require('@module-federation/nextjs-mf');
const path = require('path');

const ssrRemoteEntryPath =
  process.env.NODE_ENV === 'production'
    ? '../common/.next/server/chunks/static/runtime/remoteEntry.js'
    : '../common/.next/server/static/runtime/remoteEntry.js';

module.exports = {
  compress: false,
  poweredByHeader: false,
  experimental: {
    cpus: 1,
  },
  webpack: (config, options) => {
    const { defaultLoaders, isServer } = options;

    const mfConf = {
      name: 'shell',
      library: {
        type: config.output.libraryTarget,
        name: 'shell',
      },
      filename: 'static/runtime/remoteEntry.js',
      remotes: {
        common: isServer
          ? path.resolve(__dirname, ssrRemoteEntryPath)
          : 'common',
      },
      exposes: {},
      shared: [],
    };

    defaultLoaders.babel.options.rootMode = 'upward';

    config.output.publicPath = 'auto';

    // Configures ModuleFederation and other Webpack properties
    withModuleFederation(config, options, mfConf);

    config.resolve.fallback = {
      ...config.resolve.fallback,
      process: require.resolve('process/browser'),
    };

    return config;
  },
};
