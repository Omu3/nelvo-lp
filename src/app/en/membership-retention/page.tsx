import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { MembershipRetentionPageContent } from './MembershipRetentionPageContent';

export const metadata: Metadata = {
  title: "Membership Retention Analysis | NELVO | Community Operations Dashboard",
  description: "Visualize membership retention rate, churn rate, and churn risk. Track retention trends with NELVO to optimize membership operations.",
  alternates: {
    canonical: 'https://nelvo.co/en/membership-retention',
    languages: {
      'ja': 'https://nelvo.co/membership-retention',
      'en': 'https://nelvo.co/en/membership-retention',
      'x-default': 'https://nelvo.co/membership-retention',
    },
  },
  openGraph: {
    title: "Membership Retention Analysis | NELVO",
    description: "Visualize membership retention rate, churn rate, and churn risk. Track retention trends with NELVO to optimize membership operations.",
    url: "https://nelvo.co/en/membership-retention",
    siteName: "NELVO",
    type: "website",
    images: [{ url: "https://nelvo.co/og.png", width: 1200, height: 630, alt: "NELVO Membership Retention" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Membership Retention Analysis | NELVO",
    description: "Visualize membership retention rate, churn rate, and churn risk. Track retention trends with NELVO to optimize membership operations.",
    images: ["https://nelvo.co/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MembershipRetentionPage() {
  return (
    <LanguageProvider initialLanguage="en">
      <MembershipRetentionPageContent />
    </LanguageProvider>
  );
}
