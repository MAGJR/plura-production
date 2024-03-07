/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        port: '',
        hostname: 'uploadthing.com',
      },
      {
        protocol: 'https',
        port: '',
        hostname: 'utfs.io',
      },
      {
        protocol: 'https',
        port: '',
        hostname: 'img.clerk.com',
      },
      {
        protocol: 'https',
        port: '',
        hostname: 'subdomain',
      },
      {
        protocol: 'https',
        port: '',
        hostname: 'files.stripe.com',
      },

    ],
  },
  reactStrictMode: false,
}

module.exports = nextConfig