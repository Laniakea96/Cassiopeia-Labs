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
    <article className="privacy-card">
      <div className="privacy-head">
        <div className="privacy-head-l">
          <div className={`mini-icon ${app.iconClass}`} aria-hidden="true">
            <img src={app.iconSrc} alt="" />
          </div>
          <h3>
            {app.name}{" "}
            <span style={{ fontWeight: 400, color: "var(--dim)" }}>— Términos</span>
          </h3>
        </div>
        <div className="privacy-date">
          Actualizado <span className="tag">{app.lastUpdated}</span>
        </div>
      </div>
      <div className="prose">
        {content ? (
          content.content
        ) : (
          <p>Términos y condiciones de {app.name} próximamente.</p>
        )}
      </div>
    </article>
  );
}
