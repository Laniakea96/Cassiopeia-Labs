import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-foot">
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-col foot-brand">
            <Link href="/" className="brand">
              <span className="star" aria-hidden="true" />
              <span>
                Cass
                <span className="i-star">ı</span>
                opeia
              </span>
              <span className="labs">Labs</span>
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Escríbenos
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16v12H4z" />
                <path d="M4 6l8 7 8-7" />
              </svg>
            </Link>
          </div>

          <div className="foot-col">
            <h5>Apps</h5>
            <ul>
              <li>
                <Link href="/apps#piripi">Piripi</Link>
              </li>
              <li>
                <Link href="/apps#luupy">Luupy</Link>
              </li>
              <li>
                <Link href="/apps#mimoney">Mimoney</Link>
              </li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Enlaces</h5>
            <ul>
              <li>
                <a
                  href="https://github.com/Laniakea96"
                  target="_blank"
                  rel="noopener"
                >
                  GitHub · Laniakea96 ↗
                </a>
              </li>
              <li>
                <Link href="/privacy">Privacidad</Link>
              </li>
              <li>
                <Link href="/about">Estudio</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <div>
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
            Cassiopeia Labs. Todos los derechos reservados.
          </div>
          <div className="legal">Marca registrada · OEPM Clase 9</div>
        </div>
      </div>
    </footer>
  );
}
