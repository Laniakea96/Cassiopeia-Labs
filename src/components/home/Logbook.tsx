import Link from "next/link";
import { getApp } from "@/data/apps";

const ENTRIES = [
  {
    app: "Luupy",
    href: "/apps/luupy",
    icon: "/images/luupy-icon.png",
    status: "Publicada",
    title: "Luupy ya está en App Store y Google Play.",
    body: "Tus suscripciones y gastos recurrentes en una sola vista, con un aviso antes de cada renovación.",
  },
  {
    app: "Piripi",
    href: "/apps/piripi",
    icon: "/images/piripi-icon.png",
    status: "A punto de salir",
    title: "Piripi está a punto de salir.",
    body: "Retos para fiestas que funcionan sin conexión y sin cuenta. Muy pronto en la App Store.",
  },
  {
    app: "Rexis",
    href: "/apps/rexis",
    icon: "/images/rexis-icon.png",
    status: "En desarrollo",
    title: "Rexis está en desarrollo.",
    body: "Rutinas que progresan, nutrición con escáner de código de barras y conexión con Apple Salud. Seguimos construyéndola.",
  },
];

export default function Logbook() {
  return (
    <section id="bitacora" className="block wrap log" aria-labelledby="log-title">
      <div className="section-head">
        <div>
          <h2 id="log-title" className="h2">
            Bitácora.
          </h2>
          <p className="lede log-lede">En qué estamos ahora mismo.</p>
        </div>
      </div>

      <ol className="log-grid">
        {ENTRIES.map((e) => (
          <li
            key={e.app}
            className="log-card"
            style={{ "--glow": getApp(e.href.split("/").pop()!)?.glow } as React.CSSProperties}
          >
            <p className="log-status">{e.status}</p>
            <h3 className="log-title">{e.title}</h3>
            <p className="log-body">{e.body}</p>
            <Link href={e.href} className="log-app">
              <img src={e.icon} alt="" />
              Ver {e.app}
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
