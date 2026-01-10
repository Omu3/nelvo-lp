# Search Console で再リクエストすべきURL一覧

## 日本語ページ（/）
1. https://nelvo.co/
2. https://nelvo.co/features
3. https://nelvo.co/pricing
4. https://nelvo.co/use-cases
5. https://nelvo.co/integrations
6. https://nelvo.co/faq
7. https://nelvo.co/status
8. https://nelvo.co/privacy-policy
9. https://nelvo.co/terms

## 英語ページ（/en/*）
1. https://nelvo.co/en
2. https://nelvo.co/en/features
3. https://nelvo.co/en/pricing
4. https://nelvo.co/en/use-cases
5. https://nelvo.co/en/integrations
6. https://nelvo.co/en/faq
7. https://nelvo.co/en/status
8. https://nelvo.co/en/privacy-policy
9. https://nelvo.co/en/terms

## 確認手順
1. Search Console → URL検査
2. 各URLを入力して「テスト実行」
3. 「インデックス登録をリクエスト」を実行
4. ステータスが「有効」であることを確認

## 確認ポイント
- ステータスコード: 200 OK
- canonical: そのURL自体を指していること
- hreflang: 日本語版と英語版が相互に指し合っていること
- x-default: 日本語版（/...）を指していること
