/** @type {import('next').NextConfig} */
const isProd = true

const nextConfig = {
  output: 'export',
  assetPrefix: 'https://libresoftdistro.com',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
