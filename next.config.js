/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: {
    // 添加以下配置以禁用 `/#python` 锚点导致 tailwind 样式无法加载
    trailingSlash: true,
  },
}

module.exports = nextConfig;
