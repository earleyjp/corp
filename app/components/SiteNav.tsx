"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "ホーム" },
  { href: "/about", label: "会社案内" },
  { href: "/business", label: "事業内容" },
  { href: "/products", label: "製品情報" },
  { href: "https://ejpgames.com", label: "EJPゲームズ ↗", external: true },
];

export default function SiteNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ページ変更でメニューを閉じる
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || !isHome
          ? "bg-slate-950/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* ロゴ */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/ejp-assets/ejp-logo-new.png"
              alt="EJP株式会社 ロゴ"
              width={40}
              height={40}
              className="h-9 w-9 rounded-lg object-contain transition-transform duration-300 group-hover:scale-110"
              priority
            />
            <span className="text-base font-bold text-white">EJP株式会社</span>
          </Link>

          {/* デスクトップメニュー */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = !link.external && pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-blue-400"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg bg-blue-600/20 border border-blue-500/30"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </Link>
              );
            })}
            <Link
              href="/contact"
              className="ml-2 bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-blue-500 transition-colors shadow-md shadow-blue-600/30"
            >
              お問い合わせ
            </Link>
          </div>

          {/* ハンバーガー */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-1.5 text-white"
            aria-label="メニューを開閉"
            aria-expanded={isMenuOpen}
          >
            <motion.span
              className="w-6 h-0.5 bg-current rounded"
              animate={isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-current rounded"
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-current rounded"
              animate={isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.2 }}
            />
          </button>
        </div>

        {/* モバイルメニュー */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden md:hidden"
            >
              <div className="py-3 flex flex-col gap-1 border-t border-white/10 mt-3">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        pathname === link.href
                          ? "text-blue-400 bg-blue-600/10"
                          : "text-slate-300 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.05 }}
                >
                  <Link
                    href="/contact"
                    className="block mt-2 bg-blue-600 text-white px-4 py-3 rounded-lg text-sm font-semibold text-center hover:bg-blue-500 transition-colors"
                  >
                    お問い合わせ
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
