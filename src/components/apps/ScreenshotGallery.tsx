"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { AppImage } from "@/types/app";

interface Props {
  appName: string;
  shots: AppImage[];
  /** Título de la sección; por defecto, "Así se ve <app>". */
  title?: string;
  /** Capturas directas del móvil: se muestran con marco de dispositivo. */
  framed?: boolean;
  /** "ads": piezas de campaña (4:5), más anchas y sin marco. */
  variant?: "screens" | "ads";
}

export default function ScreenshotGallery({
  appName,
  shots,
  title,
  framed = false,
  variant = "screens",
}: Props) {
  const titleId = useId();
  const isAds = variant === "ads";
  const trackRef = useRef<HTMLOListElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const [viewing, setViewing] = useState<number | null>(null);

  // Con ratón, la fila sigue al puntero: su posición horizontal sobre la
  // parte visible decide cuánto se desplaza (izquierda = primera captura,
  // derecha = última). Con el dedo o el trackpad se desliza de forma normal.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let target = 0;
    let raf = 0;
    const glide = () => {
      const diff = target - track.scrollLeft;
      if (Math.abs(diff) < 0.5) {
        raf = 0;
        return;
      }
      track.scrollLeft += reduce ? diff : diff * 0.08;
      raf = requestAnimationFrame(glide);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const r = track.getBoundingClientRect();
      const right = Math.min(r.right, window.innerWidth);
      const width = right - r.left;
      // Un margen en cada lado para llegar a los extremos con comodidad.
      const t = Math.min(
        1,
        Math.max(0, (e.clientX - r.left - width * 0.12) / (width * 0.76)),
      );
      target = t * (track.scrollWidth - track.clientWidth);
      if (!raf) raf = requestAnimationFrame(glide);
    };
    const onEnter = (e: PointerEvent) => {
      // El ajuste a cada captura pelearía con el desplazamiento suave.
      if (e.pointerType === "mouse") track.style.scrollSnapType = "none";
    };
    const onLeave = () => {
      track.style.scrollSnapType = "";
    };

    track.addEventListener("pointermove", onMove);
    track.addEventListener("pointerenter", onEnter);
    track.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      track.removeEventListener("pointermove", onMove);
      track.removeEventListener("pointerenter", onEnter);
      track.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  const close = useCallback(() => setViewing(null), []);
  const step = useCallback(
    (dir: 1 | -1) =>
      setViewing((v) =>
        v === null ? v : (v + dir + shots.length) % shots.length,
      ),
    [shots.length],
  );

  // Visor abierto: sin scroll de fondo, teclado para navegar y cerrar.
  useEffect(() => {
    if (viewing === null) return;
    window.__lenis?.stop();
    document.documentElement.classList.add("menu-lock");
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.__lenis?.start();
      document.documentElement.classList.remove("menu-lock");
      openerRef.current?.focus();
    };
    // Solo al abrir y cerrar; cambiar de captura no reinicia nada.
  }, [viewing === null, close, step]);

  return (
    <section
      className={`shots${isAds ? " shots-ads" : ""}`}
      aria-labelledby={titleId}
    >
      <h2 id={titleId} className="shots-title">
        {title ?? `Así se ve ${appName}`}
      </h2>

      <ol
        className={`shots-track${shots.length <= 4 && !isAds ? " is-few" : ""}`}
        ref={trackRef}
        tabIndex={0}
        aria-label={`Capturas de ${appName}`}
      >
        {shots.map((shot, i) => (
          <li key={shot.src}>
            <button
              type="button"
              className={`shot${framed ? " is-device" : ""}`}
              onClick={(e) => {
                openerRef.current = e.currentTarget;
                setViewing(i);
              }}
              aria-label={`Ampliar captura ${i + 1} de ${shots.length}: ${shot.alt}`}
            >
              <img
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                width={isAds ? 900 : 640}
                height={isAds ? 1117 : 1385}
              />
            </button>
          </li>
        ))}
      </ol>

      {viewing !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Captura ${viewing + 1} de ${shots.length}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <button
            ref={closeRef}
            type="button"
            className="round-btn lightbox-close"
            onClick={close}
            aria-label="Cerrar"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
          <button
            type="button"
            className="round-btn lightbox-prev"
            onClick={() => step(-1)}
            aria-label="Captura anterior"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <img
            key={shots[viewing].src}
            className={`lightbox-img${framed ? " is-device" : ""}${isAds ? " is-ad" : ""}`}
            src={shots[viewing].src}
            alt={shots[viewing].alt}
          />
          <button
            type="button"
            className="round-btn lightbox-next"
            onClick={() => step(1)}
            aria-label="Captura siguiente"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <p className="lightbox-count">
            {viewing + 1} / {shots.length}
          </p>
        </div>
      )}
    </section>
  );
}
