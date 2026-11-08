import type {
  BandInfo,
  BudgetTier,
  CostItem,
  FaqItem,
  PriceRange,
  ThemeInfo,
} from './types';

/** Date the planning ranges, seasonal notes and route logic were last reviewed. */
export const REVIEW_DATE = '8 Nov 2026';
export const REVIEW_DATE_ISO = '2026-11-08';

export const PRICE_LABEL = 'Indicative planning budget';
export const PRICE_BASIS_SHORT = 'USD per person · two adults sharing one room · land-only estimate';
export const PRICE_BASIS_POINTS = [
  'US dollars, per person, with two adults sharing one double or twin room.',
  'Land-only: accommodation with breakfast and core private ground transport are assumed.',
  'Most entry fees, safari, park and jeep fees, rail tickets and optional activity fees are not in the range unless a written quote says so.',
  'Flights, visa, insurance, tips, and meals other than breakfast are not included.',
];
export const PRICE_DISCLAIMER =
  'These are broad planning estimates built from public market research. They are not confirmed Senvira supplier rates, and not a price you will be charged. The final quote depends on your dates, party size, accommodation, vehicle and chosen activities.';

export const TIERS: { id: BudgetTier; label: string; assumption: string }[] = [
  {
    id: 'budget',
    label: 'Budget',
    assumption: 'Simpler guesthouses and fewer inclusions.',
  },
  {
    id: 'comfort',
    label: 'Comfort',
    assumption: 'Modest hotels or boutique guesthouses, with private transport.',
  },
  {
    id: 'premium',
    label: 'Premium',
    assumption: 'Upscale or boutique stays and specialist service.',
  },
];
export const TIER_NOTE =
  'Tier names describe the planning assumption behind each range. They are not yet Senvira-defined accommodation grades.';

export function formatRange(range: PriceRange): string {
  const fmt = (n: number) => n.toLocaleString('en-US');
  return `US$${fmt(range.min)}–${fmt(range.max)}${range.open ? '+' : ''}`;
}

export const bands: BandInfo[] = [
  { id: 'under-week', label: 'Under a week', range: '4–5 days', blurb: 'A first taste: one region or a compact sampler.' },
  { id: 'six-seven', label: 'About a week', range: '6–7 days', blurb: 'One clear theme, with a little room to breathe.' },
  { id: 'eight-ten', label: '8–10 days', range: '8–10 days', blurb: 'Culture, highlands and a wildlife or coast chapter.' },
  { id: 'twelve-sixteen', label: 'Two weeks', range: '12–16 days', blurb: 'Slower stays, and a second region chosen for the season.' },
  { id: 'twenty-twenty-two', label: 'Three weeks', range: '20–22 days', blurb: 'Deeper regional coverage, with recovery days built in.' },
  { id: 'twenty-eight-thirty', label: 'A month', range: '28–30 days', blurb: 'Extended stays, planned as modular custom routes.' },
];

export const themes: ThemeInfo[] = [
  { id: 'heritage', label: 'Heritage & culture', blurb: 'Ancient cities, cave temples, sacred sites and the living traditions around them.' },
  { id: 'wildlife', label: 'Wildlife', blurb: 'Responsible safaris and habitat variety. Sightings are never promised.' },
  { id: 'highlands-rail', label: 'Highlands & rail', blurb: 'Tea country, cool ridgelines and the hill-country railway.' },
  { id: 'coast', label: 'Coast', blurb: 'South and east coast time, matched to the travel month.' },
  { id: 'north-east', label: 'North & East', blurb: 'Jaffna, Anuradhapura and the east coast, with longer road days.' },
  { id: 'family', label: 'Family', blurb: 'Shorter days, flexible pacing and simple logistics for children.' },
  { id: 'active', label: 'Active & adventure', blurb: 'Walking-led routes with recovery days and weather-dependent options.' },
];

export function getBand(id: string): BandInfo {
  const band = bands.find((b) => b.id === id);
  if (!band) throw new Error(`[packages] Unknown duration band "${id}"`);
  return band;
}

export function getTheme(id: string): ThemeInfo {
  const theme = themes.find((t) => t.id === id);
  if (!theme) throw new Error(`[packages] Unknown theme "${id}"`);
  return theme;
}

/** Standard cost treatment shown on every package page. */
export const standardCosts: CostItem[] = [
  { label: 'Accommodation, twin or double room, with breakfast', status: 'included', note: 'Planning basis. Lodging grade and named properties are confirmed in your written quote.' },
  { label: 'Private vehicle with driver for the transfers and days shown', status: 'included', note: 'Planning basis. Vehicle class, luggage space and driver costs are confirmed in your quote.' },
  { label: 'Airport pick-up and drop-off', status: 'included', note: 'Planning basis. Early or late flights may need an extra night.' },
  { label: 'Licensed site or area guide at heritage sites', status: 'optional', note: 'Offered where listed. The guide category is confirmed in your quote. A driver is not a licensed site guide.' },
  { label: 'Optional activities named in the itinerary', status: 'optional', note: 'Only booked through providers we have verified. Priced separately.' },
  { label: 'Site admissions and heritage tickets', status: 'excluded', note: 'Fees change and vary by visitor category. See the official Central Cultural Fund eTicketing for current rates.' },
  { label: 'Safari jeep, park and ranger fees', status: 'excluded', note: 'Costed per park once your dates and the park choice are set.' },
  { label: 'Rail tickets and seat reservations', status: 'excluded', note: 'Seats are never guaranteed. Class and reservation are shown in your quote if arranged.' },
  { label: 'Meals other than breakfast, drinks and water', status: 'excluded' },
  { label: 'International flights, visa or ETA, travel insurance', status: 'excluded' },
  { label: 'Tips, personal spending and optional upgrades', status: 'excluded' },
  { label: 'Solo, child, triple-share and larger-group pricing', status: 'excluded', note: 'The range is for two adults sharing. These are quoted separately, never silently multiplied.' },
];

export const costStatusLabel: Record<CostItem['status'], string> = {
  included: 'Included in planning basis',
  optional: 'Optional extra',
  excluded: 'Not included',
};

/** Official references named in the research brief (checked 8 Nov 2026). Rendered on package pages. */
export const officialLinks = [
  { label: 'Central Cultural Fund eTicketing (heritage site fees)', url: 'https://www.eservices.ccf.gov.lk/eticketing/landing' },
  { label: 'SLTDA: licensed guide categories (PDF)', url: 'https://www.sltda.gov.lk/storage/common_media/SLTDA%20Licensed%20Guide%20Service.pdf' },
  { label: 'SLTDA: Nature & Wildlife Tourism Toolkit (PDF)', url: 'https://www.sltda.gov.lk/storage/common_media/Nature_wildlife_Tourism_Toolkit.pdf' },
  { label: 'Sri Lanka Tourism: weather and seasons', url: 'https://www.srilanka.travel/weather' },
];

/** FAQ shared by every package page. Route-specific questions are appended per package. */
export const commonFaq: FaqItem[] = [
  {
    q: 'Is this a fixed price or a booking?',
    a: 'Neither. The range is an indicative planning budget, and the form sends an enquiry. Nothing is reserved, and availability is not implied until you have a written quote that says otherwise.',
  },
  {
    q: 'What does the price basis mean?',
    a: 'US dollars per person, with two adults sharing one room, land-only. It assumes accommodation with breakfast and core private transport. Most entry, safari, rail and optional activity fees are extra.',
  },
  {
    q: 'I am travelling solo, or with children or a larger group.',
    a: 'Tell us in the form. Solo supplements, child rates, triple rooms and group totals are quoted separately. A two-sharing range cannot simply be multiplied.',
  },
  {
    q: 'Can the route be changed?',
    a: 'Yes. These are starting points. Pace, nights per base, season and activities can all be reshaped, and we will say plainly what changes in duration or cost.',
  },
  {
    q: 'What if my flight lands late or leaves early?',
    a: 'Arrival and departure days follow your flight. An early departure often needs a night near the airport, and we would rather add that than imply a rushed day works.',
  },
  {
    q: 'What happens if the weather changes?',
    a: 'Sri Lanka has two monsoon systems, and conditions vary. Seasonal notes here are planning aids, not guarantees. Sightings, views, sea conditions and train seats cannot be promised.',
  },
  {
    q: 'Are meals, tickets and tips included?',
    a: 'Breakfast is assumed. Other meals, site admissions, safari and park fees, rail tickets and tips are not in the range. Every cost line on this page is marked included, optional extra, or not included.',
  },
  {
    q: 'Can you cater for dietary needs and accessibility requirements?',
    a: 'Tell us in the form and we will check each stop and stay. Several routes involve stairs, uneven ground and heat, and we will say honestly if a stop is unsuitable.',
  },
];

export const hubFaq: FaqItem[] = [
  {
    q: 'Are these ready-to-book tours?',
    a: 'No. They are planning itineraries: routes we think work well, and starting points for a conversation. You send an enquiry, we confirm lodging, transport, guides and fees, and only then do you get a written quote.',
  },
  {
    q: 'Why do you show ranges instead of prices?',
    a: 'Because honest prices need your dates, party size and lodging level. The ranges are public market research, labelled as such, and shown with their basis next to them.',
  },
  {
    q: 'Are these private or shared journeys?',
    a: 'They are planned as private journeys for your own party, with the price basis of two adults sharing a room. Shared departures are not part of this launch.',
  },
  ...commonFaq.slice(2, 6),
];
