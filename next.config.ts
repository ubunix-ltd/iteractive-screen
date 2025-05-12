import type {NextConfig} from 'next';

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
  runtimeCaching: [
    {
      urlPattern: /\.(mp4|webm|ogg)$/i,
      handler: 'CacheFirst',
      options: {
        cacheName: 'video-cache',
        expiration: {
          maxEntries: 50,  // Maximum number of videos to cache
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
        },
        cacheableResponse: {
          statuses: [0, 200]
        },
      },
    }
  ]
});

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'qjjklyugfxbxgwqhanfs.supabase.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'qjjklyugfxbxgwqhanfs.supabase.co',
        port: '',
        pathname: '/**',
      }
    ],
    minimumCacheTTL: 86400,
  },
};

export default withPWA(nextConfig);
