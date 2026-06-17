import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL('https://ap-south-1.graphassets.com/**'), new URL('https://images.pexels.com/**')],
  },
};

export default nextConfig;
