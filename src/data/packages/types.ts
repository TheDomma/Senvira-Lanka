import type { ImageMetadata } from 'astro';

export type PackageStatus = 'launch' | 'draft';

export type BudgetTier = 'budget' | 'comfort' | 'premium';

export type DurationBandId =
  | 'under-week'
  | 'six-seven'
  | 'eight-ten'
  | 'twelve-sixteen'
  | 'twenty-twenty-two'
  | 'twenty-eight-thirty';

export type ThemeId =
  | 'heritage'
  | 'wildlife'
  | 'highlands-rail'
  | 'coast'
  | 'north-east'
  | 'family'
  | 'active';

export type Pace = 'Relaxed' | 'Balanced' | 'Active';
export type EffortLevel = 'Light' | 'Moderate' | 'Demanding';

/** included = part of the planning basis; optional = extra cost if chosen; excluded = not in the range. */
export type CostStatus = 'included' | 'optional' | 'excluded';

export interface PriceRange {
  min: number;
  max: number;
  /** Open-ended premium ranges are published as "US$1,000–1,900+". */
  open?: boolean;
}

export type BudgetRanges = Record<BudgetTier, PriceRange>;

/** A link to a real destination or experience in the existing site. Validated at build time. */
export type StopRef =
  | { kind: 'destination'; id: string; label?: string }
  | { kind: 'experience'; id: string; label?: string };

export interface CostItem {
  label: string;
  status: CostStatus;
  note?: string;
}

export interface DayImage {
  id: string;
  /** Short caption. Use it when the photo is illustrative rather than the exact stop. */
  caption?: string;
}

export interface ItineraryDay {
  /** Inclusive first and last day covered by this block, e.g. [2, 3]. */
  days: [number, number];
  title: string;
  /** Overnight base. Omit on the departure day. */
  base?: string;
  summary: string;
  /** Practical description of what happens. */
  plan: string[];
  /** Realistic effort / access note for the day. */
  effort: string;
  /** True when a road (or rail) transfer is part of the day. Duration is never stated unless verified. */
  moves?: boolean;
  /** Day-specific cost lines (admissions, optional activities, etc.). */
  items?: CostItem[];
  stops?: StopRef[];
  image?: DayImage;
  /** Coordinate id (from VERIFIED_DESTINATION_COORDINATES) used for the supplementary route sketch. */
  mapStop?: string;
}

export interface SeasonalAlternative {
  title: string;
  when: string;
  text: string;
  impact: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface TravelPackage {
  slug: string;
  /** Number in the research brief's expanded portfolio. */
  briefNo: number;
  status: 'launch';
  title: string;
  /** One factual promise line. */
  promise: string;
  days: number;
  nights: number;
  band: DurationBandId;
  /** Ordered overnight bases, used for the one-line route and the sketch. */
  route: string[];
  routeNote?: string;
  audience: string;
  themes: ThemeId[];
  primaryTheme: ThemeId;
  pace: Pace;
  effort: { level: EffortLevel; note: string };
  season: { fit: string; caveat: string };
  budget: BudgetRanges;
  /** When true, hub cards show "Request a confirmed quote" instead of a numeric range. */
  quoteOnlyOnCard?: boolean;
  quoteOnlyReason?: string;
  heroImage: DayImage;
  cardImage: string;
  overview: string[];
  itinerary: ItineraryDay[];
  seasonalAlternatives: SeasonalAlternative[];
  practical: {
    lodging: string;
    transport: string;
    guide: string;
    access: string;
    familyNote: string;
  };
  /** Extra cost lines specific to this route, merged with the standard list. */
  extraCosts?: CostItem[];
  faq?: FaqItem[];
  /** Internal: facts Senvira must confirm before this route is sold. Not rendered publicly. */
  confirmBeforeSelling: string[];
}

export interface PlannedPackage {
  slug: string;
  briefNo: number;
  status: 'draft';
  title: string;
  days: number;
  nights: number;
  band: DurationBandId;
  route: string;
  audience: string;
  themes: ThemeId[];
  budget: BudgetRanges;
  /** Why this option is held back from the first public launch. */
  heldBecause: string;
}

export interface PackageImage {
  id: string;
  src: ImageMetadata;
  /** Describes what is visible in the photograph. */
  alt: string;
  /** Short subject label used in credits. */
  subject: string;
  creator: string;
  platform: string;
  license: string;
  licenseUrl: string;
  sourceUrl: string;
  /** True when the licence requires credit to be shown (CC BY / BY-SA). */
  attributionRequired: boolean;
  /** Which project ledger documents the rights. */
  ledger: string;
  note?: string;
}

export interface BandInfo {
  id: DurationBandId;
  label: string;
  range: string;
  blurb: string;
}

export interface ThemeInfo {
  id: ThemeId;
  label: string;
  blurb: string;
}
