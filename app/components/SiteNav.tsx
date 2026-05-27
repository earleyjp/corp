"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SiteNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
            aria-label="メニューを開閉"
            aria-expanded={isMenuOpen}
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
  );
}