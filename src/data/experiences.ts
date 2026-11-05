import type { ImageMetadata } from 'astro';

// Experience & gallery photography
import elephantSafariImage from '../assets/images/experiences/elephant-safari.jpg';
import whaleWatchingImage from '../assets/images/experiences/whale-watching.jpg';
import trainJourneyImage from '../assets/images/experiences/train-journey.jpg';
import teaTastingImage from '../assets/images/experiences/tea-tasting.jpg';
import sigiriyaAerialImage from '../assets/images/experiences/sigiriya-aerial.jpg';
import villageCookingImage from '../assets/images/experiences/village-cooking.jpg';
import kandyPeraheraImage from '../assets/images/experiences/kandy-esala-perahera.jpg';
import polonnaruwaImage from '../assets/images/gallery/polonnaruwa.jpg';

// Destination photography from verified repository assets
import yalaImage from '../assets/images/destinations/directory-yala.avif';
import wilpattuImage from '../assets/images/destinations/Wilpattu Villus.jpg';
import kumanaImage from '../assets/images/destinations/Kumana National Park.jpg';
import wildElephantsEntranceImage from '../assets/images/destinations/wild-asian-elephants-entrance.jpg';

import minneriyaImage from '../assets/images/destinations/minneriya.jpg';
import bundalaImage from '../assets/images/destinations/Bundala National Park.jpg';
import galOyaImage from '../assets/images/destinations/Gal Oya National Park.jpg';
import maduruOyaImage from '../assets/images/destinations/Maduru Oya National Park.jpg';
import kalpitiyaImage from '../assets/images/destinations/Kalpitiya.jpg';
import pigeonIslandImage from '../assets/images/destinations/Pigeon Island National Park.jpg';
import hikkaduwaImage from '../assets/images/destinations/Hikkaduwa.jpg';
import rekawaImage from '../assets/images/destinations/Rekawa Turtle Coast.jpg';
import maduGangaImage from '../assets/images/destinations/Madu Ganga.jpg';
import sinharajaImage from '../assets/images/destinations/Sinharaja Forest.jpg';
import hortonPlainsImage from '../assets/images/destinations/Horton Plains1.webp';
import mannarVankalaiImage from '../assets/images/destinations/Mannar Causeway & Vankalai Sanctuary.jpg';
import knucklesImage from '../assets/images/destinations/Knuckles Mountain Range.jpg';
import weligamaSurfImage from '../assets/images/destinations/Weligama.jpg';
import arugamBayImage from '../assets/images/destinations/Arugam Bay.jpg';
import ahangamaKabalanaImage from '../assets/images/destinations/kabalana.jpg';
import hiriketiyaImage from '../assets/images/destinations/Hiriketiya.jpg';
import unawatunaImage from '../assets/images/destinations/Unawatuna.jpg';
import ellaRockImage from '../assets/images/destinations/Ella Rock.jpg';
import pidurangalaImage from '../assets/images/destinations/pidurangala-rock.jpg';
import adamsPeakImage from '../assets/images/destinations/Adam’s Peak.jpg';
import anuradhapuraImage from '../assets/images/destinations/anuradhapura.jpg';
import haputaleImage from '../assets/images/destinations/Haputale.jpg';
import kitulgalaImage from '../assets/images/destinations/Kitulgala.avif';
import diyalumaImage from '../assets/images/destinations/Diyaluma Falls.jpg';
import senanayakeImage from '../assets/images/destinations/Senanayake Samudraya.jpg';
import delftIslandImage from '../assets/images/destinations/Delft Island.jpg';
import liptonsSeatImage from '../assets/images/destinations/Lipton’s Seat.jpg';
import mataleImage from '../assets/images/destinations/Matale.jpg';
import dambullaImage from '../assets/images/destinations/new-dambulla.jpg';
import galleFortImage from '../assets/images/destinations/new-galle.jpg';
import ritigalaImage from '../assets/images/destinations/ritigala.jpg';
import templeOfTheToothImage from '../assets/images/destinations/Temple of the Tooth.jpg';
import nallurKovilImage from '../assets/images/destinations/Nallur Kandaswamy Kovil.jpg';
import colomboImage from '../assets/images/destinations/directory-colombo.jpg';
import negomboImage from '../assets/images/destinations/negombo.jpg';
import dambanaImage from '../assets/images/destinations/Dambana Vedda Heritage.webp';
import bentotaImage from '../assets/images/destinations/directory-bentota.avif';
import tangalleImage from '../assets/images/destinations/directory-tangalle.jpeg';
import ambalangodaImage from '../assets/images/destinations/Ambalangoda.jpg';
import ratnapuraGemImage from '../assets/images/destinations/Ratnapura Gem Heritage.jpg';
import pasikudaImage from '../assets/images/destinations/Pasikuda.jpg';

export type ExperienceThemeId =
  | 'wildlife-safaris'
  | 'marine-wildlife'
  | 'birdwatching-biodiversity'
  | 'surfing-board-sports'
  | 'diving-snorkelling'
  | 'hiking-mountain-trails'
  | 'cycling-two-wheel'
  | 'rafting-rivers-water'
  | 'scenic-journeys'
  | 'tea-spice-plantations'
  | 'ancient-cities-archaeology'
  | 'spirituality-pilgrimage'
  | 'food-markets-culinary'
  | 'village-community-life'
  | 'wellness-ayurveda'
  | 'arts-crafts-festivals'
  | 'beaches-coast-islands';

export type ExperienceBrowsePath =
  | 'wildlife'
  | 'sea-surf'
  | 'highlands'
  | 'heritage'
  | 'food-local-life';

export type ExperienceEffort = 'Easy' | 'Moderate' | 'Challenging';

export type EditorialStatus = 'reviewed' | 'proposed' | 'research-needed';

export interface ExperienceSource {
  label: string;
  url?: string;
  claim?: string;
  checkedDate: string;
}

export interface RelatedDestinationRef {
  id: string;
  name: string;
  relationship: string;
}

export interface ThemeSubtype {
  id: string;
  label: string;
}

export interface ExperienceTheme {
  id: ExperienceThemeId;
  number: string;
  title: string;
  shortTitle: string;
  browsePath: ExperienceBrowsePath;
  promise: string;
  intro: string;
  subtypes: ThemeSubtype[];
  planYourVisit: string[];
  relatedThemeIds: ExperienceThemeId[];
  featuredDestinations: { id: string; name: string }[];
  image: ImageMetadata;
  imageAlt: string;
}

export interface ExperienceRecord {
  id: string;
  title: string;
  summary: string;
  whyDistinctive: string;
  themeId: ExperienceThemeId;
  themeLabel: string;
  subtypeId: string;
  subtypeLabel: string;
  browsePath: ExperienceBrowsePath;
  browsePathLabel: string;
  category: string;
  categoryLabel: string;
  primaryDestinationId: string;
  primaryDestinationName: string;
  primaryDestinationRegion: string;
  regionId:
    | 'cultural-triangle'
    | 'hill-country'
    | 'south-coast'
    | 'west-coast'
    | 'east-coast'
    | 'north'
    | 'southeast';
  relatedDestinations?: RelatedDestinationRef[];
  allDestinationIds: string[];
  duration: string;
  effort: ExperienceEffort;
  effortDetails: string;
  skillLevel?: string;
  seasonSummary: string;
  seasonDetails: string;
  essentialCaveat: string;
  detailedGuidance: string;
  keyPrep: string[];
  practicalTags: string[];
  bestTimeOfDay: string;
  editorialStatus: EditorialStatus;
  verificationNote?: string;
  reviewBy: string;
  sources: ExperienceSource[];
  image: ImageMetadata;
  imageAlt: string;
  featuredOnHub?: boolean;
  hasDetailGuide?: boolean;
}

export interface BrowsePathInfo {
  id: ExperienceBrowsePath;
  label: string;
  shortLabel: string;
  description: string;
  seasonNote: string;
  themeIds: ExperienceThemeId[];
}

export interface DestinationFilterOption {
  id: string;
  name: string;
  region: string;
  count: number;
}

export const experienceThemes: ExperienceTheme[] = [
  {
    id: 'wildlife-safaris',
    number: '01',
    title: 'Wildlife Safaris',
    shortTitle: 'Wildlife Safaris',
    browsePath: 'wildlife',
    promise: 'Meet Sri Lanka’s wild landscapes through ethical, guided observation of mammals, reptiles, and park habitats.',
    intro: 'From open reservoir grasslands in Udawalawe and Minneriya to forested villu lakes in Wilpattu and coastal lagoons in Yala and Kumana, each national park offers a distinct ecosystem and pace.',
    subtypes: [
      { id: 'elephant-habitats', label: 'Elephant Habitats & Gatherings' },
      { id: 'dry-zone-forest', label: 'Leopard & Dry-Zone Forest' },
      { id: 'wetland-boat', label: 'Wetland & Boat Safaris' },
    ],
    planYourVisit: [
      'Sightings of wild animals are never guaranteed; choose a park for its landscape and pace rather than a single target species.',
      'Follow Department of Wildlife Conservation (DWC) rules: stay on designated tracks, never feed wildlife, and ask drivers not to crowd sightings.',
      'Early morning (06:00) and late afternoon (15:00) drives provide cooler temperatures and active wildlife hours.',
    ],
    relatedThemeIds: ['birdwatching-biodiversity', 'marine-wildlife', 'scenic-journeys'],
    featuredDestinations: [
      { id: 'yala', name: 'Yala National Park' },
      { id: 'wilpattu-national-park', name: 'Wilpattu National Park' },
      { id: 'udawalawe-national-park', name: 'Udawalawe National Park' },
      { id: 'minneriya-national-park', name: 'Minneriya National Park' },
      { id: 'gal-oya-national-park', name: 'Gal Oya National Park' },
      { id: 'bundala-national-park', name: 'Bundala National Park' },
      { id: 'kumana-national-park', name: 'Kumana National Park' },
      { id: 'maduru-oya-national-park', name: 'Maduru Oya National Park' },
    ],
    image: elephantSafariImage,
    imageAlt: 'A wild Asian elephant near a freshwater pool in Udawalawe National Park.',
  },
  {
    id: 'marine-wildlife',
    number: '02',
    title: 'Marine Wildlife & Ocean Encounters',
    shortTitle: 'Marine Wildlife',
    browsePath: 'wildlife',
    promise: 'Discover whales, dolphins, turtle nesting coasts, and estuaries while keeping wildlife welfare and sea conditions at the center.',
    intro: 'Sri Lanka’s deep continental shelf and coastal lagoons support migratory blue whales, spinner dolphins, and nesting marine turtles across opposite seasonal windows on the south, west, and east coasts.',
    subtypes: [
      { id: 'whales-dolphins', label: 'Whale & Dolphin Watching' },
      { id: 'turtle-habitat', label: 'Sea-Turtle Habitat Observation' },
      { id: 'estuary-mangrove', label: 'Mangrove & Estuary Wildlife' },
    ],
    planYourVisit: [
      'Select licensed vessels following SLTDA and International Whaling Commission (IWC) distance rules; swimming with whales is not permitted.',
      'Offshore departures depend strictly on daily wind and swell: Mirissa runs mainly December to March, while Trincomalee runs roughly March to July.',
      'For sea turtles, choose in-situ beach conservation watches such as Rekawa and avoid facilities that allow handling or staged releases.',
    ],
    relatedThemeIds: ['diving-snorkelling', 'beaches-coast-islands', 'wildlife-safaris'],
    featuredDestinations: [
      { id: 'mirissa', name: 'Mirissa' },
      { id: 'trincomalee', name: 'Trincomalee' },
      { id: 'kalpitiya', name: 'Kalpitiya' },
      { id: 'rekawa-turtle-coast', name: 'Rekawa Turtle Coast' },
      { id: 'madu-ganga', name: 'Madu Ganga' },
    ],
    image: whaleWatchingImage,
    imageAlt: 'The tail fluke of a whale diving into deep blue waters off southern Sri Lanka.',
  },
  {
    id: 'birdwatching-biodiversity',
    number: '03',
    title: 'Birdwatching & Biodiversity',
    shortTitle: 'Birdwatching',
    browsePath: 'wildlife',
    promise: 'Find endemic rainforest flocks, montane species, and migrating waterbirds with knowledgeable local naturalists.',
    intro: 'Compact elevation shifts between lowland wet-zone rainforests, cloud forests, and coastal ramsar wetlands make Sri Lanka a rewarding island for endemic birding and naturalist walks.',
    subtypes: [
      { id: 'rainforest-endemics', label: 'Rainforest Endemic Birding' },
      { id: 'wetland-migratory', label: 'Wetland & Migratory Sanctuaries' },
      { id: 'montane-biodiversity', label: 'Highland & Cloud-Forest Walks' },
    ],
    planYourVisit: [
      'Walk with accredited forest guides in Sinharaja and Knuckles, where permitted footpaths protect sensitive understory habitats.',
      'Pack leech socks and rain protection for wet-zone forests, and warm layers for early mornings in Horton Plains and Nuwara Eliya.',
      'Never use audio playback lure calls or disturb nesting sites during bird photography.',
    ],
    relatedThemeIds: ['wildlife-safaris', 'hiking-mountain-trails', 'rafting-rivers-water'],
    featuredDestinations: [
      { id: 'sinharaja-forest-reserve', name: 'Sinharaja Forest Reserve' },
      { id: 'bundala-national-park', name: 'Bundala National Park' },
      { id: 'kumana-national-park', name: 'Kumana National Park' },
      { id: 'horton-plains', name: 'Horton Plains National Park' },
      { id: 'mannar-island', name: 'Mannar Island' },
    ],
    image: sinharajaImage,
    imageAlt: 'Dense green canopy of the UNESCO-listed Sinharaja lowland rainforest.',
  },
  {
    id: 'surfing-board-sports',
    number: '04',
    title: 'Surfing & Board Sports',
    shortTitle: 'Surfing & Boards',
    browsePath: 'sea-surf',
    promise: 'Match your skill level and travel month to the right coast, wave type, and qualified local instructor.',
    intro: 'Gentle sand-bottom bays on the southern coast and long right-hand point breaks on the east coast allow year-round surf progression when matched to the island’s two monsoon seasons.',
    subtypes: [
      { id: 'beginner-bays', label: 'Beginner Beach Breaks' },
      { id: 'point-reef-breaks', label: 'Point & Reef Breaks' },
      { id: 'wind-paddle', label: 'Kitesurfing & Paddleboarding' },
    ],
    planYourVisit: [
      'The southwest coast (Weligama, Ahangama, Hiriketiya) is cleanest from November to April; the east coast (Arugam Bay) peaks roughly April to October.',
      'A beginner-friendly bay label is not a safety guarantee: check rip currents, tide changes, and learn with ISA-qualified or reputable local instructors.',
      'Respect surf lineup etiquette and reef hazards at shallow breaks like Kabalana, Midigama, and Main Point.',
    ],
    relatedThemeIds: ['beaches-coast-islands', 'diving-snorkelling', 'wellness-ayurveda'],
    featuredDestinations: [
      { id: 'weligama', name: 'Weligama' },
      { id: 'arugam-bay', name: 'Arugam Bay' },
      { id: 'ahangama-kabalana', name: 'Ahangama & Kabalana' },
      { id: 'tangalle-core', name: 'Hiriketiya' },
      { id: 'kalpitiya', name: 'Kalpitiya' },
    ],
    image: weligamaSurfImage,
    imageAlt: 'Rolling waves along the wide sandy shore of Weligama Bay.',
  },
  {
    id: 'diving-snorkelling',
    number: '05',
    title: 'Diving, Snorkelling & Underwater Exploration',
    shortTitle: 'Diving & Snorkelling',
    browsePath: 'sea-surf',
    promise: 'Explore shallow coral gardens, marine national parks, and offshore wrecks with clear seasonal and certification guidance.',
    intro: 'Warm Indian Ocean waters ring fringing reefs at Pigeon Island and Hikkaduwa as well as deeper rock pinnacles and historic shipwrecks along the southwest and northeast coasts.',
    subtypes: [
      { id: 'reef-snorkelling', label: 'Guided Reef Snorkelling' },
      { id: 'scuba-reefs', label: 'Certified & Discovery Reef Dives' },
      { id: 'wreck-diving', label: 'Seasonal Wreck Diving' },
    ],
    planYourVisit: [
      'Underwater visibility follows the calm-sea window: November to April on the south/west coast and May to September on the east coast.',
      'Never stand on coral, touch sea turtles, or feed reef fish; use reef-safe sun protection or UV rash guards.',
      'Verify PADI/SSI dive center credentials, equipment maintenance, and depth prerequisites before booking wreck or deep reef dives.',
    ],
    relatedThemeIds: ['marine-wildlife', 'beaches-coast-islands', 'surfing-board-sports'],
    featuredDestinations: [
      { id: 'pigeon-island-national-park', name: 'Pigeon Island National Park' },
      { id: 'nilaveli', name: 'Nilaveli' },
      { id: 'hikkaduwa', name: 'Hikkaduwa' },
      { id: 'unawatuna', name: 'Unawatuna' },
      { id: 'trincomalee', name: 'Trincomalee' },
    ],
    image: pigeonIslandImage,
    imageAlt: 'Clear turquoise water and coral reef shallows at Pigeon Island National Park near Nilaveli.',
  },
  {
    id: 'hiking-mountain-trails',
    number: '06',
    title: 'Hiking, Trekking & Mountain Trails',
    shortTitle: 'Hiking & Trails',
    browsePath: 'highlands',
    promise: 'Choose a walk that fits your time, fitness, and appetite for tea ridges, cloud forests, or granite summits.',
    intro: 'Footpaths thread through Sri Lanka’s central highlands, from 90-minute viewpoint walks above Ella Gap to multi-stage Pekoe Trail routes, Knuckles cloud-forest treks, and sacred night ascents.',
    subtypes: [
      { id: 'viewpoint-walks', label: 'Short Viewpoint & Ridge Walks' },
      { id: 'tea-pekoe-trails', label: 'Tea-Country & Pekoe Trail Stages' },
      { id: 'cloud-forest-peaks', label: 'Cloud-Forest & Strenuous Climbs' },
    ],
    planYourVisit: [
      'Start highland walks early (06:00 to 07:30) for clearer valley views before midday heat and afternoon mist build.',
      'Match the trail to your footing: Little Adam’s Peak is a graded walk, whereas Ella Rock, Pidurangala’s upper boulders, and Knuckles trails require gripped shoes and stamina.',
      'Carry rain protection, drinking water, and hire local guides for unmarked forest or ridge routes.',
    ],
    relatedThemeIds: ['tea-spice-plantations', 'scenic-journeys', 'birdwatching-biodiversity'],
    featuredDestinations: [
      { id: 'ella', name: 'Ella' },
      { id: 'horton-plains', name: 'Horton Plains National Park' },
      { id: 'knuckles-mountain-range', name: 'Knuckles Mountain Range' },
      { id: 'pidurangala-rock', name: 'Pidurangala Rock' },
      { id: 'adams-peak', name: 'Adam’s Peak (Sri Pada)' },
    ],
    image: ellaRockImage,
    imageAlt: 'Highland summit viewpoint looking out across green valleys in Ella.',
  },
  {
    id: 'cycling-two-wheel',
    number: '07',
    title: 'Cycling & Two-Wheel Exploration',
    shortTitle: 'Cycling',
    browsePath: 'heritage',
    promise: 'Move at bicycle pace along shaded archaeological avenues, dry-zone reservoir bunds, and quiet rural lanes.',
    intro: 'Two wheels bridge large outdoor temple cities like Polonnaruwa and Anuradhapura while opening quiet backroads past village tanks, paddy fields, and highland tea valleys.',
    subtypes: [
      { id: 'ancient-city-rides', label: 'Ancient City Archaeological Rides' },
      { id: 'village-tank-lanes', label: 'Dry-Zone Tank & Village Backroads' },
      { id: 'highland-coastal-rides', label: 'Highland Descents & Coastal Lanes' },
    ],
    planYourVisit: [
      'Ride early in the morning (07:00 to 10:30) in the Cultural Triangle before tropical heat builds on open roads.',
      'Observe sacred etiquette when cycling between shrines: dress modestly, park bicycles neatly, and remove shoes and hats at temple entrances.',
      'Check brake condition, helmet fit, and carry ample water; use guided support on steep hill-country grades.',
    ],
    relatedThemeIds: ['ancient-cities-archaeology', 'village-community-life', 'hiking-mountain-trails'],
    featuredDestinations: [
      { id: 'polonnaruwa', name: 'Polonnaruwa Ancient City' },
      { id: 'anuradhapura', name: 'Anuradhapura Sacred City' },
      { id: 'sigiriya', name: 'Sigiriya Rock Fortress' },
      { id: 'haputale', name: 'Haputale' },
      { id: 'galle', name: 'Galle Fort' },
    ],
    image: polonnaruwaImage,
    imageAlt: 'Shaded archaeological stone ruins at Polonnaruwa Vatadage.',
  },
  {
    id: 'rafting-rivers-water',
    number: '08',
    title: 'Rafting, Rivers & Inland Water',
    shortTitle: 'Rivers & Rafting',
    browsePath: 'sea-surf',
    promise: 'Experience white-water rapids, calm mangrove paddles, and highland cascades with verified seasonal and water-safety guidance.',
    intro: 'Fed by central mountain rainfall, Sri Lanka’s rivers carve rainforest gorges around Kitulgala before widening into tranquil coastal lagoons, ancient irrigation reservoirs, and tiered waterfalls.',
    subtypes: [
      { id: 'white-water-kelani', label: 'Kelani River Rafting & Kayaking' },
      { id: 'calm-lagoon-paddling', label: 'Lagoon, Estuary & Tank Paddling' },
      { id: 'waterfalls-canyons', label: 'Waterfall Walks & Gorge Streams' },
    ],
    planYourVisit: [
      'Sri Lanka Tourism lists November to April as the primary season for white-water rafting at Kitulgala, though daily river levels and upstream dam releases govern actual safety.',
      'Confirm operator licensing, helmets, life jackets, and safety briefings before entering river rapids or canyons.',
      'Never assume a waterfall pool is safe for swimming; rocks are slippery and flash surges can occur after highland rain.',
    ],
    relatedThemeIds: ['hiking-mountain-trails', 'marine-wildlife', 'birdwatching-biodiversity'],
    featuredDestinations: [
      { id: 'kitulgala', name: 'Kitulgala' },
      { id: 'madu-ganga', name: 'Madu Ganga' },
      { id: 'bentota', name: 'Bentota' },
      { id: 'diyaluma-falls', name: 'Diyaluma Falls' },
      { id: 'gal-oya-national-park', name: 'Gal Oya National Park' },
    ],
    image: kitulgalaImage,
    imageAlt: 'Lush rainforest gorge along the Kelani River at Kitulgala.',
  },
  {
    id: 'scenic-journeys',
    number: '09',
    title: 'Scenic Train, Road & Water Journeys',
    shortTitle: 'Scenic Journeys',
    browsePath: 'highlands',
    promise: 'Turn travel time between destinations into a highlight through mountain rail segments, ridge drives, and island ferries.',
    intro: 'Rather than treating transit as dead time, a well-paced Sri Lankan route savors the Main Line railway through tea country, winding mountain passes, and northern causeway crossings.',
    subtypes: [
      { id: 'mountain-coastal-rail', label: 'Highland & Coastal Rail Segments' },
      { id: 'scenic-road-passes', label: 'Tea-Country & Ridge Road Journeys' },
      { id: 'ferry-air-journeys', label: 'Lagoon Boats & Island Crossings' },
    ],
    planYourVisit: [
      'Book shorter 2-to-3-hour rail segments (such as Nanu Oya to Ella or Haputale to Ella) rather than spending an entire day on delayed services.',
      'Reserved train seats open weeks in advance and sell out quickly; timetables and rolling stock can change without notice.',
      'Keep doors and footboards clear on moving trains and check morning ferry schedules before northern island crossings.',
    ],
    relatedThemeIds: ['tea-spice-plantations', 'hiking-mountain-trails', 'beaches-coast-islands'],
    featuredDestinations: [
      { id: 'ella', name: 'Ella' },
      { id: 'nuwara-eliya', name: 'Nuwara Eliya' },
      { id: 'kandy', name: 'Kandy' },
      { id: 'haputale', name: 'Haputale' },
      { id: 'delft-island', name: 'Delft Island' },
    ],
    image: trainJourneyImage,
    imageAlt: 'A blue passenger train curving across the highland tea country near Ella.',
  },
  {
    id: 'tea-spice-plantations',
    number: '10',
    title: 'Tea, Spice & Plantation Landscapes',
    shortTitle: 'Tea & Spices',
    browsePath: 'highlands',
    promise: 'Understand how Ceylon tea, cinnamon, and spices shape Sri Lanka’s hills and coastal estates through respectful visits.',
    intro: 'From high-grown Orange Pekoe estates above 1,800 meters in Nuwara Eliya and Haputale to low-country cinnamon gardens in the south and spice groves in Matale, agriculture defines the island’s working landscapes.',
    subtypes: [
      { id: 'tea-factories-tasting', label: 'Tea Factories & Guided Tastings' },
      { id: 'estate-viewpoints', label: 'Estate Walks & Ridge Lookouts' },
      { id: 'spice-cinnamon', label: 'Spice & Cinnamon Heritage' },
    ],
    planYourVisit: [
      'Check tea factory production days in advance; leaf withering and rolling pause on public holidays, Sundays, and during dry spells.',
      'Respect estate communities: stay on permitted paths and always ask before photographing tea pluckers or residents.',
      'Choose educational spice and cinnamon visits focused on botany and culinary craft rather than unsubstantiated medical sales claims.',
    ],
    relatedThemeIds: ['hiking-mountain-trails', 'scenic-journeys', 'food-markets-culinary'],
    featuredDestinations: [
      { id: 'nuwara-eliya', name: 'Nuwara Eliya' },
      { id: 'haputale', name: 'Haputale' },
      { id: 'liptons-seat', name: 'Lipton’s Seat' },
      { id: 'ella', name: 'Ella' },
      { id: 'kandy', name: 'Matale' },
    ],
    image: teaTastingImage,
    imageAlt: 'Freshly brewed Ceylon tea flights set out for tasting in the central highlands.',
  },
  {
    id: 'ancient-cities-archaeology',
    number: '11',
    title: 'Ancient Cities, Architecture & Archaeology',
    shortTitle: 'Ancient Cities & Heritage',
    browsePath: 'heritage',
    promise: 'Walk through two millennia of royal capitals, rock citadels, forest monasteries, and fortified coastal towns.',
    intro: 'Sri Lanka’s built heritage spans the hydraulic kingdoms of Anuradhapura and Polonnaruwa, fifth-century water gardens at Sigiriya, painted cave shrines at Dambulla, and living colonial-era ramparts at Galle.',
    subtypes: [
      { id: 'rock-citadels', label: 'Rock Citadels & Fortresses' },
      { id: 'ancient-capitals', label: 'Sacred Capitals & Forest Ruins' },
      { id: 'forts-living-towns', label: 'Colonial Forts & Living Architecture' },
    ],
    planYourVisit: [
      'Begin outdoor archaeological visits at opening hour (07:00) to avoid midday heat on stone staircases and courtyards.',
      'Many archaeological monuments remain active Buddhist shrines: cover shoulders and knees, remove footwear and hats, and bring socks for hot stone.',
      'Treat living heritage towns like Galle Fort and Colombo Pettah as active residential neighborhoods.',
    ],
    relatedThemeIds: ['spirituality-pilgrimage', 'cycling-two-wheel', 'arts-crafts-festivals'],
    featuredDestinations: [
      { id: 'sigiriya', name: 'Sigiriya Rock Fortress' },
      { id: 'polonnaruwa', name: 'Polonnaruwa Ancient City' },
      { id: 'anuradhapura', name: 'Anuradhapura Sacred City' },
      { id: 'dambulla', name: 'Dambulla Cave Temple' },
      { id: 'galle', name: 'Galle Fort' },
    ],
    image: sigiriyaAerialImage,
    imageAlt: 'Aerial view of Sigiriya Rock Fortress rising above emerald dry-zone forest.',
  },
  {
    id: 'spirituality-pilgrimage',
    number: '12',
    title: 'Spirituality, Pilgrimage & Sacred Places',
    shortTitle: 'Sacred Places',
    browsePath: 'heritage',
    promise: 'Visit Sri Lanka’s living Buddhist, Hindu, Christian, and multi-faith sanctuaries with cultural context and quiet respect.',
    intro: 'Sacred geography is woven into daily life across the island, from evening drumming at Kandy’s Temple of the Tooth and high-towered Hindu kovils in Jaffna to lantern-lit pilgrim steps on Adam’s Peak.',
    subtypes: [
      { id: 'living-shrines', label: 'Living Temples, Kovils & Shrines' },
      { id: 'sacred-pilgrimages', label: 'Sacred Mountains & Island Pilgrimages' },
      { id: 'contemplative-visits', label: 'Multi-Faith & Contemplative Sites' },
    ],
    planYourVisit: [
      'Modest white or light-colored clothing covering shoulders and knees is customary at temples and kovils; remove shoes and head coverings before entering.',
      'Never turn your back directly to a Buddha image for photographs, and follow priest and temple attendant instructions during puja hours.',
      'Pilgrimage sites like Kataragama, Nallur, and Sri Pada draw large devotional crowds during festival and full-moon (Poya) days.',
    ],
    relatedThemeIds: ['ancient-cities-archaeology', 'arts-crafts-festivals', 'hiking-mountain-trails'],
    featuredDestinations: [
      { id: 'kandy', name: 'Kandy' },
      { id: 'anuradhapura', name: 'Anuradhapura Sacred City' },
      { id: 'jaffna', name: 'Jaffna' },
      { id: 'kataragama', name: 'Kataragama' },
      { id: 'adams-peak', name: 'Adam’s Peak (Sri Pada)' },
    ],
    image: templeOfTheToothImage,
    imageAlt: 'The illuminated Temple of the Tooth Relic beside Kandy Lake.',
  },
  {
    id: 'food-markets-culinary',
    number: '13',
    title: 'Food, Markets & Culinary Learning',
    shortTitle: 'Food & Markets',
    browsePath: 'food-local-life',
    promise: 'Taste regional Sri Lankan cooking through home kitchens, morning produce markets, and distinctive northern and coastal dishes.',
    intro: 'Beyond generic buffet spreads, Sri Lankan cuisine shifts dramatically by region: clay-pot hill-country vegetable curries, smoky Jaffna crab and palmyra flavors, southern ambul thiyal fish, and crisp evening hoppers.',
    subtypes: [
      { id: 'home-cooking-classes', label: 'Home Kitchens & Cooking Classes' },
      { id: 'regional-food-trails', label: 'Regional Cuisine & Street Food' },
      { id: 'markets-produce', label: 'Morning Markets & Coastal Harbors' },
    ],
    planYourVisit: [
      'Share dietary needs (vegetarian, vegan, gluten-free, nut allergies, or spice tolerance) in advance when booking home meals or cooking sessions.',
      'Treat produce and fish markets as active workplaces: visit early, step aside for vendors, and ask before taking close-up photos.',
      'Many traditional vegetable curries use coconut milk rather than dairy, though ghee or Maldives fish (umbalakada) may appear unless specified.',
    ],
    relatedThemeIds: ['village-community-life', 'tea-spice-plantations', 'arts-crafts-festivals'],
    featuredDestinations: [
      { id: 'kandy', name: 'Kandy' },
      { id: 'jaffna', name: 'Jaffna' },
      { id: 'colombo', name: 'Colombo' },
      { id: 'galle', name: 'Galle Fort' },
      { id: 'negombo', name: 'Negombo' },
    ],
    image: villageCookingImage,
    imageAlt: 'Clay pots of Sri Lankan vegetable curries and fresh spices in a home kitchen.',
  },
  {
    id: 'village-community-life',
    number: '14',
    title: 'Village, Community & Everyday Life',
    shortTitle: 'Village & Community',
    browsePath: 'food-local-life',
    promise: 'Connect with rural hosts, artisans, and community guides through consent-based visits with clear local benefit.',
    intro: 'Thoughtful community experiences focus on genuine skill-sharing, whether walking a dry-zone tank bund with a local farmer, learning pottery or weaving from a named workshop, or joining a community-led forest walk.',
    subtypes: [
      { id: 'rural-walks-hosts', label: 'Community Walks & Home Gardens' },
      { id: 'community-nature-guiding', label: 'Community-Led Nature & Heritage' },
      { id: 'livelihoods-crafts', label: 'Working Livelihoods & Artisan Visits' },
    ],
    planYourVisit: [
      'Choose visits designed with host consent and transparent remuneration; never enter private homes, schools, or gardens uninvited.',
      'Avoid experiences that frame everyday rural life or Indigenous communities as a staged spectacle.',
      'Ask permission before photographing people at work, and purchase crafts directly from the maker when possible.',
    ],
    relatedThemeIds: ['food-markets-culinary', 'arts-crafts-festivals', 'cycling-two-wheel'],
    featuredDestinations: [
      { id: 'sigiriya', name: 'Sigiriya & Habarana' },
      { id: 'kandy', name: 'Kandy' },
      { id: 'knuckles-mountain-range', name: 'Knuckles Mountain Range' },
      { id: 'dambana-indigenous-heritage', name: 'Dambana' },
      { id: 'jaffna', name: 'Jaffna' },
    ],
    image: dambanaImage,
    imageAlt: 'Forested rural landscape in Dambana, heartland of Sri Lanka’s Indigenous community.',
  },
  {
    id: 'wellness-ayurveda',
    number: '15',
    title: 'Wellness, Ayurveda & Slow Travel',
    shortTitle: 'Wellness & Slow Travel',
    browsePath: 'food-local-life',
    promise: 'Make room for rest through qualified Ayurveda consultations, coastal or hill-country yoga, and unhurried nature stays.',
    intro: 'Sri Lanka’s long tradition of indigenous Hela Wedakama and Ayurveda pairs naturally with slower itineraries beside southern coves, quiet lagoons, and misty tea-country ridges.',
    subtypes: [
      { id: 'ayurveda-programs', label: 'Ayurveda Consultations & Retreats' },
      { id: 'yoga-mindfulness', label: 'Coastal & Highland Yoga' },
      { id: 'slow-nature-stays', label: 'Slow Stays & Mindful Nature Walks' },
    ],
    planYourVisit: [
      'Distinguish between a relaxing single-day herbal spa massage and a structured multi-day Ayurveda program supervised by a qualified physician.',
      'Treat wellness offerings as restorative travel experiences, not a substitute for clinical medical advice or guaranteed cures.',
      'Allow at least three nights in a single location if your goal is genuine rest rather than daily road transfers.',
    ],
    relatedThemeIds: ['beaches-coast-islands', 'tea-spice-plantations', 'spirituality-pilgrimage'],
    featuredDestinations: [
      { id: 'bentota', name: 'Bentota' },
      { id: 'tangalle', name: 'Tangalle' },
      { id: 'weligama', name: 'Weligama' },
      { id: 'ella', name: 'Ella' },
      { id: 'kandy', name: 'Kandy' },
    ],
    image: tangalleImage,
    imageAlt: 'Quiet palm-fringed shoreline and calm ocean waters at Tangalle.',
  },
  {
    id: 'arts-crafts-festivals',
    number: '16',
    title: 'Arts, Crafts, Festivals & Evening Culture',
    shortTitle: 'Arts, Crafts & Festivals',
    browsePath: 'heritage',
    promise: 'Discover traditional mask carving, handloom weaving, woodcraft, and seasonal religious processions across the island.',
    intro: 'Living craft lineages thrive in specific towns, from Ambalangoda’s kolam and sanni masks and Kandy’s Gampola-era woodcarving to annual sacred festivals like the Kandy Esala Perahera and Nallur Festival.',
    subtypes: [
      { id: 'artisan-workshops', label: 'Named Craft & Artisan Workshops' },
      { id: 'performing-arts', label: 'Traditional Dance & Drumming' },
      { id: 'seasonal-festivals', label: 'Annual Festivals & Processions' },
    ],
    planYourVisit: [
      'Separate year-round craft studios from date-specific religious festivals (Esala Perahera, Nallur, Vesak), whose lunar dates shift each year.',
      'When visiting gem or craft studios in Ratnapura, Ambalangoda, or Kandy, prioritize transparent educational workshops over commission-driven showrooms.',
      'At religious festivals, follow crowd safety barriers and dress respectfully as an observer at an active sacred event.',
    ],
    relatedThemeIds: ['spirituality-pilgrimage', 'ancient-cities-archaeology', 'village-community-life'],
    featuredDestinations: [
      { id: 'kandy', name: 'Kandy' },
      { id: 'galle', name: 'Ambalangoda' },
      { id: 'jaffna', name: 'Jaffna' },
      { id: 'ratnapura-gem-heritage', name: 'Ratnapura' },
      { id: 'galle', name: 'Galle Fort' },
    ],
    image: kandyPeraheraImage,
    imageAlt: 'Traditional dancers and ceremonial procession lights during Kandy Esala Perahera.',
  },
  {
    id: 'beaches-coast-islands',
    number: '17',
    title: 'Beaches, Coast & Island Life',
    shortTitle: 'Beaches & Islands',
    browsePath: 'sea-surf',
    promise: 'Find the right coastline for the season, from calm east-coast bays and southern coves to northern causeway islands.',
    intro: 'Because Sri Lanka’s southwest and northeast coasts follow opposite monsoon rhythms, there is almost always a sunny, swimmable shore, historic coastal walk, or quiet lagoon somewhere on the island.',
    subtypes: [
      { id: 'calm-water-bays', label: 'Seasonal Calm-Water Bays' },
      { id: 'coastal-walks-harbors', label: 'Coastal Walks, Forts & Harbors' },
      { id: 'offshore-islands', label: 'Northern Islands & Lagoon Sunsets' },
    ],
    planYourVisit: [
      'Match your beach stay to the month: south and west coasts (Bentota, Unawatuna, Tangalle, Mirissa) suit December to April; east coast bays (Pasikuda, Nilaveli) suit May to September.',
      'Ocean currents and shorebreak can be strong even on sunny days; swim only in sheltered bays and heed local lifeguards and flags.',
      'Northern island excursions to Delft and Nainativu depend on morning public boats and calm Palk Strait weather.',
    ],
    relatedThemeIds: ['surfing-board-sports', 'diving-snorkelling', 'marine-wildlife'],
    featuredDestinations: [
      { id: 'bentota', name: 'Bentota' },
      { id: 'tangalle', name: 'Tangalle' },
      { id: 'pasikuda', name: 'Pasikuda' },
      { id: 'nilaveli', name: 'Nilaveli' },
      { id: 'delft-island', name: 'Delft Island' },
    ],
    image: bentotaImage,
    imageAlt: 'Golden sandy shoreline and turquoise water along the Bentota coast.',
  },
];

export const allExperiences: ExperienceRecord[] = [
  // ============================================================================
  // 01. WILDLIFE SAFARIS
  // ============================================================================
  {
    id: 'yala-leopard-safari',
    title: 'Track leopards and dry-zone wildlife across Yala coastal scrub',
    summary:
      'Venture into Sri Lanka’s premier southeastern dry-zone park, renowned for high leopard density across coastal lagoons, granite inselbergs, and thorn scrub.',
    whyDistinctive:
      'Yala Block 1 and Block 5 combine granite rock outcrops and coastal lagoons that provide prime habitat for the endemic Sri Lankan leopard (Panthera pardus kotiya), sloth bears, and mugger crocodiles.',
    themeId: 'wildlife-safaris',
    themeLabel: 'Wildlife Safaris',
    subtypeId: 'dry-zone-forest',
    subtypeLabel: 'Leopard & Dry-Zone Forest',
    browsePath: 'wildlife',
    browsePathLabel: 'Wildlife & Nature',
    category: 'wildlife',
    categoryLabel: 'Wildlife Safaris',
    primaryDestinationId: 'yala',
    primaryDestinationName: 'Yala National Park',
    primaryDestinationRegion: 'Southeast & Wildlife',
    regionId: 'southeast',
    relatedDestinations: [
      { id: 'bundala-national-park', name: 'Bundala National Park', relationship: 'Ramsar wetland and waterbird park 40 minutes west' },
      { id: 'tangalle-core', name: 'Tangalle Coastline', relationship: 'Southern beach base 1.5 hours west' },
    ],
    allDestinationIds: ['yala', 'bundala-national-park', 'tangalle-core'],
    duration: '4 to 5 hours',
    effort: 'Easy',
    effortDetails: 'Seated 4x4 safari drive over bumpy unpaved dry-zone tracks.',
    seasonSummary: 'Feb to Jul dry season best; check seasonal block closures in Sep and Oct',
    seasonDetails: 'Dry months draw animals toward remaining waterholes. Block 1 can be busy; off-peak hours or alternative gates provide quieter game drives.',
    essentialCaveat: 'Leopard sightings are never guaranteed. Choose drivers who respect park speed limits and refuse to crowd animals.',
    detailedGuidance: 'Enter at dawn gate opening (06:00) when predators are active and morning light illuminates the coastal lagoons.',
    keyPrep: ['Neutral field clothing', 'Binoculars', 'Check DWC seasonal block status'],
    practicalTags: ['Coastal dry zone', 'High leopard density', 'Dawn or dusk drive'],
    bestTimeOfDay: 'Dawn gate entry (06:00) for cool air and morning predator movement',
    editorialStatus: 'reviewed',
    reviewBy: '2027-05-01',
    sources: [
      { label: 'Department of Wildlife Conservation (DWC): Yala', url: 'https://www.dwc.gov.lk/?page_id=72', checkedDate: '2026-11-04' },
      { label: 'Sri Lanka Tourism: Wild Safaris', url: 'https://www.srilanka.travel/wild-safaris', checkedDate: '2026-11-04' },
    ],
    image: yalaImage,
    imageAlt: 'Open grassland and coastal dry-zone scrub landscape in Yala National Park.',
    hasDetailGuide: true,
    featuredOnHub: true,
      },
  {
    id: 'wilpattu-villu-safari',
    title: 'Journey through quiet forest villus and natural lakes in Wilpattu',
    summary:
      'Traverse Sri Lanka’s largest national park by 4x4, winding through dense monsoon forest to explore natural rainwater lakes (villus) frequented by leopards and sloth bears.',
    whyDistinctive:
      'Over 60 natural sand-rimmed freshwater lakes (villus) punctuate deep forest canopy, creating a peaceful safari experience with far lower vehicle density than southern parks.',
    themeId: 'wildlife-safaris',
    themeLabel: 'Wildlife Safaris',
    subtypeId: 'dry-zone-forest',
    subtypeLabel: 'Leopard & Dry-Zone Forest',
    browsePath: 'wildlife',
    browsePathLabel: 'Wildlife & Nature',
    category: 'wildlife',
    categoryLabel: 'Wildlife Safaris',
    primaryDestinationId: 'wilpattu-national-park',
    primaryDestinationName: 'Wilpattu National Park',
    primaryDestinationRegion: 'Cultural Triangle & North West',
    regionId: 'cultural-triangle',
    relatedDestinations: [
      { id: 'anuradhapura', name: 'Anuradhapura Sacred City', relationship: 'Ancient capital base 45 minutes east' },
      { id: 'kalpitiya', name: 'Kalpitiya', relationship: 'Peninsula across Dutch Bay 1.5 hours west' },
    ],
    allDestinationIds: ['wilpattu-national-park', 'anuradhapura', 'kalpitiya'],
    duration: 'Full day or 5-hour morning drive',
    effort: 'Easy',
    effortDetails: 'Extended drives over deep sand and red gravel forest roads.',
    seasonSummary: 'Feb to Oct dry period; May to Sep offers peak villu waterhole activity',
    seasonDetails: 'Natural sand-rimmed villus concentrate wildlife during dry months, while post-monsoon months offer lush greenery and abundant birdlife.',
    essentialCaveat: 'Large park area requires patience; sightings happen through attentive forest tracking rather than crowded radio calls.',
    detailedGuidance: 'Full-day safaris with an accredited DWC guide allow visitors to reach the remote western villus and coastal Kudiramalai Point.',
    keyPrep: ['Dust protection and sun hat', 'Binoculars and telephoto lens', 'Full day packed lunch'],
    practicalTags: ['Natural villu lakes', 'Quiet forest safari', 'Low vehicle density'],
    bestTimeOfDay: 'Early morning (06:00) to mid-afternoon around forest lakes',
    editorialStatus: 'reviewed',
    reviewBy: '2027-05-01',
    sources: [
      { label: 'Department of Wildlife Conservation (DWC): Wilpattu', url: 'https://www.dwc.gov.lk/?page_id=72', checkedDate: '2026-11-04' },
      { label: 'Sri Lanka Tourism: Wilpattu National Park', url: 'https://www.srilanka.travel/attraction?attraction_id=172', checkedDate: '2026-11-04' },
    ],
    image: wilpattuImage,
    imageAlt: 'Quiet forest reflection across a natural villu lake in Wilpattu National Park.',
    hasDetailGuide: true,
    featuredOnHub: true,
      },
  {
    id: 'udawalawe-elephants',
    title: 'Watch wild elephants across open grasslands in Udawalawe',
    summary:
      'Explore Udawalawe’s wide reservoir basin in an open safari vehicle to observe wild Asian elephant herds foraging and bathing across scrub savannah.',
    whyDistinctive:
      'Open grassland around the Udawalawe reservoir offers clearer sightlines for observing elephant family groups than denser forest parks.',
    themeId: 'wildlife-safaris',
    themeLabel: 'Wildlife Safaris',
    subtypeId: 'elephant-habitats',
    subtypeLabel: 'Elephant Habitats & Gatherings',
    browsePath: 'wildlife',
    browsePathLabel: 'Wildlife & Nature',
    category: 'wildlife',
    categoryLabel: 'Wildlife Safaris',
    primaryDestinationId: 'udawalawe-national-park',
    primaryDestinationName: 'Udawalawe National Park',
    primaryDestinationRegion: 'Southeast & Wildlife',
    regionId: 'southeast',
    relatedDestinations: [
      { id: 'yala', name: 'Yala National Park', relationship: 'Dry-zone coastal park 90 km southeast' },
      { id: 'tangalle-core', name: 'Tangalle Coastline', relationship: 'Southern coast base 1.5 hours south' },
    ],
    allDestinationIds: ['udawalawe-national-park', 'yala', 'tangalle-core'],
    duration: '3 to 4 hours',
    effort: 'Easy',
    effortDetails: 'Seated drive over bumpy unpaved park tracks with morning sun and dust.',
    seasonSummary: 'Year-round; dry months (May to Sep) concentrate herds near water',
    seasonDetails: 'Resident elephants inhabit Udawalawe all year, while dry-season water levels draw larger numbers toward the reservoir shoreline.',
    essentialCaveat: 'Wild sightings are never guaranteed. Keep respectful distance and ask drivers never to crowd, block, or chase animals.',
    detailedGuidance: 'Department of Wildlife Conservation (DWC) rules prohibit feeding animals, shouting, or leaving marked tracks. Combine a morning drive with an educational observation visit to the nearby Elephant Transit Home viewing platform.',
    keyPrep: ['Sun hat and dust scarf', 'Drinking water', '06:00 or 15:00 departure'],
    practicalTags: ['Open grassland', 'Respectful distance', 'Year-round'],
    bestTimeOfDay: 'Early morning (06:00 to 09:30) or late afternoon (15:00 to 18:00)',
    editorialStatus: 'reviewed',
    reviewBy: '2027-05-01',
    sources: [
      { label: 'Department of Wildlife Conservation (DWC): Protected Areas', url: 'https://www.dwc.gov.lk/?page_id=72', checkedDate: '2026-11-04' },
      { label: 'Sri Lanka Tourism: Wild Safaris', url: 'https://www.srilanka.travel/wild-safaris', checkedDate: '2026-11-04' },
    ],
    image: elephantSafariImage,
    imageAlt: 'A wild Asian elephant standing near a freshwater pool in Udawalawe National Park.',
    hasDetailGuide: true,
    featuredOnHub: true,
      },
  {
    id: 'minneriya-kaudulla-gathering',
    title: 'Follow the seasonal elephant gathering across Minneriya and Kaudulla',
    summary:
      'Observe wild elephant herds congregating along the receding grassy shores of ancient Cultural Triangle reservoirs during the dry months.',
    whyDistinctive:
      'Herd movements shift dynamically between Minneriya, Kaudulla, and Hurulu Eco Park depending on rainfall and tank water levels.',
    themeId: 'wildlife-safaris',
    themeLabel: 'Wildlife Safaris',
    subtypeId: 'elephant-habitats',
    subtypeLabel: 'Elephant Habitats & Gatherings',
    browsePath: 'wildlife',
    browsePathLabel: 'Wildlife & Nature',
    category: 'wildlife',
    categoryLabel: 'Wildlife Safaris',
    primaryDestinationId: 'minneriya-national-park',
    primaryDestinationName: 'Minneriya National Park',
    primaryDestinationRegion: 'Cultural Triangle',
    regionId: 'cultural-triangle',
    relatedDestinations: [
      { id: 'kaudulla-national-park', name: 'Kaudulla National Park', relationship: 'Adjacent corridor park when Minneriya water rises' },
      { id: 'sigiriya', name: 'Sigiriya Rock Fortress', relationship: 'Primary Cultural Triangle base 30 minutes away' },
      { id: 'polonnaruwa', name: 'Polonnaruwa Ancient City', relationship: 'Medieval capital 40 minutes east' },
    ],
    allDestinationIds: ['minneriya-national-park', 'kaudulla-national-park', 'sigiriya', 'polonnaruwa'],
    duration: '3.5 hours',
    effort: 'Easy',
    effortDetails: 'Afternoon 4x4 safari along open reservoir grasslands and forest tracks.',
    seasonSummary: 'Roughly Jul to Oct dry season; exact park choice shifts with water levels',
    seasonDetails: 'As dry-zone rivers recede between July and October, fresh grass sprouts on exposed tank beds. Heavy rain disperses herds back into surrounding forests.',
    essentialCaveat: 'Which park holds the main herds changes week by week with tank levels. Confirm locally on the day before buying entry permits.',
    detailedGuidance: 'Afternoon drives (from 14:30) match the hours when herds emerge from forest shade to drink and graze by the reservoir.',
    keyPrep: ['Confirm active park locally', 'Afternoon sun protection', 'Binoculars'],
    practicalTags: ['Dry-season gathering', 'Shifts by water level', 'Afternoon best'],
    bestTimeOfDay: 'Late afternoon (14:30 to 18:00) as herds emerge to the tank edge',
    editorialStatus: 'reviewed',
    reviewBy: '2027-06-01',
    sources: [
      { label: 'Sri Lanka Tourism: Minneriya National Park', url: 'https://www.srilanka.travel/attraction?attraction_id=173', checkedDate: '2026-11-04' },
      { label: 'SLTDA Visitor Management Report (Minneriya, Kaudulla & Hurulu)', url: 'https://sltda.gov.lk/storage/common_media/Final%20Report%20VM%20Sri%20Lanka%20-%20Final%20Dec%202025%20-%20Vol%201.pdf', checkedDate: '2026-11-04' },
    ],
    image: minneriyaImage,
    imageAlt: 'Wild Asian elephants grazing on the grassy shores of Minneriya reservoir.',
    hasDetailGuide: true,
    featuredOnHub: true,
      },
  {
    id: 'gal-oya-boat-safari',
    title: 'Explore Gal Oya by boat across Senanayake Samudraya',
    summary:
      'Travel by small motorboat across island-dotted reservoir waters in Gal Oya National Park to watch birds, crocodiles, and elephants along the shore.',
    whyDistinctive:
      'Gal Oya is the only national park in Sri Lanka where permitted boat safaris operate across a major inland reservoir.',
    themeId: 'wildlife-safaris',
    themeLabel: 'Wildlife Safaris',
    subtypeId: 'wetland-boat',
    subtypeLabel: 'Wetland & Boat Safaris',
    browsePath: 'wildlife',
    browsePathLabel: 'Wildlife & Nature',
    category: 'wildlife',
    categoryLabel: 'Wildlife Safaris',
    primaryDestinationId: 'gal-oya-national-park',
    primaryDestinationName: 'Gal Oya National Park',
    primaryDestinationRegion: 'Southeast & Wildlife',
    regionId: 'southeast',
    relatedDestinations: [
      { id: 'senanayake-samudraya', name: 'Senanayake Samudraya', relationship: 'Reservoir within Gal Oya where boat trips operate' },
    ],
    allDestinationIds: ['gal-oya-national-park', 'senanayake-samudraya'],
    duration: '2.5 to 3.5 hours',
    effort: 'Easy',
    effortDetails: 'Seated boat excursion; life jackets required.',
    seasonSummary: 'Mar to Jul drier window; boat access depends on reservoir water levels',
    seasonDetails: 'Dry months often bring elephants to the shoreline and islands, though swimming elephants are rare and never guaranteed.',
    essentialCaveat: 'Boat capacity and DWC permits are limited and must be arranged in advance. Maintain wide clearance from any swimming animals.',
    detailedGuidance: 'Verify current DWC boat operation status, life jacket provision, and wildlife approach distances before travel.',
    keyPrep: ['Advance DWC boat permit', 'Sun protection', 'Life jacket worn on board'],
    practicalTags: ['Boat-based safari', 'Advance permit needed', 'Remote southeast park'],
    bestTimeOfDay: 'Early morning (06:00) or late afternoon (15:30) for calm reservoir water',
    editorialStatus: 'reviewed',
    reviewBy: '2027-03-01',
    sources: [
      { label: 'Department of Wildlife Conservation (DWC): Gal Oya', url: 'https://www.dwc.gov.lk/?page_id=72', checkedDate: '2026-11-04' },
    ],
    image: galOyaImage,
    imageAlt: 'Forested islands and calm reservoir waters at Gal Oya National Park.',
    hasDetailGuide: true,
    featuredOnHub: true,
      },
  {
    id: 'wasgamuwa-wildlife-safari',
    title: 'Watch elephants and riverine wildlife along the Mahaweli in Wasgamuwa',
    summary:
      'Traverse riverine forests and grasslands bordered by the Mahaweli and Amban rivers to observe resident elephant herds and sloth bears with minimal safari traffic.',
    whyDistinctive:
      'Wasgamuwa features rich riverine forest bordered by two major rivers, supporting large elephant populations and one of the highest recorded sloth bear densities on the island.',
    themeId: 'wildlife-safaris',
    themeLabel: 'Wildlife Safaris',
    subtypeId: 'elephant-habitats',
    subtypeLabel: 'Elephant Habitats & Gatherings',
    browsePath: 'wildlife',
    browsePathLabel: 'Wildlife & Nature',
    category: 'wildlife',
    categoryLabel: 'Wildlife Safaris',
    primaryDestinationId: 'polonnaruwa',
    primaryDestinationName: 'Wasgamuwa National Park (near Polonnaruwa)',
    primaryDestinationRegion: 'Cultural Triangle',
    regionId: 'cultural-triangle',
    relatedDestinations: [
      { id: 'maduru-oya-national-park', name: 'Maduru Oya National Park', relationship: 'Adjacent dry-zone park 50 km east' },
      { id: 'somawathiya-national-park', name: 'Somawathiya National Park', relationship: 'Riverine wildlife park along the lower Mahaweli' },
      { id: 'kandy', name: 'Kandy', relationship: 'Central highland base via Hasalaka road' },
    ],
    allDestinationIds: ['polonnaruwa', 'maduru-oya-national-park', 'somawathiya-national-park', 'kandy'],
    duration: '3.5 to 4.5 hours',
    effort: 'Easy',
    effortDetails: 'Seated 4x4 drive along unpaved forest tracks and river margins.',
    seasonSummary: 'Dry season May to Sep best; accessible year-round outside heavy monsoon rains',
    seasonDetails: 'During the dry months, elephants gather along the riverbanks and marshy riverine grasslands (villus), providing exceptional observation.',
    essentialCaveat: 'Verify current track conditions and local jeep availability locally before departure, as Wasgamuwa has fewer commercial safari operators than Yala.',
    detailedGuidance: 'Access is easiest from Polonnaruwa or via Hasalaka from Kandy. Early morning safaris allow clear views along the Amban River edge.',
    keyPrep: ['Pre-arranged 4x4 safari jeep', 'Binoculars', 'Drinking water and sun protection'],
    practicalTags: ['Riverine forest', 'High sloth bear density', 'Low visitor traffic'],
    bestTimeOfDay: 'Early morning (06:00 to 09:30) or late afternoon (15:00 to 18:00)',
    editorialStatus: 'reviewed',
    reviewBy: '2027-04-01',
    sources: [
      { label: 'Department of Wildlife Conservation (DWC): Wasgamuwa', url: 'https://www.dwc.gov.lk/?page_id=72', checkedDate: '2026-11-04' },
      { label: 'Sri Lanka Tourism: Protected Areas', url: 'https://www.srilanka.travel/wild-safaris', checkedDate: '2026-11-04' },
    ],
    image: wildElephantsEntranceImage,
    imageAlt: 'Wild elephants moving through riverine forest and scrub in Wasgamuwa National Park.',
    hasDetailGuide: true,
    featuredOnHub: false,
      },
  {
    id: 'maduru-oya-wildlife-safari',
    title: 'Discover reservoir wildlife and ancient sluice heritage at Maduru Oya',
    summary:
      'Visit a less-traveled eastern border park combining early historical sluice architecture with wide reservoir waters and dry-zone elephant herds.',
    whyDistinctive:
      'Maduru Oya features an ancient pre-Christian earthen sluice rediscovered during dam construction, set within an expansive wildlife sanctuary bordering Vedda communities.',
    themeId: 'wildlife-safaris',
    themeLabel: 'Wildlife Safaris',
    subtypeId: 'dry-zone-forest',
    subtypeLabel: 'Leopard & Dry-Zone Forest',
    browsePath: 'wildlife',
    browsePathLabel: 'Wildlife & Nature',
    category: 'wildlife',
    categoryLabel: 'Wildlife Safaris',
    primaryDestinationId: 'maduru-oya-national-park',
    primaryDestinationName: 'Maduru Oya National Park',
    primaryDestinationRegion: 'Cultural Triangle',
    regionId: 'cultural-triangle',
    relatedDestinations: [
      { id: 'polonnaruwa', name: 'Polonnaruwa Ancient City', relationship: 'Nearest major Cultural Triangle hub 50 km northwest' },
      { id: 'dambana-indigenous-heritage', name: 'Dambana Vedda Heritage', relationship: 'Bordering ancestral forest sanctuary' },
    ],
    allDestinationIds: ['maduru-oya-national-park', 'polonnaruwa', 'dambana-indigenous-heritage'],
    duration: '3 to 4 hours',
    effort: 'Easy',
    effortDetails: 'Seated 4x4 drive on rough dry-zone park tracks and reservoir bunds.',
    seasonSummary: 'Dry months (May to Sep); verify current gate access locally',
    seasonDetails: 'Access roads and track conditions vary after northeast monsoon rains. May to September provides stable track conditions and higher animal concentrations near the reservoir.',
    essentialCaveat: 'Confirm active local 4x4 operator coverage, gate hours, and track conditions before adding to an itinerary, as facilities are minimal.',
    detailedGuidance: 'Best suited for independent travelers with a dedicated safari vehicle arranged from Polonnaruwa or Mahiyanganaya.',
    keyPrep: ['Pre-arranged 4x4 with experienced driver', 'Carry drinking water and rations', 'Confirm gate status locally'],
    practicalTags: ['Off-route park', 'Ancient sluice heritage', 'Reservoir wildlife'],
    bestTimeOfDay: 'Early morning (06:00 to 09:00) or late afternoon (15:00 to 17:30)',
    editorialStatus: 'proposed',
    verificationNote: 'Requires confirmation of current DWC visitor gate status and vetted local safari jeep operators.',
    reviewBy: '2027-02-01',
    sources: [
      { label: 'Department of Wildlife Conservation (DWC): Maduru Oya', url: 'https://www.dwc.gov.lk/?page_id=72', checkedDate: '2026-11-04' },
    ],
    image: maduruOyaImage,
    imageAlt: 'An elephant walking across dry grassland near the reservoir at Maduru Oya National Park.',
    hasDetailGuide: true,
    featuredOnHub: false,
      },
  {
    id: 'bundala-ramsar-coastal-safari',
    title: 'Explore coastal dunes, lagoons, and waterbirds in Bundala',
    summary:
      'Drive between sand dunes, salt pans, and coastal brackish lagoons in Sri Lanka’s first Ramsar wetland to observe migratory waterbirds, mugger crocodiles, and resident wildlife.',
    whyDistinctive:
      'Bundala combines international Ramsar wetland status with coastal scrub and sand dunes, hosting over 200 bird species alongside wild elephants, jackals, and grey langurs without Yala’s vehicle crowds.',
    themeId: 'wildlife-safaris',
    themeLabel: 'Wildlife Safaris',
    subtypeId: 'wetland-boat',
    subtypeLabel: 'Wetland & Coastal Safaris',
    browsePath: 'wildlife',
    browsePathLabel: 'Wildlife & Nature',
    category: 'wildlife',
    categoryLabel: 'Wildlife Safaris',
    primaryDestinationId: 'bundala-national-park',
    primaryDestinationName: 'Bundala National Park',
    primaryDestinationRegion: 'Southeast & Wildlife',
    regionId: 'southeast',
    relatedDestinations: [
      { id: 'yala', name: 'Yala National Park', relationship: 'Premier predator safari park 45 km northeast' },
      { id: 'tangalle-core', name: 'Tangalle Coastline', relationship: 'Southern coastal base 1 hour west' },
    ],
    allDestinationIds: ['bundala-national-park', 'yala', 'tangalle-core'],
    duration: '3.5 to 4.5 hours',
    effort: 'Easy',
    effortDetails: 'Seated 4x4 vehicle safari along lagoon berms, coastal tracks, and sand dunes.',
    seasonSummary: 'Sep to Mar northern winter migratory peak; open year-round for resident fauna',
    seasonDetails: 'Northern migratory waterbirds arrive between September and March, while resident wetland birds, wild elephants, and reptiles inhabit the lagoons year-round.',
    essentialCaveat: 'Bundala is primarily a wetland ecosystem; vehicle safaris focus on waterbirds, crocodiles, and dry-zone mammals rather than guaranteed leopard sightings.',
    detailedGuidance: 'Hire an accredited park guide at the entrance who can identify subtle waders and shoreline species across the five shallow lagoons.',
    keyPrep: ['Field spotting scope or high-magnification binoculars', 'Sun hat and polarising sunglasses', 'Bird field checklist'],
    practicalTags: ['Ramsar wetland', 'Coastal sand dunes', 'Migratory waterbirds'],
    bestTimeOfDay: 'Early morning (06:00 to 09:30) for active wetland feeding and soft lagoon light',
    editorialStatus: 'reviewed',
    reviewBy: '2027-05-01',
    sources: [
      { label: 'Department of Wildlife Conservation (DWC): Bundala National Park', url: 'https://www.dwc.gov.lk/?page_id=72', checkedDate: '2026-11-04' },
      { label: 'Ramsar Sites Information Service: Bundala', url: 'https://rsis.ramsar.org/ris/503', checkedDate: '2026-11-04' },
    ],
    image: bundalaImage,
    imageAlt: 'Coastal lagoon and wetland bird habitat in Bundala National Park.',
    hasDetailGuide: true,
    featuredOnHub: true,
      },
  {
    id: 'kumana-coastal-safari',
    title: 'Safari through coastal lagoons and elephant corridors in Kumana',
    summary:
      'Explore Yala East’s peaceful coastal lagoons, sand-dune tracks, and mangrove swamp to observe wild elephants, waterbird heronries, and dry-zone predators.',
    whyDistinctive:
      'Formerly known as Yala East, Kumana pairs a tranquil coastal safari with Kumana Villu, a 200-hectare mangrove swamp famed for massive nesting colonies of pelicans, storks, and herons.',
    themeId: 'wildlife-safaris',
    themeLabel: 'Wildlife Safaris',
    subtypeId: 'wetland-boat',
    subtypeLabel: 'Wetland & Coastal Safaris',
    browsePath: 'wildlife',
    browsePathLabel: 'Wildlife & Nature',
    category: 'wildlife',
    categoryLabel: 'Wildlife Safaris',
    primaryDestinationId: 'kumana-national-park',
    primaryDestinationName: 'Kumana National Park',
    primaryDestinationRegion: 'East Coast & Southeast',
    regionId: 'east-coast',
    relatedDestinations: [
      { id: 'arugam-bay', name: 'Arugam Bay', relationship: 'Surfing town and primary safari base 45 minutes north' },
      { id: 'yala', name: 'Yala National Park', relationship: 'Western Yala block across Kumbukkan Oya' },
    ],
    allDestinationIds: ['kumana-national-park', 'arugam-bay', 'yala'],
    duration: '4 to 5 hours',
    effort: 'Easy',
    effortDetails: 'Seated 4x4 safari along coastal scrub roads and lagoon embankments.',
    seasonSummary: 'Apr to Jul peak breeding and waterbird nesting; dry season safari best May to Sep',
    seasonDetails: 'Mangrove trees around Kumana Villu host thousands of nesting waterbirds from April to July, while dry months bring elephants, leopards, and bears to lagoon waterholes.',
    essentialCaveat: 'Accessed via Panama village south of Arugam Bay. Respect wildlife nesting sanctuaries and avoid loud noise near the villu lookout.',
    detailedGuidance: 'Combine an afternoon safari with an overnight stay in Arugam Bay or Panama. The drive crosses scenic coastal bridges and sand-dune tracks.',
    keyPrep: ['Binoculars and telephoto lens', 'Dust protection', 'Enter via Panama gate by 14:30'],
    practicalTags: ['Coastal lagoon safari', 'Mangrove bird sanctuary', 'Arugam Bay base'],
    bestTimeOfDay: 'Afternoon (14:30 to 18:00) as golden light illuminates Kumana Villu',
    editorialStatus: 'reviewed',
    reviewBy: '2027-05-01',
    sources: [
      { label: 'Department of Wildlife Conservation (DWC): Kumana National Park', url: 'https://www.dwc.gov.lk/?page_id=72', checkedDate: '2026-11-04' },
      { label: 'Sri Lanka Tourism: Kumana', url: 'https://www.srilanka.travel/wild-safaris', checkedDate: '2026-11-04' },
    ],
    image: kumanaImage,
    imageAlt: 'Coastal lagoon and mangrove wetland in Kumana National Park.',
    hasDetailGuide: true,
    featuredOnHub: true,
      },

  // ============================================================================
  // 02. MARINE WILDLIFE & OCEAN ENCOUNTERS
  // ============================================================================
  {
    id: 'mirissa-whale-watching',
    title: 'Join a seasonal whale-watching departure from Mirissa or Trincomalee',
    summary:
      'Head offshore toward the continental shelf to scan for blue whales, sperm whales, and spinner dolphins during each coast’s calm-sea window.',
    whyDistinctive:
      'Deep submarine canyons close to shore allow half-day boat observations on the south coast (Dec to Mar) and east coast (Mar to Jul).',
    themeId: 'marine-wildlife',
    themeLabel: 'Marine Wildlife & Ocean Encounters',
    subtypeId: 'whales-dolphins',
    subtypeLabel: 'Whale & Dolphin Watching',
    browsePath: 'wildlife',
    browsePathLabel: 'Wildlife & Nature',
    category: 'marine-wildlife',
    categoryLabel: 'Marine Wildlife',
    primaryDestinationId: 'mirissa',
    primaryDestinationName: 'Mirissa',
    primaryDestinationRegion: 'South Coast',
    regionId: 'south-coast',
    relatedDestinations: [
      { id: 'trincomalee', name: 'Trincomalee', relationship: 'East-coast whale-watching hub (March to July)' },
      { id: 'weligama', name: 'Weligama', relationship: 'Neighbouring southern bay 6 km west' },
    ],
    allDestinationIds: ['mirissa', 'trincomalee', 'weligama'],
    duration: '3 to 5 hours',
    effort: 'Moderate',
    effortDetails: 'Open-ocean boat ride with rolling swell; seasickness precautions recommended.',
    seasonSummary: 'Mirissa: Dec to Mar · Trincomalee: Mar to Jul (sea conditions permitting)',
    seasonDetails: 'The IWC handbook notes distinct seasonal windows: south coast from December to March and northeast coast from March to July.',
    essentialCaveat: 'Sightings and sailings depend on daily wind and swell. Choose licensed vessels adhering to SLTDA and IWC 100m distance rules; swimming with whales is prohibited.',
    detailedGuidance: 'Never board overloaded vessels or boats that chase or encircle pods. Morning departures leave around 06:00 when winds are lightest.',
    keyPrep: ['Motion sickness prevention', 'Windbreaker and sun hat', 'Verify SLTDA license'],
    practicalTags: ['Regulated boat distance', 'Coast-specific season', 'No whale swimming'],
    bestTimeOfDay: 'Sunrise harbour departure (06:00 to 06:30)',
    editorialStatus: 'reviewed',
    reviewBy: '2027-04-01',
    sources: [
      { label: 'SLTDA: Whale and Dolphin Watching Guideline', url: 'https://www.sltda.gov.lk/storage/common_media/GuidelineForWhaleandDolphinWatching.pdf', checkedDate: '2026-11-04' },
      { label: 'International Whaling Commission (IWC): Sri Lanka Profile', url: 'https://wwhandbook.iwc.int/en/country-profiles/sri-lanka', checkedDate: '2026-11-04' },
    ],
    image: whaleWatchingImage,
    imageAlt: 'The tail fluke of a whale diving into deep blue ocean waters off Mirissa.',
    hasDetailGuide: true,
    featuredOnHub: true,
      },
  {
    id: 'kalpitiya-dolphin-watching',
    title: 'Watch spinner dolphin pods off the Kalpitiya peninsula',
    summary:
      'Set out by boat from the Kalpitiya coast during the calm northwest dry season to observe offshore pods of spinner dolphins.',
    whyDistinctive:
      'The waters along the Kalpitiya reef line and continental drop-off attract large seasonal gatherings of spinner dolphins.',
    themeId: 'marine-wildlife',
    themeLabel: 'Marine Wildlife & Ocean Encounters',
    subtypeId: 'whales-dolphins',
    subtypeLabel: 'Whale & Dolphin Watching',
    browsePath: 'wildlife',
    browsePathLabel: 'Wildlife & Nature',
    category: 'marine-wildlife',
    categoryLabel: 'Marine Wildlife',
    primaryDestinationId: 'kalpitiya',
    primaryDestinationName: 'Kalpitiya',
    primaryDestinationRegion: 'West & North-West',
    regionId: 'west-coast',
    relatedDestinations: [
      { id: 'kalpitiya', name: 'Bar Reef', relationship: 'Offshore marine sanctuary near Kalpitiya' },
    ],
    allDestinationIds: ['kalpitiya', 'kalpitiya'],
    duration: '2.5 to 4 hours',
    effort: 'Moderate',
    effortDetails: 'Small open motorboat trip across coastal chop; life jackets required.',
    seasonSummary: 'Roughly Nov to Apr when northwest seas are calmest',
    seasonDetails: 'Southwest monsoon winds from May to October make offshore boat trips rough along the Kalpitiya peninsula.',
    essentialCaveat: 'Select operators who cut engine speed near pods and never drive through the middle of dolphin groups.',
    detailedGuidance: 'Confirm life jacket fit, sun canopy shade, and licensed operator status prior to departure.',
    keyPrep: ['Polarized sunglasses', 'High-SPF sunscreen', 'Life jacket check'],
    practicalTags: ['Nov to Apr window', 'No pod chasing', 'Open skiff boat'],
    bestTimeOfDay: 'Early morning (06:30 to 09:30) before coastal winds build',
    editorialStatus: 'reviewed',
    reviewBy: '2027-04-01',
    sources: [
      { label: 'SLTDA: Whale and Dolphin Watching Guideline', url: 'https://www.sltda.gov.lk/storage/common_media/GuidelineForWhaleandDolphinWatching.pdf', checkedDate: '2026-11-04' },
    ],
    image: kalpitiyaImage,
    imageAlt: 'Coastal waters and sandy peninsula shoreline at Kalpitiya.',
    hasDetailGuide: true,
  },
  {
    id: 'rekawa-turtle-conservation-watch',
    title: 'Observe nesting sea turtles in situ at Rekawa',
    summary:
      'Join a quiet, ranger-guided night watch at Rekawa’s protected sanctuary beach to observe marine turtles nesting naturally without handling.',
    whyDistinctive:
      'Rekawa protects eggs in situ where they are laid rather than digging them up for tanks or staged tourist releases.',
    themeId: 'marine-wildlife',
    themeLabel: 'Marine Wildlife & Ocean Encounters',
    subtypeId: 'turtle-habitat',
    subtypeLabel: 'Sea-Turtle Habitat Observation',
    browsePath: 'wildlife',
    browsePathLabel: 'Wildlife & Nature',
    category: 'marine-wildlife',
    categoryLabel: 'Marine Wildlife',
    primaryDestinationId: 'rekawa-turtle-coast',
    primaryDestinationName: 'Rekawa Turtle Coast',
    primaryDestinationRegion: 'South Coast',
    regionId: 'south-coast',
    relatedDestinations: [
      { id: 'tangalle', name: 'Tangalle', relationship: 'Neighbouring coastal town 15 minutes west' },
      { id: 'kosgoda', name: 'Kosgoda', relationship: 'Southwest coast turtle conservation area (vet facility rules carefully)' },
    ],
    allDestinationIds: ['rekawa-turtle-coast', 'tangalle', 'kosgoda'],
    duration: '2 to 3 hours',
    effort: 'Easy',
    effortDetails: 'Quiet waiting and short walking on soft sand in the dark.',
    seasonSummary: 'Year-round nesting; peak numbers often Jan to Jul',
    seasonDetails: 'Five marine turtle species visit southern beaches throughout the year, with green turtles most frequent.',
    essentialCaveat: 'Wild nesting is never guaranteed on a given night. White flashlights, camera flashes, loud talking, and touching turtles or hatchlings are strictly forbidden.',
    detailedGuidance: 'Avoid commercial roadside hatcheries that allow visitors to hold hatchlings in water tanks or stage daytime ocean releases, which harm hatchling survival.',
    keyPrep: ['Dark clothing', 'No flash photography', 'Patience during quiet beach wait'],
    practicalTags: ['In-situ conservation', 'Zero touching', 'Red-light protocol'],
    bestTimeOfDay: 'Evening conservation watch (20:30 to 23:30)',
    editorialStatus: 'reviewed',
    reviewBy: '2027-05-01',
    sources: [
      { label: 'Department of Wildlife Conservation (DWC): Rekawa Sanctuary', url: 'https://www.dwc.gov.lk/?page_id=72', checkedDate: '2026-11-04' },
    ],
    image: rekawaImage,
    imageAlt: 'Protected sandy shoreline at Rekawa Turtle Coast near Tangalle.',
    hasDetailGuide: true,
  },
  {
    id: 'madu-ganga-mangrove-wildlife',
    title: 'Explore mangrove islands and estuary wildlife by boat',
    summary:
      'Glide through the sheltered mangrove channels of Madu Ganga or Bentota River to spot kingfishers, water monitors, and estuarine plant life.',
    whyDistinctive:
      'Ramsar-listed coastal wetlands preserve tangled rhizophora mangrove roots and small cinnamon-growing islets.',
    themeId: 'marine-wildlife',
    themeLabel: 'Marine Wildlife & Ocean Encounters',
    subtypeId: 'estuary-mangrove',
    subtypeLabel: 'Mangrove & Estuary Wildlife',
    browsePath: 'wildlife',
    browsePathLabel: 'Wildlife & Nature',
    category: 'marine-wildlife',
    categoryLabel: 'Marine Wildlife',
    primaryDestinationId: 'madu-ganga',
    primaryDestinationName: 'Madu Ganga',
    primaryDestinationRegion: 'West & North-West',
    regionId: 'west-coast',
    relatedDestinations: [
      { id: 'bentota', name: 'Bentota', relationship: 'Resort coast and river estuary 20 km north' },
      { id: 'negombo', name: 'Negombo', relationship: 'Alternative lagoon boat habitat near Colombo airport' },
    ],
    allDestinationIds: ['madu-ganga', 'bentota', 'negombo'],
    duration: '1.5 to 2 hours',
    effort: 'Easy',
    effortDetails: 'Seated boat ride on sheltered lagoon waters.',
    seasonSummary: 'Year-round; clearest mornings Dec to Apr',
    seasonDetails: 'Sheltered estuary waters remain navigable in most months except during heavy monsoon downpours.',
    essentialCaveat: 'Decline boat drivers who offer captive baby monkeys, baby crocodiles, or high-pressure spice stalls along the river.',
    detailedGuidance: 'Ask your boatman to go slowly through quiet side channels early in the morning for birdlife and natural mangrove ecology.',
    keyPrep: ['Insect repellent', 'Sun hat', 'Request wildlife-only route'],
    practicalTags: ['Ramsar wetland', 'Refuse captive animals', 'Calm water'],
    bestTimeOfDay: 'Early morning (07:00 to 09:00) for bird activity and quiet waterways',
    editorialStatus: 'reviewed',
    reviewBy: '2027-05-01',
    sources: [
      { label: 'Department of Wildlife Conservation (DWC)', url: 'https://www.dwc.gov.lk/?page_id=72', checkedDate: '2026-11-04' },
    ],
    image: maduGangaImage,
    imageAlt: 'Mangrove-lined waterway and calm reflections on the Madu Ganga estuary.',
    hasDetailGuide: true,
  },

  // ============================================================================
  // 03. BIRDWATCHING & BIODIVERSITY
  // ============================================================================
  {
    id: 'sinharaja-endemic-birding',
    title: 'Walk Sinharaja rainforest for mixed-species endemic bird flocks',
    summary:
      'Follow a forest naturalist along wet-zone trails in UNESCO-listed Sinharaja to observe Sri Lanka blue magpies, red-faced malkohas, and feeding flocks.',
    whyDistinctive:
      'Sinharaja is the island’s premier lowland primary rainforest, where up to 40 bird species travel together in multi-tier canopy feeding waves.',
    themeId: 'birdwatching-biodiversity',
    themeLabel: 'Birdwatching & Biodiversity',
    subtypeId: 'rainforest-endemics',
    subtypeLabel: 'Rainforest Endemic Birding',
    browsePath: 'wildlife',
    browsePathLabel: 'Wildlife & Nature',
    category: 'wildlife',
    categoryLabel: 'Birdwatching & Biodiversity',
    primaryDestinationId: 'sinharaja-forest-reserve',
    primaryDestinationName: 'Sinharaja Forest Reserve',
    primaryDestinationRegion: 'Central Highlands & Wet Zone',
    regionId: 'hill-country',
    relatedDestinations: [
      { id: 'kitulgala', name: 'Kitulgala', relationship: 'Lowland wet-zone birding corridor along the Kelani River' },
    ],
    allDestinationIds: ['sinharaja-forest-reserve', 'kitulgala'],
    duration: '3 to 5 hours',
    effort: 'Moderate',
    effortDetails: 'Humid, uneven forest trails with mud and terrestrial leeches.',
    seasonSummary: 'Drier windows Jan to Mar and Aug to Sep; rain can fall in any month',
    seasonDetails: 'Because Sinharaja is a tropical rainforest, brief showers occur year-round; early mornings between January and March are driest.',
    essentialCaveat: 'Entry requires an official Forest Department ticket and mandatory forest guide. Stay on designated trails and never handle amphibians or insects.',
    detailedGuidance: 'Wear closed shoes with canvas leech socks, bring a dry bag for cameras and binoculars, and start at 06:30 when flocks are most vocal.',
    keyPrep: ['Leech socks and closed boots', 'Rain poncho & camera dry bag', 'Binoculars'],
    practicalTags: ['Mandatory forest guide', 'UNESCO rainforest', 'Leech protection'],
    bestTimeOfDay: 'Early morning (06:30 to 10:30) when mixed feeding flocks are active',
    editorialStatus: 'reviewed',
    reviewBy: '2027-04-01',
    sources: [
      { label: 'UNESCO World Heritage Centre: Sinharaja Forest Reserve', url: 'https://whc.unesco.org/en/list/405/', checkedDate: '2026-11-04' },
      { label: 'Sri Lanka Tourism: Wildlife & Birding', url: 'https://www.srilanka.travel/wildlife', checkedDate: '2026-11-04' },
    ],
    image: sinharajaImage,
    imageAlt: 'Lush tropical rainforest canopy at Sinharaja Forest Reserve.',
    hasDetailGuide: true,
    featuredOnHub: true,
  },
  {
    id: 'bundala-kumana-wetland-birding',
    title: 'Explore coastal lagoons and migratory birds at Bundala and Kumana',
    summary:
      'Scan brackish lagoons, salt pans, and mangrove swamps for painted storks, pelicans, bee-eaters, and winter migratory shorebirds.',
    whyDistinctive:
      'Bundala’s Ramsar coastal lagoons and Kumana’s mangrove swamp (Kumana Villu) anchor the island’s southeastern flyway.',
    themeId: 'birdwatching-biodiversity',
    themeLabel: 'Birdwatching & Biodiversity',
    subtypeId: 'wetland-migratory',
    subtypeLabel: 'Wetland & Migratory Sanctuaries',
    browsePath: 'wildlife',
    browsePathLabel: 'Wildlife & Nature',
    category: 'wildlife',
    categoryLabel: 'Birdwatching & Biodiversity',
    primaryDestinationId: 'bundala-national-park',
    primaryDestinationName: 'Bundala National Park',
    primaryDestinationRegion: 'Southeast & Wildlife',
    regionId: 'southeast',
    relatedDestinations: [
      { id: 'kumana-national-park', name: 'Kumana National Park', relationship: 'Eastern sanctuary famed for April to July nesting heronries' },
      { id: 'anawilundawa-wetland-sanctuary', name: 'Anawilundawa Wetland Sanctuary', relationship: 'Northwest Ramsar tank sanctuary between Negombo and Kalpitiya' },
    ],
    allDestinationIds: ['bundala-national-park', 'kumana-national-park', 'anawilundawa-wetland-sanctuary'],
    duration: '3 to 4 hours',
    effort: 'Easy',
    effortDetails: 'Seated safari vehicle circuit around shallow coastal lagoons.',
    seasonSummary: 'Migratory season Oct to Mar (Bundala) · Nesting season Apr to Jul (Kumana)',
    seasonDetails: 'Northern winter migrants arrive from October to March, while Kumana’s swamp trees host large waterbird nesting colonies from April to July.',
    essentialCaveat: 'Avoid static promises of rare species such as greater flamingos, whose presence depends on lagoon salinity and annual migration.',
    detailedGuidance: 'Bring a spotting scope or telephoto lens and ask your driver to pause quietly with the engine off near lagoon edges.',
    keyPrep: ['Binoculars or spotting lens', 'Sun hat', 'Morning departure'],
    practicalTags: ['Ramsar wetland', 'Seasonal migrants', 'Quiet observation'],
    bestTimeOfDay: 'Early morning (06:00 to 09:30) for soft light over the lagoons',
    editorialStatus: 'reviewed',
    reviewBy: '2027-04-01',
    sources: [
      { label: 'Department of Wildlife Conservation (DWC): Bundala & Kumana', url: 'https://www.dwc.gov.lk/?page_id=72', checkedDate: '2026-11-04' },
    ],
    image: bundalaImage,
    imageAlt: 'Coastal wetland and waterbird habitat at Bundala National Park.',
    hasDetailGuide: true,
  },
  {
    id: 'mannar-vankalai-northern-birding',
    title: 'Follow the northern migratory flyway across Mannar and Vankalai',
    summary:
      'Observe winter waders, terns, and waterbirds along the shallow causeway mudflats and tidal lagoons of Mannar Island.',
    whyDistinctive:
      'Mannar serves as the primary northern entry point for Central Asian Flyway birds crossing the Palk Strait into Sri Lanka.',
    themeId: 'birdwatching-biodiversity',
    themeLabel: 'Birdwatching & Biodiversity',
    subtypeId: 'wetland-migratory',
    subtypeLabel: 'Wetland & Migratory Sanctuaries',
    browsePath: 'wildlife',
    browsePathLabel: 'Wildlife & Nature',
    category: 'wildlife',
    categoryLabel: 'Birdwatching & Biodiversity',
    primaryDestinationId: 'mannar-island',
    primaryDestinationName: 'Mannar Island',
    primaryDestinationRegion: 'North & Islands',
    regionId: 'north',
    relatedDestinations: [
      { id: 'mannar-causeway-vankalai', name: 'Mannar Causeway & Vankalai Sanctuary', relationship: 'Protected wetland along the approach causeway' },
      { id: 'chundikkulam-national-park', name: 'Chundikkulam National Park', relationship: 'Northern lagoon sanctuary on the Jaffna isthmus' },
    ],
    allDestinationIds: ['mannar-island', 'mannar-causeway-vankalai', 'chundikkulam-national-park'],
    duration: '2.5 to 4 hours',
    effort: 'Easy',
    effortDetails: 'Roadside causeway stops and flat shoreline walks.',
    seasonSummary: 'Nov to Feb northern winter migratory window',
    seasonDetails: 'Bird numbers peak between November and February when northern hemisphere migrants winter on the mudflats.',
    essentialCaveat: 'Keep to roadside observation points and permitted paths so feeding waders on the mudflats are not flushed into flight.',
    detailedGuidance: 'Combine early morning birding along the Vankalai causeway with Mannar’s historic baobab tree and fort.',
    keyPrep: ['Binoculars', 'Sun protection', 'Check tide times locally'],
    practicalTags: ['Nov to Feb flyway', 'Roadside viewing', 'Northern coast'],
    bestTimeOfDay: 'Early morning (06:30 to 09:00) or late afternoon depending on tide',
    editorialStatus: 'proposed',
    verificationNote: 'Confirm local naturalist guide availability and current access points around Vankalai and Chundikkulam.',
    reviewBy: '2027-03-01',
    sources: [
      { label: 'Department of Wildlife Conservation (DWC): Vankalai Sanctuary', url: 'https://www.dwc.gov.lk/?page_id=72', checkedDate: '2026-11-04' },
    ],
    image: mannarVankalaiImage,
    imageAlt: 'Shallow lagoon waters along the Mannar Causeway and Vankalai Sanctuary.',
    hasDetailGuide: true,
  },

  // ============================================================================
  // 04. SURFING & BOARD SPORTS
  // ============================================================================
  {
    id: 'weligama-surf-lesson',
    title: 'Take a beginner surf lesson in Weligama or Hiriketiya Bay',
    summary:
      'Learn board control and wave timing in Weligama’s broad, sand-bottom crescent bay with a qualified instructor.',
    whyDistinctive:
      'Weligama’s wide, gently shelving sandy seafloor produces forgiving whitewater rollers ideal for first-time surfers.',
    themeId: 'surfing-board-sports',
    themeLabel: 'Surfing & Board Sports',
    subtypeId: 'beginner-bays',
    subtypeLabel: 'Beginner Beach Breaks',
    browsePath: 'sea-surf',
    browsePathLabel: 'Sea, Surf & Coast',
    category: 'surf',
    categoryLabel: 'Surfing & Board Sports',
    primaryDestinationId: 'weligama',
    primaryDestinationName: 'Weligama',
    primaryDestinationRegion: 'South Coast',
    regionId: 'south-coast',
    relatedDestinations: [
      { id: 'tangalle-core', name: 'Hiriketiya', relationship: 'Smaller horseshoe bay further east with beginner beach break and deeper left reef' },
      { id: 'ahangama-kabalana', name: 'Ahangama & Kabalana', relationship: 'Neighbouring surf corridor 10 km west' },
    ],
    allDestinationIds: ['weligama', 'tangalle-core', 'ahangama-kabalana'],
    duration: '1.5 to 2 hours',
    effort: 'Moderate',
    effortDetails: 'Active water session requiring basic swimming confidence and paddling stamina.',
    skillLevel: 'Beginner to Improver',
    seasonSummary: 'Cleanest swells Nov to Apr on south coast; inner-bay foam often surfable year-round',
    seasonDetails: 'Offshore morning winds and clean groundswells run from November to April, though sheltered inside corners remain usable for lessons in many months.',
    essentialCaveat: 'A beginner-friendly bay is not a safety guarantee: rip currents and wave size change with tide and swell. Book with ISA-certified or reputable local instructors.',
    detailedGuidance: 'Start with a beach safety briefing covering board handling, currents, and right-of-way rules before entering the water.',
    keyPrep: ['Rash guard or UV top', 'Zinc reef-safe sunscreen', 'Basic swimming ability'],
    practicalTags: ['Sand-bottom bay', 'Qualified instructors', 'Nov to Apr peak'],
    bestTimeOfDay: 'Early morning (06:30 to 09:30) when winds are light and water is calmer',
    editorialStatus: 'reviewed',
    reviewBy: '2027-04-01',
    sources: [
      { label: 'Sri Lanka Tourism: Adventure and Special Interest Sports', url: 'https://www.srilanka.travel/adventure_and_sports', checkedDate: '2026-11-04' },
    ],
    image: weligamaSurfImage,
    imageAlt: 'Gentle breaking waves rolling onto the wide sandy shores of Weligama Bay.',
    hasDetailGuide: true,
    featuredOnHub: true,
      },
  {
    id: 'arugam-bay-point-break',
    title: 'Surf east-coast point breaks around Arugam Bay',
    summary:
      'Ride long right-hand sand-and-reef point breaks at Arugam Bay, Whiskey Point, and Peanut Farm during the dry east-coast swell season.',
    whyDistinctive:
      'When the southwest monsoon roughens southern beaches from May to September, Arugam Bay receives clean Indian Ocean groundswells and offshore breezes.',
    themeId: 'surfing-board-sports',
    themeLabel: 'Surfing & Board Sports',
    subtypeId: 'point-reef-breaks',
    subtypeLabel: 'Point & Reef Breaks',
    browsePath: 'sea-surf',
    browsePathLabel: 'Sea, Surf & Coast',
    category: 'surf',
    categoryLabel: 'Surfing & Board Sports',
    primaryDestinationId: 'arugam-bay',
    primaryDestinationName: 'Arugam Bay',
    primaryDestinationRegion: 'East Coast',
    regionId: 'east-coast',
    relatedDestinations: [
      { id: 'arugam-bay', name: 'Pottuvil Point', relationship: 'Quieter seasonal point break north of Arugam Bay' },
      { id: 'kumana-national-park', name: 'Kumana National Park', relationship: 'Wildlife sanctuary 45 minutes south for non-surf afternoons' },
    ],
    allDestinationIds: ['arugam-bay', 'arugam-bay', 'kumana-national-park'],
    duration: '2 to 4 hours',
    effort: 'Challenging',
    effortDetails: 'Long paddle-outs, shallow reef sections at Main Point, and strong tropical sun.',
    skillLevel: 'Intermediate to Advanced at Main Point; Baby Point suits beginners',
    seasonSummary: 'Roughly Apr to Oct east-coast surf season',
    seasonDetails: 'Sri Lanka Tourism identifies April to October as Arugam Bay’s main season, with the most consistent swells between May and September.',
    essentialCaveat: 'Not all breaks are beginner-level: outer Main Point breaks over shallow reef rock. Match break choice honestly to your experience level.',
    detailedGuidance: 'Baby Point inside the bay suits longboarders and improvers, while Main Point, Pottuvil Point, and Okanda require confident wave reading and reef awareness.',
    keyPrep: ['Reef booties if needed', 'Rash guard & hydration', 'Local tuk-tuk surf guide'],
    practicalTags: ['Apr to Oct season', 'Right-hand point breaks', 'Skill-matched breaks'],
    bestTimeOfDay: 'Dawn patrol (05:45 to 09:00) or late afternoon glass-off',
    editorialStatus: 'reviewed',
    reviewBy: '2027-04-01',
    sources: [
      { label: 'Sri Lanka Tourism: Arugam Bay', url: 'https://www.srilanka.travel/attraction?attraction_id=49', checkedDate: '2026-11-04' },
      { label: 'Sri Lanka Tourism: Adventure and Sports', url: 'https://www.srilanka.travel/adventure_and_sports', checkedDate: '2026-11-04' },
    ],
    image: arugamBayImage,
    imageAlt: 'Point-break waves curling along the headland at Arugam Bay.',
    hasDetailGuide: true,
    featuredOnHub: true,
  },
  {
    id: 'ahangama-midigama-surf-circuit',
    title: 'Progress to A-frame and reef breaks in Ahangama and Midigama',
    summary:
      'Step up from beach breaks to consistent southern reef and rock breaks at Kabalana (“The Rock”), Marshmallows, and Lazy Left.',
    whyDistinctive:
      'A short 10 km coastal strip between Kabalana, Ahangama, and Midigama packs multiple reefs for improver through advanced surfers.',
    themeId: 'surfing-board-sports',
    themeLabel: 'Surfing & Board Sports',
    subtypeId: 'point-reef-breaks',
    subtypeLabel: 'Point & Reef Breaks',
    browsePath: 'sea-surf',
    browsePathLabel: 'Sea, Surf & Coast',
    category: 'surf',
    categoryLabel: 'Surfing & Board Sports',
    primaryDestinationId: 'ahangama-kabalana',
    primaryDestinationName: 'Ahangama & Kabalana',
    primaryDestinationRegion: 'South Coast',
    regionId: 'south-coast',
    relatedDestinations: [
      { id: 'weligama', name: 'Midigama', relationship: 'Reef-break village immediately east of Ahangama' },
      { id: 'weligama', name: 'Weligama', relationship: 'Sandy bay 10 minutes east' },
    ],
    allDestinationIds: ['ahangama-kabalana', 'weligama', 'weligama', 'ahangama'],
    duration: '2 to 3 hours',
    effort: 'Moderate',
    effortDetails: 'Paddling over deep-to-moderate reef channels; entry and exit timing matters.',
    skillLevel: 'Improver to Advanced (spot-dependent)',
    seasonSummary: 'Nov to Apr south-coast dry season',
    seasonDetails: 'Cleanest morning conditions run from November through April before onshore afternoon breezes pick up.',
    essentialCaveat: 'Sea urchins, shallow reef shelves, and localized currents require a local surf guide if you do not know the entry channels.',
    detailedGuidance: 'Ask a local coach to match the tide and swell height to softer spots like Marshmallows or Kabalana beach break.',
    keyPrep: ['Local break briefing', 'Ding kit & leash check', 'Reef-safe zinc'],
    practicalTags: ['South-coast reefs', 'Nov to Apr', 'Spot-specific skill'],
    bestTimeOfDay: 'Early morning (06:00 to 09:00) for glassy offshore conditions',
    editorialStatus: 'reviewed',
    reviewBy: '2027-04-01',
    sources: [
      { label: 'Sri Lanka Tourism: Adventure and Sports', url: 'https://www.srilanka.travel/adventure_and_sports', checkedDate: '2026-11-04' },
    ],
    image: ahangamaKabalanaImage,
    imageAlt: 'Waves breaking off the palm-lined coast at Kabalana and Ahangama.',
    hasDetailGuide: true,
  },
  {
    id: 'kalpitiya-kitesurfing-lagoon',
    title: 'Learn kitesurfing or windsurfing on Kalpitiya Lagoon',
    summary:
      'Practice kite control and board runs across flat, waist-deep lagoon waters powered by seasonal trade winds on the Kalpitiya peninsula.',
    whyDistinctive:
      'Flat water inside the sandbar-sheltered lagoon separates learning zones from the open Indian Ocean.',
    themeId: 'surfing-board-sports',
    themeLabel: 'Surfing & Board Sports',
    subtypeId: 'wind-paddle',
    subtypeLabel: 'Kitesurfing & Paddleboarding',
    browsePath: 'sea-surf',
    browsePathLabel: 'Sea, Surf & Coast',
    category: 'surf',
    categoryLabel: 'Surfing & Board Sports',
    primaryDestinationId: 'kalpitiya',
    primaryDestinationName: 'Kalpitiya',
    primaryDestinationRegion: 'West & North-West',
    regionId: 'west-coast',
    allDestinationIds: ['kalpitiya'],
    duration: '2 to 3 hours per session',
    effort: 'Challenging',
    effortDetails: 'Sustained wind sport requiring harness control, rescue briefing, and qualified instruction.',
    skillLevel: 'Beginner (with IKO school) to Advanced',
    seasonSummary: 'Main wind season May to Oct; secondary lighter wind window Dec to Feb',
    seasonDetails: 'Strong southwest thermal winds blow consistently across Kalpitiya from May to October, with lighter northeast winds in winter.',
    essentialCaveat: 'Kitesurfing carries high technical risk without training. Only book with verified IKO-certified schools providing rescue boat cover and helmets.',
    detailedGuidance: 'Confirm current school operation, rescue boat availability, and instructor certification before committing to multi-day lessons.',
    keyPrep: ['Verify IKO school & rescue boat', 'Helmet and impact vest', 'Sun & wind protection'],
    practicalTags: ['Flat-water lagoon', 'IKO school required', 'Seasonal wind'],
    bestTimeOfDay: 'Midday to afternoon when thermal winds stabilize',
    editorialStatus: 'proposed',
    verificationNote: 'Confirm active IKO-certified school licensing and rescue boat coverage for the upcoming wind season.',
    reviewBy: '2027-04-01',
    sources: [
      { label: 'SLTDA: Adventure Tourism Activity Descriptions', url: 'https://www.sltda.gov.lk/storage/common_media/AdventureTourismActivitiesWaterBased%26AirBasedDecsriptions.pdf', checkedDate: '2026-11-04' },
    ],
    image: kalpitiyaImage,
    imageAlt: 'Breezy lagoon and sandbar coastline at Kalpitiya.',
    hasDetailGuide: true,
  },

  // ============================================================================
  // 05. DIVING, SNORKELLING & UNDERWATER EXPLORATION
  // ============================================================================
  {
    id: 'pigeon-island-reef-snorkelling',
    title: 'Snorkel shallow coral gardens at Pigeon Island or Hikkaduwa',
    summary:
      'Float above shallow fringing reefs with a local guide to observe reef fish, parrotfish, and blacktip reef sharks in calm seasonal waters.',
    whyDistinctive:
      'Pigeon Island off Nilaveli (May to Sep) and Hikkaduwa’s coastal sanctuary (Nov to Apr) provide shore-accessible reef habitats on opposite coasts.',
    themeId: 'diving-snorkelling',
    themeLabel: 'Diving, Snorkelling & Underwater Exploration',
    subtypeId: 'reef-snorkelling',
    subtypeLabel: 'Guided Reef Snorkelling',
    browsePath: 'sea-surf',
    browsePathLabel: 'Sea, Surf & Coast',
    category: 'coast',
    categoryLabel: 'Diving & Snorkelling',
    primaryDestinationId: 'pigeon-island-national-park',
    primaryDestinationName: 'Pigeon Island National Park',
    primaryDestinationRegion: 'East Coast',
    regionId: 'east-coast',
    relatedDestinations: [
      { id: 'nilaveli', name: 'Nilaveli', relationship: 'Boat departure beach 15 minutes across the bay' },
      { id: 'hikkaduwa', name: 'Hikkaduwa', relationship: 'South-coast reef snorkelling counterpart (Nov to Apr)' },
    ],
    allDestinationIds: ['pigeon-island-national-park', 'nilaveli', 'hikkaduwa', 'trincomalee'],
    duration: '2.5 to 3.5 hours',
    effort: 'Moderate',
    effortDetails: 'Open-water swimming in masks and fins; flotation vests available.',
    seasonSummary: 'Pigeon Island: May to Sep · Hikkaduwa: Nov to Apr',
    seasonDetails: 'Calm water and clear underwater visibility depend strictly on choosing the non-monsoon coast.',
    essentialCaveat: 'Never stand on coral, touch marine turtles, or feed fish. Check current strength and DWC marine park entry rules before boarding.',
    detailedGuidance: 'Wear a UV rash guard instead of chemical sunscreen to protect sensitive coral polyps, and keep a respectful distance from resting reef sharks and turtles.',
    keyPrep: ['UV rash guard (reef-safe)', 'DWC park permit', 'Flotation vest if needed'],
    practicalTags: ['Marine national park', 'Zero coral contact', 'Coast-specific season'],
    bestTimeOfDay: 'Morning (08:00 to 11:00) for calmest surface water and overhead sunlight',
    editorialStatus: 'reviewed',
    reviewBy: '2027-04-01',
    sources: [
      { label: 'Department of Wildlife Conservation (DWC): Marine Protected Areas', url: 'https://www.dwc.gov.lk/?page_id=72', checkedDate: '2026-11-04' },
      { label: 'Sri Lanka Tourism: Adventure and Sports', url: 'https://www.srilanka.travel/adventure_and_sports', checkedDate: '2026-11-04' },
    ],
    image: pigeonIslandImage,
    imageAlt: 'Clear shallow reef waters at Pigeon Island National Park off Nilaveli.',
    hasDetailGuide: true,
    featuredOnHub: true,
  },
  {
    id: 'hikkaduwa-trincomalee-reef-dive',
    title: 'Join an introductory or certified reef dive',
    summary:
      'Explore rocky underwater pinnacles, coral slopes, and schools of snapper off Unawatuna and Hikkaduwa in winter or Trincomalee in summer.',
    whyDistinctive:
      'Dual-coast dive operations allow certified divers and PADI/SSI discovery beginners to find calm dive sites throughout the year.',
    themeId: 'diving-snorkelling',
    themeLabel: 'Diving, Snorkelling & Underwater Exploration',
    subtypeId: 'scuba-reefs',
    subtypeLabel: 'Certified & Discovery Reef Dives',
    browsePath: 'sea-surf',
    browsePathLabel: 'Sea, Surf & Coast',
    category: 'coast',
    categoryLabel: 'Diving & Snorkelling',
    primaryDestinationId: 'hikkaduwa',
    primaryDestinationName: 'Hikkaduwa',
    primaryDestinationRegion: 'South Coast',
    regionId: 'south-coast',
    relatedDestinations: [
      { id: 'unawatuna', name: 'Unawatuna', relationship: 'Sheltered southern bay with nearby rock and reef dive sites' },
      { id: 'trincomalee', name: 'Trincomalee', relationship: 'East-coast diving hub from May to September' },
    ],
    allDestinationIds: ['hikkaduwa', 'unawatuna', 'trincomalee', 'nilaveli'],
    duration: '3 to 4 hours',
    effort: 'Moderate',
    effortDetails: 'Boat entry and scuba diving subject to medical fitness and dive depth limits.',
    skillLevel: 'Discovery beginner (instructor-led) or Open Water certified',
    seasonSummary: 'South/West: Nov to Apr · East: May to Sep',
    seasonDetails: 'Dive centers migrate or close during their coast’s rough monsoon months.',
    essentialCaveat: 'Verify active PADI/SSI registration, compressor maintenance, medical questionnaires, and no-fly surface intervals (at least 18 to 24 hours before flights).',
    detailedGuidance: 'Maintain neutral buoyancy well above the reef substrate and never touch underwater flora or fauna.',
    keyPrep: ['Certification card & logbook', 'Medical fitness check', '24-hour pre-flight buffer'],
    practicalTags: ['PADI/SSI centers', 'No-fly buffer required', 'Seasonal visibility'],
    bestTimeOfDay: 'Morning two-tank or discovery boat departure (08:00 to 12:30)',
    editorialStatus: 'reviewed',
    reviewBy: '2027-04-01',
    sources: [
      { label: 'SLTDA: Adventure Tourism Activity Descriptions', url: 'https://www.sltda.gov.lk/storage/common_media/AdventureTourismActivitiesWaterBased%26AirBasedDecsriptions.pdf', checkedDate: '2026-11-04' },
    ],
    image: hikkaduwaImage,
    imageAlt: 'Coastal reef waters at Hikkaduwa on Sri Lanka’s southern coast.',
    hasDetailGuide: true,
  },
  {
    id: 'coastal-wreck-diving',
    title: 'Dive historic offshore shipwrecks with a certified guide',
    summary:
      'Descend to coral-encrusted cargo and naval wrecks off Colombo, Galle, Trincomalee, or Batticaloa when sea conditions and certifications align.',
    whyDistinctive:
      'Sri Lanka’s position along historic Indian Ocean shipping lanes has left submerged wrecks that now act as artificial reefs.',
    themeId: 'diving-snorkelling',
    themeLabel: 'Diving, Snorkelling & Underwater Exploration',
    subtypeId: 'wreck-diving',
    subtypeLabel: 'Seasonal Wreck Diving',
    browsePath: 'sea-surf',
    browsePathLabel: 'Sea, Surf & Coast',
    category: 'coast',
    categoryLabel: 'Diving & Snorkelling',
    primaryDestinationId: 'trincomalee',
    primaryDestinationName: 'Trincomalee',
    primaryDestinationRegion: 'East Coast',
    regionId: 'east-coast',
    relatedDestinations: [
      { id: 'colombo', name: 'Colombo', relationship: 'West-coast wreck dive sites (Nov to Mar)' },
      { id: 'galle', name: 'Galle Fort', relationship: 'Southern maritime heritage and dive base' },
    ],
    allDestinationIds: ['trincomalee', 'colombo', 'galle', 'batticaloa'],
    duration: '3 to 5 hours',
    effort: 'Challenging',
    effortDetails: 'Deeper offshore dives often experiencing currents and requiring Advanced Open Water certification.',
    skillLevel: 'Advanced Open Water / Wreck Certified (site-dependent)',
    seasonSummary: 'West/South: Nov to Mar · East: May to Sep',
    seasonDetails: 'Wreck access depends on low swell, underwater visibility, and naval/harbour clearance.',
    essentialCaveat: 'Research-needed per site: do not assume a named wreck is accessible without confirming depth requirements, current conditions, and permits with a licensed dive center.',
    detailedGuidance: 'Avoid wreck penetration without specialized training and redundant air/lighting equipment.',
    keyPrep: ['Advanced certification', 'Confirm site access locally', 'Dive computer'],
    practicalTags: ['Advanced certification', 'Site verification needed'],
    bestTimeOfDay: 'Morning offshore departure',
    editorialStatus: 'research-needed',
    verificationNote: 'Specific wreck accessibility, depth prerequisites, and local naval clearances must be confirmed per dive center.',
    reviewBy: '2027-03-01',
    sources: [
      { label: 'SLTDA: Water-Based Adventure Guidelines', url: 'https://www.sltda.gov.lk/en/register-with-us', checkedDate: '2026-11-04' },
    ],
    image: unawatunaImage,
    imageAlt: 'Deep blue coastal waters and headland near Unawatuna and Galle.',
    hasDetailGuide: true,
  },

  // ============================================================================
  // 06. HIKING, TREKKING & MOUNTAIN TRAILS
  // ============================================================================
  {
    id: 'ella-viewpoint-hike',
    title: 'Walk to a viewpoint above Ella Gap',
    summary:
      'Follow footpaths through tea terraces and pine woods to rocky lookouts above Ella Gap, choosing between gentle Little Adam’s Peak or steeper Ella Rock.',
    whyDistinctive:
      'Two neighbouring ridges in Ella offer a clear choice between an easy 90-minute graded walk and a demanding 3.5-hour climb.',
    themeId: 'hiking-mountain-trails',
    themeLabel: 'Hiking, Trekking & Mountain Trails',
    subtypeId: 'viewpoint-walks',
    subtypeLabel: 'Short Viewpoint & Ridge Walks',
    browsePath: 'highlands',
    browsePathLabel: 'Highlands, Trails & Tea',
    category: 'hiking',
    categoryLabel: 'Hiking & Mountain Trails',
    primaryDestinationId: 'ella',
    primaryDestinationName: 'Ella',
    primaryDestinationRegion: 'Central Highlands',
    regionId: 'hill-country',
    relatedDestinations: [
      { id: 'ella-rock', name: 'Ella Rock', relationship: 'Steeper half-day viewpoint climb across the valley' },
      { id: 'haputale', name: 'Haputale', relationship: 'High ridge town 1 hour west' },
    ],
    allDestinationIds: ['ella', 'ella-rock', 'haputale'],
    duration: '1.5 to 3.5 hours (route-dependent)',
    effort: 'Moderate',
    effortDetails: 'Little Adam’s Peak is an easy-moderate stepped path; Ella Rock involves steep woodland climbs.',
    seasonSummary: 'Year-round; early mornings are clearest before afternoon mist',
    seasonDetails: 'Southern highland trails are driest from January to April, though crisp morning walks work in most months.',
    essentialCaveat: 'Trails become slippery after rain and viewpoints have unfenced cliff edges. For Ella Rock, use verified trail access rather than walking active railway tracks.',
    detailedGuidance: 'Start between 06:30 and 07:30 for cool mountain air and clear horizons toward the southern plains.',
    keyPrep: ['Gripped walking shoes', '1L drinking water', 'Light rain shell'],
    practicalTags: ['Choice of effort', 'Early start best', 'Unfenced viewpoints'],
    bestTimeOfDay: 'Early morning (06:30 to 09:00) before valley cloud builds',
    editorialStatus: 'reviewed',
    reviewBy: '2027-05-01',
    sources: [
      { label: 'The Pekoe Trail: Regional Walking Routes', url: 'https://portal.thepekoetrail.org/pekoe-stages', checkedDate: '2026-11-04' },
    ],
    image: ellaRockImage,
    imageAlt: 'Panoramic view from a highland summit in Ella overlooking misty green tea valleys.',
    hasDetailGuide: true,
    featuredOnHub: true,
      },
  {
    id: 'horton-plains-worlds-end',
    title: 'Walk the Horton Plains and World’s End plateau circuit',
    summary:
      'Follow a 9 km loop across high-altitude montane grassland and cloud forest at 2,100 meters, passing Baker’s Falls and the World’s End escarpment.',
    whyDistinctive:
      'Horton Plains preserves a rare high-plateau ecosystem of dwarf bamboo, rhododendrons, sambar deer, and sheer southern cliffs.',
    themeId: 'hiking-mountain-trails',
    themeLabel: 'Hiking, Trekking & Mountain Trails',
    subtypeId: 'cloud-forest-peaks',
    subtypeLabel: 'Cloud-Forest & Strenuous Climbs',
    browsePath: 'highlands',
    browsePathLabel: 'Highlands, Trails & Tea',
    category: 'hiking',
    categoryLabel: 'Hiking & Mountain Trails',
    primaryDestinationId: 'horton-plains',
    primaryDestinationName: 'Horton Plains National Park',
    primaryDestinationRegion: 'Central Highlands',
    regionId: 'hill-country',
    relatedDestinations: [
      { id: 'nuwara-eliya', name: 'Nuwara Eliya', relationship: 'Highland base town 32 km north' },
      { id: 'horton-plains', name: 'Baker’s Falls', relationship: 'Cascade along the Horton Plains trail loop' },
    ],
    allDestinationIds: ['horton-plains', 'nuwara-eliya', 'horton-plains', 'haputale'],
    duration: '3 to 4 hours (9.5 km loop)',
    effort: 'Moderate',
    effortDetails: '9.5 km circuit over rocky, uneven grassland and forest roots at 2,100m elevation.',
    seasonSummary: 'Year-round; Jan to Mar mornings offer the clearest escarpment views',
    seasonDetails: 'Mist regularly rolls up the southern escarpment by 09:30 to 10:00 AM in every season.',
    essentialCaveat: 'Arrive at the park gate by 06:00 AM for a chance of clear views before cloud cover. Single-use plastic wrappers and bags are strictly inspected and removed at the entrance.',
    detailedGuidance: 'Chilly dawn temperatures (often 8 to 12°C) quickly warm into bright highland sun; dress in removable layers and stay behind cliff safety signs.',
    keyPrep: ['Warm fleece layer for dawn', 'Zero single-use plastic', 'Sturdy walking shoes'],
    practicalTags: ['06:00 AM start', 'Plastic-free park', '9.5 km plateau loop'],
    bestTimeOfDay: 'Gate opening (06:00 to 09:30 AM) before mist closes World’s End',
    editorialStatus: 'reviewed',
    reviewBy: '2027-05-01',
    sources: [
      { label: 'Department of Wildlife Conservation (DWC): Horton Plains', url: 'https://www.dwc.gov.lk/?page_id=72', checkedDate: '2026-11-04' },
      { label: 'UNESCO World Heritage Centre: Central Highlands of Sri Lanka', url: 'https://whc.unesco.org/en/list/1203/', checkedDate: '2026-11-04' },
    ],
    image: hortonPlainsImage,
    imageAlt: 'Misty montane grassland and cloud forest trails in Horton Plains National Park.',
    hasDetailGuide: true,
  },
  {
    id: 'pekoe-trail-stage-walk',
    title: 'Hike a curated stage of The Pekoe Trail through tea country',
    summary:
      'Walk a half-day segment of Sri Lanka’s 300 km long-distance highland trail linking historic tea estates, ridge villages, and forest corridors.',
    whyDistinctive:
      'The 22-stage trail network lets walkers experience quiet estate footpaths between Kandy, Hatton, Nuwara Eliya, Haputale, and Ella.',
    themeId: 'hiking-mountain-trails',
    themeLabel: 'Hiking, Trekking & Mountain Trails',
    subtypeId: 'tea-pekoe-trails',
    subtypeLabel: 'Tea-Country & Pekoe Trail Stages',
    browsePath: 'highlands',
    browsePathLabel: 'Highlands, Trails & Tea',
    category: 'hiking',
    categoryLabel: 'Hiking & Mountain Trails',
    primaryDestinationId: 'haputale',
    primaryDestinationName: 'Haputale',
    primaryDestinationRegion: 'Central Highlands',
    regionId: 'hill-country',
    relatedDestinations: [
      { id: 'nuwara-eliya', name: 'Nuwara Eliya', relationship: 'High-elevation stage hub' },
      { id: 'hatton', name: 'Hatton', relationship: 'Western tea-valley stage hub' },
      { id: 'ella', name: 'Ella', relationship: 'Eastern terminus of the trail network' },
    ],
    allDestinationIds: ['haputale', 'nuwara-eliya', 'hatton', 'ella', 'kandy'],
    duration: '3 to 5 hours (10 to 15 km per stage)',
    effort: 'Moderate',
    effortDetails: 'Sustained hill walking on estate tracks with elevation gain and sun exposure.',
    seasonSummary: 'Year-round; check official trail portal for seasonal stage advisories',
    seasonDetails: 'Drier walking conditions prevail from January to April in the western/central hills and May to August in the eastern Uva basin.',
    essentialCaveat: 'Check the official Pekoe Trail portal for current pass rules, GPS tracks, and any temporary stage closures after heavy rain.',
    detailedGuidance: 'Respect estate workers’ privacy, close any livestock gates you pass through, and arrange transport pickup at your stage endpoint.',
    keyPrep: ['Official trail map / pass check', 'Sun hat & 1.5L water', 'Endpoint transport plan'],
    practicalTags: ['22 official stages', 'Check trail pass/status', 'Point-to-point walk'],
    bestTimeOfDay: 'Morning departure (07:00 to 11:30)',
    editorialStatus: 'reviewed',
    reviewBy: '2027-05-01',
    sources: [
      { label: 'The Pekoe Trail: Official Stages & Passes', url: 'https://portal.thepekoetrail.org/pekoe-stages', checkedDate: '2026-11-04' },
    ],
    image: haputaleImage,
    imageAlt: 'Highland tea-estate footpath winding along misty mountain ridges near Haputale.',
    hasDetailGuide: true,
  },
  {
    id: 'pidurangala-rock-climb',
    title: 'Climb Pidurangala Rock for views toward Sigiriya',
    summary:
      'Ascend forested steps past a cave temple before scrambling over natural granite boulders to an open summit facing Sigiriya Rock.',
    whyDistinctive:
      'Pidurangala looks directly across the forest canopy to the profile of Sigiriya Rock Fortress.',
    themeId: 'hiking-mountain-trails',
    themeLabel: 'Hiking, Trekking & Mountain Trails',
    subtypeId: 'viewpoint-walks',
    subtypeLabel: 'Short Viewpoint & Ridge Walks',
    browsePath: 'highlands',
    browsePathLabel: 'Highlands, Trails & Tea',
    category: 'hiking',
    categoryLabel: 'Hiking & Mountain Trails',
    primaryDestinationId: 'pidurangala-rock',
    primaryDestinationName: 'Pidurangala Rock',
    primaryDestinationRegion: 'Cultural Triangle',
    regionId: 'cultural-triangle',
    relatedDestinations: [
      { id: 'sigiriya', name: 'Sigiriya Rock Fortress', relationship: 'Neighbouring fifth-century citadel 2 km south' },
    ],
    allDestinationIds: ['pidurangala-rock', 'sigiriya'],
    duration: '1.5 to 2 hours',
    effort: 'Moderate',
    effortDetails: 'Steep uneven stone steps followed by a final 10-minute unassisted boulder scramble.',
    seasonSummary: 'Year-round; dry months Jan to Sep',
    seasonDetails: 'Accessible daily; avoid climbing during heavy rain or lightning when summit rock becomes slick.',
    essentialCaveat: 'The final section requires climbing between narrow boulders and is not suitable for visitors with mobility limits. Cover shoulders and knees for the lower cave temple.',
    detailedGuidance: 'Carry a headlamp if climbing before dawn or staying until sunset, and never crowd the unfenced rock edges.',
    keyPrep: ['Closed gripped shoes', 'Temple-appropriate clothing', 'Headlamp for dawn/dusk'],
    practicalTags: ['Boulder scramble at top', 'Active temple base', 'Early morning best'],
    bestTimeOfDay: 'Early morning (05:45 to 07:30) or late afternoon (16:00 to 17:45)',
    editorialStatus: 'reviewed',
    reviewBy: '2027-05-01',
    sources: [
      { label: 'Central Cultural Fund & Sigiriya Regional Heritage', url: 'http://www.ccf.gov.lk/', checkedDate: '2026-11-04' },
    ],
    image: pidurangalaImage,
    imageAlt: 'Granite boulder summit at Pidurangala looking across green forest.',
    hasDetailGuide: true,
  },
  {
    id: 'knuckles-cloud-forest-trek',
    title: 'Trek with a local guide in the Knuckles Mountain Range',
    summary:
      'Follow terraced valley paths, cardamom forests, and misty ridge trails across the UNESCO-recognized Knuckles Conservation Forest.',
    whyDistinctive:
      'Isolated mountain massifs north-east of Kandy shelter endemic flora, cloud forests, and remote valley villages.',
    themeId: 'hiking-mountain-trails',
    themeLabel: 'Hiking, Trekking & Mountain Trails',
    subtypeId: 'cloud-forest-peaks',
    subtypeLabel: 'Cloud-Forest & Strenuous Climbs',
    browsePath: 'highlands',
    browsePathLabel: 'Highlands, Trails & Tea',
    category: 'hiking',
    categoryLabel: 'Hiking & Mountain Trails',
    primaryDestinationId: 'knuckles-mountain-range',
    primaryDestinationName: 'Knuckles Mountain Range',
    primaryDestinationRegion: 'Central Highlands',
    regionId: 'hill-country',
    relatedDestinations: [
      { id: 'kandy', name: 'Kandy', relationship: 'Closest major city 1.5 to 2 hours southwest' },
    ],
    allDestinationIds: ['knuckles-mountain-range', 'kandy'],
    duration: '4 to 7 hours',
    effort: 'Challenging',
    effortDetails: 'Steep mountain trails with rapid mist, wind, and leeches in wet forest zones.',
    seasonSummary: 'Feb to Sep generally drier; northeast monsoon brings heavy rain Nov to Jan',
    seasonDetails: 'Knuckles catches the northeast monsoon between November and January, making trails wet and visibility low.',
    essentialCaveat: 'Never hike unmarked Knuckles ridges without an experienced local guide and Forest Department permit; dense mist can obscure trails within minutes.',
    detailedGuidance: 'Verify specific trailhead access (such as Riverston, Corbett’s Gap, or Bambarella) and guide credentials before setting out.',
    keyPrep: ['Experienced local guide', 'Leech socks & rain gear', 'Forest permit'],
    practicalTags: ['Guide essential', 'UNESCO cloud forest', 'Rapid weather shifts'],
    bestTimeOfDay: 'Early morning departure (06:30 to 07:30)',
    editorialStatus: 'reviewed',
    reviewBy: '2027-04-01',
    sources: [
      { label: 'UNESCO World Heritage Centre: Central Highlands of Sri Lanka', url: 'https://whc.unesco.org/en/list/1203/', checkedDate: '2026-11-04' },
    ],
    image: knucklesImage,
    imageAlt: 'Mist-wrapped peaks and green valleys in the Knuckles Mountain Range.',
    hasDetailGuide: true,
  },

  // ============================================================================
  // 07. CYCLING & TWO-WHEEL EXPLORATION
  // ============================================================================
  {
    id: 'polonnaruwa-archaeological-cycle',
    title: 'Cycle the ancient monument circuit at Polonnaruwa',
    summary:
      'Pedal shaded tree-lined avenues between Polonnaruwa’s 12th-century stone shrines, from the circular Vatadage to the carved Buddhas of Gal Vihara.',
    whyDistinctive:
      'Polonnaruwa’s compact, level archaeological park layout is ideally suited to slow exploration by bicycle.',
    themeId: 'cycling-two-wheel',
    themeLabel: 'Cycling & Two-Wheel Exploration',
    subtypeId: 'ancient-city-rides',
    subtypeLabel: 'Ancient City Archaeological Rides',
    browsePath: 'heritage',
    browsePathLabel: 'Heritage & Sacred Places',
    category: 'heritage',
    categoryLabel: 'Cycling & Heritage',
    primaryDestinationId: 'polonnaruwa',
    primaryDestinationName: 'Polonnaruwa Ancient City',
    primaryDestinationRegion: 'Cultural Triangle',
    regionId: 'cultural-triangle',
    relatedDestinations: [
      { id: 'anuradhapura', name: 'Anuradhapura Sacred City', relationship: 'Larger sacred capital also explored by bicycle' },
      { id: 'sigiriya', name: 'Sigiriya Rock Fortress', relationship: 'Cultural Triangle companion hub 60 km west' },
    ],
    allDestinationIds: ['polonnaruwa', 'anuradhapura', 'sigiriya', 'gal-vihara', 'polonnaruwa-vatadage'],
    duration: '3 to 4 hours',
    effort: 'Moderate',
    effortDetails: '8 to 12 km of flat paved and compacted-earth riding in warm dry-zone air.',
    seasonSummary: 'Year-round; start early before midday heat builds on stone',
    seasonDetails: 'Dry-zone sunshine prevails from January through September; mornings are pleasant year-round.',
    essentialCaveat: 'All shrines are active sacred sites: wear clothing covering shoulders and knees, remove shoes and hats at temple entrances, and pack thick socks for hot stones.',
    detailedGuidance: 'Check bicycle brakes and seat height before leaving the museum ticket gate, and park bicycles neatly outside shrine boundaries.',
    keyPrep: ['Shoulders & knees covered', 'Socks for hot stone', 'Water & sun hat'],
    practicalTags: ['Flat archaeological lanes', 'Sacred dress code', 'Morning ride best'],
    bestTimeOfDay: 'Early morning (07:30 to 10:30) before stone courtyards heat up',
    editorialStatus: 'reviewed',
    reviewBy: '2027-05-01',
    sources: [
      { label: 'UNESCO World Heritage Centre: Ancient City of Polonnaruwa', url: 'https://whc.unesco.org/en/list/201/', checkedDate: '2026-11-04' },
      { label: 'Central Cultural Fund Sri Lanka', url: 'http://www.ccf.gov.lk/', checkedDate: '2026-11-04' },
    ],
    image: polonnaruwaImage,
    imageAlt: 'The sacred Vatadage circular stone relic shrine at Polonnaruwa.',
    hasDetailGuide: true,
    featuredOnHub: true,
      },
  {
    id: 'anuradhapura-sacred-city-cycle',
    title: 'Ride between the great stupas of Anuradhapura',
    summary:
      'Cycle quiet park roads linking Ruwanwelisaya, Jetavanaramaya, Abhayagiri, and ancient monastic ponds across Sri Lanka’s first royal capital.',
    whyDistinctive:
      'Because Anuradhapura’s monuments span several square kilometers of parkland, cycling connects monastic zones without constant vehicle transfers.',
    themeId: 'cycling-two-wheel',
    themeLabel: 'Cycling & Two-Wheel Exploration',
    subtypeId: 'ancient-city-rides',
    subtypeLabel: 'Ancient City Archaeological Rides',
    browsePath: 'heritage',
    browsePathLabel: 'Heritage & Sacred Places',
    category: 'heritage',
    categoryLabel: 'Cycling & Heritage',
    primaryDestinationId: 'anuradhapura',
    primaryDestinationName: 'Anuradhapura Sacred City',
    primaryDestinationRegion: 'Cultural Triangle',
    regionId: 'cultural-triangle',
    relatedDestinations: [
      { id: 'mihintale', name: 'Mihintale', relationship: 'Hilltop cradle of Buddhism 14 km east' },
    ],
    allDestinationIds: ['anuradhapura', 'mihintale', 'ruwanwelisaya', 'jetavanaramaya', 'abhayagiri-monastery'],
    duration: '3.5 to 5 hours',
    effort: 'Moderate',
    effortDetails: '12 to 18 km on flat paved roads; watch for pilgrim traffic around major stupas.',
    seasonSummary: 'Year-round; early mornings or late afternoons recommended',
    seasonDetails: 'Full-moon Poya days and Poson (June) draw large devotional crowds.',
    essentialCaveat: 'Anuradhapura is a deeply revered living pilgrimage center. Dismount in crowded temple zones, dress in modest clothing, and remove footwear at sacred thresholds.',
    detailedGuidance: 'Plan a focused northern or southern loop rather than trying to ride every distant monument in midday heat.',
    keyPrep: ['Modest light clothing', 'White socks for temple courtyards', 'Hydration'],
    practicalTags: ['Living sacred capital', 'Wide parkland distances', 'Respectful conduct'],
    bestTimeOfDay: 'Early morning (07:00 to 10:30) or late afternoon (15:30 to 18:00)',
    editorialStatus: 'reviewed',
    reviewBy: '2027-05-01',
    sources: [
      { label: 'UNESCO World Heritage Centre: Sacred City of Anuradhapura', url: 'https://whc.unesco.org/en/list/200/', checkedDate: '2026-11-04' },
    ],
    image: anuradhapuraImage,
    imageAlt: 'The white dome of Ruwanwelisaya stupa in Anuradhapura.',
    hasDetailGuide: true,
  },
  {
    id: 'sigiriya-tank-bund-village-cycle',
    title: 'Pedal dry-zone tank bunds and rural lanes near Sigiriya',
    summary:
      'Follow earthen reservoir bunds, paddy edges, and shaded country lanes around Sigiriya and Habarana with a local cycling guide.',
    whyDistinctive:
      'Ancient cascading village tanks (ellanga gammana) support lotus-filled waters, kingfishers, and rural farming life away from main highways.',
    themeId: 'cycling-two-wheel',
    themeLabel: 'Cycling & Two-Wheel Exploration',
    subtypeId: 'village-tank-lanes',
    subtypeLabel: 'Dry-Zone Tank & Village Backroads',
    browsePath: 'heritage',
    browsePathLabel: 'Heritage & Sacred Places',
    category: 'heritage',
    categoryLabel: 'Cycling & Rural Routes',
    primaryDestinationId: 'sigiriya',
    primaryDestinationName: 'Sigiriya Rock Fortress',
    primaryDestinationRegion: 'Cultural Triangle',
    regionId: 'cultural-triangle',
    relatedDestinations: [
      { id: 'kala-wewa', name: 'Kala Wewa', relationship: 'Monumental ancient reservoir further west' },
    ],
    allDestinationIds: ['sigiriya', 'kala-wewa', 'polonnaruwa'],
    duration: '2 to 3 hours',
    effort: 'Moderate',
    effortDetails: 'Flat gravel and packed-earth tank paths requiring a well-maintained mountain or hybrid bike.',
    seasonSummary: 'Year-round during morning or late-afternoon hours; avoid dusk in elephant corridors',
    seasonDetails: 'Dry-zone mornings are bright and warm; rain after October fills the village tanks.',
    essentialCaveat: 'Finish rural rides before dusk, as wild elephants move through dry-zone forest corridors around Habarana and Sigiriya after sunset.',
    detailedGuidance: 'Ride with a local guide who knows public tank bund paths and respects private home gardens.',
    keyPrep: ['Fitted helmet', 'Finish before dusk', 'Sunscreen & water'],
    practicalTags: ['Ancient tank bunds', 'Daylight hours only', 'Guided backroads'],
    bestTimeOfDay: 'Early morning (07:00 to 09:30)',
    editorialStatus: 'proposed',
    verificationNote: 'Confirm bicycle maintenance standards, helmet provision, and specific public tank routes with local operators.',
    reviewBy: '2027-03-01',
    sources: [
      { label: 'SLTDA: Manual Application for Land Adventure Activities', url: 'https://www.sltda.gov.lk/storage/common_media/Manual%20Application%20for%20Water%20based%20and%20air%20based%20adventure.pdf', checkedDate: '2026-11-04' },
    ],
    image: polonnaruwaImage,
    imageAlt: 'Shaded dry-zone landscape and ancient reservoir heritage in the Cultural Triangle.',
    hasDetailGuide: true,
  },

  // ============================================================================
  // 08. RAFTING, RIVERS & INLAND WATER
  // ============================================================================
  {
    id: 'kitulgala-white-water-rafting',
    title: 'Run guided white-water rapids on the Kelani River at Kitulgala',
    summary:
      'Paddle Grade II to III rapids through a rainforest-lined gorge on the Kelani River with a qualified river guide and safety crew.',
    whyDistinctive:
      'Kitulgala’s boulder-strewn stretch of the Kelani River combines beginner-to-intermediate rapids with calm jungle float sections.',
    themeId: 'rafting-rivers-water',
    themeLabel: 'Rafting, Rivers & Inland Water',
    subtypeId: 'white-water-kelani',
    subtypeLabel: 'Kelani River Rafting & Kayaking',
    browsePath: 'sea-surf',
    browsePathLabel: 'Sea, Surf & Coast',
    category: 'coast',
    categoryLabel: 'Rivers & Inland Water',
    primaryDestinationId: 'kitulgala',
    primaryDestinationName: 'Kitulgala',
    primaryDestinationRegion: 'Central Highlands & Wet Zone',
    regionId: 'hill-country',
    relatedDestinations: [
      { id: 'aberdeen-falls', name: 'Aberdeen Falls', relationship: 'Nearby highland gorge waterfall' },
      { id: 'hatton', name: 'Hatton', relationship: 'Upper tea-country rail hub 1 hour above Kitulgala' },
    ],
    allDestinationIds: ['kitulgala', 'aberdeen-falls', 'hatton'],
    duration: '1.5 to 2.5 hours',
    effort: 'Moderate',
    effortDetails: 'Active paddling in a raft; basic swimming confidence and comfort in moving water required.',
    skillLevel: 'Grade II to III (subject to daily river volume)',
    seasonSummary: 'Primary season Nov to Apr per Sri Lanka Tourism; daily river levels govern safety',
    seasonDetails: 'Sri Lanka Tourism notes November to April as the main rafting window, though upstream rainfall and dam releases determine whether water levels are safe on any given day.',
    essentialCaveat: 'River volume changes rapidly after mountain rain or hydro dam releases. Only raft with SLTDA-compliant operators providing helmets, buoyancy aids, safety kayaks, and a pre-launch briefing.',
    detailedGuidance: 'Never treat river tubing or canyon jumps as casual unsupervised swims; check water levels on the morning of your trip.',
    keyPrep: ['Secure water shoes (no flip-flops)', 'Verify helmet & PFD buckles', 'Quick-dry clothing'],
    practicalTags: ['Nov to Apr season', 'Check daily river level', 'Safety briefing essential'],
    bestTimeOfDay: 'Morning (08:30 to 11:30) depending on upstream water release schedule',
    editorialStatus: 'reviewed',
    reviewBy: '2027-04-01',
    sources: [
      { label: 'Sri Lanka Tourism: Adventure and Special Interest Sports (Kitulgala Nov-Apr)', url: 'https://www.srilanka.travel/adventure_and_sports', checkedDate: '2026-11-04' },
      { label: 'SLTDA: Adventure Tourism Activity Descriptions', url: 'https://www.sltda.gov.lk/storage/common_media/AdventureTourismActivitiesWaterBased%26AirBasedDecsriptions.pdf', checkedDate: '2026-11-04' },
    ],
    image: kitulgalaImage,
    imageAlt: 'Forested river gorge along the Kelani River at Kitulgala.',
    hasDetailGuide: true,
    featuredOnHub: true,
      },
  {
    id: 'diyaluma-bambarakanda-waterfall-walk',
    title: 'Walk to highland waterfalls at Diyaluma or Bambarakanda',
    summary:
      'Hike scenic foothill paths to view Sri Lanka’s tallest cascades plunging down granite escarpments in the southern highlands.',
    whyDistinctive:
      'Bambarakanda (263m) and Diyaluma (220m) frame dramatic valley amphitheatres between Haputale, Kalupahana, and Koslanda.',
    themeId: 'rafting-rivers-water',
    themeLabel: 'Rafting, Rivers & Inland Water',
    subtypeId: 'waterfalls-canyons',
    subtypeLabel: 'Waterfall Walks & Gorge Streams',
    browsePath: 'highlands',
    browsePathLabel: 'Highlands, Trails & Tea',
    category: 'hiking',
    categoryLabel: 'Rivers & Waterfalls',
    primaryDestinationId: 'diyaluma-falls',
    primaryDestinationName: 'Diyaluma Falls',
    primaryDestinationRegion: 'Central Highlands',
    regionId: 'hill-country',
    relatedDestinations: [
      { id: 'bambarakanda-falls', name: 'Bambarakanda Falls', relationship: 'Sri Lanka’s highest waterfall (263m) in nearby Kalupahana' },
      { id: 'ella', name: 'Ella', relationship: 'Highland base 1 hour north' },
    ],
    allDestinationIds: ['diyaluma-falls', 'bambarakanda-falls', 'ella', 'haputale'],
    duration: '2 to 3 hours',
    effort: 'Moderate',
    effortDetails: 'Uneven rocky trails and steep grassy slopes approaching upper or lower viewpoints.',
    seasonSummary: 'Best flow Oct to Apr; avoid upper rock ledges during rain',
    seasonDetails: 'Late dry-season months (July to August) can reduce water flow, while heavy highland rain creates dangerous flash surges.',
    essentialCaveat: 'Never assume a waterfall pool is safe to swim in, and stay well back from wet cliff edges. Upstream rain can cause sudden water surges even when skies overhead look clear.',
    detailedGuidance: 'Hire a local guide from Makaldeniya or Punagala for the upper Diyaluma footpath and observe cascades from stable dry ground.',
    keyPrep: ['Gripped footwear', 'Stay back from wet cliff edges', 'Check upstream weather'],
    practicalTags: ['200m+ highland cascades', 'Flash-surge awareness', 'No cliff-edge swimming'],
    bestTimeOfDay: 'Morning (07:30 to 11:00) before afternoon highland showers',
    editorialStatus: 'reviewed',
    reviewBy: '2027-04-01',
    sources: [
      { label: 'Sri Lanka Tourism: Waterfalls & Highlands', url: 'https://www.srilanka.travel/what-to-do', checkedDate: '2026-11-04' },
    ],
    image: diyalumaImage,
    imageAlt: 'Highland waterfall cascading down rocky cliffs at Diyaluma Falls.',
    hasDetailGuide: true,
  },
  {
    id: 'kitulgala-canyoning-stream-walk',
    title: 'Try guided canyon stream walking in Kitulgala',
    summary:
      'Follow a rainforest tributary stream with helmets, ropes, and trained adventure guides in the hills above Kitulgala.',
    whyDistinctive:
      'Steep wet-zone rock gorges around Kitulgala form natural water chutes and forest pools.',
    themeId: 'rafting-rivers-water',
    themeLabel: 'Rafting, Rivers & Inland Water',
    subtypeId: 'waterfalls-canyons',
    subtypeLabel: 'Waterfall Walks & Gorge Streams',
    browsePath: 'sea-surf',
    browsePathLabel: 'Sea, Surf & Coast',
    category: 'coast',
    categoryLabel: 'Rivers & Inland Water',
    primaryDestinationId: 'kitulgala',
    primaryDestinationName: 'Kitulgala',
    primaryDestinationRegion: 'Central Highlands & Wet Zone',
    regionId: 'hill-country',
    allDestinationIds: ['kitulgala'],
    duration: '2.5 to 3.5 hours',
    effort: 'Challenging',
    effortDetails: 'Slippery wet rock scrambling, cold mountain stream water, and technical harness work.',
    seasonSummary: 'Dry months Jan to Mar best; suspended during heavy rain',
    seasonDetails: 'Canyon streams rise rapidly during southwest and inter-monsoon rains.',
    essentialCaveat: 'Research-needed adventure product: verify operator SLTDA registration, rope/anchor certification, rescue capability, and participant fitness prerequisites before booking.',
    detailedGuidance: 'Never jump into rock pools of unverified depth or participate without certified technical guides.',
    keyPrep: ['Verify SLTDA operator license', 'Closed canyon footwear', 'Helmet & harness check'],
    practicalTags: ['Technical adventure', 'Operator audit required'],
    bestTimeOfDay: 'Morning only when weather forecast is dry',
    editorialStatus: 'research-needed',
    verificationNote: 'Requires verification of operator SLTDA registration, technical rope safety audit, and rescue protocols.',
    reviewBy: '2027-02-01',
    sources: [
      { label: 'SLTDA: Register with Us / Adventure Activities', url: 'https://www.sltda.gov.lk/en/register-with-us', checkedDate: '2026-11-04' },
    ],
    image: senanayakeImage,
    imageAlt: 'Mountain water and forested hills in inland Sri Lanka.',
    hasDetailGuide: true,
  },

  // ============================================================================
  // 09. SCENIC TRAIN, ROAD & WATER JOURNEYS
  // ============================================================================
  {
    id: 'ella-hill-country-train',
    title: 'Ride a hill-country railway segment between Kandy, Nanu Oya, and Ella',
    summary:
      'Travel aboard the historic Main Line through terraced tea slopes, cloud forest tunnels, and the stone Nine Arch viaduct near Ella.',
    whyDistinctive:
      'Built in the 19th century to carry Ceylon tea from high-elevation estates, the Main Line climbs past waterfalls and misty ridgelines.',
    themeId: 'scenic-journeys',
    themeLabel: 'Scenic Train, Road & Water Journeys',
    subtypeId: 'mountain-coastal-rail',
    subtypeLabel: 'Highland & Coastal Rail Segments',
    browsePath: 'highlands',
    browsePathLabel: 'Highlands, Trails & Tea',
    category: 'scenic-journeys',
    categoryLabel: 'Scenic Journeys',
    primaryDestinationId: 'ella',
    primaryDestinationName: 'Ella',
    primaryDestinationRegion: 'Central Highlands',
    regionId: 'hill-country',
    relatedDestinations: [
      { id: 'nuwara-eliya', name: 'Nuwara Eliya', relationship: 'Highland transfer via Nanu Oya station' },
      { id: 'haputale', name: 'Haputale', relationship: 'Scenic ridge station 1 hour west of Ella' },
      { id: 'kandy', name: 'Kandy', relationship: 'Northern terminus of the hill-country line' },
    ],
    allDestinationIds: ['ella', 'nuwara-eliya', 'haputale', 'kandy'],
    duration: '2.5 to 6 hours (segment-dependent)',
    effort: 'Easy',
    effortDetails: 'Seated rail journey; station platforms and unreserved carriages can be crowded.',
    seasonSummary: 'Year-round, conditions permitting; morning trains often have clearer views',
    seasonDetails: 'Trains operate year-round, though heavy highland rain can occasionally cause track delays.',
    essentialCaveat: 'Reserved tickets sell out weeks ahead and timetables or carriages can change. Choose a 2.5-to-3.5-hour segment (Nanu Oya to Ella) for a calmer trip.',
    detailedGuidance: 'Never lean out of moving train doors near tunnels or bridges, and keep luggage light when boarding.',
    keyPrep: ['Advance seat reservation', 'Light sweater for high altitude', 'Water and snacks'],
    practicalTags: ['Book shorter segment', 'Advance tickets advised', 'Historic Main Line'],
    bestTimeOfDay: 'Morning departure (08:30 to 12:30) before afternoon mist rolls in',
    editorialStatus: 'reviewed',
    reviewBy: '2027-05-01',
    sources: [
      { label: 'Sri Lanka Railways: Main Line Timetables & Reservations', url: 'https://www.railway.gov.lk/', checkedDate: '2026-11-04' },
    ],
    image: trainJourneyImage,
    imageAlt: 'A blue passenger train winding through emerald tea slopes in the central highlands.',
    hasDetailGuide: true,
    featuredOnHub: true,
      },
  {
    id: 'colombo-galle-coastal-rail',
    title: 'Follow the southwestern coastline by train from Colombo to Galle',
    summary:
      'Ride the Coastal Line south from Colombo Fort as the tracks run within meters of the Indian Ocean surf toward Bentota and Galle.',
    whyDistinctive:
      'The final stretch out of Colombo hugs the seawall and palm-fringed coves along the southwest shore.',
    themeId: 'scenic-journeys',
    themeLabel: 'Scenic Train, Road & Water Journeys',
    subtypeId: 'mountain-coastal-rail',
    subtypeLabel: 'Highland & Coastal Rail Segments',
    browsePath: 'highlands',
    browsePathLabel: 'Highlands, Trails & Tea',
    category: 'scenic-journeys',
    categoryLabel: 'Scenic Journeys',
    primaryDestinationId: 'galle',
    primaryDestinationName: 'Galle Fort',
    primaryDestinationRegion: 'South Coast',
    regionId: 'south-coast',
    relatedDestinations: [
      { id: 'colombo', name: 'Colombo', relationship: 'Northern departure hub at Colombo Fort station' },
      { id: 'bentota', name: 'Bentota', relationship: 'Midway coastal stop along the route' },
    ],
    allDestinationIds: ['galle', 'colombo', 'bentota'],
    duration: '2 to 2.5 hours',
    effort: 'Easy',
    effortDetails: 'Seated or standing commuter/express rail journey; warm coastal breeze.',
    seasonSummary: 'Year-round; clearest ocean views Nov to Apr',
    seasonDetails: 'Runs daily throughout the year.',
    essentialCaveat: 'Weekday rush-hour trains out of Colombo Fort are heavily crowded with commuters. Travel mid-morning or reserve an express carriage where available.',
    detailedGuidance: 'Sit on the ocean side (right side heading south from Colombo, left side heading north from Galle) for coastal views.',
    keyPrep: ['Avoid commuter rush hours', 'Check express train schedule', 'Carry water'],
    practicalTags: ['Oceanfront rail', '2-hour coastal run', 'Avoid rush hour'],
    bestTimeOfDay: 'Mid-morning (09:30 to 12:00) or late afternoon',
    editorialStatus: 'reviewed',
    reviewBy: '2027-05-01',
    sources: [
      { label: 'Sri Lanka Railways: Coastal Line', url: 'https://www.railway.gov.lk/', checkedDate: '2026-11-04' },
    ],
    image: galleFortImage,
    imageAlt: 'The coastal ramparts and lighthouse at Galle Fort beside the Indian Ocean.',
    hasDetailGuide: true,
  },
  {
    id: 'jaffna-delft-nainativu-island-boat',
    title: 'Cross the Palk Strait by causeway and ferry to Delft or Nainativu',
    summary:
      'Drive the island-hopping causeways west of Jaffna to Kurikadduwan jetty and board a boat to Delft Island or sacred Nainativu.',
    whyDistinctive:
      'Shallow turquoise lagoons, coral-stone walls, wild ponies, and ancient baobab trees give the northern islands a character distinct from the mainland.',
    themeId: 'scenic-journeys',
    themeLabel: 'Scenic Train, Road & Water Journeys',
    subtypeId: 'ferry-air-journeys',
    subtypeLabel: 'Lagoon Boats & Island Crossings',
    browsePath: 'highlands',
    browsePathLabel: 'Highlands, Trails & Tea',
    category: 'scenic-journeys',
    categoryLabel: 'Scenic Journeys',
    primaryDestinationId: 'delft-island',
    primaryDestinationName: 'Delft Island',
    primaryDestinationRegion: 'North & Islands',
    regionId: 'north',
    relatedDestinations: [
      { id: 'jaffna', name: 'Jaffna', relationship: 'Mainland peninsula base 1 hour from Kurikadduwan jetty' },
      { id: 'nainativu-nagadeepa', name: 'Nainativu (Nagadeepa)', relationship: 'Sacred Buddhist and Hindu island reached from the same jetty' },
    ],
    allDestinationIds: ['delft-island', 'jaffna', 'nainativu-nagadeepa'],
    duration: '4 to 6 hours (half-day excursion)',
    effort: 'Moderate',
    effortDetails: 'Public ferry or passenger boat crossing (45 to 60 mins each way) plus warm exposed island roads.',
    seasonSummary: 'Feb to Sep calmest seas; northeast monsoon (Nov to Jan) can disrupt ferries',
    seasonDetails: 'Strong winds in the Palk Strait can cancel or delay Delft boats.',
    essentialCaveat: 'Ferry departures to Delft are limited and subject to morning weather and vessel maintenance. Confirm jetty departure times in Jaffna the evening before.',
    detailedGuidance: 'Carry drinking water, sun protection, and snacks, as shade and visitor facilities on Delft Island are basic.',
    keyPrep: ['Confirm morning ferry time', 'Sun hat & ample water', 'Modest dress for Nainativu shrines'],
    practicalTags: ['Causeway & ferry', 'Confirm boat schedule', 'Northern archipelago'],
    bestTimeOfDay: 'Early morning departure from Jaffna (07:00 AM) to catch the morning ferry',
    editorialStatus: 'reviewed',
    reviewBy: '2027-04-01',
    sources: [
      { label: 'Sri Lanka Tourism: Northern Province & Delft Island', url: 'https://www.srilanka.travel/what-to-do', checkedDate: '2026-11-04' },
    ],
    image: delftIslandImage,
    imageAlt: 'Coastal waters and coral-stone landscape on Delft Island in northern Sri Lanka.',
    hasDetailGuide: true,
  },

  // ============================================================================
  // 10. TEA, SPICE & PLANTATION LANDSCAPES
  // ============================================================================
  {
    id: 'nuwara-eliya-tea-tasting',
    title: 'Tour a working highland tea factory and taste regional grades',
    summary:
      'See green leaf withering, rolling, and firing inside a working hill-country tea factory before tasting high-grown Orange Pekoe infusions.',
    whyDistinctive:
      'Altitude, cool mountain mist, and monsoon exposure give Nuwara Eliya, Dimbula, and Uva teas distinct color and aroma profiles.',
    themeId: 'tea-spice-plantations',
    themeLabel: 'Tea, Spice & Plantation Landscapes',
    subtypeId: 'tea-factories-tasting',
    subtypeLabel: 'Tea Factories & Guided Tastings',
    browsePath: 'highlands',
    browsePathLabel: 'Highlands, Trails & Tea',
    category: 'tea-hill-country',
    categoryLabel: 'Tea & Plantation Landscapes',
    primaryDestinationId: 'nuwara-eliya',
    primaryDestinationName: 'Nuwara Eliya',
    primaryDestinationRegion: 'Central Highlands',
    regionId: 'hill-country',
    relatedDestinations: [
      { id: 'haputale', name: 'Haputale', relationship: 'Uva ridge tea estates 1.5 hours south' },
      { id: 'ella', name: 'Ella', relationship: 'Eastern hill-country tea hub' },
    ],
    allDestinationIds: ['nuwara-eliya', 'haputale', 'ella', 'hatton'],
    duration: '1.5 to 2 hours',
    effort: 'Easy',
    effortDetails: 'Indoor factory walk with wooden stairs and short outdoor estate slope paths.',
    seasonSummary: 'Year-round visits; western quality leaf season peaks Jan to Mar',
    seasonDetails: 'Nuwara Eliya and Dimbula factories process leaf year-round, while Uva’s dry quality wind season peaks between July and September.',
    essentialCaveat: 'Confirm factory production hours before visiting; machinery rests on Sundays, public holidays, and after non-plucking days. Always ask permission before photographing workers.',
    detailedGuidance: 'Learn how leaf particle size (Orange Pekoe, Broken Orange Pekoe, Fannings) reflects rolling and sifting rather than flavour additives.',
    keyPrep: ['Light sweater for cool hills', 'Closed walking shoes', 'Advance factory check'],
    practicalTags: ['Orthodox tea craft', 'Check production days', 'Respect worker privacy'],
    bestTimeOfDay: 'Mid-morning (09:00 to 12:00) when withering and rolling troughs are active',
    editorialStatus: 'reviewed',
    reviewBy: '2027-05-01',
    sources: [
      { label: 'Sri Lanka Tea Board: Ceylon Tea Regional Profiles', url: 'https://www.pureceylontea.com/', checkedDate: '2026-11-04' },
    ],
    image: teaTastingImage,
    imageAlt: 'Freshly infused Ceylon tea samples in white porcelain tasting bowls.',
    hasDetailGuide: true,
    featuredOnHub: true,
  },
  {
    id: 'liptons-seat-estate-morning',
    title: 'Visit Lipton’s Seat lookout through Dambatenne Tea Estate',
    summary:
      'Ascend through historic 1890s tea fields above Haputale to the ridge lookout where Sir Thomas Lipton surveyed his highland gardens.',
    whyDistinctive:
      'On clear early mornings, the 1,970-meter ridge drops sharply toward the southern plains and coast.',
    themeId: 'tea-spice-plantations',
    themeLabel: 'Tea, Spice & Plantation Landscapes',
    subtypeId: 'estate-viewpoints',
    subtypeLabel: 'Estate Walks & Ridge Lookouts',
    browsePath: 'highlands',
    browsePathLabel: 'Highlands, Trails & Tea',
    category: 'tea-hill-country',
    categoryLabel: 'Tea & Plantation Landscapes',
    primaryDestinationId: 'liptons-seat',
    primaryDestinationName: 'Lipton’s Seat',
    primaryDestinationRegion: 'Central Highlands',
    regionId: 'hill-country',
    relatedDestinations: [
      { id: 'haputale', name: 'Haputale', relationship: 'Ridge town base 45 minutes below Dambatenne' },
      { id: 'bandarawela', name: 'Bandarawela', relationship: 'Neighbouring Uva hill town' },
    ],
    allDestinationIds: ['liptons-seat', 'haputale', 'bandarawela'],
    duration: '2.5 to 3.5 hours',
    effort: 'Easy',
    effortDetails: 'Ride up by estate tuk-tuk and walk 4 to 7 km back down paved estate lanes if desired.',
    seasonSummary: 'Year-round; clearest dawn horizons Jan to Apr and Jun to Aug',
    seasonDetails: 'Cloud frequently rises from the southern plains by 09:00 AM.',
    essentialCaveat: 'Summit visibility is weather-dependent and never guaranteed. Stay on public estate roads and respect pluckers working along the terraces.',
    detailedGuidance: 'Riding up by tuk-tuk for sunrise and walking halfway down to Dambatenne factory offers the most comfortable pace.',
    keyPrep: ['05:45 AM departure from Haputale', 'Warm layer', 'Small cash for estate gate ticket'],
    practicalTags: ['1,970m ridge lookout', 'Early start essential', 'Walk down option'],
    bestTimeOfDay: 'Sunrise to 08:30 AM before valley mist closes the view',
    editorialStatus: 'reviewed',
    reviewBy: '2027-05-01',
    sources: [
      { label: 'Sri Lanka Tea Board: Uva Tea Region', url: 'https://www.pureceylontea.com/', checkedDate: '2026-11-04' },
    ],
    image: liptonsSeatImage,
    imageAlt: 'Highland tea terraces and morning mist at Lipton’s Seat near Haputale.',
    hasDetailGuide: true,
  },
  {
    id: 'southern-cinnamon-spice-craft',
    title: 'Learn traditional Ceylon cinnamon peeling and spice botany',
    summary:
      'Observe skilled peelers hand-quilling thin inner bark of true Ceylon cinnamon (Cinnamomum verum) on a southern coastal estate or Koggala island.',
    whyDistinctive:
      'Sri Lanka produces the majority of the world’s true soft-quill cinnamon using generations-old hand-peeling tools.',
    themeId: 'tea-spice-plantations',
    themeLabel: 'Tea, Spice & Plantation Landscapes',
    subtypeId: 'spice-cinnamon',
    subtypeLabel: 'Spice & Cinnamon Heritage',
    browsePath: 'highlands',
    browsePathLabel: 'Highlands, Trails & Tea',
    category: 'tea-hill-country',
    categoryLabel: 'Tea & Plantation Landscapes',
    primaryDestinationId: 'koggala-lake',
    primaryDestinationName: 'Koggala Lake',
    primaryDestinationRegion: 'South Coast',
    regionId: 'south-coast',
    relatedDestinations: [
      { id: 'galle', name: 'Galle Fort', relationship: 'Historic spice-trade port 25 minutes west' },
      { id: 'kandy', name: 'Matale', relationship: 'Inland spice-growing valley north of Kandy' },
    ],
    allDestinationIds: ['koggala-lake', 'galle', 'kandy', 'bentota'],
    duration: '1.5 to 2 hours',
    effort: 'Easy',
    effortDetails: 'Seated demonstration and shaded garden walk.',
    seasonSummary: 'Year-round; confirm host workshop schedule in advance',
    seasonDetails: 'Harvesting and peeling occur in cycles throughout the year.',
    essentialCaveat: 'Select transparent, educational estates rather than roadside spice gardens that rely on unverified medical claims or high-pressure sales.',
    detailedGuidance: 'Focus on botanical identification (cinnamon, black pepper, cardamom, cloves, nutmeg) and culinary spice grading.',
    keyPrep: ['Book vetted educational host', 'Mosquito repellent for garden walks'],
    practicalTags: ['True Ceylon cinnamon', 'Educational focus', 'Avoid sales traps'],
    bestTimeOfDay: 'Morning (08:30 to 11:30) when peeling work is underway',
    editorialStatus: 'proposed',
    verificationNote: 'Confirm specific estate visitor hours and transparent non-commission educational format before booking.',
    reviewBy: '2027-03-01',
    sources: [
      { label: 'Sri Lanka Tourism: Spices & Culinary Heritage', url: 'https://www.srilanka.travel/what-to-do', checkedDate: '2026-11-04' },
    ],
    image: mataleImage,
    imageAlt: 'Lush tropical spice and plantation landscape in Sri Lanka.',
    hasDetailGuide: true,
  },

  // ============================================================================
  // 11. ANCIENT CITIES, ARCHITECTURE & ARCHAEOLOGY
  // ============================================================================
  {
    id: 'sigiriya-rock-climb',
    title: 'Climb Sigiriya Rock Fortress and walk the water gardens',
    summary:
      'Ascend fifth-century stone staircases past symmetrical water gardens, frescoes, and the carved Lion Gate to King Kashyapa’s sky citadel.',
    whyDistinctive:
      'Sigiriya combines intact fifth-century hydraulic garden planning with dramatic elevated palace foundations atop a 200-meter magma plug.',
    themeId: 'ancient-cities-archaeology',
    themeLabel: 'Ancient Cities, Architecture & Archaeology',
    subtypeId: 'rock-citadels',
    subtypeLabel: 'Rock Citadels & Fortresses',
    browsePath: 'heritage',
    browsePathLabel: 'Heritage & Sacred Places',
    category: 'heritage',
    categoryLabel: 'Ancient Cities & Archaeology',
    primaryDestinationId: 'sigiriya',
    primaryDestinationName: 'Sigiriya Rock Fortress',
    primaryDestinationRegion: 'Cultural Triangle',
    regionId: 'cultural-triangle',
    relatedDestinations: [
      { id: 'dambulla', name: 'Dambulla Cave Temple', relationship: 'Painted cave shrines 25 minutes southwest' },
      { id: 'polonnaruwa', name: 'Polonnaruwa Ancient City', relationship: 'Medieval royal capital 60 km east' },
      { id: 'yapahuwa-rock-fortress', name: 'Yapahuwa Rock Fortress', relationship: '13th-century granite stairway citadel further southwest' },
    ],
    allDestinationIds: ['sigiriya', 'dambulla', 'polonnaruwa', 'yapahuwa-rock-fortress'],
    duration: '2.5 to 3.5 hours',
    effort: 'Challenging',
    effortDetails: 'Over 1,200 steep stone and metal-grate steps exposed to tropical sun and wind.',
    seasonSummary: 'Year-round; start at 07:00 AM opening to avoid midday heat',
    seasonDetails: 'Dry weather runs predominantly from January to September.',
    essentialCaveat: 'Physically demanding climb with steep, exposed metal stairways. Arrive at 07:00 AM, wear enclosed gripped shoes, carry 1L water, and remain quiet near wasp-warning signs.',
    detailedGuidance: 'Allow time for the symmetrical water and boulder gardens at the base before ascending to the Lion Platform and summit.',
    keyPrep: ['07:00 AM gate entry', 'Enclosed gripped shoes', '1L drinking water'],
    practicalTags: ['1,200+ steps', 'UNESCO World Heritage', 'Early start essential'],
    bestTimeOfDay: 'Opening hour (07:00 to 09:00 AM) or late afternoon (15:30 to 17:30)',
    editorialStatus: 'reviewed',
    reviewBy: '2027-05-01',
    sources: [
      { label: 'UNESCO World Heritage Centre: Ancient City of Sigiriya', url: 'https://whc.unesco.org/en/list/202/', checkedDate: '2026-11-04' },
      { label: 'Central Cultural Fund Sri Lanka', url: 'http://www.ccf.gov.lk/', checkedDate: '2026-11-04' },
    ],
    image: sigiriyaAerialImage,
    imageAlt: 'Aerial view of Sigiriya Rock Fortress rising above green dry-zone forests.',
    hasDetailGuide: true,
    featuredOnHub: true,
      },
  {
    id: 'galle-fort-heritage-walk',
    title: 'Walk Galle Fort’s ramparts and historic street grid',
    summary:
      'Stroll 17th-century coral-and-granite sea bastions and shaded verandas inside South Asia’s best-preserved living coastal fort.',
    whyDistinctive:
      'Portuguese, Dutch, and British fortifications frame a living Sri Lankan neighborhood of mosques, churches, temples, and townhouses.',
    themeId: 'ancient-cities-archaeology',
    themeLabel: 'Ancient Cities, Architecture & Archaeology',
    subtypeId: 'forts-living-towns',
    subtypeLabel: 'Colonial Forts & Living Architecture',
    browsePath: 'heritage',
    browsePathLabel: 'Heritage & Sacred Places',
    category: 'heritage',
    categoryLabel: 'Ancient Cities & Architecture',
    primaryDestinationId: 'galle',
    primaryDestinationName: 'Galle Fort',
    primaryDestinationRegion: 'South Coast',
    regionId: 'south-coast',
    relatedDestinations: [
      { id: 'jaffna-fort', name: 'Jaffna Fort', relationship: 'Pentagonal Dutch star fort on the northern lagoon' },
      { id: 'unawatuna', name: 'Unawatuna', relationship: 'Sheltered beach bay 15 minutes east' },
    ],
    allDestinationIds: ['galle', 'jaffna-fort', 'unawatuna', 'colombo'],
    duration: '2 to 3 hours',
    effort: 'Easy',
    effortDetails: 'Level walking along cobbled lanes and grass-topped rampart walls.',
    seasonSummary: 'Year-round; late afternoons bring sea breezes and softer light',
    seasonDetails: 'Driest southern coastal weather runs December to April.',
    essentialCaveat: 'Galle Fort is an active residential town and school zone, not a theme park. Respect residents’ doorways and privacy, and heed unfenced drops along the outer ramparts.',
    detailedGuidance: 'Walk with a local architectural or history guide to understand the fort’s subterranean drainage, coral masonry, and multicultural merchant history.',
    keyPrep: ['Comfortable walking shoes', 'Sun hat & water', 'Late afternoon timing'],
    practicalTags: ['Living UNESCO town', 'Level rampart walk', 'Sunset sea breeze'],
    bestTimeOfDay: 'Late afternoon (16:00 to 18:30) along the western sea bastions',
    editorialStatus: 'reviewed',
    reviewBy: '2027-05-01',
    sources: [
      { label: 'UNESCO World Heritage Centre: Old Town of Galle and its Fortifications', url: 'https://whc.unesco.org/en/list/451/', checkedDate: '2026-11-04' },
    ],
    image: galleFortImage,
    imageAlt: 'The white lighthouse and stone sea ramparts of Galle Fort.',
    hasDetailGuide: true,
    featuredOnHub: true,
  },
  {
    id: 'ritigala-forest-monastery-walk',
    title: 'Walk the forested stone pathways of Ritigala Monastery',
    summary:
      'Follow quiet flagstone paths, stone bridges, and ritual bathing tank ruins beneath the canopy of Ritigala Strict Nature Reserve.',
    whyDistinctive:
      'Unlike grand stupa capitals, Ritigala’s austere eighth-to-tenth-century meditation monastery blends unadorned cut stone into a mountain forest.',
    themeId: 'ancient-cities-archaeology',
    themeLabel: 'Ancient Cities, Architecture & Archaeology',
    subtypeId: 'ancient-capitals',
    subtypeLabel: 'Sacred Capitals & Forest Ruins',
    browsePath: 'heritage',
    browsePathLabel: 'Heritage & Sacred Places',
    category: 'heritage',
    categoryLabel: 'Ancient Cities & Archaeology',
    primaryDestinationId: 'ritigala-strict-nature-reserve',
    primaryDestinationName: 'Ritigala Strict Nature Reserve',
    primaryDestinationRegion: 'Cultural Triangle',
    regionId: 'cultural-triangle',
    relatedDestinations: [
      { id: 'sigiriya', name: 'Sigiriya Rock Fortress', relationship: '45 minutes south in the Cultural Triangle' },
      { id: 'anuradhapura', name: 'Anuradhapura Sacred City', relationship: '50 minutes northwest' },
    ],
    allDestinationIds: ['ritigala-strict-nature-reserve', 'sigiriya', 'anuradhapura'],
    duration: '1.5 to 2.5 hours',
    effort: 'Moderate',
    effortDetails: 'Shaded stone steps and forest paths through a protected nature reserve.',
    seasonSummary: 'Year-round; cool forest shade even on warm days',
    seasonDetails: 'Accessible daily during archaeological ticket hours.',
    essentialCaveat: 'Because Ritigala is a Strict Nature Reserve, visitors must remain strictly within the demarcated archaeological path zone.',
    detailedGuidance: 'Look closely at the interlocking stone joints of the Banda Pokuna bathing pool and meditation platforms.',
    keyPrep: ['Walking shoes', 'Insect repellent', 'Stay on marked stone path'],
    practicalTags: ['Forest monastery', 'Strict nature reserve', 'Shaded walk'],
    bestTimeOfDay: 'Morning (08:00 to 11:00) or mid-afternoon',
    editorialStatus: 'reviewed',
    reviewBy: '2027-05-01',
    sources: [
      { label: 'Central Cultural Fund & Department of Archaeology', url: 'http://www.ccf.gov.lk/', checkedDate: '2026-11-04' },
    ],
    image: ritigalaImage,
    imageAlt: 'Ancient stone pathways among the forest trees at Ritigala.',
    hasDetailGuide: true,
  },

  // ============================================================================
  // 12. SPIRITUALITY, PILGRIMAGE & SACRED PLACES
  // ============================================================================
  {
    id: 'dambulla-kandy-sacred-shrines',
    title: 'Visit the painted cave shrines of Dambulla and Kandy’s Temple of the Tooth',
    summary:
      'Enter five rock-cut sanctuary caves filled with murals and statues at Dambulla, or observe evening devotional drumming at Kandy’s Sri Dalada Maligawa.',
    whyDistinctive:
      'Continuously venerated for centuries, these shrines preserve living Kandyan art, offering rituals, and sacred architecture.',
    themeId: 'spirituality-pilgrimage',
    themeLabel: 'Spirituality, Pilgrimage & Sacred Places',
    subtypeId: 'living-shrines',
    subtypeLabel: 'Living Temples, Kovils & Shrines',
    browsePath: 'heritage',
    browsePathLabel: 'Heritage & Sacred Places',
    category: 'heritage',
    categoryLabel: 'Spirituality & Sacred Places',
    primaryDestinationId: 'dambulla',
    primaryDestinationName: 'Dambulla Cave Temple',
    primaryDestinationRegion: 'Cultural Triangle',
    regionId: 'cultural-triangle',
    relatedDestinations: [
      { id: 'kandy', name: 'Kandy', relationship: 'Home to the Temple of the Tooth Relic' },
      { id: 'temple-of-the-tooth', name: 'Temple of the Tooth', relationship: 'Sacred palace shrine on Kandy Lake' },
    ],
    allDestinationIds: ['dambulla', 'kandy', 'temple-of-the-tooth'],
    duration: '2 to 3 hours',
    effort: 'Moderate',
    effortDetails: 'Dambulla requires a 15-to-20-minute stone stair climb up the rock slope; Kandy is level indoor walking.',
    seasonSummary: 'Year-round; full-moon Poya days are busy with white-clad pilgrims',
    seasonDetails: 'Open daily; check devotional puja hours in Kandy.',
    essentialCaveat: 'Dress modestly (shoulders and knees covered, no sheer or tight attire), remove footwear and hats at the shoe counter, and never pose with your back to a Buddha image.',
    detailedGuidance: 'At Dambulla, buy your ticket at the base museum counter before climbing the rock stairs so you do not have to walk back down.',
    keyPrep: ['Ticket at base before climb (Dambulla)', 'Modest attire', 'Socks for hot rock courtyard'],
    practicalTags: ['UNESCO cave murals', 'Active worship etiquette', 'Remove footwear'],
    bestTimeOfDay: 'Early morning (07:30 to 09:30) at Dambulla; morning or evening puja at Kandy',
    editorialStatus: 'reviewed',
    reviewBy: '2027-05-01',
    sources: [
      { label: 'UNESCO World Heritage Centre: Rangiri Dambulla Cave Temple', url: 'https://whc.unesco.org/en/list/561/', checkedDate: '2026-11-04' },
      { label: 'UNESCO World Heritage Centre: Sacred City of Kandy', url: 'https://whc.unesco.org/en/list/450/', checkedDate: '2026-11-04' },
    ],
    image: dambullaImage,
    imageAlt: 'Sacred Buddhist shrine heritage at Dambulla in the Cultural Triangle.',
    hasDetailGuide: true,
    featuredOnHub: false,
  },
  {
    id: 'adams-peak-pilgrimage-climb',
    title: 'Join the seasonal night pilgrimage ascent of Adam’s Peak (Sri Pada)',
    summary:
      'Climb 5,500 illuminated steps alongside Sri Lankan pilgrims through the night to reach the 2,243-meter summit shrine at dawn.',
    whyDistinctive:
      'Revered across Buddhist, Hindu, Muslim, and Christian traditions, Sri Pada is one of South Asia’s most moving communal mountain pilgrimages.',
    themeId: 'spirituality-pilgrimage',
    themeLabel: 'Spirituality, Pilgrimage & Sacred Places',
    subtypeId: 'sacred-pilgrimages',
    subtypeLabel: 'Sacred Mountains & Island Pilgrimages',
    browsePath: 'heritage',
    browsePathLabel: 'Heritage & Sacred Places',
    category: 'hiking',
    categoryLabel: 'Spirituality & Pilgrimage',
    primaryDestinationId: 'adams-peak',
    primaryDestinationName: 'Adam’s Peak (Sri Pada)',
    primaryDestinationRegion: 'Central Highlands',
    regionId: 'hill-country',
    relatedDestinations: [
      { id: 'hatton', name: 'Hatton', relationship: 'Rail hub for the Nallathanniya (Dalhousie) trailhead' },
      { id: 'ratnapura-gem-heritage', name: 'Ratnapura', relationship: 'Southern longer traditional pilgrim trailhead' },
    ],
    allDestinationIds: ['adams-peak', 'hatton', 'ratnapura-gem-heritage'],
    duration: '6 to 9 hours round trip',
    effort: 'Challenging',
    effortDetails: 'Over 5,500 steep stairs ascending and descending 1,000+ vertical meters in cold night wind.',
    seasonSummary: 'Pilgrimage season runs Unduvap Poya (Dec) to Vesak Poya (May)',
    seasonDetails: 'During the December-to-May season, path lights, tea stalls, and rest shelters are open. Off-season climbs face heavy rain, wind, and unlit steps.',
    essentialCaveat: 'Strenuous stair ascent that places heavy strain on knees during descent. Avoid weekends, Poya full-moon nights, and New Year (April) when summit queues can stall for hours.',
    detailedGuidance: 'Pack warm windproof layers, gloves, and a beanie for the freezing summit wait before sunrise, and observe quiet reverence at the upper shrine.',
    keyPrep: ['Warm jacket, hat & gloves', 'Avoid Poya & weekend crowds', 'Trekking poles for knee support'],
    practicalTags: ['Dec to May season', '5,500+ steps', 'Night pilgrimage'],
    bestTimeOfDay: 'Start around 01:30 to 02:30 AM from Nallathanniya for dawn summit',
    editorialStatus: 'reviewed',
    reviewBy: '2027-04-01',
    sources: [
      { label: 'Sri Lanka Tourism: Adam’s Peak (Sri Pada)', url: 'https://www.srilanka.travel/what-to-do', checkedDate: '2026-11-04' },
    ],
    image: adamsPeakImage,
    imageAlt: 'Morning light over the sacred conical summit of Adam’s Peak (Sri Pada).',
    hasDetailGuide: true,
  },
  {
    id: 'nallur-kataragama-kovil-pilgrimage',
    title: 'Experience Hindu kovil traditions in Jaffna and multi-faith Kataragama',
    summary:
      'Observe classical Tamil temple bells, architecture, and rituals at Jaffna’s Nallur Kandaswamy Kovil or the forest-edge shrines of Kataragama.',
    whyDistinctive:
      'Nallur reflects northern Saiva Siddhanta heritage, while Kataragama brings Buddhist, Hindu, Muslim, and Indigenous Vedda devotees to one riverside precinct.',
    themeId: 'spirituality-pilgrimage',
    themeLabel: 'Spirituality, Pilgrimage & Sacred Places',
    subtypeId: 'living-shrines',
    subtypeLabel: 'Living Temples, Kovils & Shrines',
    browsePath: 'heritage',
    browsePathLabel: 'Heritage & Sacred Places',
    category: 'heritage',
    categoryLabel: 'Spirituality & Sacred Places',
    primaryDestinationId: 'nallur-kandaswamy-kovil',
    primaryDestinationName: 'Nallur Kandaswamy Kovil',
    primaryDestinationRegion: 'North & Islands',
    regionId: 'north',
    relatedDestinations: [
      { id: 'jaffna', name: 'Jaffna', relationship: 'Northern cultural capital hosting Nallur Kovil' },
      { id: 'kataragama', name: 'Kataragama', relationship: 'Southeastern multi-faith pilgrimage town near Yala' },
      { id: 'koneswaram-temple', name: 'Koneswaram Temple', relationship: 'Clifftop Hindu kovil on Swami Rock in Trincomalee' },
    ],
    allDestinationIds: ['nallur-kandaswamy-kovil', 'jaffna', 'kataragama', 'koneswaram-temple', 'trincomalee'],
    duration: '1.5 to 2.5 hours',
    effort: 'Easy',
    effortDetails: 'Barefoot walking across open sandy and stone temple courtyards.',
    seasonSummary: 'Year-round; major annual festivals occur in Jul/Aug (dates vary annually)',
    seasonDetails: 'Daily puja ceremonies run throughout the year; festival months bring large devotional processions.',
    essentialCaveat: 'Follow each kovil’s specific dress rules: at Nallur, men must remove shirts before entering the inner courtyard, all visitors walk barefoot, and inner-sanctum photography is prohibited.',
    detailedGuidance: 'Check daily puja times locally and stand respectfully to the side so worshippers have clear sightlines to the shrines.',
    keyPrep: ['Check kovil dress rules (men shirtless inside Nallur)', 'No inner photography', 'Remove footwear'],
    practicalTags: ['Active Hindu & multi-faith sites', 'Strict dress & photo rules'],
    bestTimeOfDay: 'Morning or early evening puja hours',
    editorialStatus: 'reviewed',
    reviewBy: '2027-05-01',
    sources: [
      { label: 'Sri Lanka Tourism: Cultural & Religious Heritage', url: 'https://www.srilanka.travel/what-to-do', checkedDate: '2026-11-04' },
    ],
    image: nallurKovilImage,
    imageAlt: 'The striped red-and-white walls and golden gopuram tower of Nallur Kandaswamy Kovil in Jaffna.',
    hasDetailGuide: true,
  },

  // ============================================================================
  // 13. FOOD, MARKETS & CULINARY LEARNING
  // ============================================================================
  {
    id: 'kandy-village-cooking-class',
    title: 'Cook a Sri Lankan rice-and-curry meal with a home host',
    summary:
      'Grind roasted spices on a granite miris gala, press fresh coconut milk, and simmer clay-pot vegetable curries in a welcoming home kitchen.',
    whyDistinctive:
      'Hands-on home cooking demystifies how Sri Lankan cooks layer whole spices, pandan, curry leaves, and three presses of coconut milk.',
    themeId: 'food-markets-culinary',
    themeLabel: 'Food, Markets & Culinary Learning',
    subtypeId: 'home-cooking-classes',
    subtypeLabel: 'Home Kitchens & Cooking Classes',
    browsePath: 'food-local-life',
    browsePathLabel: 'Food, Community & Slow Living',
    category: 'food',
    categoryLabel: 'Food & Culinary Learning',
    primaryDestinationId: 'kandy',
    primaryDestinationName: 'Kandy',
    primaryDestinationRegion: 'Central Highlands',
    regionId: 'hill-country',
    relatedDestinations: [
      { id: 'galle', name: 'Galle Fort', relationship: 'Southern market-to-table coastal cooking hosts' },
      { id: 'sigiriya', name: 'Sigiriya Rock Fortress', relationship: 'Dry-zone rural clay-pot cooking hosts' },
    ],
    allDestinationIds: ['kandy', 'galle', 'sigiriya', 'colombo'],
    duration: '3 to 4 hours (includes meal)',
    effort: 'Easy',
    effortDetails: 'Seated and standing kitchen preparation followed by a relaxed shared meal.',
    seasonSummary: 'Year-round in sheltered home kitchens; vegetable dishes follow seasonal harvests',
    seasonDetails: 'Available year-round; jackfruit, mango, and leafy greens shift with the season.',
    essentialCaveat: 'Share dietary preferences (vegan, vegetarian, gluten-free, nut allergies, mild spice) in advance. Hosts are respected culinary partners compensated directly.',
    detailedGuidance: 'Ask to include a morning market visit or home-garden walk to see fresh curry leaves, goraka, and seasonal gourds before cooking.',
    keyPrep: ['Share dietary needs in advance', 'Comfortable casual clothing'],
    practicalTags: ['Clay-pot cooking', 'Direct host benefit', 'Vegan/vegetarian friendly'],
    bestTimeOfDay: 'Late morning lunch session (10:00 to 13:30) or early evening (16:30 to 19:30)',
    editorialStatus: 'reviewed',
    reviewBy: '2027-05-01',
    sources: [
      { label: 'Sri Lanka Tourism: Culinary Heritage', url: 'https://www.srilanka.travel/what-to-do', checkedDate: '2026-11-04' },
    ],
    image: villageCookingImage,
    imageAlt: 'Clay pots filled with colourful Sri Lankan vegetable curries and fresh spices.',
    hasDetailGuide: true,
    featuredOnHub: true,
      },
  {
    id: 'jaffna-colombo-regional-food-trail',
    title: 'Explore Jaffna Tamil cuisine or Colombo’s neighborhood food culture',
    summary:
      'Taste northern Jaffna specialties seasoned with roasted Jaffna curry powder and palmyra, or join a guided food walk through Colombo.',
    whyDistinctive:
      'Jaffna’s Tamil kitchens, Colombo’s Moor, Burgher, and Sinhalese eateries, and southern coastal tables each use distinct spice blends and grains.',
    themeId: 'food-markets-culinary',
    themeLabel: 'Food, Markets & Culinary Learning',
    subtypeId: 'regional-food-trails',
    subtypeLabel: 'Regional Cuisine & Street Food',
    browsePath: 'food-local-life',
    browsePathLabel: 'Food, Community & Slow Living',
    category: 'food',
    categoryLabel: 'Food & Culinary Learning',
    primaryDestinationId: 'jaffna',
    primaryDestinationName: 'Jaffna',
    primaryDestinationRegion: 'North & Islands',
    regionId: 'north',
    relatedDestinations: [
      { id: 'colombo', name: 'Colombo', relationship: 'Urban street-food, hopper, and short-eat walks' },
      { id: 'galle', name: 'Galle Fort', relationship: 'Southern coastal dining and spice heritage' },
    ],
    allDestinationIds: ['jaffna', 'colombo', 'galle'],
    duration: '2.5 to 3.5 hours',
    effort: 'Easy',
    effortDetails: 'Gentle urban walking between verified local kitchens, sweet shops, and markets.',
    seasonSummary: 'Year-round',
    seasonDetails: 'Operates year-round; evening walks are cooler in Colombo and Jaffna.',
    essentialCaveat: 'Disclose shellfish, nut, or dairy allergies clearly, and choose freshly cooked, high-turnover dishes and bottled or filtered water.',
    detailedGuidance: 'Look for northern odiyal kool, dosa, and Rio-style fruit ice cream in Jaffna, or egg hoppers, kottu, and lamprais in Colombo.',
    keyPrep: ['Disclose food allergies', 'Walk with knowledgeable local host', 'Evening appetite'],
    practicalTags: ['Regional specialties', 'Allergy disclosure', 'Freshly cooked stops'],
    bestTimeOfDay: 'Morning market walk (08:00 to 10:30) or evening food walk (17:30 to 20:30)',
    editorialStatus: 'reviewed',
    reviewBy: '2027-05-01',
    sources: [
      { label: 'Sri Lanka Tourism: What to Do / Culinary', url: 'https://www.srilanka.travel/what-to-do', checkedDate: '2026-11-04' },
    ],
    image: colomboImage,
    imageAlt: 'Vibrant cultural and urban streetscape in Colombo.',
    hasDetailGuide: true,
  },
  {
    id: 'negombo-coastal-fish-market-morning',
    title: 'Walk a working dawn fish market and coastal drying beach',
    summary:
      'Visit Negombo’s Lellama fish market or southern harbour landings at daybreak to see traditional outrigger canoes (oruwa) and sun-dried karawala fish.',
    whyDistinctive:
      'Centuries-old sail-and-outrigger fishing traditions supply Sri Lanka’s coastal seafood and dried-fish pantry.',
    themeId: 'food-markets-culinary',
    themeLabel: 'Food, Markets & Culinary Learning',
    subtypeId: 'markets-produce',
    subtypeLabel: 'Morning Markets & Coastal Harbors',
    browsePath: 'food-local-life',
    browsePathLabel: 'Food, Community & Slow Living',
    category: 'food',
    categoryLabel: 'Food & Markets',
    primaryDestinationId: 'negombo',
    primaryDestinationName: 'Negombo',
    primaryDestinationRegion: 'West & North-West',
    regionId: 'west-coast',
    relatedDestinations: [
      { id: 'weligama', name: 'Weligama', relationship: 'Southern fishing bay with morning beach landings' },
      { id: 'trincomalee', name: 'Trincomalee', relationship: 'East-coast harbour and morning catch landings' },
    ],
    allDestinationIds: ['negombo', 'weligama', 'trincomalee'],
    duration: '1.5 hours',
    effort: 'Easy',
    effortDetails: 'Walking on wet market floors and sandy beach drying mats.',
    seasonSummary: 'Year-round; check non-fishing religious holidays and rough monsoon days',
    seasonDetails: 'Many Catholic fishing communities in Negombo do not land catches on Sunday mornings.',
    essentialCaveat: 'Fish markets are busy working auctions: wear closed washable shoes, stay clear of auction scales and handcarts, and always ask before photographing workers.',
    detailedGuidance: 'Arrive between 06:00 and 07:30 AM with a local guide when boats return and auction activity is at its peak.',
    keyPrep: ['Closed washable footwear', '06:00 AM arrival', 'Respectful photography'],
    practicalTags: ['Working harbour etiquette', 'Dawn timing', 'No Sunday auction in Negombo'],
    bestTimeOfDay: 'Daybreak (06:00 to 07:30 AM)',
    editorialStatus: 'reviewed',
    reviewBy: '2027-05-01',
    sources: [
      { label: 'Sri Lanka Tourism: Negombo & Coastal Culture', url: 'https://www.srilanka.travel/what-to-do', checkedDate: '2026-11-04' },
    ],
    image: negomboImage,
    imageAlt: 'Traditional fishing boats and coastal lagoon waters in Negombo.',
    hasDetailGuide: true,
  },

  // ============================================================================
  // 14. VILLAGE, FARMING & COMMUNITY LIFE
  // ============================================================================
  {
    id: 'sigiriya-rural-farming-walk',
    title: 'Walk with a dry-zone farming community near Sigiriya or Habarana',
    summary:
      'Explore irrigated paddy fields, chena vegetable plots, and village reservoir bunds with a local host who explains seasonal dry-zone agriculture.',
    whyDistinctive:
      'Dry-zone villages rely on ancient interconnected earthen tanks (wewa) that sustain rice harvests, home gardens, and freshwater ecosystems.',
    themeId: 'village-community-life',
    themeLabel: 'Village, Farming & Community Life',
    subtypeId: 'rural-farming-walks',
    subtypeLabel: 'Dry-Zone Farming & Tank Walks',
    browsePath: 'food-local-life',
    browsePathLabel: 'Food, Community & Slow Living',
    category: 'food',
    categoryLabel: 'Village & Community Life',
    primaryDestinationId: 'sigiriya',
    primaryDestinationName: 'Sigiriya Rock Fortress',
    primaryDestinationRegion: 'Cultural Triangle',
    regionId: 'cultural-triangle',
    relatedDestinations: [
      { id: 'polonnaruwa', name: 'Polonnaruwa Ancient City', relationship: 'Eastern irrigation heartland' },
      { id: 'dambulla', name: 'Dambulla Cave Temple', relationship: 'Major wholesale agricultural hub 25 minutes south' },
    ],
    allDestinationIds: ['sigiriya', 'polonnaruwa', 'dambulla'],
    duration: '2.5 to 3.5 hours',
    effort: 'Easy',
    effortDetails: 'Gentle walking on earthen tank bunds and shaded village footpaths.',
    seasonSummary: 'Year-round; Maha (Oct to Mar) and Yala (May to Aug) rice seasons shape field work',
    seasonDetails: 'Sowing, tending, and harvesting follow the two annual monsoon cultivation cycles.',
    essentialCaveat: 'Book only non-exploitative walks where payments go directly to host families, and avoid staged "village safari" packages or animal carts.',
    detailedGuidance: 'Ask before photographing homes or elders, dress modestly, and treat hosts as knowledgeable agricultural educators.',
    keyPrep: ['Sun hat & walking sandals/shoes', 'Respectful photography', 'Morning start'],
    practicalTags: ['Direct community income', 'No staged animal carts', 'Ancient tank farming'],
    bestTimeOfDay: 'Morning (07:30 to 10:30) or late afternoon (15:30 to 17:30)',
    editorialStatus: 'reviewed',
    reviewBy: '2027-05-01',
    sources: [
      { label: 'Sri Lanka Tourism: Community & Rural Experiences', url: 'https://www.srilanka.travel/what-to-do', checkedDate: '2026-11-04' },
    ],
    image: villageCookingImage,
    imageAlt: 'Traditional rural homestead preparation in dry-zone Sri Lanka.',
    hasDetailGuide: true,
  },
  {
    id: 'dambana-indigenous-heritage-visit',
    title: 'Learn about Indigenous Vedda forest heritage at Dambana',
    summary:
      'Meet community cultural representatives in Dambana near Mahiyanganaya to learn about Indigenous language (Vedi Basa), forest honey gathering, and stewardship.',
    whyDistinctive:
      'The Wanniyala-Aetto (Vedda) community is Sri Lanka’s Indigenous forest-dwelling people with deep ancestral ties to the eastern dry-zone forests.',
    themeId: 'village-community-life',
    themeLabel: 'Village, Farming & Community Life',
    subtypeId: 'indigenous-heritage',
    subtypeLabel: 'Indigenous Cultural Stewardship',
    browsePath: 'food-local-life',
    browsePathLabel: 'Food, Community & Slow Living',
    category: 'heritage',
    categoryLabel: 'Community & Indigenous Heritage',
    primaryDestinationId: 'dambana-indigenous-heritage',
    primaryDestinationName: 'Dambana',
    primaryDestinationRegion: 'Central Highlands & East',
    regionId: 'cultural-triangle',
    relatedDestinations: [
      { id: 'maduru-oya-national-park', name: 'Maduru Oya National Park', relationship: 'Neighbouring ancestral dry-zone forest habitat' },
      { id: 'gal-oya-national-park', name: 'Gal Oya National Park', relationship: 'Southeastern forest basin where Vedda naturalists also guide walks' },
    ],
    allDestinationIds: ['dambana-indigenous-heritage', 'maduru-oya-national-park', 'gal-oya-national-park'],
    duration: '2 to 3 hours',
    effort: 'Easy',
    effortDetails: 'Walking around the Dambana cultural center and forest-edge compound.',
    seasonSummary: 'Year-round; arrange community host protocols in advance',
    seasonDetails: 'Accessible year-round by road via Mahiyanganaya.',
    essentialCaveat: 'Research-needed community protocol: visits must be arranged through genuine community-led channels that respect Indigenous dignity, consent, and direct benefit-sharing.',
    detailedGuidance: 'Avoid unannounced drop-in tours that treat residents as a spectacle; engage through respectful translation and cultural learning.',
    keyPrep: ['Advance community arrangement', 'Respectful attire & consent', 'Direct compensation'],
    practicalTags: ['Community-led protocol', 'Indigenous stewardship', 'Respectful engagement'],
    bestTimeOfDay: 'Morning (08:30 to 11:30)',
    editorialStatus: 'research-needed',
    verificationNote: 'Requires verification of current community-sanctioned visitor protocols and direct fee distribution in Dambana or Rathugala.',
    reviewBy: '2027-02-01',
    sources: [
      { label: 'Sri Lanka Tourism: Cultural Heritage', url: 'https://www.srilanka.travel/what-to-do', checkedDate: '2026-11-04' },
    ],
    image: dambanaImage,
    imageAlt: 'Indigenous Vedda cultural heritage in Dambana, Sri Lanka.',
    hasDetailGuide: true,
  },

  // ============================================================================
  // 15. WELLNESS, AYURVEDA & RESTORATIVE STAYS
  // ============================================================================
  {
    id: 'bentota-south-coast-ayurveda-retreat',
    title: 'Commit to a physician-led Ayurveda consultation and restorative stay',
    summary:
      'Begin with a pulse and constitution assessment by a qualified Ayurvedic physician, followed by tailored herbal treatments, diet, and quiet coastal rest.',
    whyDistinctive:
      'Sri Lanka’s indigenous Deshiya Chikitsa and classical Ayurveda traditions emphasize multi-day physician-guided care rather than isolated spa treatments.',
    themeId: 'wellness-ayurveda',
    themeLabel: 'Wellness, Ayurveda & Restorative Stays',
    subtypeId: 'physician-ayurveda',
    subtypeLabel: 'Physician-Guided Ayurveda Stays',
    browsePath: 'food-local-life',
    browsePathLabel: 'Food, Community & Slow Living',
    category: 'coast',
    categoryLabel: 'Wellness & Ayurveda',
    primaryDestinationId: 'bentota',
    primaryDestinationName: 'Bentota',
    primaryDestinationRegion: 'South & West Coast',
    regionId: 'south-coast',
    relatedDestinations: [
      { id: 'tangalle', name: 'Tangalle', relationship: 'Quiet southern coves suited to multi-day retreats' },
      { id: 'ahangama-kabalana', name: 'Ahangama & Kabalana', relationship: 'Southern yoga and coastal wellness base' },
    ],
    allDestinationIds: ['bentota', 'tangalle', 'ahangama-kabalana', 'galle'],
    duration: 'Half-day consultation to 7+ day residential stay',
    effort: 'Easy',
    effortDetails: 'Restorative, unhurried pace centered on rest, warm herbal treatments, and gentle movement.',
    seasonSummary: 'Year-round; monsoon months (May to Sep) are traditionally favoured for cooling restorative regimens',
    seasonDetails: 'Classical Ayurvedic texts often favour the softer humidity of the rainy season for intensive panchakarma programs.',
    essentialCaveat: 'Distinguish registered Department of Ayurveda medical centers from casual tourist massage parlours. Never substitute wellness treatments for urgent medical care.',
    detailedGuidance: 'Disclose all current medications, blood pressure history, skin sensitivities, or pregnancy during your initial physician consultation.',
    keyPrep: ['Disclose medical history & medications', 'Verify Department of Ayurveda registration', 'Allow unhurried rest time'],
    practicalTags: ['Physician consultation', 'Registered centers only', 'No medical overclaims'],
    bestTimeOfDay: 'Morning consultations and treatments',
    editorialStatus: 'proposed',
    verificationNote: 'Verify current Department of Ayurveda / SLTDA wellness center registration before recommending specific retreats.',
    reviewBy: '2027-03-01',
    sources: [
      { label: 'Sri Lanka Tourism: Wellness & Ayurveda', url: 'https://www.srilanka.travel/what-to-do', checkedDate: '2026-11-04' },
    ],
    image: bentotaImage,
    imageAlt: 'Calm coastal palms and restorative shoreline at Bentota.',
    hasDetailGuide: true,
  },
  {
    id: 'highland-coastal-yoga-meditation',
    title: 'Practice morning yoga or mindfulness in the hills or southern coves',
    summary:
      'Join small-group hatha or vinyasa yoga sessions and guided breathwork in open-air shalas overlooking tea valleys or quiet southern bays.',
    whyDistinctive:
      'Open-sided timber pavilions in Ella, Kandy, Tangalle, and Hiriketiya pair contemplative practice with bird-filled gardens and sea breezes.',
    themeId: 'wellness-ayurveda',
    themeLabel: 'Wellness, Ayurveda & Restorative Stays',
    subtypeId: 'yoga-meditation',
    subtypeLabel: 'Yoga, Meditation & Slow Retreats',
    browsePath: 'food-local-life',
    browsePathLabel: 'Food, Community & Slow Living',
    category: 'tea-hill-country',
    categoryLabel: 'Wellness & Restorative Stays',
    primaryDestinationId: 'tangalle-core',
    primaryDestinationName: 'Hiriketiya',
    primaryDestinationRegion: 'South Coast',
    regionId: 'south-coast',
    relatedDestinations: [
      { id: 'ella', name: 'Ella', relationship: 'Highland valley yoga and slow-travel counterpart' },
      { id: 'kandy', name: 'Kandy', relationship: 'Home to traditional forest meditation centers' },
    ],
    allDestinationIds: ['tangalle-core', 'ella', 'kandy', 'tangalle'],
    duration: '1.5 hours (drop-in class) or 3 to 5 day stay',
    effort: 'Easy',
    effortDetails: 'Adaptable mat movement and seated meditation suitable for beginners and regular practitioners.',
    seasonSummary: 'South coast best Nov to Apr; central hills pleasant year-round',
    seasonDetails: 'Many coastal shalas reduce schedules during the peak of the May-to-July monsoon.',
    essentialCaveat: 'Silent Buddhist meditation centers (such as Nilambe near Kandy) are sincere religious retreats with strict codes of silence and discipline, not casual tourist stops.',
    detailedGuidance: 'Choose a studio or retreat that clearly states teacher qualifications and class level.',
    keyPrep: ['Light breathable clothing', 'Check seasonal class schedule', 'Respect silent retreat norms'],
    practicalTags: ['Open-air shalas', 'Beginner friendly', 'Respect contemplative spaces'],
    bestTimeOfDay: 'Morning (07:00 to 08:30) or sunset (16:30 to 18:00)',
    editorialStatus: 'reviewed',
    reviewBy: '2027-05-01',
    sources: [
      { label: 'Sri Lanka Tourism: Wellness & Mindfulness', url: 'https://www.srilanka.travel/what-to-do', checkedDate: '2026-11-04' },
    ],
    image: hiriketiyaImage,
    imageAlt: 'Palm-fringed horseshoe bay at Hiriketiya on the south coast.',
    hasDetailGuide: true,
  },

  // ============================================================================
  // 16. ARTS, CRAFTS, PERFORMANCE & FESTIVALS
  // ============================================================================
  {
    id: 'kandy-esala-perahera',
    title: 'Witness the Kandy Esala Perahera or traditional Kandyan drumming',
    summary:
      'Observe the historic Esala Perahera evening procession in Kandy during July or August, or attend a year-round showcase of Kandyan drumming and ves dance.',
    whyDistinctive:
      'Centuries-old ritual percussion (geta bera), whip-crackers, torchbearers, and ceremonial dancers honour the Sacred Tooth Relic.',
    themeId: 'arts-crafts-festivals',
    themeLabel: 'Arts, Crafts, Performance & Festivals',
    subtypeId: 'festivals-performance',
    subtypeLabel: 'Seasonal Festivals & Dance',
    browsePath: 'heritage',
    browsePathLabel: 'Heritage & Sacred Places',
    category: 'festivals',
    categoryLabel: 'Festivals & Performance',
    primaryDestinationId: 'kandy',
    primaryDestinationName: 'Kandy',
    primaryDestinationRegion: 'Central Highlands',
    regionId: 'hill-country',
    relatedDestinations: [
      { id: 'temple-of-the-tooth', name: 'Temple of the Tooth', relationship: 'Sacred origin point of the Esala Perahera' },
    ],
    allDestinationIds: ['kandy', 'temple-of-the-tooth'],
    duration: '1.5 hours (dance showcase) to 4 hours (festival evening)',
    effort: 'Moderate',
    effortDetails: 'Festival viewing involves long evening waits and dense street crowds; cultural hall performances are seated.',
    seasonSummary: 'Esala Perahera: Jul/Aug (lunar calendar); cultural dance halls: year-round',
    seasonDetails: 'Exact Kumbal and Randoli Perahera dates follow the Esala lunar calendar and are announced each year by the Sri Dalada Maligawa.',
    essentialCaveat: 'Confirm official festival dates each year. Note that traditional peraheras include caparisoned elephants, which raises important animal-welfare considerations for many travellers.',
    detailedGuidance: 'If visiting outside July and August, attend an early-evening Kandyan dance and drumming performance near Kandy Lake.',
    keyPrep: ['Confirm official annual dates', 'Book viewing seats months ahead for Jul/Aug', 'Modest attire'],
    practicalTags: ['Jul/Aug lunar calendar', 'High crowd density', 'Year-round dance option'],
    bestTimeOfDay: 'Evening (17:00 for dance halls; 19:30 to 23:00 for Perahera)',
    editorialStatus: 'reviewed',
    reviewBy: '2027-05-01',
    sources: [
      { label: 'Sri Dalada Maligawa: Official Kandy Esala Perahera Information', url: 'https://sridaladamaligawa.lk/', checkedDate: '2026-11-04' },
      { label: 'UNESCO World Heritage Centre: Sacred City of Kandy', url: 'https://whc.unesco.org/en/list/450/', checkedDate: '2026-11-04' },
    ],
    image: kandyPeraheraImage,
    imageAlt: 'Traditional Kandyan dancers and torchlight during the Kandy Esala Perahera.',
    hasDetailGuide: true,
    featuredOnHub: false,
  },
  {
    id: 'ambalangoda-mask-lace-craft',
    title: 'Visit Ambalangoda mask carvers and southern lace weavers',
    summary:
      'Watch master woodcarvers shape lightweight kaduru wood into vibrant Kolam and Sanni ritual masks in Ambalangoda, or see handmade pillow lace (beeralu) in Galle.',
    whyDistinctive:
      'Southern coastal artisan families preserve intricate carving, natural mineral pigment painting, and bobbin-lace weaving passed down across generations.',
    themeId: 'arts-crafts-festivals',
    themeLabel: 'Arts, Crafts, Performance & Festivals',
    subtypeId: 'artisan-workshops',
    subtypeLabel: 'Mask Carving, Weaving & Pottery',
    browsePath: 'heritage',
    browsePathLabel: 'Heritage & Sacred Places',
    category: 'heritage',
    categoryLabel: 'Arts & Artisan Craft',
    primaryDestinationId: 'galle',
    primaryDestinationName: 'Ambalangoda',
    primaryDestinationRegion: 'South & West Coast',
    regionId: 'south-coast',
    relatedDestinations: [
      { id: 'galle', name: 'Galle Fort', relationship: 'Southern heritage hub 35 minutes south' },
      { id: 'bentota', name: 'Bentota', relationship: 'Coastal town 25 minutes north' },
    ],
    allDestinationIds: ['galle', 'galle', 'bentota'],
    duration: '1 to 2 hours',
    effort: 'Easy',
    effortDetails: 'Indoor museum and workshop visit.',
    seasonSummary: 'Year-round',
    seasonDetails: 'Workshops and the Ambalangoda mask museum operate throughout the year.',
    essentialCaveat: 'Purchase directly from genuine working artisans and family cooperatives rather than commission-driven highway souvenir emporiums.',
    detailedGuidance: 'Ask carvers how lightweight kaduru (Strychnos nux-vomica / Cerbera manghas) wood is smoke-seasoned before carving.',
    keyPrep: ['Visit working family workshops', 'Check museum opening hours'],
    practicalTags: ['Kaduru woodcraft', 'Direct artisan support', 'Year-round'],
    bestTimeOfDay: 'Morning or mid-afternoon (09:00 to 16:30)',
    editorialStatus: 'reviewed',
    reviewBy: '2027-05-01',
    sources: [
      { label: 'Sri Lanka Tourism: Traditional Arts & Crafts', url: 'https://www.srilanka.travel/what-to-do', checkedDate: '2026-11-04' },
    ],
    image: ambalangodaImage,
    imageAlt: 'Traditional carved wooden masks and coastal heritage in Ambalangoda.',
    hasDetailGuide: true,
  },
  {
    id: 'ratnapura-gem-craft-heritage',
    title: 'Explore traditional gem-washing and lapidary craft in Ratnapura',
    summary:
      'Learn how alluvial gem gravels (illama) are washed in wicker baskets and how sapphires are cut and polished in Sri Lanka’s historic City of Gems.',
    whyDistinctive:
      'Ratnapura’s river valleys have yielded Ceylon blue, padparadscha, and star sapphires for over two millennia.',
    themeId: 'arts-crafts-festivals',
    themeLabel: 'Arts, Crafts, Performance & Festivals',
    subtypeId: 'gem-lapidary-craft',
    subtypeLabel: 'Gem & Lapidary Heritage',
    browsePath: 'heritage',
    browsePathLabel: 'Heritage & Sacred Places',
    category: 'heritage',
    categoryLabel: 'Arts & Artisan Craft',
    primaryDestinationId: 'ratnapura-gem-heritage',
    primaryDestinationName: 'Ratnapura',
    primaryDestinationRegion: 'Sabaragamuwa & Wet Zone',
    regionId: 'hill-country',
    allDestinationIds: ['ratnapura-gem-heritage'],
    duration: '1.5 to 2.5 hours',
    effort: 'Easy',
    effortDetails: 'Short walks around alluvial pit sites or indoor lapidary demonstrations; ground near pits can be muddy.',
    seasonSummary: 'Drier months Jan to Apr best for outdoor alluvial pit demonstrations',
    seasonDetails: 'Heavy southwest monsoon rain frequently floods shallow river-valley gem pits.',
    essentialCaveat: 'Treat Ratnapura visits strictly as geological and craft education. Never buy high-value stones without independent NGJA (National Gem and Jewellery Authority) laboratory certification.',
    detailedGuidance: 'Avoid informal street gem sellers and high-pressure showrooms.',
    keyPrep: ['Educational focus only', 'Require NGJA certification if purchasing', 'Closed shoes for muddy pit edges'],
    practicalTags: ['Geological education', 'Beware gem scams', 'NGJA standards'],
    bestTimeOfDay: 'Morning (08:30 to 11:30)',
    editorialStatus: 'proposed',
    verificationNote: 'Verify educational tour operators that do not rely on high-pressure gem sales commissions.',
    reviewBy: '2027-03-01',
    sources: [
      { label: 'National Gem and Jewellery Authority (NGJA) Sri Lanka', url: 'https://www.ngja.gov.lk/', checkedDate: '2026-11-04' },
    ],
    image: ratnapuraGemImage,
    imageAlt: 'Traditional gem-washing and lapidary heritage in Ratnapura.',
    hasDetailGuide: true,
  },

  // ============================================================================
  // 17. BEACHES, COASTLINES & ISLANDS
  // ============================================================================
  {
    id: 'pasikuda-nilaveli-east-coast-bays',
    title: 'Swim in calm east-coast bays at Pasikuda and Nilaveli',
    summary:
      'Unwind along wide crescents of pale sand and gently shelving turquoise water on Sri Lanka’s eastern seaboard between May and September.',
    whyDistinctive:
      'Outer reef systems at Pasikuda and Nilaveli create exceptionally calm, shallow swimming bays during the northern hemisphere summer.',
    themeId: 'beaches-coast-islands',
    themeLabel: 'Beaches, Coastlines & Islands',
    subtypeId: 'swimming-beach-bays',
    subtypeLabel: 'Calm Seasonal Swimming Bays',
    browsePath: 'sea-surf',
    browsePathLabel: 'Sea, Surf & Coast',
    category: 'coast',
    categoryLabel: 'Beaches & Coastlines',
    primaryDestinationId: 'pasikuda',
    primaryDestinationName: 'Pasikuda',
    primaryDestinationRegion: 'East Coast',
    regionId: 'east-coast',
    relatedDestinations: [
      { id: 'nilaveli', name: 'Nilaveli', relationship: 'Wide sandy beach north of Trincomalee' },
      { id: 'trincomalee', name: 'Trincomalee', relationship: 'East-coast harbour town and Uppuveli beach hub' },
    ],
    allDestinationIds: ['pasikuda', 'nilaveli', 'trincomalee', 'batticaloa'],
    duration: 'Half day to multi-day coastal stay',
    effort: 'Easy',
    effortDetails: 'Relaxed shoreline walking and shallow-water swimming.',
    seasonSummary: 'May to Sep east-coast dry season',
    seasonDetails: 'During the southwest monsoon (May to September), the east coast enjoys sunny skies and calm seas.',
    essentialCaveat: 'Even on calm coasts, check daily wind and current conditions, wear reef-safe UV protection, and avoid stepping on nearshore coral patches.',
    detailedGuidance: 'Early morning walks along Nilaveli and Pasikuda offer cool temperatures and views of local beach-seine (ma-del) fishermen.',
    keyPrep: ['UV rash guard & sun hat', 'Visit between May and September', 'Drinking water'],
    practicalTags: ['May to Sep season', 'Shallow shelving bay', 'East coast sun'],
    bestTimeOfDay: 'Early morning (06:30 to 10:00) and late afternoon (15:30 to 18:00)',
    editorialStatus: 'reviewed',
    reviewBy: '2027-04-01',
    sources: [
      { label: 'Sri Lanka Tourism: Pristine Beaches', url: 'https://www.srilanka.travel/pristine', checkedDate: '2026-11-04' },
    ],
    image: pasikudaImage,
    imageAlt: 'Calm turquoise water and sandy shoreline at Pasikuda Bay on the east coast.',
    hasDetailGuide: true,
    featuredOnHub: false,
  },
  {
    id: 'tangalle-bentota-south-west-coast',
    title: 'Explore southern coves at Tangalle, Unawatuna, and Bentota',
    summary:
      'Match golden west-coast river estuaries at Bentota or palm-fringed southern coves around Unawatuna, Mirissa, and Tangalle to the December-to-April season.',
    whyDistinctive:
      'The southwestern shoreline shifts within two hours from wide calm estuary beaches at Bentota to dramatic rocky headlands and quiet bays around Tangalle.',
    themeId: 'beaches-coast-islands',
    themeLabel: 'Beaches, Coastlines & Islands',
    subtypeId: 'coastal-walks-coves',
    subtypeLabel: 'Headland Walks & Quiet Coves',
    browsePath: 'sea-surf',
    browsePathLabel: 'Sea, Surf & Coast',
    category: 'coast',
    categoryLabel: 'Beaches & Coastlines',
    primaryDestinationId: 'tangalle',
    primaryDestinationName: 'Tangalle',
    primaryDestinationRegion: 'South Coast',
    regionId: 'south-coast',
    relatedDestinations: [
      { id: 'bentota', name: 'Bentota', relationship: 'West-coast beach and river estuary resort hub' },
      { id: 'unawatuna', name: 'Unawatuna', relationship: 'Sheltered horseshoe bay near Galle Fort' },
      { id: 'mirissa', name: 'Mirissa', relationship: 'Southern headland bay 45 minutes west of Tangalle' },
    ],
    allDestinationIds: ['tangalle', 'bentota', 'unawatuna', 'mirissa', 'tangalle-core'],
    duration: 'Half day to multi-day coastal stay',
    effort: 'Easy',
    effortDetails: 'Sandy beach walks and sheltered cove swimming.',
    seasonSummary: 'Dec to Apr south and west coast dry season',
    seasonDetails: 'Sea conditions are calmest from December through April; May to October brings heavy southwest monsoon surf and rip currents.',
    essentialCaveat: 'Many wide southern beaches around Tangalle have strong shorebreak and rip currents even in dry months. Swim only in reef-sheltered coves or where lifeguards indicate safe zones.',
    detailedGuidance: 'Ask your host which local rock-pool or reef-protected cove is calmest for swimming on the day of your visit, and keep beaches completely dark after dusk on turtle-nesting shores.',
    keyPrep: ['Heed rip-current warnings', 'Swim only in sheltered coves', 'Lights out on nesting beaches at night'],
    practicalTags: ['Dec to Apr season', 'Check local currents', 'Scenic headland walks'],
    bestTimeOfDay: 'Morning (07:00 to 10:30) and late afternoon sunset walks',
    editorialStatus: 'reviewed',
    reviewBy: '2027-04-01',
    sources: [
      { label: 'Sri Lanka Tourism: Pristine Coastal Destinations', url: 'https://www.srilanka.travel/pristine', checkedDate: '2026-11-04' },
    ],
    image: tangalleImage,
    imageAlt: 'Palm-lined golden sand cove and coastal rocks at Tangalle.',
    hasDetailGuide: true,
  },
];

// ============================================================================
// DERIVED HELPER COLLECTIONS & LOOKUPS
// ============================================================================

export const reviewedExperiences: ExperienceRecord[] = allExperiences.filter(
  (exp) => exp.editorialStatus === 'reviewed'
);

export const proposedExperiences: ExperienceRecord[] = allExperiences.filter(
  (exp) => exp.editorialStatus !== 'reviewed'
);

export const featuredHubExperiences: ExperienceRecord[] = allExperiences.filter(
  (exp) => exp.featuredOnHub
);

// Backward-compatible export for components referencing launchExperiences
export const launchExperiences: ExperienceRecord[] = allExperiences;

export const browsePaths: BrowsePathInfo[] = [
  {
    id: 'wildlife',
    label: 'Wildlife, Marine & Biodiversity',
    shortLabel: 'Wildlife & Nature',
    description:
      'National park safaris, responsible whale watching, turtle conservation, birding wetlands, and UNESCO cloud-forest walks.',
    seasonNote: 'West/South parks & seas: Nov to Apr · East/North parks & Gatherings: May to Sep',
    themeIds: ['wildlife-safaris', 'marine-wildlife', 'birdwatching-biodiversity'],
  },
  {
    id: 'sea-surf',
    label: 'Surf, Reefs, Rivers & Coast',
    shortLabel: 'Sea, Surf & Water',
    description:
      'Sandy beginner surf bays, seasonal point breaks, reef snorkelling, Kelani River rafting, and calm swimming coves.',
    seasonNote: 'South/West coast: Nov to Apr · East coast (Arugam Bay, Nilaveli, Pasikuda): May to Sep',
    themeIds: ['surfing-board-sports', 'diving-snorkelling', 'rafting-rivers-water', 'beaches-coast-islands'],
  },
  {
    id: 'highlands',
    label: 'Highlands, Trails, Trains & Tea',
    shortLabel: 'Highlands & Tea',
    description:
      'Cloud-forest plateau hikes, Pekoe Trail stages, scenic mountain railways, working tea factories, and cinnamon craft.',
    seasonNote: 'Central hills: Crisp mornings Jan to Apr · Eastern Uva slopes: May to Sep',
    themeIds: ['hiking-mountain-trails', 'scenic-journeys', 'tea-spice-plantations'],
  },
  {
    id: 'heritage',
    label: 'Heritage, Sacred Places & Craft',
    shortLabel: 'Heritage & Culture',
    description:
      'UNESCO rock citadels, ancient city bicycle circuits, living Buddhist and Hindu shrines, mask carving, and seasonal festivals.',
    seasonNote: 'Accessible year-round · Start climbs and cycling circuits at 07:00 AM before midday heat',
    themeIds: ['ancient-cities-archaeology', 'spirituality-pilgrimage', 'cycling-two-wheel', 'arts-crafts-festivals'],
  },
  {
    id: 'food-local-life',
    label: 'Food, Community & Slow Living',
    shortLabel: 'Food & Slow Living',
    description:
      'Clay-pot home cooking classes, regional food walks in Jaffna and Colombo, rural farming communities, and physician-led Ayurveda.',
    seasonNote: 'Year-round in home kitchens, markets, and coastal or highland wellness retreats',
    themeIds: ['food-markets-culinary', 'village-community-life', 'wellness-ayurveda'],
  },
];

export function getThemeById(themeId: string): ExperienceTheme | undefined {
  return experienceThemes.find((t) => t.id === themeId);
}

export function getExperiencesByTheme(themeId: ExperienceThemeId): ExperienceRecord[] {
  return allExperiences.filter((exp) => exp.themeId === themeId);
}

export function getExperienceById(id: string): ExperienceRecord | undefined {
  return allExperiences.find((exp) => exp.id === id);
}

export const allExperienceDestinations: DestinationFilterOption[] = (() => {
  const map = new Map<string, DestinationFilterOption>();

  for (const exp of allExperiences) {
    const existing = map.get(exp.primaryDestinationId);
    if (existing) {
      existing.count += 1;
    } else {
      map.set(exp.primaryDestinationId, {
        id: exp.primaryDestinationId,
        name: exp.primaryDestinationName,
        region: exp.primaryDestinationRegion,
        count: 1,
      });
    }

    if (exp.relatedDestinations) {
      for (const rel of exp.relatedDestinations) {
        const relExisting = map.get(rel.id);
        if (relExisting) {
          relExisting.count += 1;
        } else {
          map.set(rel.id, {
            id: rel.id,
            name: rel.name,
            region: exp.primaryDestinationRegion,
            count: 1,
          });
        }
      }
    }
  }

  return Array.from(map.values()).sort((a, b) => a.name.localeCompare(b.name));
})();


