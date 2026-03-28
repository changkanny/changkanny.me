import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
};

export default function PrivacyPolicyJa() {
  return (
    <div className="flex flex-1 justify-center px-6 py-16 sm:py-24 font-sans">
      <main className="w-full max-w-md flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold tracking-tight">
            プライバシーポリシー
          </h1>
          <p className="text-base text-muted">最終更新日: 2026年3月22日</p>
        </div>

        <p className="text-base text-muted">
          Also available in{" "}
          <a
            href="/privacy/en"
            className="text-foreground underline underline-offset-2"
          >
            English
          </a>
        </p>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold">概要</h2>
          <p className="text-base leading-relaxed text-muted">
            changkanny.me（以下、本サイト）のプライバシーポリシーについてご説明します。
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold">ホスティング</h2>
          <p className="text-base leading-relaxed text-muted">
            本サイトは{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-2"
            >
              Vercel
            </a>{" "}
            でホスティングされています。本サイトへのアクセス時に、Vercelがリクエストデータ（IPアドレス、ユーザーエージェント等）を処理する場合があります。詳細は{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-2"
            >
              Vercelのプライバシーポリシー
            </a>
            をご覧ください。
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold">アクセス解析</h2>
          <p className="text-base leading-relaxed text-muted">
            本サイトでは{" "}
            <a
              href="https://vercel.com/docs/analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-2"
            >
              Vercel Analytics
            </a>{" "}
            および{" "}
            <a
              href="https://vercel.com/docs/speed-insights"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-2"
            >
              Vercel Speed Insights
            </a>{" "}
            を使用しています。これらは匿名化されたデータを収集するもので、Cookieの使用や個人の追跡は行いません。
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold">データの収集</h2>
          <p className="text-base leading-relaxed text-muted">
            本サイトでは、上記以外の個人データの収集は行っていません。
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold">外部リンク</h2>
          <p className="text-base leading-relaxed text-muted">
            本サイトには外部サイトへのリンクが含まれていることがあります。リンク先のプライバシーポリシーや内容について、本サイトは責任を負いかねます。
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold">ポリシーの変更</h2>
          <p className="text-base leading-relaxed text-muted">
            本ポリシーは必要に応じて変更されることがあります。変更があった場合は、本ページにてお知らせします。
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold">お問い合わせ</h2>
          <p className="text-base leading-relaxed text-muted">
            本ポリシーに関するご質問は、
            <a
              href="mailto:hi@changkanny.me"
              className="text-foreground underline underline-offset-2"
            >
              hi@changkanny.me
            </a>
            までご連絡ください。
          </p>
        </section>
      </main>
    </div>
  );
}
