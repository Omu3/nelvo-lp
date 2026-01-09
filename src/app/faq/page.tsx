import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';
import { FaqPageContent } from './FaqPageContent';

export const metadata: Metadata = {
  title: "FAQ - NELVO | よくある質問",
  description: "NELVOに関するよくある質問と回答をご紹介します。サービス内容、連携方法、料金プラン、セキュリティなど、気になる点をまとめています。",
  alternates: {
    canonical: 'https://nelvo.co/faq',
    languages: {
      'ja': 'https://nelvo.co/faq',
      'en': 'https://nelvo.co/en/faq',
      'x-default': 'https://nelvo.co/faq',
    },
  },
  openGraph: {
    title: "FAQ - NELVO | よくある質問",
    description: "NELVOに関するよくある質問と回答をご紹介します。サービス内容、連携方法、料金プラン、セキュリティなど、気になる点をまとめています。",
    url: "https://nelvo.co/faq",
    siteName: "NELVO",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "NELVO FAQ" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - NELVO | よくある質問",
    description: "NELVOに関するよくある質問と回答をご紹介します。サービス内容、連携方法、料金プラン、セキュリティなど、気になる点をまとめています。",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FaqPage() {
  return (
    <LanguageProvider initialLanguage="ja">
      <FaqPageContent />
    </LanguageProvider>
  );
}
