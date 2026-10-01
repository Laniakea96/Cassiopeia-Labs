import { notFound } from "next/navigation";
import { getApp, getAllApps } from "@/data/apps";
import { getAppContent } from "@/lib/mdx";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllApps().map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) return {};
  return {
    title: `${app.name} — Privacidad`,
    description: `Política de privacidad de ${app.name}.`,
  };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();

  const content = await getAppContent(slug, "privacy");

  return (
    <article className="doc prose">
      <header className="doc-head">
        <h2>Política de privacidad</h2>
        <p className="app-head-date">Actualizado el {app.lastUpdated}</p>
      </header>
      {content ? (
        content.content
      ) : (
        <p>Política de privacidad de {app.name} próximamente.</p>
      )}
    </article>
  );
}
