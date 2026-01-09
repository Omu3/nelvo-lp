import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';

export const metadata: Metadata = {
  title: "Integrations - NELVO | 連携プラットフォーム・統合サービス",
  description: "NELVOが対応している連携プラットフォームをご紹介。Discord、Patreon、Stripe、Skoolなど、主要なコミュニティ運営サービスや決済サービスと連携できます。",
  alternates: {
    canonical: 'https://nelvo.co/integrations',
    languages: {
      'ja': 'https://nelvo.co/integrations',
      'en': 'https://nelvo.co/en',
    },
  },
  openGraph: {
    title: "Integrations - NELVO | 連携プラットフォーム・統合サービス",
    description: "NELVOが対応している連携プラットフォームをご紹介。Discord、Patreon、Stripe、Skoolなど、主要なコミュニティ運営サービスや決済サービスと連携できます。",
    url: "https://nelvo.co/integrations",
    siteName: "NELVO",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "NELVO Integrations" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Integrations - NELVO | 連携プラットフォーム・統合サービス",
    description: "NELVOが対応している連携プラットフォームをご紹介。Discord、Patreon、Stripe、Skoolなど、主要なコミュニティ運営サービスや決済サービスと連携できます。",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function IntegrationsPage() {
  return (
    <LanguageProvider initialLanguage="ja">
      <main className="min-h-screen bg-white selection:bg-purple-100 selection:text-purple-900">
        <Header />
        <div className="pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-8">
              Integrations
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                NELVOは、主要なコミュニティ運営サービスや決済サービスと連携し、複数のプラットフォームに分散している運営データを統合します。各プラットフォームのAPIと安全に連携し、リアルタイムでデータを同期するため、手動での集計作業は不要です。対応プラットフォームは順次拡張予定で、現在利用している運営環境に合わせて柔軟に活用できます。
              </p>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Discord連携
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Discordは、多くのコミュニティで使用されているコミュニケーションツールです。NELVOとDiscordを連携することで、サーバーメンバーの情報、参加日、アクティビティ状況などを自動的に取得し、ダッシュボード上で確認できます。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  連携は、DiscordのOAuth認証を使用して安全に行われ、必要最小限の権限のみを要求します。メンバーの個人情報は適切に保護され、運営に必要な情報のみが取得されます。連携の設定は簡単で、数分で完了します。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Patreon連携
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Patreonは、クリエイターがファンから継続的な支援を受けられるプラットフォームです。NELVOとPatreonを連携することで、サブスクリプション情報、メンバーの加入・更新・解約状況、収益データなどを自動的に取得できます。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  PatreonのAPIを通じて、リアルタイムでデータを同期するため、最新の運営状況を常に把握できます。サブスクリプションレベルの情報も取得でき、異なるプランごとのメンバー数を確認できます。これにより、収益構造の分析や、プラン設計の最適化に活用できます。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Stripe連携
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Stripeは、オンライン決済処理を提供するサービスです。NELVOとStripeを連携することで、決済情報、顧客データ、サブスクリプション状況などを自動的に取得できます。MRR（月次経常収益）やLTV（顧客生涯価値）などの重要な指標も自動計算されます。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  StripeのWebhookを使用して、リアルタイムで決済イベントを取得し、ダッシュボード上で最新の情報を確認できます。顧客の支払い状況や、解約・更新のタイミングも自動で記録され、収益管理が効率化されます。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Skool連携
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Skoolは、オンラインコミュニティプラットフォームです。NELVOとSkoolを連携することで、コミュニティメンバーの情報、参加日、アクティビティ状況などを自動的に取得できます。Skoolのコミュニティ運営データを、他のプラットフォームのデータと統合して確認できます。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  連携により、Skool単体では見えにくい運営状況を、他のプラットフォームのデータと組み合わせて分析できます。複数のコミュニティプラットフォームを横断的に管理し、全体の運営状況を把握できます。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  連携の安全性
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  NELVOは、各プラットフォームとの連携において、最高レベルのセキュリティを確保しています。OAuth認証を使用し、認証情報は安全に管理されます。連携に使用する認証情報は取得せず、必要最小限のデータのみを扱います。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  すべてのデータ通信はSSL/TLSにより暗号化され、外部に公開されない安全な環境で管理されています。定期的なセキュリティ監査を実施し、脆弱性がないか確認しています。お客様のデータを最優先に保護します。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  今後の拡張予定
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  対応プラットフォームは順次拡張予定です。現在利用している運営環境に合わせて、柔軟に活用できます。新たなプラットフォームの追加要望も受け付けており、多くのユーザーから要望の多いプラットフォームを優先的に追加していきます。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  連携の設定は、直感的なインターフェースで簡単に行えます。各プラットフォームの接続・切断も、数クリックで完了します。運営環境の変化に合わせて、柔軟に連携を変更できます。
                </p>
              </section>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </LanguageProvider>
  );
}
