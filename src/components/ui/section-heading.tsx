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
    <div className="lg:pr-4">
      <p className="font-mono text-[0.72rem] font-semibold uppercase tracking-[0.32em] text-accent-strong">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-[2.15rem] font-semibold tracking-[-0.055em] text-foreground sm:text-[2.55rem] sm:leading-[1.02]">
        {title}
      </h2>
      <p className="mt-5 max-w-sm whitespace-pre-line text-[1.01rem] leading-7 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
