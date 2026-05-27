"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const floatingPieces = [
  { emoji: "🎲", x: "8%", y: "20%", delay: 0, size: "text-4xl" },
  { emoji: "♟", x: "88%", y: "15%", delay: 1.2, size: "text-3xl" },
  { emoji: "🎯", x: "5%", y: "70%", delay: 0.6, size: "text-2xl" },
  { emoji: "🔌", x: "92%", y: "65%", delay: 1.8, size: "text-2xl" },
  { emoji: "🃏", x: "78%", y: "80%", delay: 0.3, size: "text-3xl" },
  { emoji: "⚙️", x: "15%", y: "85%", delay: 1.5, size: "text-2xl" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 -mt-16 pt-16">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <Image
          src="/ejp-assets/hero-boardgame.jpg"
          alt="ボードゲーム背景"
          fill
          className="object-cover opacity-20"
          priority
        />
        {/* グリッドオーバーレイ */}
        <div className="absolute inset-0 hero-grid" />
        {/* グラデーションオーバーレイ */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/40 to-slate-950/90" />
        {/* 下側をサイトbgへ自然につなぐ */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* フローティング装飾 */}
      {floatingPieces.map((piece) => (
        <motion.div
          key={piece.emoji}
          className={`absolute ${piece.size} select-none pointer-events-none`}
          style={{ left: piece.x, top: piece.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            y: [0, -16, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            opacity: { duration: 4, delay: piece.delay, repeat: Infinity },
            y: { duration: 6, delay: piece.delay, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 8, delay: piece.delay, repeat: Infinity, ease: "easeInOut" },
          }}
          whileInView={{ opacity: 1 }}
        >
          {piece.emoji}
        </motion.div>
      ))}

      {/* メインコンテンツ */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* ロゴ */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl bg-blue-500/30 blur-2xl animate-pulse-glow" />
            <Image
              src="/ejp-assets/ejp-logo-new.png"
              alt="EJP株式会社 ロゴ"
              width={100}
              height={100}
              className="relative h-24 w-24 rounded-3xl object-contain border border-white/20 bg-white/10 backdrop-blur-sm p-2"
              priority
            />
          </div>
        </motion.div>

        {/* キャッチコピー */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-[0.3em] mb-4">
            MAKING THINGS THAT MATTER
          </p>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-glow"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          EJP
          <span className="gradient-text">株式会社</span>
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-slate-300 mb-4 font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          「モノ」づくりの楽しさを探求し続けている会社です。
        </motion.p>

        <motion.p
          className="text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed text-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          IoT・組み込み・WEBアプリなど多様なソフトウェア開発から、
          ボードゲームの企画・製造・販売まで、
          幅広い分野でものづくりに取り組んでいます。
        </motion.p>

        {/* CTAボタン */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link
            href="/business"
            className="group relative bg-blue-600 text-white px-10 py-4 rounded-xl font-semibold overflow-hidden shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 transition-shadow duration-300"
          >
            <span className="relative z-10">事業内容を見る</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-violet-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          <Link
            href="/contact"
            className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-10 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors duration-300"
          >
            お問い合わせ
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
