import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import SiteNav from "./components/SiteNav";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://earley.jp";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "EJP株式会社",
    template: "%s | EJP株式会社",
  },
  description:
    "EJP株式会社はIoT・組み込み・WEBアプリなど多様なソフトウェア開発と、ボードゲームブランド「EJPゲームズ」を展開する会社です。",
  keywords: [
    "EJP株式会社",
    "EJPゲームズ",
    "ソフトウェア開発",
    "組み込み開発",
    "Webアプリ開発",
    "ボードゲーム",
    "テストプレイ会",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "/",
    siteName: "EJP株式会社",
    title: "EJP株式会社",
    description:
      "EJP株式会社はIoT・組み込み・WEBアプリなど多様なソフトウェア開発と、ボードゲームブランド「EJPゲームズ」を展開する会社です。",
    images: [
      {
        url: "/og/home.svg",
        width: 2000,
        height: 1200,
        alt: "EJP株式会社",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EJP株式会社",
    description:
      "EJP株式会社はIoT・組み込み・WEBアプリなど多様なソフトウェア開発と、ボードゲームブランド「EJPゲームズ」を展開する会社です。",
    images: ["/og/home.svg"],
  },
  icons: {
    icon: [
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={notoSansJP.className}>
      <body className="bg-slate-50 text-gray-900 antialiased">
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "EJP株式会社",
              url: siteUrl,
              logo: `${siteUrl}/ejp-assets/ejp-logo-new.png`,
              sameAs: [
                "https://ejpgames.com",
                "https://github.com/earleyjp",
                "https://twitter.com/earley_jp",
                "https://facebook.com/earleyjp",
                "https://www.linkedin.com/company/earleyjp",
                "https://x.com/otemachispin",
                "https://www.youtube.com/@ejp-games",
              ],
            }),
          }}
        />
        <SiteNav />

        {/* メインコンテンツ（固定ナビ分のパディング） */}
        <main className="min-h-screen pt-16">{children}</main>

        {/* フッター */}
        <footer className="bg-slate-950 text-white py-16 border-t border-white/5">
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
            <div className="mb-6 rounded-2xl border border-gray-800 bg-gray-950/40 p-5">
              <h4 className="font-semibold mb-3 text-gray-300">SNS</h4>
              <div className="flex flex-wrap gap-3 text-sm">
                <a className="rounded-full border border-gray-700 px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition" href="https://twitter.com/earley_jp" target="_blank" rel="noopener noreferrer">X / Twitter</a>
                <a className="rounded-full border border-gray-700 px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition" href="https://facebook.com/earleyjp" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a className="rounded-full border border-gray-700 px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition" href="https://github.com/earleyjp" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a className="rounded-full border border-gray-700 px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition" href="https://www.linkedin.com/company/earleyjp" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a className="rounded-full border border-gray-700 px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition" href="https://x.com/otemachispin" target="_blank" rel="noopener noreferrer">EJP Games X</a>
                <a className="rounded-full border border-gray-700 px-4 py-2 text-gray-300 hover:bg-gray-800 hover:text-white transition" href="https://www.youtube.com/@ejp-games" target="_blank" rel="noopener noreferrer">YouTube</a>
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
