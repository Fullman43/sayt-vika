/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  devIndicators: false,
  output: 'standalone',
  experimental: {
    optimizeCss: false,
    scrollRestoration: true,
  },
  turbopack: {},
  env: {
    NEXT_PUBLIC_PROJECT_ROOT: process.cwd(),
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
        os: false,
      };
    }
    return config;
  },
};
module.exports = nextConfig;