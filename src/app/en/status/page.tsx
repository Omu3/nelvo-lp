import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { StatusPageContent } from '@/app/status/StatusPageContent';

export const metadata: Metadata = {
  title: "Status - NELVO | Service Status",
  description: "Check the operational status of NELVO services.",
  alternates: {
    canonical: 'https://nelvo.co/en/status',
      languages: {
        'ja': 'https://nelvo.co/status',
        'en': 'https://nelvo.co/en/status',
        'x-default': 'https://nelvo.co/status',
      },
  },
  openGraph: {
    title: "Status - NELVO | Service Status",
    description: "Check the operational status of NELVO services.",
    url: "https://nelvo.co/en/status",
    siteName: "NELVO",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "NELVO Status" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Status - NELVO | Service Status",
    description: "Check the operational status of NELVO services.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function StatusPage() {
  return (
    <LanguageProvider initialLanguage="en">
      <StatusPageContent />
    </LanguageProvider>
  );
}
