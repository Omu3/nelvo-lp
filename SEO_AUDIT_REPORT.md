# NELVO SEO 監査レポート

## 1) canonicalが全ページで https://nelvo.co を指しているか

### 現状
- `src/app/layout.tsx`: `canonical: "https://nelvo.co/"`
- `src/app/page.tsx`: `canonical: 'https://nelvo.co/'`
- `src/app/en/page.tsx`: `canonical: 'https://nelvo.co/'`

### 問題
- `/en` ページのcanonicalが `https://nelvo.co/` を指しており、正しく `https://nelvo.co/en` を指していない
- これにより、英語ページが日本語ページの重複コンテンツとして扱われる可能性がある

### 修正案
各ページのcanonicalを正しいURLに設定する

### 修正diff
```typescript
// src/app/en/page.tsx
export const metadata: Metadata = {
    title: "NELVO - Community Ops \"Big Picture\" in One View.",
    description: "Grasp operational info scattered across tools from a single, unified perspective. NELVO is the dashboard that completes your daily checks and decisions in one screen.",
    alternates: {
        canonical: 'https://nelvo.co/en',  // 修正: /en を指すように
        languages: {
            'ja': 'https://nelvo.co/',
            'en': 'https://nelvo.co/en',
        },
    },
    // ...
};
```

---

## 2) robots (src/app/robots.ts) が Allow:/ と sitemap を返しているか

### 現状
```typescript
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://nelvo.co/sitemap.xml",
  };
}
```

### 問題
✅ 問題なし。正しく設定されている

### 修正案
不要

---

## 3) sitemap (src/app/sitemap.ts) に主要ページが網羅されているか

### 現状
- `https://nelvo.co/` (priority: 1.0)
- `https://nelvo.co/en` (priority: 1.0)

### 問題
- 現状は `/` と `/en` のみで、他にページがないため問題なし
- ただし、将来的に `/pricing`、`/features` などのページが追加された場合は、sitemapに追加が必要

### 修正案
現状は問題なし。新規ページ追加時はsitemapに追加する

---

## 4) metadata(OpenGraph/Twitter) が各ページ固有になっているか

### 現状
- `src/app/layout.tsx`: OpenGraph/Twitter設定あり（共通設定）
- `src/app/page.tsx`: title/descriptionのみ、OpenGraph/Twitterなし
- `src/app/en/page.tsx`: title/descriptionのみ、OpenGraph/Twitterなし

### 問題
- 各ページ固有のOpenGraph/Twitter設定がない
- layout.tsxの共通設定が使用されるが、各ページの内容に合わせた最適化が必要
- `/en` ページのOG画像やタイトルが日本語版と同じになっている

### 修正案
各ページに固有のOpenGraph/Twitter設定を追加

### 修正diff
```typescript
// src/app/page.tsx
export const metadata: Metadata = {
  title: "NELVO - コミュニティ運営を、ひとつの視点に。",
  description: "コミュニティ運営の全体像をひとつの画面に。NELVOは、複数のツールに散らばった情報を統合し、意思決定を一画面で完結させる運営ダッシュボードです。",
  alternates: {
    canonical: 'https://nelvo.co/',
    languages: {
      'ja': 'https://nelvo.co/',
      'en': 'https://nelvo.co/en',
    },
  },
  openGraph: {
    title: "NELVO - コミュニティ運営を、ひとつの視点に。",
    description: "コミュニティ運営の全体像をひとつの画面に。NELVOは、複数のツールに散らばった情報を統合し、意思決定を一画面で完結させる運営ダッシュボードです。",
    url: "https://nelvo.co/",
    siteName: "NELVO",
    locale: "ja_JP",
    type: "website",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "NELVO" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "NELVO - コミュニティ運営を、ひとつの視点に。",
    description: "コミュニティ運営の全体像をひとつの画面に。NELVOは、複数のツールに散らばった情報を統合し、意思決定を一画面で完結させる運営ダッシュボードです。",
    images: ["/og.png"],
  },
  // ...
};

// src/app/en/page.tsx
export const metadata: Metadata = {
    title: "NELVO - Community Ops \"Big Picture\" in One View.",
    description: "Grasp operational info scattered across tools from a single, unified perspective. NELVO is the dashboard that completes your daily checks and decisions in one screen.",
    alternates: {
        canonical: 'https://nelvo.co/en',
        languages: {
            'ja': 'https://nelvo.co/',
            'en': 'https://nelvo.co/en',
        },
    },
    openGraph: {
        title: "NELVO - Community Ops \"Big Picture\" in One View.",
        description: "Grasp operational info scattered across tools from a single, unified perspective. NELVO is the dashboard that completes your daily checks and decisions in one screen.",
        url: "https://nelvo.co/en",
        siteName: "NELVO",
        locale: "en_US",
        type: "website",
        images: [{ url: "/og.png", width: 1200, height: 630, alt: "NELVO" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "NELVO - Community Ops \"Big Picture\" in One View.",
        description: "Grasp operational info scattered across tools from a single, unified perspective. NELVO is the dashboard that completes your daily checks and decisions in one screen.",
        images: ["/og.png"],
    },
    // ...
};
```

---

## 5) H1が1ページ1つになっているか

### 現状
- `src/components/Hero.tsx` に1つのH1タグのみ存在
- 他のコンポーネントにH1タグは見当たらない

### 問題
✅ 問題なし。各ページにH1が1つずつ存在

### 修正案
不要

---

## 6) /en の hreflang/alternates が設定できているか

### 現状
- `src/app/page.tsx`: `languages: { 'ja': 'https://nelvo.co/', 'en': 'https://nelvo.co/en' }`
- `src/app/en/page.tsx`: `languages: { 'ja': 'https://nelvo.co/', 'en': 'https://nelvo.co/en' }`
- `src/app/layout.tsx`: `<html lang="ja">` が固定

### 問題
- `layout.tsx` の `<html lang="ja">` が固定されており、`/en` ページでも `lang="ja"` になっている
- Next.jsの `alternates.languages` は `hreflang` タグを生成するが、`<html lang>` 属性も正しく設定する必要がある

### 修正案
動的に `lang` 属性を設定する

### 修正diff
```typescript
// src/app/layout.tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">  {/* この部分を動的にする必要があるが、App Routerでは難しい */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

**実装案（推奨）:**
App Routerでは `layout.tsx` で動的に `lang` を設定するのは難しいため、以下のいずれかの方法を推奨：

**方法1: 各ページでlayoutをオーバーライド**
```typescript
// src/app/en/layout.tsx (新規作成)
export default function EnglishLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

**方法2: middlewareでheadersを設定（推奨）**
```typescript
// src/middleware.ts に追加
export function middleware(request: NextRequest) {
    // ... 既存のコード ...
    
    const response = NextResponse.next();
    
    // hreflang用のheaders設定
    if (pathname.startsWith('/en')) {
        response.headers.set('Content-Language', 'en');
    } else {
        response.headers.set('Content-Language', 'ja');
    }
    
    return response;
}
```

ただし、`<html lang>` 属性自体は変更できないため、**方法1が最も確実**です。

---

## 7) 404/リダイレクトループが起きる可能性がないか

### 現状
- `src/middleware.ts`: www削除、HTTP→HTTPS、未知のパスを `/` にリダイレクト
- `next.config.ts`: 特別な設定なし
- `vercel.json`: 存在しない

### 問題
- middlewareの設定は適切に見えるが、以下の点を確認：
  1. `sitemap.xml` と `robots.txt` がmatcherから除外されている ✅
  2. リダイレクトループの可能性: 低い（localhost判定あり）✅
  3. ただし、`/en` へのリダイレクトが正しく動作するか要確認

### 修正案
現状は問題なさそうだが、以下を推奨：

1. **sitemap.xml/robots.txtの除外確認**: ✅ 既に除外されている
2. **テスト環境での動作確認**: 本番環境で実際にテストする
3. **Vercel設定の確認**: 必要に応じて `vercel.json` を追加

---

## 今このプロジェクトで順位が上がりやすい順の改善Top10

### 1. 【最優先】/en ページのcanonical修正
**優先度: 🔴 最高**
- 現状: `/en` が `/` を指している
- 影響: 重複コンテンツとして扱われる可能性
- 効果: 即座に改善

### 2. 【最優先】各ページのOpenGraph/Twitter設定
**優先度: 🔴 最高**
- 現状: layout.tsxの共通設定のみ
- 影響: SNS共有時の表示が最適化されていない
- 効果: クリック率向上、SNSからの流入増加

### 3. 【高】/en ページのhtml lang属性修正
**優先度: 🟠 高**
- 現状: `/en` でも `lang="ja"` になっている
- 影響: 検索エンジンが言語を正しく認識できない
- 効果: 英語圏での検索順位向上

### 4. 【高】構造化データ（JSON-LD）の追加
**優先度: 🟠 高**
- 現状: なし
- 影響: リッチスニペット表示の機会を逃している
- 効果: 検索結果での表示改善、CTR向上

### 5. 【中】OG画像の最適化
**優先度: 🟡 中**
- 現状: logo.pngをコピーしたプレースホルダー
- 影響: SNS共有時の視覚的魅力が低い
- 効果: SNSからの流入増加

### 6. 【中】メタディスクリプションの最適化
**優先度: 🟡 中**
- 現状: 基本的な説明文のみ
- 影響: 検索結果でのクリック率が低い可能性
- 効果: CTR向上

### 7. 【中】内部リンク構造の最適化
**優先度: 🟡 中**
- 現状: アンカーリンク（#features等）のみ
- 影響: ページ間の関連性が弱い
- 効果: クローラビリティ向上

### 8. 【低】ページ速度の最適化
**優先度: 🟢 低**
- 現状: 未確認
- 影響: Core Web Vitalsスコアが低い可能性
- 効果: 検索順位への間接的影響

### 9. 【低】alt属性の最適化
**優先度: 🟢 低**
- 現状: 基本的なalt属性のみ
- 影響: 画像検索での露出機会を逃している
- 効果: 画像検索からの流入

### 10. 【低】ブログ/コンテンツページの追加
**優先度: 🟢 低**
- 現状: LPのみ
- 影響: 検索キーワードでの露出機会が限定的
- 効果: 長期的なSEO効果

---

## まとめ

**緊急対応が必要:**
1. `/en` ページのcanonical修正
2. 各ページのOpenGraph/Twitter設定追加

**短期対応推奨:**
3. `/en` ページのhtml lang属性修正
4. 構造化データの追加

**中長期対応:**
5-10. コンテンツ最適化、ページ追加など
