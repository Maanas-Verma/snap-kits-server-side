/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      compiler: {
        styledComponents: true,
      },
      reactStrictMode: false,
    };
  }

  return {
    images: {
      loader: 'custom',
      path: '/snap-kits',
      loaderFile: './src/custom-loader.js',
    },
    basePath: '/snap-kits',
  };
};
