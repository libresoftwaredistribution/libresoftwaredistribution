/** @type {import('next').NextConfig} */

const isProd = false
const pathPrefix = isProd ? 'https://libresoftdistro.com' : undefined

const nextConfig = {
  assetPrefix: pathPrefix,
  output: isProd ? 'export' : undefined,
  images: {
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
  env: {
    pathPrefix,
  },
}

module.exports = nextConfig
