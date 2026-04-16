type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div>
      <p className="font-mono text-sm uppercase tracking-[0.28em] text-accent-strong">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="mt-5 max-w-xs text-base leading-7 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
