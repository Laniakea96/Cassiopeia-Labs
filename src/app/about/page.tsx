import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Estudio",
  description: "Estudio independiente de apps móviles.",
};

export default function AboutPage() {
  return (
    <>
      <section className="hero compact wrap">
        <div className="hero-inner stagger">
          <h1 className="hero-title">
            Pequeño por <span className="serif">elección.</span>
          </h1>
          <p className="hero-sub">
            Un estudio independiente con sede en{" "}
            <span className="accent-amber">España</span>. Producto{" "}
            <span className="accent-purple">pequeño</span>,{" "}
            <span className="accent-orange">cuidado</span> y con{" "}
            <span className="accent-yellow">voz propia</span>.
          </p>
        </div>
      </section>

      <section className="block wrap">
        <div className="estudio-grid reveal">
          <div className="prose">
            <p className="lead">
              Estudio independiente con sede en España, especializado en apps
              móviles con carácter propio.
            </p>
            <p>
              <strong>Cassiopeia Labs</strong> es una marca registrada en la
              Oficina Española de Patentes y Marcas (OEPM), Clase 9. Publicamos
              directamente en App Store y Google Play, sin agencias, sin
              intermediarios.
            </p>
            <p>
              Creemos en producto pequeño: menos pantallas, más cuidado en las
              que importan. Publicamos cuando está listo, lo mantenemos
              mientras tenga sentido, y escribimos el código, el copy y las
              políticas nosotros mismos.
            </p>
            <p>
              Si tienes una idea y quieres construirla con nosotros —o si
              simplemente te gusta cómo hacemos las cosas—{" "}
              <Link
                href="/contact"
                style={{
                  color: "var(--fg)",
                  borderBottom: "1px solid var(--line-strong)",
                }}
              >
                escríbenos
              </Link>
              .
            </p>
          </div>

          <div className="stats">
            <div className="stat">
              <div className="k">3</div>
              <div className="lbl">Apps publicadas</div>
            </div>
            <div className="stat">
              <div className="k">Flutter</div>
              <div className="lbl">iOS · Android</div>
            </div>
            <div className="stat">
              <div className="k">
                <span className="serif">ES</span>
              </div>
              <div className="lbl">Sede · España</div>
            </div>
            <div className="stat">
              <div className="k">®</div>
              <div className="lbl">OEPM · Clase 9</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
