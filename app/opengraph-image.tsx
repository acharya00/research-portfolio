import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Dilli Ram Acharya · Agricultural & Biosystems Engineer';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background:
            'linear-gradient(135deg, #064e3b 0%, #047857 50%, #10b981 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: 4,
            textTransform: 'uppercase',
            color: '#a7f3d0',
          }}
        >
          Portfolio
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              fontSize: 84,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            Dilli Ram Acharya
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 36,
              fontWeight: 500,
              color: '#d1fae5',
              maxWidth: 900,
            }}
          >
            Agricultural & Biosystems Engineer · M.Eng. Researcher
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 22,
            color: '#ecfdf5',
          }}
        >
          <div>Nanjing Agricultural University</div>
          <div>dilliramacharya.com</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
