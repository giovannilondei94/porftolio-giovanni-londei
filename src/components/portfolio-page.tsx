import Image from "next/image";
import Link from "next/link";
import { getPortfolioContent } from "@/content/portfolio";
import type { Locale } from "@/lib/i18n";
import { LanguageSwitcher } from "./ui/language-switcher";
import { SectionHeading } from "./ui/section-heading";

type PortfolioPageProps = {
  locale: Locale;
};

export function PortfolioPage({ locale }: PortfolioPageProps) {
  const content = getPortfolioContent(locale);

  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(14,116,144,0.14),_transparent_55%),linear-gradient(180deg,_rgba(248,250,252,0.96)_0%,_rgba(248,250,252,0.82)_52%,_rgba(241,245,249,0.7)_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[linear-gradient(120deg,rgba(255,255,255,0)_0%,rgba(14,116,144,0.04)_30%,rgba(15,23,42,0.04)_100%)]" />

      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/88 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href={`/${locale}`} className="group">
            <span className="block text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground transition group-hover:text-foreground">
              Giovanni Londei
            </span>
            <span className="mt-1 block text-sm text-foreground/80">
              {content.hero.role}
            </span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {content.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>

          <LanguageSwitcher locale={locale} />
        </div>
      </header>

      <main>
        <section id="hero" className="mx-auto max-w-6xl px-6 pb-20 pt-16 lg:px-8 lg:pb-24 lg:pt-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(290px,0.72fr)_minmax(0,1.28fr)] lg:items-start">
            <div className="rounded-[2rem] border border-border/80 bg-white/88 p-4 shadow-[0_20px_64px_rgba(15,23,42,0.08)] backdrop-blur">
              <div className="mx-auto mb-4 w-full max-w-[88%] overflow-hidden rounded-[1.5rem] border border-border/80 bg-surface">
                <div className="relative h-[17rem] w-full sm:h-[18.5rem]">
                  <Image
                    src="/images/profile-pic.png"
                    alt="Portrait of Giovanni Londei"
                    fill
                    sizes="(min-width: 1024px) 360px, 100vw"
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {content.hero.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className={`rounded-2xl border border-border/80 bg-surface px-3.5 py-3 ${
                      content.hero.facts.length % 2 !== 0 && fact === content.hero.facts[content.hero.facts.length - 1]
                        ? "sm:col-span-2"
                        : ""
                    }`}
                  >
                    <p className="text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                      {fact.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-foreground sm:text-[0.95rem]">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:pt-1">
              <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-foreground sm:text-6xl lg:text-[5.25rem] lg:leading-[0.95]">
                {content.hero.name}
              </h1>
              <p className="mt-5 max-w-3xl text-xl font-semibold text-foreground/88 sm:text-2xl lg:text-[1.7rem]">
                {content.hero.role}
              </p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground sm:text-[1.1rem]">
                {content.hero.headline}
              </p>
              <p className="mt-6 font-mono text-sm uppercase tracking-[0.22em] text-foreground/72">
                {content.hero.stackLine}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm font-medium text-muted-foreground">
                {content.hero.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="transition hover:text-accent-strong"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)]">
            <SectionHeading
              eyebrow={content.about.eyebrow}
              title={content.about.title}
              description={content.about.summary}
            />
            <div className="grid gap-6 md:grid-cols-3">
              {content.about.highlights.map((highlight) => (
                <article
                  key={highlight.title}
                  className="rounded-3xl border border-border/80 bg-white/82 p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="mt-3 text-base leading-7 text-muted-foreground">
                    {highlight.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)]">
            <SectionHeading
              eyebrow={content.experience.eyebrow}
              title={content.experience.title}
              description={content.experience.description}
            />
            <div className="relative space-y-6 before:absolute before:bottom-0 before:left-5 before:top-2 before:w-px before:bg-border">
              {content.experience.items.map((item) => (
                <article
                  key={`${item.company}-${item.period}`}
                  className="relative rounded-[1.75rem] border border-border/80 bg-white/86 p-6 pl-12 shadow-[0_18px_56px_rgba(15,23,42,0.05)]"
                >
                  <span className="absolute left-[15px] top-8 h-3 w-3 rounded-full border-4 border-background bg-accent-strong" />
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                        {item.period}
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-foreground">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-base text-foreground/80">
                        {item.company} · {item.location}
                      </p>
                    </div>
                    <span className="rounded-full border border-border px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      {item.context}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-3 text-base leading-7 text-muted-foreground">
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-strong" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {item.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-accent-soft px-3 py-1.5 text-sm font-medium text-accent-strong"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)]">
            <SectionHeading
              eyebrow={content.skills.eyebrow}
              title={content.skills.title}
              description={content.skills.description}
            />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {content.skills.categories.map((category) => (
                <article
                  key={category.title}
                  className="rounded-3xl border border-border/80 bg-white/85 p-6 shadow-[0_18px_52px_rgba(15,23,42,0.05)]"
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {category.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-foreground/85"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)]">
            <SectionHeading
              eyebrow={content.contact.eyebrow}
              title={content.contact.title}
              description={content.contact.description}
            />
            <div className="grid gap-6 md:grid-cols-2">
              {content.contact.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noreferrer" : undefined}
                  className="rounded-3xl border border-border/80 bg-white/86 p-6 transition hover:-translate-y-0.5 hover:border-accent-strong hover:shadow-[0_20px_60px_rgba(14,116,144,0.12)]"
                >
                  <p className="text-sm uppercase tracking-[0.18em] text-muted-foreground">
                    {link.label}
                  </p>
                  <p className="mt-3 text-lg font-semibold text-foreground">
                    {link.value}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-muted-foreground lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>{content.footer.copy}</p>
          <p>{content.footer.note}</p>
        </div>
      </footer>
    </div>
  );
}
