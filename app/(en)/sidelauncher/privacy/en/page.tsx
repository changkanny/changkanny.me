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
            href="/sidelauncher/privacy"
            className="text-foreground underline underline-offset-2"
          >
            日本語版
          </a>
          もあります
        </p>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold">Overview</h2>
          <p className="text-base leading-relaxed text-muted">
            This is the Privacy Policy for SideLauncher (hereinafter referred to
            as &ldquo;the App&rdquo;).
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold">Data Collection</h2>
          <p className="text-base leading-relaxed text-muted">
            The App does not collect any personal data. All settings and data are
            stored locally on your device.
          </p>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-lg font-bold">Data Sharing</h2>
          <p className="text-base leading-relaxed text-muted">
            The App does not use any third-party analytics, advertising, or
            tracking services. No data is shared with third parties.
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
