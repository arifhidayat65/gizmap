/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  images: {
    domains: [
      'via.placeholder.com',
      'storage.googleapis.com',
      'avatar.iran.liara.run'
    ]
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.modules.push(path.resolve('./src'));
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.join(__dirname, 'src')
    };
    return config;
  },
  experimental: {
    appDir: true,
    esmExternals: true
  }
};

module.exports = nextConfig;
