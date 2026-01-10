import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { FaqPageContent } from '@/app/faq/FaqPageContent';

export const metadata: Metadata = {
  title: "FAQ - NELVO | Frequently Asked Questions",
  description: "Here are common questions and answers about NELVO. We've compiled information about service features, integration methods, pricing plans, security, and more.",
  alternates: {
    canonical: 'https://nelvo.co/en/faq',
      languages: {
        'ja': 'https://nelvo.co/faq',
        'en': 'https://nelvo.co/en/faq',
        'x-default': 'https://nelvo.co/faq',
      },
  },
  openGraph: {
    title: "FAQ - NELVO | Frequently Asked Questions",
    description: "Here are common questions and answers about NELVO. We've compiled information about service features, integration methods, pricing plans, security, and more.",
    url: "https://nelvo.co/en/faq",
    siteName: "NELVO",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "NELVO FAQ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - NELVO | Frequently Asked Questions",
    description: "Here are common questions and answers about NELVO. We've compiled information about service features, integration methods, pricing plans, security, and more.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FaqPage() {
  return (
    <LanguageProvider initialLanguage="en">
      <FaqPageContent />
    </LanguageProvider>
  );
}
