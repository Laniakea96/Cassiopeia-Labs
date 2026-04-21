interface Props {
  children: React.ReactNode;
  variant?: "default" | "brand";
}

export default function Badge({ children, variant = "default" }: Props) {
  const styles =
    variant === "brand"
      ? "bg-brand-500/10 text-brand-400 border-brand-500/20"
      : "bg-surface-overlay text-muted border-border";

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles}`}
    >
      {children}
    </span>
  );
}
