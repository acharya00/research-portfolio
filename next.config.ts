import createMDX from '@next/mdx';
import path from 'node:path';
import type { NextConfig } from 'next';

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: ['remark-gfm'],
    rehypePlugins: [
      'rehype-slug',
      ['rehype-autolink-headings', { behavior: 'wrap' }],
    ],
  },
});

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  // Pin Turbopack's root to the project directory so the bundler stops
  // walking up to C:\Users\PC (which has its own package-lock.json) and
  // emits the "inferred your workspace root" warning.
  turbopack: {
    root: path.join(__dirname),
  },
  // Type errors should fail the build. The previous `ignoreBuildErrors: true`
  // hid real defects during deployment.
};

export default withMDX(nextConfig);
