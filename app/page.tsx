import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SocialShare from "./components/SocialShare";
import HeroSection from "./components/HeroSection";
import AnimatedSection from "./components/AnimatedSection";
import GameParticles from "./components/GameParticles";
import GlitchText from "./components/GlitchText";
import ScanlineOverlay from "./components/ScanlineOverlay";
import MouseTrackCard from "./components/MouseTrackCard";
import SplashScreenClient from "./components/SplashScreenClient";

export const metadata: Metadata = {
  title: "EJP株式会社",
  description:
    "EJP株式会社の公式サイト。IoT・組み込み・WEBアプリの開発と、EJPゲームズによるボードゲーム制作・販売を行っています。",
  alternates: { canonical: "/" },
  openGraph: {
    title: "EJP株式会社",
    description:
      "EJP株式会社の公式サイト。IoT・組み込み・WEBアプリの開発と、EJPゲームズによるボードゲーム制作・販売を行っています。",
    url: "/",
    images: [{ url: "/og/home.svg", width: 1200, height: 630, alt: "EJP株式会社" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "EJP株式会社",
    description:
      "EJP株式会社の公式サイト。IoT・組み込み・WEBアプリの開発と、EJPゲームズによるボードゲーム制作・販売を行っています。",
    images: ["/og/home.svg"],
  },
};

const businessCards = [
  {
    icon: "💻",
    iconBg: "from-blue-500 to-cyan-500",
    label: "Software",
    title: "ソフトウェア開発",
    description:
      "IoT・組み込みから WEBアプリまで、多様なソフトウェア開発の実績があります。ネットワークプロトコル開発のノウハウを活かした提案も行っています。",
    tags: ["組み込み・制御系", "WEBアプリ", "ネットワーク", "IoT"],
    href: "/business",
    linkLabel: "詳細を見る",
  },
  {
    icon: "🎲",
    iconBg: "from-amber-500 to-orange-500",
    label: "Games",
    title: "ボードゲーム制作・販売",
    description:
      "「EJPゲームズ」ブランドにてボードゲームの企画・制作・販売を行っています。ルール設計から印刷・製造まで一貫して手がけています。",
    tags: ["ゲームデザイン", "イラスト制作", "テストプレイ", "製造・販売"],
    href: "/products",
    linkLabel: "製品一覧を見る",
  },
];

const snsLinks = [
  { label: "X / Twitter", href: "https://twitter.com/earley_jp", icon: "𝕏" },
  { label: "Facebook", href: "https://facebook.com/earleyjp", icon: "f" },
  { label: "GitHub", href: "https://github.com/earleyjp", icon: "⌨" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/earleyjp", icon: "in" },
  { label: "EJP Games X", href: "https://x.com/otemachispin", icon: "🎲" },
  { label: "YouTube", href: "https://www.youtube.com/@ejp-games", icon: "▶" },
];

export default function Home() {
  return (
    <div>
      {/* スプラッシュスクリーン */}
      <SplashScreenClient />

      {/* ヒーロー（全画面・暗色・アニメーション） */}
      <HeroSection />

      {/* ========== 事業紹介 ========== */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">Our Business</p>
            <h2 className="text-4xl font-bold text-slate-900">
              <GlitchText text="主な事業" />
            </h2>
            <p className="text-slate-500 mt-4 max-w-lg mx-auto">
              ソフトウェアとアナログゲーム、二つの領域で「つくる」ことに向き合っています。
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {businessCards.map((card, i) => (
              <AnimatedSection key={card.title} delay={i * 0.15} direction="up">
                <GameParticles className="h-full">
                  <MouseTrackCard className="game-card card-glow rounded-3xl p-8 h-full flex flex-col">
                    {/* アイコン */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${card.iconBg} text-2xl mb-5 shadow-lg`}>
                      {card.icon}
                    </div>
                    <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{card.label}</p>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{card.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-5 flex-1">{card.description}</p>
                    {/* タグ */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200"
                      >
                        {tag}
                      </span>
                    ))}
                    </div>
                    <Link
                      href={card.href}
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all"
                    >
                      {card.linkLabel}
                      <span className="text-lg">→</span>
                    </Link>
                  </MouseTrackCard>
                </GameParticles>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ========== テック紹介（画像あり） ========== */}
      <section className="relative overflow-hidden bg-slate-950 py-28">
        <div className="absolute inset-0 hero-grid opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <p className="text-blue-400 font-semibold text-sm uppercase tracking-[0.2em] mb-4">Technology</p>
              <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
                最先端技術で<br />
                <span className="gradient-text-blue">課題を解決する</span>
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                ネットワークプロトコルから組み込みシステム、クラウドアプリまで。
                IoTデバイスと連携するソフトウェアを一貫して設計・開発しています。
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {["組み込み / IoT", "WEBアプリ開発", "ネットワーク", "クラウド連携"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <Link
                href="/business"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-blue-500 transition-colors"
              >
                事業詳細 →
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/30 border border-blue-800/30">
                <Image
                  src="/ejp-assets/hero-tech.jpg"
                  alt="テクノロジー開発"
                  width={600}
                  height={400}
                  className="object-cover w-full h-72 md:h-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex gap-2">
                    {["IoT", "組み込み", "WEB"].map((tag) => (
                      <span key={tag} className="text-xs font-bold px-3 py-1 rounded-full bg-blue-600/80 text-white backdrop-blur-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ========== EJP Games ========== */}
      <ScanlineOverlay intensity="low" animateOnHover={true}>
        <section className="relative bg-white py-28 overflow-hidden">
          {/* 背景デコレーション */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-50 rounded-full blur-3xl opacity-60 translate-y-1/2 -translate-x-1/3" />

          <div className="relative max-w-5xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* 画像側 */}
              <AnimatedSection direction="left" delay={0.1}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-400/20 rounded-3xl blur-2xl" />
                  <div className="relative rounded-3xl overflow-hidden shadow-xl shadow-amber-900/10 border border-amber-200/50 holographic-card">
                    <Image
                      src="/ejp-assets/boardgame-components.jpg"
                      alt="ボードゲームコンポーネント"
                      width={600}
                      height={420}
                      className="object-cover w-full h-72 md:h-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-amber-950/30 to-transparent" />
                  </div>
                  {/* フローティングロゴ */}
                  <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl p-4 shadow-xl border border-amber-100">
                    <Image
                      src="/ejp-assets/ejpgames-logo.png"
                      alt="EJPゲームズ"
                      width={140}
                      height={38}
                      className="h-9 w-auto object-contain"
                    />
                  </div>
                </div>
              </AnimatedSection>

              {/* テキスト側 */}
              <AnimatedSection direction="right" delay={0.2}>
                <p className="text-amber-600 font-semibold text-sm uppercase tracking-[0.2em] mb-4">EJP Games Brand</p>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                  アナログゲームで<br />
                <span className="bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                  遊ぶ楽しさを届ける
                </span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                本格ボードゲーム・パーティーゲーム・知育ゲームなど多彩なアナログゲームを
                企画・開発・販売しています。ルール設計からプロモーション動画まで一貫制作。
              </p>
              <div className="grid grid-cols-2 gap-3 mb-8">
                {["ゲームデザイン", "イラスト制作", "テストプレイ", "製造・販売", "プロモ動画", "電子版開発"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-slate-600 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 flex-shrink-0" />
                    {item}
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
                  className="inline-flex items-center gap-2 border border-slate-200 text-slate-700 px-6 py-3 rounded-xl font-medium hover:border-amber-300 hover:bg-amber-50 transition-colors text-sm"
                >
                  公式サイト ↗
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
        </section>
      </ScanlineOverlay>

      {/* ========== SNS ========== */}
      <section className="bg-slate-50 py-24 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3">Follow Us</p>
            <h2 className="text-3xl font-bold text-slate-900">SNSで最新情報を発信中</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {snsLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 bg-white rounded-2xl border border-slate-200 p-5 hover:border-blue-300 hover:shadow-md transition-all group"
                >
                  <span className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 group-hover:bg-blue-50 text-slate-600 font-bold text-sm transition-colors">
                    {s.icon}
                  </span>
                  <span className="font-medium text-slate-700 group-hover:text-blue-600 transition-colors">
                    {s.label}
                  </span>
                  <span className="ml-auto text-slate-400 group-hover:text-blue-400 transition-colors text-sm">↗</span>
                </a>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ========== CTA ========== */}
      <section className="relative bg-slate-950 py-28 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-30" />
        {/* グロー */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />

        <AnimatedSection className="relative max-w-3xl mx-auto px-4 text-center">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-[0.2em] mb-4">Contact</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            ご相談・お問い合わせ
          </h2>
          <p className="text-slate-400 mb-10 text-lg leading-relaxed max-w-xl mx-auto">
            ソフトウェア開発のご依頼、ボードゲームに関するお問合せ、
            コラボレーションのご提案など、お気軽にどうぞ。
          </p>
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 bg-blue-600 text-white px-12 py-5 rounded-2xl font-semibold text-lg overflow-hidden shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 transition-shadow"
          >
            <span className="relative z-10">お問い合わせフォーム</span>
            <span className="relative z-10 text-xl group-hover:translate-x-1 transition-transform">→</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </AnimatedSection>
      </section>

      <SocialShare
        path="/"
        title="EJP株式会社"
        description="IoT・組み込み・WEBアプリ開発とEJPゲームズの情報"
      />
    </div>
  );
}
