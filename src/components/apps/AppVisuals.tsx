import type { AppData } from "@/types/app";

/**
 * Insignias oficiales de App Store y Google Play (Apple y Google exigen
 * usarlas tal cual). No pinta nada si la app aún no está en ninguna tienda.
 */
export function StoreBadges({ app }: { app: AppData }) {
  const stores = [
    {
      href: app.links.appStore,
      badge: "/images/badges/app-store.svg",
      alt: "Descargar en el App Store",
      width: 120,
      height: 40,
    },
    {
      href: app.links.playStore,
      badge: "/images/badges/google-play.png",
      alt: "Disponible en Google Play",
      width: 564,
      height: 168,
    },
  ].filter((s): s is typeof s & { href: string } => Boolean(s.href));

  if (!stores.length) return null;
  return (
    <div className="store-badges">
      {stores.map((s) => (
        <a
          key={s.badge}
          className="store-badge"
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={s.badge} alt={s.alt} width={s.width} height={s.height} />
        </a>
      ))}
    </div>
  );
}

/** Tres capturas de la app en abanico (la del medio, delante). */
export function PhoneFan({ app }: { app: AppData }) {
  if (app.screenshots.length < 3) return null;
  const [left, center, right] = app.fan ?? [1, 0, app.screenshots[4] ? 4 : 2];
  const fan = [left, center, right].map((i) => app.screenshots[i]);
  return (
    <div className="phone-fan" aria-hidden="true">
      {fan.map((shot, i) => (
        <img
          key={shot.src}
          className={`fan-phone fan-${i}${app.screenshotsFramed ? " is-device" : ""}`}
          src={shot.src}
          alt=""
        />
      ))}
    </div>
  );
}
