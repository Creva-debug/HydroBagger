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
  /** Podgląd strony w iframe z panelu mngmt.hydrobagger.pl (zakładka Zdjęcia). */
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "frame-ancestors 'self' https://mngmt.hydrobagger.pl http://localhost:3003 http://localhost:3005",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
