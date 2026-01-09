import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { UseCasesPageContent } from './UseCasesPageContent';

export const metadata: Metadata = {
  title: "Use Cases - NELVO | 活用事例・ユースケース",
  description: "コミュニティ運営において、運営判断が遅れる原因は「能力」ではなく「構造」の問題であることが多いです。NELVOは、この構造的な課題を解決し、データに基づいた迅速な意思決定を実現します。",
  alternates: {
    canonical: 'https://nelvo.co/use-cases',
    languages: {
      'ja': 'https://nelvo.co/use-cases',
      'en': 'https://nelvo.co/en/use-cases',
      'x-default': 'https://nelvo.co/use-cases',
    },
  },
  openGraph: {
    title: "Use Cases - NELVO | 活用事例・ユースケース",
    description: "コミュニティ運営において、運営判断が遅れる原因は「能力」ではなく「構造」の問題であることが多いです。NELVOは、この構造的な課題を解決し、データに基づいた迅速な意思決定を実現します。",
    url: "https://nelvo.co/use-cases",
    siteName: "NELVO",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "NELVO Use Cases" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Use Cases - NELVO | 活用事例・ユースケース",
    description: "コミュニティ運営において、運営判断が遅れる原因は「能力」ではなく「構造」の問題であることが多いです。NELVOは、この構造的な課題を解決し、データに基づいた迅速な意思決定を実現します。",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function UseCasesPage() {
  return (
    <LanguageProvider initialLanguage="ja">
      <UseCasesPageContent />
    </LanguageProvider>
  );
}
