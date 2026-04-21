export interface BlogFrontmatter {
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  coverImage?: string;
  published: boolean;
}

export interface BlogPost {
  slug: string;
  frontmatter: BlogFrontmatter;
}
