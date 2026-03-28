import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-1 justify-center px-6 py-16 sm:py-24 font-sans">
      <main className="w-full max-w-md flex flex-col gap-10">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
          <p className="text-base text-muted">Last updated: March 22, 2026</p>
        </div>

        <p className="text-base text-muted">
          <a
            href="/privacy"
            className="text-foreground underline underline-offset-2"
          >
            日本語版
          </a>
          もあります
        </p>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold">Overview</h2>
          <p className="text-base leading-relaxed text-muted">
            This is the Privacy Policy for changkanny.me (hereinafter referred
            to as &ldquo;the Site&rdquo;).
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold">Hosting</h2>
          <p className="text-base leading-relaxed text-muted">
            The Site is hosted on{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-2"
            >
              Vercel
            </a>
            . When you visit the Site, Vercel may process basic request data
            (such as IP addresses and user agents) as part of its
            infrastructure. For details, see{" "}
            <a
              href="https://vercel.com/legal/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-2"
            >
              Vercel&apos;s Privacy Policy
            </a>
            .
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold">Analytics</h2>
          <p className="text-base leading-relaxed text-muted">
            The Site uses{" "}
            <a
              href="https://vercel.com/docs/analytics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-2"
            >
              Vercel Analytics
            </a>{" "}
            and{" "}
            <a
              href="https://vercel.com/docs/speed-insights"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-2"
            >
              Vercel Speed Insights
            </a>{" "}
            to understand site usage and performance. These services collect
            anonymized data and do not use cookies or track individual visitors.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold">Data Collection</h2>
          <p className="text-base leading-relaxed text-muted">
            The Site does not collect any personal data beyond what is described
            above.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold">External Links</h2>
          <p className="text-base leading-relaxed text-muted">
            The Site may contain links to external websites. I am not responsible
            for the privacy policies or content of those sites.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold">Changes to This Policy</h2>
          <p className="text-base leading-relaxed text-muted">
            This policy may be updated as needed. Any changes will be posted on
            this page.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold">Contact</h2>
          <p className="text-base leading-relaxed text-muted">
            If you have any questions about this Privacy Policy, please contact
            me at{" "}
            <a
              href="mailto:hi@changkanny.me"
              className="text-foreground underline underline-offset-2"
            >
              hi@changkanny.me
            </a>
            .
          </p>
        </section>
      </main>
    </div>
  );
}
