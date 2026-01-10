import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { FeaturesPageContent } from './FeaturesPageContent';

export const metadata: Metadata = {
  title: "Features - NELVO | Unified Dashboard for Creators & Communities",
  description: "Discover NELVO's powerful features: data integration, member visualization, revenue tracking, and Today view. All your community operations in one unified dashboard.",
  alternates: {
    canonical: 'https://nelvo.co/features',
    languages: {
      'ja': 'https://nelvo.co/features',
      'en': 'https://nelvo.co/en/features',
      'x-default': 'https://nelvo.co/features',
    },
  },
  openGraph: {
    title: "NELVO Features | All-in-one community analytics",
    description: "Discover NELVO's powerful features: data integration, member visualization, revenue tracking, and Today view. Track MRR, churn & retention in one unified dashboard.",
    url: "https://nelvo.co/features",
    siteName: "NELVO",
    type: "website",
    images: [{ url: "https://nelvo.co/og/og-features-ja.png", width: 1200, height: 630, alt: "NELVO Features" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NELVO Features | All-in-one community analytics",
    description: "Discover NELVO's powerful features: data integration, member visualization, revenue tracking, and Today view. Track MRR, churn & retention in one unified dashboard.",
    images: ["https://nelvo.co/og/og-features-ja.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FeaturesPage() {
  return (
    <LanguageProvider initialLanguage="ja">
      <FeaturesPageContent />
    </LanguageProvider>
  );
}
