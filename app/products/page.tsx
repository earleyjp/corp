import Image from "next/image";
import Link from "next/link";

export default function Products() {
  return (
    <div>
      {/* ページヘッダー */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-14">
          <p className="text-blue-600 font-semibold text-sm mb-2 uppercase tracking-wider">Products</p>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">製品情報</h1>
          <p className="text-slate-500 max-w-xl">
            EJP株式会社が展開するボードゲームブランド「EJPゲームズ」をご紹介します。
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">

        {/* EJPゲームズ */}
        <section className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10">
          <div className="grid md:grid-cols-2 gap-10 items-center mb-10">
            <div>
              <a href="https://ejpgames.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/ejp-assets/ejpgames-logo.png"
                  alt="EJPゲームズ ロゴ"
                  width={320}
                  height={86}
                  className="h-auto w-full max-w-xs object-contain mb-6"
                />
              </a>
              <h2 className="text-2xl font-bold text-slate-800 mb-3">EJPゲームズ</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                EJP株式会社が展開するオリジナルボードゲーム・テーブルゲームブランドです。本格ボードゲーム・パーティーゲーム・知育ゲームなど多彩なアナログゲームの開発・販売を行っています。
              </p>
              <a
                href="https://ejpgames.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-900 transition font-medium text-sm"
              >
                EJPゲームズ 公式サイトへ ↗
              </a>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-slate-100 p-6">
              <h3 className="font-semibold text-slate-700 mb-4 text-sm uppercase tracking-wider">ゲームの特徴</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 shrink-0 mt-0.5">🎲</span>
                  <span>本格ボードゲームからパーティーゲームまで幅広いジャンル</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 shrink-0 mt-0.5">🎨</span>
                  <span>こだわりのイラストとゲームデザイン</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 shrink-0 mt-0.5">✅</span>
                  <span>テストプレイによる品質保証</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 shrink-0 mt-0.5">📦</span>
                  <span>企画から印刷・製造まで一貫製作</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 注目タイトル */}
          <div>
            <h3 className="text-lg font-semibold text-slate-700 mb-6">注目タイトル（一部紹介）</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              {[
                { title: "呪いのトリックテイキング", players: "3〜5人", time: "20〜30分", age: "10歳以上" },
                { title: "東京湾奥ボードゲーム", players: "2〜4人", time: "15〜20分", age: "6歳以上" },
                { title: "ヒット＆アクセル", players: "2〜5人", time: "15〜20分", age: "10歳以上" },
                { title: "ゾンビVSサメVS？", players: "2〜5人", time: "10〜15分", age: "10歳以上" },
                { title: "居酒屋オブザデッド", players: "2〜6人", time: "10〜20分", age: "10歳以上" },
                { title: "シン・ネコ物件 デレない間取り", players: "2〜5人", time: "10分〜", age: "6歳以上" },
              ].map((game) => (
                <div key={game.title} className="bg-slate-50 border border-slate-100 rounded-xl p-4">
                  <h4 className="font-semibold text-slate-800 text-sm mb-2">{game.title}</h4>
                  <dl className="text-xs text-slate-500 space-y-1">
                    <div className="flex gap-2"><dt className="text-slate-400">人数</dt><dd>{game.players}</dd></div>
                    <div className="flex gap-2"><dt className="text-slate-400">時間</dt><dd>{game.time}</dd></div>
                    <div className="flex gap-2"><dt className="text-slate-400">対象</dt><dd>{game.age}</dd></div>
                  </dl>
                </div>
              ))}
            </div>
            <p className="text-sm text-slate-500">
              ※ 全製品一覧は{" "}
              <a href="https://ejpgames.com/products/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                EJPゲームズ 公式サイト
              </a>{" "}
              でご確認いただけます。
            </p>
          </div>
        </section>

        {/* テストプレイ会 & アプリ */}
        <section className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">テストプレイ会</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            EJPゲームズでは定期的にテストプレイ会を開催しています。新作ゲームのテストプレイや既存ゲームのプレイ体験ができます。参加申し込みは専用サイトから受け付けています。
          </p>
          <a
            href="https://app.ejpgames.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium text-sm mb-10"
          >
            テストプレイ会の詳細・申し込み ↗
          </a>

          <h2 className="text-2xl font-bold text-slate-800 mb-2">EJPゲームズ アプリ</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            EJPゲームズの公式スマートフォンアプリをご利用いただけます。ゲーム情報の確認やテストプレイ会への参加申し込みなど、便利な機能をご提供しています。
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://apps.apple.com/jp/app/ejp%E3%82%B2%E3%83%BC%E3%83%A0%E3%82%BA/id6737413546"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-900 transition"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div>
                <div className="text-xs leading-none mb-0.5 opacity-80">App Store で入手</div>
                <div className="text-sm font-semibold leading-none">App Store</div>
              </div>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.ejpgames.app&hl=ja"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-black text-white px-5 py-3 rounded-xl hover:bg-gray-900 transition"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-white shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.18 23.76c.3.17.64.22.99.14l13.12-7.57-2.83-2.83-11.28 10.26zM.54 1.52C.2 1.86 0 2.4 0 3.1v17.8c0 .7.2 1.24.55 1.58l.08.08 9.97-9.97v-.23L.62 1.44l-.08.08zM20.4 10.63l-2.77-1.6-3.17 3.17 3.17 3.17 2.8-1.62c.8-.46.8-1.22-.03-1.68v-.44zm-17.22 13.13l11-11L11.35 9.93.54 1.52c-.09.18-.08.38.08.57l11.03 11.04L3.18 23.76z"/>
              </svg>
              <div>
                <div className="text-xs leading-none mb-0.5 opacity-80">Google Play で入手</div>
                <div className="text-sm font-semibold leading-none">Google Play</div>
              </div>
            </a>
          </div>
        </section>

        {/* お問い合わせ誘導 */}
        <section className="bg-blue-50 rounded-2xl border border-blue-100 p-8 text-center">
          <h2 className="text-xl font-bold text-slate-800 mb-3">ボードゲームに関するお問い合わせ</h2>
          <p className="text-slate-600 mb-6 text-sm">
            ボードゲームに関するお問い合わせは EJPゲームズ 公式サイトのフォームよりお願いします。
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="https://ejpgames.com/contact/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-900 transition text-sm font-medium"
            >
              EJPゲームズへの問い合わせ ↗
            </a>
            <Link
              href="/contact"
              className="inline-block bg-white text-slate-700 border border-slate-200 px-6 py-3 rounded-lg hover:bg-slate-50 transition text-sm font-medium"
            >
              EJP株式会社への問い合わせ
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
