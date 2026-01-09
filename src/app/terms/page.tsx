import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { TermsPageContent } from './TermsPageContent';

export const metadata: Metadata = {
  title: "利用規約 - NELVO | Terms of Service",
  description: "NELVOのサービス利用規約をご確認いただけます。本規約は、NELVOの利用条件を定めるものであり、ユーザーは本規約に同意の上、本サービスを利用します。",
  alternates: {
    canonical: 'https://nelvo.co/terms',
    languages: {
      'ja': 'https://nelvo.co/terms',
      'en': 'https://nelvo.co/en/terms',
      'x-default': 'https://nelvo.co/terms',
    },
  },
  openGraph: {
    title: "利用規約 - NELVO | Terms of Service",
    description: "NELVOのサービス利用規約をご確認いただけます。本規約は、NELVOの利用条件を定めるものであり、ユーザーは本規約に同意の上、本サービスを利用します。",
    url: "https://nelvo.co/terms",
    siteName: "NELVO",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "NELVO Terms of Service" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "利用規約 - NELVO | Terms of Service",
    description: "NELVOのサービス利用規約をご確認いただけます。本規約は、NELVOの利用条件を定めるものであり、ユーザーは本規約に同意の上、本サービスを利用します。",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <LanguageProvider initialLanguage="ja">
      <TermsPageContent />
    </LanguageProvider>
  );
}
