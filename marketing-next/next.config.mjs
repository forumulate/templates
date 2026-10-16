/**
 * Who may frame this site: itself and the studio, for live preview (spec 5
 * L2) — nobody else, so no other page can overlay it (clickjacking). The
 * studio is the API's origin unless FORUMULATE_STUDIO_ORIGIN says otherwise
 * (the same rule as lib/env.ts `readStudioOrigin`).
 */
function studioOrigin() {
  const raw = process.env.FORUMULATE_STUDIO_ORIGIN?.trim() || process.env.FORUMULATE_API_URL?.trim() || 'https://forumulate.com';
  try {
    return new URL(raw).origin;
  } catch {
    return null;
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // The SDK packages ship ES modules with `.js` specifiers; nothing to transpile.
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    const studio = studioOrigin();
    return [
      {
        source: '/:path*',
        headers: [{ key: 'Content-Security-Policy', value: `frame-ancestors 'self'${studio ? ` ${studio}` : ''}` }],
      },
    ];
  },
};

export default nextConfig;
