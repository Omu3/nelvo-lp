# middleware.ts リダイレクト修正 最終版

## 修正目的
Google Search Consoleで /features と /pricing が「リダイレクト エラー」になる問題を解消。
下層ページでは言語リダイレクトを一切行わず、常に200を返す。

## 修正内容

### 処理順序（重要）

1. **localhost guard**: 開発環境ではリダイレクトを無効化
2. **www削除**: www.nelvo.co → nelvo.co にリダイレクト
3. **HTTP → HTTPS**: HTTPリクエストをHTTPSにリダイレクト
4. **下層ページチェック（優先）**: `/features`, `/pricing` 等は即座に200を返す（リダイレクトしない）
5. **トップページのみリダイレクト**: `/` と `/en` のみ、Accept-Language/Cookieを見てリダイレクト
6. **Path Consolidation**: 未知のパスは `/` にリダイレクト

### 重要なポイント

#### 下層ページの処理順序
```typescript
// セクション3: 下層ページは最優先で処理（セクション4より前）
const seoPages = ['/features', '/pricing', '/use-cases', '/integrations', '/faq', '/status', '/privacy-policy', '/terms'];
const isSeoPage = seoPages.some(page => pathname === page || pathname === `/en${page}`);

if (isSeoPage) {
    // 下層ページは常に200を返す（リダイレクトしない）
    return NextResponse.next(); // ここで処理が終了
}
```

#### トップページの処理
```typescript
// セクション4: トップページのみ処理（下層ページは既にreturn済み）
if (pathname === '/' || pathname === '/en') {
    // Cookie > Accept-Language > デフォルト（日本語）
    // リダイレクト処理...
}
```

## 動作確認

### 下層ページ（常に200）

```bash
# /features は常に200（日本語ページ、Locationなし）
curl.exe -I "https://nelvo.co/features"
# 期待: HTTP/1.1 200 OK

# Accept-Language: en でも /features は200（リダイレクトしない）
curl.exe -I -H "Accept-Language: en" "https://nelvo.co/features"
# 期待: HTTP/1.1 200 OK

# /en/features は常に200（英語ページ、Locationなし）
curl.exe -I "https://nelvo.co/en/features"
# 期待: HTTP/1.1 200 OK
```

### トップページ（リダイレクトあり）

```bash
# /（Cookie未設定、Accept-Language: ja）→ / のまま（200）
curl.exe -I -H "Accept-Language: ja" "https://nelvo.co/"
# 期待: HTTP/1.1 200 OK

# /（Cookie未設定、Accept-Language: en）→ /en にリダイレクト（301）
curl.exe -I -H "Accept-Language: en" "https://nelvo.co/"
# 期待: HTTP/1.1 301 Moved Permanently
# Location: https://nelvo.co/en

# /en（Cookie=ja）→ / にリダイレクト（301）
curl.exe -I -H "Cookie: language=ja" "https://nelvo.co/en"
# 期待: HTTP/1.1 301 Moved Permanently
# Location: https://nelvo.co/

# /en（Cookie=en）→ /en のまま（200）
curl.exe -I -H "Cookie: language=en" "https://nelvo.co/en"
# 期待: HTTP/1.1 200 OK
```

## 検証結果

- ✅ `npm run build` 成功
- ✅ TypeScriptエラーなし
- ✅ リンターエラーなし
- ✅ 下層ページでのリダイレクトが削除されている
- ✅ トップページのみリダイレクト処理が実行される

---

**修正日**: 2025-01-10  
**対象ファイル**: `src/middleware.ts`
