import Image from "next/image";

export default function About() {
  return (
    <div>
      {/* ページヘッダー */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-14">
          <p className="text-blue-600 font-semibold text-sm mb-2 uppercase tracking-wider">Company</p>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">会社案内</h1>
          <p className="text-slate-500 max-w-xl">
            EJP株式会社の事業概要・会社情報をご案内します。
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">

        {/* ごあいさつ */}
        <section className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">ごあいさつ</h2>
          <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-4">
            <p>
              EJP株式会社のホームページをご覧頂きありがとうございます。弊社は「モノ」づくりの楽しさを探求し続けている会社です。
            </p>
            <p>
              私は子供の頃から車やバイクが大好きでした。自分で整備をしたり、何かを組み立てる「モノ」作りが生活の中心でした。エンジンや機械は物理的なものですが、車やバイクには論理的なものも組み込まれていることを知りました。電子部品を制御する為に、ソフトウェアが組み込まれているのです。プログラミングをして作られたソフトウェアの可能性に惹かれ、私はこの業界に入ることになります。
            </p>
            <p>
              ソフトウェアは非常に柔軟で様々な課題を解決してくれます。ソフトウェア業界に入り、「モノ」づくりの楽しさを実感していたのですが、ハードウェアの存在もとても重要なことに気付かされました。本当に自分が作りたいものは広い分野での知識が必要だったのです。
            </p>
            <p>
              そして、EJP株式会社を立ち上げました。自分が本当に作りたいものをゼロから作り上げて、どこまでもどこまででも「モノ」づくりの楽しさを探求していく為に。
            </p>
          </div>
          <div className="mt-6 text-right text-slate-500 text-sm font-medium">
            代表取締役　有明 義明
          </div>
        </section>

        {/* 会社概要 */}
        <section className="bg-white rounded-2xl border border-slate-200 p-8 md:p-10">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">会社概要</h2>
          <div className="grid md:grid-cols-[auto_1fr] gap-x-12 gap-y-4">
            <div className="flex justify-center items-start md:row-span-6">
              <Image
                src="/ejp-assets/ejp-logo-new.png"
                alt="EJP株式会社 ロゴ"
                width={200}
                height={200}
                className="h-36 w-36 rounded-2xl object-contain border border-slate-200 p-4 bg-slate-50"
              />
            </div>
            <table className="w-full border-collapse text-sm">
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-8 font-semibold text-slate-500 w-32 whitespace-nowrap">会社名</td>
                  <td className="py-3 text-slate-800">ＥＪＰ株式会社</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-8 font-semibold text-slate-500 whitespace-nowrap">本社所在地</td>
                  <td className="py-3 text-slate-800">東京都墨田区横川２−８−３</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-8 font-semibold text-slate-500 whitespace-nowrap">代表取締役</td>
                  <td className="py-3 text-slate-800">有明 義明</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-8 font-semibold text-slate-500 whitespace-nowrap">設立</td>
                  <td className="py-3 text-slate-800">２０１７年４月１７日</td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="py-3 pr-8 font-semibold text-slate-500 whitespace-nowrap">資本金</td>
                  <td className="py-3 text-slate-800">３００万円</td>
                </tr>
                <tr>
                  <td className="py-3 pr-8 font-semibold text-slate-500 whitespace-nowrap">社員数</td>
                  <td className="py-3 text-slate-800">５名</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </div>
    </div>
  );
}
