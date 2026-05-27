import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SocialShare from "../components/SocialShare";
import AnimatedSection from "../components/AnimatedSection";

export const metadata: Metadata = {
  title: "事業内容",
  description:
    "EJP株式会社のソフトウェア開発、自社製品の開発、ボードゲーム制作・販売についてご紹介します。",
  alternates: { canonical: "/business" },
  openGraph: {
    title: "事業内容 | EJP株式会社",
    description:
      "EJP株式会社のソフトウェア開発、自社製品の開発、ボードゲーム制作・販売についてご紹介します。",
    url: "/business",
    images: [{ url: "/og/business.svg", width: 1200, height: 630, alt: "事業内容 | EJP株式会社" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "事業内容 | EJP株式会社",
    description:
      "EJP株式会社のソフトウェア開発、自社製品の開発、ボードゲーム制作・販売についてご紹介します。",
    images: ["/og/business.svg"],
  },
};

export default function Business() {
  return (
    <div>
      {/* ページヘッダー */}
      <section className="relative bg-slate-950 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/ejp-assets/hero-tech.jpg"
            alt="テクノロジー"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 hero-grid opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 to-slate-950/60" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4">
          <AnimatedSection>
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-[0.2em] mb-3">Business</p>
            <h1 className="text-5xl font-bold text-white mb-4">事業内容</h1>
            <p className="text-slate-400 max-w-xl text-lg">
              ソフトウェア開発・自社製品・ボードゲームまで、幅広い分野でものづくりに取り組んでいます。
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-12">

        {/* ソフトウェア開発 */}
        <AnimatedSection>
          <section className="game-card card-glow rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-2xl shadow-lg">
                💻
              </div>
              <div>
                <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest">Software Development</p>
                <h2 className="text-2xl font-bold text-slate-900">ソフトウェア開発</h2>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed mb-10 text-base">
              IoT・組み込み・WEBアプリなど多様なソフトウェア開発の実績があります。ネットワークプロトコル開発のノウハウを活かしたインフラ整備や、開発をスピードアップするためのオープンソースソフトウェアのご提案も行っています。
            </p>

            <h3 className="text-base font-bold text-slate-700 mb-5 flex items-center gap-2">
              <span className="w-1 h-5 rounded bg-blue-500 inline-block" />
              主なソフトウェア開発実績
            </h3>
            <div className="grid md:grid-cols-3 gap-5 mb-8">
              {[
                {
                  title: "組み込みソフトウェア",
                  items: ["漏水探知機器（漏水音を分析）の開発", "次世代ネットワーク装置のプロトコル開発", "無線基地局用のプロトコル開発", "IoTに関連した新プロトコルの研究開発"],
                },
                {
                  title: "アプリケーション",
                  items: ["知財管理用WEBアプリの開発", "マンション入退室管理用WEBアプリの開発", "電子回路・基板設計情報管理アプリ", "社員情報管理アプリの開発"],
                },
                {
                  title: "プロトコル開発",
                  items: ["ERP (Ethernet Ring Protection)", "MPLS-TP OAM", "LACP (Link Aggregation Control Protocol)", "SNMP / DNSSEC / GMPLS など"],
                },
              ].map((card) => (
                <div key={card.title} className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                  <h4 className="font-bold text-slate-800 mb-4 text-sm">{card.title}</h4>
                  <ul className="space-y-2">
                    {card.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* 自社製品の開発 */}
        <AnimatedSection delay={0.1}>
          <section className="game-card card-glow rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-500 flex items-center justify-center text-2xl shadow-lg">
                ⚙️
              </div>
              <div>
                <p className="text-violet-600 font-semibold text-xs uppercase tracking-widest">Product Development</p>
                <h2 className="text-2xl font-bold text-slate-900">自社製品の開発</h2>
              </div>
            </div>
            <p className="text-slate-600 leading-relaxed mb-8 text-base">
              組み込み・制御系ソフトウェアの開発経験を活用して、自社製品の開発も行っております。ハードウェア選定やデバイスの認証取得などについても豊富なノウハウで開発を進めています。
            </p>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { title: "デバイス開発", body: "IoT関連デバイスの企画・設計・製造" },
                { title: "アプリ・サービス開発", items: ["iPhoneアプリ開発", "スマートフォン用ボードゲームアプリ", "WEBサービス・ECサービス"] },
                { title: "OSSポーティング", body: "OSSの未対応プラットフォームへのポーティング" },
              ].map((card) => (
                <div key={card.title} className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                  <h4 className="font-bold text-slate-800 mb-3 text-sm">{card.title}</h4>
                  {"body" in card ? (
                    <p className="text-sm text-slate-600">{card.body}</p>
                  ) : (
                    <ul className="space-y-2">
                      {card.items?.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* ボードゲーム制作・販売 */}
        <AnimatedSection delay={0.2}>
          <section className="relative overflow-hidden rounded-3xl">
            {/* 背景画像 */}
            <div className="absolute inset-0">
              <Image
                src="/ejp-assets/boardgame-components.jpg"
                alt="ボードゲーム"
                fill
                className="object-cover opacity-10"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-amber-50/95 to-orange-50/95" />
            </div>
            <div className="relative border border-amber-200 rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-2xl shadow-lg">
                  🎲
                </div>
                <div>
                  <p className="text-amber-600 font-semibold text-xs uppercase tracking-widest">Board Games</p>
                  <h2 className="text-2xl font-bold text-slate-900">ボードゲーム制作・販売</h2>
                </div>
              </div>
              <p className="text-slate-700 leading-relaxed mb-8 text-base">
                「EJPゲームズ」ブランドにてボードゲームの制作・販売を行っています。企画から製造・プロモーションまで一貫して手がけています。
              </p>

              <div className="grid md:grid-cols-2 gap-3 mb-8">
                {[
                  "ゲームの根幹となるルール設計",
                  "目的やフレーバーとなるシナリオ・世界観",
                  "キャラクター・モチーフの企画・デザイン",
                  "かわいらしいイラストやリアルなデザイン",
                  "品質保証のためのテストプレイ",
                  "製造に関するデータ作成・印刷",
                  "プロモーション動画やマンガ制作",
                  "ECサイトを通じた販売・流通",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 bg-white/70 backdrop-blur-sm rounded-xl p-3 border border-amber-100">
                    <span className="text-amber-500 font-bold text-sm mt-0.5 flex-shrink-0">✓</span>
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-shadow"
                >
                  製品一覧を見る →
                </Link>
                <a
                  href="https://ejpgames.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-amber-300 text-amber-800 bg-white/60 px-6 py-3 rounded-xl font-medium hover:bg-amber-50 transition-colors text-sm"
                >
                  EJPゲームズ公式サイト ↗
                </a>
              </div>
            </div>
          </section>
        </AnimatedSection>

      </div>

      <SocialShare
        path="/business"
        title="事業内容 | EJP株式会社"
        description="ソフトウェア開発、自社製品、ボードゲーム事業"
      />
    </div>
  );
}
