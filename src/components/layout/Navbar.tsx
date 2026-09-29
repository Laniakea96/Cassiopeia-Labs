"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { getAllApps } from "@/data/apps";
import { siteConfig } from "@/data/siteConfig";

const sections = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/#apps", label: "Apps" },
  { href: "/#bitacora", label: "Bitácora" },
  { href: "/#estudio", label: "Estudio" },
  { href: "/#contacto", label: "Contacto" },
];

// Lo que dura la animación de cierre (salida de enlaces + estrella fugaz de vuelta).
const CLOSE_MS = 900;

type Phase = "closed" | "open" | "closing";

const unlockScroll = () => {
  window.__lenis?.start();
  document.documentElement.classList.remove("menu-lock");
};

export default function Navbar() {
  const pathname = usePathname();
  // "closing" mantiene el panel montado mientras se anima la salida.
  const [phase, setPhase] = useState<Phase>("closed");
  const open = phase === "open";
  const active = phase !== "closed";
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const apps = getAllApps();

  const close = useCallback(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setPhase((p) => (p === "open" ? (reduce ? "closed" : "closing") : p));
  }, []);

  useEffect(() => {
    setPhase("closed");
  }, [pathname]);

  useEffect(() => {
    if (phase !== "closing") return;
    const t = window.setTimeout(() => setPhase("closed"), CLOSE_MS);
    return () => window.clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mientras el panel está en pantalla, la página no se desplaza. Al
  // desaparecer, el foco vuelve al botón si estaba dentro del panel.
  useEffect(() => {
    if (!active) return;
    window.__lenis?.stop();
    document.documentElement.classList.add("menu-lock");
    const panel = panelRef.current;
    return () => {
      unlockScroll();
      if (!document.activeElement || document.activeElement === document.body || panel?.contains(document.activeElement)) {
        toggleRef.current?.focus();
      }
    };
  }, [active]);

  // Menú abierto: Escape cierra y el foco no sale del panel.
  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLElement>("a")?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab" || !panelRef.current) return;
      const items = panelRef.current.querySelectorAll<HTMLElement>(
        "a, button"
      );
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  // Al elegir una sección, la página se desbloquea ya para que el scroll
  // hasta el ancla ocurra mientras el menú se cierra por encima.
  const onPick = () => {
    unlockScroll();
    close();
  };

  return (
    <>
      <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
        <Link href="/" className="nav-brand" aria-label="Cassiopeia Labs, inicio">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 1.5l2.1 8.4 8.4 2.1-8.4 2.1L12 22.5l-2.1-8.4L1.5 12l8.4-2.1z" />
          </svg>
          <span>Cassiopeia Labs</span>
        </Link>

        <div className="nav-actions">
          <a className="nav-mail" href={`mailto:${siteConfig.email}`}>
            {siteConfig.email}
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="menu-panel"
            onClick={() => (open ? close() : phase === "closed" && setPhase("open"))}
          >
            <span className="menu-toggle-label">{open ? "Cerrar" : "Menú"}</span>
            <span className="menu-toggle-icon" aria-hidden="true">
              <i />
              <i />
            </span>
          </button>
        </div>
      </header>

      {/* key: una estrella nueva en cada fase para que su animación empiece de cero. */}
      {active && <Comet key={phase} leaving={phase === "closing"} />}

      <div
        id="menu-panel"
        ref={panelRef}
        className={`menu${open ? " is-open" : ""}${phase === "closing" ? " is-closing" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú"
        hidden={!active}
      >
        <nav className="menu-main" aria-label="Secciones">
          {sections.map((s, i) => (
            <Link
              key={s.href}
              href={s.href}
              onClick={onPick}
              style={{ "--i": i } as React.CSSProperties}
            >
              {s.label}
            </Link>
          ))}
        </nav>

        <div className="menu-side">
          <div style={{ "--j": 0 } as React.CSSProperties}>
            <p className="menu-side-title">Apps</p>
            <ul>
              {apps.map((app) => (
                <li key={app.slug}>
                  <Link href={`/apps/${app.slug}`}>{app.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ "--j": 1 } as React.CSSProperties}>
            <p className="menu-side-title">Legal</p>
            <ul>
              <li>
                <Link href="/privacy">Privacidad</Link>
              </li>
            </ul>
          </div>
          <div style={{ "--j": 2 } as React.CSSProperties}>
            <p className="menu-side-title">Escríbenos</p>
            <ul>
              <li>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

// Estrella fugaz que cruza la pantalla en diagonal mientras se abre el menú
// (y de vuelta al cerrarlo). Solo existe mientras el menú está en pantalla.
function Comet({ leaving }: { leaving: boolean }) {
  // Dirección del viaje: de la esquina superior derecha a la inferior izquierda.
  const angle = (Math.atan2(window.innerHeight, -window.innerWidth) * 180) / Math.PI;
  return (
    <div className={`comet ${leaving ? "is-out" : "is-in"}`} aria-hidden="true">
      <div
        className="comet-body"
        style={{ "--angle": `${leaving ? angle + 180 : angle}deg` } as React.CSSProperties}
      >
        <i className="comet-tail" />
        <i className="comet-head" />
      </div>
    </div>
  );
}
