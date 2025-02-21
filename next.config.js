/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  images: {
    domains: [
      'via.placeholder.com',
      'storage.googleapis.com',
      'avatar.iran.liara.run'
    ],
    unoptimized: true,
  }
}

module.exports = nextConfig
