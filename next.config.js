const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  experimental: {
    mdxRs: true,
    typedRoutes: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

const withMDX = require('@next/mdx')();
module.exports = withMDX(nextConfig);
