# Status ページ本番運用整備 修正サマリー

## 修正目的
`/status` ページを「本番運用ページ」として整備。個人運営でも無理なく回せる仕様に調整。

## 主要な変更点

### 1. 文章の全面見直し

#### 個人運営でも成立する表現に調整
- ✅ **「当社」などの企業前提の表現を削除**: 「運営」or「NELVO」表記に統一
- ✅ **返信・復旧期限の断定を削除**: 
  - 修正前: 「障害情報は随時更新いたします」
  - 修正後: 「可能な範囲で順次対応いたします」（英語版: "we will respond as soon as possible"）
- ✅ **「最終更新」に「手動更新」を明記**:
  - 日本語: 「最終更新（手動更新）」
  - 英語: "Last updated (manual)"

#### FAQセクションの期限表現も修正
- ✅ **FAQの「24時間以内に返信」を削除**:
  - 修正前: "We typically respond within 24 hours."
  - 修正後: "We will respond as soon as possible."

### 2. ページ構成の本番運用対応

#### 上部: 現在の稼働状況
- ✅ **稼働状況タイプの追加**:
  - Operational（正常稼働中）
  - Degraded Performance（一部機能制限）
  - Partial Outage（部分的な障害）
  - Major Outage（重大な障害）
- ✅ **現在のステータス表示**: `currentStatus` 変数で管理（手動更新可能）
- ✅ **ステータスごとの視覚的表現**: 色・アイコン・ラベルの統一

#### 中段: 影響範囲の固定表示
- ✅ **5つのコンポーネントを固定表示**:
  - Website（ウェブサイト）
  - Auth（認証）
  - Billing（決済）
  - Integrations（連携）
  - Dashboard（ダッシュボード）
- ✅ **各コンポーネントのステータス表示**: `componentStatus` オブジェクトで管理（手動更新可能）
- ✅ **グリッドレイアウト**: レスポンシブ対応（1列/2列）

#### 下段: インシデント履歴
- ✅ **Incident History セクション追加**:
  - 直近5件まで表示
  - 初期状態: 「報告されたインシデントはありません」/ "No incidents reported"
- ✅ **インシデントデータを配列で管理**: `incidents` 配列（手動で追加・更新可能）
- ✅ **インシデントステータス**:
  - Resolved（解決済み）
  - Investigating（調査中）
  - Monitoring（監視中）
- ✅ **インシデント表示フォーマット**:
  - 日時
  - タイトル
  - ステータスバッジ
  - 説明文

### 3. 連絡導線の一本化

#### support@nelvo.co への統一
- ✅ **連絡先を一本化**: 「障害・不具合の連絡先」として `support@nelvo.co` のみ表示
- ✅ **mailto リンク実装**: クリックでメールクライアントが開く
- ✅ **重複文言の整理**: 旧来の複数の連絡先表記を削除

### 4. 将来の移行に関する表現の弱化

#### status.nelvo.co への言及を弱める
- ✅ **約束表現を削除**:
  - 修正前: 「将来、status.nelvo.co などの専用ページに移行する予定です。」
  - 修正後: 「将来的に status.nelvo.co などの専用ページに移行する可能性があります。」（英語版: "We may migrate to a dedicated page such as status.nelvo.co in the future."）

## コード構造の変更

### StatusPageContent.tsx の全面書き直し

#### 新しいデータ構造
```typescript
// インシデント履歴データ（手動で追加・更新可能）
const incidents: Array<{
  date: string;
  title: string;
  status: 'resolved' | 'investigating' | 'monitoring';
  description: string;
}> = [];

// 現在の稼働状況（手動で更新）
const currentStatus: StatusType = 'operational';

// 各コンポーネントのステータス（手動で更新）
const componentStatus: Record<string, StatusType> = {
  website: 'operational',
  auth: 'operational',
  billing: 'operational',
  integrations: 'operational',
  dashboard: 'operational',
};
```

#### 新しいUIコンポーネント構造
1. **Current Status Section**: 現在の稼働状況を大きく表示
2. **Component Status Section**: 影響範囲を5つのコンポーネントで表示
3. **Incident History Section**: インシデント履歴を表示（空の場合はメッセージ表示）
4. **Contact Section**: 連絡先を表示（mailtoリンク付き）
5. **Future Note Section**: 将来の移行に関する弱い言及

### translations.ts の更新

#### 日本語版 status セクション
```typescript
status: {
    title: "サービスステータス",
    description: "NELVOのサービス稼働状況をご確認いただけます。",
    statusTypes: {
        operational: "正常稼働中",
        degraded: "一部機能制限",
        partial: "部分的な障害",
        major: "重大な障害",
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
    lastUpdated: "最終更新（手動更新）",
    contactNote: "障害・不具合の連絡先",
    contactEmail: "support@nelvo.co",
    futureNote: "将来的に status.nelvo.co などの専用ページに移行する可能性があります。",
},
```

#### 英語版 status セクション
```typescript
status: {
    title: "Service Status",
    description: "Check the operational status of NELVO services.",
    statusTypes: {
        operational: "Operational",
        degraded: "Degraded Performance",
        partial: "Partial Outage",
        major: "Major Outage",
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
    lastUpdated: "Last updated (manual)",
    contactNote: "Report issues",
    contactEmail: "support@nelvo.co",
    futureNote: "We may migrate to a dedicated page such as status.nelvo.co in the future.",
},
```

## 修正箇所一覧

| ファイル | 変更内容 |
|---------|---------|
| `src/app/status/StatusPageContent.tsx` | 全面書き直し（本番運用ページの構成に変更） |
| `src/lib/translations.ts` (日本語) | status セクションを新しい構造に対応 |
| `src/lib/translations.ts` (英語) | status セクションを新しい構造に対応 |
| `src/lib/translations.ts` (FAQ) | 「24時間以内に返信」表現を削除 |

## 検証結果

- ✅ `npm run build` 成功
- ✅ TypeScriptエラーなし
- ✅ リンターエラーなし
- ✅ 表示崩れなし（レスポンシブ対応）
- ✅ 個人運営でも成立する表現に調整済み

## 今後の運用方法

### ステータス更新方法
1. **現在の稼働状況**: `currentStatus` 変数を変更（'operational' | 'degraded' | 'partial' | 'major'）
2. **各コンポーネントのステータス**: `componentStatus` オブジェクトを変更
3. **インシデント履歴**: `incidents` 配列に新しいインシデントオブジェクトを追加

### インシデント追加例
```typescript
const incidents: Array<{
  date: string;
  title: string;
  status: 'resolved' | 'investigating' | 'monitoring';
  description: string;
}> = [
  {
    date: '2026-01-10 14:30',
    title: 'Dashboard response time increased',
    status: 'resolved',
    description: 'Dashboard response time was temporarily increased. The issue has been resolved.',
  },
];
```

---

**修正日**: 2025-01-10  
**対象ファイル**: 
- `src/app/status/StatusPageContent.tsx`
- `src/lib/translations.ts`
