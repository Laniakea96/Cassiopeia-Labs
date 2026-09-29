import Link from "next/link";
import CurrentYear from "./CurrentYear";
import { getAllApps } from "@/data/apps";
import { siteConfig } from "@/data/siteConfig";

export default function Footer() {
  const apps = getAllApps();

  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-lead">
            <p>¿Tienes una idea que merece salir al espacio?</p>
            <a className="foot-mail" href={`mailto:${siteConfig.email}`}>
              {siteConfig.email}
            </a>
          </div>

          <nav className="foot-cols" aria-label="Pie de página">
            <div>
              <p className="foot-title">Apps</p>
              <ul>
                {apps.map((app) => (
                  <li key={app.slug}>
                    <Link href={`/apps/${app.slug}`}>{app.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="foot-title">Estudio</p>
              <ul>
                <li>
                  <Link href="/#bitacora">Bitácora</Link>
                </li>
                <li>
                  <Link href="/#estudio">Sobre el estudio</Link>
                </li>
                <li>
                  <Link href="/privacy">Privacidad</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="foot-title">Redes</p>
              <ul>
                <li>
                  <a href={siteConfig.social.linkedin} target="_blank" rel="noopener">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={siteConfig.social.github} target="_blank" rel="noopener">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      <p className="foot-word" aria-hidden="true">
        Cassiopeia
      </p>

      <div className="wrap foot-bottom">
        <span>
          © <CurrentYear buildYear={new Date().getFullYear()} /> Cassiopeia Labs
        </span>
        <span>Pide un deseo.</span>
      </div>
    </footer>
  );
}
