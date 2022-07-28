/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: { emotion: { autoLabel: 'dev-only' } },
  images: { domains: ['coding-challenge-api.aerolab.co'] },
};

module.exports = nextConfig;
