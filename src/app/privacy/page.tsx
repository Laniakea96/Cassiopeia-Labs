import type { Metadata } from "next";
import Link from "next/link";
import { getAllApps } from "@/data/apps";

export const metadata: Metadata = {
  title: "Privacidad",
  description: "Políticas de privacidad de Piripi, Luupy y Mimoney.",
};

const EMAIL_REGEX = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

export default function PrivacyPage() {
  const apps = getAllApps().filter((app) => app.privacyShort);

  return (
    <>
      <section className="hero compact wrap">
        <div className="hero-inner stagger">
          <h1 className="hero-title">
            Privacidad, <span className="serif">clara.</span>
          </h1>
          <p className="hero-sub">
            Una política por app, redactada en{" "}
            <span className="accent-amber">lenguaje directo</span>. Estas
            páginas cumplen los requisitos de{" "}
            <span className="accent-yellow">App Store</span> y{" "}
            <span className="accent-orange">Google Play</span> y se enlazan
            desde la ficha de cada producto.
          </p>
        </div>
      </section>

      <section className="block privacy-section">
        <div className="wrap">
          <div className="privacy-stack">
            {apps.map((app) => {
              const p = app.privacyShort!;
              const emailMatch = p.contact.match(EMAIL_REGEX);
              const email = emailMatch?.[0] ?? "";
              const contactParts = email
                ? p.contact.split(email)
                : [p.contact, ""];
              return (
                <article
                  key={app.slug}
                  className="privacy-card reveal"
                  id={`privacy-${app.slug}`}
                >
                  <div className="privacy-head">
                    <div className="privacy-head-l">
                      <div
                        className={`mini-icon ${app.iconClass}`}
                        aria-hidden="true"
                      >
                        <img src={app.iconSrc} alt="" />
                      </div>
                      <h3>
                        {app.name}{" "}
                        <span style={{ fontWeight: 400, color: "var(--dim)" }}>
                          — Privacidad
                        </span>
                      </h3>
                    </div>
                    <div className="privacy-date">
                      Actualizado <span className="tag">{app.lastUpdated}</span>
                    </div>
                  </div>
                  <div className="privacy-body">
                    <div>
                      <h4>Datos que recogemos</h4>
                      <p>{p.data}</p>
                    </div>
                    <div>
                      <h4>Almacenamiento</h4>
                      <p>{p.storage}</p>
                    </div>
                    <div>
                      <h4>Autenticación</h4>
                      <p>{p.auth}</p>
                    </div>
                    <div>
                      <h4>Contacto</h4>
                      <p>
                        {contactParts[0]}
                        {email && (
                          <a
                            href={`mailto:${email}`}
                            style={{
                              color: "var(--fg)",
                              borderBottom: "1px solid var(--line-strong)",
                            }}
                          >
                            {email}
                          </a>
                        )}
                        {contactParts[1] ?? ""}
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: 24,
                      paddingTop: 16,
                      borderTop: "1px solid var(--line)",
                      display: "flex",
                      gap: 16,
                      flexWrap: "wrap",
                    }}
                  >
                    <Link
                      className="link-quiet"
                      href={`/apps/${app.slug}/privacy`}
                    >
                      Ver política completa <span className="arrow">→</span>
                    </Link>
                    <Link
                      className="link-quiet"
                      href={`/apps/${app.slug}/terms`}
                    >
                      Términos <span className="arrow">→</span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
