import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async rewrites() {
    return [
      {
        source: '/og/pricing-ja.png',
        destination: '/og/pricing-ja',
      },
      {
        source: '/og/pricing-en.png',
        destination: '/og/pricing-en',
      },
      {
        source: '/og/features.png',
        destination: '/og/features',
      },
      {
        source: '/og/integrations.png',
        destination: '/og/integrations',
      },
      {
        source: '/og/use-cases.png',
        destination: '/og/use-cases',
      },
    ];
  },
};

export default nextConfig;
