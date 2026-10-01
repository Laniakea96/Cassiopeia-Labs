import type { Metadata } from "next";
import Link from "next/link";
import { getAllApps } from "@/data/apps";

export const metadata: Metadata = {
  title: "Privacidad",
  description: "Políticas de privacidad de Piripi, Luupy y Rexis.",
};

const EMAIL_REGEX = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;

export default function PrivacyPage() {
  const apps = getAllApps().filter((app) => app.privacyShort);

  return (
    <>
      <header className="wrap page-head">
        <h1 className="h1">Privacidad, clara.</h1>
        <p className="lede">
          Una política por app, en lenguaje directo. Estas páginas cumplen los
          requisitos de App Store y Google Play y se enlazan desde la ficha de
          cada app.
        </p>
      </header>

      <section className="wrap privacy-list">
        {apps.map((app) => {
          const p = app.privacyShort!;
          const email = p.contact.match(EMAIL_REGEX)?.[0] ?? "";
          const [before, after] = email ? p.contact.split(email) : [p.contact, ""];

          return (
            <article
              key={app.slug}
              id={`privacy-${app.slug}`}
              className="privacy-item"
              style={{ "--glow": app.glow } as React.CSSProperties}
            >
              <header className="privacy-item-head">
                <div className={`app-head-icon ${app.iconClass}`} aria-hidden="true">
                  <img src={app.iconSrc} alt="" />
                </div>
                <div>
                  <h2>{app.name}</h2>
                  <p className="app-head-date">Actualizado el {app.lastUpdated}</p>
                </div>
              </header>

              <dl className="privacy-facts">
                <div>
                  <dt>Datos que recogemos</dt>
                  <dd>{p.data}</dd>
                </div>
                <div>
                  <dt>Almacenamiento</dt>
                  <dd>{p.storage}</dd>
                </div>
                <div>
                  <dt>Autenticación</dt>
                  <dd>{p.auth}</dd>
                </div>
                <div>
                  <dt>Contacto</dt>
                  <dd>
                    {before}
                    {email && (
                      <a className="text-link" href={`mailto:${email}`}>
                        {email}
                      </a>
                    )}
                    {after}
                  </dd>
                </div>
              </dl>

              <p className="privacy-links">
                <Link className="text-link" href={`/apps/${app.slug}/privacy`}>
                  Política completa de {app.name}
                </Link>
                <Link className="text-link" href={`/apps/${app.slug}/terms`}>
                  Términos de uso
                </Link>
              </p>
            </article>
          );
        })}
      </section>
    </>
  );
}
