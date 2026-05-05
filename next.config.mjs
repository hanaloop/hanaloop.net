import path from 'node:path';
import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();
const isProduction = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const config = {
  output: isProduction ? 'export' : undefined,
  reactStrictMode: true,
  trailingSlash: true,
  outputFileTracingRoot: path.resolve(process.cwd()),
  env: {
    NEXT_PUBLIC_BASE_PATH: process.env.WEB_PATH_PREFIX ?? '',
  },
  images: {
    unoptimized: true,
  },
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
  webpack: (config, { isServer }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@docusaurus/Link': path.resolve(process.cwd(), 'legacy/compat/docusaurus/Link.tsx'),
      '@docusaurus/useBaseUrl': path.resolve(process.cwd(), 'legacy/compat/docusaurus/useBaseUrl.ts'),
      '@docusaurus/useDocusaurusContext': path.resolve(process.cwd(), 'legacy/compat/docusaurus/useDocusaurusContext.ts'),
      '@docusaurus/Translate': path.resolve(process.cwd(), 'legacy/compat/docusaurus/Translate.tsx'),
      '@docusaurus/useGlobalData': path.resolve(process.cwd(), 'legacy/compat/docusaurus/useGlobalData.ts'),
      '@theme/Layout': path.resolve(process.cwd(), 'legacy/compat/theme/Layout.tsx'),
    };
    
    // Add SVGR loader for SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    
    return config;
  },
};

if (process.env.WEB_PATH_PREFIX) {
  config.basePath = process.env.WEB_PATH_PREFIX;
}

export default withMDX(config);
