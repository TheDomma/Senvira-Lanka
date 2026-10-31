import type { CatalogueEntry, CatalogueTier, DestinationCategoryId } from './destinationCatalogue';

type RegionId = CatalogueEntry['regionId'];

const tierLabels: Record<Exclude<CatalogueTier, 'featured'>, CatalogueEntry['tierLabel']> = {
  core: 'Core Destination',
  extended: 'Hidden Gem',
  attraction: 'Regional Attraction',
};

const regionClusters: Record<RegionId, string> = {
  'cultural-triangle': 'Cultural Triangle Region',
  'hill-country': 'Hill Country Region',
  'south-coast': 'Southern Coast Region',
  'west-coast': 'West Coast & Colombo Region',
  'east-coast': 'East Coast Region',
  north: 'Northern Peninsula Region',
  southeast: 'Southeast & Wildlife Region',
};

const categoryLabels: Record<DestinationCategoryId, string> = {
  heritage: 'Culture & Heritage',
  highlands: 'Highlands & Tea',
  beaches: 'Beaches & Coast',
  wildlife: 'Wildlife & Nature',
  cities: 'Cities & Culture',
  waterfalls: 'Waterfalls',
};

const mk = (
  tier: Exclude<CatalogueTier, 'featured'>,
  regionId: RegionId,
  name: string,
  provinceArea: string,
  categoryId: DestinationCategoryId,
  description: string,
  tags: string[],
  hubId: string,
  hubName: string,
  alsoCategoryIds?: DestinationCategoryId[],
): CatalogueEntry => ({
  id: name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, ''),
  name,
  tier,
  tierLabel: tierLabels[tier],
  regionId,
  regionCluster: regionClusters[regionId],
  provinceArea,
  categoryId,
  categoryLabel: categoryLabels[categoryId],
  description,
  tags,
  hubId,
  hubName,
  ...(alsoCategoryIds ? { alsoCategoryIds } : {}),
});

/** One principal city or town for every one of Sri Lanka's 25 districts that is not already covered by a featured hub. */
const districtCities: CatalogueEntry[] = [
  mk('core', 'west-coast', 'Gampaha', 'Western · Gampaha District', 'cities', 'District capital in the green belt north of Colombo, close to Henarathgoda Botanical Garden and the airport corridor.', ['District Capital', 'Botanical Garden', 'Near Airport'], 'colombo', 'Colombo'),
  mk('core', 'cultural-triangle', 'Matale', 'Central · Matale District', 'cities', 'Spice-garden town in a valley, with the colourful Sri Muthumariamman Temple and the gateway road to Sigiriya.', ['District Capital', 'Spice Gardens', 'Hindu Temple'], 'sigiriya', 'Sigiriya'),
  mk('core', 'south-coast', 'Hambantota', 'Southern · Hambantota District', 'cities', 'Southern district capital with a working harbour, salt pans, coastal dunes, and quick access to Bundala and Yala.', ['District Capital', 'Harbour', 'Salt Pans'], 'tangalle', 'Tangalle'),
  mk('core', 'north', 'Vavuniya', 'Northern · Vavuniya District', 'cities', 'Principal northern gateway city where the Cultural Triangle meets the Jaffna peninsula, with historic tanks and kovils.', ['District Capital', 'Northern Gateway', 'Historic Tanks'], 'anuradhapura', 'Anuradhapura'),
  mk('core', 'north', 'Kilinochchi', 'Northern · Kilinochchi District', 'cities', 'Gateway town to the Jaffna peninsula via the A9, set among paddy fields and lagoon country.', ['District Capital', 'A9 Gateway', 'Lagoon Country'], 'jaffna', 'Jaffna'),
  mk('core', 'north', 'Mannar Town', 'Northern · Mannar District', 'cities', 'Island town linked by causeway, known for its Dutch fort, baobab trees, and bird-rich shallows.', ['District Capital', 'Dutch Fort', 'Baobab Trees'], 'jaffna', 'Jaffna'),
  mk('core', 'north', 'Mullaitivu Town', 'Northern · Mullaitivu District', 'cities', 'Quiet north-eastern coastal district capital with long empty beaches and lagoon fishing communities.', ['District Capital', 'Quiet Coast', 'Lagoon Fishing'], 'trincomalee', 'Trincomalee'),
  mk('core', 'east-coast', 'Ampara', 'Eastern · Ampara District', 'cities', 'Inland district capital and base for Gal Oya, Senanayake Samudraya boat trips, and the Okanda route.', ['District Capital', 'Gal Oya Base', 'Boat Safaris'], 'yala', 'Yala'),
  mk('core', 'cultural-triangle', 'Kurunegala', 'North Western · Kurunegala District', 'cities', 'Former royal capital beneath huge granite outcrops, with a hilltop Buddha statue and a lively market centre.', ['District Capital', 'Elephant Rock', 'Former Capital'], 'dambulla', 'Dambulla'),
  mk('core', 'west-coast', 'Puttalam', 'North Western · Puttalam District', 'cities', 'Lagoon-side district capital and gateway to Kalpitiya, Wilpattu, and the salt-making coast.', ['District Capital', 'Lagoon Town', 'Kalpitiya Gateway'], 'colombo', 'Colombo'),
  mk('core', 'hill-country', 'Badulla', 'Uva · Badulla District', 'cities', 'End of the main hill-country rail line, with Muthiyangana Temple and the road to Dunhinda Falls.', ['District Capital', 'Railway Terminus', 'Muthiyangana Temple'], 'ella', 'Ella'),
  mk('core', 'southeast', 'Monaragala', 'Uva · Monaragala District', 'cities', 'Dry-zone hill town below rock domes, linking Arugam Bay, Kataragama, and Buduruwagala.', ['District Capital', 'Rock Domes', 'Route Junction'], 'yala', 'Yala'),
  mk('core', 'hill-country', 'Ratnapura', 'Sabaragamuwa · Ratnapura District', 'cities', 'City of Gems with working mines, a gem market, and the traditional starting point for Adam\u2019s Peak and Sinharaja.', ['District Capital', 'Gem Market', 'Rainforest Gateway'], 'kandy', 'Kandy'),
  mk('core', 'hill-country', 'Kegalle', 'Sabaragamuwa · Kegalle District', 'cities', 'Hill town on the Colombo to Kandy road, close to Pinnawala, Kitulgala, and Dehiowita waterfalls.', ['District Capital', 'Elephant Orphanage', 'Rafting Gateway'], 'kandy', 'Kandy'),
];

/** Beaches, bays and surf spots that were missing from the directory. */
const beaches: CatalogueEntry[] = [
  mk('core', 'south-coast', 'Ahangama', 'Southern · Galle District', 'beaches', 'Relaxed surf village with stilt-fisherman views, boutique stays, and cafés strung along the coast road.', ['Surf Breaks', 'Stilt Fishermen', 'Cafés'], 'galle', 'Galle'),
  mk('core', 'south-coast', 'Jungle Beach', 'Southern · Galle District, Rumassala', 'beaches', 'Sheltered cove below Rumassala hill, reached on a short forest path, good for calm swimming and snorkelling.', ['Calm Swimming', 'Snorkelling', 'Forest Path'], 'galle', 'Galle'),
  mk('core', 'south-coast', 'Hiriketiya', 'Southern · Matara District, Dickwella', 'beaches', 'Horseshoe bay with a friendly surf break, beginner waves, and a relaxed beach-café scene.', ['Horseshoe Bay', 'Surf School', 'Beach Cafés'], 'mirissa', 'Mirissa'),
  mk('core', 'south-coast', 'Dickwella', 'Southern · Matara District', 'beaches', 'Quiet beach town beside Hiriketiya, with a giant seated Buddha at Wewurukannala Vihara nearby.', ['Quiet Beach', 'Wewurukannala', 'Surf Access'], 'mirissa', 'Mirissa'),
  mk('core', 'south-coast', 'Midigama', 'Southern · Matara District', 'beaches', 'Reef breaks for all levels and a laid-back surf-and-yoga stretch between Ahangama and Weligama.', ['Reef Breaks', 'Yoga', 'Surf Camps'], 'mirissa', 'Mirissa'),
  mk('core', 'south-coast', 'Talalla', 'Southern · Matara District', 'beaches', 'Wide, uncrowded sweep of golden sand with gentle waves and a quieter feel than Mirissa.', ['Wide Beach', 'Quiet Stay', 'Sunsets'], 'tangalle', 'Tangalle'),
  mk('extended', 'south-coast', 'Polhena Beach', 'Southern · Matara District', 'beaches', 'Reef-protected bay beside Matara where turtles graze and calm water suits families.', ['Turtles', 'Calm Reef', 'Family Swimming'], 'mirissa', 'Mirissa'),
  mk('extended', 'south-coast', 'Koggala', 'Southern · Galle District', 'beaches', 'Lake, beach, and stilt-fishing coast with Martin Wickramasinghe\u2019s museum and island temples on the lagoon.', ['Stilt Fishing', 'Koggala Lake', 'Museum'], 'galle', 'Galle'),
  mk('extended', 'south-coast', 'Thalpe', 'Southern · Galle District', 'beaches', 'Palm-edged coast between Galle and Unawatuna with calm coves and small seaside stays.', ['Hidden Coves', 'Palm Shore', 'Quiet Stays'], 'galle', 'Galle'),
  mk('extended', 'south-coast', 'Mawella Beach', 'Southern · Hambantota District', 'beaches', 'Quiet crescent near Tangalle with calm shallows and a natural rock pool at one end.', ['Calm Shallows', 'Rock Pool', 'Quiet Beach'], 'tangalle', 'Tangalle'),
  mk('extended', 'south-coast', 'Goyambokka Beach', 'Southern · Hambantota District', 'beaches', 'Small, secluded bay near Tangalle ringed by rocks, with soft sand and gentle swimming.', ['Secluded Bay', 'Soft Sand', 'Swimming'], 'tangalle', 'Tangalle'),
  mk('core', 'south-coast', 'Kabalana Beach', 'Southern · Galle District, Ahangama', 'beaches', 'Signature southern reef and beach-break bay famous for "The Rock" surf wave and golden sand.', ['The Rock Surf Break', 'Longboard Waves', 'Sunset Shore'], 'galle', 'Galle'),
  mk('core', 'west-coast', 'Beruwala', 'Western · Kalutara District', 'beaches', 'Resort coast with a historic harbour, an old lighthouse island, and long sandy beaches.', ['Resort Coast', 'Harbour', 'Lighthouse Island'], 'bentota', 'Bentota'),
  mk('extended', 'west-coast', 'Wadduwa', 'Western · Kalutara District', 'beaches', 'Easy west-coast beach stop close to Colombo, with calm months from November to April.', ['Near Colombo', 'Easy Day Trip', 'Sandy Shore'], 'colombo', 'Colombo'),
  mk('extended', 'west-coast', 'Induruwa', 'Southern · Galle District', 'beaches', 'Quieter stretch of west-coast sand near Kosgoda, popular with turtle-conservation visitors.', ['Quiet Sand', 'Turtle Hatcheries', 'Sunsets'], 'bentota', 'Bentota'),
  mk('extended', 'west-coast', 'Ambalangoda', 'Southern · Galle District', 'beaches', 'Coastal town famed for traditional masks, a mask museum, and beaches south of Hikkaduwa.', ['Mask Carving', 'Mask Museum', 'Beach Stop'], 'galle', 'Galle'),
  mk('core', 'east-coast', 'Uppuveli', 'Eastern · Trincomalee District', 'beaches', 'Relaxed sandy beach just north of Trincomalee town, good for swimming and diving trips.', ['Swimming', 'Diving', 'Beach Stays'], 'trincomalee', 'Trincomalee'),
  mk('extended', 'east-coast', 'Pottuvil Point', 'Eastern · Ampara District', 'beaches', 'Long right-hand point break and lagoon sunsets a short ride from Arugam Bay.', ['Point Break', 'Lagoon', 'Sunsets'], 'yala', 'Yala'),
  mk('extended', 'south-coast', 'Silent Beach', 'Southern · Hambantota District, Tangalle', 'beaches', 'Postcard-pretty crescent of pale sand and swaying palms tucked below a quiet headland near Tangalle.', ['Palm Crescent', 'Uncrowded Cove', 'Headland Walk'], 'tangalle', 'Tangalle'),
  mk('extended', 'west-coast', 'Bar Reef', 'North Western · Puttalam District, Kalpitiya', 'beaches', 'Sri Lanka\u2019s largest coral reef system, best for snorkelling and diving between November and April.', ['Coral Reef', 'Snorkelling', 'Diving'], 'colombo', 'Colombo'),
];

/** Waterfalls added to the directory (existing waterfall entries are re-themed in destinations.ts). */
const waterfalls: CatalogueEntry[] = [
  mk('core', 'hill-country', 'Dunhinda Falls', 'Uva · Badulla District', 'waterfalls', 'Misty \u201Csmoky\u201D fall reached by a short forest walk from Badulla town.', ['Forest Walk', 'Mist Viewpoint', 'Near Badulla'], 'ella', 'Ella'),
  mk('core', 'hill-country', 'Laxapana Falls', 'Central · Nuwara Eliya District, Maskeliya', 'waterfalls', 'Power-generating cascade on the Maskeliya Oya, seen from the road to Adam\u2019s Peak.', ['Maskeliya', 'Adam\u2019s Peak Road', 'Cascade'], 'nuwara-eliya', 'Nuwara Eliya'),
  mk('core', 'hill-country', 'Ramboda Falls', 'Central · Nuwara Eliya District', 'waterfalls', 'Tiered fall beside the Kandy to Nuwara Eliya road, with tea country views all around.', ['Roadside Falls', 'Tea Country', 'Photo Stop'], 'nuwara-eliya', 'Nuwara Eliya'),
  mk('extended', 'hill-country', 'Lover\u2019s Leap Falls', 'Central · Nuwara Eliya District', 'waterfalls', 'Short walk through tea estates to a slender fall just outside Nuwara Eliya town.', ['Tea Estate Walk', 'Near Town', 'Legend'], 'nuwara-eliya', 'Nuwara Eliya'),
  mk('extended', 'hill-country', 'Elgin Falls', 'Central · Nuwara Eliya District, Hatton', 'waterfalls', 'Hidden stream-fed cascade near Hatton, popular for a light hike and a cool dip.', ['Light Hike', 'Hatton', 'Cool Dip'], 'nuwara-eliya', 'Nuwara Eliya'),
  mk('extended', 'hill-country', 'Baker\u2019s Falls', 'Central · Nuwara Eliya District, Horton Plains', 'waterfalls', 'Forest fall on the Horton Plains circuit, reached by a short side path from the main trail.', ['Horton Plains', 'Forest Path', 'Cloud Forest'], 'nuwara-eliya', 'Nuwara Eliya'),
  mk('extended', 'hill-country', 'Hunas Falls', 'Central · Kandy District, Rangala', 'waterfalls', 'Cascade above the Knuckles foothills, set among tea and cardamom country east of Kandy.', ['Knuckles Foothills', 'Tea Country', 'Day Trip'], 'kandy', 'Kandy'),
  mk('extended', 'hill-country', 'Gerandi Ella', 'Sabaragamuwa · Kegalle District, Kitulgala', 'waterfalls', 'Rainforest waterfall with a natural pool near Kitulgala\u2019s river-rafting stretch.', ['Rainforest', 'Natural Pool', 'Kitulgala'], 'kandy', 'Kandy'),
  mk('extended', 'hill-country', 'Duwili Ella', 'Sabaragamuwa · Kegalle District, Dehiowita', 'waterfalls', 'Wide, shallow fall near Dehiowita, easy to combine with Kitulgala and Pinnawala.', ['Dehiowita', 'Shallow Pools', 'Easy Stop'], 'kandy', 'Kandy'),
  mk('extended', 'hill-country', 'Sera Ella', 'Central · Matale District, Knuckles', 'waterfalls', 'Curtain-like waterfall in the eastern Knuckles foothills with a natural rock cave tucked behind the falling water.', ['Rock Cave Behind Falls', 'Knuckles East', 'Riverston Route'], 'kandy', 'Kandy'),
  mk('extended', 'hill-country', 'Gartmore Falls', 'Central · Nuwara Eliya District, Maskeliya', 'waterfalls', 'Twin-stream cascade tumbling directly into Castlereagh Reservoir with views toward Adam\u2019s Peak.', ['Maskeliya Valley', 'Castlereagh Reservoir', 'Twin Cascades'], 'nuwara-eliya', 'Nuwara Eliya'),
  mk('attraction', 'hill-country', 'Bambarakiri Ella', 'Central · Matale District, Rattota', 'waterfalls', 'Forested mountain cascade crossed by a narrow suspension bridge on the climb toward Riverston.', ['Suspension Bridge', 'Rattota Road', 'Mountain Stream'], 'kandy', 'Kandy'),
];

export const extraCatalogueEntries: CatalogueEntry[] = [...districtCities, ...beaches, ...waterfalls];

/** Existing entries that should be listed under the Waterfalls theme. */
export const waterfallEntryIds = new Set([
  'diyaluma-falls',
  'bomburu-ella-falls',
  'bopath-ella-falls',
  'bambarakanda-falls',
  'ravana-falls',
  'st-clairs-falls',
  'devon-falls',
  'aberdeen-falls',
]);

/** Existing entries for district capitals/major towns that should also surface under the Cities theme. */
export const alsoCityEntryIds = new Set([
  'negombo',
  'kalutara',
  'matara',
  'batticaloa',
  'point-pedro',
  'bandarawela',
  'haputale',
  'hatton',
  'tissamaharama',
  'mahiyanganaya',
]);
