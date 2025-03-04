/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig