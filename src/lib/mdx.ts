import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import { type ReactElement } from "react";

const contentDir = path.join(process.cwd(), "src/content");

export async function getAppContent(
  slug: string,
  page: string
): Promise<{ content: ReactElement; frontmatter: Record<string, unknown> } | null> {
  const filePath = path.join(contentDir, "apps", slug, `${page}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const source = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(source);

  const mdx = await compileMDX({
    source: content,
    options: { parseFrontmatter: false },
  });

  return { content: mdx.content, frontmatter: data };
}

export async function getBlogContent(slug: string) {
  const filePath = path.join(contentDir, "blog", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const source = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(source);

  const mdx = await compileMDX({
    source: content,
    options: { parseFrontmatter: false },
  });

  return { content: mdx.content, frontmatter: data };
}
