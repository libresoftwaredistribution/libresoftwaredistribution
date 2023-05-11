/** @type {import('next').NextConfig} */
const isProd = true

const nextConfig = {
  assetPrefix: isProd ? 'https://libresoftdistro.com' : "./",
  output: 'export',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
