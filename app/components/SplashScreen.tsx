"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === "undefined") return false;
    return !localStorage.getItem("ejp_splash_shown");
  });

  useEffect(() => {
    if (!isVisible || typeof window === "undefined") return;

    const timer = setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem("ejp_splash_shown", "true");
    }, 3000);

    return () => clearTimeout(timer);
  }, [isVisible]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-linear-to-b from-slate-950 via-slate-900 to-slate-950"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* ネットワーク風背景 */}
          <div className="absolute inset-0 hero-grid opacity-20" />
          
          {/* 動的な光の背景 */}
          <motion.div
            className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* コンテンツ */}
          <div className="relative z-10 text-center">
            {/* ロゴ */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="mb-8 flex justify-center"
            >
              <div className="relative">
                <motion.div
                  className="absolute inset-0 rounded-3xl bg-blue-500/30 blur-2xl"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <Image
                  src="/ejp-assets/ejp-logo-new.png"
                  alt="EJP株式会社"
                  width={120}
                  height={120}
                  loading="eager"
                  className="relative h-32 w-32 rounded-3xl object-contain border border-white/20 bg-white/10 backdrop-blur-sm p-3"
                />
              </div>
            </motion.div>

            {/* 会社名 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                EJP<span className="gradient-text">株式会社</span>
              </h1>
              <p className="text-slate-400 text-lg">
                モノづくりの楽しさを追求する
              </p>
            </motion.div>

            {/* ローディングバー */}
            <motion.div
              className="mt-12 flex justify-center gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-blue-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
