import type { Metadata, Viewport } from 'next';
import { Inter, Source_Serif_4 } from 'next/font/google';
import { ReactNode } from 'react';
import './globals.css';
import ReadingProgress from './components/ui/ReadingProgress';
import StructuredData from './structured-data';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const serif = Source_Serif_4({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-serif',
});

const SITE_URL = 'https://dilliramacharya.com';
const SITE_TITLE = 'Dilli Ram Acharya · Agricultural & Biosystems Engineer';
const SITE_DESCRIPTION =
  'Portfolio of Dilli Ram Acharya, M.Eng. researcher at Nanjing Agricultural University. Research in biomass-derived functional materials, biochar engineering, electrochemical sensing, DFT, and machine learning.';

export const viewport: Viewport = {
  themeColor: '#10b981',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: '%s · Dilli Ram Acharya',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Dilli Ram Acharya',
    'Agricultural Engineering',
    'Biosystems Engineering',
    'Biomass Valorization',
    'Biochar',
    'Electrochemical Sensing',
    'DFT',
    'Density Functional Theory',
    'Machine Learning',
    'Nanjing Agricultural University',
    'Environmental Monitoring',
  ],
  authors: [{ name: 'Dilli Ram Acharya', url: SITE_URL }],
  creator: 'Dilli Ram Acharya',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: 'Dilli Ram Acharya',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body>
        <StructuredData />
        <ReadingProgress />
        {children}
      </body>
    </html>
  );
}
