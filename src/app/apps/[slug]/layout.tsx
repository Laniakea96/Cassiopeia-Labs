import { notFound } from "next/navigation";
import { getApp, getAllApps } from "@/data/apps";
import AppHeader from "@/components/apps/AppHeader";
import AppSubNav from "@/components/apps/AppSubNav";

export async function generateStaticParams() {
  return getAllApps().map((app) => ({ slug: app.slug }));
}

export default async function AppLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = getApp(slug);

  if (!app) notFound();

  // El color de acento de la app tiñe toda su página (ver .app-theme).
  return (
    <div
      className="app-theme"
      style={{ "--glow": app.glow } as React.CSSProperties}
    >
      <AppHeader app={app} />
      <section className="wrap app-body">
        <div className="tabs-row">
          <AppSubNav slug={slug} />
          {app.mascot && (
            <img
              className="tabs-mascot"
              src={app.mascot.src}
              alt={app.mascot.alt}
            />
          )}
        </div>
        {children}
      </section>
    </div>
  );
}
