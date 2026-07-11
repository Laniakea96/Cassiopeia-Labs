import { MetadataRoute } from "next";
import { getAllApps } from "@/data/apps";
import { siteConfig } from "@/data/siteConfig";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const staticPages = ["", "/about", "/apps", "/privacy", "/contact"].map(
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

  return [...staticPages, ...appPages];
}
