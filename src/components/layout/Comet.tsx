"use client";

export type CometMode = "in" | "out" | "rise" | "dive";

/**
 * Estrella fugaz que cruza la pantalla en diagonal.
 * - "in":   de la esquina superior derecha a la inferior izquierda (abrir menú).
 * - "out":  el viaje inverso, con un pequeño retraso (cerrar menú).
 * - "rise": de la esquina inferior izquierda a la superior derecha (al entrar
 *           en la página de una app).
 * - "dive": de la esquina superior izquierda a la inferior derecha (al volver
 *           a la página anterior).
 * Solo se monta en cliente, durante la animación.
 */
export default function Comet({ mode }: { mode: CometMode }) {
  const w = window.innerWidth;
  const h = window.innerHeight;
  // Dirección del viaje, en grados: la cola queda siempre por detrás.
  const deg = (dx: number, dy: number) => (Math.atan2(dy, dx) * 180) / Math.PI;
  const angle = {
    in: deg(-w, h),
    out: deg(w, -h),
    rise: deg(w, -h),
    dive: deg(w, h),
  }[mode];

  return (
    <div className={`comet is-${mode}`} aria-hidden="true">
      <div
        className="comet-body"
        style={{ "--angle": `${angle}deg` } as React.CSSProperties}
      >
        <i className="comet-tail" />
        <i className="comet-head" />
      </div>
    </div>
  );
}
