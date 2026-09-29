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

  return (
    <>
      <AppHeader app={app} />
      <section className="wrap app-body">
        <AppSubNav slug={slug} />
        {children}
      </section>
    </>
  );
}
