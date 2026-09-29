import { siteConfig } from "@/data/siteConfig";

export default function ContactSection() {
  return (
    <section id="contacto" className="block wrap contact" aria-labelledby="contact-title">
      <h2 id="contact-title" className="contact-title">
        Hablemos, sin prisa.
      </h2>

      <div className="contact-grid">
        <div>
          <p className="lede">
            Leo todos los correos. Si escribes con una idea, una duda o
            simplemente para saludar, te respondo.
          </p>
          <a className="contact-mail" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          <div className="contact-actions">
            <a
              className="btn btn-star"
              href={`mailto:${siteConfig.email}?subject=Hola%20Cassiopeia%20Labs`}
            >
              Escribir un email
            </a>
            <a
              className="btn btn-line"
              href={siteConfig.social.whatsapp}
              target="_blank"
              rel="noopener"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <dl className="contact-facts">
          <div>
            <dt>Idiomas</dt>
            <dd>Español e inglés.</dd>
          </div>
          <div>
            <dt>Tiempo de respuesta</dt>
            <dd>Hasta 48 h laborables.</dd>
          </div>
          <div>
            <dt>Si es urgente</dt>
            <dd>WhatsApp es el canal más rápido.</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
