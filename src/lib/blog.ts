import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { BlogPost, BlogFrontmatter } from "@/types/blog";

const blogDir = path.join(process.cwd(), "src/content/blog");

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(blogDir)) return [];

  const files = fs.readdirSync(blogDir).filter((f) => f.endsWith(".mdx"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const source = fs.readFileSync(path.join(blogDir, file), "utf-8");
    const { data } = matter(source);

    return {
      slug,
      frontmatter: data as BlogFrontmatter,
    };
  });

  return posts
    .filter((p) => p.frontmatter.published)
    .sort(
      (a, b) =>
        new Date(b.frontmatter.date).getTime() -
        new Date(a.frontmatter.date).getTime()
    );
}

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(blogDir)) return [];
  return fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}
