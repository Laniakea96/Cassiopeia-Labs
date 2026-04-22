import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Ponte en contacto con Cassiopeia Labs.",
};

const CONTACT_EMAIL = "hola@cassiopeialabs.com";

export default function ContactPage() {
  return (
    <>
      <section className="hero compact wrap">
        <div className="hero-inner stagger">
          <h1 className="hero-title">
            Hablemos, <span className="serif">sin prisa.</span>
          </h1>
          <p className="hero-sub">
            Leemos <span className="accent-amber">todos</span> los correos. Si
            escribes con una <span className="accent-orange">idea</span>, una
            duda o simplemente para{" "}
            <span className="accent-purple">saludar</span>, te responderemos.
          </p>
        </div>
      </section>

      <section className="block wrap">
        <div className="contact-grid">
          <div className="contact-card reveal">
            <h3>Email directo</h3>
            <p>
              La forma más rápida y la que preferimos. Escríbenos contando lo
              que tengas en mente.
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="big-email">
              {CONTACT_EMAIL}
            </a>
          </div>

          <div className="contact-card reveal">
            <h3>En la red</h3>
            <p>
              Publicamos código y procesos abiertos cuando tiene sentido.
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "grid",
                gap: "14px",
              }}
            >
              <li>
                <a
                  href="https://github.com/Laniakea96"
                  target="_blank"
                  rel="noopener"
                  className="link-quiet"
                  style={{ fontSize: "15px" }}
                >
                  GitHub · Laniakea96 <span className="arrow">↗</span>
                </a>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="link-quiet"
                  style={{ fontSize: "15px" }}
                >
                  Políticas de privacidad{" "}
                  <span className="arrow">→</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="link-quiet"
                  style={{ fontSize: "15px" }}
                >
                  Sobre el estudio <span className="arrow">→</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
