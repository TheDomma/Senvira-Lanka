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
    headerLogo: { src: string; width: number; height: number };
    headerEmblem: { src: string; width: number; height: number };
    headerWordmark: { src: string; width: number; height: number };
    footerPrimaryLight: { src: string; width: number; height: number };
    footerWordmarkLight: { src: string; width: number; height: number };
    favicon: string;
  };
  contact: {
    isConfigured: boolean;
    email?: string;
    whatsappNumber?: string;
    whatsappDisplay?: string;
    phoneNumber?: string;
    phoneDisplay?: string;
  };
  socials: {
    facebook?: string;
    instagram?: string;
    tripadvisor?: string;
    tiktok?: string;
    linkedin?: string;
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
    headerLogo: { src: '/brand/Senvira Lanka Nature Emblem white.png', width: 1024, height: 1024 },
    headerEmblem: { src: '/brand/logo-emblem-dark.png', width: 1080, height: 1020 },
    headerWordmark: { src: '/brand/logo-wordmark-light.png', width: 2048, height: 620 },
    footerPrimaryLight: { src: '/brand/logo-primary-light.png', width: 1024, height: 768 },
    footerWordmarkLight: { src: '/brand/Senvira Lanka Nature Emblem white.png', width: 1024, height: 1024 },
    favicon: '/brand/logo-emblem-light.png',
  },
  contact: {
    isConfigured: true,
    email: 'senviralanka@gmail.com',
    whatsappNumber: undefined,
    whatsappDisplay: undefined,
    phoneNumber: undefined,
    phoneDisplay: undefined,
  },
  socials: {
    facebook: 'https://www.facebook.com/profile.php?id=61595934223008',
    instagram: 'https://www.instagram.com/senviralanka/',
  },
  navigation: [
    { label: 'Destinations', href: '/destinations/' },
    { label: 'Experiences', href: '/experiences/' },
    { label: 'Packages', href: '/packages/' },
    { label: 'Plan your journey', href: '/journeys/' },
    { label: 'Our story', href: '/our-story/' },
    { label: 'Contact', href: '/contact/' },
  ],
};
