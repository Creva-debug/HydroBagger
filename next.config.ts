import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "creva.b-cdn.net",
        pathname: "/Hydrobagger/**",
      },
    ],
  },
};

export default nextConfig;
