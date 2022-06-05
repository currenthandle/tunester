/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['hotfm.ng', 'images.prismic.io', 'soundxyz.mypinata.cloud'],
  },
};

module.exports = nextConfig;
