import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Metadata } from 'next';
import { LanguageProvider } from '@/contexts/LanguageContext';

export const metadata: Metadata = {
  title: "Pricing - NELVO | 料金プラン・価格",
  description: "NELVOの料金プランをご紹介。BasicプランとProプランから、コミュニティの規模と目的に合わせて最適なプランをお選びください。月額2,980円から利用可能です。",
  alternates: {
    canonical: 'https://nelvo.co/pricing',
    languages: {
      'ja': 'https://nelvo.co/pricing',
      'en': 'https://nelvo.co/en',
    },
  },
  openGraph: {
    title: "Pricing - NELVO | 料金プラン・価格",
    description: "NELVOの料金プランをご紹介。BasicプランとProプランから、コミュニティの規模と目的に合わせて最適なプランをお選びください。月額2,980円から利用可能です。",
    url: "https://nelvo.co/pricing",
    siteName: "NELVO",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "NELVO Pricing" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing - NELVO | 料金プラン・価格",
    description: "NELVOの料金プランをご紹介。BasicプランとProプランから、コミュニティの規模と目的に合わせて最適なプランをお選びください。月額2,980円から利用可能です。",
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PricingPage() {
  return (
    <LanguageProvider initialLanguage="ja">
      <main className="min-h-screen bg-white selection:bg-purple-100 selection:text-purple-900">
        <Header />
        <div className="pt-24 pb-16 md:pt-32 md:pb-24">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-8">
              Pricing
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 leading-relaxed mb-12">
                NELVOは、コミュニティの規模と運営目的に合わせて、2つの料金プランをご用意しています。Basicプランは、運営の基盤を整えたい方向けのエントリープランです。Proプランは、データを活用して意思決定を行い、成長速度と収益性を最大化したい方向けのプランです。どちらのプランも、いつでも自由に変更・キャンセルが可能で、コミュニティの成長に合わせて柔軟にプランを変更できます。
              </p>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Basicプラン
                </h2>
                <p className="text-lg font-semibold text-gray-900 mb-4">
                  月額 2,980円
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Basicプランは、コミュニティ運営の基盤を整えたい方向けのプランです。対応しているサービスから最大3件まで連携でき、主要なコミュニティ・決済プラットフォームに対応しています。メンバー情報や決済ステータスは自動同期され、加入日・更新日・解約日も自動管理されます。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Todayダッシュボードで今日の新規・解約・更新を一目で把握でき、コミュニティごとの増減状況も確認できます。Analyticsではトレンドの概要のみ確認可能で、基本的な運営状況の把握に最適です。小規模なコミュニティや、まずは試してみたいという方におすすめのプランです。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Proプラン
                </h2>
                <p className="text-lg font-semibold text-gray-900 mb-4">
                  月額 6,980円（おすすめ）
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Proプランは、データを活用して意思決定を行い、成長速度と収益性を最大化したい方向けのプランです。対応しているサービスから最大7件まで連携でき、大規模コミュニティにも対応しています。メンバー・決済・コミュニティ情報を横断して一元管理でき、Analyticsダッシュボードをすべて利用できます。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  継続率の推移（6ヶ月・12ヶ月）を可視化し、売上指標（MRR、月次売上、LTVなど）のトラッキングが可能です。セグメント別パフォーマンス分析や、複数コミュニティの比較グラフ、参加月×継続率のコホート分析（Retention Heatmap）など、高度な分析機能を利用できます。データドリブンな運営を実現したい方におすすめのプランです。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  プラン変更について
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  プランはいつでも自由に変更・キャンセルが可能です。コミュニティの成長に合わせて、BasicプランからProプランへのアップグレードも、その逆のダウングレードも、月単位で柔軟に対応できます。変更は即座に反映され、追加の手数料はかかりません。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  解約も自由に行え、解約後も当月の終了日までは利用可能です。データは安全に保管され、再契約時には以前のデータを引き続き利用できます。コミュニティ運営の状況に応じて、最適なプランを選択してください。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  対応プラットフォーム
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  NELVOは、主要なコミュニティ運営サービスや決済サービスに対応しています。Discord、Patreon、Stripe、Skoolなど、多くのプラットフォームと連携可能です。対応プラットフォームは順次拡張予定で、現在利用している運営環境に合わせて柔軟に活用できます。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  各プラットフォームとの連携は、安全な認証方式を使用して行われ、必要最小限のデータのみを取得します。連携の詳細は設定画面から確認でき、簡単な操作で接続・切断が可能です。
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  事前登録について
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  現在、NELVOは事前登録のみ受付中です。正式リリース前に、先行案内・優先アクセスをご案内します。事前登録は無料で、登録後は正式リリース時に優先的にご案内いたします。
                </p>
                <p className="text-gray-600 leading-relaxed">
                  事前登録時には、利用予定のプラットフォームや希望プランをお選びいただけます。これらの情報は、サービス改善の参考にさせていただきます。正式リリースの準備が整い次第、ご登録いただいたメールアドレスにご連絡いたします。
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
