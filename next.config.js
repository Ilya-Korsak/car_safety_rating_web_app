/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.imagin.studio',
      },
      {
        protocol: 'https',
        hostname: 'static.nhtsa.gov',
      },
    ],
  },
}



module.exports = nextConfig
