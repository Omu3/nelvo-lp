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
                    q: "NELVOとは何ですか？",
                    a: "NELVOは、複数のコミュニティ運営ツールや決済サービスに分散している運営データを統合し、ひとつの画面で全体像を把握できるダッシュボードです。Discord、Stripe、YouTube、Instagramなどのデータを自動的に統合し、メンバー状況、収益、アクティビティを一覧で確認できます。",
                },
                {
                    q: "どのサービスと連携できますか？",
                    a: "現在、Discord、Stripe、YouTube、Instagramと連携可能です。各プラットフォームのAPIを使用して安全に連携し、必要最小限のデータのみを取得します。対応プラットフォームは順次拡張予定です。",
                },
                {
                    q: "データの同期はどのくらいの頻度で行われますか？",
                    a: "データはリアルタイムで同期されます。各プラットフォームのAPIやWebhookを使用して、新規加入、解約、更新などの情報を自動的に取得し、ダッシュボード上で確認できます。",
                },
                {
                    q: "料金プランや課金方法について教えてください",
                    a: "NELVOは月額制の料金プランを提供しています。Basicプラン（最大3サービス連携）とProプラン（最大7サービス連携）の2つからお選びいただけます。プランはいつでも変更・キャンセルが可能で、追加の手数料はかかりません。",
                },
                {
                    q: "セキュリティやデータの取り扱いについて",
                    a: "すべての通信は暗号化され、安全な環境で管理されています。連携に使用する認証情報は取得せず、必要最小限のデータのみを扱います。OAuth認証を使用して安全に連携し、各プラットフォームの権限設定に従って適切にデータを保護します。",
                },
                {
                    q: "プランを解約する方法を教えてください",
                    a: "プランはいつでも自由に解約できます。設定画面から簡単に解約手続きが可能です。解約後も当月の終了日までは利用可能で、データは安全に保管されます。再契約時には以前のデータを引き続き利用できます。",
                },
                {
                    q: "問い合わせ先はありますか？",
                    a: "ご不明な点やご質問がございましたら、support@nelvo.coまでお気軽にお問い合わせください。可能な範囲で順次対応いたします。",
                },
            ],
        },
        security: {
            title: "セキュリティ",
            lead: "NELVOは、お客様のデータを優先的に保護します。",
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
                    desc: "定期的なセキュリティレビューと脆弱性診断を行います。"
                },
                {
                    title: "堅牢なインフラ",
                    desc: "セキュアなインフラストラクチャ上で運用されています。"
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
                        { label: "Features", href: "/features" },
                        { label: "Pricing", href: "/pricing" },
                        { label: "Use Cases", href: "/use-cases" },
                        { label: "Integrations", href: "/integrations" },
                    ]
                },
                resources: {
                    title: "Resources",
                    items: [
                        { label: "FAQ", href: "/faq" },
                        { label: "Status", href: "/status" },
                    ]
                },
                legal: {
                    title: "Legal",
                    items: [
                        { label: "Privacy Policy", href: "/privacy-policy" },
                        { label: "Terms of Service", href: "/terms" },
                    ]
                },
                contact: {
                    title: "Contact",
                    email: "support@nelvo.co",
                }
            }
        },
        pages: {
            features: {
                title: "Features",
                description: "NELVOは、複数のツールに散らばったコミュニティ運営データを統合し、ひとつの画面で全体像を把握できるダッシュボードです。日々の運営判断に必要な情報を効率的に確認でき、データに基づいた意思決定を迅速に行えます。各機能は、実際の運営現場で発生する課題を解決するために設計されており、直感的な操作で誰でも簡単に使いこなすことができます。",
                mainFeatures: [
                    {
                        title: "データ統合",
                        description: "複数チャネルに分散した運営データを横断的に整理。",
                        details: [
                            "Discord、Stripe、YouTube、Instagramなど、複数のプラットフォームに分散している運営データを自動的に統合",
                            "各ツールのAPIと連携し、リアルタイムでデータを同期",
                            "異なるプラットフォーム間のデータを横断的に確認",
                            "認証情報は安全に管理され、必要最小限のデータのみを取得",
                        ],
                    },
                    {
                        title: "メンバー状況の可視化",
                        description: "参加・継続・離脱など、コミュニティの状態を把握。",
                        details: [
                            "新規加入者、アクティブメンバー、解約者を自動的に分類",
                            "加入日、更新日、解約日も自動で記録",
                            "コミュニティごとの増減状況をグラフで確認",
                            "どの時期に成長したか、どの時期に離脱が増えたかを視覚的に把握",
                        ],
                    },
                    {
                        title: "収益・成長の把握",
                        description: "数字の変化をまとめて確認し、次の一手を判断。",
                        details: [
                            "MRR（月次経常収益）、月次売上、LTV（顧客生涯価値）などの重要な収益指標を自動計算",
                            "数値の変化を時系列で追跡",
                            "継続率の推移も6ヶ月、12ヶ月単位で可視化",
                            "セグメント別のパフォーマンス分析（Returning、VIP、At Riskなど）",
                        ],
                    },
                    {
                        title: "Todayビュー",
                        description: "今日見るべき変化だけをシンプルに表示。",
                        details: [
                            "新規加入者、解約者、更新者の情報を一目で確認",
                            "日々の運営業務を効率化",
                            "不要な情報に惑わされることなく、判断に必要な情報だけに集中",
                            "シンプルなインターフェースで、初めて利用する方でも迷うことなく操作",
                        ],
                    },
                ],
                analytics: {
                    title: "Analytics ダッシュボード",
                    description: "詳細な分析機能を提供するAnalyticsダッシュボードでは、継続率の推移、売上指標のトラッキング、セグメント別パフォーマンス分析など、高度な分析が可能です。複数コミュニティの比較グラフや、参加月×継続率のコホート分析（Retention Heatmap）も利用できます。",
                    description2: "これらの分析機能により、データに基づいた運営判断が可能になり、感覚や経験に頼らない再現性の高い意思決定が実現します。成長速度と収益性を最大化するための洞察を得られます。",
                    highlights: [
                        "複数コミュニティの比較グラフ",
                        "参加月×継続率のコホート分析（Retention Heatmap）",
                        "データに基づいた運営判断",
                        "成長速度と収益性を最大化するための洞察",
                    ],
                },
                footerCta: "料金プランについては",
                footerCtaLink: "こちら",
                footerCtaSuffix: "をご確認ください。",
            },
            integrations: {
                title: "Integrations",
                description: "NELVOは、主要なコミュニティ運営サービスや決済サービスと連携し、複数のプラットフォームに分散している運営データを統合します。各プラットフォームのAPIと安全に連携し、リアルタイムでデータを同期するため、手動での集計作業は不要です。対応プラットフォームは順次拡張予定で、現在利用している運営環境に合わせて柔軟に活用できます。",
                platforms: [
                    {
                        name: "Discord",
                        description: "Discordは、多くのコミュニティで使用されているコミュニケーションツールです。NELVOとDiscordを連携することで、サーバーメンバーの情報、参加日、アクティビティ状況などを自動的に取得し、ダッシュボード上で確認できます。",
                        details: [
                            "DiscordのOAuth認証を使用して安全に連携",
                            "必要最小限の権限のみを要求",
                            "メンバーの個人情報は適切に保護",
                            "連携の設定は簡単で、数分で完了",
                        ],
                    },
                    {
                        name: "Stripe",
                        description: "Stripeは、オンライン決済処理を提供するサービスです。NELVOとStripeを連携することで、決済情報、顧客データ、サブスクリプション状況などを自動的に取得できます。MRR（月次経常収益）やLTV（顧客生涯価値）などの重要な指標も自動計算されます。",
                        details: [
                            "StripeのWebhookを使用してリアルタイムで決済イベントを取得",
                            "顧客の支払い状況や解約・更新のタイミングも自動で記録",
                            "収益管理が効率化",
                            "MRR、LTVなどの重要な指標を自動計算",
                        ],
                    },
                    {
                        name: "YouTube",
                        description: "YouTubeは、動画コンテンツを配信・管理するプラットフォームです。NELVOとYouTubeを連携することで、チャンネル登録者数、動画の視聴回数、エンゲージメント率、収益データなどを自動的に取得できます。コンテンツのパフォーマンスを他のプラットフォームのデータと統合して分析できます。",
                        details: [
                            "YouTube Data APIを通じてリアルタイムでデータを同期",
                            "チャンネル登録者数の推移や動画のパフォーマンスを追跡",
                            "視聴回数、エンゲージメント率などの指標を自動取得",
                            "収益データと他のプラットフォームのデータを統合して分析",
                        ],
                    },
                    {
                        name: "Instagram",
                        description: "Instagramは、写真・動画を共有するSNSプラットフォームです。NELVOとInstagramを連携することで、フォロワー数、投稿のエンゲージメント率、ストーリーズの視聴数、リーチ数などのデータを自動的に取得できます。Instagramのパフォーマンスを他のプラットフォームのデータと統合して確認できます。",
                        details: [
                            "Instagram Graph APIを通じてリアルタイムでデータを同期",
                            "フォロワー数の推移や投稿のエンゲージメント率を追跡",
                            "ストーリーズの視聴数やリーチ数などの指標を自動取得",
                            "他のプラットフォームのデータと統合して全体の運営状況を把握",
                        ],
                    },
                ],
                security: {
                    title: "連携の安全性",
                    description: "NELVOは、各プラットフォームとの連携において、最高レベルのセキュリティを確保しています。OAuth認証を使用し、認証情報は安全に管理されます。連携に使用する認証情報は取得せず、必要最小限のデータのみを扱います。",
                    details: [
                        "すべてのデータ通信はSSL/TLSにより暗号化",
                        "外部に公開されない安全な環境で管理",
                        "定期的なセキュリティ監査を実施",
                        "お客様のデータを最優先に保護",
                    ],
                },
                future: {
                    title: "今後の拡張予定",
                    description: "対応プラットフォームは順次拡張予定です。現在利用している運営環境に合わせて、柔軟に活用できます。新たなプラットフォームの追加要望も受け付けており、多くのユーザーから要望の多いプラットフォームを優先的に追加していきます。",
                    details: [
                        "連携の設定は直感的なインターフェースで簡単に実行",
                        "各プラットフォームの接続・切断も数クリックで完了",
                        "運営環境の変化に合わせて柔軟に連携を変更",
                        "ユーザー要望に基づいて優先的にプラットフォームを追加",
                    ],
                },
                footerCta: "料金プランについては",
                footerCtaLink: "こちら",
                footerCtaSuffix: "をご確認ください。",
            },
            useCases: {
                title: "Use Cases",
                description: "コミュニティ運営において、運営判断が遅れる原因は「能力」ではなく「構造」の問題であることが多いです。NELVOは、この構造的な課題を解決し、データに基づいた迅速な意思決定を実現します。ここでは、NELVOが解決する主な課題と、その活用事例をご紹介します。",
                cases: [
                    {
                        title: "判断が感覚に寄ってしまう課題の解決",
                        description: "明確な根拠となる数字があちこちに分散しているため、経験や勘に頼った判断が増えていきます。これにより、判断に再現性がなくなり、成果も安定しません。NELVOを使用することで、複数のツールに散らばった運営データを統合し、明確な根拠に基づいた判断が可能になります。",
                        details: [
                            "メンバー数の増減や収益の変化を時系列で確認",
                            "感覚ではなくデータに基づいて判断",
                            "継続率の推移やセグメント別のパフォーマンス分析",
                            "どの施策が効果的だったかを定量的に評価",
                            "再現性の高い運営が実現",
                        ],
                    },
                    {
                        title: "情報がツールごとに分断される課題の解決",
                        description: "SNS・決済・コミュニティなど、運営データがツールごとに散らばっているため、現状を把握するだけで時間がかかり、判断すべきタイミングを逃してしまいます。NELVOは、これらのデータを自動的に統合し、ひとつの画面で全体像を把握できます。",
                        details: [
                            "Discordのメンバー情報、Stripeの決済データ、YouTubeのチャンネルデータ、Instagramのエンゲージメントデータなどを横断的に確認",
                            "ツールを行き来することなく、判断に必要な情報だけを効率的に確認",
                            "意思決定のスピードが大幅に向上",
                            "全体像をひとつの画面で把握",
                        ],
                    },
                    {
                        title: "共有のたびに集計し直す課題の解決",
                        description: "チームへの共有や報告のたびに、手作業でデータを集め直す必要があります。この遅れが積み重なり、意思決定が後ろ倒しになります。NELVOでは、データが自動的に集計されるため、共有や報告の準備時間を大幅に短縮できます。",
                        details: [
                            "ダッシュボード上で最新の運営状況を確認",
                            "必要な情報をすぐに共有",
                            "グラフや数値は自動で更新",
                            "手動での集計作業は不要",
                            "より重要な意思決定や戦略立案に集中",
                        ],
                    },
                    {
                        title: "日々の運営チェックの効率化",
                        description: "Todayビュー機能により、今日確認すべき重要な変化だけをシンプルに表示します。新規加入者、解約者、更新者の情報を一目で確認でき、日々の運営業務を効率化します。不要な情報に惑わされることなく、判断に必要な情報だけに集中できます。",
                        details: [
                            "新規加入者、解約者、更新者の情報を一目で確認",
                            "日々の運営業務を効率化",
                            "毎日の運営チェック時間を大幅に短縮",
                            "より重要な意思決定や戦略立案に時間を割ける",
                            "シンプルなインターフェースで初めて利用する方でも迷うことなく操作",
                        ],
                    },
                    {
                        title: "データドリブンな運営の実現",
                        description: "NELVOのAnalytics機能により、継続率の推移、売上指標のトラッキング、セグメント別パフォーマンス分析など、高度な分析が可能です。これらの分析機能により、データに基づいた運営判断が可能になり、感覚や経験に頼らない再現性の高い意思決定が実現します。",
                        details: [
                            "複数コミュニティの比較グラフ",
                            "参加月×継続率のコホート分析（Retention Heatmap）",
                            "データに基づいた運営判断",
                            "成長速度と収益性を最大化するための洞察",
                            "コミュニティの成長を加速",
                        ],
                    },
                    {
                        title: "チームでの情報共有の改善",
                        description: "NELVOのダッシュボードは、チーム全体で共有できるため、運営状況を全員が同じ視点で確認できます。これにより、情報の非対称性が解消され、チーム全体で一貫した判断が可能になります。",
                        details: [
                            "運営状況を全員が同じ視点で確認",
                            "情報の非対称性が解消",
                            "チーム全体で一貫した判断が可能",
                            "報告や共有の準備時間を短縮",
                            "データに基づいた議論が可能",
                            "チーム全体の生産性向上",
                        ],
                    },
                ],
                footerCta: "料金プランについては",
                footerCtaLink: "こちら",
                footerCtaSuffix: "をご確認ください。",
            },
            pricing: {
                title: "Pricing",
                description: "NELVOは、コミュニティの規模と運営目的に合わせて、2つの料金プランをご用意しています。Basicプランは、運営の基盤を整えたい方向けのエントリープランです。Proプランは、データを活用して意思決定を行い、成長速度と収益性を最大化したい方向けのプランです。どちらのプランも、いつでも自由に変更・キャンセルが可能で、コミュニティの成長に合わせて柔軟にプランを変更できます。",
                plans: {
                    basic: {
                        title: "Basicプラン",
                        description: "Basicプランは、コミュニティ運営の基盤を整えたい方向けのプランです。対応しているサービスから最大3件まで連携でき、主要なコミュニティ・決済プラットフォームに対応しています。メンバー情報や決済ステータスは自動同期され、加入日・更新日・解約日も自動管理されます。",
                        details: [
                            "Todayダッシュボードで今日の新規・解約・更新を一目で把握でき、コミュニティごとの増減状況も確認できます。",
                            "Analyticsではトレンドの概要のみ確認可能で、基本的な運営状況の把握に最適です。",
                            "小規模なコミュニティや、まずは試してみたいという方におすすめのプランです。",
                        ],
                    },
                    pro: {
                        title: "Proプラン",
                        badge: "おすすめ",
                        description: "Proプランは、データを活用して意思決定を行い、成長速度と収益性を最大化したい方向けのプランです。対応しているサービスから最大7件まで連携でき、大規模コミュニティにも対応しています。メンバー・決済・コミュニティ情報を横断して一元管理でき、Analyticsダッシュボードをすべて利用できます。",
                        details: [
                            "継続率の推移（6ヶ月・12ヶ月）を可視化し、売上指標（MRR、月次売上、LTVなど）のトラッキングが可能です。",
                            "セグメント別パフォーマンス分析や、複数コミュニティの比較グラフ、参加月×継続率のコホート分析（Retention Heatmap）など、高度な分析機能を利用できます。",
                            "データドリブンな運営を実現したい方におすすめのプランです。",
                        ],
                    },
                },
                comparison: {
                    title: "プラン比較",
                    features: [
                        { name: "連携可能なサービス数", basic: "最大3件", pro: "最大7件" },
                        { name: "メンバー情報・決済ステータス自動同期", basic: true, pro: true },
                        { name: "Todayダッシュボード", basic: true, pro: true },
                        { name: "Analytics ダッシュボード（概要）", basic: true, pro: true },
                        { name: "Analytics ダッシュボード（全機能）", basic: false, pro: true },
                        { name: "継続率の推移（6ヶ月・12ヶ月）", basic: false, pro: true },
                        { name: "売上指標トラッキング（MRR/LTV等）", basic: false, pro: true },
                        { name: "セグメント別パフォーマンス分析", basic: false, pro: true },
                        { name: "コホート分析（Retention Heatmap）", basic: false, pro: true },
                    ],
                },
                otherSections: [
                    {
                        title: "プラン変更について",
                        description: "プランはいつでも自由に変更・キャンセルが可能です。コミュニティの成長に合わせて、BasicプランからProプランへのアップグレードも、その逆のダウングレードも、月単位で柔軟に対応できます。変更は即座に反映され、追加の手数料はかかりません。",
                        details: [
                            "解約も自由に行え、解約後も当月の終了日までは利用可能です。",
                            "データは安全に保管され、再契約時には以前のデータを引き続き利用できます。",
                            "コミュニティ運営の状況に応じて、最適なプランを選択してください。",
                        ],
                    },
                    {
                        title: "対応プラットフォーム",
                        description: "NELVOは、主要なコミュニティ運営サービスや決済サービスに対応しています。Discord、Stripe、YouTube、Instagramなど、多くのプラットフォームと連携可能です。対応プラットフォームは順次拡張予定で、現在利用している運営環境に合わせて柔軟に活用できます。",
                        details: [
                            "各プラットフォームとの連携は、安全な認証方式を使用して行われ、必要最小限のデータのみを取得します。",
                            "連携の詳細は設定画面から確認でき、簡単な操作で接続・切断が可能です。",
                        ],
                    },
                    {
                        title: "事前登録について",
                        description: "現在、NELVOは事前登録のみ受付中です。正式リリース前に、先行案内・優先アクセスをご案内します。事前登録は無料で、登録後は正式リリース時に優先的にご案内いたします。",
                        details: [
                            "事前登録時には、利用予定のプラットフォームや希望プランをお選びいただけます。",
                            "これらの情報は、サービス改善の参考にさせていただきます。",
                            "正式リリースの準備が整い次第、ご登録いただいたメールアドレスにご連絡いたします。",
                        ],
                    },
                ],
                footerCta: "事前登録は無料です。正式リリース時に優先的にご案内いたします。",
                footerCtaButton: "事前登録する",
            },
            faq: {
                title: "よくある質問",
                description: "NELVOに関するよくある質問と回答をご紹介します。サービス内容、連携方法、料金プラン、セキュリティなど、気になる点をまとめています。",
                items: [
                    {
                        q: "NELVOとは何ですか？",
                        a: "NELVOは、複数のコミュニティ運営ツールや決済サービスに分散している運営データを統合し、ひとつの画面で全体像を把握できるダッシュボードです。Discord、Stripe、YouTube、Instagramなどのデータを自動的に統合し、メンバー状況、収益、アクティビティを一覧で確認できます。"
                    },
                    {
                        q: "どのサービスと連携できますか？",
                        a: "現在、Discord、Stripe、YouTube、Instagramと連携可能です。各プラットフォームのAPIを使用して安全に連携し、必要最小限のデータのみを取得します。対応プラットフォームは順次拡張予定です。"
                    },
                    {
                        q: "データの同期はどのくらいの頻度で行われますか？",
                        a: "データはリアルタイムで同期されます。各プラットフォームのAPIやWebhookを使用して、新規加入、解約、更新などの情報を自動的に取得し、ダッシュボード上で確認できます。"
                    },
                    {
                        q: "料金プランや課金方法について教えてください",
                        a: "NELVOは月額制の料金プランを提供しています。Basicプラン（最大3サービス連携）とProプラン（最大7サービス連携）の2つからお選びいただけます。プランはいつでも変更・キャンセルが可能で、追加の手数料はかかりません。"
                    },
                    {
                        q: "セキュリティやデータの取り扱いについて",
                        a: "すべての通信は暗号化され、安全な環境で管理されています。連携に使用する認証情報は取得せず、必要最小限のデータのみを扱います。OAuth認証を使用して安全に連携し、各プラットフォームの権限設定に従って適切にデータを保護します。"
                    },
                    {
                        q: "プランを解約する方法を教えてください",
                        a: "プランはいつでも自由に解約できます。設定画面から簡単に解約手続きが可能です。解約後も当月の終了日までは利用可能で、データは安全に保管されます。再契約時には以前のデータを引き続き利用できます。"
                    },
                    {
                        q: "問い合わせ先はありますか？",
                        a: "ご不明な点やご質問がございましたら、support@nelvo.coまでお気軽にお問い合わせください。可能な範囲で順次対応いたします。"
                    },
                ],
                contactLabel: "お問い合わせ",
                contactEmail: "support@nelvo.co",
            },
            status: {
                title: "サービスステータス",
                description: "NELVOのサービス稼働状況をご確認いただけます。",
                statusTypes: {
                    operational: "正常稼働中",
                    degraded: "一部で障害が発生しています",
                    partial: "一部で障害が発生しています",
                    major: "広範囲で障害が発生しています",
                    maintenance: "メンテナンス中",
                },
                components: {
                    website: "ウェブサイト",
                    auth: "認証",
                    billing: "決済",
                    integrations: "連携",
                    dashboard: "ダッシュボード",
                },
                incidentHistory: {
                    title: "インシデント履歴",
                    noIncidents: "報告されたインシデントはありません",
                    resolved: "解決済み",
                    investigating: "調査中",
                    monitoring: "監視中",
                },
                notice: "本ページは運営による手動更新です。状況により反映に時間がかかる場合があります。",
                lastUpdated: "最終更新（手動）",
                contactNote: "不具合のご報告",
                contactText: "support@nelvo.co（確認でき次第、順次対応します）",
                contactEmail: "support@nelvo.co",
                futureNote: "将来的に status.nelvo.co などの専用ページに移行する可能性があります。",
            },
            privacy: {
                title: "プライバシーポリシー",
                description: "NELVOにおける個人情報等の取扱いを定めます。",
                lastUpdated: "最終更新日：2026-01-10",
                sections: [
                    {
                        title: "1. はじめに",
                        content: "本サービスはNELVO運営者（以下「運営者」）が提供します。\n\n本ポリシーは、NELVO（本サービス）における個人情報等の取扱いを定めます。"
                    },
                    {
                        title: "2. 取得する情報",
                        content: "本サービスは、提供に必要な範囲で以下の情報を取得する場合があります。\n- アカウント情報：メールアドレス、所属/組織名（任意入力）\n- 連携情報：連携サービスのアカウント識別子、アクセストークン等（暗号化して保存）\n- 利用状況データ：アクセスログ、閲覧/操作履歴、エラー情報、端末・ブラウザ情報\n- 決済関連：決済事業者により処理される請求情報（運営者がカード情報を直接保持することはありません）\n- Cookie等：言語設定、セッション維持"
                    },
                    {
                        title: "3. 利用目的",
                        content: "取得した情報は、以下の目的で利用します。\n- 本サービスの提供、本人確認、認証、アカウント管理\n- 連携サービスとの接続・同期等、ユーザーが指示した機能の提供\n- 料金請求、決済、問い合わせ対応、重要なお知らせの通知\n- 障害対応、セキュリティ確保、不正利用防止\n- 品質改善、新機能開発、利用状況分析\n- 法令遵守・紛争対応"
                    },
                    {
                        title: "4. 第三者提供・委託",
                        content: "運営者は、法令に基づく場合等を除き、本人の同意なく個人情報を第三者に提供しないよう努めます。\n\nただし、業務委託（ホスティング、決済、メール配信等）に伴い、委託先に必要最小限の範囲で取り扱わせることがあります。\n\n連携サービスは、ユーザーの指示により接続されるものであり、その先での取扱いは各連携サービスのポリシーに従います。"
                    },
                    {
                        title: "5. 安全管理措置",
                        content: "運営者は、個人情報への不正アクセス、漏えい等を防止するため、以下の措置を講じるよう努めます。\n\n- 組織的安全管理措置：個人情報取扱規程の策定、責任者の明確化\n- 人的安全管理措置：従業者への教育、機密保持契約の締結\n- 物理的安全管理措置：施設への入退室管理、機器・媒体の管理\n- 技術的安全管理措置：アクセス制御、暗号化通信、不正アクセスの検知・防止"
                    },
                    {
                        title: "6. 保有個人データの開示等の請求",
                        content: "運営者は、法令に基づき、保有個人データの開示・訂正・利用停止等のご請求に、合理的な範囲で対応します。\n\nご希望の方は support@nelvo.co までご連絡ください。内容確認のため、必要に応じて本人確認をお願いする場合があります。\n\nなお、法令上または運営者の権利・安全の確保のため、対応できない場合があります。"
                    },
                    {
                        title: "7. お問い合わせ窓口",
                        content: "個人情報の取扱いに関するお問い合わせ：support@nelvo.co"
                    },
                    {
                        title: "8. 改定",
                        content: "本ポリシーは必要に応じて改定します。改定後は本サービス上で告知します。"
                    },
                ],
                contactLabel: "お問い合わせ",
                contactEmail: "support@nelvo.co",
            },
            terms: {
                title: "利用規約",
                description: "NELVOのサービス利用規約をご確認いただけます。",
                lastUpdated: "最終更新日：2026-01-10",
                sections: [
                    {
                        title: "第1条（適用）",
                        content: "本サービスはNELVO運営者（以下「運営者」）が提供します。\n\n本規約は、NELVO（以下「本サービス」）の利用条件を定めるものであり、ユーザーは本規約に同意の上、本サービスを利用します。"
                    },
                    {
                        title: "第2条（定義）",
                        content: "本規約において、以下の用語は次の意味で使用します。\n「ユーザー」：本サービスを利用する個人または法人\n「アカウント」：ユーザー登録により作成される本サービス利用権限\n「連携サービス」：Discord、Stripe等、ユーザーの指示により本サービスと接続される外部サービス\n「ユーザーデータ」：ユーザーが本サービスに入力・送信・連携等により提供する情報（連携データを含む）"
                    },
                    {
                        title: "第3条（アカウント登録）",
                        content: "1. ユーザーは、真実かつ正確な情報で登録するものとします。\n2. アカウントの管理責任はユーザーにあり、第三者による不正利用があっても運営者は責任を負いません（運営者の故意または重過失がある場合を除く）。\n3. 運営者は、登録申請が不適切と判断した場合、登録を拒否または取消すことがあります。"
                    },
                    {
                        title: "第4条（料金・支払い）",
                        content: "1. 有料プラン、料金、課金周期、支払い方法は本サービスの料金ページまたは申込画面に定めます。\n2. 決済処理は決済事業者（例：Stripe）を通じて行われる場合があります。\n3. 料金の返金可否、日割り等は、申込画面に別途定める場合を除き、原則として行いません。"
                    },
                    {
                        title: "第5条（連携サービス）",
                        content: "1. ユーザーが連携サービスと接続する場合、当該連携に必要な権限付与はユーザーの責任で行います。\n2. 連携サービスの仕様変更・停止等により、本サービスの一部が利用できない場合があります。"
                    },
                    {
                        title: "第6条（禁止事項）",
                        content: "ユーザーは以下を行ってはなりません。\n- 法令または公序良俗に違反する行為\n- 不正アクセス、脆弱性探索、過度な負荷を与える行為\n- 第三者の権利侵害（著作権、商標権、プライバシー等）\n- 虚偽情報の登録、なりすまし\n- 本サービスの再販売、リバースエンジニアリング\n- 反社会的勢力への利益供与\n- その他運営者が不適切と判断する行為"
                    },
                    {
                        title: "第7条（知的財産権）",
                        content: "本サービスに関する著作権等の知的財産権は運営者または正当な権利者に帰属します。"
                    },
                    {
                        title: "第8条（ユーザーデータの取扱い）",
                        content: "1. 運営者は、本サービス提供・改善・セキュリティ確保の範囲でユーザーデータを取り扱います。\n2. 運営者は、法令に基づく場合またはユーザーの同意がある場合を除き、ユーザーデータを第三者に提供しないよう努めます。ただし、業務委託先への取扱いはこの限りではありません。\n詳細はプライバシーポリシーをご確認ください。"
                    },
                    {
                        title: "第9条（サービスの変更・停止）",
                        content: "運営者は、事前通知の上、本サービスの内容を変更、追加、停止、終了することができます。緊急時は事後通知となる場合があります。"
                    },
                    {
                        title: "第10条（免責）",
                        content: "1. 運営者は、本サービスが特定目的に適合すること、正確性・完全性・有用性を保証しません。\n2. 連携サービスの障害・仕様変更に起因する損害について、運営者は責任を負いません（運営者の故意または重過失がある場合を除く）。"
                    },
                    {
                        title: "第11条（責任制限）",
                        content: "運営者の賠償責任は、運営者の故意または重過失を除き、直接かつ通常の損害に限られ、かつ直近3ヶ月にユーザーが運営者へ支払った利用料金総額を上限とします（無料で利用している場合は1万円を上限とします）。"
                    },
                    {
                        title: "第12条（利用停止・解除）",
                        content: "運営者は、ユーザーが本規約に違反した場合、事前通知なくアカウント停止・削除等の措置をとることができます。"
                    },
                    {
                        title: "第13条（規約の変更）",
                        content: "運営者は、必要に応じて本規約を変更できます。変更後の内容は本サービス上で告知し、告知後にユーザーが利用を継続した場合、変更に同意したものとみなします。"
                    },
                    {
                        title: "第14条（準拠法・合意管轄）",
                        content: "本規約は日本法に準拠し、本サービスに関して紛争が生じた場合、東京地方裁判所を第一審の専属的合意管轄裁判所とします。"
                    },
                    {
                        title: "第15条（お問い合わせ）",
                        content: "本規約に関するお問い合わせ：support@nelvo.co"
                    },
                ],
                contactLabel: "お問い合わせ",
                contactEmail: "support@nelvo.co",
            },
        },
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
                    q: "What is NELVO?",
                    a: "NELVO is a dashboard that integrates operational data scattered across multiple community management tools and payment services, allowing you to grasp the big picture on a single screen. It automatically integrates data from Discord, Stripe, YouTube, Instagram, and more, enabling you to check member status, revenue, and activity at a glance.",
                },
                {
                    q: "Which services can I integrate with?",
                    a: "Currently, you can integrate with Discord, Stripe, YouTube, and Instagram. NELVO securely connects using each platform's API and retrieves only the minimum necessary data. Supported platforms will expand sequentially.",
                },
                {
                    q: "How often is data synchronized?",
                    a: "Data is synchronized in real-time. Using each platform's API and webhooks, NELVO automatically retrieves information about new members, cancellations, renewals, and more, which you can check on the dashboard.",
                },
                {
                    q: "Tell me about pricing plans and billing",
                    a: "NELVO offers monthly pricing plans. You can choose from two plans: Basic (up to 3 service integrations) and Pro (up to 7 service integrations). Plans can be changed or canceled at any time with no additional fees.",
                },
                {
                    q: "How is security and data handling?",
                    a: "All communication is encrypted and managed in a secure environment. NELVO does not acquire authentication credentials used for integration and handles only the minimum necessary data. NELVO securely connects using OAuth authentication and appropriately protects data according to each platform's permission settings.",
                },
                {
                    q: "How do I cancel my plan?",
                    a: "You can cancel your plan at any time. You can easily cancel from the settings screen. After cancellation, you can continue using the service until the end of the current month, and your data will be securely stored. You can continue using previous data when you resubscribe.",
                },
                {
                    q: "Is there a contact for inquiries?",
                    a: "If you have any questions, please feel free to contact us at support@nelvo.co. We will respond as soon as possible.",
                },
            ],
        },
        security: {
            title: "Security",
            lead: "Data protection is a top priority for NELVO.",
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
                    desc: "NELVO conducts regular security reviews and vulnerability assessments."
                },
                {
                    title: "Secure Infrastructure",
                    desc: "Built on secure infrastructure with monitoring."
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
                        { label: "Features", href: "/features" },
                        { label: "Pricing", href: "/pricing" },
                        { label: "Use Cases", href: "/use-cases" },
                        { label: "Integrations", href: "/integrations" },
                    ]
                },
                resources: {
                    title: "Resources",
                    items: [
                        { label: "FAQ", href: "/faq" },
                        { label: "Status", href: "/status" },
                    ]
                },
                legal: {
                    title: "Legal",
                    items: [
                        { label: "Privacy Policy", href: "/privacy-policy" },
                        { label: "Terms of Service", href: "/terms" },
                    ]
                },
                contact: {
                    title: "Contact",
                    email: "support@nelvo.co",
                }
            }
        },
        pages: {
            features: {
                title: "Features",
                description: "NELVO integrates community operational data scattered across multiple tools into a single dashboard where you can grasp the big picture at a glance. You can efficiently check the information needed for daily operational decisions and make data-driven decisions quickly. Each feature is designed to solve challenges that arise in actual operational settings, and anyone can easily master it with intuitive operations.",
                mainFeatures: [
                    {
                        title: "Data Integration",
                        description: "Horizontally organize operational data scattered across multiple channels.",
                        details: [
                            "Automatically integrate operational data scattered across multiple platforms such as Discord, Stripe, YouTube, and Instagram",
                            "Connect with each tool's API and synchronize data in real-time",
                            "Cross-check data across different platforms",
                            "Authentication credentials are securely managed, and only the minimum necessary data is retrieved",
                        ],
                    },
                    {
                        title: "Member Visualization",
                        description: "Grasp community status such as join, retention, and churn.",
                        details: [
                            "Automatically classify new members, active members, and churned members",
                            "Join dates, renewal dates, and cancellation dates are automatically recorded",
                            "Check growth/decline status per community with graphs",
                            "Visually understand when growth occurred and when churn increased",
                        ],
                    },
                    {
                        title: "Revenue & Growth Tracking",
                        description: "Check numerical changes together to decide the next move.",
                        details: [
                            "Automatically calculate important revenue metrics such as MRR (Monthly Recurring Revenue), monthly sales, and LTV (Customer Lifetime Value)",
                            "Track numerical changes over time",
                            "Visualize retention rate trends in 6-month and 12-month units",
                            "Segment performance analysis (Returning, VIP, At Risk, etc.)",
                        ],
                    },
                    {
                        title: "Today View",
                        description: "Simply display only the changes you need to see today.",
                        details: [
                            "Check new members, churned members, and renewed members at a glance",
                            "Streamline daily operational tasks",
                            "Focus only on information needed for decisions without being distracted by unnecessary information",
                            "Simple interface that anyone can operate without confusion, even on first use",
                        ],
                    },
                ],
                analytics: {
                    title: "Analytics Dashboard",
                    description: "The Analytics Dashboard provides detailed analysis features, enabling advanced analysis such as retention rate trends, revenue metric tracking, and segment performance analysis. You can also use multi-community comparison graphs and cohort analysis (Retention Heatmap) of join month × retention rate.",
                    description2: "These analysis features enable data-driven operational decisions and achieve highly reproducible decision-making that doesn't rely on intuition or experience. You can gain insights to maximize growth speed and profitability.",
                    highlights: [
                        "Multi-community comparison graphs",
                        "Cohort analysis (Join Month × Retention Rate Heatmap)",
                        "Data-driven operational decisions",
                        "Insights to maximize growth speed and profitability",
                    ],
                },
                footerCta: "For pricing plans, please check",
                footerCtaLink: "here",
                footerCtaSuffix: ".",
            },
            integrations: {
                title: "Integrations",
                description: "NELVO integrates with major community management services and payment services, consolidating operational data scattered across multiple platforms. It securely connects with each platform's API and synchronizes data in real-time, eliminating the need for manual aggregation work. Supported platforms will expand sequentially, and you can use them flexibly according to your current operational environment.",
                platforms: [
                    {
                        name: "Discord",
                        description: "Discord is a communication tool used by many communities. By integrating NELVO with Discord, you can automatically retrieve server member information, join dates, activity status, and more, and check them on the dashboard.",
                        details: [
                            "Securely connect using Discord's OAuth authentication",
                            "Request only the minimum necessary permissions",
                            "Member personal information is appropriately protected",
                            "Integration setup is simple and can be completed in minutes",
                        ],
                    },
                    {
                        name: "Patreon",
                        description: "Patreon is a platform where creators can receive ongoing support from fans. By integrating NELVO with Patreon, you can automatically retrieve subscription information, member join/renewal/cancellation status, revenue data, and more.",
                        details: [
                            "Synchronize data in real-time through Patreon's API",
                            "Retrieve subscription level information",
                            "Check member counts for different plans",
                            "Use for revenue structure analysis and plan design optimization",
                        ],
                    },
                    {
                        name: "Stripe",
                        description: "Stripe is a service that provides online payment processing. By integrating NELVO with Stripe, you can automatically retrieve payment information, customer data, subscription status, and more. Important metrics such as MRR (Monthly Recurring Revenue) and LTV (Customer Lifetime Value) are also automatically calculated.",
                        details: [
                            "Retrieve payment events in real-time using Stripe's Webhook",
                            "Automatically record customer payment status and cancellation/renewal timing",
                            "Streamline revenue management",
                            "Automatically calculate important metrics such as MRR and LTV",
                        ],
                    },
                    {
                        name: "Skool",
                        description: "Skool is an online community platform. By integrating NELVO with Skool, you can automatically retrieve community member information, join dates, activity status, and more. You can check Skool's community operational data integrated with data from other platforms.",
                        details: [
                            "Analyze operational status that's hard to see with Skool alone by combining it with data from other platforms",
                            "Manage multiple community platforms cross-functionally",
                            "Grasp overall operational status",
                            "Check data in an integrated manner",
                        ],
                    },
                ],
                security: {
                    title: "Integration Security",
                    description: "NELVO ensures the highest level of security in integrations with each platform. It uses OAuth authentication, and authentication credentials are securely managed. We do not acquire authentication credentials used for integration and handle only the minimum necessary data.",
                    details: [
                        "All data communication is encrypted via SSL/TLS",
                        "Managed in a secure environment not exposed to the outside",
                        "Regular security audits are conducted",
                        "Customer data protection is our top priority",
                    ],
                },
                future: {
                    title: "Future Expansion Plans",
                    description: "Supported platforms will expand sequentially. You can use them flexibly according to your current operational environment. We also accept requests for new platform additions and will prioritize adding platforms that many users request.",
                    details: [
                        "Integration setup can be easily executed with an intuitive interface",
                        "Connecting and disconnecting each platform can be completed with a few clicks",
                        "Flexibly change integrations according to changes in your operational environment",
                        "Prioritize adding platforms based on user requests",
                    ],
                },
                footerCta: "For pricing plans, please check",
                footerCtaLink: "here",
                footerCtaSuffix: ".",
            },
            useCases: {
                title: "Use Cases",
                description: "In community operations, the reason operational decisions slow down is often a structural problem, not a matter of ability. NELVO solves these structural challenges and enables rapid data-driven decision-making. Here, we introduce the main challenges that NELVO solves and their use cases.",
                cases: [
                    {
                        title: "Solving the Challenge of Decisions Relying on Intuition",
                        description: "Because evidence numbers are scattered everywhere, reliance on experience and gut feeling increases. This causes decisions to lose reproducibility and results to become unstable. By using NELVO, you can integrate operational data scattered across multiple tools and make decisions based on clear evidence.",
                        details: [
                            "Check member count changes and revenue changes over time",
                            "Make decisions based on data, not intuition",
                            "Retention rate trends and segment performance analysis",
                            "Quantitatively evaluate which measures were effective",
                            "Achieve highly reproducible operations",
                        ],
                    },
                    {
                        title: "Solving the Challenge of Information Fragmented by Tool",
                        description: "Operational data is scattered across SNS, payments, and community tools, so just grasping the current status takes time, causing you to miss critical decision timing. NELVO automatically integrates this data, allowing you to grasp the big picture on a single screen.",
                        details: [
                            "Cross-check Discord member information, Stripe payment data, YouTube channel data, Instagram engagement data, and more",
                            "Efficiently check only the information needed for decisions without switching between tools",
                            "Significantly improve decision-making speed",
                            "Grasp the big picture on a single screen",
                        ],
                    },
                    {
                        title: "Solving the Challenge of Re-aggregating Every Time",
                        description: "Every time you share or report to the team, you have to manually re-collect data. This delay accumulates, pushing decision-making further and further back. With NELVO, data is automatically aggregated, significantly reducing preparation time for sharing and reporting.",
                        details: [
                            "Check the latest operational status on the dashboard",
                            "Share necessary information immediately",
                            "Graphs and numbers are automatically updated",
                            "No manual aggregation work required",
                            "Focus on more important decision-making and strategy planning",
                        ],
                    },
                    {
                        title: "Streamlining Daily Operational Checks",
                        description: "The Today View feature simply displays only the important changes you need to check today. You can check new members, churned members, and renewed members at a glance, streamlining daily operational tasks. You can focus only on information needed for decisions without being distracted by unnecessary information.",
                        details: [
                            "Check new members, churned members, and renewed members at a glance",
                            "Streamline daily operational tasks",
                            "Significantly reduce daily operational check time",
                            "Spend time on more important decision-making and strategy planning",
                            "Simple interface that anyone can operate without confusion, even on first use",
                        ],
                    },
                    {
                        title: "Achieving Data-Driven Operations",
                        description: "NELVO's Analytics features enable advanced analysis such as retention rate trends, revenue metric tracking, and segment performance analysis. These analysis features enable data-driven operational decisions and achieve highly reproducible decision-making that doesn't rely on intuition or experience.",
                        details: [
                            "Multi-community comparison graphs",
                            "Cohort analysis (Join Month × Retention Rate Heatmap)",
                            "Data-driven operational decisions",
                            "Insights to maximize growth speed and profitability",
                            "Accelerate community growth",
                        ],
                    },
                    {
                        title: "Improving Team Information Sharing",
                        description: "NELVO's dashboard can be shared by the entire team, allowing everyone to check operational status from the same perspective. This eliminates information asymmetry and enables consistent decision-making across the entire team.",
                        details: [
                            "Everyone checks operational status from the same perspective",
                            "Information asymmetry is eliminated",
                            "Consistent decision-making across the entire team is possible",
                            "Reduce preparation time for reports and sharing",
                            "Data-driven discussions become possible",
                            "Improve overall team productivity",
                        ],
                    },
                ],
                footerCta: "For pricing plans, please check",
                footerCtaLink: "here",
                footerCtaSuffix: ".",
            },
            pricing: {
                title: "Pricing",
                description: "NELVO offers two pricing plans tailored to your community's size and operational goals. The Basic plan is an entry-level plan for those who want to establish the foundation of operations. The Pro plan is for those who want to make data-driven decisions and maximize growth speed and profitability. Both plans can be changed or canceled freely at any time, and you can flexibly change plans according to your community's growth.",
                plans: {
                    basic: {
                        title: "Basic Plan",
                        description: "The Basic plan is for those who want to establish the foundation of community operations. You can connect up to 3 supported services and it supports major community and payment platforms. Member information and payment status are automatically synchronized, and join/renewal/cancellation dates are automatically managed.",
                        details: [
                            "Check today's new, churned, and renewed members at a glance on the Today Dashboard, and also check growth/decline status per community.",
                            "Analytics shows only trend overviews, making it ideal for basic operational status monitoring.",
                            "Recommended for small communities or those who want to try it first.",
                        ],
                    },
                    pro: {
                        title: "Pro Plan",
                        badge: "Recommended",
                        description: "The Pro plan is for those who want to make data-driven decisions and maximize growth speed and profitability. You can connect up to 7 supported services and it also supports large communities. You can centrally manage member, payment, and community information across platforms and use all Analytics Dashboard features.",
                        details: [
                            "Visualize retention rate trends (6 months and 12 months) and track revenue metrics (MRR, monthly sales, LTV, etc.).",
                            "Use advanced analysis features such as segment performance analysis, multi-community comparison graphs, and cohort analysis (Retention Heatmap) of join month × retention rate.",
                            "Recommended for those who want to achieve data-driven operations.",
                        ],
                    },
                },
                comparison: {
                    title: "Plan Comparison",
                    features: [
                        { name: "Number of Connectable Services", basic: "Up to 3", pro: "Up to 7" },
                        { name: "Auto-sync Member Info & Payment Status", basic: true, pro: true },
                        { name: "Today Dashboard", basic: true, pro: true },
                        { name: "Analytics Dashboard (Overview)", basic: true, pro: true },
                        { name: "Analytics Dashboard (Full Features)", basic: false, pro: true },
                        { name: "Retention Rate Trends (6 months / 12 months)", basic: false, pro: true },
                        { name: "Revenue Metric Tracking (MRR/LTV, etc.)", basic: false, pro: true },
                        { name: "Segment Performance Analysis", basic: false, pro: true },
                        { name: "Cohort Analysis (Retention Heatmap)", basic: false, pro: true },
                    ],
                },
                otherSections: [
                    {
                        title: "About Plan Changes",
                        description: "Plans can be changed or canceled freely at any time. You can flexibly upgrade from Basic to Pro or downgrade from Pro to Basic on a monthly basis according to your community's growth. Changes are reflected immediately with no additional fees.",
                        details: [
                            "Cancellation is also free, and you can use the service until the end of the current month after cancellation.",
                            "Data is securely stored and can continue to be used when you re-subscribe.",
                            "Please choose the optimal plan according to your community's operational situation.",
                        ],
                    },
                    {
                        title: "Supported Platforms",
                        description: "NELVO supports major community management services and payment services. You can integrate with many platforms such as Discord, Stripe, YouTube, and Instagram. Supported platforms will expand sequentially, and you can use them flexibly according to your current operational environment.",
                        details: [
                            "Integration with each platform is performed using secure authentication methods and retrieves only the minimum necessary data.",
                            "Integration details can be checked from the settings screen, and connection/disconnection can be done with simple operations.",
                        ],
                    },
                    {
                        title: "About Waitlist Registration",
                        description: "Currently, NELVO is only accepting waitlist registrations. We will provide early access and priority updates before the official release. Waitlist registration is free, and after registration, you will be prioritized for updates when we officially launch.",
                        details: [
                            "When registering for the waitlist, you can select the platforms you plan to use and your desired plan.",
                            "This information will be used as a reference for service improvements.",
                            "Once preparations for the official release are complete, we will contact you at the email address you registered.",
                        ],
                    },
                ],
                footerCta: "Waitlist registration is free. You will be prioritized for updates when we officially launch.",
                footerCtaButton: "Join Waitlist",
            },
            faq: {
                title: "Frequently Asked Questions",
                description: "Here are common questions and answers about NELVO. Information about service features, integration methods, pricing plans, security, and more is compiled below.",
                items: [
                    {
                        q: "What is NELVO?",
                        a: "NELVO is a dashboard that integrates operational data scattered across multiple community management tools and payment services, allowing you to grasp the big picture on a single screen. It automatically integrates data from Discord, Stripe, YouTube, Instagram, and more, enabling you to check member status, revenue, and activity at a glance."
                    },
                    {
                        q: "Which services can I integrate with?",
                        a: "Currently, you can integrate with Discord, Stripe, YouTube, and Instagram. NELVO securely connects using each platform's API and retrieves only the minimum necessary data. Supported platforms will expand sequentially."
                    },
                    {
                        q: "How often is data synchronized?",
                        a: "Data is synchronized in real-time. Using each platform's API and webhooks, NELVO automatically retrieves information about new members, cancellations, renewals, and more, which you can check on the dashboard."
                    },
                    {
                        q: "Tell me about pricing plans and billing",
                        a: "NELVO offers monthly pricing plans. You can choose from two plans: Basic (up to 3 service integrations) and Pro (up to 7 service integrations). Plans can be changed or canceled at any time with no additional fees."
                    },
                    {
                        q: "How is security and data handling?",
                        a: "All communication is encrypted and managed in a secure environment. NELVO does not acquire authentication credentials used for integration and handles only the minimum necessary data. NELVO securely connects using OAuth authentication and appropriately protects data according to each platform's permission settings."
                    },
                    {
                        q: "How do I cancel my plan?",
                        a: "You can cancel your plan at any time. You can easily cancel from the settings screen. After cancellation, you can continue using the service until the end of the current month, and your data will be securely stored. You can continue using previous data when you resubscribe."
                    },
                    {
                        q: "Is there a contact for inquiries?",
                        a: "If you have any questions, please feel free to contact us at support@nelvo.co. We will respond as soon as possible."
                    },
                ],
                contactLabel: "Contact",
                contactEmail: "support@nelvo.co",
            },
            status: {
                title: "Service Status",
                description: "Check the operational status of NELVO services.",
                statusTypes: {
                    operational: "Operational",
                    degraded: "Partial outage",
                    partial: "Partial outage",
                    major: "Major outage",
                    maintenance: "Maintenance",
                },
                components: {
                    website: "Website",
                    auth: "Authentication",
                    billing: "Billing",
                    integrations: "Integrations",
                    dashboard: "Dashboard",
                },
                incidentHistory: {
                    title: "Incident History",
                    noIncidents: "No incidents reported",
                    resolved: "Resolved",
                    investigating: "Investigating",
                    monitoring: "Monitoring",
                },
                notice: "This page is updated manually. Status updates may be delayed depending on circumstances.",
                lastUpdated: "Last updated (manual)",
                contactNote: "Report an issue",
                contactText: "support@nelvo.co (We'll review and respond as we can.)",
                contactEmail: "support@nelvo.co",
                futureNote: "We may migrate to a dedicated page such as status.nelvo.co in the future.",
            },
            privacy: {
                title: "Privacy Policy",
                description: "This policy sets forth how NELVO handles personal information.",
                lastUpdated: "Last Updated: 2026-01-10",
                sections: [
                    {
                        title: "1. Introduction",
                        content: "This service is provided by the NELVO Operator (the \"Operator\").\n\nThis policy sets forth how NELVO (the Service) handles personal information."
                    },
                    {
                        title: "2. Information We Collect",
                        content: "The Service may collect the following information to the extent necessary for provision:\n- Account information: Email address, organization/company name (optional input)\n- Integration information: Account identifiers of integrated services, access tokens, etc. (stored encrypted)\n- Usage data: Access logs, browsing/operation history, error information, device and browser information\n- Payment information: Billing information processed by payment providers (the Operator does not directly store credit card information)\n- Cookies and similar technologies: Language settings, session maintenance"
                    },
                    {
                        title: "3. How We Use Information",
                        content: "Collected information is used for the following purposes:\n- Providing the Service, identity verification, authentication, and account management\n- Connecting and synchronizing with integrated services and providing features requested by users\n- Billing, payment processing, responding to inquiries, and sending important notifications\n- Incident response, security assurance, and preventing unauthorized use\n- Quality improvement, new feature development, and usage analysis\n- Legal compliance and dispute resolution"
                    },
                    {
                        title: "4. Sharing & Third-Party Processors",
                        content: "The Operator strives not to provide personal information to third parties without consent, except as required by law.\n\nHowever, the Operator may engage third-party processors (hosting, payment processing, email delivery, etc.) who handle information to the minimum extent necessary.\n\nIntegrated services are connected at the user's instruction, and handling by such services is subject to their respective privacy policies."
                    },
                    {
                        title: "5. Security Measures",
                        content: "The Operator takes measures to prevent unauthorized access, leakage, etc. of personal information, including:\n\n- Organizational measures: Establishing personal information handling regulations and clarifying responsible parties\n- Human measures: Employee training and confidentiality agreements\n- Physical measures: Access control to facilities, management of equipment and media\n- Technical measures: Access control, encrypted communications, detection and prevention of unauthorized access"
                    },
                    {
                        title: "6. Your Rights & Requests",
                        content: "The Operator will respond to requests for disclosure, correction, suspension of use, etc. of retained personal data to a reasonable extent in accordance with applicable laws.\n\nIf you wish to make such a request, please contact the Operator at support@nelvo.co. The Operator may request identity verification as necessary to confirm the details of your request.\n\nPlease note that the Operator may not be able to respond to requests if it would violate applicable laws or if it would compromise the Operator's rights or security."
                    },
                    {
                        title: "7. Contact",
                        content: "For inquiries regarding the handling of personal information: support@nelvo.co"
                    },
                    {
                        title: "8. Changes to This Policy",
                        content: "This policy may be revised as necessary. Revisions will be announced on the Service."
                    },
                ],
                contactLabel: "Contact",
                contactEmail: "support@nelvo.co",
            },
            terms: {
                title: "Terms of Service",
                description: "These Terms set forth the conditions for using NELVO.",
                lastUpdated: "Last Updated: 2026-01-10",
                sections: [
                    {
                        title: "Article 1 (Scope)",
                        content: "This service is provided by the NELVO Operator (the \"Operator\").\n\nThese Terms set forth the conditions for using NELVO (the \"Service\"), and users agree to these Terms when using the Service."
                    },
                    {
                        title: "Article 2 (Definitions)",
                        content: "In these Terms, the following terms have the meanings set forth below:\n\"User\": An individual or corporation using the Service\n\"Account\": Service usage rights created through user registration\n\"Integrated Service\": External services such as Discord, Stripe, etc., connected to the Service at the user's instruction\n\"User Data\": Information provided by users to the Service through input, transmission, integration, etc. (including integrated data)"
                    },
                    {
                        title: "Article 3 (Account Registration)",
                        content: "1. Users must register with true and accurate information.\n2. Users are responsible for managing their accounts. The Operator is not liable for unauthorized use by third parties (except in cases of the Operator's willful misconduct or gross negligence).\n3. The Operator may reject or cancel registration if the Operator determines that the registration application is inappropriate."
                    },
                    {
                        title: "Article 4 (Fees & Payment)",
                        content: "1. Paid plans, fees, billing cycles, and payment methods are set forth on the Service's pricing page or application screen.\n2. Payment processing may be performed through payment providers (e.g., Stripe).\n3. Refunds and prorated fees are generally not provided unless otherwise specified on the application screen."
                    },
                    {
                        title: "Article 5 (Integrated Services)",
                        content: "1. When users connect integrated services, they are responsible for granting the permissions necessary for such integration.\n2. Some features of the Service may become unavailable due to specification changes, suspension, etc. of integrated services."
                    },
                    {
                        title: "Article 6 (Prohibited Use)",
                        content: "Users must not engage in the following:\n- Acts violating laws or public order and morals\n- Unauthorized access, vulnerability scanning, acts imposing excessive load\n- Infringement of third-party rights (copyrights, trademarks, privacy, etc.)\n- Registration of false information, impersonation\n- Resale of the Service, reverse engineering\n- Provision of benefits to antisocial forces\n- Other acts the Operator deems inappropriate"
                    },
                    {
                        title: "Article 7 (Intellectual Property Rights)",
                        content: "Intellectual property rights, including copyrights, related to the Service belong to the Operator or legitimate right holders."
                    },
                    {
                        title: "Article 8 (Handling of User Data)",
                        content: "1. The Operator handles User Data to the extent necessary for providing, improving, and securing the Service.\n2. The Operator strives not to provide User Data to third parties except as required by law or with user consent. However, handling by processors is not included in this commitment.\nPlease see the Privacy Policy for details."
                    },
                    {
                        title: "Article 9 (Service Changes & Suspension)",
                        content: "The Operator may change, add, suspend, or terminate the Service with prior notice. In emergencies, notice may be provided after the fact."
                    },
                    {
                        title: "Article 10 (Disclaimers)",
                        content: "1. The Operator does not warrant that the Service is suitable for any particular purpose, or that it is accurate, complete, or useful.\n2. The Operator is not liable for damage arising from failures or specification changes of integrated services (except in cases of the Operator's willful misconduct or gross negligence)."
                    },
                    {
                        title: "Article 11 (Limitation of Liability)",
                        content: "The Operator's liability for damages is limited to direct and ordinary damages (excluding the Operator's willful misconduct or gross negligence) and is capped at the total fees paid to the Operator by the user in the most recent 3 months (or 10,000 JPY for free use)."
                    },
                    {
                        title: "Article 12 (Suspension & Termination)",
                        content: "The Operator may take measures such as account suspension or deletion without prior notice if a user violates these Terms."
                    },
                    {
                        title: "Article 13 (Changes to Terms)",
                        content: "The Operator may change these Terms as necessary. Changed terms will be announced on the Service, and continued use after such announcement constitutes acceptance of the changes."
                    },
                    {
                        title: "Article 14 (Governing Law & Venue)",
                        content: "These Terms are governed by Japanese law, and any disputes arising in connection with the Service shall be subject to the exclusive jurisdiction of the Tokyo District Court as the court of first instance."
                    },
                    {
                        title: "Article 15 (Contact)",
                        content: "For inquiries regarding these Terms: support@nelvo.co"
                    },
                ],
                contactLabel: "Contact",
                contactEmail: "support@nelvo.co",
            },
        },
    },
};
