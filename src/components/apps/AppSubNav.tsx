"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  slug: string;
}

const tabs = [
  { path: "", label: "Resumen" },
  { path: "/support", label: "Soporte" },
  { path: "/privacy", label: "Privacidad" },
  { path: "/terms", label: "Términos" },
];

export default function AppSubNav({ slug }: Props) {
  const pathname = usePathname();

  return (
    <nav className="jump-nav" aria-label="Secciones de la app">
      {tabs.map((tab) => {
        const href = `/apps/${slug}${tab.path}`;
        const isActive = pathname === href;
        return (
          <Link
            key={tab.path}
            href={href}
            aria-current={isActive ? "page" : undefined}
            style={
              isActive
                ? {
                    background: "rgba(255,255,255,0.08)",
                    color: "var(--fg)",
                  }
                : undefined
            }
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
