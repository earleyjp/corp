import Link from "next/link";

const siteMapLinks = [
  { href: "/", label: "ホーム" },
  { href: "/about", label: "会社案内" },
  { href: "/business", label: "事業内容" },
  { href: "/products", label: "製品情報" },
  { href: "/contact", label: "お問い合わせ" },
];

export default function NotFound() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <section className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 text-center">
        <p className="text-blue-600 font-semibold text-sm mb-3 uppercase tracking-wider">404 Not Found</p>
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
          お探しのページが見つかりません
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed mb-8">
          URLが変更されたか、ページが移動・削除された可能性があります。以下のリンクから目的のページへお進みください。
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
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
            お問い合わせ
          </Link>
        </div>

        <div className="max-w-3xl mx-auto text-left">
          <h2 className="text-xl font-bold text-slate-800 mb-4 text-center">サイトマップ</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {siteMapLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 hover:bg-blue-50 hover:border-blue-200 transition"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
