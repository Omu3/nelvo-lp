# FAQページ 個人運営対応修正サマリー

## 修正目的
LPのよくある質問（FAQ）セクションを、Statusページや利用規約/プライバシーポリシーと同じように、個人運営でも成立する表現に調整。

## 主要な変更点

### 1. 企業前提表現の削除

#### 英語版FAQの「We/we/Our/our/us」→「NELVO」への置換

| 箇所 | 修正前 | 修正後 |
|------|--------|--------|
| FAQ説明文 | We've compiled information | Information is compiled |
| 連携サービス | We securely connect | NELVO securely connects |
| データ同期 | we automatically retrieve | NELVO automatically retrieves |
| セキュリティ | We do not acquire | NELVO does not acquire |
| セキュリティ | We securely connect | NELVO securely connects |
| LP FAQ - プラットフォーム | We support major | NELVO supports major |
| LP FAQ - データ | we do not acquire | NELVO does not acquire |
| LP FAQ - ガイド | We provide guides | Guides are available |
| LP FAQ - 問い合わせ | We also accept | Simple inquiries are also accepted |
| Security Lead | Data protection is our top priority | Data protection is a top priority for NELVO |
| Security - 監査 | We conduct regular | NELVO conducts regular |

#### 日本語版FAQの表現調整

| 箇所 | 修正前 | 修正後 |
|------|--------|--------|
| Security Lead | NELVOは、お客様のデータを最優先に保護します | NELVOは、お客様のデータを優先的に保護します |
| Security - 監査 | セキュリティ専門家による定期的な脆弱性診断を実施しています | 定期的なセキュリティレビューと脆弱性診断を行います |
| Security - インフラ | 世界的基準のセキュアなインフラストラクチャ上で運用されています | セキュアなインフラストラクチャ上で運用されています |

### 2. 過度な約束表現の削除

#### 期限の断定的表現を削除

| 箇所 | 修正前 | 修正後 |
|------|--------|--------|
| 英語版 Security - インフラ | with 24/7 monitoring | with monitoring |
| 日本語版 Security - 監査 | 実施しています（断定的） | 行います（努力義務） |
| 日本語版 Security - Lead | 最優先（断定的） | 優先的に（努力義務） |

### 3. 修正箇所一覧

#### FAQページ（`/faq`）

**日本語版 (`src/lib/translations.ts` - `ja.pages.faq`)**:
- ✅ 問い合わせ先: 「可能な範囲で順次対応いたします」（既に修正済み）

**英語版 (`src/lib/translations.ts` - `en.pages.faq`)**:
- ✅ 説明文: "We've compiled" → "Information is compiled"
- ✅ 連携サービス: "We securely connect" → "NELVO securely connects"
- ✅ データ同期: "we automatically retrieve" → "NELVO automatically retrieves"
- ✅ セキュリティ: "We do not acquire" → "NELVO does not acquire"
- ✅ セキュリティ: "We securely connect" → "NELVO securely connects"
- ✅ 問い合わせ先: "We will respond as soon as possible"（既に修正済み）

#### LPのFAQコンポーネント（`/`）

**日本語版 (`src/lib/translations.ts` - `ja.faq`)**:
- ✅ 既に企業前提表現なし（確認済み）

**英語版 (`src/lib/translations.ts` - `en.faq`)**:
- ✅ プラットフォーム: "We support major" → "NELVO supports major"
- ✅ データ: "we do not acquire" → "NELVO does not acquire"
- ✅ ガイド: "We provide guides" → "Guides are available"
- ✅ 問い合わせ: "We also accept" → "Simple inquiries are also accepted"

#### Securityセクション（`/`）

**日本語版 (`src/lib/translations.ts` - `ja.security`)**:
- ✅ Lead: 「最優先」→「優先的に」
- ✅ 監査: 「セキュリティ専門家による定期的な脆弱性診断を実施しています」→「定期的なセキュリティレビューと脆弱性診断を行います」
- ✅ インフラ: 「世界的基準のセキュアな」→「セキュアな」（「世界的基準」を削除）

**英語版 (`src/lib/translations.ts` - `en.security`)**:
- ✅ Lead: "Data protection is our top priority" → "Data protection is a top priority for NELVO"
- ✅ 監査: "We conduct regular" → "NELVO conducts regular"
- ✅ インフラ: "with 24/7 monitoring" → "with monitoring"

## 修正後の特徴

✅ **企業前提表現を削除**: 「We/we/Our/our/us」を「NELVO」または「運営者/Operator」に統一

✅ **過度な約束表現を削除**: 「24/7監視」「世界的基準」「最優先」などの断定的表現を削除

✅ **期限の断定を削除**: 「実施しています」→「行います」など、努力義務に変更

✅ **個人運営でも成立する表現**: Statusページや利用規約/プライバシーポリシーと同じ約束レベルに統一

## 検証結果

- ✅ `npm run build` 成功
- ✅ TypeScriptエラーなし
- ✅ リンターエラーなし
- ✅ 表示崩れなし

---

**修正日**: 2025-01-10  
**対象ファイル**: `src/lib/translations.ts`
