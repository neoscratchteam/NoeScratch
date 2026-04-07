/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // For easier migration since we have many external/static images
  },
  eslint: {
    ignoreDuringBuilds: true, // Skip lint for now to speed up migration
  },
};

export default nextConfig;
