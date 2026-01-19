import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { ComparePageContent } from './ComparePageContent';

export const metadata: Metadata = {
  title: "NELVO vs Competitors | Community Operations Dashboard Comparison",
  description: "Compare NELVO with other community operations tools. Compare features such as multi-platform data integration, MRR tracking, and retention analysis to choose the best tool.",
  alternates: {
    canonical: 'https://nelvo.co/en/compare',
    languages: {
      'ja': 'https://nelvo.co/compare',
      'en': 'https://nelvo.co/en/compare',
      'x-default': 'https://nelvo.co/compare',
    },
  },
  openGraph: {
    title: "NELVO vs Competitors | Community Operations Dashboard",
    description: "Compare NELVO with other community operations tools. Compare features such as multi-platform data integration, MRR tracking, and retention analysis to choose the best tool.",
    url: "https://nelvo.co/en/compare",
    siteName: "NELVO",
    type: "website",
    images: [{ url: "https://nelvo.co/og.png", width: 1200, height: 630, alt: "NELVO vs Competitors" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NELVO vs Competitors | Community Operations Dashboard",
    description: "Compare NELVO with other community operations tools. Compare features such as multi-platform data integration, MRR tracking, and retention analysis to choose the best tool.",
    images: ["https://nelvo.co/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ComparePage() {
  return (
    <LanguageProvider initialLanguage="en">
      <ComparePageContent />
    </LanguageProvider>
  );
}
