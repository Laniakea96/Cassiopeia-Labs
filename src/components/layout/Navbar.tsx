"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/apps", label: "Apps" },
  { href: "/about", label: "Estudio" },
  { href: "/privacy", label: "Privacidad" },
  { href: "/contact", label: "Contacto", hideSm: true },
];

export default function Navbar() {
  const pathname = usePathname();
  const onHome = pathname === "/";

  return (
    <header
      className={`nav${onHome ? " brand-dock" : ""}`}
      id="nav"
    >
      <div className="nav-inner">
        <Link href="/" className="brand" aria-label="Cassiopeia Labs inicio">
          <span className="star" aria-hidden="true" />
          <span>Cassiopeia</span>
          <span className="labs">Labs</span>
        </Link>
        <nav className="nav-links" aria-label="Principal">
          {links.map((link) => {
            const active = pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`${active ? "active" : ""}${link.hideSm ? " hide-sm" : ""}`.trim()}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
