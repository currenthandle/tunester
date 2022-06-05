/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'hotfm.ng',
      'images.prismic.io',
      'soundxyz.mypinata.cloud',
      'd2i9ybouka0ieh.cloudfront.net',
    ],
  },
};

module.exports = nextConfig;
