import Link from "next/link";
import { AppData } from "@/types/app";
import { PhoneFan, StoreBadges } from "./AppVisuals";

interface Props {
  app: AppData;
}

// Cabecera de la ficha de una app. Vive en el layout, así que es la misma en
// Resumen, Soporte, Privacidad y Términos: al cambiar de pestaña solo cambia
// el contenido de debajo.
export default function AppHeader({ app }: Props) {
  const glow = { "--glow": app.glow } as React.CSSProperties;

  const hasFan = app.screenshots.length >= 3;

  return (
    <header
      className={`wrap app-head${hasFan ? " app-head-split" : ""}`}
      style={glow}
    >
      <div className="app-head-text">
        <div className={`app-head-icon app-head-icon-lg ${app.iconClass}`}>
          <img src={app.iconSrc} alt="" />
        </div>
        <h1 className="app-head-name">{app.name}</h1>
        <p className="app-head-tagline">{app.tagline}</p>
        <p className="app-head-desc">
          {app.longDescription ?? app.description}
        </p>

        <div className="app-head-actions">
          {app.links.appStore || app.links.playStore ? (
            <StoreBadges app={app} />
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
              className="btn btn-line btn-instagram"
              href={app.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5.5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle cx="17.4" cy="6.6" r="1.1" className="dot" />
              </svg>
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

      <PhoneFan app={app} />
    </header>
  );
}
