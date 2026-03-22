import Image from "next/image";
import { Card } from "./card";
import type { Locale } from "../i18n/types";

export function Home({
  locale,
  altLang,
}: {
  locale: Locale;
  altLang: { href: string; label: string };
}) {
  return (
    <div className="flex flex-1 justify-center px-6 py-16 sm:py-24 font-sans">
      <main className="w-full max-w-md flex flex-col gap-12">
        <div className="flex justify-end">
          <a
            href={altLang.href}
            className="text-base text-muted hover:text-foreground transition-colors"
          >
            {altLang.label}
          </a>
        </div>

        <h1>
          <Image
            src="/changkanny.png"
            alt="changkanny"
            width={448}
            height={128}
            priority
            className="w-full h-auto dark:invert"
          />
        </h1>

        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold uppercase tracking-widest text-muted">
            Links
          </h2>
          <ul className="flex flex-col gap-3">
            {locale.links.map((link) => (
              <li key={link.title}>
                <Card
                  accent={link.accent}
                  icon={link.icon}
                  title={link.title}
                  description={link.description}
                  href={link.href}
                />
              </li>
            ))}
          </ul>
        </section>

        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-semibold uppercase tracking-widest text-muted">
            Works
          </h2>
          <ul className="flex flex-col gap-3">
            {locale.works.map((work) => (
              <li key={work.title}>
                <Card
                  accent={work.accent}
                  icon={work.icon}
                  title={work.title}
                  tags={work.tags}
                  description={work.description}
                />
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
