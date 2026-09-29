"use client";

import { useEffect, useRef, type RefObject } from "react";

interface Options {
  /** Velocidad en reposo (unidades por segundo; el signo marca la dirección). */
  base: number;
  /** Velocidad máxima cuando el ratón está en un borde. */
  max: number;
  /** Se llama en cada frame con los segundos transcurridos y la velocidad actual. */
  onFrame: (dt: number, velocity: number) => void;
}

/**
 * Movimiento continuo que obedece al ratón: con el puntero encima, la
 * velocidad pasa a depender de su posición horizontal (a la derecha del
 * centro avanza hacia la derecha, a la izquierda retrocede, y más rápido
 * cuanto más cerca del borde). Al salir vuelve suavemente a la de reposo.
 */
export function usePointerDrift(
  ref: RefObject<HTMLElement | null>,
  { base, max, onFrame }: Options
) {
  const frame = useRef(onFrame);
  frame.current = onFrame;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let velocity = reduce ? 0 : base;
    let target = velocity;
    let last = performance.now();
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const r = el.getBoundingClientRect();
      const t = ((e.clientX - r.left) / r.width) * 2 - 1; // -1 … 1
      // Zona muerta en el centro para que no tiemble al quedarse quieto.
      const dir = Math.abs(t) < 0.08 ? 0 : t;
      target = dir * max;
    };
    const onLeave = () => {
      target = reduce ? 0 : base;
    };

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      velocity += (target - velocity) * Math.min(1, dt * 4);
      frame.current(dt, velocity);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
    };
  }, [ref, base, max]);
}
