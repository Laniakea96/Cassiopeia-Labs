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
    title: `${app.name} - Privacy Policy`,
    description: `Privacy policy for ${app.name}`,
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
    <div className="prose prose-lg max-w-none">
      {content ? (
        content.content
      ) : (
        <div>
          <h2>Privacy Policy</h2>
          <p>Privacy policy for {app.name} coming soon.</p>
        </div>
      )}
    </div>
  );
}
