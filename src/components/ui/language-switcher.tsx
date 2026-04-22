import Link from "next/link";
import { locales, localeLabels, type Locale } from "@/lib/i18n";

type LanguageSwitcherProps = {
  locale: Locale;
};

export function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  return (
    <div className="panel inline-flex rounded-full p-1 shadow-none">
      {locales.map((item) => {
        const isActive = item === locale;

        return (
          <Link
            key={item}
            href={`/${item}`}
            className={`rounded-full px-3.5 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.24em] transition ${
              isActive
                ? "bg-foreground text-white shadow-[0_10px_22px_rgba(15,23,42,0.14)]"
                : "text-muted-foreground hover:bg-surface/80 hover:text-foreground"
            }`}
          >
            {localeLabels[item]}
          </Link>
        );
      })}
    </div>
  );
}
