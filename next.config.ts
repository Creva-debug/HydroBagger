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
  async redirects() {
    return [{ source: "/wiedza", destination: "/baza-wiedzy", permanent: true }];
  },
};

export default nextConfig;
