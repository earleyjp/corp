import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* ヒーローセクション */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-20 text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="/ejp-assets/ejp-logo-new.png"
              alt="EJP株式会社 ロゴ"
              width={100}
              height={100}
              className="h-24 w-24 rounded-2xl object-contain"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            EJP株式会社
          </h1>
          <p className="text-xl text-slate-500 mb-2 font-medium">
            「モノ」づくりの楽しさを探求し続けている会社です。
          </p>
          <p className="text-slate-500 mb-10 max-w-xl mx-auto leading-relaxed">
            IoT・組み込み・WEBアプリなど多様なソフトウェア開発から、ボードゲームの企画・製造・販売まで、幅広い分野でものづくりに取り組んでいます。
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/business"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-medium shadow-sm"
            >
              事業内容を見る
            </Link>
            <Link
              href="/contact"
              className="bg-white text-blue-600 border border-blue-200 px-8 py-3 rounded-lg hover:bg-blue-50 transition font-medium shadow-sm"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>

      {/* 事業紹介 */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center text-slate-800 mb-10">主な事業</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* ソフトウェア開発 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-md transition">
            <div className="text-blue-600 text-3xl mb-4">💻</div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">ソフトウェア開発</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              IoT・組み込みから WEBアプリまで、多様なソフトウェア開発の実績があります。ネットワークプロトコル開発のノウハウを活かした提案も行っています。
            </p>
            <ul className="text-sm text-slate-500 space-y-1 mb-6">
              <li>・ 組み込み・制御系ソフトウェア</li>
              <li>・ WEBアプリケーション</li>
              <li>・ ネットワークプロトコル開発</li>
              <li>・ IoTデバイス開発</li>
            </ul>
            <Link href="/business" className="text-blue-600 text-sm font-medium hover:underline">
              詳細を見る →
            </Link>
          </div>

          {/* ボードゲーム */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8 hover:shadow-md transition">
            <div className="text-blue-600 text-3xl mb-4">🎲</div>
            <h3 className="text-xl font-bold text-slate-800 mb-3">ボードゲーム制作・販売</h3>
            <p className="text-slate-600 leading-relaxed mb-4">
              「EJPゲームズ」ブランドにてボードゲームの企画・制作・販売を行っています。ルール設計から印刷・製造まで一貫して手がけています。
            </p>
            <ul className="text-sm text-slate-500 space-y-1 mb-6">
              <li>・ ゲームルール・シナリオ設計</li>
              <li>・ イラスト・デザイン制作</li>
              <li>・ テストプレイ・品質保証</li>
              <li>・ 印刷・製造・販売</li>
            </ul>
            <Link href="/products" className="text-blue-600 text-sm font-medium hover:underline">
              製品一覧を見る →
            </Link>
          </div>
        </div>
      </section>

      {/* EJP Games セクション */}
      <section className="bg-white border-y border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-blue-600 font-semibold text-sm mb-2 uppercase tracking-wider">関連ブランド</p>
              <h2 className="text-3xl font-bold text-slate-800 mb-4">EJPゲームズ</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                本格ボードゲーム・パーティーゲーム・知育ゲームなど多彩なアナログゲームを企画・開発・販売しています。
                プロモーション動画やマンガ制作まで、ゲームに関するすべてを一貫して行っています。
              </p>
              <a
                href="https://ejpgames.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-900 transition font-medium text-sm"
              >
                EJPゲームズ 公式サイト ↗
              </a>
            </div>
            <div className="flex justify-center">
              <a href="https://ejpgames.com" target="_blank" rel="noopener noreferrer">
                <Image
                  src="/ejp-assets/ejpgames-logo.png"
                  alt="EJPゲームズ ロゴ"
                  width={320}
                  height={86}
                  className="h-auto w-full max-w-xs object-contain"
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">ご相談・お問い合わせ</h2>
        <p className="text-slate-600 mb-8 max-w-lg mx-auto">
          ソフトウェア開発やボードゲームに関するご相談など、お気軽にお問い合わせください。
        </p>
        <Link
          href="/contact"
          className="inline-block bg-blue-600 text-white px-10 py-4 rounded-lg hover:bg-blue-700 transition font-semibold shadow-sm"
        >
          お問い合わせフォーム
        </Link>
      </section>
    </div>
  );
}
