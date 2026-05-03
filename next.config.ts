import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: ['192.168.1.23'],
  images: {
    qualities: [70, 75, 80, 85, 90, 95],
  },
};

export default nextConfig;
