import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
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
