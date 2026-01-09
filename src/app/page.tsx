import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { UseCases } from '@/components/UseCases';
import { Solution } from '@/components/Solution';
import { Features } from '@/components/Features';
import { HowItWorks } from '@/components/HowItWorks';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { Security } from '@/components/Security';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';
import Script from 'next/script';
import { LanguageProvider } from '@/contexts/LanguageContext';

export const metadata: Metadata = {
  title: "NELVO - コミュニティ運営を、ひとつの視点に。",
  description: "コミュニティ運営の全体像をひとつの画面に。NELVOは、複数のツールに散らばった情報を統合し、意思決定を一画面で完結させる運営ダッシュボードです。",
  alternates: {
    canonical: 'https://nelvo.co/',
    languages: {
      'ja': 'https://nelvo.co/',
      'en': 'https://nelvo.co/en',
      'x-default': 'https://nelvo.co/',
    },
  },
  openGraph: {
    title: "NELVO - コミュニティ運営を、ひとつの視点に。",
    description: "コミュニティ運営の全体像をひとつの画面に。NELVOは、複数のツールに散らばった情報を統合し、意思決定を一画面で完結させる運営ダッシュボードです。",
    url: "https://nelvo.co/",
    siteName: "NELVO",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "NELVO" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NELVO - コミュニティ運営を、ひとつの視点に。",
    description: "コミュニティ運営の全体像をひとつの画面に。NELVOは、複数のツールに散らばった情報を統合し、意思決定を一画面で完結させる運営ダッシュボードです。",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "サブスクリプションは自由に解約できますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "はい。契約はいつでも自由に変更・キャンセルできます。",
      },
    },
    {
      "@type": "Question",
      "name": "どのプラットフォームと連携できますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "主要なコミュニティ運営サービスや決済サービスに対応しています。詳細は設定画面から確認できます。",
      },
    },
    {
      "@type": "Question",
      "name": "データの安全性はどう守られていますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "通信はすべて暗号化し、外部に公開されない安全な環境で管理しています。また、連携に使用する認証情報は取得せず、必要最小限のデータのみを扱います。",
      },
    },
    {
      "@type": "Question",
      "name": "複数サービスをつないでも動作は重くなりませんか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "バックグラウンド処理で自動集計されるため、通常の利用で動作が重くなる心配はありません。",
      },
    },
    {
      "@type": "Question",
      "name": "初めてでも使いこなせますか？",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "設定や操作に関するガイドをご用意しています。必要に応じて簡単なお問い合わせにも対応しています。",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <LanguageProvider initialLanguage="ja">
        <main className="min-h-screen bg-white selection:bg-purple-100 selection:text-purple-900">
        <Header />
        <Hero />
        <UseCases />
        <Solution />
        <Features />
        <HowItWorks />
        <Pricing />
        <FAQ />
        <Security />
        <Footer />
      </main>
    </LanguageProvider>
    </>
  );
}
