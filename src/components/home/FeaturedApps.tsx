import Link from "next/link";

type FeaturedApp = {
  slug: string;
  name: string;
  iconClass: string;
  iconSrc: string;
  tagline: string;
  description: string;
};

const apps: FeaturedApp[] = [
  {
    slug: "piripi",
    name: "Piripi",
    iconClass: "icon-piripi",
    iconSrc: "/images/piripi-icon.png",
    tagline: "Fiesta · 18–30 · ES / Latam",
    description:
      "Juegos rápidos para romper el hielo en cualquier fiesta. Retos, rondas y categorías pensadas para grupos reales.",
  },
  {
    slug: "luupy",
    name: "Luupy",
    iconClass: "icon-luupy",
    iconSrc: "/images/luupy-icon.png",
    tagline: "Hábitos · Rutinas · Diario",
    description:
      "[Categoría por definir]. Un bucle amable para volver a lo importante cada día, con notificaciones que no gritan.",
  },
  {
    slug: "mimoney",
    name: "Mimoney",
    iconClass: "icon-mimoney",
    iconSrc: "/images/mimoney-icon.png",
    tagline: "Finanzas personales",
    description:
      "Un lugar tranquilo para ver en qué se va tu dinero. Categorías simples, entradas rápidas, sin conectar cuentas.",
  },
];

export default function FeaturedApps() {
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
                <Link className="pill-sm" href={`/apps#${app.slug}`}>
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
                  href={`/privacy#privacy-${app.slug}`}
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
