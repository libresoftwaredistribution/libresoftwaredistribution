/** @type {import('next').NextConfig} */
const isProd = true

const nextConfig = {
  output: 'export',
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
