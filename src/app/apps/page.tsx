import type { Metadata } from "next";
import Link from "next/link";
import { getAllApps } from "@/data/apps";
import { statusLabel } from "@/components/home/FeaturedApps";
import { PhoneFan, StoreBadges } from "@/components/apps/AppVisuals";

export const metadata: Metadata = {
  title: "Apps",
  description:
    "Luupy, Piripi y Rexis: las apps de Cassiopeia Labs para iOS y Android.",
};

// Escaparate de todas las apps: un bloque grande por app, con su color, sus
// capturas y sus enlaces; los lados se alternan de una app a otra.
export default function AppsPage() {
  const apps = getAllApps();

  return (
    <>
      <header className="wrap page-head">
        <h1 className="h1">Las apps.</h1>
        <p className="lede">
          Tres deseos que se convirtieron en tres realidades. Cada una resuelve
          una cosa y la resuelve bien.
        </p>
      </header>

      <section className="wrap catalog" aria-label="Apps">
        {apps.map((app, i) => (
          <article
            key={app.slug}
            className={`catalog-item app-theme${i % 2 ? " is-flip" : ""}`}
            style={{ "--glow": app.glow } as React.CSSProperties}
          >
            <div className="catalog-text">
              <Link
                href={`/apps/${app.slug}`}
                className={`app-head-icon app-head-icon-lg ${app.iconClass}`}
                tabIndex={-1}
                aria-hidden="true"
              >
                <img src={app.iconSrc} alt="" />
              </Link>
              <p className={`status status-${app.status}`}>
                {statusLabel(app)}
              </p>
              <h2 className="app-head-name catalog-name">
                <Link href={`/apps/${app.slug}`}>{app.name}</Link>
              </h2>
              <p className="app-head-tagline">{app.tagline}</p>
              <p className="app-head-desc">{app.description}</p>

              {app.features && (
                <ul className="catalog-features">
                  {app.features.slice(0, 3).map((f) => (
                    <li key={f.title}>{f.title}</li>
                  ))}
                </ul>
              )}

              <div className="app-head-actions">
                <Link
                  href={`/apps/${app.slug}`}
                  className="btn btn-line btn-lg"
                >
                  Ver {app.name}
                </Link>
                <StoreBadges app={app} />
              </div>
            </div>

            <div className="catalog-visual">
              {app.screenshots.length >= 3 ? (
                <PhoneFan app={app} />
              ) : (
                <div
                  className={`catalog-icon ${app.iconClass}`}
                  aria-hidden="true"
                >
                  <img src={app.iconSrc} alt="" />
                </div>
              )}
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
