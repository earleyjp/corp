# EJP株式会社 公式サイト

Next.js と Tailwind CSS で構築した静的なコーポレートサイトです。GitHub Pages で無料運用できます。

## 主な機能

- 完全静的な Next.js サイト
- GitHub Actions による自動デプロイ
- Formspree 連携のお問い合わせフォーム
- レスポンシブ対応
- TypeScript による型安全な実装

## 開発手順

```bash
npm install
npm run dev
```

開発サーバー: http://localhost:3000

ビルド:
```bash
npm run build
```

## Formspree 設定

1. https://formspree.io にサインアップする
2. 新規フォームを作成し、受信先に info@earley.jp を設定する
3. フォーム ID を取得する（例: f/YOUR_ID）
4. app/components/ContactForm.tsx の送信先 URL を更新する

## デプロイ

main ブランチへ push すると、GitHub Actions で自動デプロイされます。

## ドメイン設定

GitHub Pages の設定画面でカスタムドメイン earley.jp を指定してください。

## 技術スタック

- Next.js 16（静的エクスポート）
- TypeScript
- Tailwind CSS
- GitHub Pages
- Formspree
