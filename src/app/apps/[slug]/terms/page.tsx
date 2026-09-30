import { notFound } from "next/navigation";
import { getApp, getAllApps } from "@/data/apps";
import { getAppContent } from "@/lib/mdx";
import type { Metadata } from "next";
import DocWithShot from "@/components/apps/DocWithShot";

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
    title: `${app.name} — Términos`,
    description: `Términos y condiciones de uso de ${app.name}.`,
  };
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();

  const content = await getAppContent(slug, "terms");

  return (
    <DocWithShot app={app} shot={1}>
      {content ? (
        content.content
      ) : (
        <p>Términos y condiciones de {app.name} próximamente.</p>
      )}
    </DocWithShot>
  );
}
