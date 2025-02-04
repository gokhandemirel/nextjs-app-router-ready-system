import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/backend-api/:path*',
        destination: 'https://jsonplaceholder.typicode.com/:path*'
      }
    ];
  }
};

export default withNextIntl(nextConfig);
