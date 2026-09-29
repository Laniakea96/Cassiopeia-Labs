import Link from "next/link";
import { getFeaturedApps } from "@/data/apps";
import type { AppData } from "@/types/app";

export function statusLabel(app: AppData) {
  if (app.status !== "live") return "En el taller";
  const stores = [
    app.links.appStore && "App Store",
    app.links.playStore && "Google Play",
  ].filter(Boolean);
  return stores.length ? `En ${stores.join(" y ")}` : "Disponible";
}

export default function FeaturedApps() {
  const apps = getFeaturedApps();

  return (
    <section id="apps" className="block wrap" aria-labelledby="apps-title">
      <div className="section-head">
        <h2 id="apps-title" className="h2">
          Tres apps, tres estrellas.
        </h2>
        <p className="lede">
          Tres deseos que se convirtieron en tres realidades.
        </p>
      </div>

      <ol className="app-list">
        {apps.map((app) => (
          <li
            key={app.slug}
            className="app-row"
            style={{ "--glow": app.glow } as React.CSSProperties}
          >
            <Link
              href={`/apps/${app.slug}`}
              className={`app-row-icon ${app.iconClass}`}
              tabIndex={-1}
              aria-hidden="true"
            >
              <img src={app.iconSrc} alt="" />
            </Link>

            <div className="app-row-body">
              <p className={`status status-${app.status}`}>{statusLabel(app)}</p>
              <h3 className="app-row-name">
                <Link href={`/apps/${app.slug}`}>{app.name}</Link>
              </h3>
              <p className="app-row-tagline">{app.tagline}</p>
              <p className="app-row-desc">{app.description}</p>
            </div>

            <div className="app-row-links">
              <Link href={`/apps/${app.slug}`} className="btn btn-line btn-lg">
                Ver {app.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
