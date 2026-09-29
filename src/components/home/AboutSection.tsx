import { siteConfig } from "@/data/siteConfig";

export default function AboutSection() {
  return (
    <section id="estudio" className="block wrap about" aria-labelledby="about-title">
      <figure className="about-photo">
        <div className="about-portrait">
          <span className="about-orbit" aria-hidden="true">
            <span className="about-orbit-star" />
          </span>
          <div className="about-porthole">
            <img src="/images/profile.jpg" alt="Samuel Parreño Martinez" />
          </div>
        </div>
        <figcaption>
          <strong>Samuel Parreño</strong>
          <span>Fundador y desarrollador</span>
        </figcaption>
        <ul className="about-social">
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
        </ul>
      </figure>

      <div className="about-copy">
        <h2 id="about-title" className="h2">
          Un estudio, una persona y mucho cielo.
        </h2>
        <div className="about-text">
          <p>
            Cassiopeia Labs es un estudio independiente con sede en España.
            Detrás estoy yo: escribo el código, diseño las pantallas, redacto
            los textos y las políticas, y publico directamente en App Store y
            Google Play, sin agencias ni intermediarios.
          </p>
          <p>
            Me gusta pensar que eso se nota. Cada app recibe el mismo cuidado
            de principio a fin, sin pasar por diez manos diferentes. Publico
            cuando está lista y la mantengo mientras tenga sentido.
          </p>
          <p>
            También estoy abierto a incorporarme a un equipo o a colaborar en
            proyectos puntuales de desarrollo multiplataforma y web. Si buscas
            a alguien con visión de producto y autonomía técnica, hablemos.
          </p>
        </div>
      </div>
    </section>
  );
}
