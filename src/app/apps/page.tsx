import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Apps",
  description:
    "Piripi, Luupy y Mimoney — apps móviles del estudio Cassiopeia Labs.",
};

type AppItem = {
  slug: string;
  name: string;
  iconClass: string;
  iconSrc: string;
  tagline: string;
  description: string;
};

const apps: AppItem[] = [
  {
    slug: "piripi",
    name: "Piripi",
    iconClass: "icon-piripi",
    iconSrc: "/images/piripi-icon.png",
    tagline: "Fiesta · 18–30 · ES / Latam",
    description:
      "Juegos rápidos para romper el hielo en cualquier fiesta. Retos, rondas y categorías pensadas para grupos reales, sin descargas pesadas ni fricción.",
  },
  {
    slug: "luupy",
    name: "Luupy",
    iconClass: "icon-luupy",
    iconSrc: "/images/luupy-icon.png",
    tagline: "Hábitos · Rutinas · Diario",
    description:
      "Finanzas. Un bucle amable para volver a lo importante cada día, con notificaciones que no gritan.",
  },
  {
    slug: "mimoney",
    name: "Mimoney",
    iconClass: "icon-mimoney",
    iconSrc: "/images/mimoney-icon.png",
    tagline: "Finanzas personales",
    description:
      "Un lugar tranquilo para ver en qué se va tu dinero. Categorías simples, entradas rápidas, sin conectar cuentas ni pedir permisos innecesarios.",
  },
];

export default function AppsPage() {
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
                <div
                  className={`app-icon ${app.iconClass}`}
                  aria-hidden="true"
                >
                  <img src={app.iconSrc} alt="" />
                </div>
                <h3 className="card-name">{app.name}</h3>
                <p className="card-tagline">{app.tagline}</p>
                <p className="card-desc">{app.description}</p>
                <div className="card-actions">
                  <a className="pill-sm" href={`#${app.slug}`}>
                    App Store
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    >
                      <path d="M7 17L17 7M8 7h9v9" />
                    </svg>
                  </a>
                  <Link
                    className="link-quiet"
                    href={`/privacy#privacy-${app.slug}`}
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
