/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.**.com",
      },
    ],
    domains: [
      "www.google.com",
      "lh3.googleusercontent.com",
      "lh5.googleusercontent.com",
      "i.ytimg.com",
    ],
  },
};

module.exports = nextConfig;
