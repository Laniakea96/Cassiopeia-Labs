import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página no encontrada",
  description: "Esta página no existe o ha cambiado de sitio.",
};

export default function NotFound() {
  return (
    <section className="wrap lost">
      <p className="lost-code" aria-hidden="true">
        404
      </p>
      <h1 className="h1">Perdido en el espacio.</h1>
      <p className="lede">
        Esta página no existe, cambió de órbita o nunca llegó a despegar.
      </p>
      <div className="hero-cta">
        <Link href="/" className="btn btn-star">
          Volver al inicio
        </Link>
        <Link href="/#apps" className="btn btn-line">
          Ver las apps
        </Link>
      </div>
    </section>
  );
}
