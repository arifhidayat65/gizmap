/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  images: {
    domains: [
      'via.placeholder.com',
      'storage.googleapis.com',
      'avatar.iran.liara.run'
    ],
  },
}

module.exports = nextConfig
