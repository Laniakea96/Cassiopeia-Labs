import { getAllApps } from "@/data/apps";
import CountUp from "./CountUp";
import Orbit from "./Orbit";

const TECH = ["Flutter", "SwiftUI", "Firebase", "Android", "iOS"];

export default function OrbitStats() {
  const apps = getAllApps();
  const live = apps.filter((a) => a.status === "live").length;

  const bodies = [
    ...apps.map((a) => ({ key: a.slug, label: a.name, icon: a.iconSrc })),
    ...TECH.map((t) => ({ key: t, label: t, icon: undefined })),
  ];

  const stats = [
    { value: apps.length, label: "apps en el catálogo" },
    { value: live, label: "ya en App Store y Google Play" },
    { value: 2, label: "plataformas: iOS y Android" },
    { value: 100, suffix: "%", label: "independiente, sin inversión" },
  ];

  return (
    <section className="block wrap orbit-section" aria-labelledby="orbit-title">
      <div className="orbit-copy">
        <h2 id="orbit-title" className="h2">
          Pequeño por elección.
        </h2>
        <p className="lede">
          Una sola persona detrás de cada app: el código, el diseño, los textos
          y las políticas. Menos pantallas, más cuidado en las que importan.
        </p>

        <dl className="stats">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <dt>{s.label}</dt>
              <dd>
                <CountUp value={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <Orbit bodies={bodies} />
    </section>
  );
}
