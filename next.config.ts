import type { NextConfig } from "next";

const isStatic = process.env.BUILD_STATIC === 'true';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  // 禁用 Next.js 热重载，由 nodemon 处理重编译
  reactStrictMode: false,
  webpack: (config, { dev }) => {
    if (dev) {
      // 禁用 webpack 的热模块替换
      config.watchOptions = {
        ignored: ['**/*'], // 忽略所有文件变化
      };
    }
    return config;
  },
  eslint: {
    // 构建时忽略ESLint错误
    ignoreDuringBuilds: true,
  },
  // Static export configuration for Netlify or other hosts
  ...(isStatic && {
    output: 'export',
    trailingSlash: true,
    distDir: 'dist',
    images: {
      unoptimized: true
    },
  }),
};

export default nextConfig;
