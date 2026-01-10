# Search Console リダイレクトエラー解消 修正サマリー

## 修正目的
Search Consoleの「リダイレクトエラー」を解消し、日/英のURLを安定インデックスさせる。

## 修正内容

### 1. middleware.ts の修正

#### 変更前の問題
- 下層ページ（/features, /pricing等）がAccept-LanguageやCookieに基づいて301リダイレクトされていた
- CookieとURLの整合性チェックにより、下層ページでもリダイレクトが発生していた

#### 変更後
- **トップページ（/ と /en）のみで言語リダイレクトを実行**
- **下層ページでは一切リダイレクトしない（常に200を返す）**
- トップページのリダイレクトは、Cookie優先、なければAccept-Language、なければデフォルト（日本語）

#### 修正箇所
1. **下層ページの自動リダイレクトを削除**: セクション3（38-69行目）を削除
2. **CookieとURLの整合性チェックを削除**: セクション4-5（74-97行目）を削除
3. **トップページのみリダイレクト**: 新しいセクション3でトップページのみ処理

### 2. metadata の x-default 修正

#### 修正内容
英語ページ（/en/*）の `x-default` を、各ページの日本語版に統一。

| ページ | 修正前 | 修正後 |
|--------|--------|--------|
| /en/page.tsx | 'https://nelvo.co/en' | 'https://nelvo.co/' |
| /en/features | 'https://nelvo.co/en/features' | 'https://nelvo.co/features' |
| /en/pricing | 'https://nelvo.co/en/pricing' | 'https://nelvo.co/pricing' |
| /en/use-cases | 'https://nelvo.co/en/use-cases' | 'https://nelvo.co/use-cases' |
| /en/integrations | 'https://nelvo.co/en/integrations' | 'https://nelvo.co/integrations' |
| /en/faq | 'https://nelvo.co/en/faq' | 'https://nelvo.co/faq' |
| /en/status | 'https://nelvo.co/en/status' | 'https://nelvo.co/status' |
| /en/privacy-policy | 'https://nelvo.co/en/privacy-policy' | 'https://nelvo.co/privacy-policy' |
| /en/terms | 'https://nelvo.co/en/terms' | 'https://nelvo.co/terms' |

### 3. canonical と hreflang の確認

#### 確認結果
すべてのページで正しく設定されています：

**日本語ページ（例：/features）**:
- canonical: 'https://nelvo.co/features'
- hreflang: 'ja' → 'https://nelvo.co/features'
- hreflang: 'en' → 'https://nelvo.co/en/features'
- x-default: 'https://nelvo.co/features'

**英語ページ（例：/en/features）**:
- canonical: 'https://nelvo.co/en/features'
- hreflang: 'ja' → 'https://nelvo.co/features'
- hreflang: 'en' → 'https://nelvo.co/en/features'
- x-default: 'https://nelvo.co/features'

### 4. sitemap.xml の確認

#### 確認結果
すべてのページが日本語版と英語版の両方で含まれています：

- / と /en
- /features と /en/features
- /pricing と /en/pricing
- /use-cases と /en/use-cases
- /integrations と /en/integrations
- /faq と /en/faq
- /status と /en/status
- /privacy-policy と /en/privacy-policy
- /terms と /en/terms

## 修正後の動作

### トップページ（/ と /en）
- Cookie優先 → なければAccept-Language → なければデフォルト（日本語）
- Cookieが日本語の場合、/en → / にリダイレクト（301）
- Cookieが英語の場合、/ → /en にリダイレクト（301）
- Accept-Languageが英語優先の場合、/ → /en にリダイレクト（301、Cookie未設定時）

### 下層ページ（/features, /pricing 等）
- **常に200を返す（リダイレクトしない）**
- /features → 常に日本語ページとして返す
- /en/features → 常に英語ページとして返す
- Accept-LanguageやCookieに関係なく、URLに応じた言語で返す

## 検証コマンド（本番環境で実行）

```bash
# 1. /features は常に200（日本語、Locationなし）
curl.exe -I "https://nelvo.co/features"
# 期待: HTTP/1.1 200 OK

# 2. /en/features は常に200（英語、Locationなし）
curl.exe -I "https://nelvo.co/en/features"
# 期待: HTTP/1.1 200 OK

# 3. /（日本語Accept-Language）→ / のまま（200）または /en にリダイレクト（301）
curl.exe -I -H "Accept-Language: ja" "https://nelvo.co/"
# 期待: HTTP/1.1 200 OK または HTTP/1.1 301 Moved Permanently (Location: /)

# 4. /（英語Accept-Language）→ /en にリダイレクト（301、Cookie未設定時）
curl.exe -I -H "Accept-Language: en" "https://nelvo.co/"
# 期待: HTTP/1.1 301 Moved Permanently (Location: /en) または HTTP/1.1 200 OK（Cookieがある場合）

# 5. /en（Cookie=ja）→ / にリダイレクト（301）
curl.exe -I -H "Cookie: language=ja" "https://nelvo.co/en"
# 期待: HTTP/1.1 301 Moved Permanently (Location: /)

# 6. /en（Cookie=en）→ /en のまま（200）
curl.exe -I -H "Cookie: language=en" "https://nelvo.co/en"
# 期待: HTTP/1.1 200 OK
```

## Search Console で再リクエストすべきURL一覧

以下のURLをSearch Consoleで「URL検査」→「インデックス登録をリクエスト」を実行してください：

### 日本語ページ（/）
- https://nelvo.co/
- https://nelvo.co/features
- https://nelvo.co/pricing
- https://nelvo.co/use-cases
- https://nelvo.co/integrations
- https://nelvo.co/faq
- https://nelvo.co/status
- https://nelvo.co/privacy-policy
- https://nelvo.co/terms

### 英語ページ（/en/*）
- https://nelvo.co/en
- https://nelvo.co/en/features
- https://nelvo.co/en/pricing
- https://nelvo.co/en/use-cases
- https://nelvo.co/en/integrations
- https://nelvo.co/en/faq
- https://nelvo.co/en/status
- https://nelvo.co/en/privacy-policy
- https://nelvo.co/en/terms

### 追加で確認すべきこと
1. **robots.txt**: `https://nelvo.co/robots.txt` が正しく `sitemap.xml` を指しているか
2. **sitemap.xml**: `https://nelvo.co/sitemap.xml` が上記すべてのURLを含んでいるか
3. **リダイレクトチェーン**: 過去にリダイレクトエラーが出ていたURLが、現在は200を返すことを確認

## 修正ファイル一覧

| ファイル | 変更内容 |
|---------|---------|
| `src/middleware.ts` | 下層ページでの自動リダイレクトを削除、トップページのみリダイレクト |
| `src/app/en/page.tsx` | x-defaultを'https://nelvo.co/en'から'https://nelvo.co/'に修正 |
| `src/app/en/features/page.tsx` | x-defaultを日本語版に修正 |
| `src/app/en/pricing/page.tsx` | x-defaultを日本語版に修正 |
| `src/app/en/use-cases/page.tsx` | x-defaultを日本語版に修正 |
| `src/app/en/integrations/page.tsx` | x-defaultを日本語版に修正 |
| `src/app/en/faq/page.tsx` | x-defaultを日本語版に修正 |
| `src/app/en/status/page.tsx` | x-defaultを日本語版に修正 |
| `src/app/en/privacy-policy/page.tsx` | x-defaultを日本語版に修正 |
| `src/app/en/terms/page.tsx` | x-defaultを日本語版に修正 |

## 検証結果

- ✅ `npm run build` 成功
- ✅ TypeScriptエラーなし
- ✅ リンターエラーなし
- ✅ sitemap.xmlにすべてのページ（日本語/英語）が含まれている
- ✅ canonicalとhreflangが正しく設定されている
- ✅ x-defaultが日本語版に統一されている

---

**修正日**: 2025-01-10  
**対象ファイル**: 
- `src/middleware.ts`
- `src/app/en/*/page.tsx` (9ファイル)
