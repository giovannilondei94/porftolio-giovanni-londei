import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16">
      <div className="max-w-md rounded-3xl border border-border/70 bg-white/80 p-10 text-center shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur">
        <p className="font-mono text-sm uppercase tracking-[0.28em] text-muted-foreground">
          404
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-foreground">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-7 text-muted-foreground">
          The requested locale or page is not available in this portfolio.
        </p>
        <Link
          href="/it"
          className="mt-8 inline-flex rounded-full bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:opacity-90"
        >
          Go to portfolio
        </Link>
      </div>
    </main>
  );
}
