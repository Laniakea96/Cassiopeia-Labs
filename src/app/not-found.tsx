import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description: "Esta página no existe o ha cambiado de sitio.",
};

export default function NotFound() {
  return (
    <section className="hero compact wrap" style={{ minHeight: "70vh" }}>
      <div className="hero-inner stagger">
        <p className="section-kicker">Error 404</p>
        <h1 className="hero-title">
          Perdido en el <span className="serif">espacio.</span>
        </h1>
        <p className="hero-sub">
          Esta página no existe, se movió de órbita o nunca llegó a
          despegar. Vuelve a casa y sigue explorando desde ahí.
        </p>
        <div className="cta-row">
          <Link href="/" className="btn btn-gradient">
            <span>Volver al inicio</span>
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
          <Link href="/apps" className="btn btn-ghost">
            <span>Ver las apps</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
