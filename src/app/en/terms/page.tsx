import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { TermsPageContent } from '@/app/terms/TermsPageContent';

export const metadata: Metadata = {
  title: "Terms of Service - NELVO | Terms of Service",
  description: "These Terms set forth the conditions for using NELVO. These Terms set forth the conditions for using NELVO (the Service), and users agree to these Terms when using the Service.",
  alternates: {
    canonical: 'https://nelvo.co/en/terms',
      languages: {
        'ja': 'https://nelvo.co/terms',
        'en': 'https://nelvo.co/en/terms',
        'x-default': 'https://nelvo.co/terms',
      },
  },
  openGraph: {
    title: "Terms of Service - NELVO | Terms of Service",
    description: "These Terms set forth the conditions for using NELVO. These Terms set forth the conditions for using NELVO (the Service), and users agree to these Terms when using the Service.",
    url: "https://nelvo.co/en/terms",
    siteName: "NELVO",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "NELVO Terms of Service" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - NELVO | Terms of Service",
    description: "These Terms set forth the conditions for using NELVO. These Terms set forth the conditions for using NELVO (the Service), and users agree to these Terms when using the Service.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <LanguageProvider initialLanguage="en">
      <TermsPageContent />
    </LanguageProvider>
  );
}
