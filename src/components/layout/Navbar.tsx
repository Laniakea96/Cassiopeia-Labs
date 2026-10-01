"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import Comet from "./Comet";

const sections = [
  { href: "/#inicio", label: "Inicio" },
  { href: "/apps", label: "Apps" },
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

  const close = useCallback(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    setPhase((p) => (p === "open" ? (reduce ? "closed" : "closing") : p));
  }, []);

  // Enlace del menú a otra página: el menú sigue en pantalla mientras carga
  // y, cuando la página nueva ya está debajo, la estrella fugaz lo retira.
  const pendingClose = useRef(false);
  useEffect(() => {
    if (pendingClose.current) {
      pendingClose.current = false;
      unlockScroll();
      close();
    } else {
      setPhase("closed");
    }
  }, [pathname, close]);

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
      if (
        !document.activeElement ||
        document.activeElement === document.body ||
        panel?.contains(document.activeElement)
      ) {
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
      const items = panelRef.current.querySelectorAll<HTMLElement>("a, button");
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

  // Al elegir un enlace del menú:
  // - misma página (una sección): se desbloquea ya para que el scroll hasta
  //   el ancla ocurra mientras el menú se cierra por encima;
  // - otra página: se espera a que llegue (ver pendingClose) y entonces se
  //   cierra con la estrella fugaz, sin dejar la pantalla vacía.
  const onPick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const url = new URL(e.currentTarget.href, location.href);
    if (url.pathname !== location.pathname) {
      pendingClose.current = true;
      return;
    }
    unlockScroll();
    close();
  };

  return (
    <>
      <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
        <Link
          href="/"
          className="nav-brand"
          aria-label="Cassiopeia Labs, inicio"
        >
          <img src="/images/star-sm.webp" alt="" width={24} height={23} />
          <span>Cassiopeia Labs</span>
        </Link>

        <div className="nav-actions">
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="menu-panel"
            onClick={() =>
              open ? close() : phase === "closed" && setPhase("open")
            }
          >
            <span className="menu-toggle-label">
              {open ? "Cerrar" : "Menú"}
            </span>
            <span className="menu-toggle-icon" aria-hidden="true">
              <i />
              <i />
            </span>
          </button>
        </div>
      </header>

      {/* key: una estrella nueva en cada fase para que su animación empiece de cero. */}
      {active && (
        <Comet key={phase} mode={phase === "closing" ? "out" : "in"} />
      )}

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
      </div>
    </>
  );
}
