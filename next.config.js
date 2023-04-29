/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "anhdepfree.com",
      },
      {
        protocol: "https",
        hostname: "toplist.vn",
      },
      {
        protocol: "https",
        hostname: "avatar.nct.nixcdn.com",
      },
      {
        protocol: "https",
        hostname: "photo-resize-zmp3.zmdcdn.me",
      },
      {
        protocol: "https",
        hostname: "static.vecteezy.com",
      },
    ],
  },
};

module.exports = nextConfig;
