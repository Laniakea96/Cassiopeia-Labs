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
    <nav className="tabs" aria-label="Secciones de la app">
      {tabs.map((tab) => {
        const href = `/apps/${slug}${tab.path}`;
        return (
          <Link
            key={tab.path}
            href={href}
            aria-current={pathname === href ? "page" : undefined}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
