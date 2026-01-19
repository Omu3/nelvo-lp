import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { CommunityAnalyticsPageContent } from './CommunityAnalyticsPageContent';

export const metadata: Metadata = {
  title: "Community Analytics Dashboard | NELVO | Unified Community Operations",
  description: "Integrate community data from Discord, YouTube, Instagram, and more for comprehensive community analytics. Understand community growth and revenue in one unified dashboard with NELVO.",
  alternates: {
    canonical: 'https://nelvo.co/en/community-analytics-dashboard',
    languages: {
      'ja': 'https://nelvo.co/community-analytics-dashboard',
      'en': 'https://nelvo.co/en/community-analytics-dashboard',
      'x-default': 'https://nelvo.co/community-analytics-dashboard',
    },
  },
  openGraph: {
    title: "Community Analytics Dashboard | NELVO",
    description: "Integrate community data from Discord, YouTube, Instagram, and more for comprehensive community analytics. Understand community growth and revenue in one unified dashboard with NELVO.",
    url: "https://nelvo.co/en/community-analytics-dashboard",
    siteName: "NELVO",
    type: "website",
    images: [{ url: "https://nelvo.co/og.png", width: 1200, height: 630, alt: "NELVO Community Analytics" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Community Analytics Dashboard | NELVO",
    description: "Integrate community data from Discord, YouTube, Instagram, and more for comprehensive community analytics. Understand community growth and revenue in one unified dashboard with NELVO.",
    images: ["https://nelvo.co/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CommunityAnalyticsPage() {
  return (
    <LanguageProvider initialLanguage="en">
      <CommunityAnalyticsPageContent />
    </LanguageProvider>
  );
}
