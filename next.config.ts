import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_ACTIONS === 'true'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isGitHubPages ? '/adithya-website/' : '',
  assetPrefix: isGitHubPages ? '/adithya-website/' : '',
};

export default nextConfig;
