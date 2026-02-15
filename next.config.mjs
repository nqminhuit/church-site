/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // for static export, remove this if using server-side rendering
};

export default nextConfig;
