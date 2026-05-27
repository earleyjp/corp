import type { Metadata } from "next";
import Image from "next/image";
import SocialShare from "../components/SocialShare";
import AnimatedSection from "../components/AnimatedSection";

export const metadata: Metadata = {
  title: "会社案内",
  description:
    "EJP株式会社の会社概要、代表ごあいさつ、事業の考え方をご案内します。",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "会社案内 | EJP株式会社",
    description:
      "EJP株式会社の会社概要、代表ごあいさつ、事業の考え方をご案内します。",
    url: "/about",
    images: [{ url: "/og/about.svg", width: 1200, height: 630, alt: "会社案内 | EJP株式会社" }],
  },
  twitter: {
    card: "summary",
    title: "会社案内 | EJP株式会社",
    description:
      "EJP株式会社の会社概要、代表ごあいさつ、事業の考え方をご案内します。",
    images: ["/og/about.svg"],
  },
};

const companyRows = [
  { label: "会社名", value: "ＥＪＰ株式会社" },
  { label: "本社所在地", value: "東京都墨田区横川２−８−３" },
  { label: "代表取締役", value: "有明 義明" },
  { label: "設立", value: "２０１７年４月１７日" },
  { label: "資本金", value: "３００万円" },
  { label: "社員数", value: "５名" },
];

export default function About() {
  return (
    <div>
      {/* ページヘッダー */}
      <section className="relative bg-slate-950 py-20 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4">
          <AnimatedSection>
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-[0.2em] mb-3">Company</p>
            <h1 className="text-5xl font-bold text-white mb-4">会社案内</h1>
            <p className="text-slate-400 max-w-xl text-lg">
              EJP株式会社の事業概要・会社情報をご案内します。
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16 space-y-12">

        {/* ごあいさつ */}
        <AnimatedSection>
          <section className="game-card card-glow rounded-3xl p-8 md:p-12">
            <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-3">Message</p>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">代表ごあいさつ</h2>
            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-start">
              <div className="text-slate-700 leading-relaxed space-y-5 text-base">
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
                <div className="text-right text-slate-500 text-sm font-semibold pt-4 border-t border-slate-100">
                  代表取締役　有明 義明
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="relative">
                  <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-xl" />
                  <Image
                    src="/ejp-assets/ejp-logo-new.png"
                    alt="EJP株式会社 ロゴ"
                    width={120}
                    height={120}
                    className="relative h-28 w-28 rounded-2xl object-contain border border-slate-200 p-3 bg-white"
                  />
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* 会社概要 */}
        <AnimatedSection delay={0.1}>
          <section className="game-card card-glow rounded-3xl p-8 md:p-12">
            <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-3">Overview</p>
            <h2 className="text-3xl font-bold text-slate-900 mb-8">会社概要</h2>
            <div className="overflow-hidden rounded-2xl border border-slate-100">
              <table className="w-full border-collapse">
                <tbody>
                  {companyRows.map((row, i) => (
                    <tr key={row.label} className={i % 2 === 0 ? "bg-slate-50/50" : "bg-white"}>
                      <td className="py-4 px-6 font-semibold text-slate-500 text-sm w-40 whitespace-nowrap border-b border-slate-100">
                        {row.label}
                      </td>
                      <td className="py-4 px-6 text-slate-800 border-b border-slate-100 font-medium">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </AnimatedSection>

      </div>

      <SocialShare
        path="/about"
        title="会社案内 | EJP株式会社"
        description="会社概要と代表ごあいさつをご紹介します"
      />
    </div>
  );
}
