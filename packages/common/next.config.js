// @ts-check

/**
 * @type {import('next/dist/next-server/server/config').NextConfig}
 **/
const { withModuleFederation } = require('@module-federation/nextjs-mf');

module.exports = {
  compress: false,
  poweredByHeader: false,
  experimental: {
    cpus: 1,
  },
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
        './components/box': './components/box',
        './components/button': './components/button',
        './components/header': './components/header',
        './components/icon': './components/icon',
        './components/form': './components/form',
        './components/mini-controller': './components/mini-controller',
        './components/popover': './components/popover',
        './components/stitches-tag': './components/stitches-tag',
        './components/svg': './components/svg',
        './components/text': './components/text',
        './components/tooltip': './components/tooltip',
        './stitches.config': './stitches.config',
      },
      shared: [],
    };

    defaultLoaders.babel.options.rootMode = 'upward';

    config.output.publicPath = 'auto';

    // Configures ModuleFederation and other Webpack properties
    withModuleFederation(config, options, mfConf);

    return config;
  },
};
