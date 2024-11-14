/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ru/lessons',
        permanent: false,
      },
    ];
  },

  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
};

export default nextConfig;
