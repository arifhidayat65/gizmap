import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['storage.googleapis.com'],
    unoptimized: true,
  },
  output: 'standalone',
  swcMinify: true,
};

export default nextConfig;
