export interface NavItem {
  label: string;
  href: string;
}

export interface SiteConfig {
  brandName: string;
  tagline: string;
  description: string;
  siteUrl?: string;
  logos: {
    headerEmblem: { src: string; width: number; height: number };
    footerPrimaryLight: { src: string; width: number; height: number };
    footerWordmarkLight: { src: string; width: number; height: number };
    favicon: string;
  };
  contact: {
    isConfigured: boolean;
    email?: string;
    whatsappNumber?: string;
    whatsappDisplay?: string;
  };
  navigation: NavItem[];
}

export const siteConfig: SiteConfig = {
  brandName: 'Senvira Lanka',
  tagline: 'Thoughtful Sri Lankan Journeys',
  description:
    'Thoughtfully planned journeys through Sri Lanka’s ancient places, green highlands, wildlife and coast.',
  siteUrl: import.meta.env.PUBLIC_SITE_URL || undefined,
  logos: {
    headerEmblem: { src: '/brand/logo-emblem-dark.png', width: 1080, height: 1020 },
    footerPrimaryLight: { src: '/brand/logo-primary-light.png', width: 1376, height: 912 },
    footerWordmarkLight: { src: '/brand/logo-wordmark-light.png', width: 1536, height: 525 },
    favicon: '/brand/favicon-circle-dark.png',
  },
  contact: {
    isConfigured: false,
    email: undefined,
    whatsappNumber: undefined,
    whatsappDisplay: undefined,
  },
  navigation: [
    { label: 'Destinations', href: '#destinations' },
    { label: 'Experiences', href: '#experiences' },
  ],
};
