import { AppData } from "@/types/app";

export const apps: AppData[] = [
  {
    slug: "sample-app",
    name: "Sample App",
    tagline: "A placeholder app to show how the site works",
    description:
      "This is a sample app entry. Replace it with your real apps when ready.",
    icon: "/images/apps/sample-app/icon.png",
    color: "#6366f1",
    platforms: ["ios", "android"],
    links: {
      appStore: "https://apps.apple.com",
      playStore: "https://play.google.com",
    },
    screenshots: [],
    featured: true,
    category: "Productivity",
  },
];

export function getApp(slug: string): AppData | undefined {
  return apps.find((app) => app.slug === slug);
}

export function getAllApps(): AppData[] {
  return apps;
}

export function getFeaturedApps(): AppData[] {
  return apps.filter((app) => app.featured);
}
