import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { StatusPageContent } from './StatusPageContent';

export const metadata: Metadata = {
  title: "Status - NELVO | サービスステータス",
  description: "NELVOのサービス稼働状況をご確認いただけます。",
  alternates: {
    canonical: 'https://nelvo.co/status',
    languages: {
      'ja': 'https://nelvo.co/status',
      'en': 'https://nelvo.co/en/status',
      'x-default': 'https://nelvo.co/status',
    },
  },
  openGraph: {
    title: "Status - NELVO | サービスステータス",
    description: "NELVOのサービス稼働状況をご確認いただけます。",
    url: "https://nelvo.co/status",
    siteName: "NELVO",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "NELVO Status" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Status - NELVO | サービスステータス",
    description: "NELVOのサービス稼働状況をご確認いただけます。",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function StatusPage() {
  return (
    <LanguageProvider initialLanguage="ja">
      <StatusPageContent />
    </LanguageProvider>
  );
}
