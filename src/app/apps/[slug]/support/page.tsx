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
    title: `${app.name} — Soporte`,
    description: `Soporte y contacto para ${app.name}.`,
  };
}

const SUPPORT_EMAIL = "samuparre96@gmail.com";

export default async function SupportPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const app = getApp(slug);
  if (!app) notFound();

  const content = await getAppContent(slug, "support");

  return (
    <article className="privacy-card">
      <div className="prose">
        {content ? (
          content.content
        ) : (
          <p>
            ¿Necesitas ayuda con {app.name}? Escríbenos a{" "}
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              style={{
                color: "var(--fg)",
                borderBottom: "1px solid var(--line-strong)",
              }}
            >
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
        )}
      </div>
    </article>
  );
}
