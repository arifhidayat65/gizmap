import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['storage.googleapis.com'],
    unoptimized: true,
  },
  output: 'export',
  distDir: '.next'
};

export default nextConfig;
