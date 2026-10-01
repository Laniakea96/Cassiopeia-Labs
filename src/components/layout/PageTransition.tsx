"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Comet, { type CometMode } from "./Comet";

// Lo que dura el barrido (igual que las animaciones "peel" y "rise" del CSS).
const DURATION_MS = 950;
// Si la página nueva no llega en este tiempo, se retira la copia sin más.
const MAX_WAIT_MS = 4000;

// App de una ruta /apps/<slug>/…, o null si no es la página de una app.
const appOf = (path: string) => path.match(/^\/apps\/([^/]+)/)?.[1] ?? null;

const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
// Con el menú abierto lo visible es el menú, y es él quien se retira.
const menuOpen = () => document.documentElement.classList.contains("menu-lock");

/**
 * Transición con estrella fugaz, sin dejar nunca la pantalla vacía: la página
 * actual se queda como copia visual encima y, cuando la nueva ya está pintada
 * debajo, una estrella cruza de la esquina inferior izquierda a la superior
 * derecha y va retirando la copia a su paso.
 *
 * Se usa al entrar en la página de una app (clic en un enlace) y al volver a
 * la página anterior con el botón o el gesto de "atrás" del navegador. No se
 * usa entre pestañas de una misma app, que tienen su propia animación.
 */
export default function PageTransition() {
  const pathname = usePathname();
  const peel = useRef<HTMLDivElement | null>(null);
  const shownPath = useRef(pathname);
  const timer = useRef<number | undefined>(undefined);
  const [run, setRun] = useState(0);
  // Dirección del barrido en curso: al entrar en una app la estrella sube
  // ("rise"); al volver atrás baja de la esquina superior izquierda ("dive").
  const kind = useRef<"rise" | "dive">("rise");

  const removePeel = () => {
    peel.current?.remove();
    peel.current = null;
  };

  // Copia visual de la página tal y como se ve ahora mismo.
  const snapshot = (k: "rise" | "dive") => {
    removePeel();
    kind.current = k;
    const cover = document.createElement("div");
    cover.className = "page-peel";
    cover.setAttribute("aria-hidden", "true");
    cover.inert = true;
    const sheet = document.createElement("div");
    sheet.className = "page-peel-sheet";
    sheet.style.top = `${-window.scrollY}px`;
    for (const el of document.querySelectorAll("main, footer")) {
      sheet.appendChild(el.cloneNode(true));
    }
    // Sin ids repetidos en la copia (anclas, títulos…), salvo dentro de los
    // SVG: sus degradados y máscaras se referencian por id.
    sheet
      .querySelectorAll("[id]")
      .forEach((el) => el.closest("svg") || el.removeAttribute("id"));
    cover.appendChild(sheet);
    document.body.appendChild(cover);
    peel.current = cover;

    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(removePeel, MAX_WAIT_MS);
  };

  // ¿Cambiar de "from" a "to" merece la transición?
  const isPageChange = (from: string, to: string) => {
    if (from === to) return false; // solo cambia el ancla (#…)
    const a = appOf(from);
    return !(a && a === appOf(to)); // pestañas de la misma app: no
  };

  useEffect(() => {
    // 1. Clic en un enlace a la página de otra app.
    const onClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)
        return;
      const a = (e.target as Element | null)?.closest?.("a[href]");
      if (!(a instanceof HTMLAnchorElement) || a.target === "_blank") return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin) return;
      if (!appOf(url.pathname)) return;
      if (!isPageChange(location.pathname, url.pathname)) return;
      if (reducedMotion() || menuOpen()) return;
      snapshot("rise");
    };

    // 2. "Atrás" (o "adelante") del navegador. Cuando llega este evento la
    //    URL ya es la nueva, pero Next todavía no ha pintado la página: la
    //    pantalla sigue mostrando la anterior y se puede copiar.
    const onPopState = () => {
      if (!isPageChange(shownPath.current, location.pathname)) return;
      if (reducedMotion() || menuOpen()) return;
      snapshot("dive");
    };

    // En captura, para copiar antes de que Next empiece a navegar.
    document.addEventListener("click", onClick, true);
    window.addEventListener("popstate", onPopState);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  // 3. La página nueva ya está debajo: la estrella retira la copia.
  //    useLayoutEffect para arrancar en el mismo fotograma en que se pinta.
  useLayoutEffect(() => {
    const from = shownPath.current;
    shownPath.current = pathname;
    if (from === pathname || !peel.current) return;
    if (!isPageChange(from, pathname)) {
      removePeel();
      return;
    }

    peel.current.classList.add("is-peeling", `is-${kind.current}`);
    setRun((n) => n + 1);
    // En una ref y sin limpiar al cambiar de ruta: si se navega durante el
    // barrido, todo debe retirarse igualmente.
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      removePeel();
      setRun(0);
    }, DURATION_MS);
  }, [pathname]);

  if (!run) return null;
  return <Comet key={run} mode={kind.current as CometMode} />;
}
