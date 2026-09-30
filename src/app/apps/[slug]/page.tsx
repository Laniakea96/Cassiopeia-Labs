import { notFound } from "next/navigation";
import { getApp, getAllApps } from "@/data/apps";
import { getAppContent } from "@/lib/mdx";
import type { Metadata } from "next";
import ScreenshotGallery from "@/components/apps/ScreenshotGallery";

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
        <ul className="features">
          {app.features.map((feature) => (
            <li key={feature.title}>
              <h2>{feature.title}</h2>
              <p>{feature.description}</p>
            </li>
          ))}
        </ul>
      )}

      {app.screenshots.length > 0 && (
        <ScreenshotGallery appName={app.name} shots={app.screenshots} />
      )}

      <article className="doc prose">
        {content ? (
          content.content
        ) : (
          <p>{app.longDescription ?? app.description}</p>
        )}
      </article>
    </>
  );
}
