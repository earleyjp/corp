import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";
import SocialShare from "../components/SocialShare";
import AnimatedSection from "../components/AnimatedSection";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "EJP株式会社へのお問い合わせはこちら。ソフトウェア開発やボードゲームに関するご相談を受け付けています。",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "お問い合わせ | EJP株式会社",
    description:
      "EJP株式会社へのお問い合わせはこちら。ソフトウェア開発やボードゲームに関するご相談を受け付けています。",
    url: "/contact",
    images: [{ url: "/og/contact.svg", width: 1200, height: 630, alt: "お問い合わせ | EJP株式会社" }],
  },
  twitter: {
    card: "summary",
    title: "お問い合わせ | EJP株式会社",
    description:
      "EJP株式会社へのお問い合わせはこちら。ソフトウェア開発やボードゲームに関するご相談を受け付けています。",
    images: ["/og/contact.svg"],
  },
};

export default function Contact({
  searchParams,
}: {
  searchParams?: { submitted?: string };
}) {
  const isSubmitted = searchParams?.submitted === "1";

  return (
    <div>
      {/* ページヘッダー */}
      <section className="relative bg-slate-950 py-20 overflow-hidden">
        <div className="absolute inset-0 hero-grid opacity-30" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="relative max-w-5xl mx-auto px-4">
          <AnimatedSection>
            <p className="text-blue-400 font-semibold text-sm uppercase tracking-[0.2em] mb-3">Contact</p>
            <h1 className="text-5xl font-bold text-white mb-4">お問い合わせ</h1>
            <p className="text-slate-400 max-w-xl text-lg">
              ご質問やご相談がございましたら、お気軽にお問い合わせください。3営業日以内を目安にご返信いたします。
            </p>
          </AnimatedSection>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-16 space-y-8">

        {isSubmitted && (
          <AnimatedSection direction="none">
            <div className="flex items-center gap-3 bg-green-50 text-green-800 border border-green-200 rounded-2xl p-5">
              <span className="text-2xl">✅</span>
              <div>
                <p className="font-semibold">送信が完了しました</p>
                <p className="text-sm text-green-700">お問い合わせありがとうございます。3営業日以内にご返信いたします。</p>
              </div>
            </div>
          </AnimatedSection>
        )}

        <AnimatedSection delay={0.1}>
          <div className="game-card rounded-3xl p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl font-bold mb-6 text-slate-900">お問い合わせフォーム</h2>
            <ContactForm />
          </div>
        </AnimatedSection>

        <SocialShare
          path="/contact"
          title="お問い合わせ | EJP株式会社"
          description="お問い合わせフォームからご相談を受け付けています"
        />
      </div>
    </div>
  );
}

