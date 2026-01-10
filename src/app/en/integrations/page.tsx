import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { IntegrationsPageContent } from '@/app/integrations/IntegrationsPageContent';

export const metadata: Metadata = {
  title: "Integrations - NELVO | Unified Dashboard for Creators & Communities",
  description: "Connect your favorite platforms with NELVO. Integrate Discord, Stripe, YouTube, Instagram and more. All your community data in one unified dashboard.",
  alternates: {
    canonical: 'https://nelvo.co/en/integrations',
      languages: {
        'ja': 'https://nelvo.co/integrations',
        'en': 'https://nelvo.co/en/integrations',
        'x-default': 'https://nelvo.co/integrations',
      },
  },
  openGraph: {
    title: "Integrations - NELVO | Unified Dashboard for Creators & Communities",
    description: "Connect your favorite platforms with NELVO. Integrate Discord, Stripe, YouTube, Instagram and more. All your community data in one unified dashboard.",
    url: "https://nelvo.co/en/integrations",
    siteName: "NELVO",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "NELVO Integrations" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Integrations - NELVO | Unified Dashboard for Creators & Communities",
    description: "Connect your favorite platforms with NELVO. Integrate Discord, Stripe, YouTube, Instagram and more. All your community data in one unified dashboard.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function IntegrationsPage() {
  return (
    <LanguageProvider initialLanguage="en">
      <IntegrationsPageContent />
    </LanguageProvider>
  );
}
