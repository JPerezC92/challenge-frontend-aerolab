/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: { styledComponents: true },
  images: { domains: ['coding-challenge-api.aerolab.co'] },
};

module.exports = nextConfig;
