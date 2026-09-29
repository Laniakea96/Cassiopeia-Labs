"use client";

import { useRef } from "react";
import { usePointerDrift } from "./usePointerDrift";

interface Body {
  key: string;
  label: string;
  icon?: string;
}

export default function Orbit({ bodies }: { bodies: Body[] }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const progress = useRef(0);

  // Vueltas por segundo. Positivo = sentido horario: los cuerpos de arriba
  // van hacia la derecha, así que con el ratón a la derecha giran hacia él.
  usePointerDrift(stageRef, {
    base: 1 / 48,
    max: 1 / 6,
    onFrame: (dt, v) => {
      const stage = stageRef.current;
      if (!stage) return;
      progress.current = (((progress.current + v * dt) % 1) + 1) % 1;
      stage.querySelectorAll<HTMLElement>(".orbit-body").forEach((el, i) => {
        const d = (progress.current + i / bodies.length) % 1;
        el.style.offsetDistance = `${d * 100}%`;
      });
    },
  });

  return (
    <div className="orbit-stage" ref={stageRef} aria-hidden="true">
      <div className="orbit">
        <svg className="orbit-ring" viewBox="0 0 600 340">
          <ellipse cx="300" cy="170" rx="280" ry="150" />
          <ellipse cx="300" cy="170" rx="190" ry="100" />
        </svg>
        <img className="orbit-core" src="/images/logo-galaxy.png" alt="" />
        {bodies.map((b, i) => (
          <span
            key={b.key}
            className={`orbit-body${b.icon ? " is-app" : ""}`}
            style={{ offsetDistance: `${(i / bodies.length) * 100}%` }}
          >
            {b.icon && <img src={b.icon} alt="" />}
            {b.label}
          </span>
        ))}
      </div>
    </div>
  );
}
