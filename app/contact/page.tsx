import type { Metadata } from "next";
import ContactForm from "../components/ContactForm";
import SocialShare from "../components/SocialShare";

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
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-14">
          <p className="text-blue-600 font-semibold text-sm mb-2 uppercase tracking-wider">Contact</p>
          <h1 className="text-4xl font-bold text-slate-800 mb-4">お問い合わせ</h1>
          <p className="text-slate-500 max-w-xl">
            ご質問やご相談がございましたら、下記フォームよりお気軽にお問い合わせください。3営業日以内を目安にご返信いたします。
          </p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-8">

      {isSubmitted && (
        <div className="bg-green-50 text-green-800 border border-green-200 rounded-xl p-4">
          お問い合わせありがとうございます。送信を受け付けました。
        </div>
      )}

      <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
        <h2 className="text-2xl font-bold mb-6 text-slate-800">お問い合わせフォーム</h2>
        <ContactForm />
      </div>

      <SocialShare
        path="/contact"
        title="お問い合わせ | EJP株式会社"
        description="お問い合わせフォームからご相談を受け付けています"
      />
    </div>
    </div>
  );
}
