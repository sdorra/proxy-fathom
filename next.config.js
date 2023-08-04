/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => [
    {
      source: '/script.js',
      destination: 'https://cdn.usefathom.com/script.js',
    },
  ]
}

module.exports = nextConfig
