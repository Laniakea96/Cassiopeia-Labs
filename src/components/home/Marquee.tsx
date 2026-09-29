"use client";

import { useRef } from "react";
import { usePointerDrift } from "./usePointerDrift";

const WORDS = [
  "Apps iOS",
  "Android",
  "Flutter",
  "SwiftUI",
  "Diseño de producto",
  "Webs",
];

function Row({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="marquee-row" aria-hidden={hidden || undefined}>
      {WORDS.map((w) => (
        <li key={w}>
          {w}
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 1.5l2.1 8.4 8.4 2.1-8.4 2.1L12 22.5l-2.1-8.4L1.5 12l8.4-2.1z" />
          </svg>
        </li>
      ))}
    </ul>
  );
}

export default function Marquee() {
  const areaRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useRef(0);

  // Px por segundo: en reposo avanza hacia la izquierda.
  usePointerDrift(areaRef, {
    base: -60,
    max: 520,
    onFrame: (dt, v) => {
      const track = trackRef.current;
      const row = track?.firstElementChild as HTMLElement | null;
      if (!track || !row) return;
      const w = row.offsetWidth;
      x.current += v * dt;
      if (x.current <= -w) x.current += w;
      if (x.current > 0) x.current -= w;
      track.style.transform = `translate3d(${x.current}px, 0, 0)`;
    },
  });

  return (
    <section className="marquee-band" aria-label="Qué hacemos">
      <div className="marquee" ref={areaRef}>
        <div className="marquee-track" ref={trackRef}>
          <Row />
          <Row hidden />
        </div>
      </div>
      <div className="wrap marquee-cta">
        <p>¿Necesitas una app, una web o una mano con tu producto?</p>
      </div>
    </section>
  );
}
