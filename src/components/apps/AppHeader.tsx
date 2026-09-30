"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppData } from "@/types/app";
import { statusLabel } from "@/components/home/FeaturedApps";

interface Props {
  app: AppData;
}

const SECTION_LABELS: Record<string, string> = {
  support: "Soporte",
  privacy: "Privacidad",
  terms: "Términos",
};

export default function AppHeader({ app }: Props) {
  const pathname = usePathname();
  // /apps/[slug]/<section> → cabecera compacta en subpáginas
  const section = pathname.split("/")[3];
  const sectionLabel = section ? SECTION_LABELS[section] : undefined;
  const glow = { "--glow": app.glow } as React.CSSProperties;

  if (sectionLabel) {
    return (
      <header className="wrap app-head app-head-mini" style={glow}>
        <Link
          href={`/apps/${app.slug}`}
          className={`app-head-icon ${app.iconClass}`}
          aria-label={`Volver a ${app.name}`}
        >
          <img src={app.iconSrc} alt="" />
        </Link>
        <div>
          <h1 className="app-head-title">
            {sectionLabel} de {app.name}
          </h1>
          {(section === "privacy" || section === "terms") && (
            <p className="app-head-date">Actualizado el {app.lastUpdated}</p>
          )}
        </div>
      </header>
    );
  }

  const stores = [
    { href: app.links.appStore, label: "App Store" },
    { href: app.links.playStore, label: "Google Play" },
  ].filter((s): s is { href: string; label: string } => Boolean(s.href));

  // Tres capturas en abanico junto al texto (la del medio, delante).
  const fan =
    app.screenshots.length >= 3
      ? [
          app.screenshots[1],
          app.screenshots[0],
          app.screenshots[4] ?? app.screenshots[2],
        ]
      : null;

  return (
    <header
      className={`wrap app-head${fan ? " app-head-split" : ""}`}
      style={glow}
    >
      <div className="app-head-text">
        <div className={`app-head-icon app-head-icon-lg ${app.iconClass}`}>
          <img src={app.iconSrc} alt="" />
        </div>
        <p className={`status status-${app.status}`}>{statusLabel(app)}</p>
        <h1 className="app-head-name">{app.name}</h1>
        <p className="app-head-tagline">{app.tagline}</p>
        <p className="app-head-desc">
          {app.longDescription ?? app.description}
        </p>

        <div className="app-head-actions">
          {stores.length > 0 ? (
            stores.map((s) => (
              <a
                key={s.label}
                className="btn btn-star"
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Descargar en {s.label}
              </a>
            ))
          ) : (
            <p className="app-head-soon">
              Todavía no está en las tiendas.{" "}
              <Link href="/#contacto" className="text-link">
                Avísame cuando salga
              </Link>
            </p>
          )}
          {app.links.instagram && (
            <a
              className="btn btn-line"
              href={app.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          )}
          {app.links.web && (
            <a
              className="btn btn-line"
              href={app.links.web}
              target="_blank"
              rel="noopener noreferrer"
            >
              Web
            </a>
          )}
        </div>
      </div>

      {fan && (
        <div className="phone-fan" aria-hidden="true">
          {fan.map((shot, i) => (
            <img
              key={shot.src}
              className={`fan-phone fan-${i}`}
              src={shot.src}
              alt=""
            />
          ))}
        </div>
      )}
    </header>
  );
}
