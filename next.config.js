/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async rewrites() {
    return {
      fallback: [
        {
        source: '/:path*',
        destination: 'https://api-dev.parob.io',//목적 path
        },
      ]
    }
  },
}

