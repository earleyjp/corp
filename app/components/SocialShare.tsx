import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://earley.jp";

type SocialShareProps = {
  path: string;
  title: string;
  description: string;
};

export default function SocialShare({ path, title, description }: SocialShareProps) {
  const url = `${siteUrl}${path}`;
  const shareText = `${title}｜${description}`;
  const encodedUrl = encodeURIComponent(url);
  const encodedText = encodeURIComponent(shareText);

  const items = [
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedText}`,
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      label: "LINE",
      href: `https://social-plugins.line.me/lineit/share?url=${encodedUrl}`,
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
        <p className="text-blue-600 font-semibold text-sm mb-2 uppercase tracking-wider">Share</p>
        <h2 className="text-xl font-bold text-slate-800 mb-3">このページをSNSでシェア</h2>
        <p className="text-slate-600 text-sm mb-5">
          {description}
        </p>
        <div className="flex flex-wrap gap-3">
          {items.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 transition"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}