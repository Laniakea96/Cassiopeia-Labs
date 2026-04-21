import { notFound } from "next/navigation";
import { getAllBlogSlugs } from "@/lib/blog";
import { getBlogContent } from "@/lib/mdx";
import Container from "@/components/ui/Container";
import type { Metadata } from "next";
import type { BlogFrontmatter } from "@/types/blog";

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogContent(slug);
  if (!post) return {};
  const fm = post.frontmatter as BlogFrontmatter;
  return {
    title: fm.title,
    description: fm.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlogContent(slug);
  if (!post) notFound();

  const fm = post.frontmatter as BlogFrontmatter;

  return (
    <div className="py-24">
      <Container>
        <article className="max-w-3xl mx-auto">
          <header className="mb-10">
            <time className="text-sm text-muted">
              {new Date(fm.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
              {fm.title}
            </h1>
            {fm.tags.length > 0 && (
              <div className="flex gap-2">
                {fm.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>
          <div className="prose prose-lg max-w-none">{post.content}</div>
        </article>
      </Container>
    </div>
  );
}
