import type { ImageMetadata } from 'astro';
import heroImage from '../assets/images/gallery/ceylon-sunrise-entrance-bg.jpg';
import sigiriyaImage from '../assets/images/destinations/sigiriya-panorama.jpg';
import anuradhapuraImage from '../assets/images/destinations/anuradhapura-panorama.jpg';
import kandyImage from '../assets/images/destinations/kandy-panorama.jpg';
import ellaImage from '../assets/images/destinations/ella-panorama.jpg';
import elephantImage from '../assets/images/destinations/elephants-bathing.jpg';

export interface DestinationHighlight {
  id: 'sigiriya' | 'anuradhapura' | 'kandy' | 'ella';
  name: string;
  region: string;
  landscapeTag: string;
  summary: string;
  image: ImageMetadata;
  imageAlt: string;
}

export interface ExperienceHighlight {
  id: string;
  title: string;
  geography: string;
  description: string;
  image: ImageMetadata;
  imageAlt: string;
}

export const heroContent = {
  eyebrow: 'Senvira Lanka · private island journeys',
  headline: 'Come find your own Sri Lanka.',
  supportingCopy:
    'Tea-covered highlands, ancient kingdoms and warm southern shores—brought together with time to truly see them.',
  primaryAction: { label: 'Start planning', href: '/journeys/' },
  secondaryAction: { label: 'Explore destinations', href: '/destinations/' },
  locationBadge: {
    title: 'The Central Highlands',
    subtitle: 'Tea country · misty ridgelines · quiet roads',
  },
  image: heroImage,
  imageAlt: 'Morning light over the green ridgelines of Sri Lanka’s hill country.',
};

export const destinationsContent: {
  eyebrow: string;
  heading: string;
  intro: string;
  items: DestinationHighlight[];
} = {
  eyebrow: 'Find your place',
  heading: 'A little island, many different worlds.',
  intro: 'Begin with a landscape that draws you in. The rest of the journey can unfold from there.',
  items: [
    {
      id: 'sigiriya',
      name: 'Sigiriya',
      region: 'Cultural Triangle',
      landscapeTag: 'Ancient stone · forest canopy',
      summary: 'The Lion Rock rising above the green heart of the island.',
      image: sigiriyaImage,
      imageAlt: 'Sigiriya Rock rising above the surrounding forest and water gardens.',
    },
    {
      id: 'anuradhapura',
      name: 'Anuradhapura',
      region: 'The Ancient North',
      landscapeTag: 'Sacred places · open skies',
      summary: 'A living sacred city shaped by centuries of history.',
      image: anuradhapuraImage,
      imageAlt: 'A white dagoba and garden grounds in Anuradhapura.',
    },
    {
      id: 'kandy',
      name: 'Kandy',
      region: 'The Hill Country',
      landscapeTag: 'Lake paths · hill gardens',
      summary: 'A green valley of lake walks, temples and gardens.',
      image: kandyImage,
      imageAlt: 'Kandy Lake and the green hills around the city.',
    },
    {
      id: 'ella',
      name: 'Ella',
      region: 'Uva Highlands',
      landscapeTag: 'Blue trains · tea ridges',
      summary: 'A slow railway through tea hills and open mountain air.',
      image: ellaImage,
      imageAlt: 'A blue train crossing the Nine Arch Bridge in Ella’s green highlands.',
    },
  ],
};

export const experiencesContent: {
  eyebrow: string;
  heading: string;
  intro: string;
  items: ExperienceHighlight[];
} = {
  eyebrow: 'Island Experiences',
  heading: 'The moments that make a journey.',
  intro: 'A few good days, chosen well, can stay with you long after the trip ends.',
  items: [
    {
      id: 'highland-rail',
      title: 'A slower ride through tea country',
      geography: 'Hill Country · Kandy to Ella',
      description: 'Follow the railway over green valleys, stone bridges and the changing light of the highlands.',
      image: ellaImage,
      imageAlt: 'The highland train crossing a stone viaduct in Ella.',
    },
    {
      id: 'wildlife',
      title: 'The island’s wild heart',
      geography: 'National parks · wetlands',
      description: 'Make space for quiet mornings, open grasslands and the wildlife that calls them home.',
      image: elephantImage,
      imageAlt: 'An Asian elephant wading in a shallow pool.',
    },
    {
      id: 'ancient-places',
      title: 'Mornings among ancient stones',
      geography: 'Sigiriya · Anuradhapura',
      description: 'See the island’s early kingdoms in the softer hours, when the day is still quiet.',
      image: sigiriyaImage,
      imageAlt: 'Sigiriya Rock and its gardens in the morning light.',
    },
  ],
};

export const aboutPreviewContent = {
  eyebrow: 'About Senvira Lanka',
  heading: 'Rooted in Sri Lanka, focused on clarity.',
  paragraphs: [
    'Senvira Lanka is a Sri Lankan tourism brand created for travellers who value calm, well-considered trip planning over crowded, generic tour templates.',
    'We are starting intentionally small: introducing the places we know well, sharing straightforward regional context, and preparing detailed itineraries and local partner connections step by step as every detail is verified.',
  ],
  principles: [
    'Honest guidance on travel times and seasonal weather',
    'Respect for local heritage sites, nature reserves, and communities',
    'Thoughtful route planning without pressure or exaggerated claims',
  ],
};

export const ctaContent = {
  eyebrow: 'Plan a Trip',
  heading: 'Your Sri Lanka, your way.',
  intro: 'A good journey begins with what draws you to Sri Lanka, how much time you have, and a pace that feels like yours.',
  unconfiguredChannelNotice: 'Our enquiry channels are being finalised ahead of launch. For now, explore the places that could shape your route.',
};
