"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { APP_TABS } from "@/components/apps/AppSubNav";

// Última pestaña vista, para saber hacia qué lado se mueve el usuario.
let last: { slug: string; index: number } | null = null;

const tabOf = (path: string) => {
  const [, , slug = "", section = ""] = path.split("/");
  const index = APP_TABS.findIndex(
    (t) => t.path === (section ? `/${section}` : ""),
  );
  return { slug, index: Math.max(0, index) };
};

/**
 * Next vuelve a montar el template en cada cambio de pestaña de una app, así
 * que el contenido entra con una animación: desde la derecha si se avanza
 * (Resumen → Soporte → Privacidad → Términos) y desde la izquierda si se
 * vuelve. Al entrar en la app (o en otra app) no hay animación propia: ya
 * está la estrella fugaz.
 */
export default function AppTabTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  const current = tabOf(usePathname());
  const dir =
    last && last.slug === current.slug
      ? Math.sign(current.index - last.index)
      : 0;

  useEffect(() => {
    last = current;
  });

  return (
    <div
      className={`tab-pane${dir > 0 ? " from-right" : dir < 0 ? " from-left" : ""}`}
    >
      {children}
    </div>
  );
}
