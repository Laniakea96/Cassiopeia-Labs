import type { Metadata } from "next";
import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedSection from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Blog",
  description: "Thoughts on app development, design, and technology.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <div className="py-24">
      <Container>
        <AnimatedSection>
          <SectionHeading
            title="Blog"
            subtitle="Thoughts on app development and technology"
          />
        </AnimatedSection>

        {posts.length === 0 ? (
          <AnimatedSection>
            <p className="text-center text-muted text-lg">
              No posts yet. Check back soon!
            </p>
          </AnimatedSection>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {posts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`}>
                  <article className="bg-surface-raised border border-border rounded-2xl p-6 transition-all duration-300 hover:border-brand-500/30 hover:-translate-y-1">
                    <time className="text-sm text-muted">
                      {new Date(post.frontmatter.date).toLocaleDateString(
                        "en-US",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </time>
                    <h2 className="text-xl font-semibold text-foreground mt-2 mb-3">
                      {post.frontmatter.title}
                    </h2>
                    <p className="text-muted text-sm line-clamp-3">
                      {post.frontmatter.excerpt}
                    </p>
                    {post.frontmatter.tags.length > 0 && (
                      <div className="flex gap-2 mt-4">
                        {post.frontmatter.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs text-brand-400 bg-brand-500/10 px-2 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </article>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
