/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: "prod",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
