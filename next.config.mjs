/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ytimg.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn-images-*.medium.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'miro.medium.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/people',        destination: '/about',   permanent: true },
      { source: '/processes',     destination: '/',        permanent: true },
      { source: '/product',       destination: '/',        permanent: true },
      { source: '/media',         destination: '/writing', permanent: true },
      { source: '/learn',         destination: '/writing', permanent: true },
      { source: '/learn/:path*',  destination: '/writing', permanent: true },
      { source: '/client-login',  destination: '/',        permanent: true },
      { source: '/studio',        destination: '/',        permanent: true },
      { source: '/studio/:path*', destination: '/',        permanent: true },
    ];
  },
};
export default nextConfig;
