// @ts-check

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const { withModuleFederation } = require('@module-federation/nextjs-mf');

module.exports = {
  compress: false,
  poweredByHeader: false,
  future: { webpack5: true },
  webpack: (config, options) => {
    const { defaultLoaders, isServer } = options;

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
        './components/accordion': './components/accordion',
        './components/button': './components/button',
        './components/icon': './components/icon',
        './components/box': './components/box',
        './components/popover': './components/popover',
        './components/stitches-tag': './components/stitches-tag',
        './components/text': './components/text',
        './components/tooltip': './components/tooltip',
        './stitches.config': './stitches.config',
      },
      shared: [],
    };

    defaultLoaders.babel.options.rootMode = 'upward';

    if (!isServer) {
      config.output.publicPath = `${process.env.NEXT_PUBLIC_FEDERATED_URL_COMMON}/_next/`;
    }
    // Configures ModuleFederation and other Webpack properties
    withModuleFederation(config, options, mfConf);

    return config;
  },
};
