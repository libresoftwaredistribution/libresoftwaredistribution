/** @type {import('next').NextConfig} */
const isProd = true

const nextConfig = {
  assetPrefix: isProd ? 'https://libresoftdistro.com' : undefined,
  output: 'export',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
