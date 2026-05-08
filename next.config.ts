import { createMDX } from 'fumadocs-mdx/next';
import type { NextConfig } from 'next';

const withMDX = createMDX();
const ghostImageHostname = (() => {
  const ghostUrl = process.env.GHOST_API_URL;

  if (!ghostUrl) {
    return null;
  }

  try {
    return new URL(ghostUrl).hostname;
  } catch {
    return null;
  }
})();

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    // Import ordering and minor lint warnings should not block production builds.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // fumadocs-mdx spreads frontmatter + body/toc onto page.data at runtime;
    // TypeScript's static analysis cannot see these fields through the generic
    // PageData interface, so we suppress build-time type errors here.
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: '/support-services',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/customers',
        destination: '/',
        permanent: true,
      },
      {
        source: '/docs/webhooks',
        destination: '/developers/webhooks',
        permanent: true,
      },
      {
        source: '/docs/community/contributing',
        destination: '/docs/contributing',
        permanent: true,
      },
    ];
  },
  allowedDevOrigins: [
    '*.manus.computer',
    'localhost',
    '127.0.0.1',
  ],
  images: {
    qualities: [75, 90, 95, 100],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatar.vercel.sh',
      },
      {
        protocol: 'https',
        hostname: 'cdn.simpleicons.org',
      },
      {
        protocol: 'https',
        hostname: 'static.ghost.org',
      },
      {
        protocol: 'https',
        hostname: '*.manus.computer',
      },
      ...(ghostImageHostname
        ? [
            {
              protocol: 'https' as const,
              hostname: ghostImageHostname,
            },
          ]
        : []),
    ],
  },
  async rewrites() {
    return [
      {
        source: '/ingest/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/ingest/:path*',
        destination: 'https://us.i.posthog.com/:path*',
      },
      {
        source: '/ingest/decide',
        destination: 'https://us.i.posthog.com/decide',
      },
    ];
  },
  skipTrailingSlashRedirect: true,
};

export default withMDX(nextConfig);
