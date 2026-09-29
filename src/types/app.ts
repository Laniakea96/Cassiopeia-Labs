export type AppPlatform = "ios" | "android" | "web" | "macos";

export type AppStatus = "live" | "wip" | "soon";

export interface AppFeature {
  title: string;
  description: string;
}

export interface AppResponsibleParty {
  name: string;
  email: string;
  country: string;
}

export interface AppPrivacyShort {
  data: string;
  storage: string;
  auth: string;
  contact: string;
}

export interface AppData {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription?: string;
  iconClass: string;
  iconSrc: string;
  initial: string;
  color?: string;
  accentFrom?: string;
  accentTo?: string;
  /** Color de la estrella de la app en la web (halo y detalles). */
  glow?: string;
  category: string;
  platforms: AppPlatform[];
  links: {
    appStore?: string;
    playStore?: string;
    web?: string;
    instagram?: string;
  };
  screenshots: string[];
  features?: AppFeature[];
  responsibleParty?: AppResponsibleParty;
  privacyShort?: AppPrivacyShort;
  lastUpdated: string;
  featured: boolean;
  status: AppStatus;
}
