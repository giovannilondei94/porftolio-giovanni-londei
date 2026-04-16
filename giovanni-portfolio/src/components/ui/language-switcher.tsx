import Link from "next/link";
import { locales, localeLabels, type Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  return (
    <div className="inline-flex rounded-full border border-border bg-white/85 p-1">
      {locales.map((item) => {
        const isActive = item === locale;

        return (
          <Link
            key={item}
            href={`/${item}`}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] transition ${
              isActive
                ? "bg-foreground text-background"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {localeLabels[item]}
          </Link>
        );
      })}
    </div>
  );
}
