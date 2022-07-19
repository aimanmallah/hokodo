/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  setupFilesAfterEnv: ['./jest.setup.js'],
};

module.exports = nextConfig;
