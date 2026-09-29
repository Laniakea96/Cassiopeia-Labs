import Link from "next/link";
import Twinkle from "./Twinkle";

// La "W" de Casiopea proyectada a partir de sus coordenadas reales
// (ascensión recta → x invertida, declinación → y). Tamaño según magnitud,
// color según clase espectral. El eje vertical va comprimido para que la
// "W" abrace la palabra.
const STARS = [
  { name: "Segin", x: 50, y: 30, r: 7, color: "#afc3ff" },
  { name: "Ruchbah", x: 292, y: 175, r: 8.5, color: "#e8edff" },
  { name: "Navi", x: 541, y: 155, r: 9.5, color: "#9db4ff" },
  { name: "Schedar", x: 684, y: 329, r: 10.5, color: "#ffc98a" },
  // Caph va algo más alta que su posición real para no quedar tapada por la "a".
  { name: "Caph", x: 950, y: 110, r: 10, color: "#fff1dc" },
];

// Cada tramo de la línea se detiene antes de tocar las estrellas, para que
// no se vea atravesándolas.
const GAP = 2.6;
const SEGMENTS = STARS.slice(1)
  .map((b, i) => {
    const a = STARS[i];
    const dx = b.x - a.x;
    const dy = b.y - a.y;
    const len = Math.hypot(dx, dy);
    const ux = dx / len;
    const uy = dy / len;
    const x1 = a.x + ux * a.r * GAP;
    const y1 = a.y + uy * a.r * GAP;
    const x2 = b.x - ux * b.r * GAP;
    const y2 = b.y - uy * b.r * GAP;
    return `M ${x1.toFixed(1)} ${y1.toFixed(1)} L ${x2.toFixed(1)} ${y2.toFixed(1)}`;
  })
  .join(" ");

// Recorrido completo, solo para la máscara que dibuja la línea al cargar.
// Letras del título, para que aparezcan una a una de izquierda a derecha.
const WORD = [..."Cassiopeia"];

const LINE = "M " + STARS.map((s) => `${s.x} ${s.y}`).join(" L ");

// Destello de cuatro puntas con los lados curvos hacia dentro, como el de una
// estrella vista a través de una lente; el vertical algo más largo.
const sparkle = (x: number, y: number, r: number) => {
  const v = r * 3.4;
  const h = r * 2.5;
  const w = r * 0.28;
  return (
    `M ${x} ${y - v} Q ${x + w} ${y - w} ${x + h} ${y} ` +
    `Q ${x + w} ${y + w} ${x} ${y + v} Q ${x - w} ${y + w} ${x - h} ${y} ` +
    `Q ${x - w} ${y - w} ${x} ${y - v} Z`
  );
};

export default function HeroSection() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-sky">
        <div className="hero-mark">
          <h1 className="hero-word">
            <span className="sr-only">Cassiopeia Labs</span>
            <span aria-hidden="true">
              {WORD.map((ch, i) => (
                <span
                  key={i}
                  className="hero-letter"
                  style={{ "--l": i } as React.CSSProperties}
                >
                  {ch}
                </span>
              ))}
            </span>
          </h1>
          <p className="hero-labs" aria-hidden="true">
            Labs
          </p>
        </div>

        <svg
          className="constellation"
          viewBox="-40 -30 1080 400"
          role="img"
          aria-label="La constelación de Casiopea"
        >
          <defs>
            {STARS.map((s) => (
              <radialGradient key={s.name} id={`halo-${s.name}`}>
                <stop offset="0" stopColor={s.color} stopOpacity="0.6" />
                <stop offset="0.35" stopColor={s.color} stopOpacity="0.18" />
                <stop offset="1" stopColor={s.color} stopOpacity="0" />
              </radialGradient>
            ))}
            {/* Blanco en el centro que se desvanece hacia las puntas del destello. */}
            <radialGradient id="sparkle-fade">
              <stop offset="0" stopColor="#fff" stopOpacity="1" />
              <stop offset="0.25" stopColor="#fff" stopOpacity="0.7" />
              <stop offset="1" stopColor="#fff" stopOpacity="0" />
            </radialGradient>
            {/* La máscara dibuja la línea una vez; la línea visible es discontinua. */}
            <mask id="con-reveal" maskUnits="userSpaceOnUse">
              <path className="con-reveal" d={LINE} pathLength={1} />
            </mask>
          </defs>
          <path className="con-line" d={SEGMENTS} mask="url(#con-reveal)" />
          {STARS.map((s, i) => (
            <g
              key={s.name}
              className="con-star"
              style={
                {
                  "--i": i,
                  "--sc": s.color,
                  transformOrigin: `${s.x}px ${s.y}px`,
                } as React.CSSProperties
              }
            >
              <circle
                className="con-halo"
                cx={s.x}
                cy={s.y}
                r={s.r * 5}
                fill={`url(#halo-${s.name})`}
                style={{ transformOrigin: `${s.x}px ${s.y}px` }}
              />
              <path
                className="con-sparkle"
                d={sparkle(s.x, s.y, s.r)}
                fill="url(#sparkle-fade)"
                style={{ transformOrigin: `${s.x}px ${s.y}px` }}
              />
            </g>
          ))}
        </svg>
        <Twinkle />
      </div>

      <div className="wrap hero-foot">
        <div className="hero-spoiler">
          <p className="spoiler-lead">De la idea a la pantalla.</p>
          <p className="spoiler-sub">
            Diseñamos y construimos las apps que tengas en mente, para iOS,
            Android y Web.
          </p>
        </div>
        <div className="hero-cta">
          <Link href="/#apps" className="btn btn-star">
            Ver las apps
          </Link>
          <Link href="/#contacto" className="btn btn-line">
            Cuéntanos tu idea
          </Link>
        </div>
      </div>
    </section>
  );
}
