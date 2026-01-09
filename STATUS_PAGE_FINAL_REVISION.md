# Statusページ 個人運営対応 最終修正サマリー

## 修正目的
Statusページを「個人運営でも確実に守れる表現」に修正。時間保証・SLA・常時監視・迅速対応などの約束は一切しない。

## 修正内容

### 1. 注意書きの追加

**位置**: ページ上部、全体ステータスの直下

**日本語**:
```
本ページは運営による手動更新です。状況により反映に時間がかかる場合があります。
```

**英語**:
```
This page is updated manually. Status updates may be delayed depending on circumstances.
```

### 2. 問い合わせ導線の修正

**位置**: ページ中段（目立ちすぎないが見つけやすく）

**日本語**:
```
不具合のご報告：support@nelvo.co（確認でき次第、順次対応します）
```

**英語**:
```
Report an issue: support@nelvo.co (We'll review and respond as we can.)
```

**変更点**:
- 「◯日以内」「迅速に」「必ず」などの表現を削除
- 「確認でき次第、順次対応します」/ "We'll review and respond as we can." に変更

### 3. ステータス表記の修正

**日本語**:
- 正常時: 「正常稼働中」
- 障害時: 「一部で障害が発生しています」（degraded/partial）
- 重大障害: 「広範囲で障害が発生しています」（major）
- メンテ: 「メンテナンス中」（maintenance）

**英語**:
- Operational: "Operational"
- Partial outage: "Partial outage"（degraded/partial）
- Major outage: "Major outage"（major）
- Maintenance: "Maintenance"（maintenance）

**変更点**:
- 「一部機能制限」→「一部で障害が発生しています」
- 「部分的な障害」→「一部で障害が発生しています」（degradedと同じ表記）
- 「重大な障害」→「広範囲で障害が発生しています」
- 「Degraded Performance」→「Partial outage」
- メンテナンスステータスを追加

### 4. 最終更新の表記修正

**日本語**:
```
最終更新（手動）：YYYY年MM月DD日 HH:mm
```

**英語**:
```
Last updated (manual): YYYY-MM-DD HH:mm
```

**変更点**:
- 日付フォーマットを指定通りに変更
- 「（手動更新）」→「（手動）」に統一
- 「自動更新」「リアルタイム」などの表現を削除

### 5. 禁止表現の削除確認

**削除した表現**:
- ✅ SLA
- ✅ 24/7
- ✅ 即時
- ✅ 迅速
- ✅ 必ず
- ✅ 保証
- ✅ リアルタイム監視
- ✅ 自動更新
- ✅ within hours
- ✅ immediately
- ✅ guarantee
- ✅ always
- ✅ 常時
- ✅ as soon as possible（問い合わせセクションから削除）

**確認結果**:
- status関連のファイルに禁止表現は残っていない
- 「当社」表記も削除済み

## 修正ファイル一覧

| ファイル | 変更内容 |
|---------|---------|
| `src/lib/translations.ts` (日本語 status) | 注意書き、問い合わせ文言、ステータス表記、最終更新表記を修正 |
| `src/lib/translations.ts` (英語 status) | 注意書き、問い合わせ文言、ステータス表記、最終更新表記を修正 |
| `src/app/status/StatusPageContent.tsx` | 注意書きセクション追加、問い合わせセクション修正、日付フォーマット修正、maintenanceステータス追加 |

## 実装上の要件確認

✅ **UI構成の維持**: 全体ステータス → 影響範囲 → インシデント履歴の構成を維持

✅ **手動更新の設計**: インシデント履歴や影響範囲は配列を追記するだけで運用可能（DB連携不要）

✅ **日英切替対応**: 言語判定に従って上記文言が切り替わる

## 検証結果

- ✅ `npm run build` 成功
- ✅ TypeScriptエラーなし
- ✅ リンターエラーなし
- ✅ 禁止表現がstatus関連のファイルに残っていない
- ✅ 「当社」表記が削除されている

---

**修正日**: 2025-01-10  
**対象ファイル**: 
- `src/app/status/StatusPageContent.tsx`
- `src/lib/translations.ts` (statusセクション)
