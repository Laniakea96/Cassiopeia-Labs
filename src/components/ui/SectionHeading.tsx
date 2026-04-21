interface Props {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
        {title}
      </h2>
      {subtitle && <p className="text-muted text-lg max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
