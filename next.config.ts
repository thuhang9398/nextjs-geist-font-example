import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
      {
        hostname: 'img.youtube.com',
        pathname: '/**',
      }
    ],
  },
  output: 'export',
}

export default nextConfig
