import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="hero wrap" aria-label="Introducción">
      <div className="hero-brand" id="heroBrand" aria-hidden="true">
        <span className="hero-brand-logo" />
        <span className="hero-brand-text">
          <span className="hb-main">
            Cass
            <span className="i-star">ı</span>
            ope
            <span className="i-star">ı</span>
            a
          </span>
          <span className="hb-labs">Labs</span>
        </span>
      </div>

      <div className="hero-inner stagger">
        <h1 className="hero-title">
          Apps móviles hechas con <span className="serif">magia</span>.
        </h1>

        <p className="hero-sub">
          Cassiopeia Labs es un estudio independiente. Diseñamos y construimos
          producto <span className="accent-purple">pequeño</span>,{" "}
          <span className="accent-orange">cuidado</span> y con{" "}
          <span className="accent-yellow">voz propia</span>.
        </p>

        <div className="cta-row">
          <Link href="/apps" className="btn btn-gradient">
            <span>Ver nuestras apps</span>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </Link>
          <Link href="/contact" className="btn btn-ghost">
            <span>Escríbenos</span>
          </Link>
        </div>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <div className="bar" />
        <svg
          className="chev"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}
