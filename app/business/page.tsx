export default function Business() {
  return (
    <div>
      {/* ページヘッダー */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-14">
          <p className="text-blue-600 font-semibold text-sm mb-2 uppercase tracking-wider">Business</p>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">事業内容</h1>
          <p className="text-slate-500 max-w-xl">
            ソフトウェア開発・自社製品の開発・ボードゲームの企画制作販売まで、幅広い分野でものづくりに取り組んでいます。
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">

        {/* ソフトウェア開発 */}
        <section className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">ソフトウェア開発</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            IoT・組み込み・WEBアプリなど多様なソフトウェア開発の実績があります。ネットワークプロトコル開発のノウハウを活かしたインフラ整備や、開発をスピードアップするためのオープンソースソフトウェアのご提案も行っています。
          </p>

          <h3 className="text-lg font-semibold text-slate-700 mb-4">主なソフトウェア開発実績</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
              <h4 className="font-semibold text-slate-700 mb-3">組み込みソフトウェア</h4>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>・ 漏水探知機器（漏水音を分析）の開発</li>
                <li>・ 次世代ネットワーク装置のプロトコル開発</li>
                <li>・ 無線基地局用のプロトコル開発</li>
                <li>・ IoTに関連した新プロトコルの研究開発</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
              <h4 className="font-semibold text-slate-700 mb-3">アプリケーション</h4>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>・ 知財管理用WEBアプリの開発</li>
                <li>・ マンション入退室管理用WEBアプリの開発</li>
                <li>・ 電子回路・基板設計情報管理アプリの開発</li>
                <li>・ 社員情報管理アプリの開発</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
              <h4 className="font-semibold text-slate-700 mb-3">プロトコル開発</h4>
              <ul className="text-sm text-slate-600 space-y-2">
                <li>・ ERP (Ethernet Ring Protection)</li>
                <li>・ MPLS-TP OAM</li>
                <li>・ LACP (Link Aggregation Control Protocol)</li>
                <li>・ SNMP / DNSSEC / GMPLS など</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 自社製品の開発 */}
        <section className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">自社製品の開発</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            組み込み・制御系ソフトウェアの開発経験を活用して、自社製品の開発も行っております。ハードウェア選定やデバイスの認証取得などについても豊富なノウハウで開発を進めています。
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
              <h4 className="font-semibold text-slate-700 mb-3">デバイス開発</h4>
              <p className="text-sm text-slate-600">IoT関連デバイスの企画・設計・製造</p>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
              <h4 className="font-semibold text-slate-700 mb-3">アプリ・サービス開発</h4>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>・ iPhoneアプリ開発</li>
                <li>・ スマートフォン用ボードゲームアプリ</li>
                <li>・ WEBサービス・ECサービス</li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
              <h4 className="font-semibold text-slate-700 mb-3">オープンソースソフトウェア</h4>
              <p className="text-sm text-slate-600">OSSの未対応プラットフォームへのポーティング</p>
            </div>
          </div>
        </section>

        {/* ボードゲーム制作・販売 */}
        <section className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">ボードゲーム制作・販売</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            「EJPゲームズ」ブランドにてボードゲームの制作・販売を行っています。企画から製造・プロモーションまで一貫して手がけています。
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {[
              "ゲームの根幹となるルール設計",
              "目的やフレーバーとなるシナリオ、世界観",
              "キャラクター・モチーフの企画・デザイン",
              "かわいらしいイラストやリアルなデザイン",
              "品質保証のためのテストプレイ",
              "製造に関するデータ作成・印刷",
              "プロモーション動画やマンガ制作",
              "ECサイトを通じた販売・流通",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-slate-50 rounded-lg p-3 border border-slate-100">
                <span className="text-blue-500 mt-0.5 shrink-0">✓</span>
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="https://ejpgames.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-slate-800 text-white px-6 py-3 rounded-lg hover:bg-slate-900 transition font-medium text-sm"
          >
            EJPゲームズ 公式サイト ↗
          </a>
        </section>

      </div>
    </div>
  );
}
