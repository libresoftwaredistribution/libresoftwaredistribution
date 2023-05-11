/** @type {import('next').NextConfig} */
const optimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');

const isProd = true
const pathPrefix = isProd ? 'https://libresoftdistro.com' : undefined

const nextConfig = {
  assetPrefix: pathPrefix,
  output: isProd ? 'export' : undefined,
  experimental: {
    appDir: true,
  },
  env: {
    pathPrefix,
  },
}

module.exports = withPlugins([
  [optimizedImages, {
    mozjpeg: {
      quality: 100,
    },
    pngquant: {
      speed: 3,
      strip: true,
      verbose: true,
    },
    imagesPublicPath: '/_next/static/images/',
  }],
  nextConfig
]);

module.exports = nextConfig
