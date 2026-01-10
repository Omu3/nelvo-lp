import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { UseCasesPageContent } from '@/app/use-cases/UseCasesPageContent';

export const metadata: Metadata = {
  title: "Use Cases - NELVO | Unified Dashboard for Creators & Communities",
  description: "In community operations, the reason operational decisions slow down is often a structural problem, not a matter of ability. NELVO solves these structural challenges and enables rapid data-driven decision-making.",
  alternates: {
    canonical: 'https://nelvo.co/en/use-cases',
      languages: {
        'ja': 'https://nelvo.co/use-cases',
        'en': 'https://nelvo.co/en/use-cases',
        'x-default': 'https://nelvo.co/use-cases',
      },
  },
  openGraph: {
    title: "Use Cases - NELVO | Unified Dashboard for Creators & Communities",
    description: "In community operations, the reason operational decisions slow down is often a structural problem, not a matter of ability. NELVO solves these structural challenges and enables rapid data-driven decision-making.",
    url: "https://nelvo.co/en/use-cases",
    siteName: "NELVO",
    locale: "en_US",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "NELVO Use Cases" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Use Cases - NELVO | Unified Dashboard for Creators & Communities",
    description: "In community operations, the reason operational decisions slow down is often a structural problem, not a matter of ability. NELVO solves these structural challenges and enables rapid data-driven decision-making.",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function UseCasesPage() {
  return (
    <LanguageProvider initialLanguage="en">
      <UseCasesPageContent />
    </LanguageProvider>
  );
}
