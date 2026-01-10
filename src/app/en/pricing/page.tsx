import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { PricingPageContent } from '@/app/pricing/PricingPageContent';

export const metadata: Metadata = {
  title: "Pricing - NELVO | Unified Dashboard for Creators & Communities",
  description: "Choose the right plan for your community. NELVO offers Basic and Pro plans starting from $15/month. Connect up to 7 platforms and track everything in one dashboard.",
  alternates: {
    canonical: 'https://nelvo.co/en/pricing',
      languages: {
        'ja': 'https://nelvo.co/pricing',
        'en': 'https://nelvo.co/en/pricing',
        'x-default': 'https://nelvo.co/pricing',
      },
  },
  openGraph: {
    title: "Pricing - NELVO | Unified Dashboard for Creators & Communities",
    description: "Choose the right plan for your community. NELVO offers Basic and Pro plans starting from $15/month. Connect up to 7 platforms and track everything in one dashboard.",
    url: "https://nelvo.co/en/pricing",
    siteName: "NELVO",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "NELVO Pricing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing - NELVO | Unified Dashboard for Creators & Communities",
    description: "Choose the right plan for your community. NELVO offers Basic and Pro plans starting from $15/month. Connect up to 7 platforms and track everything in one dashboard.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PricingPage() {
  return (
    <LanguageProvider initialLanguage="en">
      <PricingPageContent />
    </LanguageProvider>
  );
}
