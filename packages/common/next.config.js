// @ts-check

/**
 * @type {import('next/dist/server/config').NextConfig}
 **/
const { withModuleFederation } = require('@module-federation/nextjs-mf');

module.exports = {
  compress: false,
  poweredByHeader: false,
  webpack: (config, options) => {
    const { defaultLoaders } = options;

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
        './components/copy-to-clipboard': './components/copy-to-clipboard',
        './components/dropdown-menu': './components/dropdown-menu',
        './components/error-fallback': './components/error-fallback',
        './components/form': './components/form',
        './components/glyph': './components/glyph',
        './components/header': './components/header',
        './components/icon': './components/icon',
        './components/mini-controller': './components/mini-controller',
        './components/popover': './components/popover',
        './components/scroll-container': './components/scroll-container',
        './components/sequence-viewer': './components/sequence-viewer',
        './components/stitches-tag': './components/stitches-tag',
        './components/svg': './components/svg',
        './components/tabs': './components/tabs',
        './components/text': './components/text',
        './components/toolbar': './components/toolbar',
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
