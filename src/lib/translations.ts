export const translations = {
    ja: {
        header: {
            features: "Features",
            pricing: "Pricing",
            howItWorks: "How It Works",
            login: "Login",
            getStarted: "Get Started",
        },
        hero: {
            headline: {
                part1: "コミュニティ運営の",
                part2: "",
                highlight: "「全体像」を、",
                part3: "ひとつの画面に。",
            },
            subhead: "複数のツールに散らばった\n運営情報を、ひとつの視点でまとめて把握。\n\nNELVOは、日々の状況確認と意思決定を\n一画面で完結させる運営ダッシュボードです。",
            cta: {
                start: "NELVO をはじめる",
                demo: "プランを見る",
            },
        },
        useCases: {
            eyebrow: "WHY DECISIONS SLOW DOWN",
            title: "運営判断が遅れる。\nそれは「能力」ではなく「構造」の問題。",
            items: [
                {
                    title: "判断が、感覚に寄ってしまう",
                    desc: "明確な根拠となる数字があちこちに分散しているため、経験や勘に頼った判断が増えていきます。\n\n判断に再現性がなくなり、成果も安定しません。"
                },
                {
                    title: "情報が、ツールごとに分断される",
                    desc: "SNS・決済・コミュニティなど、運営データがツールごとに散らばっています。\n\n現状を把握するだけで時間がかかり、判断すべきタイミングを逃してしまいます。"
                },
                {
                    title: "共有のたびに、集計し直す",
                    desc: "チームへの共有や報告のたびに、手作業でデータを集め直す必要があります。\n\nこの遅れが積み重なり、意思決定が後ろ倒しになります。"
                },
            ],
        },
        solution: {
            label: "The Solution",
            headline: "分散した運営データが、\nひとつの視点でつながる。",
            desc: "NELVO は、複数の運営チャネルにまたがるデータを整理・可視化し、運営状況を横断的に把握できるダッシュボードです。\nツールを行き来することなく、判断に必要な情報だけを確認できます。",
            compatible: "対応プラットフォームは順次拡張予定。現在ご利用中の運営環境に合わせて柔軟に活用できます。",
            chart: {
                retention: "継続率",
            },
        },
        features: {
            title: "Features",
            items: [
                {
                    title: "データ統合",
                    desc: "複数チャネルに分散した運営データを横断的に整理。",
                },
                {
                    title: "メンバー状況の可視化",
                    desc: "参加・継続・離脱など、コミュニティの状態を把握。",
                },
                {
                    title: "収益・成長の把握",
                    desc: "数字の変化をまとめて確認し、次の一手を判断。",
                },
                {
                    title: "Todayビュー",
                    desc: "今日見るべき変化だけをシンプルに表示。",
                },
            ],
        },
        howItWorks: {
            title: "How It Works",
            steps: [
                {
                    num: "01",
                    title: "運営チャネルを接続",
                    desc: "現在利用しているツール・プラットフォームを連携。",
                },
                {
                    num: "02",
                    title: "データを整理・統合",
                    desc: "NELVO が運営データを自動で整理。",
                },
                {
                    num: "03",
                    title: "全体像を把握",
                    desc: "ひとつの画面で状況を確認し、判断へ。",
                },
            ],
        },
        pricing: {
            title: "Pricing",
            desc: "コミュニティの規模と目的に合わせて、最適なプランをお選びください。",
            note: "※ 現在は事前登録のみ受付中です",
            plans: {
                basic: {
                    name: "Basic",
                    price: "¥2,980",
                    period: " / 月",
                    desc: "コミュニティ運営の基盤を整えたい方向け",
                    cta: "このプランを選択",
                    features: [
                        "対応しているサービスから最大 3 件まで連携",
                        "主要なコミュニティ / 決済プラットフォームに対応",
                        "メンバー情報・決済ステータスを自動同期",
                        "加入日 / 更新日 / 解約日の自動管理",
                        "メンバーステータス一覧（New / Active / Churned）",
                        "Today ダッシュボードで今日の新規・解約・更新を一目で把握",
                        "コミュニティごとの増減状況を確認",
                        "Analytics ではトレンドの概要のみ確認可能",
                    ],
                },
                pro: {
                    name: "Pro",
                    price: "¥6,980",
                    period: " / 月",
                    desc: "データを活用して意思決定を行い、成長速度と収益性を最大化したい方向け",
                    cta: "このプランを選択",
                    badge: "おすすめ",
                    features: [
                        "対応しているサービスから最大 7 件まで連携（大規模コミュニティ向け）",
                        "主要なコミュニティ / 決済プラットフォームに対応",
                        "メンバー・決済・コミュニティ情報を横断して一元管理",
                        "Analytics ダッシュボードをすべて利用可能",
                        "継続率の推移（6ヶ月 / 12ヶ月）を可視化",
                        "売上指標（MRR / 月次売上 / LTV など）のトラッキング",
                        "セグメント別パフォーマンス分析（Returning / VIP / At Risk）",
                        "複数コミュニティの比較グラフ（Members / Retention / 新規・解約）",
                        "参加月 × 継続率のコホート分析（Retention Heatmap）",
                    ],
                },
            },
        },
        faq: {
            title: "よくある質問",
            items: [
                {
                    q: "サブスクリプションは自由に解約できますか？",
                    a: "はい。契約はいつでも自由に変更・キャンセルできます。",
                },
                {
                    q: "どのプラットフォームと連携できますか？",
                    a: "主要なコミュニティ運営サービスや決済サービスに対応しています。詳細は設定画面から確認できます。",
                },
                {
                    q: "データの安全性はどう守られていますか？",
                    a: "通信はすべて暗号化し、外部に公開されない安全な環境で管理しています。\nまた、連携に使用する認証情報は取得せず、必要最小限のデータのみを扱います。",
                },
                {
                    q: "複数サービスをつないでも動作は重くなりませんか？",
                    a: "バックグラウンド処理で自動集計されるため、通常の利用で動作が重くなる心配はありません。",
                },
                {
                    q: "初めてでも使いこなせますか？",
                    a: "設定や操作に関するガイドをご用意しています。必要に応じて簡単なお問い合わせにも対応しています。",
                },
            ],
        },
        security: {
            title: "セキュリティ",
            lead: "NELVOは、お客様のデータを最優先に保護します。",
            items: [
                {
                    title: "通信の暗号化",
                    desc: "すべてのデータ通信はSSL/TLSにより暗号化され、安全に保護されます。"
                },
                {
                    title: "厳格なアクセス制御",
                    desc: "本番データへのアクセス権限は厳密に管理・監視されています。"
                },
                {
                    title: "定期的な監査",
                    desc: "セキュリティ専門家による定期的な脆弱性診断を実施しています。"
                },
                {
                    title: "堅牢なインフラ",
                    desc: "世界的基準のセキュアなインフラストラクチャ上で運用されています。"
                }
            ]
        },
        waitlist: {
            title: "事前予約・ウェイトリスト登録",
            desc: "正式リリース前に、先行案内・優先アクセスをご案内します。",
            form: {
                email: "メールアドレス",
                emailPlaceholder: "your@email.com",
                platforms: "利用予定のプラットフォーム（任意）",
                plan: "希望プラン",
                submit: "予約登録する",
                success: "登録ありがとうございます。先行案内のご連絡をお待ちください。",
            },
            platforms: {
                discord: "Discord",
                patreon: "Patreon",
                stripe: "Stripe",
                skool: "Skool",
                other: "その他",
            }
        },
        footer: {
            copyright: "© 2025 NELVO. All rights reserved.",
            links: {
                product: {
                    title: "Product",
                    items: [
                        { label: "Features", href: "/coming-soon" },
                        { label: "Pricing", href: "#pricing" },
                    ]
                },
                resources: {
                    title: "Resources",
                    items: [
                        { label: "FAQ", href: "/coming-soon" },
                        { label: "Status", href: "/coming-soon" },
                    ]
                },
                legal: {
                    title: "Legal",
                    items: [
                        { label: "Privacy Policy", href: "/coming-soon" },
                        { label: "Terms of Service", href: "/coming-soon" },
                    ]
                }
            }
        }
    },
    en: {
        header: {
            features: "Features",
            pricing: "Pricing",
            howItWorks: "How it Works",
            login: "Login",
            getStarted: "Get Started",
        },
        hero: {
            headline: {
                part1: "Community Ops",
                part2: "",
                highlight: "\"Big Picture\"",
                part3: "in One View.",
            },
            subhead: "Grasp operational info scattered across tools\nfrom a single, unified perspective.\n\nNELVO is the dashboard that completes your\ndaily checks and decisions in one screen.",
            cta: {
                start: "Start NELVO",
                demo: "View Plans",
            },
        },
        useCases: {
            eyebrow: "WHY DECISIONS SLOW DOWN",
            title: "Decisions slow down.\nIt's a structural problem, not ability.",
            items: [
                {
                    title: "Decisions rely on intuition",
                    desc: "Because evidence numbers are scattered everywhere, reliance on experience and gut feeling increases.\n\nDecision-making loses reproducibility, and results become unstable."
                },
                {
                    title: "Information is fragmented",
                    desc: "Operational data is scattered across SNS, payments, and community tools.\n\nJust grasping the status quo takes time, causing you to miss critical decision timing."
                },
                {
                    title: "Re-aggregating every time",
                    desc: "Every time you share or report to the team, you have to manually re-collect data.\n\nThis delay accumulates, pushing decision-making further and further back."
                },
            ],
        },
        // problem section removed
        solution: {
            label: "The Solution",
            headline: "Scattered data,\nConnected in one view.",
            desc: "NELVO organizes and visualizes data across multiple channels, giving you a horizontal view of your operations.\nCheck only what you need for decisions without switching tools.",
            compatible: "Supported platforms will expand sequentially. Use flexibly with your current environment.",
            chart: {
                retention: "Retention Rate",
            },
        },
        features: {
            title: "Features",
            items: [
                {
                    title: "Data Integration",
                    desc: "Horizontally organize operational data scattered across multiple channels.",
                },
                {
                    title: "Member Visualization",
                    desc: "Grasp community health like join, retention, and churn status.",
                },
                {
                    title: "Revenue & Growth",
                    desc: "Check numerical changes together to decide the next move.",
                },
                {
                    title: "Today View",
                    desc: "Simply display only the changes you need to see today.",
                },
            ],
        },
        howItWorks: {
            title: "How it Works",
            steps: [
                {
                    num: "01",
                    title: "Connect Channels",
                    desc: "Link your currently used tools and platforms.",
                },
                {
                    num: "02",
                    title: "Organize & Integrate",
                    desc: "NELVO automatically organizes operational data.",
                },
                {
                    num: "03",
                    title: "Grasp the Big Picture",
                    desc: "Check the status in one view and move to decision.",
                },
            ],
        },
        pricing: {
            title: "Pricing",
            desc: "Choose the optimal plan for your community's size and goals.",
            note: "*Currently accepting waitlist registrations only.",
            plans: {
                basic: {
                    name: "Basic",
                    price: "$15",
                    period: " / month",
                    desc: "For creators who want to establish the foundation of community operations.",
                    cta: "Select this plan",
                    features: [
                        "Connect up to 3 supported services",
                        "Supports major community / payment platforms",
                        "Auto-sync member info & payment status",
                        "Auto-manage Join / Renewal / Cancellation dates",
                        "Member Status List (New / Active / Churned)",
                        "Today Dashboard: Check today's New / Churned / Renewals at a glance",
                        "Check growth/decline status per community",
                        "Analytics shows trend overview only",
                    ],
                },
                pro: {
                    name: "Pro",
                    price: "$49",
                    period: " / month",
                    desc: "For operators who want to maximize growth speed and profitability through data-driven decisions.",
                    cta: "Select this plan",
                    badge: "Recommended",
                    features: [
                        "Connect up to 7 supported services (For large communities)",
                        "Supports major community / payment platforms",
                        "Centralized management of member, payment, and community data",
                        "Full access to Analytics Dashboard",
                        "Visualize Retention Rate Trends (6 months / 12 months)",
                        "Track Revenue Metrics (MRR / Monthly Sales / LTV, etc.)",
                        "Segment Performance Analysis (Returning / VIP / At Risk)",
                        "Multi-community comparison graphs (Members / Retention / New vs Churned)",
                        "Cohort Analysis (Join Month × Retention Rate Heatmap)",
                    ],
                },
            },
        },

        faq: {
            title: "FAQ",
            items: [
                {
                    q: "Can I cancel anytime?",
                    a: "Yes. You can change or cancel your subscription freely at any time.",
                },
                {
                    q: "What platforms are supported?",
                    a: "We support major community management and payment services. Details can be checked from the settings screen.",
                },
                {
                    q: "Is my data secure?",
                    a: "All communication is encrypted and managed in a secure environment not exposed to the outside.\nAlso, we do not acquire authentication credentials used for integration, and handle only the minimum necessary data.",
                },
                {
                    q: "Will it slow down if I aggregate multiple data sources?",
                    a: "Automatic aggregation is processed in the background, so there is no concern about performance slowing down during normal use.",
                },
                {
                    q: "What if I don't know how to use it?",
                    a: "We provide guides regarding setup and operation. We also accept simple inquiries if needed.",
                },
            ],
        },
        security: {
            title: "Security",
            lead: "Data protection is our top priority.",
            items: [
                {
                    title: "End-to-End Encryption",
                    desc: "All data communication is encrypted via SSL/TLS to ensure safety."
                },
                {
                    title: "Strict Access Control",
                    desc: "Access to production data is strictly limited and monitored."
                },
                {
                    title: "Regular Audits",
                    desc: "We conduct regular security reviews and vulnerability assessments."
                },
                {
                    title: "Secure Infrastructure",
                    desc: "Built on world-class secure infrastructure with 24/7 monitoring."
                }
            ]
        },
        waitlist: {
            title: "Join the Waitlist",
            desc: "Get early access and priority updates before the official launch.",
            form: {
                email: "Email Address",
                emailPlaceholder: "your@email.com",
                platforms: "Community Platforms (Optional)",
                plan: "Plan",
                submit: "Join Waitlist",
                success: "Thanks for joining the waitlist.",
            },
            platforms: {
                discord: "Discord",
                patreon: "Patreon",
                stripe: "Stripe",
                skool: "Skool",
                other: "Other",
            }
        },
        footer: {
            copyright: "© 2025 NELVO. All rights reserved.",
            links: {
                product: {
                    title: "Product",
                    items: [
                        { label: "Features", href: "/coming-soon" },
                        { label: "Pricing", href: "#pricing" },
                    ]
                },
                resources: {
                    title: "Resources",
                    items: [
                        { label: "FAQ", href: "/coming-soon" },
                        { label: "Status", href: "/coming-soon" },
                    ]
                },
                legal: {
                    title: "Legal",
                    items: [
                        { label: "Privacy Policy", href: "/coming-soon" },
                        { label: "Terms of Service", href: "/coming-soon" },
                    ]
                }
            }
        }
    },
};
