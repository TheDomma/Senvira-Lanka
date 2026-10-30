import type { ImageMetadata } from 'astro';
import anuradhapuraPhoto from '../assets/images/destinations/directory-anuradhapura.avif';
import bentotaPhoto from '../assets/images/destinations/directory-bentota.avif';
import colomboPhoto from '../assets/images/destinations/directory-colombo.avif';
import ellaPhoto from '../assets/images/destinations/directory-ella.avif';
import gallePhoto from '../assets/images/destinations/directory-galle.avif';
import jaffnaPhoto from '../assets/images/destinations/directory-jaffna.avif';
import kandyPhoto from '../assets/images/destinations/directory-kandy.avif';
import mirissaPhoto from '../assets/images/destinations/directory-mirissa.avif';
import nuwaraEliyaPhoto from '../assets/images/destinations/directory-nuwara-eliya.avif';
import polonnaruwaPhoto from '../assets/images/destinations/directory-polonnaruwa.avif';
import sigiriyaPhoto from '../assets/images/destinations/directory-sigiriya.avif';
import tangallePhoto from '../assets/images/destinations/directory-tangalle.jpeg';
import trincomaleePhoto from '../assets/images/destinations/directory-trincomalee.avif';
import yalaPhoto from '../assets/images/destinations/directory-yala.avif';

const pexelsLicense = 'Pexels License; this specific source page marks the photograph free to use.';

export interface DestinationRegion {
  id: string;
  name: string;
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
  name: string;
  regionId: string;
  coordinates: DestinationCoordinates;
  summary: string;
  highlights: string[];
  activities: string[];
  images: DestinationImage[];
}

export const destinationRegions: DestinationRegion[] = [
  { id: 'north', name: 'The Northern Peninsula' },
  { id: 'cultural-triangle', name: 'The Cultural Triangle' },
  { id: 'east-coast', name: 'The East Coast' },
  { id: 'hill-country', name: 'The Hill Country' },
  { id: 'west-coast', name: 'The Western Coast' },
  { id: 'south-coast', name: 'The Southern Coast' },
  { id: 'southeast', name: 'The Southeast' },
];

/**
 * The x/y values are normalized positions within the illustrative island outline,
 * based on each place's approximate real-world position. They are not navigation data.
 */
export const destinations: Destination[] = [
  {
    id: 'jaffna', name: 'Jaffna', regionId: 'north', coordinates: { x: 50, y: 7 },
    summary: 'A northern peninsula shaped by Tamil culture, lagoon life and distinctive food.',
    highlights: ['Nallur Kandaswamy Kovil', 'Jaffna Fort', 'Northern lagoon landscapes'],
    activities: ['Explore the old town and fort', 'Visit nearby islands', 'Try Jaffna cuisine'],
    images: [{ src: jaffnaPhoto, alt: 'Fishing huts and poles along the Jaffna coast in a black-and-white seascape.', sourceUrl: 'https://www.pexels.com/photo/serene-black-and-white-seascape-in-jaffna-35592070/', credit: 'Shafky Zubair / Pexels', license: pexelsLicense }],
  },
  {
    id: 'anuradhapura', name: 'Anuradhapura', regionId: 'cultural-triangle', coordinates: { x: 43, y: 25 },
    summary: 'A living sacred city of ancient stupas, reservoirs and shaded monastic grounds.',
    highlights: ['Ruwanwelisaya', 'Sri Maha Bodhi', 'Ancient reservoirs'],
    activities: ['Cycle between archaeological sites', 'Visit sacred grounds respectfully', 'Explore at a gentle pace'],
    images: [{ src: anuradhapuraPhoto, alt: 'The white Ruwanwelisaya Stupa beneath a cloudy sky in Anuradhapura.', sourceUrl: 'https://www.pexels.com/photo/majestic-ruwanwelisaya-stupa-in-anuradhapura-37091540/', credit: 'Roshan Kumara / Pexels', license: pexelsLicense }],
  },
  {
    id: 'sigiriya', name: 'Sigiriya', regionId: 'cultural-triangle', coordinates: { x: 57, y: 30 },
    summary: 'A dramatic rock fortress rising above gardens and forest in the island’s cultural heart.',
    highlights: ['Sigiriya Rock Fortress', 'Water gardens', 'Pidurangala viewpoint'],
    activities: ['Climb the rock early', 'Walk the garden paths', 'Watch sunset from Pidurangala'],
    images: [{ src: sigiriyaPhoto, alt: 'Sigiriya Rock Fortress rising over the green landscape.', sourceUrl: 'https://www.pexels.com/photo/rock-formation-under-cloudy-sky-9013701/', credit: 'Ákos Helgert / Pexels', license: pexelsLicense }],
  },
  {
    id: 'polonnaruwa', name: 'Polonnaruwa', regionId: 'cultural-triangle', coordinates: { x: 66, y: 31 },
    summary: 'The medieval capital’s stone temples and statues sit among broad green plains.',
    highlights: ['Gal Vihara', 'Royal Palace ruins', 'Parakrama Samudra'],
    activities: ['Cycle the archaeological park', 'See the stone sculptures', 'Pause by the ancient lake'],
    images: [{ src: polonnaruwaPhoto, alt: 'Stone ruins among the historic remains of Polonnaruwa.', sourceUrl: 'https://www.pexels.com/photo/ancient-ruins-in-polonnaruwa-sri-lanka-33171754/', credit: 'Alfred Franz / Pexels', license: pexelsLicense }],
  },
  {
    id: 'trincomalee', name: 'Trincomalee', regionId: 'east-coast', coordinates: { x: 78, y: 33 },
    summary: 'A natural harbour, historic temples and long beaches define this eastern port city.',
    highlights: ['Koneswaram Temple', 'Fort Frederick', 'Nilaveli Beach'],
    activities: ['Explore the harbour headland', 'Swim in season', 'Take a boat to Pigeon Island'],
    images: [{ src: trincomaleePhoto, alt: 'Coastal cliffs overlooking the blue sea at Trincomalee.', sourceUrl: 'https://www.pexels.com/photo/majestic-cliffs-overlooking-trincomalee-sea-37106726/', credit: 'Charith Kodagoda / Pexels', license: pexelsLicense }],
  },
  {
    id: 'kandy', name: 'Kandy', regionId: 'hill-country', coordinates: { x: 48, y: 50 },
    summary: 'A central hill city gathered around a lake, sacred sites and forested slopes.',
    highlights: ['Temple of the Sacred Tooth Relic', 'Kandy Lake', 'Udawatta Kele Sanctuary'],
    activities: ['Walk the lake edge', 'Visit the temple respectfully', 'Explore the surrounding hills'],
    images: [{ src: kandyPhoto, alt: 'A historic stone pillar and traditional roof along the Kandy Lake promenade.', sourceUrl: 'https://www.pexels.com/photo/historic-pillar-by-kandy-lake-in-sri-lanka-39838954/', credit: 'Thilina Alagiyawanna / Pexels', license: pexelsLicense }],
  },
  {
    id: 'nuwara-eliya', name: 'Nuwara Eliya', regionId: 'hill-country', coordinates: { x: 49, y: 64 },
    summary: 'Cool highland air, tea estates and colonial-era streets sit among the central mountains.',
    highlights: ['Tea country landscapes', 'Gregory Lake', 'Horton Plains nearby'],
    activities: ['Visit a tea estate', 'Walk in the highland gardens', 'Take a scenic train journey'],
    images: [{ src: nuwaraEliyaPhoto, alt: 'Green tea plantations in the hills around Nuwara Eliya.', sourceUrl: 'https://www.pexels.com/photo/green-mountain-321571/', credit: 'Atlantic Ambience / Pexels', license: pexelsLicense }],
  },
  {
    id: 'ella', name: 'Ella', regionId: 'hill-country', coordinates: { x: 59, y: 73 },
    summary: 'A small mountain town with tea-covered slopes, open views and a landmark railway bridge.',
    highlights: ['Nine Arch Bridge', 'Ella Rock', 'Little Adam’s Peak'],
    activities: ['Walk to a viewpoint', 'See the bridge from a public trail', 'Ride the hill-country railway'],
    images: [{ src: ellaPhoto, alt: 'The Nine Arch Bridge nestled among green forest in Ella.', sourceUrl: 'https://www.pexels.com/photo/scenic-view-of-nine-arch-bridge-in-ella-sri-lanka-31555892/', credit: 'Smitesh Parekh / Pexels', license: pexelsLicense }],
  },
  {
    id: 'colombo', name: 'Colombo', regionId: 'west-coast', coordinates: { x: 24, y: 63 },
    summary: 'Sri Lanka’s largest city brings together a lively seafront, markets and layered architecture.',
    highlights: ['Galle Face Green', 'Pettah Market', 'Gangaramaya Temple'],
    activities: ['Walk the seafront at dusk', 'Explore market streets', 'Visit museums and temples'],
    images: [{ src: colomboPhoto, alt: 'Modern Colombo buildings and the Sri Lankan flag beneath a bright sky.', sourceUrl: 'https://www.pexels.com/photo/colombo-skyline-with-sri-lankan-flag-31399466/', credit: 'Sofiia Asmi / Pexels', license: pexelsLicense }],
  },
  {
    id: 'bentota', name: 'Bentota', regionId: 'west-coast', coordinates: { x: 28, y: 78 },
    summary: 'A coastal escape where a broad beach meets the Bentota River and its lagoons.',
    highlights: ['Bentota Beach', 'Bentota River', 'Brief Garden nearby'],
    activities: ['Relax by the sea', 'Take a river excursion', 'Visit nearby gardens'],
    images: [{ src: bentotaPhoto, alt: 'Sunset light over Bentota Beach and the southern coastline.', sourceUrl: 'https://www.pexels.com/photo/beach-at-sunset-15589614/', credit: 'Mohan Nannapaneni / Pexels', license: pexelsLicense }],
  },
  {
    id: 'galle', name: 'Galle', regionId: 'south-coast', coordinates: { x: 30, y: 88 },
    summary: 'A historic harbour city best known for its walled Dutch-era fort and ocean-facing lanes.',
    highlights: ['Galle Fort', 'Lighthouse and ramparts', 'Old-town streets'],
    activities: ['Walk the fort walls', 'Browse local galleries', 'Explore the historic quarter'],
    images: [{ src: gallePhoto, alt: 'The clock tower inside historic Galle Fort under a clear sky.', sourceUrl: 'https://www.pexels.com/photo/galle-fort-clock-tower-in-sri-lanka-under-clear-sky-31039341/', credit: 'Thilina Alagiyawanna / Pexels', license: pexelsLicense }],
  },
  {
    id: 'mirissa', name: 'Mirissa', regionId: 'south-coast', coordinates: { x: 45, y: 94 },
    summary: 'A palm-fringed southern bay with a relaxed beach and headland views.',
    highlights: ['Mirissa Beach', 'Coconut Tree Hill', 'Parrot Rock'],
    activities: ['Swim when sea conditions allow', 'Walk the headland', 'Join responsible seasonal whale watching'],
    images: [{ src: mirissaPhoto, alt: 'The rocky shoreline and green headland of Secret Beach in Mirissa.', sourceUrl: 'https://www.pexels.com/photo/scenic-view-of-secluded-beach-in-mirissa-sri-lanka-32574422/', credit: 'Chandi Saha / Pexels', license: pexelsLicense }],
  },
  {
    id: 'tangalle', name: 'Tangalle', regionId: 'south-coast', coordinates: { x: 61, y: 92 },
    summary: 'A quieter stretch of the south coast with broad beaches, coves and coastal greenery.',
    highlights: ['Tangalle Bay', 'Rekawa coast', 'Mulkirigala Rock Temple nearby'],
    activities: ['Explore coves in safe conditions', 'Visit the coastal wetlands', 'See the rock temple'],
    images: [{ src: tangallePhoto, alt: 'Tangalle Beach seen from a boat off the southern coast of Sri Lanka.', sourceUrl: 'https://commons.wikimedia.org/wiki/File:Tangalle_Beach_Sri_Lanka_(50439798).jpeg', credit: 'Anjitha Senarath / Wikimedia Commons', license: 'Creative Commons Attribution 3.0 Unported (CC BY 3.0); credit and license link required, note changes if made.' }],
  },
  {
    id: 'yala', name: 'Yala', regionId: 'southeast', coordinates: { x: 78, y: 83 },
    summary: 'A dry-zone landscape of scrub, lagoons and forest at Sri Lanka’s southeastern edge.',
    highlights: ['Yala National Park', 'Coastal lagoons', 'Dry-zone wildlife habitat'],
    activities: ['Take a licensed park safari', 'Observe wildlife from a respectful distance', 'Check seasonal park access'],
    images: [{ src: yalaPhoto, alt: 'An Asian elephant walking on a safari road in Yala National Park.', sourceUrl: 'https://www.pexels.com/photo/an-elephant-following-the-vehicle-11718270/', credit: 'Iakub Arifulin / Pexels', license: pexelsLicense }],
  },
];
