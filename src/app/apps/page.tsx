import type { Metadata } from "next";
import Link from "next/link";
import { getAllApps } from "@/data/apps";

export const metadata: Metadata = {
  title: "Apps",
  description:
    "Piripi, Luupy y Mimoney — apps móviles del estudio Cassiopeia Labs.",
};

export default function AppsPage() {
  const apps = getAllApps();

  return (
    <>
      <section className="hero compact wrap">
        <div className="hero-inner stagger">
          <h1 className="hero-title">
            Tres apps, <span className="serif">tres estrellas.</span>
          </h1>
          <p className="hero-sub">
            Producto <span className="accent-purple">pequeño</span>,{" "}
            <span className="accent-orange">cuidado</span> y con{" "}
            <span className="accent-yellow">voz propia</span>. Disponibles en
            App Store y Google Play.
          </p>
        </div>
      </section>

      <section className="block wrap">
        <div className="constellation-wrap">
          <svg className="constellation" aria-hidden="true" />
          <div className="apps-grid">
            {apps.map((app) => (
              <article
                key={app.slug}
                className="card reveal"
                id={app.slug}
                data-star
              >
                {app.status === "wip" && (
                  <span className="card-ribbon" aria-label="En construcción">
                    En obras
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

            <article className="card soon reveal">
              <div className="app-icon icon-soon" aria-hidden="true">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </div>
              <h3 className="card-name">Próximamente</h3>
              <p className="card-tagline">2026 · En el taller</p>
              <p className="card-desc">
                Algo nuevo cocinándose en el estudio. Si quieres enterarte
                antes que nadie, escríbenos — avisamos en privado.
              </p>
              <div className="card-actions">
                <Link className="link-quiet" href="/contact">
                  Avísame <span className="arrow">→</span>
                </Link>
                <span className="link-quiet" style={{ opacity: 0.5 }}>
                  —
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
