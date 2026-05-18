import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "note-app-one-gray.vercel.app",
      },
      {
        protocol: "https",
        hostname: "advanced-filtering-kappa.vercel.app",
      },
      {
        protocol: "https",
        hostname: "todo-app-react-i813.vercel.app",
      },
    ],
  },
};

export default nextConfig;
