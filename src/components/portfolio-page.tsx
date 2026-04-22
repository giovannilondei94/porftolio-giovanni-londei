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
  const badgeClass = "badge-pill";
  const cardClass = "panel panel-hover p-6";
  const subtleCardClass = "panel p-6";

  return (
    <div className="relative isolate overflow-hidden">
      <div className="absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(circle_at_top,_rgba(37,99,235,0.16),_transparent_52%),linear-gradient(180deg,_rgba(248,250,252,0.98)_0%,_rgba(248,250,252,0.86)_48%,_rgba(241,245,249,0.74)_100%)]" />
      <div className="absolute inset-x-0 top-0 -z-10 h-full bg-[linear-gradient(120deg,rgba(255,255,255,0)_0%,rgba(37,99,235,0.045)_26%,rgba(34,197,94,0.038)_100%)]" />

      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 lg:px-8">
          <Link href={`/${locale}`} className="group">
            <span className="block text-[0.74rem] font-semibold uppercase tracking-[0.28em] text-foreground/68 transition group-hover:text-foreground">
              Giovanni Londei
            </span>
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {content.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </div>

          <LanguageSwitcher locale={locale} />
        </div>
      </header>

      <main>
        <section id="hero" className="mx-auto max-w-[1440px] px-6 pb-10 pt-16 lg:px-8 lg:pb-12 lg:pt-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(320px,0.62fr)_minmax(0,1.38fr)] lg:gap-x-22 lg:items-start">
            <div className="panel hero-photo-card relative overflow-hidden p-5 sm:p-6">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-[linear-gradient(180deg,rgba(37,99,235,0.08),transparent)]" />
              <div className="mx-auto mb-5 w-full max-w-[88%] overflow-hidden rounded-[1.7rem] border border-border/80 bg-surface shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition duration-500">
                <div className="relative h-[17.5rem] w-full sm:h-[19rem]">
                  <Image
                    src="/images/profile-pic.png"
                    alt="Portrait of Giovanni Londei"
                    fill
                    sizes="(min-width: 1024px) 360px, 100vw"
                    className="object-cover object-center transition duration-500"
                    priority
                  />
                </div>
              </div>

              <div className="mb-5 flex flex-wrap items-center justify-center gap-2.5">
                {content.hero.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    className="social-pill"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {content.hero.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className={`stat-card px-4 py-3.5 ${
                      content.hero.facts.length % 2 !== 0 && fact === content.hero.facts[content.hero.facts.length - 1]
                        ? "sm:col-span-2"
                        : ""
                    }`}
                  >
                    <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
                      {fact.label}
                    </p>
                    <p className="mt-1.5 text-sm font-semibold text-foreground sm:text-[0.97rem]">
                      {fact.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:pt-2 lg:pr-12">
              <h1 className="hero-name-enter max-w-4xl text-5xl font-semibold tracking-[-0.075em] text-foreground sm:text-[4.15rem] lg:text-[5.8rem] lg:leading-[0.9]">
                {content.hero.name}
              </h1>
              <p className="mt-6 pl-1 font-mono text-[0.82rem] font-medium uppercase tracking-[0.26em] text-accent-secondary sm:text-[0.86rem]">
                {content.hero.role}
              </p>
              <p className="mt-5 max-w-3xl whitespace-pre-line pl-1 text-[1.05rem] leading-8 text-muted-foreground sm:text-[1.12rem]">
                {content.hero.headline}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3 pl-1">
                {content.hero.techStack.map((item) => (
                  <span
                    key={item.label}
                    className="group inline-flex items-center gap-2.5 rounded-full border border-border/85 bg-white/94 px-3.5 py-2.5 text-sm font-medium text-foreground/82 shadow-[0_10px_24px_rgba(15,23,42,0.04)] transition duration-300 hover:-translate-y-0.5 hover:border-accent-secondary/35 hover:shadow-[0_14px_28px_rgba(15,23,42,0.08)]"
                  >
                    <span
                      className={`inline-flex h-7 min-w-7 items-center justify-center rounded-full px-1.5 text-[11px] font-bold uppercase tracking-[0.08em] transition duration-300 group-hover:scale-110 ${item.accentClass}`}
                    >
                      {item.shortLabel}
                    </span>
                    <span>{item.label}</span>
                  </span>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-3 pl-1 sm:flex-row sm:items-center">
                <a
                  href={content.hero.secondaryCta.href}
                  className="primary-button inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold"
                >
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="h-4 w-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.46-1.29a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92z" />
                  </svg>
                  {content.hero.secondaryCta.label}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-[1440px] px-6 pb-8 pt-3 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)]">
            <SectionHeading
              eyebrow={content.about.eyebrow}
              title={content.about.title}
              description={content.about.summary}
            />
            <div className="grid gap-6 md:auto-rows-fr md:grid-cols-3">
              {content.about.highlights.map((highlight) => (
                <article
                  key={highlight.title}
                  className={`${cardClass} flex h-full flex-col`}
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {highlight.title}
                  </h3>
                  <p className="mt-3 whitespace-pre-line text-base leading-7 text-muted-foreground">
                    {highlight.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-[1440px] px-6 py-8 lg:px-8">
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
                  className="panel relative overflow-hidden"
                >
                  <span className="absolute left-[15px] top-8 h-3 w-3 rounded-full border-4 border-background bg-accent-strong" />
                  <details className="group" open>
                    <summary className="flex cursor-pointer list-none flex-col gap-4 p-6 pl-12 outline-none marker:hidden [&::-webkit-details-marker]:hidden md:flex-row md:items-start md:justify-between">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-[0.22em] text-muted-foreground">
                          {item.period}
                        </p>
                        <h3 className="mt-2 text-[1.28rem] font-semibold text-foreground">
                          {item.role}
                        </h3>
                        <p className="mt-1 text-base text-foreground/80">
                          {item.company} · {item.location}
                        </p>
                      </div>
                      <div className="flex items-center gap-3 self-start md:pt-0.5">
                        <span className="rounded-full border border-border/85 bg-surface/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
                          {item.context}
                        </span>
                        <svg
                          aria-hidden="true"
                          viewBox="0 0 24 24"
                          className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="m6 9 6 6 6-6" />
                        </svg>
                      </div>
                    </summary>

                    <div className="px-6 pb-6 pl-12">
                      <ul className="space-y-3 text-base leading-7 text-muted-foreground">
                        {item.responsibilities.map((responsibility) => (
                          <li key={responsibility} className="flex gap-3">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-strong" />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {item.stack.map((tech) => (
                          <span key={tech} className={badgeClass}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </details>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-[1440px] px-6 py-8 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)]">
            <SectionHeading
              eyebrow={content.skills.eyebrow}
              title={content.skills.title}
              description={content.skills.description}
            />
            <div className="grid gap-5 md:auto-rows-fr md:grid-cols-2 xl:grid-cols-3">
              {content.skills.categories.map((category) => (
                <article
                  key={category.title}
                  className={`${cardClass} flex h-full flex-col`}
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2.5">
                    {category.items.map((skill) => (
                      <span key={skill} className={badgeClass}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="mx-auto max-w-[1440px] px-6 py-8 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)]">
            <SectionHeading
              eyebrow={content.education.eyebrow}
              title={content.education.title}
              description={content.education.description}
            />
            <div className="grid gap-6 md:grid-cols-2">
              {content.education.cards.map((card) => (
                <article
                  key={card.title}
                  className={subtleCardClass}
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {card.title}
                  </h3>
                  <div className="mt-5 space-y-5">
                    {card.items.map((item) => (
                      <div
                        key={`${card.title}-${item.title}`}
                        className="panel-soft p-4"
                      >
                        <h4 className="text-base font-semibold text-foreground">
                          {item.title}
                        </h4>
                        {item.institution ? (
                          <p className="mt-1 text-sm text-foreground/80">
                            {item.institution}
                          </p>
                        ) : null}
                        {item.period ? (
                          <p className="mt-2 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                            {item.period}
                          </p>
                        ) : null}
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">
                          {item.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-[1440px] px-6 py-8 lg:px-8">
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
                  className={`${cardClass} block`}
                >
                  <p className="text-[0.8rem] font-medium uppercase tracking-[0.2em] text-muted-foreground">
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

      <footer className="border-t border-border/70 bg-white/35">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-6 py-8 text-sm text-muted-foreground lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>{content.footer.copy}</p>
          <p>{content.footer.note}</p>
        </div>
      </footer>
    </div>
  );
}
