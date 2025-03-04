/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',  // Add this line
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig