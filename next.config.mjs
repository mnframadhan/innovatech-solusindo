/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'assets.aceternity.com',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
          }
        ],
      },
      typescript: {
        ignoreBuildErrors: true,
     },
     trailingSlash: true,
};

export default nextConfig;
