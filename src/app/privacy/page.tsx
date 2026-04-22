import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacidad",
  description: "Políticas de privacidad de Piripi, Luupy y Mimoney.",
};

const CONTACT_EMAIL = "hola@cassiopeialabs.com";
const UPDATED = "22 de abril de 2026";

type PrivacyApp = {
  slug: string;
  name: string;
  iconClass: string;
  initial: string;
  data: string;
  storage: string;
  auth: string;
  contact: string;
};

const privacyApps: PrivacyApp[] = [
  {
    slug: "privacy-piripi",
    name: "Piripi",
    iconClass: "icon-piripi",
    initial: "P",
    data: "No recogemos datos personales. Piripi funciona en local y no pide cuenta de usuario. Los retos y preferencias se guardan en tu dispositivo.",
    storage:
      "Preferencias locales en el dispositivo, sin sincronización en la nube por defecto.",
    auth: "Piripi no requiere autenticación. No hay inicio de sesión, ni cuenta, ni perfil asociado.",
    contact: `Para cualquier cuestión sobre privacidad, escríbenos a ${CONTACT_EMAIL}.`,
  },
  {
    slug: "privacy-luupy",
    name: "Luupy",
    iconClass: "icon-luupy",
    initial: "L",
    data: "Los datos permanecen en el dispositivo salvo que actives la sincronización.",
    storage:
      "Base de datos local; sincronización opcional bajo control del usuario.",
    auth: "No se usa autenticación propia. La sincronización opcional utiliza los servicios de la plataforma.",
    contact: `Escríbenos a ${CONTACT_EMAIL} para ejercer derechos o resolver dudas.`,
  },
  {
    slug: "privacy-mimoney",
    name: "Mimoney",
    iconClass: "icon-mimoney",
    initial: "M",
    data: "Mimoney no conecta con bancos ni proveedores financieros. Los movimientos que introduces nunca salen de tu dispositivo.",
    storage:
      "Base de datos local cifrada; backup opcional bajo control del usuario.",
    auth: "Opcionalmente biometría (Face ID, Touch ID o huella) para abrir la app. No gestionamos credenciales ni las transmitimos.",
    contact: `Cualquier duda, a ${CONTACT_EMAIL}.`,
  },
];

export default function PrivacyPage() {
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
            <span className="accent-purple">App Store</span> y{" "}
            <span className="accent-indigo">Google Play</span> y se enlazan
            desde la ficha de cada producto.
          </p>
        </div>
      </section>

      <section className="block privacy-section">
        <div className="wrap">
          <nav className="jump-nav reveal" aria-label="Saltar a">
            <a href="#privacy-piripi">Piripi</a>
            <a href="#privacy-luupy">Luupy</a>
            <a href="#privacy-mimoney">Mimoney</a>
          </nav>

          <div className="privacy-stack">
            {privacyApps.map((app) => (
              <article
                key={app.slug}
                className="privacy-card reveal"
                id={app.slug}
              >
                <div className="privacy-head">
                  <div className="privacy-head-l">
                    <div className={`mini-icon ${app.iconClass}`}>
                      {app.initial}
                    </div>
                    <h3>
                      {app.name}{" "}
                      <span
                        style={{ fontWeight: 400, color: "var(--dim)" }}
                      >
                        — Privacidad
                      </span>
                    </h3>
                  </div>
                  <div className="privacy-date">
                    Actualizado <span className="tag">{UPDATED}</span>
                  </div>
                </div>
                <div className="privacy-body">
                  <div>
                    <h4>Datos que recogemos</h4>
                    <p>{app.data}</p>
                  </div>
                  <div>
                    <h4>Almacenamiento</h4>
                    <p>{app.storage}</p>
                  </div>
                  <div>
                    <h4>Autenticación</h4>
                    <p>{app.auth}</p>
                  </div>
                  <div>
                    <h4>Contacto</h4>
                    <p>
                      {app.contact.split(CONTACT_EMAIL)[0]}
                      <a
                        href={`mailto:${CONTACT_EMAIL}`}
                        style={{
                          color: "var(--fg)",
                          borderBottom: "1px solid var(--line-strong)",
                        }}
                      >
                        {CONTACT_EMAIL}
                      </a>
                      {app.contact.split(CONTACT_EMAIL)[1]}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
