import { MetadataRoute } from "next";
import { getAllApps } from "@/data/apps";
import { getAllBlogSlugs } from "@/lib/blog";
import { siteConfig } from "@/data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages = ["", "/about", "/apps", "/blog", "/contact"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })
  );

  const appPages = getAllApps().flatMap((app) =>
    ["", "/support", "/privacy", "/terms"].map((sub) => ({
      url: `${baseUrl}/apps/${app.slug}${sub}`,
      lastModified: new Date(),
    }))
  );

  const blogPages = getAllBlogSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...appPages, ...blogPages];
}
