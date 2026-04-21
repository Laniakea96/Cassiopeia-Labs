export interface AppData {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  platforms: ("ios" | "android" | "web" | "macos")[];
  links: {
    appStore?: string;
    playStore?: string;
    web?: string;
  };
  screenshots: string[];
  featured: boolean;
  category: string;
}
