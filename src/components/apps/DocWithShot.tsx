import type { AppData } from "@/types/app";

interface Props {
  app: AppData;
  /** Índice de la captura que acompaña al texto; si no existe, solo texto. */
  shot: number;
  children: React.ReactNode;
}

// Texto largo (MDX) con una captura de la app fija al lado mientras se lee.
export default function DocWithShot({ app, shot, children }: Props) {
  const image = app.screenshots[shot];
  if (!image) return <article className="doc prose">{children}</article>;

  return (
    <div
      className="doc-layout"
      style={{ "--glow": app.glow } as React.CSSProperties}
    >
      <article className="doc prose">{children}</article>
      <aside className="doc-aside">
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          width={640}
          height={1385}
        />
      </aside>
    </div>
  );
}
