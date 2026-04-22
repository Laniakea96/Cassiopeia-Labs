"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/apps", label: "Apps" },
  { href: "/about", label: "Estudio" },
  { href: "/privacy", label: "Privacidad" },
  { href: "/contact", label: "Contacto" },
];

export default function Navbar() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [open, setOpen] = useState(false);

  // Close the mobile menu when the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`nav${onHome ? " brand-dock" : ""}${open ? " menu-open" : ""}`}
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
                className={active ? "active" : ""}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-mobile"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>

      <nav
        id="nav-mobile"
        className="nav-mobile"
        aria-label="Principal móvil"
        hidden={!open}
      >
        {links.map((link) => {
          const active = pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={active ? "active" : ""}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
