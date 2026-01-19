import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { StripeMrrPageContent } from './StripeMrrPageContent';

export const metadata: Metadata = {
  title: "Stripe MRR Dashboard | NELVO | Community Operations Dashboard",
  description: "Visualize Stripe MRR (Monthly Recurring Revenue), churn rate, and retention rate. Integrate Stripe data with community growth using NELVO to analyze the correlation between revenue and growth.",
  alternates: {
    canonical: 'https://nelvo.co/en/stripe-mrr-dashboard',
    languages: {
      'ja': 'https://nelvo.co/stripe-mrr-dashboard',
      'en': 'https://nelvo.co/en/stripe-mrr-dashboard',
      'x-default': 'https://nelvo.co/stripe-mrr-dashboard',
    },
  },
  openGraph: {
    title: "Stripe MRR Dashboard | NELVO",
    description: "Visualize Stripe MRR (Monthly Recurring Revenue), churn rate, and retention rate. Integrate Stripe data with community growth using NELVO to analyze the correlation between revenue and growth.",
    url: "https://nelvo.co/en/stripe-mrr-dashboard",
    siteName: "NELVO",
    type: "website",
    images: [{ url: "https://nelvo.co/og.png", width: 1200, height: 630, alt: "NELVO Stripe MRR Dashboard" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stripe MRR Dashboard | NELVO",
    description: "Visualize Stripe MRR (Monthly Recurring Revenue), churn rate, and retention rate. Integrate Stripe data with community growth using NELVO to analyze the correlation between revenue and growth.",
    images: ["https://nelvo.co/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function StripeMrrPage() {
  return (
    <LanguageProvider initialLanguage="en">
      <StripeMrrPageContent />
    </LanguageProvider>
  );
}
