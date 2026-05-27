export default function ContactForm() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://earley.jp";

  return (
    <form action="https://formspree.io/f/mlgvoadl" method="POST" className="space-y-6">
      <input type="hidden" name="_subject" value="[EJP株式会社] お問い合わせ" />
      <input type="hidden" name="_next" value={`${siteUrl}/contact/thanks`} />
      <input type="hidden" name="_captcha" value="false" />

      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          お名前 <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="山田 太郎"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          メールアドレス <span className="text-red-600">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="example@earley.jp"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium mb-2">
          件名 <span className="text-red-600">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="お問い合わせの件名"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          メッセージ <span className="text-red-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          placeholder="お問い合わせ内容をご入力ください"
        />
      </div>

      <p className="text-sm text-slate-500">
        送信後、完了ページへ移動します。送信できない場合は時間をおいて再度お試しください。
      </p>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-medium"
      >
        送信する
      </button>
    </form>
  );
}
