import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            backgroundColor: '#ffffff',
            padding: '80px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            position: 'relative',
          }}
        >
          {/* Logo - Top Left */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                fontSize: '28px',
                fontWeight: 'bold',
                color: '#214BCE',
              }}
            >
              NELVO
            </div>
          </div>

          {/* Title and Content - Center Left */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              justifyContent: 'center',
              flex: 1,
              width: '100%',
            }}
          >
            <h1
              style={{
                fontSize: '72px',
                fontWeight: 'bold',
                lineHeight: '1.2',
                color: '#0a0a0a',
                margin: 0,
                marginBottom: '24px',
              }}
            >
              NELVO Integrations
            </h1>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                gap: '16px',
                width: '100%',
              }}
            >
              <div
                style={{
                  fontSize: '36px',
                  fontWeight: '600',
                  color: '#214BCE',
                  lineHeight: '1.4',
                }}
              >
                Connect your stack in minutes
              </div>

              <div
                style={{
                  fontSize: '28px',
                  fontWeight: '500',
                  color: '#666666',
                  lineHeight: '1.4',
                  marginTop: '8px',
                }}
              >
                Discord • Stripe • YouTube • Instagram
              </div>
            </div>
          </div>

          {/* Domain - Bottom Right */}
          <div
            style={{
              position: 'absolute',
              bottom: '80px',
              right: '80px',
              fontSize: '18px',
              fontWeight: '400',
              color: '#999999',
            }}
          >
            nelvo.co
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}