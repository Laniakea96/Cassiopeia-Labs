import { notFound } from "next/navigation";
import { getApp, getAllApps } from "@/data/apps";
import { getAppContent } from "@/lib/mdx";
import { siteConfig } from "@/data/siteConfig";
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
    title: `${app.name} - Support`,
    description: `Support page for ${app.name}`,
  };
}

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
    <div className="prose prose-lg max-w-none">
      {content ? (
        content.content
      ) : (
        <div>
          <h2>Support</h2>
          <p>
            Need help with {app.name}? Contact us at{" "}
            <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
          </p>
        </div>
      )}
    </div>
  );
}
