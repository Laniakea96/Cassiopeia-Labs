import Link from "next/link";
import { getFeaturedApps } from "@/data/apps";

export default function FeaturedApps() {
  const apps = getFeaturedApps();

  return (
    <section className="block wrap" aria-label="Apps destacadas">
      <div className="section-head reveal">
        <div>
          <span className="section-kicker">Catálogo</span>
          <h2 className="section-title">
            Tres apps, <span className="serif">tres estrellas.</span>
          </h2>
        </div>
      </div>

      <div className="constellation-wrap">
        <svg className="constellation" aria-hidden="true" />
        <div className="apps-grid">
          {apps.map((app) => (
            <article key={app.slug} className="card reveal" data-star>
              {app.status === "wip" && (
                <span className="card-ribbon" aria-label="En construcción">
                  En obras
                </span>
              )}
              {app.status === "live" && (
                <span
                  className="card-ribbon card-ribbon-live"
                  aria-label="Disponible"
                >
                  Disponible
                </span>
              )}
              <Link
                href={`/apps/${app.slug}`}
                className="app-icon-burst-wrap"
                aria-label={`Saber más de ${app.name}`}
              >
                <span className="hire-star hire-star-0" aria-hidden="true" />
                <span className="hire-star hire-star-1" aria-hidden="true" />
                <span className="hire-star hire-star-2" aria-hidden="true" />
                <span className="hire-star hire-star-3" aria-hidden="true" />
                <span className="hire-star hire-star-4" aria-hidden="true" />
                <span className="hire-star hire-star-5" aria-hidden="true" />
                <span className="hire-star hire-star-6" aria-hidden="true" />
                <span className="hire-star hire-star-7" aria-hidden="true" />
                <div
                  className={`app-icon ${app.iconClass}`}
                  aria-hidden="true"
                >
                  <img src={app.iconSrc} alt="" />
                </div>
              </Link>
              <h3 className="card-name">{app.name}</h3>
              <p className="card-tagline">{app.tagline}</p>
              <p className="card-desc">{app.description}</p>
              <div className="card-actions">
                <Link className="pill-sm" href={`/apps/${app.slug}`}>
                  Saber más
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link
                  className="link-quiet"
                  href={`/apps/${app.slug}/privacy`}
                >
                  Privacidad <span className="arrow">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
