import { M_PLUS_Rounded_1c } from "next/font/google";
import "../globals.css";

const mPlusRounded = M_PLUS_Rounded_1c({
  variable: "--font-mplus-rounded",
  weight: ["400", "700", "800"],
  subsets: ["latin"],
});

export function RootLayout({
  lang,
  children,
}: Readonly<{
  lang: string;
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={lang}
      className={`${mPlusRounded.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <footer className="flex justify-center px-6 py-8 font-sans">
          <div className="w-full max-w-md flex flex-col items-center gap-3 text-base text-muted">
            <nav className="flex gap-4">
              <a
                href={lang === "ja" ? "/ja" : "/"}
                className="hover:text-foreground transition-colors"
              >
                Home
              </a>
              <a
                href={lang === "ja" ? "/privacy/ja" : "/privacy"}
                className="hover:text-foreground transition-colors"
              >
                Privacy
              </a>
            </nav>
            <p>&copy; 2026 changkanny</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
