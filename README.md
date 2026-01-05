# NELVO LP

NELVO Landing Page project.

## Local Development

### 起動コマンド
```bash
npm run dev
```
または
```bash
npx next dev -p 3001
```

### アクセスURL
- [http://localhost:3001](http://localhost:3001)
- [http://127.0.0.1:3001](http://127.0.0.1:3001)

## SEO Settings

このプロジェクトは以下のSEO最適化が行われています。

- **URL正規化**: `www`なしの `https://nelvo.co` に統一されます（301リダイレクト）。
- **多言語対応**: `/` (JA) と `/en` (EN) の2つのルートがあります。
- **Hreflang**: 正しい `hreflang` タグが各ページに設定されています。
- **Index**: 検索エンジンに正しくインデックスされるよう `robots` 設定が行われています。
- **Favicon**: `favicon.png` が明示的に指定されています。
