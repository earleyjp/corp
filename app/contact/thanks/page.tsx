import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "送信完了",
  description: "お問い合わせの送信が完了しました。",
  alternates: { canonical: "/contact/thanks" },
};

export default function ContactThanksPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <section className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 text-center">
        <p className="text-blue-600 font-semibold text-sm mb-3 uppercase tracking-wider">Thank You</p>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">送信が完了しました</h1>
        <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
          お問い合わせありがとうございます。内容を確認のうえ、順次ご連絡いたします。
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
          >
            トップページへ戻る
          </Link>
          <Link
            href="/contact"
            className="inline-block bg-white text-slate-700 border border-slate-200 px-6 py-3 rounded-lg hover:bg-slate-50 transition font-medium"
          >
            お問い合わせページへ戻る
          </Link>
        </div>
      </section>
    </div>
  );
}
