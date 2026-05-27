"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="ja" className={notoSansJP.className}>
      <head>
        <title>EJP株式会社 - 公式サイト</title>
        <meta
          name="description"
          content="EJP株式会社はIoT・組み込み・WEBアプリなど多様なソフトウェア開発と、ボードゲームブランド「EJPゲームズ」を展開する会社です。"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="bg-slate-50 text-gray-900">
        {/* ナビゲーション */}
        <nav className="bg-white border-b border-slate-200 shadow-sm">
          <div className="max-w-5xl mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              <Link href="/" className="flex items-center gap-3">
                <Image
                  src="/ejp-assets/ejp-logo-new.png"
                  alt="EJP株式会社 ロゴ"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-md object-contain"
                  priority
                />
                <span className="text-xl font-bold text-slate-800">EJP株式会社</span>
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden text-slate-700 focus:outline-none text-2xl"
              >
                ☰
              </button>
              <div className={`${isMenuOpen ? "flex flex-col absolute top-16 left-0 right-0 bg-white border-b border-slate-200 p-4 gap-3 z-50" : "hidden"} md:flex md:static md:flex-row md:bg-transparent md:border-0 md:p-0 md:gap-6 items-center`}>
                <Link href="/" className="text-slate-700 hover:text-blue-600 transition text-sm font-medium">
                  ホーム
                </Link>
                <Link href="/about" className="text-slate-700 hover:text-blue-600 transition text-sm font-medium">
                  会社案内
                </Link>
                <Link href="/business" className="text-slate-700 hover:text-blue-600 transition text-sm font-medium">
                  事業内容
                </Link>
                <Link href="/products" className="text-slate-700 hover:text-blue-600 transition text-sm font-medium">
                  製品情報
                </Link>
                <Link
                  href="https://ejpgames.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 hover:text-blue-600 transition text-sm font-medium"
                >
                  EJPゲームズ ↗
                </Link>
                <Link
                  href="/contact"
                  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition"
                >
                  お問い合わせ
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* メインコンテンツ */}
        <main className="min-h-screen bg-slate-50">{children}</main>

        {/* フッター */}
        <footer className="bg-gray-900 text-white py-10 mt-16">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Image
                    src="/ejp-assets/ejp-logo-new.png"
                    alt="EJP株式会社"
                    width={32}
                    height={32}
                    className="h-8 w-8 rounded object-contain bg-white/10 p-0.5"
                  />
                  <span className="font-bold text-lg">EJP株式会社</span>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  IoT・組み込み・WEBアプリなど多様なソフトウェア開発と、ボードゲームブランド「EJPゲームズ」を展開しています。
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-gray-300">サイトマップ</h4>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li><Link href="/about" className="hover:text-white transition">会社案内</Link></li>
                  <li><Link href="/business" className="hover:text-white transition">事業内容</Link></li>
                  <li><Link href="/products" className="hover:text-white transition">製品情報</Link></li>
                  <li><Link href="/contact" className="hover:text-white transition">お問い合わせ</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-gray-300">関連リンク</h4>
                <ul className="space-y-1 text-sm text-gray-400">
                  <li>
                    <a href="https://ejpgames.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                      EJPゲームズ ↗
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/earley_jp" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                      Twitter / X
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/earleyjp" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
              <p>&copy; 2017–2026 EJP株式会社. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
