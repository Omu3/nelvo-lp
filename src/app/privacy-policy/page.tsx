import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { PrivacyPageContent } from './PrivacyPageContent';

export const metadata: Metadata = {
  title: "プライバシーポリシー - NELVO | Privacy Policy",
  description: "NELVOにおける個人情報等の取扱いを定めます。本ポリシーは、NELVO（本サービス）における個人情報等の取扱いについて説明します。",
  alternates: {
    canonical: 'https://nelvo.co/privacy-policy',
    languages: {
      'ja': 'https://nelvo.co/privacy-policy',
      'en': 'https://nelvo.co/en/privacy-policy',
      'x-default': 'https://nelvo.co/privacy-policy',
    },
  },
  openGraph: {
    title: "プライバシーポリシー - NELVO | Privacy Policy",
    description: "NELVOにおける個人情報等の取扱いを定めます。本ポリシーは、NELVO（本サービス）における個人情報等の取扱いについて説明します。",
    url: "https://nelvo.co/privacy-policy",
    siteName: "NELVO",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "NELVO Privacy Policy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "プライバシーポリシー - NELVO | Privacy Policy",
    description: "NELVOにおける個人情報等の取扱いを定めます。本ポリシーは、NELVO（本サービス）における個人情報等の取扱いについて説明します。",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <LanguageProvider initialLanguage="ja">
      <PrivacyPageContent />
    </LanguageProvider>
  );
}
