import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { YoutubeAnalyticsPageContent } from './YoutubeAnalyticsPageContent';

export const metadata: Metadata = {
  title: "YouTube Analytics for Creators | NELVO | Community Operations Dashboard",
  description: "Visualize YouTube channel subscribers, views, and engagement rates. Integrate YouTube data with revenue data using NELVO to support creator decision-making.",
  alternates: {
    canonical: 'https://nelvo.co/en/youtube-analytics-for-creators',
    languages: {
      'ja': 'https://nelvo.co/youtube-analytics-for-creators',
      'en': 'https://nelvo.co/en/youtube-analytics-for-creators',
      'x-default': 'https://nelvo.co/youtube-analytics-for-creators',
    },
  },
  openGraph: {
    title: "YouTube Analytics for Creators | NELVO",
    description: "Visualize YouTube channel subscribers, views, and engagement rates. Integrate YouTube data with revenue data using NELVO to support creator decision-making.",
    url: "https://nelvo.co/en/youtube-analytics-for-creators",
    siteName: "NELVO",
    type: "website",
    images: [{ url: "https://nelvo.co/og.png", width: 1200, height: 630, alt: "NELVO YouTube Analytics" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "YouTube Analytics for Creators | NELVO",
    description: "Visualize YouTube channel subscribers, views, and engagement rates. Integrate YouTube data with revenue data using NELVO to support creator decision-making.",
    images: ["https://nelvo.co/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function YoutubeAnalyticsPage() {
  return (
    <LanguageProvider initialLanguage="en">
      <YoutubeAnalyticsPageContent />
    </LanguageProvider>
  );
}
