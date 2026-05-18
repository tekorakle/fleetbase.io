import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

/**
 * Dynamic Open Graph image route.
 *
 * Usage:
 *   /og?title=Fleet+Management+API&eyebrow=Developers&subtitle=Build+on+the+open+logistics+platform
 *
 * Returns a 1200x630 PNG. All params URL-encoded.
 * Sensible defaults are applied when params are missing.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title =
    searchParams.get('title') ||
    'Open-Source Fleet Management & TMS Software';
  const eyebrow = searchParams.get('eyebrow') || 'Fleetbase';
  const subtitle =
    searchParams.get('subtitle') ||
    'Self-hosted or cloud. No per-seat pricing.';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          background: '#0a0a0f',
          color: '#fafafa',
          padding: 80,
          position: 'relative',
          fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            top: -200,
            left: -200,
            width: 700,
            height: 700,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(64, 110, 247, 0.25) 0%, rgba(64, 110, 247, 0) 70%)',
            display: 'flex',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -200,
            right: -200,
            width: 600,
            height: 600,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(160, 83, 240, 0.22) 0%, rgba(160, 83, 240, 0) 70%)',
            display: 'flex',
          }}
        />

        {/* Logo mark + wordmark */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 18,
            position: 'relative',
          }}
        >
          <svg
            width="56"
            height="52"
            viewBox="0 0 144 134"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="logoGrad"
                x1="72"
                y1="5"
                x2="72"
                y2="129"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#ffffff" />
                <stop offset="1" stopColor="#A053F0" />
              </linearGradient>
            </defs>
            <path
              d="M81.37 5c.86 0 1.43.89 1.07 1.68L64.41 45.85c-.36.79.22 1.68 1.08 1.68h71.98c.87 0 1.44.9 1.07 1.68l-37.25 79.22c-.2.41-.61.68-1.07.68H62.63c-.86 0-1.43-.89-1.07-1.68l18.03-39.17c.36-.79-.21-1.68-1.07-1.68H6.53c-.86 0-1.44-.9-1.07-1.68L42.72 5.68c.19-.42.61-.68 1.07-.68h37.58z"
              fill="url(#logoGrad)"
            />
          </svg>
          <span
            style={{
              fontSize: 36,
              fontWeight: 700,
              letterSpacing: -0.5,
              color: '#fafafa',
            }}
          >
            Fleetbase
          </span>
        </div>

        {/* Eyebrow */}
        <div
          style={{
            marginTop: 'auto',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: '#A053F0',
              display: 'flex',
            }}
          />
          <span
            style={{
              fontSize: 22,
              fontWeight: 600,
              color: '#a1a1aa',
              textTransform: 'uppercase',
              letterSpacing: 2,
            }}
          >
            {eyebrow}
          </span>
        </div>

        {/* Title */}
        <div
          style={{
            marginTop: 18,
            fontSize: title.length > 60 ? 64 : 78,
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -1.5,
            color: '#fafafa',
            display: 'flex',
            maxWidth: 1040,
          }}
        >
          {title}
        </div>

        {/* Subtitle */}
        {subtitle ? (
          <div
            style={{
              marginTop: 24,
              fontSize: 26,
              lineHeight: 1.35,
              color: '#a1a1aa',
              display: 'flex',
              maxWidth: 1000,
            }}
          >
            {subtitle}
          </div>
        ) : null}

        {/* Footer URL */}
        <div
          style={{
            position: 'absolute',
            bottom: 60,
            right: 80,
            fontSize: 20,
            color: '#71717a',
            letterSpacing: 0.5,
            display: 'flex',
          }}
        >
          fleetbase.io
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    },
  );
}
