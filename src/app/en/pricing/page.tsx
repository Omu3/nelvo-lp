import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { PricingPageContent } from '@/app/pricing/PricingPageContent';

export const metadata: Metadata = {
  title: "NELVO Pricing | Basic ($15/month) & Pro ($49/month) Plans + Feature Comparison",
  description: "Compare NELVO pricing plans: Basic ($15/month) and Pro ($49/month). Integrate Discord, Stripe, YouTube & Instagram data to track MRR, retention and churn. Upgrade or cancel anytime.",
  alternates: {
    canonical: 'https://nelvo.co/en/pricing',
    languages: {
      'ja': 'https://nelvo.co/pricing',
      'en': 'https://nelvo.co/en/pricing',
      'x-default': 'https://nelvo.co/pricing',
    },
  },
  openGraph: {
    title: "NELVO Pricing | Basic ($15/month) & Pro ($49/month)",
    description: "Compare pricing & features to choose the right plan. Track MRR, retention and churn by integrating Discord, Stripe, YouTube & Instagram.",
    url: "https://nelvo.co/en/pricing",
    siteName: "NELVO",
    type: "website",
    images: [{ url: "https://nelvo.co/og/og-pricing-en.png", width: 1200, height: 630, alt: "NELVO Pricing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NELVO Pricing | Basic ($15/month) & Pro ($49/month)",
    description: "Compare pricing & features to choose the right plan. Track MRR, retention and churn by integrating Discord, Stripe, YouTube & Instagram.",
    images: ["https://nelvo.co/og/og-pricing-en.png"],
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
