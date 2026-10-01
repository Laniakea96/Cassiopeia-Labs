"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

interface Props {
  slug: string;
}

export const APP_TABS = [
  { path: "", label: "Resumen" },
  { path: "/support", label: "Soporte" },
  { path: "/privacy", label: "Privacidad" },
  { path: "/terms", label: "Términos" },
];

export default function AppSubNav({ slug }: Props) {
  const pathname = usePathname();
  const navRef = useRef<HTMLElement>(null);
  const [bar, setBar] = useState<{ left: number; width: number } | null>(null);
  const picked = useRef(false);

  // Línea bajo la pestaña activa: se desliza de una a otra al cambiar.
  useLayoutEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const place = () => {
      const active = nav.querySelector<HTMLElement>('a[aria-current="page"]');
      setBar(
        active ? { left: active.offsetLeft, width: active.offsetWidth } : null,
      );
    };
    place();
    window.addEventListener("resize", place);
    return () => window.removeEventListener("resize", place);
  }, [pathname]);

  // La cabecera no cambia, así que la página no salta arriba del todo: solo
  // si las pestañas habían quedado por encima de la pantalla, se vuelve a
  // ellas para ver el nuevo contenido desde el principio.
  useEffect(() => {
    if (!picked.current) return;
    picked.current = false;
    const nav = navRef.current;
    if (!nav) return;
    const navH =
      parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--nav-h"),
      ) || 72;
    const top = nav.getBoundingClientRect().top;
    if (top < navH) {
      const y = window.scrollY + top - navH - 16;
      if (window.__lenis) window.__lenis.scrollTo(y);
      else window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [pathname]);

  return (
    <nav className="tabs" aria-label="Secciones de la app" ref={navRef}>
      {APP_TABS.map((tab) => {
        const href = `/apps/${slug}${tab.path}`;
        return (
          <Link
            key={tab.path}
            href={href}
            scroll={false}
            onClick={() => {
              picked.current = true;
            }}
            aria-current={pathname === href ? "page" : undefined}
          >
            {tab.label}
          </Link>
        );
      })}
      {bar && (
        <span
          className="tabs-bar"
          aria-hidden="true"
          style={{ transform: `translateX(${bar.left}px)`, width: bar.width }}
        />
      )}
    </nav>
  );
}
