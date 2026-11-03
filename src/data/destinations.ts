import type { ImageMetadata } from 'astro';
import anuradhapuraPhoto from '../assets/images/destinations/directory-anuradhapura.avif';
import bentotaPhoto from '../assets/images/destinations/directory-bentota.avif';
import colomboPhoto from '../assets/images/destinations/directory-colombo.jpg';
import mirissaPhoto from '../assets/images/destinations/directory-mirissa.avif';
import nuwaraEliyaPhoto from '../assets/images/destinations/directory-nuwara-eliya.avif';
import sigiriyaPhoto from '../assets/images/destinations/directory-sigiriya.avif';
import tangallePhoto from '../assets/images/destinations/directory-tangalle.jpeg';
import trincomaleePhoto from '../assets/images/destinations/directory-trincomalee.avif';
import yalaPhoto from '../assets/images/destinations/directory-yala.avif';
import polonnaruwaNew from '../assets/images/destinations/new-polonnaruwa.jpg';
import dambullaNew from '../assets/images/destinations/new-dambulla.jpg';
import kandyNew from '../assets/images/destinations/new-kandy.jpg';
import ellaNew from '../assets/images/destinations/new-ella.jpg';
import galleNew from '../assets/images/destinations/new-galle.jpg';
import jaffnaNew from '../assets/images/destinations/new-jaffna.jpg';
import {
  catalogueEntries as baseCatalogueEntries,
  type CatalogueEntry,
  type CatalogueTier,
  type DestinationCategoryId,
} from './destinationCatalogue';
import {
  alsoCityEntryIds,
  extraCatalogueEntries,
  supplementalCategoryMap,
  waterfallEntryIds,
} from './destinationCatalogueExtras';
import { catalogueCardImages } from './catalogueCardImages';
import {
  VERIFIED_DESTINATION_COORDINATES,
  type DestinationCoordinateRecord,
} from './destinationCoordinates';

export {
  VERIFIED_DESTINATION_COORDINATES,
  type CatalogueEntry,
  type CatalogueTier,
  type DestinationCategoryId,
  type DestinationCoordinateRecord,
};

const pexelsLicense = 'Pexels License; this specific source page marks the photograph free to use.';

export interface DestinationRegion {
  id: string;
  name: string;
  shortName: string;
  description: string;
}

export interface DestinationCategory {
  id: DestinationCategoryId;
  label: string;
  shortLabel: string;
}

export interface DestinationCoordinates {
  /** Position within the island illustration, normalized from 0 (left/top) to 100 (right/bottom). */
  x: number;
  y: number;
}

export interface DestinationImage {
  src: ImageMetadata;
  alt: string;
  sourceUrl: string;
  credit: string;
  license: string;
}

export interface Destination {
  id: string;
  aliases?: string[];
  number: string;
  name: string;
  shortName: string;
  badge: string;
  categoryId: DestinationCategoryId;
  categoryLabel: string;
  alsoCategoryIds?: DestinationCategoryId[];
  categories?: DestinationCategoryId[];
  regionId: string;
  provinceArea: string;
  lat?: number;
  lng?: number;
  isHub?: boolean;
  hubId?: string;
  hubName?: string;
  representativePoint?: string;
  coordinateSource?: string;
  svgCoordinates?: { svgX: number; svgY: number };
  coordinates: DestinationCoordinates;
  summary: string;
  whyFeatureIt: string;
  highlights: string[];
  activities: string[];
  nearbyAttractions: string[];
  seasonNote: string;
  images: DestinationImage[];
}

export const destinationCategories: DestinationCategory[] = [
  { id: 'heritage', label: 'Culture & Heritage', shortLabel: 'Heritage' },
  { id: 'highlands', label: 'Highlands & Tea', shortLabel: 'Highlands' },
  { id: 'beaches', label: 'Beaches & Coast', shortLabel: 'Beaches' },
  { id: 'wildlife', label: 'Wildlife & Nature', shortLabel: 'Wildlife' },
  { id: 'cities', label: 'Cities & Culture', shortLabel: 'Cities' },
];

export const catalogueThemes: DestinationCategory[] = [
  ...destinationCategories,
  { id: 'waterfalls', label: 'Waterfalls & Cascades', shortLabel: 'Waterfalls' },
];

export const destinationRegions: DestinationRegion[] = [
  {
    id: 'cultural-triangle',
    name: 'The Cultural Triangle',
    shortName: 'Cultural Triangle',
    description: 'Ancient capitals, rock citadels, cave shrines, and sacred reservoirs in the island’s north-central plains.',
  },
  {
    id: 'hill-country',
    name: 'The Hill Country',
    shortName: 'Central Highlands',
    description: 'Misty tea ridges, cloud forests, waterfalls, and the scenic mountain railway from Kandy to Ella.',
  },
  {
    id: 'south-coast',
    name: 'The Southern Coast',
    shortName: 'South Coast',
    description: 'Historic Galle Fort, palm-lined surf bays, sheltered coves, and tranquil southern lagoons.',
  },
  {
    id: 'west-coast',
    name: 'The West Coast & North-West',
    shortName: 'West & North-West',
    description: 'Colombo’s layered urban life, southwest beaches and river estuaries, Kalpitiya’s lagoons, and the rock-citadel capitals of the North Western Province.',
  },
  {
    id: 'east-coast',
    name: 'The East Coast',
    shortName: 'East Coast',
    description: 'Deep natural harbours, coral marine parks, shallow turquoise bays, and point-break surf shores.',
  },
  {
    id: 'north',
    name: 'The Northern Peninsula',
    shortName: 'North & Islands',
    description: 'Distinctive Tamil heritage, Hindu kovils, causeway islands, and bird-rich coastal lagoons.',
  },
  {
    id: 'southeast',
    name: 'The Southeast & Wildlife',
    shortName: 'Wildlife & Deep South',
    description: 'Dry-zone national parks, coastal wetlands, ancient rock carvings, and multi-faith pilgrimage sites.',
  },
];

/**
 * The 15 Featured Destinations leading the interactive map and explorer.
 * The x/y values are normalized positions within the illustrative island outline,
 * based on each place's approximate real-world position. They are not navigation data.
 */

/**
 * Exact west and east coastline vertices from the SVG island-outline path in SriLankaMap.astro
 * (viewBox="0 0 100 110", preserveAspectRatio="xMidYMid meet" inside .map-canvas with aspect-ratio 0.82).
 */
const SVG_WEST_COAST: ReadonlyArray<readonly [number, number]> = [
  [2, 48], [5, 44], [10, 43], [14, 44], [18, 40], [24, 38], [28, 35],
  [34, 37], [39, 33], [46, 31], [52, 28], [59, 25], [66, 22], [72, 20],
  [78, 22], [83, 25], [88, 28], [92, 33], [97, 38], [101, 44], [104, 50],
];

const SVG_EAST_COAST: ReadonlyArray<readonly [number, number]> = [
  [2, 53], [4, 57], [7, 61], [10, 66], [14, 67], [18, 71], [23, 73],
  [28, 77], [33, 78], [37, 81], [43, 83], [49, 85], [55, 88], [61, 88],
  [68, 86], [75, 83], [81, 81], [87, 77], [91, 72], [97, 68], [100, 62],
  [103, 57], [104, 50],
];

const LAT_TO_SVG_Y: ReadonlyArray<readonly [number, number]> = [
  [9.8350, 3.0],   // Point Pedro (northernmost cape)
  [9.6615, 7.6],   // Jaffna
  [8.9810, 22.0],  // Mannar
  [8.5874, 31.2],  // Trincomalee
  [8.3114, 35.5],  // Anuradhapura
  [7.9570, 42.0],  // Sigiriya / Polonnaruwa
  [7.2906, 57.5],  // Kandy
  [6.9271, 66.0],  // Colombo / Nuwara Eliya
  [6.4213, 79.0],  // Bentota
  [6.0269, 95.2],  // Galle / Tangalle coast
  [5.9483, 100.2], // Mirissa
  [5.9180, 102.5], // Dondra Head (southernmost cape)
];

const REAL_COAST_LNG_SPAN: ReadonlyArray<readonly [number, number, number]> = [
  [9.8350, 79.95, 80.28],
  [9.6615, 79.68, 80.35],
  [9.5000, 79.65, 80.58],
  [9.2671, 79.95, 80.83],
  [8.9810, 79.68, 80.98],
  [8.5874, 79.88, 81.26],
  [8.3114, 79.70, 81.42],
  [7.9570, 79.78, 81.58],
  [7.7102, 79.79, 81.74],
  [7.2906, 79.83, 81.86],
  [6.9271, 79.84, 81.85],
  [6.8404, 79.86, 81.85],
  [6.4213, 79.98, 81.72],
  [6.1246, 80.08, 81.36],
  [6.0269, 80.17, 81.05],
  [5.9483, 80.32, 80.82],
  [5.9180, 80.45, 80.68],
];

function interpolateLinear(points: ReadonlyArray<readonly [number, number]>, x: number): number {
  const sorted = [...points].sort((a, b) => a[0] - b[0]);
  if (x <= sorted[0][0]) return sorted[0][1];
  if (x >= sorted[sorted.length - 1][0]) return sorted[sorted.length - 1][1];
  for (let i = 0; i < sorted.length - 1; i++) {
    if (x >= sorted[i][0] && x <= sorted[i + 1][0]) {
      const t = (x - sorted[i][0]) / (sorted[i + 1][0] - sorted[i][0]);
      return sorted[i][1] + t * (sorted[i + 1][1] - sorted[i][1]);
    }
  }
  return sorted[0][1];
}

/**
 * Projects verified WGS84 latitude/longitude into the SVG island illustration's
 * viewBox coordinate space (0..100 x 0..110), calibrated against the island-outline path.
 */
export function projectLatLngToSvg(lat: number, lng: number): { svgX: number; svgY: number } {
  let effectiveLat = lat;
  // Account for the illustrated SVG's gently rounded far-southeastern coastline contour (Yala/Kumana east of 80.85°E)
  if (lat < 6.65 && lng > 80.85) {
    const eastFactor = Math.min(1, Math.max(0, (lng - 80.85) / 0.8));
    const southFactor = Math.min(1, Math.max(0, (6.65 - lat) / 0.65));
    effectiveLat = lat + eastFactor * southFactor * 0.12;
  }

  const svgY = Math.max(3.2, Math.min(102.8, interpolateLinear(LAT_TO_SVG_Y, effectiveLat)));
  const lngW = interpolateLinear(REAL_COAST_LNG_SPAN.map((r) => [r[0], r[1]] as const), lat);
  const lngE = interpolateLinear(REAL_COAST_LNG_SPAN.map((r) => [r[0], r[2]] as const), lat);
  const frac = Math.max(0.04, Math.min(0.96, (lng - lngW) / (lngE - lngW)));

  const svgW = interpolateLinear(SVG_WEST_COAST, svgY);
  const svgE = interpolateLinear(SVG_EAST_COAST, svgY);
  const pad = Math.min(2.2, (svgE - svgW) * 0.10);
  const svgX = (svgW + pad) + frac * ((svgE - pad) - (svgW + pad));

  return {
    svgX: Number(svgX.toFixed(1)),
    svgY: Number(svgY.toFixed(1)),
  };
}

/**
 * Converts verified WGS84 latitude/longitude into the illustrated Sri Lanka map's
 * percentage coordinate space (.map-canvas), accounting for the SVG's coastline geometry
 * and vertical letterboxing (y_pct = 4.9 + 0.82 * y_svg).
 */
export function projectLatLngToMap(lat: number, lng: number): DestinationCoordinates {
  const { svgX, svgY } = projectLatLngToSvg(lat, lng);
  return {
    x: svgX,
    y: Number((4.9 + 0.82 * svgY).toFixed(1)),
  };
}

const rawDestinations: Destination[] = [
  {
    id: 'sigiriya',
    aliases: ['sigiriya-rock-fortress'],
    number: '01',
    name: 'Sigiriya Rock Fortress',
    shortName: 'Sigiriya',
    badge: 'UNESCO Citadel',
    categoryId: 'heritage',
    categoryLabel: 'CULTURE & HERITAGE',
    regionId: 'cultural-triangle',
    provinceArea: 'Central · Matale District, Sigiriya',
    coordinates: { x: 57, y: 31 },
    summary: 'An ancient 5th-century rock fortress rising 200 meters above emerald jungles, famous for its symmetrical water gardens, frescoes, and giant lion-paw entrance.',
    whyFeatureIt: 'Iconic rock citadel, frescoes, and panoramic views; a signature Sri Lanka landmark.',
    highlights: ['Lion Gate Stairs', '5th-Century Frescoes', 'Mirror Wall', 'Water Gardens', 'Pidurangala Viewpoint'],
    activities: ['Climb the rock citadel at dawn', 'Walk the boulder and water gardens', 'Hike Pidurangala Rock for sunset views'],
    nearbyAttractions: ['Pidurangala Rock', 'Minneriya National Park', 'Ritigala Strict Nature Reserve', 'Dambulla Cave Temple'],
    seasonNote: 'Warm year-round; early morning ascents (from 7:00 AM) offer cooler air and softer light.',
    images: [
      {
        src: sigiriyaPhoto,
        alt: 'Sigiriya Rock Fortress rising over the green landscape.',
        sourceUrl: 'https://www.pexels.com/photo/rock-formation-under-cloudy-sky-9013701/',
        credit: 'Ákos Helgert / Pexels',
        license: pexelsLicense,
      },
    ],
  },
  {
    id: 'anuradhapura',
    aliases: ['anuradhapura-sacred-city'],
    number: '02',
    name: 'Anuradhapura Sacred City',
    shortName: 'Anuradhapura',
    badge: 'Sacred Ancient Capital',
    categoryId: 'heritage',
    categoryLabel: 'CULTURE & HERITAGE',
    regionId: 'cultural-triangle',
    provinceArea: 'North Central · Anuradhapura District',
    coordinates: { x: 43, y: 24 },
    summary: 'A living sacred city of monumental white stupas, ancient irrigation reservoirs, and shaded monastic grounds spanning over a millennium of history.',
    whyFeatureIt: 'Vast ancient capital with stupas, monasteries, and living Buddhist pilgrimage sites.',
    highlights: ['Ruwanwelisaya Stupa', 'Jaya Sri Maha Bodhi', 'Jetavanaramaya', 'Abhayagiri Complex', 'Twin Ponds'],
    activities: ['Cycle quietly between monastic complexes', 'Attend dusk chanting at Ruwanwelisaya', 'Pair with a sunset climb at Mihintale'],
    nearbyAttractions: ['Jaya Sri Maha Bodhi', 'Ruwanwelisaya', 'Mihintale', 'Isurumuniya Temple', 'Wilpattu National Park'],
    seasonNote: 'Modest temple attire (shoulders and knees covered; shoes removed) is required at sacred precincts.',
    images: [
      {
        src: anuradhapuraPhoto,
        alt: 'The white Ruwanwelisaya Stupa beneath a cloudy sky in Anuradhapura.',
        sourceUrl: 'https://www.pexels.com/photo/majestic-ruwanwelisaya-stupa-in-anuradhapura-37091540/',
        credit: 'Roshan Kumara / Pexels',
        license: pexelsLicense,
      },
    ],
  },
  {
    id: 'polonnaruwa',
    aliases: ['polonnaruwa-ancient-city'],
    number: '03',
    name: 'Polonnaruwa Ancient City',
    shortName: 'Polonnaruwa',
    badge: 'UNESCO Medieval Capital',
    categoryId: 'heritage',
    categoryLabel: 'CULTURE & HERITAGE',
    regionId: 'cultural-triangle',
    provinceArea: 'North Central · Polonnaruwa District',
    coordinates: { x: 66, y: 31 },
    summary: 'Sri Lanka’s compact medieval royal capital, where carved stone shrines, royal baths, and monumental rock-cut Buddha statues sit beside Parakrama Samudra.',
    whyFeatureIt: 'Compact, atmospheric medieval ruins well suited to shaded cycling and heritage exploration.',
    highlights: ['Gal Vihara Rock Buddhas', 'Sacred Quadrangle & Vatadage', 'Royal Palace Ruins', 'Parakrama Samudra', 'Rankoth Vehera'],
    activities: ['Pedal the tree-shaded archaeological circuit', 'Admire the granite carvings at Gal Vihara', 'Watch birdlife along the ancient reservoir bund'],
    nearbyAttractions: ['Gal Vihara', 'Vatadage', 'Medirigiriya Vatadage', 'Kaudulla National Park', 'Minneriya National Park'],
    seasonNote: 'Best explored in the morning or late afternoon by bicycle when stone pavements are cooler.',
    images: [
      {
        src: polonnaruwaNew,
        alt: 'The reclining Buddha carved from granite at Gal Vihara, Polonnaruwa.',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Gal_Vihara_Polonnaruwa_1.jpg',
        credit: 'Philip Nalangan / Wikimedia Commons',
        license: 'CC BY 4.0',
      },
    ],
  },
  {
    id: 'dambulla',
    aliases: ['dambulla-cave-temple'],
    number: '04',
    name: 'Dambulla Cave Temple',
    shortName: 'Dambulla',
    badge: 'UNESCO Cave Sanctuary',
    categoryId: 'heritage',
    categoryLabel: 'CULTURE & HERITAGE',
    regionId: 'cultural-triangle',
    provinceArea: 'Central · Matale District, Dambulla',
    coordinates: { x: 51, y: 37 },
    summary: 'Five rock-overhang cave shrines perched high on a granite outcrop, preserving over 150 Buddha statues and sweeping Kandyan-era ceiling murals.',
    whyFeatureIt: 'Remarkable cave-shrine complex with centuries of Buddhist art and hilltop views across the Cultural Triangle.',
    highlights: ['Maharaja Viharaya', 'Maha Alut Viharaya', '2,100 m² Painted Ceilings', '150+ Sculpted Figures', 'Granite Ridge Panorama'],
    activities: ['Climb the rock steps in the cool morning hours', 'Study the intricate mineral-pigment cave murals', 'Combine with Nalanda Gedige or Sigiriya'],
    nearbyAttractions: ['Nalanda Gedige', 'Sigiriya Rock Fortress', 'Avukana Buddha Statue', 'Kala Wewa'],
    seasonNote: 'Gentle stepped climb; bring socks for hot rock courtyards and respectful attire covering shoulders and knees.',
    images: [
      {
        src: dambullaNew,
        alt: 'Painted ceilings and seated Buddha statues inside the Dambulla cave temple.',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Buddha_Dambulla_3.jpg',
        credit: 'Philip Nalangan / Wikimedia Commons',
        license: 'CC BY 4.0',
      },
    ],
  },
  {
    id: 'kandy',
    aliases: ['kandy-city'],
    number: '05',
    name: 'Kandy',
    shortName: 'Kandy',
    badge: 'Royal Hill Capital',
    categoryId: 'heritage',
    categoryLabel: 'CULTURE & HIGHLANDS',
    regionId: 'hill-country',
    provinceArea: 'Central · Kandy District',
    coordinates: { x: 48, y: 50 },
    summary: 'A central hill city gathered around a tranquil lake, the sacred Temple of the Tooth Relic, royal botanic gardens, and mist-draped mountain ridges.',
    whyFeatureIt: 'Cultural capital known for the Temple of the Tooth, lakeside walks, and its gateway role to the highlands.',
    highlights: ['Temple of the Sacred Tooth Relic', 'Kandy Lake Promenade', 'Peradeniya Botanic Gardens', 'Udawatta Kele Sanctuary', 'Three-Temple Loop'],
    activities: ['Walk the lakeside wall at dusk', 'Visit Peradeniya Royal Botanic Gardens', 'Board the scenic highland train toward Nuwara Eliya and Ella'],
    nearbyAttractions: ['Temple of the Tooth', 'Peradeniya Royal Botanic Gardens', 'Knuckles Mountain Range', 'Embekka Devalaya', 'Kitulgala'],
    seasonNote: 'Pleasant hill climate year-round; the historic Esala Perahera procession takes place in July or August.',
    images: [
      {
        src: kandyNew,
        alt: 'The moat and white walls of the Temple of the Tooth in Kandy.',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:SL_Kandy_asv2020-01_img34_Sacred_Tooth_Temple.jpg',
        credit: 'A.Savin / Wikimedia Commons',
        license: 'Free Art License',
      },
    ],
  },
  {
    id: 'nuwara-eliya',
    aliases: ['nuwara-eliya-highlands'],
    number: '06',
    name: 'Nuwara Eliya',
    shortName: 'Nuwara Eliya',
    badge: 'Highland Tea Country',
    categoryId: 'highlands',
    categoryLabel: 'HIGHLANDS & TEA',
    regionId: 'hill-country',
    provinceArea: 'Central · Nuwara Eliya District',
    coordinates: { x: 49, y: 64 },
    summary: 'Set nearly 1,900 meters above sea level, this cool-climate mountain plateau is surrounded by manicured tea estates, waterfalls, and cloud forests.',
    whyFeatureIt: 'Working tea estates, cool mountain air, and colonial-era character in the highest central hills.',
    highlights: ['Ceylon Tea Estates', 'Gregory Lake', 'Horton Plains & World’s End', 'Victoria Park', 'Lover’s Leap Waterfall'],
    activities: ['Tour a historic highland tea factory and tasting room', 'Set out at dawn for Horton Plains National Park', 'Stop at St Clair’s and Devon Falls along the valley route'],
    nearbyAttractions: ['Horton Plains National Park', 'Adam’s Peak (Sri Pada)', 'St Clair’s Falls', 'Devon Falls', 'Hatton'],
    seasonNote: 'Evenings are crisp (10–15°C); pack a warm layer and rain jacket for highland mist.',
    images: [
      {
        src: nuwaraEliyaPhoto,
        alt: 'Green tea plantations in the hills around Nuwara Eliya.',
        sourceUrl: 'https://www.pexels.com/photo/green-mountain-321571/',
        credit: 'Atlantic Ambience / Pexels',
        license: pexelsLicense,
      },
    ],
  },
  {
    id: 'ella',
    aliases: ['ella-highlands'],
    number: '07',
    name: 'Ella',
    shortName: 'Ella',
    badge: 'Highland Rail & Peaks',
    categoryId: 'highlands',
    categoryLabel: 'HIGHLANDS & TEA',
    regionId: 'hill-country',
    provinceArea: 'Uva · Badulla District',
    coordinates: { x: 59, y: 73 },
    summary: 'A relaxed mountain village perched at the edge of Ella Gap, where blue highland trains cross stone viaducts between tea ridges and waterfalls.',
    whyFeatureIt: 'Scenic ridge hikes, tea landscapes, and iconic rail access make it a favourite highland base.',
    highlights: ['Nine Arch Bridge', 'Little Adam’s Peak', 'Ella Rock', 'Demodara Rail Loop', 'Ravana Falls'],
    activities: ['Ride the Kandy–Ella mountain railway', 'Hike Little Adam’s Peak for morning valley views', 'Day-trip to Lipton’s Seat in nearby Haputale'],
    nearbyAttractions: ['Ella Rock', 'Lipton’s Seat', 'Diyaluma Falls', 'Haputale', 'Ravana Falls', 'Bambarakanda Falls'],
    seasonNote: 'Viewpoints are clearest before mid-morning clouds roll up through the Ella Gap.',
    images: [
      {
        src: ellaNew,
        alt: 'The Nine Arch Bridge curving through green forest in Ella.',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Nine_Arches_Bridge_in_Ella.jpg',
        credit: 'Knthabrew / Wikimedia Commons',
        license: 'CC BY-SA 4.0',
      },
    ],
  },
  {
    id: 'colombo',
    aliases: ['colombo-city'],
    number: '08',
    name: 'Colombo',
    shortName: 'Colombo',
    badge: 'Oceanfront Capital',
    categoryId: 'cities',
    categoryLabel: 'CITIES & CULTURE',
    regionId: 'west-coast',
    provinceArea: 'Western · Colombo District',
    coordinates: { x: 24, y: 63 },
    summary: 'Sri Lanka’s coastal capital blends Indian Ocean sunset promenades, leafy heritage neighbourhoods, contemporary dining, and bustling bazaar lanes.',
    whyFeatureIt: 'The island’s energetic capital for food, architecture, museums, and refined urban stays.',
    highlights: ['Galle Face Green', 'Gangaramaya & Seema Malaka', 'National Museum', 'Independence Square', 'Pettah Bazaar'],
    activities: ['Stroll Galle Face Green at sunset', 'Explore the National Museum and Cinnamon Gardens', 'Join a guided street-food or architectural walk'],
    nearbyAttractions: ['Gangaramaya Temple', 'National Museum of Colombo', 'Independence Memorial Hall', 'Mount Lavinia', 'Negombo'],
    seasonNote: 'Works year-round as a lively first or final stop on an island itinerary.',
    images: [
      {
        src: colomboPhoto,
        alt: 'Modern Colombo buildingsbeneath sky.',
        sourceUrl: 'https://images.pexels.com/photos/36703580/pexels-photo-36703580.jpeg',
        credit: 'Thilina Alagiyawanna / Pexels',
        license: pexelsLicense,
      },
    ],
  },
  {
    id: 'galle',
    aliases: ['galle-fort'],
    number: '09',
    name: 'Galle Fort',
    shortName: 'Galle Fort',
    badge: 'UNESCO Ocean Fort',
    categoryId: 'heritage',
    categoryLabel: 'CULTURE & COAST',
    regionId: 'south-coast',
    provinceArea: 'Southern · Galle District',
    coordinates: { x: 30, y: 88 },
    summary: 'A living 17th-century sea-ringed citadel of coral-stone ramparts, whitewashed verandas, independent boutiques, and ocean-facing bastions.',
    whyFeatureIt: 'UNESCO-listed fort town with layered maritime history, walkable cobbled lanes, and boutique stays.',
    highlights: ['Point Utrecht Lighthouse', 'Sea-Facing Ramparts', 'Dutch Reformed Church', 'Pedlar Street Boutiques', 'Maritime Museum'],
    activities: ['Walk the full circuit of the sea walls at sunset', 'Explore independent bookshops, galleries, and cafés', 'Take a morning boat out on nearby Koggala Lake'],
    nearbyAttractions: ['Unawatuna', 'Koggala Lake', 'Japanese Peace Pagoda', 'Martin Wickramasinghe Museum', 'Hikkaduwa'],
    seasonNote: 'Peak sunshine along the southwest coast runs from late November through April.',
    images: [
      {
        src: galleNew,
        alt: 'The Galle Fort lighthouse and ramparts under a deep blue sky.',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Lighthouse_Galle,_Sri_Lanka.jpg',
        credit: 'Samal Nadeeshan / Wikimedia Commons',
        license: 'CC BY-SA 4.0',
      },
    ],
  },
  {
    id: 'mirissa',
    aliases: ['mirissa-beach'],
    number: '10',
    name: 'Mirissa',
    shortName: 'Mirissa',
    badge: 'Whales & Palm Bays',
    categoryId: 'beaches',
    categoryLabel: 'BEACHES & COAST',
    regionId: 'south-coast',
    provinceArea: 'Southern · Matara District',
    coordinates: { x: 45, y: 94 },
    summary: 'A curving crescent of golden sand and coconut-palm headlands on the south coast, known for gentle surf bays and seasonal marine life.',
    whyFeatureIt: 'Relaxed southern beach atmosphere, headland viewpoints, surf, and seasonal marine excursions.',
    highlights: ['Coconut Tree Hill', 'Secret Beach Cove', 'Parrot Rock', 'Mirissa Crescent Bay', 'Seasonal Whale Watching'],
    activities: ['Walk up Coconut Tree Hill in the early morning light', 'Swim or surf in nearby Weligama Bay', 'Choose ethical, guideline-compliant marine operators in season'],
    nearbyAttractions: ['Weligama', 'Ahangama & Kabalana', 'Matara', 'Dondra Head Lighthouse'],
    seasonNote: 'Calmest seas and seasonal blue-whale sightings typically run from December to April.',
    images: [
      {
        src: mirissaPhoto,
        alt: 'The rocky shoreline and green headland of Secret Beach in Mirissa.',
        sourceUrl: 'https://www.pexels.com/photo/scenic-view-of-secluded-beach-in-mirissa-sri-lanka-32574422/',
        credit: 'Chandi Saha / Pexels',
        license: pexelsLicense,
      },
    ],
  },
  {
    id: 'bentota',
    aliases: ['bentota-beach'],
    number: '11',
    name: 'Bentota',
    shortName: 'Bentota',
    badge: 'River & Golden Coast',
    categoryId: 'beaches',
    categoryLabel: 'BEACHES & COAST',
    regionId: 'west-coast',
    provinceArea: 'Western / Southern Border · Galle District',
    coordinates: { x: 26, y: 77 },
    summary: 'Where a broad, palm-backed golden sandbar meets the calm waters of the Bentota Ganga estuary, surrounded by iconic tropical modernist estates.',
    whyFeatureIt: 'Accessible resort coast combining broad beaches, mangrove river safaris, and architectural gardens.',
    highlights: ['Bentota Sandspit', 'Bentota Ganga Lagoon', 'Brief Garden by Bevis Bawa', 'Lunuganga Estate', 'Madu Ganga Nearby'],
    activities: ['Take a quiet boat safari through river mangroves', 'Visit Brief Garden and Lunuganga country estate', 'Unwind along the broad golden shoreline'],
    nearbyAttractions: ['Brief Garden', 'Madu Ganga', 'Kosgoda', 'Kalutara', 'Richmond Castle'],
    seasonNote: 'Best sea swimming conditions are between November and April; river and garden visits shine year-round.',
    images: [
      {
        src: bentotaPhoto,
        alt: 'Sunset light over Bentota Beach and the southern coastline.',
        sourceUrl: 'https://www.pexels.com/photo/beach-at-sunset-15589614/',
        credit: 'Mohan Nannapaneni / Pexels',
        license: pexelsLicense,
      },
    ],
  },
  {
    id: 'tangalle',
    aliases: ['tangalle-beach'],
    number: '12',
    name: 'Tangalle',
    shortName: 'Tangalle',
    badge: 'Quiet Southern Coves',
    categoryId: 'beaches',
    categoryLabel: 'BEACHES & COAST',
    regionId: 'south-coast',
    provinceArea: 'Southern · Hambantota District',
    coordinates: { x: 61, y: 92 },
    summary: 'Where the south coast slows down into sweeping, uncrowded bays, rocky headlands, mangrove lagoons, and inland cave monasteries.',
    whyFeatureIt: 'Long, quieter beaches and an unhurried gateway between the south coast and southeastern wildlife parks.',
    highlights: ['Silent Beach & Goyambokka', 'Mulkirigala Rock Temple', 'Rekawa Conservation Coast', 'Mawella Lagoon', 'Hummanaya Blowhole'],
    activities: ['Climb the rock terraces of Mulkirigala Raja Maha Vihara', 'Kayak calm coastal lagoons at dusk', 'Join conservation-led night turtle watches at Rekawa'],
    nearbyAttractions: ['Mulkirigala Raja Maha Vihara', 'Rekawa Turtle Coast', 'Hummanaya Blowhole', 'Ussangoda National Park', 'Dikwella'],
    seasonNote: 'Check local ocean currents before swimming; sheltered coves like Goyambokka are calmer in the dry season.',
    images: [
      {
        src: tangallePhoto,
        alt: 'Tangalle Beach seen from a boat off the southern coast of Sri Lanka.',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tangalle_Beach_Sri_Lanka_(50439798).jpeg',
        credit: 'Anjitha Senarath / Wikimedia Commons',
        license: 'Creative Commons Attribution 3.0 Unported (CC BY 3.0); credit and license link required, note changes if made.',
      },
    ],
  },
  {
    id: 'trincomalee',
    aliases: ['trincomalee-coast'],
    number: '13',
    name: 'Trincomalee',
    shortName: 'Trincomalee',
    badge: 'Eastern Harbour & Reefs',
    categoryId: 'beaches',
    categoryLabel: 'BEACHES & HERITAGE',
    regionId: 'east-coast',
    provinceArea: 'Eastern · Trincomalee District',
    coordinates: { x: 78, y: 33 },
    summary: 'Set around one of the world’s finest natural deep-water harbours, pairing cliff-top Koneswaram Temple with the white sands of Nilaveli and Uppuveli.',
    whyFeatureIt: 'Deep natural harbour, dramatic cliff-top heritage landmarks, and sun-filled May–September beaches.',
    highlights: ['Koneswaram Temple & Swami Rock', 'Fort Frederick', 'Nilaveli & Uppuveli Beaches', 'Pigeon Island Marine Park', 'Marble Beach'],
    activities: ['Visit Koneswaram Temple high on Swami Rock cliff', 'Swim and snorkel during the May–September east-coast season', 'Explore historic Fort Frederick headland'],
    nearbyAttractions: ['Nilaveli', 'Pigeon Island National Park', 'Koneswaram Temple', 'Fort Frederick', 'Marble Beach', 'Pasikuda'],
    seasonNote: 'Prime east-coast beach and calm-sea season runs from May through September.',
    images: [
      {
        src: trincomaleePhoto,
        alt: 'Coastal cliffs overlooking the blue sea at Trincomalee.',
        sourceUrl: 'https://www.pexels.com/photo/majestic-cliffs-overlooking-trincomalee-sea-37106726/',
        credit: 'Charith Kodagoda / Pexels',
        license: pexelsLicense,
      },
    ],
  },
  {
    id: 'jaffna',
    aliases: ['jaffna-peninsula'],
    number: '14',
    name: 'Jaffna',
    shortName: 'Jaffna',
    badge: 'Northern Cultural Capital',
    categoryId: 'heritage',
    categoryLabel: 'CULTURE & ISLANDS',
    regionId: 'north',
    provinceArea: 'Northern · Jaffna District',
    coordinates: { x: 50, y: 7 },
    summary: 'A sun-drenched northern peninsula of palmyra palms, vibrant Hindu kovils, Dutch coral-stone ramparts, causeway islands, and celebrated Tamil cuisine.',
    whyFeatureIt: 'Distinctive Tamil culture, temple architecture, culinary traditions, and Palk Strait island-hopping.',
    highlights: ['Nallur Kandaswamy Kovil', 'Jaffna Fort', 'Jaffna Public Library', 'Delft & Nainativu Islands', 'Keerimalai Mineral Springs'],
    activities: ['Walk the pentagonal ramparts of Jaffna Fort', 'Cross by ferry to Delft Island or sacred Nainativu', 'Sample crab curry, dosa, and Rio palmyra ice cream'],
    nearbyAttractions: ['Delft Island (Neduntheevu)', 'Nallur Kandaswamy Kovil', 'Jaffna Fort', 'Nainativu (Nagadeepa)', 'Casuarina Beach', 'Mannar Island'],
    seasonNote: 'Warm and dry for most of the year outside the October–December northeast monsoon.',
    images: [
      {
        src: jaffnaNew,
        alt: 'The gilded gopuram of Nallur Kandaswamy Kovil in Jaffna.',
        sourceUrl: 'https://commons.wikimedia.org/wiki/File:Kandaswamy_koil-2-nallur-jaffna-Sri_Lanka.jpg',
        credit: 'Yercaud-elango / Wikimedia Commons',
        license: 'CC BY-SA 4.0',
      },
    ],
  },
  {
    id: 'yala',
    aliases: ['yala-national-park'],
    number: '15',
    name: 'Yala National Park',
    shortName: 'Yala',
    badge: 'Flagship Safari Park',
    categoryId: 'wildlife',
    categoryLabel: 'WILDLIFE & NATURE',
    regionId: 'southeast',
    provinceArea: 'Southern · Hambantota District, Southeast',
    coordinates: { x: 78, y: 83 },
    summary: 'Where dry-zone monsoon forest, granite outcrops, and brackish lagoons meet the Indian Ocean, home to leopards, elephants, sloth bears, and waterbirds.',
    whyFeatureIt: 'Flagship safari destination known for varied dry-zone wildlife, coastal lagoons, and dramatic boulder landscapes.',
    highlights: ['Dry-Zone Leopard Habitat', 'Elephants & Sloth Bears', 'Coastal Lagoons & Dunes', 'Sithulpawwa Rock Monastery', 'Adjacent Kumana Sanctuary'],
    activities: ['Join an early-morning safari with a naturalist tracker', 'Explore quieter park blocks or neighbouring Bundala and Udawalawe', 'Combine with historic Tissamaharama and Kataragama'],
    nearbyAttractions: ['Udawalawe National Park', 'Bundala National Park', 'Kataragama', 'Tissamaharama & Tissa Wewa', 'Kumana National Park', 'Kirinda'],
    seasonNote: 'Prioritize responsible safari drivers who keep respectful distances and never crowd wildlife sightings.',
    images: [
      {
        src: yalaPhoto,
        alt: 'An Asian elephant walking on a safari road in Yala National Park.',
        sourceUrl: 'https://www.pexels.com/photo/an-elephant-following-the-vehicle-11718270/',
        credit: 'Iakub Arifulin / Pexels',
        license: pexelsLicense,
      },
    ],
  },
];

const featuredHubAlsoCategories: Partial<Record<string, DestinationCategoryId[]>> = {
  anuradhapura: ['cities'],
  polonnaruwa: ['cities'],
  dambulla: ['cities'],
  kandy: ['cities', 'highlands'],
  'nuwara-eliya': ['cities'],
  ella: ['cities'],
  colombo: ['beaches', 'heritage'],
  bentota: ['cities'],
  galle: ['cities', 'beaches'],
  mirissa: ['wildlife', 'cities'],
  tangalle: ['cities'],
  trincomalee: ['cities', 'heritage'],
  jaffna: ['cities', 'heritage'],
};

const regionClusterNameById: Record<string, string> = Object.fromEntries(
  destinationRegions.map((r) => [r.id, r.name]),
);

export const destinations: Destination[] = rawDestinations.map((d) => {
  const verified = VERIFIED_DESTINATION_COORDINATES[d.id];
  const extraCats = featuredHubAlsoCategories[d.id] ?? [];
  const categories = Array.from(new Set<DestinationCategoryId>([d.categoryId, ...extraCats]));
  return {
    ...d,
    alsoCategoryIds: extraCats.length ? extraCats : undefined,
    categories,
    isHub: true,
    hubId: d.id,
    hubName: d.shortName,
    ...(verified
      ? {
          lat: verified.lat,
          lng: verified.lng,
          representativePoint: verified.representativePoint,
          coordinateSource: verified.source,
          svgCoordinates: projectLatLngToSvg(verified.lat, verified.lng),
          coordinates: projectLatLngToMap(verified.lat, verified.lng),
        }
      : {}),
  };
});

function attachVerifiedCoordinates(entry: CatalogueEntry): CatalogueEntry {
  const verified = VERIFIED_DESTINATION_COORDINATES[entry.id];
  const supplemental = supplementalCategoryMap[entry.id] ?? [];
  const alsoSet = new Set<DestinationCategoryId>([
    ...(entry.alsoCategoryIds ?? []),
    ...supplemental,
  ]);
  if (alsoCityEntryIds.has(entry.id) && entry.categoryId !== 'cities') {
    alsoSet.add('cities');
  }
  if (entry.categoryId === 'waterfalls') {
    alsoSet.add('highlands');
  }
  alsoSet.delete(entry.categoryId);
  const alsoCategoryIds = alsoSet.size ? [...alsoSet] : undefined;

  if (!verified) {
    return {
      ...entry,
      ...(alsoCategoryIds ? { alsoCategoryIds } : {}),
    };
  }
  return {
    ...entry,
    ...(alsoCategoryIds ? { alsoCategoryIds } : {}),
    lat: verified.lat,
    lng: verified.lng,
    representativePoint: verified.representativePoint,
    coordinateSource: verified.source,
    svgCoordinates: projectLatLngToSvg(verified.lat, verified.lng),
    coordinates: projectLatLngToMap(verified.lat, verified.lng),
  };
}

const featuredCatalogueEntries: CatalogueEntry[] = destinations.map((d) =>
  attachVerifiedCoordinates({
    id: d.id,
    name: d.name,
    tier: 'featured',
    tierLabel: 'Featured Hub',
    regionId: d.regionId as CatalogueEntry['regionId'],
    regionCluster: regionClusterNameById[d.regionId] ?? d.regionId,
    provinceArea: d.provinceArea,
    categoryId: d.categoryId,
    categoryLabel: d.badge,
    alsoCategoryIds: featuredHubAlsoCategories[d.id],
    description: d.whyFeatureIt,
    tags: d.highlights.slice(0, 3),
    hubId: d.id,
    hubName: d.shortName,
  }),
);

const normalizedBaseCatalogueEntries: CatalogueEntry[] = baseCatalogueEntries.map((rawEntry) => {
  const entry = attachVerifiedCoordinates(rawEntry);
  if (waterfallEntryIds.has(entry.id)) {
    const extraCats = new Set<DestinationCategoryId>([
      ...(entry.alsoCategoryIds ?? []),
      entry.categoryId,
      'highlands',
    ]);
    extraCats.delete('waterfalls');
    return {
      ...entry,
      categoryId: 'waterfalls',
      categoryLabel: entry.categoryLabel.includes('Waterfall')
        ? entry.categoryLabel
        : 'Waterfall & Cascade',
      alsoCategoryIds: [...extraCats],
    };
  }
  return entry;
});

const existingIds = new Set([
  ...featuredCatalogueEntries.map((e) => e.id),
  ...normalizedBaseCatalogueEntries.map((e) => e.id),
]);

export const catalogueEntries: CatalogueEntry[] = [
  ...featuredCatalogueEntries,
  ...normalizedBaseCatalogueEntries,
  ...extraCatalogueEntries
    .filter((e) => !existingIds.has(e.id))
    .map((e) => attachVerifiedCoordinates(e)),
];

const hubById = new Map(destinations.map((d) => [d.id, d]));

/**
 * Full list of all 204 mapped destinations (the 15 Featured Hubs plus all 189 additional
 * catalogue entries), each with its own verified WGS84 coordinates, projected map coordinates,
 * coordinate provenance, and detail view data.
 */
export const mappedDestinations: Destination[] = [
  ...destinations,
  ...catalogueEntries
    .filter((entry) => entry.tier !== 'featured' && Boolean(entry.coordinates))
    .map((entry, idx): Destination => {
      const parentHub = hubById.get(entry.hubId);
      const cardImg = catalogueCardImages[entry.id];
      const mapCategoryId: DestinationCategoryId =
        entry.categoryId === 'waterfalls' ? 'highlands' : entry.categoryId;
      const allCategories = Array.from(
        new Set<DestinationCategoryId>([
          mapCategoryId,
          entry.categoryId,
          ...(entry.alsoCategoryIds ?? []),
        ]),
      );
      const shortName = entry.name
        .replace(/\s*\([^)]*\)/g, '')
        .replace(/\s+National Park$/i, ' NP')
        .replace(/\s+Strict Nature Reserve$/i, '')
        .replace(/\s+Forest Reserve$/i, '')
        .replace(/\s+Vedda Heritage$/i, ' (Dambana)')
        .replace(/\s+&\s+Tissa Wewa$/i, '')
        .replace(/\s+&\s+Ancient Sluice$/i, '')
        .replace(/\s+Buddha Statue$/i, '')
        .replace(/\s+Rock Fortress$/i, '')
        .replace(/\s+Lighthouse$/i, '')
        .replace(/\s+Church & Shrine$/i, ' Shrine')
        .replace(/\s+Elephant Orphanage$/i, '');

      return {
        id: entry.id,
        number: String(destinations.length + idx + 1).padStart(2, '0'),
        name: entry.name,
        shortName,
        badge: entry.categoryLabel,
        categoryId: mapCategoryId,
        categoryLabel: entry.categoryLabel,
        alsoCategoryIds: entry.alsoCategoryIds,
        categories: allCategories,
        regionId: entry.regionId,
        provinceArea: entry.provinceArea,
        lat: entry.lat,
        lng: entry.lng,
        representativePoint: entry.representativePoint,
        coordinateSource: entry.coordinateSource,
        svgCoordinates: entry.svgCoordinates,
        isHub: false,
        hubId: entry.hubId,
        hubName: entry.hubName,
        coordinates: entry.coordinates!,
        summary: entry.description,
        whyFeatureIt: entry.description,
        highlights: entry.tags,
        activities: [
          `Explore ${entry.name} (${entry.representativePoint ?? entry.provinceArea})`,
          `Pair with nearby itineraries around ${entry.hubName} (${entry.regionCluster})`,
          ...(parentHub ? [parentHub.activities[0]] : []),
        ],
        nearbyAttractions: [
          `Nearby base: ${entry.hubName}`,
          ...(parentHub
            ? parentHub.nearbyAttractions.filter((n) => n !== entry.name).slice(0, 3)
            : []),
        ],
        seasonNote:
          parentHub?.seasonNote ??
          'Check regional monsoon patterns and local visiting hours when planning your stop.',
        images: cardImg
          ? [
              {
                src: cardImg.src,
                alt: cardImg.alt,
                sourceUrl: '',
                credit: cardImg.credit ?? 'Senvira Lanka Archive',
                license: pexelsLicense,
              },
            ]
          : parentHub?.images ?? [],
      };
    }),
];
