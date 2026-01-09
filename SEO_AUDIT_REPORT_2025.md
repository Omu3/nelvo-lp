# NELVO SEO監査レポート（現状確認）

監査実施日: 2025年1月
対象URL: https://nelvo.co (JP/EN両言語)

---

## 1) 各ページのSEO要素一覧

### 1.1 トップページ（/ と /en）

#### 日本語版（/）
- **実装方法**: Next.js Metadata API（Server Component）
- **ファイル**: `src/app/page.tsx`

| 要素 | 値 |
|------|-----|
| title | "NELVO - コミュニティ運営を、ひとつの視点に。" |
| meta description | "コミュニティ運営の全体像をひとつの画面に。NELVOは、複数のツールに散らばった情報を統合し、意思決定を一画面で完結させる運営ダッシュボードです。" |
| canonical | https://nelvo.co/ |
| hreflang (ja) | https://nelvo.co/ |
| hreflang (en) | https://nelvo.co/en |
| og:title | ❌ 未設定（layout.tsxのデフォルト値が適用される可能性） |
| og:description | ❌ 未設定（layout.tsxのデフォルト値が適用される可能性） |
| og:image | ❌ 未設定（layout.tsxのデフォルト値: /og.png） |
| og:url | ❌ 未設定（layout.tsxのデフォルト値: https://nelvo.co/） |
| og:site_name | ❌ 未設定（layout.tsxのデフォルト値: "NELVO"） |
| twitter:title | ❌ 未設定（layout.tsxのデフォルト値が適用される可能性） |
| twitter:description | ❌ 未設定（layout.tsxのデフォルト値が適用される可能性） |
| twitter:image | ❌ 未設定（layout.tsxのデフォルト値: /og.png） |
| twitter:card | ❌ 未設定（layout.tsxのデフォルト値: "summary_large_image"） |
| robots meta | index: true, follow: true |
| x-default | ❌ 未設定 |

#### 英語版（/en）
- **実装方法**: Next.js Metadata API（Server Component）
- **ファイル**: `src/app/en/page.tsx`

| 要素 | 値 |
|------|-----|
| title | "NELVO - Community Ops \"Big Picture\" in One View." |
| meta description | "Grasp operational info scattered across tools from a single, unified perspective. NELVO is the dashboard that completes your daily checks and decisions in one screen." |
| canonical | https://nelvo.co/en |
| hreflang (ja) | https://nelvo.co/ |
| hreflang (en) | https://nelvo.co/en |
| og:title | ❌ 未設定（layout.tsxのデフォルト値が適用される可能性） |
| og:description | ❌ 未設定（layout.tsxのデフォルト値が適用される可能性） |
| og:image | ❌ 未設定（layout.tsxのデフォルト値: /og.png） |
| og:url | ❌ 未設定（layout.tsxのデフォルト値: https://nelvo.co/） |
| og:site_name | ❌ 未設定（layout.tsxのデフォルト値: "NELVO"） |
| twitter:title | ❌ 未設定（layout.tsxのデフォルト値が適用される可能性） |
| twitter:description | ❌ 未設定（layout.tsxのデフォルト値が適用される可能性） |
| twitter:image | ❌ 未設定（layout.tsxのデフォルト値: /og.png） |
| twitter:card | ❌ 未設定（layout.tsxのデフォルト値: "summary_large_image"） |
| robots meta | index: true, follow: true |
| x-default | ❌ 未設定 |

---

### 1.2 Featuresページ（/features と /en/features）

#### 日本語版（/features）
- **実装方法**: Next.js Metadata API（Server Component）
- **ファイル**: `src/app/features/page.tsx`

| 要素 | 値 |
|------|-----|
| title | "Features - NELVO \| Unified Dashboard for Creators & Communities" |
| meta description | "Discover NELVO's powerful features: data integration, member visualization, revenue tracking, and Today view. All your community operations in one unified dashboard." |
| canonical | https://nelvo.co/features |
| hreflang (ja) | https://nelvo.co/features |
| hreflang (en) | ⚠️ **https://nelvo.co/en** （誤: `/en/features` であるべき） |
| og:title | "Features - NELVO \| Unified Dashboard for Creators & Communities" |
| og:description | "Discover NELVO's powerful features: data integration, member visualization, revenue tracking, and Today view. All your community operations in one unified dashboard." |
| og:image | /og.png (1200x630) |
| og:url | https://nelvo.co/features |
| og:site_name | "NELVO" |
| twitter:title | "Features - NELVO \| Unified Dashboard for Creators & Communities" |
| twitter:description | "Discover NELVO's powerful features: data integration, member visualization, revenue tracking, and Today view. All your community operations in one unified dashboard." |
| twitter:image | /og.png |
| twitter:card | "summary_large_image" |
| robots meta | index: true, follow: true |
| x-default | ❌ 未設定 |

#### 英語版（/en/features）
- **実装方法**: Next.js Metadata API（Server Component）
- **ファイル**: `src/app/en/features/page.tsx`

| 要素 | 値 |
|------|-----|
| title | "Features - NELVO \| Unified Dashboard for Creators & Communities" |
| meta description | "Discover NELVO's powerful features: data integration, member visualization, revenue tracking, and Today view. All your community operations in one unified dashboard." |
| canonical | https://nelvo.co/en/features |
| hreflang (ja) | https://nelvo.co/features |
| hreflang (en) | https://nelvo.co/en/features |
| og:title | "Features - NELVO \| Unified Dashboard for Creators & Communities" |
| og:description | "Discover NELVO's powerful features: data integration, member visualization, revenue tracking, and Today view. All your community operations in one unified dashboard." |
| og:image | /og.png (1200x630) |
| og:url | https://nelvo.co/en/features |
| og:site_name | "NELVO" |
| twitter:title | "Features - NELVO \| Unified Dashboard for Creators & Communities" |
| twitter:description | "Discover NELVO's powerful features: data integration, member visualization, revenue tracking, and Today view. All your community operations in one unified dashboard." |
| twitter:image | /og.png |
| twitter:card | "summary_large_image" |
| robots meta | index: true, follow: true |
| x-default | ❌ 未設定 |

---

### 1.3 Pricingページ（/pricing と /en/pricing）

#### 日本語版（/pricing）
- **実装方法**: Next.js Metadata API（Server Component）
- **ファイル**: `src/app/pricing/page.tsx`

| 要素 | 値 |
|------|-----|
| title | "Pricing - NELVO \| Unified Dashboard for Creators & Communities" |
| meta description | "Choose the right plan for your community. NELVO offers Basic and Pro plans starting from $15/month. Connect up to 7 platforms and track everything in one dashboard." |
| canonical | https://nelvo.co/pricing |
| hreflang (ja) | https://nelvo.co/pricing |
| hreflang (en) | ⚠️ **https://nelvo.co/en** （誤: `/en/pricing` であるべき） |
| og:title | "Pricing - NELVO \| Unified Dashboard for Creators & Communities" |
| og:description | "Choose the right plan for your community. NELVO offers Basic and Pro plans starting from $15/month. Connect up to 7 platforms and track everything in one dashboard." |
| og:image | /og.png (1200x630) |
| og:url | https://nelvo.co/pricing |
| og:site_name | "NELVO" |
| twitter:title | "Pricing - NELVO \| Unified Dashboard for Creators & Communities" |
| twitter:description | "Choose the right plan for your community. NELVO offers Basic and Pro plans starting from $15/month. Connect up to 7 platforms and track everything in one dashboard." |
| twitter:image | /og.png |
| twitter:card | "summary_large_image" |
| robots meta | index: true, follow: true |
| x-default | ❌ 未設定 |

#### 英語版（/en/pricing）
- **実装方法**: Next.js Metadata API（Server Component）
- **ファイル**: `src/app/en/pricing/page.tsx`

| 要素 | 値 |
|------|-----|
| title | "Pricing - NELVO \| Unified Dashboard for Creators & Communities" |
| meta description | "Choose the right plan for your community. NELVO offers Basic and Pro plans starting from $15/month. Connect up to 7 platforms and track everything in one dashboard." |
| canonical | https://nelvo.co/en/pricing |
| hreflang (ja) | https://nelvo.co/pricing |
| hreflang (en) | https://nelvo.co/en/pricing |
| og:title | "Pricing - NELVO \| Unified Dashboard for Creators & Communities" |
| og:description | "Choose the right plan for your community. NELVO offers Basic and Pro plans starting from $15/month. Connect up to 7 platforms and track everything in one dashboard." |
| og:image | /og.png (1200x630) |
| og:url | https://nelvo.co/en/pricing |
| og:site_name | "NELVO" |
| twitter:card | "summary_large_image" |
| robots meta | index: true, follow: true |
| x-default | ❌ 未設定 |

---

### 1.4 Use Casesページ（/use-cases と /en/use-cases）

#### 日本語版（/use-cases）
- **実装方法**: ⚠️ **Client Component（'use client'）のため、metadataがエクスポートできません**
- **ファイル**: `src/app/use-cases/page.tsx`
- **問題**: `layout.tsx`のデフォルトmetadataが適用される可能性があります

| 要素 | 値 |
|------|-----|
| title | ⚠️ **未設定（layout.tsxのデフォルト値: "NELVO \| Unified Dashboard for Creators & Communities"）** |
| meta description | ⚠️ **未設定（layout.tsxのデフォルト値）** |
| canonical | ⚠️ **未設定（layout.tsxのデフォルト値: https://nelvo.co/）** |
| hreflang | ⚠️ **未設定** |
| og:title | ⚠️ **未設定（layout.tsxのデフォルト値）** |
| og:description | ⚠️ **未設定（layout.tsxのデフォルト値）** |
| og:image | ⚠️ **未設定（layout.tsxのデフォルト値: /og.png）** |
| og:url | ⚠️ **未設定（layout.tsxのデフォルト値: https://nelvo.co/）** |
| og:site_name | ⚠️ **未設定（layout.tsxのデフォルト値: "NELVO"）** |
| twitter:title | ⚠️ **未設定（layout.tsxのデフォルト値）** |
| twitter:description | ⚠️ **未設定（layout.tsxのデフォルト値）** |
| twitter:image | ⚠️ **未設定（layout.tsxのデフォルト値: /og.png）** |
| twitter:card | ⚠️ **未設定（layout.tsxのデフォルト値: "summary_large_image"）** |
| robots meta | ⚠️ **未設定（layout.tsxのデフォルト値: index: true, follow: true）** |
| x-default | ❌ 未設定 |

#### 英語版（/en/use-cases）
- **実装方法**: Next.js Metadata API（Server Component）
- **ファイル**: `src/app/en/use-cases/page.tsx`

| 要素 | 値 |
|------|-----|
| title | "Use Cases - NELVO \| 活用事例・ユースケース" |
| meta description | "NELVOの活用事例をご紹介。判断が感覚に寄ってしまう課題、情報がツールごとに分断される課題、共有のたびに集計し直す課題を解決します。" |
| canonical | https://nelvo.co/en/use-cases |
| hreflang (ja) | https://nelvo.co/use-cases |
| hreflang (en) | https://nelvo.co/en/use-cases |
| og:title | "Use Cases - NELVO \| 活用事例・ユースケース" |
| og:description | "NELVOの活用事例をご紹介。判断が感覚に寄ってしまう課題、情報がツールごとに分断される課題、共有のたびに集計し直す課題を解決します。" |
| og:image | /og.png (1200x630) |
| og:url | https://nelvo.co/en/use-cases |
| og:site_name | "NELVO" |
| og:locale | "en_US" |
| twitter:title | "Use Cases - NELVO \| 活用事例・ユースケース" |
| twitter:description | "NELVOの活用事例をご紹介。判断が感覚に寄ってしまう課題、情報がツールごとに分断される課題、共有のたびに集計し直す課題を解決します。" |
| twitter:image | /og.png |
| twitter:card | "summary_large_image" |
| robots meta | index: true, follow: true |
| x-default | ❌ 未設定 |

⚠️ **問題**: 英語版のtitleとdescriptionが日本語になっています。

---

### 1.5 Integrationsページ（/integrations と /en/integrations）

#### 日本語版（/integrations）
- **実装方法**: ⚠️ **Client Component（'use client'）のため、metadataがエクスポートできません**
- **ファイル**: `src/app/integrations/page.tsx`
- **問題**: `layout.tsx`のデフォルトmetadataが適用される可能性があります

| 要素 | 値 |
|------|-----|
| title | ⚠️ **未設定（layout.tsxのデフォルト値: "NELVO \| Unified Dashboard for Creators & Communities"）** |
| meta description | ⚠️ **未設定（layout.tsxのデフォルト値）** |
| canonical | ⚠️ **未設定（layout.tsxのデフォルト値: https://nelvo.co/）** |
| hreflang | ⚠️ **未設定** |
| og:title | ⚠️ **未設定（layout.tsxのデフォルト値）** |
| og:description | ⚠️ **未設定（layout.tsxのデフォルト値）** |
| og:image | ⚠️ **未設定（layout.tsxのデフォルト値: /og.png）** |
| og:url | ⚠️ **未設定（layout.tsxのデフォルト値: https://nelvo.co/）** |
| og:site_name | ⚠️ **未設定（layout.tsxのデフォルト値: "NELVO"）** |
| twitter:title | ⚠️ **未設定（layout.tsxのデフォルト値）** |
| twitter:description | ⚠️ **未設定（layout.tsxのデフォルト値）** |
| twitter:image | ⚠️ **未設定（layout.tsxのデフォルト値: /og.png）** |
| twitter:card | ⚠️ **未設定（layout.tsxのデフォルト値: "summary_large_image"）** |
| robots meta | ⚠️ **未設定（layout.tsxのデフォルト値: index: true, follow: true）** |
| x-default | ❌ 未設定 |

#### 英語版（/en/integrations）
- **実装方法**: Next.js Metadata API（Server Component）
- **ファイル**: `src/app/en/integrations/page.tsx`

| 要素 | 値 |
|------|-----|
| title | "Integrations - NELVO \| Unified Dashboard for Creators & Communities" |
| meta description | "Connect your favorite platforms with NELVO. Integrate Discord, Patreon, Stripe, Skool and more. All your community data in one unified dashboard." |
| canonical | https://nelvo.co/en/integrations |
| hreflang (ja) | https://nelvo.co/integrations |
| hreflang (en) | https://nelvo.co/en/integrations |
| og:title | "Integrations - NELVO \| Unified Dashboard for Creators & Communities" |
| og:description | "Connect your favorite platforms with NELVO. Integrate Discord, Patreon, Stripe, Skool and more. All your community data in one unified dashboard." |
| og:image | /og.png (1200x630) |
| og:url | https://nelvo.co/en/integrations |
| og:site_name | "NELVO" |
| twitter:title | "Integrations - NELVO \| Unified Dashboard for Creators & Communities" |
| twitter:description | "Connect your favorite platforms with NELVO. Integrate Discord, Patreon, Stripe, Skool and more. All your community data in one unified dashboard." |
| twitter:image | /og.png |
| twitter:card | "summary_large_image" |
| robots meta | index: true, follow: true |
| x-default | ❌ 未設定 |

⚠️ **問題**: descriptionに「Patreon」「Skool」が含まれていますが、実際のページでは「YouTube」「Instagram」に変更されています。

---

## 2) robots.txt と sitemap.xml の確認

### 2.1 robots.txt

- **実装方法**: Next.js MetadataRoute API（`src/app/robots.ts`）
- **生成URL**: https://nelvo.co/robots.txt

```
User-agent: *
Allow: /
Sitemap: https://nelvo.co/sitemap.xml
```

✅ **状態**: 正常。sitemapを正しく指しています。

---

### 2.2 sitemap.xml

- **実装方法**: Next.js MetadataRoute API（`src/app/sitemap.ts`）
- **生成URL**: https://nelvo.co/sitemap.xml

#### 現在のsitemap内容

| URL | lastModified | changeFrequency | priority |
|-----|--------------|-----------------|----------|
| https://nelvo.co/ | ✅ new Date() | weekly | 1.0 |
| https://nelvo.co/en | ✅ new Date() | weekly | 1.0 |
| https://nelvo.co/features | ✅ new Date() | weekly | 0.8 |
| https://nelvo.co/pricing | ✅ new Date() | weekly | 0.8 |
| https://nelvo.co/use-cases | ✅ new Date() | weekly | 0.8 |
| https://nelvo.co/integrations | ✅ new Date() | weekly | 0.8 |

#### 問題点

❌ **重大**: 英語版のURLがsitemapに含まれていません
- ❌ https://nelvo.co/en/features
- ❌ https://nelvo.co/en/pricing
- ❌ https://nelvo.co/en/use-cases
- ❌ https://nelvo.co/en/integrations

#### lastModifiedについて

✅ **現状**: `new Date()` で動的に生成されています（ビルド時の日時）
- **評価**: 問題なし。ビルドのたびに更新されるため、実際の更新日時に近い値を返します。
- **推奨**: より正確な更新日時を記録したい場合は、ファイルの最終更新日時やGit履歴を使用することも可能ですが、現状でも問題ありません。

---

## 3) HTTPヘッダ観点

### 3.1 想定されるstatus code（middleware.tsより）

#### ルートパス
- **/** → 200（Cookieが`ja`または未設定の場合）または 301（Cookieが`en`の場合、`/en`へ）
- **/en** → 200（Cookieが`en`または未設定の場合）または 301（Cookieが`ja`の場合、`/`へ）

#### SEOページ（言語なしURL）
- **/features** → 301（CookieまたはAccept-Languageに基づいて`/features`または`/en/features`へリダイレクト）
- **/pricing** → 301（同上）
- **/use-cases** → 301（同上）
- **/integrations** → 301（同上）

#### SEOページ（英語URL）
- **/en/features** → 200（Cookieが`en`または未設定の場合）または 301（Cookieが`ja`の場合、`/features`へ）
- **/en/pricing** → 200（同上）または 301（同上）
- **/en/use-cases** → 200（同上）または 301（同上）
- **/en/integrations** → 200（同上）または 301（同上）

### 3.2 Canonicalと実URLの不一致

#### 問題なし
- ✅ `/` → canonical: `https://nelvo.co/`
- ✅ `/en` → canonical: `https://nelvo.co/en`
- ✅ `/features` → canonical: `https://nelvo.co/features`（ただし、リダイレクトされる可能性あり）
- ✅ `/en/features` → canonical: `https://nelvo.co/en/features`
- ✅ `/pricing` → canonical: `https://nelvo.co/pricing`（ただし、リダイレクトされる可能性あり）
- ✅ `/en/pricing` → canonical: `https://nelvo.co/en/pricing`
- ✅ `/en/use-cases` → canonical: `https://nelvo.co/en/use-cases`
- ✅ `/en/integrations` → canonical: `https://nelvo.co/en/integrations`

#### 問題あり
- ⚠️ `/use-cases` → canonical: **未設定**（Client Componentのため）
- ⚠️ `/integrations` → canonical: **未設定**（Client Componentのため）

### 3.3 リダイレクト時のcanonical/hreflangの矛盾

#### シナリオ: `/features` を直打ち（Cookie未設定、Accept-Language: en）

1. **リクエスト**: `GET /features`
2. **middleware処理**: Cookie未設定 → Accept-Language判定 → デフォルト英語
3. **リダイレクト**: `301 /features` → `/en/features`
4. **レスポンス**: `/en/features` を返す（status: 200）
5. **canonical**: `https://nelvo.co/en/features` ✅
6. **hreflang**: `ja: https://nelvo.co/features`, `en: https://nelvo.co/en/features` ✅

✅ **評価**: 矛盾なし。リダイレクト先のURLとcanonical/hreflangが一致しています。

#### シナリオ: `/features` を直打ち（Cookie: ja）

1. **リクエスト**: `GET /features`
2. **middleware処理**: Cookie=`ja` → 日本語URLのまま
3. **リダイレクト**: なし（status: 200）
4. **canonical**: `https://nelvo.co/features` ✅
5. **hreflang**: `ja: https://nelvo.co/features`, `en: https://nelvo.co/en` ⚠️ **誤**

⚠️ **問題**: `/features` のhreflangで `en` が `/en` を指していますが、正しくは `/en/features` を指すべきです。

---

## 4) OG画像・faviconの確認

### 4.1 OG画像

- **URL**: `/og.png`
- **ファイル存在**: ✅ `public/og.png` に存在
- **想定status**: 200（Next.jsが静的ファイルとして配信）

### 4.2 Favicon各種

- **favicon.ico**: ✅ `public/favicon.ico` に存在
- **favicon-32x32.png**: ✅ `public/favicon-32x32.png` に存在
- **favicon-16x16.png**: ✅ `public/favicon-16x16.png` に存在
- **apple-touch-icon.png**: ✅ `public/apple-touch-icon.png` に存在

✅ **評価**: すべてのファイルが存在します。Next.jsが静的ファイルとして配信するため、status: 200でアクセス可能と想定されます。

---

## 問題点まとめ

### 重大（Critical）

1. **❌ `/use-cases` と `/integrations` の日本語版にmetadataが存在しない**
   - **影響**: 検索エンジンが正しいタイトル・説明を取得できない。OG画像やTwitter Cardが正しく表示されない。
   - **原因**: Client Component（'use client'）のため、metadataをエクスポートできない
   - **最小修正案**: `src/app/use-cases/page.tsx` と `src/app/integrations/page.tsx` を、Server Component（metadata用）と Client Component（UI用）に分離する。`features` や `pricing` と同じ構造にする。

2. **❌ sitemapに英語版URLが含まれていない**
   - **影響**: 検索エンジンが英語版ページをインデックスしにくい
   - **原因**: `src/app/sitemap.ts` に `/en/features`, `/en/pricing`, `/en/use-cases`, `/en/integrations` が追加されていない
   - **最小修正案**: `sitemap.ts` に英語版URLを追加する

### 中程度（Medium）

3. **⚠️ hreflangの誤り（/features, /pricing）**
   - **影響**: 検索エンジンが言語間の関係を正しく認識できない可能性
   - **原因**: `src/app/features/page.tsx` と `src/app/pricing/page.tsx` で `hreflang (en)` が `/en` を指している（正しくは `/en/features`, `/en/pricing`）
   - **最小修正案**: `alternates.languages.en` を正しいURLに修正する

4. **⚠️ トップページ（/, /en）にOpenGraph/Twitter Cardが未設定**
   - **影響**: SNSシェア時にデフォルトのOG画像・タイトルが使用される可能性
   - **原因**: `src/app/page.tsx` と `src/app/en/page.tsx` で `openGraph` と `twitter` が未設定
   - **最小修正案**: 各ページのmetadataに `openGraph` と `twitter` を追加する

5. **⚠️ `/en/use-cases` のtitle/descriptionが日本語**
   - **影響**: 英語版ページなのに、検索結果に日本語のタイトルが表示される可能性
   - **原因**: `src/app/en/use-cases/page.tsx` のmetadataが日本語になっている
   - **最小修正案**: 英語版のtitle/descriptionを英語に変更する

6. **⚠️ `/en/integrations` のdescriptionに古い情報が含まれている**
   - **影響**: 実際のページ内容と不一致
   - **原因**: descriptionに「Patreon」「Skool」が含まれているが、実際は「YouTube」「Instagram」に変更済み
   - **最小修正案**: descriptionを更新する

### 軽微（Minor）

7. **❌ x-default hreflangが未設定**
   - **影響**: 検索エンジンがデフォルト言語を判断しにくい可能性
   - **原因**: すべてのページで `alternates.languages` に `x-default` が含まれていない
   - **最小修正案**: 各ページのmetadataに `x-default: 'https://nelvo.co/'` を追加する（または `'https://nelvo.co/en'`、仕様に応じて）

---

## 推奨修正優先順位

### Priority 1（最優先）
1. `/use-cases` と `/integrations` の日本語版にmetadataを追加（Server Component化）
2. sitemapに英語版URLを追加

### Priority 2（高優先度）
3. hreflangの誤りを修正（/features, /pricing）
4. トップページ（/, /en）にOpenGraph/Twitter Cardを追加
5. `/en/use-cases` のtitle/descriptionを英語に修正
6. `/en/integrations` のdescriptionを更新

### Priority 3（中優先度）
7. x-default hreflangを追加

---

## 補足: Next.js Metadata APIの動作確認

- ✅ すべてのmetadataは Next.js Metadata API（`export const metadata`）経由で実装されています
- ✅ 直書きの `<head>` タグは使用されていません
- ✅ Server ComponentとClient Componentの分離が適切に行われているページ（features, pricing）と、されていないページ（use-cases, integrations）があります
