import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { DiscordAnalyticsPageContent } from './DiscordAnalyticsPageContent';

export const metadata: Metadata = {
  title: "Discord Analytics Tool | NELVO | Community Operations Dashboard",
  description: "Visualize Discord community member count, active rate, and retention rate. Manage Discord operations in one unified dashboard with NELVO and make data-driven community decisions.",
  alternates: {
    canonical: 'https://nelvo.co/en/discord-analytics',
    languages: {
      'ja': 'https://nelvo.co/discord-analytics',
      'en': 'https://nelvo.co/en/discord-analytics',
      'x-default': 'https://nelvo.co/discord-analytics',
    },
  },
  openGraph: {
    title: "Discord Analytics Tool | NELVO",
    description: "Visualize Discord community member count, active rate, and retention rate. Manage Discord operations in one unified dashboard with NELVO and make data-driven community decisions.",
    url: "https://nelvo.co/en/discord-analytics",
    siteName: "NELVO",
    type: "website",
    images: [{ url: "https://nelvo.co/og.png", width: 1200, height: 630, alt: "NELVO Discord Analytics" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Discord Analytics Tool | NELVO",
    description: "Visualize Discord community member count, active rate, and retention rate. Manage Discord operations in one unified dashboard with NELVO and make data-driven community decisions.",
    images: ["https://nelvo.co/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DiscordAnalyticsPage() {
  return (
    <LanguageProvider initialLanguage="en">
      <DiscordAnalyticsPageContent />
    </LanguageProvider>
  );
}
