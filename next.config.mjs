/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,  // for static export only. Remove this if using server-side rendering
    domains: ['s3-api.prud.uk'],
  },
};

export default nextConfig;
