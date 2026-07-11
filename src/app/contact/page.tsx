import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Ponte en contacto con Cassiopeia Labs.",
};

const CONTACT_EMAIL = "samuparre96@gmail.com";

export default function ContactPage() {
  return (
    <>
      <section className="hero compact wrap">
        <div className="hero-inner stagger">
          <h1 className="hero-title">
            Hablemos, <span className="serif">sin prisa.</span>
          </h1>
          <p className="hero-sub">
            Leemos <span className="accent-ice">todos</span> los correos. Si
            escribes con una <span className="accent-sky">idea</span>, una
            duda o simplemente para{" "}
            <span className="accent-blue">saludar</span>, te responderemos.
          </p>
        </div>
      </section>

      <section className="block wrap" style={{ paddingTop: 0 }}>
        <div className="contact-grid">
          <article className="contact-card hire-card reveal">
            <div className="hire-photo-wrap">
              <span className="hire-star hire-star-0" aria-hidden="true" />
              <span className="hire-star hire-star-1" aria-hidden="true" />
              <span className="hire-star hire-star-2" aria-hidden="true" />
              <span className="hire-star hire-star-3" aria-hidden="true" />
              <span className="hire-star hire-star-4" aria-hidden="true" />
              <span className="hire-star hire-star-5" aria-hidden="true" />
              <span className="hire-star hire-star-6" aria-hidden="true" />
              <span className="hire-star hire-star-7" aria-hidden="true" />
              <div className="hire-photo">
                <img src="/images/profile.jpg" alt="Samuel Parreño Martinez" />
              </div>
            </div>
            <div className="hire-body">
              <span className="section-kicker">
                Disponible para{" "}
                <span style={{ textDecoration: "line-through", opacity: 0.55 }}>
                  trabajar
                </span>{" "}
                crear
              </span>
              <h3>
                ¿Buscas un{" "}
                <span className="serif">desarrollador</span>?
              </h3>
              <p>
                Soy{" "}
                <strong style={{ color: "#5fb8ff" }}>
                  Samuel Parreño
                </strong>
                , desarrollador independiente detrás de Cassiopeia Labs. Abierto
                a incorporarme a una empresa o colaboraciones puntuales —
                desarrollo multiplataforma y web. Si buscas a alguien con visión
                de producto y autonomía técnica, hablemos.
              </p>
              <div
                style={{
                  display: "flex",
                  gap: 12,
                  flexWrap: "wrap",
                  marginTop: 8,
                }}
              >
                <a
                  href={`mailto:${CONTACT_EMAIL}?subject=Oportunidad%20laboral`}
                  className="btn btn-primary btn-gradient-hover"
                >
                  Contáctame
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <path d="M5 12h14M13 5l7 7-7 7" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/34655153092?text=Hola%20Samuel%2C%20te%20escribo%20desde%20tu%20web%20por%20una%20oportunidad%20de%20colaboraci%C3%B3n."
                  target="_blank"
                  rel="noopener"
                  className="btn btn-ghost btn-whatsapp"
                  aria-label="Escríbeme por WhatsApp"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.695.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  WhatsApp
                </a>
                <a
                  href="https://www.linkedin.com/in/samuelparreno/"
                  target="_blank"
                  rel="noopener"
                  className="btn btn-ghost btn-linkedin"
                  aria-label="Ver mi perfil de LinkedIn"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.852 3.37-1.852 3.601 0 4.267 2.37 4.267 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/Laniakea96"
                  target="_blank"
                  rel="noopener"
                  className="btn btn-ghost btn-github"
                  aria-label="Ver mi perfil de GitHub"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </article>

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
            <h3>Antes de escribir</h3>
            <p>
              Para que sea más rápido arrancar la conversación:
            </p>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: "0 0 22px",
                display: "grid",
                gap: "12px",
                color: "var(--mute)",
                fontSize: "15px",
                lineHeight: 1.5,
              }}
            >
              <li>
                <strong style={{ color: "var(--fg)", fontWeight: 500 }}>
                  Idiomas
                </strong>
                {" · "}Español y English.
              </li>
              <li>
                <strong style={{ color: "var(--fg)", fontWeight: 500 }}>
                  Tiempo de respuesta
                </strong>
                {" · "}Hasta 48&nbsp;h laborables.
              </li>
              <li>
                <strong style={{ color: "var(--fg)", fontWeight: 500 }}>
                  Para urgencias
                </strong>
                {" · "}WhatsApp es el canal más rápido.
              </li>
            </ul>
            <ul
              style={{
                listStyle: "none",
                padding: "18px 0 0",
                margin: 0,
                borderTop: "1px solid var(--line)",
                display: "grid",
                gap: "12px",
              }}
            >
              <li>
                <Link
                  href="/about"
                  className="link-quiet"
                  style={{ fontSize: "15px" }}
                >
                  Sobre el estudio <span className="arrow">→</span>
                </Link>
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
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
