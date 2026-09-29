"use client";

import { useEffect } from "react";

const rand = (min: number, max: number) => min + Math.random() * (max - min);

// Cada estrella de la constelación cambia de brillo por su cuenta, a
// intervalos e intensidades aleatorias, así que nunca brillan a la vez.
export default function Twinkle() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const stars = document.querySelectorAll<SVGGElement>(".constellation .con-star");
    const timers: number[] = [];

    stars.forEach((star, i) => {
      const step = () => {
        const bright = Math.random() < 0.25; // de vez en cuando, un destello
        const duration = rand(0.8, 2.2);
        star.style.setProperty("--tw-dur", `${duration}s`);
        star.style.setProperty("--tw-glow", String(bright ? rand(1, 1.25) : rand(0.25, 0.8)));
        star.style.setProperty("--tw-scale", String(bright ? rand(1.2, 1.6) : rand(0.6, 1)));
        timers[i] = window.setTimeout(step, duration * 1000 + rand(200, 1800));
      };
      // Arrancan cuando la constelación ya ha terminado de aparecer (~3,9 s).
      timers[i] = window.setTimeout(step, 4000 + rand(0, 1200));
    });

    return () => timers.forEach((t) => window.clearTimeout(t));
  }, []);

  return null;
}
