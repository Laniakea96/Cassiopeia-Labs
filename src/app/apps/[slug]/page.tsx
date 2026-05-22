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
    title: `${app.name} — ${app.tagline}`,
    description: app.description,
  };
}

export default async function AppPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();

  const content = await getAppContent(slug, "description");

  return (
    <>
      {app.features && app.features.length > 0 && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 16,
            marginBottom: 40,
          }}
        >
          {app.features.map((feature) => (
            <article key={feature.title} className="privacy-card">
              <h4 style={{ marginTop: 0, marginBottom: 8 }}>{feature.title}</h4>
              <p style={{ color: "var(--dim)", margin: 0, lineHeight: 1.6 }}>
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      )}

      <article className="privacy-card">
        <div className="prose prose-wide">
          {content ? content.content : <p>{app.longDescription ?? app.description}</p>}
        </div>
      </article>
    </>
  );
}
