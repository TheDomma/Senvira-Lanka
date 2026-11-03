/**
 * Verified WGS84 coordinates (lat, lng) and location provenance for all 204 destinations
 * in the Senvira Lanka islandwide directory.
 *
 * Each entry maps to its own real-world geographic location (town centre, archaeological monument,
 * waterfall viewpoint, coastal headland, or official national park visitor entrance) and never
 * substitutes a nearby itinerary hub's coordinates.
 */

export interface DestinationCoordinateRecord {
  /** Verified WGS84 latitude (degrees North). */
  lat: number;
  /** Verified WGS84 longitude (degrees East). */
  lng: number;
  /** Specific landmark, town centre, or park visitor entrance represented by this point. */
  representativePoint: string;
  /** Authoritative geographic reference source for the coordinates. */
  source: string;
}

export const VERIFIED_DESTINATION_COORDINATES: Record<string, DestinationCoordinateRecord> = {
  // === 15 FEATURED HUBS ===
  'sigiriya': {
    lat: 7.9570, lng: 80.7603,
    representativePoint: 'Sigiriya Lion Rock citadel & Western Water Gardens entrance',
    source: 'UNESCO World Heritage Centre / Survey Department of Sri Lanka (7°57′25″N 80°45′37″E)',
  },
  'anuradhapura': {
    lat: 8.3114, lng: 80.4037,
    representativePoint: 'Anuradhapura Sacred City archaeological core',
    source: 'UNESCO World Heritage Centre / Survey Department of Sri Lanka',
  },
  'polonnaruwa': {
    lat: 7.9403, lng: 81.0188,
    representativePoint: 'Ancient City of Polonnaruwa Royal Palace & Dalada Maluwa precinct',
    source: 'UNESCO World Heritage Centre / Survey Department of Sri Lanka',
  },
  'dambulla': {
    lat: 7.8567, lng: 80.6492,
    representativePoint: 'Rangiri Dambulla Cave Temple (Golden Temple) rock ascent',
    source: 'UNESCO World Heritage Centre / Survey Department of Sri Lanka',
  },
  'kandy': {
    lat: 7.2906, lng: 80.6337,
    representativePoint: 'Kandy Lake & Royal Palace sacred city centre',
    source: 'UNESCO World Heritage Centre / Survey Department of Sri Lanka',
  },
  'nuwara-eliya': {
    lat: 6.9497, lng: 80.7891,
    representativePoint: 'Nuwara Eliya town centre & Lake Gregory plateau',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'ella': {
    lat: 6.8667, lng: 81.0466,
    representativePoint: 'Ella town & Nine Arch Bridge / Ella Gap ridge',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'colombo': {
    lat: 6.9271, lng: 79.8612,
    representativePoint: 'Colombo Fort & Galle Face Green urban core',
    source: 'Survey Department of Sri Lanka / GeoNames',
  },
  'galle': {
    lat: 6.0269, lng: 80.2170,
    representativePoint: 'Galle Dutch Fort Main Gate & rampart headland',
    source: 'UNESCO World Heritage Centre / Survey Department of Sri Lanka',
  },
  'mirissa': {
    lat: 5.9483, lng: 80.4716,
    representativePoint: 'Mirissa Bay crescent & Parrot Rock headland',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'bentota': {
    lat: 6.4213, lng: 80.0004,
    representativePoint: 'Bentota Beach & Bentota Ganga estuary spit',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'tangalle': {
    lat: 6.0244, lng: 80.7941,
    representativePoint: 'Tangalle harbour headland & Medaketiya beach front',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'trincomalee': {
    lat: 8.5874, lng: 81.2152,
    representativePoint: 'Trincomalee town & Dutch Bay peninsula',
    source: 'Survey Department of Sri Lanka / GeoNames',
  },
  'jaffna': {
    lat: 9.6615, lng: 80.0255,
    representativePoint: 'Jaffna city centre & lagoon waterfront',
    source: 'Survey Department of Sri Lanka / GeoNames',
  },
  'yala': {
    lat: 6.3725, lng: 81.5169,
    representativePoint: 'Yala National Park Palatupana (Block I) main visitor entrance',
    source: 'Department of Wildlife Conservation Sri Lanka / OpenStreetMap',
  },

  // === WEST COAST & NORTH-WEST (Western & North Western Provinces + Bentota corridor) ===
  'negombo': {
    lat: 7.2008, lng: 79.8358,
    representativePoint: 'Negombo Beach & Dutch Canal lagoon mouth',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'kalpitiya': {
    lat: 8.2333, lng: 79.7667,
    representativePoint: 'Kalpitiya town & kitesurfing lagoon peninsula',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'wilpattu-national-park': {
    lat: 8.3489, lng: 80.1581,
    representativePoint: 'Wilpattu National Park Hunuwilagama main visitor entrance',
    source: 'Department of Wildlife Conservation Sri Lanka / OpenStreetMap',
  },
  'kalutara': {
    lat: 6.5854, lng: 79.9607,
    representativePoint: 'Kalutara Bodhiya & Kalu Ganga river mouth',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'kosgoda': {
    lat: 6.3492, lng: 80.0219,
    representativePoint: 'Kosgoda sea turtle conservation beach',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'madu-ganga': {
    lat: 6.2831, lng: 80.0528,
    representativePoint: 'Madu Ganga wetland estuary & Balapitiya boat jetty',
    source: 'Ramsar Sites Information Service / OpenStreetMap',
  },
  'kalpitiya-dutch-fort': {
    lat: 8.2414, lng: 79.7728,
    representativePoint: '17th-century Kalpitiya Dutch Fort ramparts',
    source: 'Department of Archaeology Sri Lanka / OpenStreetMap',
  },
  'anawilundawa-wetland-sanctuary': {
    lat: 7.7056, lng: 79.8211,
    representativePoint: 'Anawilundawa Ramsar Sanctuary central tank bund',
    source: 'Ramsar Sites Information Service / Department of Wildlife Conservation',
  },
  'munneswaram-temple': {
    lat: 7.5758, lng: 79.8167,
    representativePoint: 'Munneswaram Kovil sacred complex, Chilaw',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'lunuwila-coconut-estates': {
    lat: 7.3364, lng: 79.8658,
    representativePoint: 'Coconut Research Institute & Bandirippuwa estate, Lunuwila',
    source: 'Coconut Research Institute of Sri Lanka / OpenStreetMap',
  },
  'gangaramaya-temple': {
    lat: 6.9167, lng: 79.8567,
    representativePoint: 'Gangaramaya Vihara & Beira Lake Seema Malaka',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'independence-memorial-hall': {
    lat: 6.9048, lng: 79.8675,
    representativePoint: 'Independence Memorial Hall, Cinnamon Gardens, Colombo 07',
    source: 'Department of Archaeology Sri Lanka / OpenStreetMap',
  },
  'national-museum-of-colombo': {
    lat: 6.9100, lng: 79.8608,
    representativePoint: ' Colombo National Museum main building, Cinnamon Gardens',
    source: 'Department of National Museums Sri Lanka / OpenStreetMap',
  },
  'mount-lavinia': {
    lat: 6.8306, lng: 79.8617,
    representativePoint: 'Mount Lavinia headland & Golden Mile beach',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'kelaniya-raja-maha-vihara': {
    lat: 6.9522, lng: 79.9219,
    representativePoint: 'Kelaniya Raja Maha Vihara stupa & Kelani River terrace',
    source: 'Department of Archaeology Sri Lanka / OpenStreetMap',
  },
  'muthurajawela-wetlands': {
    lat: 7.1056, lng: 79.8644,
    representativePoint: 'Muthurajawela Marsh Visitor Centre & Hamilton Canal',
    source: 'Central Environmental Authority Sri Lanka / OpenStreetMap',
  },
  'seethawaka-botanic-gardens': {
    lat: 6.9553, lng: 80.1872,
    representativePoint: 'Seethawaka Wet Zone Botanic Gardens main gate, Avissawella',
    source: 'Department of Nationalag Botanic Gardens Sri Lanka / OpenStreetMap',
  },
  'brief-garden': {
    lat: 6.4472, lng: 80.0489,
    representativePoint: 'Bevis Bawa Brief Garden estate, Kalawila, Beruwala',
    source: 'OpenStreetMap / Survey Department of Sri Lanka',
  },
  'richmond-castle': {
    lat: 6.6019, lng: 79.9722,
    representativePoint: 'Richmond Castle hilltop mansion, Palatota, Kalutara',
    source: 'Department of Public Trustee Sri Lanka / OpenStreetMap',
  },
  'wilpattu-villus': {
    lat: 8.4561, lng: 80.0156,
    representativePoint: 'Kumbukwila & Kokkare Villu central basin cluster, Wilpattu',
    source: 'Department of Wildlife Conservation Sri Lanka / OpenStreetMap',
  },
  'dambadeniya': {
    lat: 7.3672, lng: 80.1456,
    representativePoint: 'Dambadeniya Maligagala citadel rock & Vijayasundararamaya temple',
    source: 'Department of Archaeology Sri Lanka / OpenStreetMap',
  },
  'yapahuwa-rock-fortress': {
    lat: 7.8306, lng: 80.3175,
    representativePoint: 'Yapahuwa Rock Fortress ornamental stairway & citadel',
    source: 'Department of Archaeology Sri Lanka / OpenStreetMap',
  },
  'royal-rock-temple-kurunegala': {
    lat: 7.4914, lng: 80.3686,
    representativePoint: 'Ethagala (Elephant Rock) summit & Ibbagala Raja Maha Vihara, Kurunegala',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'yapahuwa-museum': {
    lat: 7.8289, lng: 80.3156,
    representativePoint: 'Yapahuwa Archaeological Museum at the southern citadel entrance',
    source: 'Department of Archaeology Sri Lanka / OpenStreetMap',
  },
  'yapahuwa-panduwasnuwara-route': {
    lat: 7.6050, lng: 80.1069,
    representativePoint: 'Panduwasnuwara 12th-century moated palace & Chakrawala Kotte archaeological site',
    source: 'Department of Archaeology Sri Lanka / OpenStreetMap',
  },
  'deduru-oya-reservoir': {
    lat: 7.7219, lng: 80.2756,
    representativePoint: 'Deduru Oya Reservoir dam & spillway, Wariyapola',
    source: 'Department of Irrigation Sri Lanka / OpenStreetMap',
  },
  'ridi-vihara': {
    lat: 7.5322, lng: 80.4919,
    representativePoint: 'Ridi Vihara (Silver Temple) rock cave monastery, Ridigama',
    source: 'Department of Archaeology Sri Lanka / OpenStreetMap',
  },
  'kurunegala': {
    lat: 7.4863, lng: 80.3623,
    representativePoint: 'Kurunegala city centre & Kurunegala Lake round',
    source: 'Survey Department of Sri Lanka / GeoNames',
  },
  'gampaha': {
    lat: 7.0873, lng: 79.9990,
    representativePoint: 'Gampaha town & Henarathgoda Botanical Garden',
    source: 'Survey Department of Sri Lanka / GeoNames',
  },
  'puttalam': {
    lat: 8.0362, lng: 79.8283,
    representativePoint: 'Puttalam lagoon waterfront & town centre',
    source: 'Survey Department of Sri Lanka / GeoNames',
  },
  'beruwala': {
    lat: 6.4788, lng: 79.9828,
    representativePoint: 'Beruwala Golden Mile beach & Barberyn Lighthouse headland',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'wadduwa': {
    lat: 6.6631, lng: 79.9297,
    representativePoint: 'Wadduwa beachfront, Kalutara north coast',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'induruwa': {
    lat: 6.3842, lng: 80.0089,
    representativePoint: 'Induruwa Beach coastal stretch south of Bentota',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'bar-reef': {
    lat: 8.3650, lng: 79.7350,
    representativePoint: 'Bar Reef Marine Sanctuary coastal access point off Kalpitiya peninsula',
    source: 'Department of Wildlife Conservation Sri Lanka / NARA',
  },

  // === CULTURAL TRIANGLE (North Central Province & Matale Cultural Corridor) ===
  'mihintale': {
    lat: 8.3508, lng: 80.5097,
    representativePoint: 'Mihintale Maha Saya summit & Aradhana Gala stairway',
    source: 'Department of Archaeology Sri Lanka / OpenStreetMap',
  },
  'ritigala-strict-nature-reserve': {
    lat: 8.1128, lng: 80.6556,
    representativePoint: 'Ritigala ancient forest monastery & Banda Pokuna entrance',
    source: 'Department of Wildlife Conservation / Department of Archaeology Sri Lanka',
  },
  'minneriya-national-park': {
    lat: 8.0161, lng: 80.8447,
    representativePoint: 'Minneriya National Park Ambagaswewa main entrance & tank',
    source: 'Department of Wildlife Conservation Sri Lanka / OpenStreetMap',
  },
  'kaudulla-national-park': {
    lat: 8.1519, lng: 80.8967,
    representativePoint: 'Kaudulla National Park Gal Oya road visitor entrance & reservoir',
    source: 'Department of Wildlife Conservation Sri Lanka / OpenStreetMap',
  },
  'pidurangala-rock': {
    lat: 7.9661, lng: 80.7619,
    representativePoint: 'Pidurangala Raja Maha Vihara & summit boulder viewpoint',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'avukana-buddha-statue': {
    lat: 8.0108, lng: 80.5128,
    representativePoint: 'Avukana standing Buddha monolith shrine, Kekirawa',
    source: 'Department of Archaeology Sri Lanka / OpenStreetMap',
  },
  'kala-wewa': {
    lat: 8.0019, lng: 80.5356,
    representativePoint: 'Kala Wewa ancient reservoir bund & spill gates',
    source: 'Department of Irrigation Sri Lanka / OpenStreetMap',
  },
  'somawathiya-national-park': {
    lat: 8.1558, lng: 81.1686,
    representativePoint: 'Somawathiya Chaitya & Mahaweli floodplain sanctuary entrance',
    source: 'Department of Wildlife Conservation Sri Lanka / OpenStreetMap',
  },
  'jaya-sri-maha-bodhi': {
    lat: 8.3447, lng: 80.3972,
    representativePoint: 'Jaya Sri Maha Bodhi sacred Bo tree terrace, Mahamevnawa Park',
    source: 'UNESCO World Heritage Centre / OpenStreetMap',
  },
  'ruwanwelisaya': {
    lat: 8.3500, lng: 80.3964,
    representativePoint: 'Ruwanwelisaya Maha Stupa, Anuradhapura Sacred City',
    source: 'UNESCO World Heritage Centre / OpenStreetMap',
  },
  'jetavanaramaya': {
    lat: 8.3514, lng: 80.4033,
    representativePoint: 'Jetavanaramaya Stupa & monastery precinct, Anuradhapura',
    source: 'UNESCO World Heritage Centre / OpenStreetMap',
  },
  'abhayagiri-monastery': {
    lat: 8.3708, lng: 80.3953,
    representativePoint: 'Abhayagiri Dagoba & northern monastic complex, Anuradhapura',
    source: 'UNESCO World Heritage Centre / OpenStreetMap',
  },
  'isurumuniya-temple': {
    lat: 8.3344, lng: 80.3903,
    representativePoint: 'Isurumuniya Raja Maha Vihara rock shrine below Tissa Wewa',
    source: 'Department of Archaeology Sri Lanka / OpenStreetMap',
  },
  'samadhi-buddha-statue': {
    lat: 8.3672, lng: 80.3986,
    representativePoint: 'Samadhi Buddha Statue pavilion in Mahamevnawa Park, Anuradhapura',
    source: 'Department of Archaeology Sri Lanka / OpenStreetMap',
  },
  'gal-vihara': {
    lat: 7.9658, lng: 81.0047,
    representativePoint: 'Gal Vihara (Uttararama) rock-cut Buddha sculptures, Polonnaruwa',
    source: 'UNESCO World Heritage Centre / OpenStreetMap',
  },
  'polonnaruwa-vatadage': {
    lat: 7.9469, lng: 81.0014,
    representativePoint: 'Polonnaruwa Vatadage relic house on the Sacred Quadrangle',
    source: 'UNESCO World Heritage Centre / OpenStreetMap',
  },
  'rankoth-vehera': {
    lat: 7.9583, lng: 81.0033,
    representativePoint: 'Rankoth Vehera stupa in the Alahana Pirivena complex, Polonnaruwa',
    source: 'UNESCO World Heritage Centre / OpenStreetMap',
  },
  'medirigiriya-vatadage': {
    lat: 8.1517, lng: 80.9806,
    representativePoint: 'Medirigiriya Vatadage hilltop circular relic shrine',
    source: 'Department of Archaeology Sri Lanka / OpenStreetMap',
  },
  'pabalu-vehera': {
    lat: 7.9514, lng: 81.0036,
    representativePoint: 'Pabalu Vehera brick stupa inside the ancient city walls, Polonnaruwa',
    source: 'UNESCO World Heritage Centre / OpenStreetMap',
  },
  'nalanda-gedige': {
    lat: 7.6689, lng: 80.6453,
    representativePoint: 'Nalanda Gedige crystalline-limestone shrine on Bowatenna reservoir island',
    source: 'Department of Archaeology Sri Lanka / OpenStreetMap',
  },
  'aluvihare-rock-temple': {
    lat: 7.4939, lng: 80.6228,
    representativePoint: 'Aluvihare Rock Cave Temple library & boulder gorge, Matale',
    source: 'Department of Archaeology Sri Lanka / OpenStreetMap',
  },
  'sasseruwa-buddha-statue': {
    lat: 7.9889, lng: 80.3917,
    representativePoint: 'Sasseruwa (Rasvehera) rock-carved Buddha & cave monastery',
    source: 'Department of Archaeology Sri Lanka / OpenStreetMap',
  },
  'tantirimale-raja-maha-vihara': {
    lat: 8.5322, lng: 80.2594,
    representativePoint: 'Tantirimale Raja Maha Vihara granite outcrop & reclining Buddha',
    source: 'Department of Archaeology Sri Lanka / OpenStreetMap',
  },
  'thanthirimale-reservoir': {
    lat: 8.5236, lng: 80.2683,
    representativePoint: 'Thanthirimale Wewa village reservoir bund',
    source: 'Department of Irrigation Sri Lanka / OpenStreetMap',
  },
  'matale': {
    lat: 7.4675, lng: 80.6234,
    representativePoint: 'Matale town & Sri Muthumariamman Kovil',
    source: 'Survey Department of Sri Lanka / GeoNames',
  },

  // === HILL COUNTRY (Central, Sabaragamuwa & Uva Highlands) ===
  'adams-peak': {
    lat: 6.8096, lng: 80.4994,
    representativePoint: 'Adam’s Peak (Sri Pada) sacred summit & Nallathanniya trailhead',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'horton-plains': {
    lat: 6.8028, lng: 80.8097,
    representativePoint: 'Horton Plains National Park Farr Inn visitor centre & World’s End trail',
    source: 'UNESCO World Heritage Centre / Department of Wildlife Conservation',
  },
  'haputale': {
    lat: 6.7686, lng: 80.9589,
    representativePoint: 'Haputale railway gap & Tangamalai ridge',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'bandarawela': {
    lat: 6.8300, lng: 80.9880,
    representativePoint: 'Bandarawela hill town & railway station',
    source: 'Survey Department of Sri Lanka / GeoNames',
  },
  'hatton': {
    lat: 6.8917, lng: 80.5956,
    representativePoint: 'Hatton tea-country railway junction & town centre',
    source: 'Survey Department of Sri Lanka / GeoNames',
  },
  'kitulgala': {
    lat: 6.9892, lng: 80.4178,
    representativePoint: 'Kitulgala Kelani River gorge & Makandawa forest crossing',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'knuckles-mountain-range': {
    lat: 7.4450, lng: 80.7810,
    representativePoint: 'Knuckles Conservation Forest Riverston & Corbett’s Gap ridge',
    source: 'UNESCO World Heritage Centre / Forest Department Sri Lanka',
  },
  'sinharaja-forest-reserve': {
    lat: 6.4050, lng: 80.4580,
    representativePoint: 'Sinharaja Forest Reserve Kudawa & Deniyaya conservation entrances',
    source: 'UNESCO World Heritage Centre / Forest Department Sri Lanka',
  },
  'pinnawala': {
    lat: 7.3008, lng: 80.3872,
    representativePoint: 'Pinnawala Maha Oya river bathing point & sanctuary',
    source: 'Department of National Zoological Gardens Sri Lanka / OpenStreetMap',
  },
  'ella-rock': {
    lat: 6.8519, lng: 81.0528,
    representativePoint: 'Ella Rock summit viewpoint above Kithalella railway',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'diyaluma-falls': {
    lat: 6.7331, lng: 81.0314,
    representativePoint: 'Diyaluma Falls upper natural pools & Koslanda bridge viewpoint',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'liptons-seat': {
    lat: 6.7836, lng: 81.0150,
    representativePoint: 'Lipton’s Seat Dambatenne estate summit lookout',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'bomburu-ella-falls': {
    lat: 6.8914, lng: 80.8314,
    representativePoint: 'Bomburu Ella waterfall cascade near Perawella, Welimada',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'sembuwatta-lake': {
    lat: 7.4369, lng: 80.6997,
    representativePoint: 'Sembuwatta Lake tea-estate reservoir, Elkaduwa',
    source: 'OpenStreetMap / Survey Department of Sri Lanka',
  },
  'temple-of-the-tooth': {
    lat: 7.2936, lng: 80.6413,
    representativePoint: 'Sri Dalada Maligawa (Temple of the Sacred Tooth Relic), Kandy',
    source: 'UNESCO World Heritage Centre / OpenStreetMap',
  },
  'peradeniya-botanic-gardens': {
    lat: 7.2689, lng: 80.5964,
    representativePoint: 'Royal Botanic Gardens Peradeniya main gate on Mahaweli River loop',
    source: 'Department of National Botanic Gardens Sri Lanka / OpenStreetMap',
  },
  'bahirawakanda-buddha': {
    lat: 7.2903, lng: 80.6278,
    representativePoint: 'Sri Maha Bodhi Viharaya hilltop Buddha statue, Bahirawakanda, Kandy',
    source: 'OpenStreetMap / Survey Department of Sri Lanka',
  },
  'embekka-devalaya': {
    lat: 7.2181, lng: 80.5678,
    representativePoint: 'Embekka Devalaya carved wooden pillars hall, Udunuwara',
    source: 'Department of Archaeology Sri Lanka / OpenStreetMap',
  },
  'lankatilaka-vihara': {
    lat: 7.2344, lng: 80.5636,
    representativePoint: 'Lankatilaka Raja Maha Vihara on Panhalgala rock, Udunuwara',
    source: 'Department of Archaeology Sri Lanka / OpenStreetMap',
  },
  'gadaladeniya-vihara': {
    lat: 7.2597, lng: 80.5511,
    representativePoint: 'Gadaladeniya Vihara stone-vaulted shrine at Pilimathalawa',
    source: 'Department of Archaeology Sri Lanka / OpenStreetMap',
  },
  'bopath-ella-falls': {
    lat: 6.8017, lng: 80.3694,
    representativePoint: 'Bopath Ella Falls bo-leaf cascade on Kuruganga, Kuruwita',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'bambarakanda-falls': {
    lat: 6.7736, lng: 80.8311,
    representativePoint: 'Bambarakanda Falls (Sri Lanka’s tallest waterfall), Kalupahana',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'ravana-falls': {
    lat: 6.8408, lng: 81.0544,
    representativePoint: 'Ravana Ella Falls cascade in Ella Gorge',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'st-clairs-falls': {
    lat: 6.9492, lng: 80.6489,
    representativePoint: 'St Clair’s Falls (Maha Ella & Kuda Ella) viewpoint, Talawakele',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'devon-falls': {
    lat: 6.9536, lng: 80.6308,
    representativePoint: 'Devon Falls viewpoint at Dimbula, Talawakele',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'aberdeen-falls': {
    lat: 6.9794, lng: 80.5256,
    representativePoint: 'Aberdeen Falls canyon pool on Kehelgamu Oya, Ginigathhena',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'belilena-cave': {
    lat: 7.0119, lng: 80.4369,
    representativePoint: 'Belilena prehistoric Balangoda Man cave, Kitulgala',
    source: 'Department of Archaeology Sri Lanka / OpenStreetMap',
  },
  'ratnapura-gem-heritage': {
    lat: 6.6939, lng: 80.3858,
    representativePoint: 'National Museum of Ratnapura (Ehelepola Walawwa) & gem pits',
    source: 'Department of National Museums Sri Lanka / OpenStreetMap',
  },
  'dambana-indigenous-heritage': {
    lat: 7.3694, lng: 81.0369,
    representativePoint: 'Dambana Wanniyala-Aetto (Vedda) indigenous heritage village, Mahiyanganaya',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'badulla': {
    lat: 6.9934, lng: 81.0550,
    representativePoint: 'Badulla town & Muthiyangana Raja Maha Vihara',
    source: 'Survey Department of Sri Lanka / GeoNames',
  },
  'ratnapura': {
    lat: 6.6828, lng: 80.3992,
    representativePoint: 'Ratnapura town centre & Kalu Ganga gem market',
    source: 'Survey Department of Sri Lanka / GeoNames',
  },
  'kegalle': {
    lat: 7.2513, lng: 80.3464,
    representativePoint: 'Kegalle district capital town centre',
    source: 'Survey Department of Sri Lanka / GeoNames',
  },
  'dunhinda-falls': {
    lat: 7.0169, lng: 81.0633,
    representativePoint: 'Dunhinda Falls viewing platform on Badulu Oya',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'laxapana-falls': {
    lat: 6.9003, lng: 80.4783,
    representativePoint: 'Laxapana Falls cascade on Maskeliya Oya',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'ramboda-falls': {
    lat: 7.0556, lng: 80.6956,
    representativePoint: 'Ramboda Falls twin cascade on Panna Oya, Pussellawa',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'lover-s-leap-falls': {
    lat: 6.9767, lng: 80.7858,
    representativePoint: 'Lover’s Leap Falls on Pedro Tea Estate above Nuwara Eliya',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'elgin-falls': {
    lat: 6.8358, lng: 80.7819,
    representativePoint: 'Elgin Falls railway-bridge cascade near Ambewela',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'baker-s-falls': {
    lat: 6.7944, lng: 80.7939,
    representativePoint: 'Baker’s Falls on Belihul Oya inside Horton Plains National Park',
    source: 'Department of Wildlife Conservation / OpenStreetMap',
  },
  'hunas-falls': {
    lat: 7.4036, lng: 80.6914,
    representativePoint: 'Hunas Falls cascade at Elkaduwa above Wattegama',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'gerandi-ella': {
    lat: 7.0261, lng: 80.4083,
    representativePoint: 'Gerandi Ella rainforest cascade near Kitulgala',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'duwili-ella': {
    lat: 6.9683, lng: 80.3247,
    representativePoint: 'Duwili Ella waterfall near Thalduwa, Dehiowita',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'sera-ella': {
    lat: 7.5719, lng: 80.7689,
    representativePoint: 'Sera Ella waterfall cave cascade at Pothatawela, Laggala',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'gartmore-falls': {
    lat: 6.8194, lng: 80.5653,
    representativePoint: 'Gartmore (Sri Pada) Falls plunging into Maskeliya Reservoir',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'bambarakiri-ella': {
    lat: 7.4981, lng: 80.7086,
    representativePoint: 'Bambarakiri Ella suspension-bridge cascade, Rattota',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },

  // === SOUTH COAST (Galle, Matara & Western Hambantota Coastal Arc) ===
  'hikkaduwa': {
    lat: 6.1395, lng: 80.1063,
    representativePoint: 'Hikkaduwa Coral Sanctuary & Narigama surf beach',
    source: 'Department of Wildlife Conservation / Survey Department of Sri Lanka',
  },
  'unawatuna': {
    lat: 6.0116, lng: 80.2488,
    representativePoint: 'Unawatuna horseshoe bay & Welle Devalaya headland',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'weligama': {
    lat: 5.9750, lng: 80.4297,
    representativePoint: 'Weligama Bay surf beach & Taprobane Island view',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'matara': {
    lat: 5.9485, lng: 80.5353,
    representativePoint: 'Matara Star Fort, Nilwala River mouth & Paravi Duwa shrine',
    source: 'Survey Department of Sri Lanka / GeoNames',
  },
  'tangalle-core': {
    lat: 6.0189, lng: 80.8086,
    representativePoint: 'Tangalle Coastal Arc (Marakolliya & Medilla lagoon shore)',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'hummanaya-blowhole': {
    lat: 5.9922, lng: 80.7419,
    representativePoint: 'Hummanaya Blowhole coastal cliff fissure, Kudawella',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'rekawa-turtle-coast': {
    lat: 6.0439, lng: 80.8617,
    representativePoint: 'Rekawa Turtle Conservation beach & Rekawa Lagoon',
    source: 'Department of Wildlife Conservation Sri Lanka / OpenStreetMap',
  },
  'ussangoda-national-park': {
    lat: 6.0947, lng: 80.9869,
    representativePoint: 'Ussangoda National Park red-earth plateau & sea cliff',
    source: 'Department of Wildlife Conservation Sri Lanka / OpenStreetMap',
  },
  'dondra-head-lighthouse': {
    lat: 5.9214, lng: 80.5919,
    representativePoint: 'Dondra Head Lighthouse at Sri Lanka’s southernmost point',
    source: 'Sri Lanka Ports Authority / Survey Department of Sri Lanka',
  },
  'koggala-lake': {
    lat: 5.9989, lng: 80.3342,
    representativePoint: 'Koggala Lagoon & Madol Duwa island jetty',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'martin-wickramasinghe-museum': {
    lat: 5.9881, lng: 80.3289,
    representativePoint: 'Martin Wickramasinghe Folk Museum Complex, Koggala',
    source: 'Martin Wickramasinghe Trust / OpenStreetMap',
  },
  'japanese-peace-pagoda-rumassala': {
    lat: 6.0186, lng: 80.2392,
    representativePoint: 'Japanese Peace Pagoda on Rumassala headland above Galle Bay',
    source: 'OpenStreetMap / Survey Department of Sri Lanka',
  },
  'ahangama-kabalana': {
    lat: 5.9736, lng: 80.3514,
    representativePoint: 'Ahangama–Kabalana stilt-fishing & surf coast corridor',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'dikwella-wewurukannala': {
    lat: 5.9731, lng: 80.6978,
    representativePoint: 'Wewurukannala Buduraja Maha Vihara 50m seated Buddha, Dickwella',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'mulkirigala-raja-maha-vihara': {
    lat: 6.1319, lng: 80.7375,
    representativePoint: 'Mulkirigala Raja Maha Vihara terraced rock cave monastery',
    source: 'Department of Archaeology Sri Lanka / OpenStreetMap',
  },
  'ahangama': {
    lat: 5.9711, lng: 80.3653,
    representativePoint: 'Ahangama coastal village & reef break',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'jungle-beach': {
    lat: 6.0211, lng: 80.2378,
    representativePoint: 'Jungle Beach sheltered cove below Rumassala hill',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'hiriketiya': {
    lat: 5.9614, lng: 80.7069,
    representativePoint: 'Hiriketiya Horseshoe Bay surf beach, Dickwella',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'dickwella': {
    lat: 5.9669, lng: 80.6947,
    representativePoint: 'Dickwella Bay beach & town front',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'midigama': {
    lat: 5.9664, lng: 80.3911,
    representativePoint: 'Midigama Lazy Left & Rams reef surf breaks',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'talalla': {
    lat: 5.9394, lng: 80.6358,
    representativePoint: 'Talalla South Beach crescent bay',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'polhena-beach': {
    lat: 5.9378, lng: 80.5256,
    representativePoint: 'Polhena fringing coral reef bay, Matara',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'koggala': {
    lat: 5.9869, lng: 80.3247,
    representativePoint: 'Koggala Beach & stilt-fishing reef',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'thalpe': {
    lat: 5.9964, lng: 80.2817,
    representativePoint: 'Thalpe Beach & natural coral rock pools',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'mawella-beach': {
    lat: 5.9906, lng: 80.7311,
    representativePoint: 'Mawella Bay beach crescent west of Tangalle',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'goyambokka-beach': {
    lat: 6.0086, lng: 80.7797,
    representativePoint: 'Goyambokka palm cove near Tangalle',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'kabalana-beach': {
    lat: 5.9764, lng: 80.3436,
    representativePoint: 'Kabalana Beach ("The Rock" A-frame surf wave), Ahangama',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'ambalangoda': {
    lat: 6.2355, lng: 80.0538,
    representativePoint: 'Ambalangoda town, Ariyapala Mask Museum & coastal rocks',
    source: 'Survey Department of Sri Lanka / GeoNames',
  },
  'silent-beach': {
    lat: 5.9994, lng: 80.7647,
    representativePoint: 'Silent Beach (Amanwella cove) near Tangalle',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },

  // === EAST COAST (Trincomalee, Batticaloa & Coastal Ampara) ===
  'nilaveli': {
    lat: 8.6980, lng: 81.1910,
    representativePoint: 'Nilaveli Beach & Pigeon Island boat launch',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'pigeon-island-national-park': {
    lat: 8.7219, lng: 81.2044,
    representativePoint: 'Pigeon Island Marine National Park coral reef & Nilaveli jetty',
    source: 'Department of Wildlife Conservation Sri Lanka / OpenStreetMap',
  },
  'pasikuda': {
    lat: 7.9269, lng: 81.5647,
    representativePoint: 'Pasikuda shallow reef-protected horseshoe bay',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'batticaloa': {
    lat: 7.7102, lng: 81.6924,
    representativePoint: 'Batticaloa Dutch Fort, Kallady Bridge & lagoon island',
    source: 'Survey Department of Sri Lanka / GeoNames',
  },
  'arugam-bay': {
    lat: 6.8404, lng: 81.8368,
    representativePoint: 'Arugam Bay Main Point surf headland & bay crescent',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'kalkudah': {
    lat: 7.9136, lng: 81.5739,
    representativePoint: 'Kalkudah Beach stretch south of Pasikuda',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'kuchchaveli': {
    lat: 8.8189, lng: 81.0986,
    representativePoint: 'Kuchchaveli Beach & Pichchamalai Samudragiri Vihara headland',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'batticaloa-lagoon': {
    lat: 7.6750, lng: 81.7010,
    representativePoint: 'Batticaloa Lagoon estuary & mangrove islands',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'lahugala-kitulana-national-park': {
    lat: 6.8856, lng: 81.7208,
    representativePoint: 'Lahugala Kitulana National Park main road entrance & Lahugala Tank',
    source: 'Department of Wildlife Conservation Sri Lanka / OpenStreetMap',
  },
  'koneswaram-temple': {
    lat: 8.5825, lng: 81.2456,
    representativePoint: 'Thirukoneswaram Kovil on Swami Rock cliff, Trincomalee',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'fort-frederick': {
    lat: 8.5789, lng: 81.2414,
    representativePoint: 'Fort Frederick 17th-century gateway & headland, Trincomalee',
    source: 'Department of Archaeology Sri Lanka / OpenStreetMap',
  },
  'marble-beach': {
    lat: 8.5156, lng: 81.2194,
    representativePoint: 'Marble Beach bay inside Koddiyar Bay, Kinniya headland',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'seruwila-mangala-vihara': {
    lat: 8.3689, lng: 81.3214,
    representativePoint: 'Seruwila Mangala Raja Maha Vihara ancient stupa',
    source: 'UNESCO Tentative List / Department of Archaeology Sri Lanka',
  },
  'valaichchenai': {
    lat: 7.9250, lng: 81.5361,
    representativePoint: 'Valaichchenai lagoon harbour & town junction',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'kattankudy-heritage-museum': {
    lat: 7.6819, lng: 81.7292,
    representativePoint: 'Kattankudy Islamic Heritage Museum, Batticaloa South',
    source: 'OpenStreetMap / Survey Department of Sri Lanka',
  },
  'panama-coastal-village': {
    lat: 6.7611, lng: 81.8056,
    representativePoint: 'Panama coastal village, lagoon & sand dunes',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'ampara': {
    lat: 7.2975, lng: 81.6720,
    representativePoint: 'Ampara town centre & Ampara Tank',
    source: 'Survey Department of Sri Lanka / GeoNames',
  },
  'uppuveli': {
    lat: 8.6139, lng: 81.2192,
    representativePoint: 'Uppuveli Beach north of Trincomalee town',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'pottuvil-point': {
    lat: 6.8906, lng: 81.8389,
    representativePoint: 'Pottuvil Point surf break & Pottuvil Lagoon bar',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },

  // === NORTHERN PENINSULA & ISLANDS (Northern Province) ===
  'delft-island': {
    lat: 9.5167, lng: 79.6833,
    representativePoint: 'Delft Island (Neduntheevu) coral-walled centre & ferry jetty',
    source: 'Survey Department of Sri Lanka / GeoNames',
  },
  'mannar-island': {
    lat: 9.0550, lng: 79.8250,
    representativePoint: 'Mannar Island Pesalai & Talaimannar dune corridor',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'point-pedro': {
    lat: 9.8250, lng: 80.2333,
    representativePoint: 'Point Pedro lighthouse & Sakkotai Cape (northernmost point of Sri Lanka)',
    source: 'Survey Department of Sri Lanka / GeoNames',
  },
  'madhu-church': {
    lat: 8.8594, lng: 80.2028,
    representativePoint: 'Shrine of Our Lady of Madhu basilica complex, Mannar District',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'casuarina-beach': {
    lat: 9.7636, lng: 79.8875,
    representativePoint: 'Casuarina Beach northern shore on Karainagar Island',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'nallur-kandaswamy-kovil': {
    lat: 9.6744, lng: 80.0294,
    representativePoint: 'Nallur Kandaswamy Kovil golden gopuram, Jaffna',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'keerimalai-springs': {
    lat: 9.8144, lng: 80.0111,
    representativePoint: 'Keerimalai Sacred Water Springs & Naguleswaram Kovil seafront',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'mannar-causeway-vankalai': {
    lat: 8.9519, lng: 79.9317,
    representativePoint: 'Vankalai Sanctuary Ramsar wetland & Mannar Causeway birding flats',
    source: 'Ramsar Sites Information Service / Department of Wildlife Conservation',
  },
  'jaffna-fort': {
    lat: 9.6622, lng: 80.0083,
    representativePoint: 'Jaffna Dutch Fort pentagonal ramparts on Jaffna Lagoon',
    source: 'Department of Archaeology Sri Lanka / OpenStreetMap',
  },
  'jaffna-public-library': {
    lat: 9.6619, lng: 80.0119,
    representativePoint: 'Jaffna Public Library Indo-Saracenic landmark',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'nainativu-nagadeepa': {
    lat: 9.6042, lng: 79.7681,
    representativePoint: 'Nainativu (Nagadeepa Purana Vihara & Nagapooshani Amman Kovil) island piers',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'nallur-festival-precinct': {
    lat: 9.6761, lng: 80.0311,
    representativePoint: 'Nallur temple chariot avenue, Sangiliyan Statue & Mantri Manai',
    source: 'Department of Archaeology Sri Lanka / OpenStreetMap',
  },
  'delft-queens-tower-baobab': {
    lat: 9.4986, lng: 79.7114,
    representativePoint: 'Queen’s Tower Dutch navigation landmark & ancient Baobab tree, Delft Island',
    source: 'Department of Archaeology Sri Lanka / OpenStreetMap',
  },
  'karainagar-island-route': {
    lat: 9.7367, lng: 79.8825,
    representativePoint: 'Ponnalai Causeway & Karainagar Island lagoon crossing',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'chundikkulam-national-park': {
    lat: 9.4900, lng: 80.5600,
    representativePoint: 'Chundikkulam National Park lagoon & barrier spit sanctuary',
    source: 'Department of Wildlife Conservation Sri Lanka / OpenStreetMap',
  },
  'mullaitivu-coast': {
    lat: 9.2850, lng: 80.8080,
    representativePoint: 'Mullaitivu Beach & Nanthi Kadal lagoon bar',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'vavuniya-madhu-road': {
    lat: 8.7711, lng: 80.3256,
    representativePoint: 'Madhu Road junction & northern dry-zone forest corridor, Vavuniya West',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'thiruketheeswaram-temple': {
    lat: 8.9578, lng: 79.9614,
    representativePoint: 'Thiruketheeswaram Kovil ancient port shrine at Mantai, Mannar',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'vavuniya': {
    lat: 8.7542, lng: 80.4982,
    representativePoint: 'Vavuniya town centre & Kudachchi tank',
    source: 'Survey Department of Sri Lanka / GeoNames',
  },
  'kilinochchi': {
    lat: 9.3803, lng: 80.3770,
    representativePoint: 'Kilinochchi town centre & Iranamadu tank gateway',
    source: 'Survey Department of Sri Lanka / GeoNames',
  },
  'mannar-town': {
    lat: 8.9810, lng: 79.9044,
    representativePoint: 'Mannar town & Mannar Dutch Fort at causeway head',
    source: 'Survey Department of Sri Lanka / GeoNames',
  },
  'mullaitivu-town': {
    lat: 9.2671, lng: 80.8142,
    representativePoint: 'Mullaitivu district capital town centre',
    source: 'Survey Department of Sri Lanka / GeoNames',
  },

  // === SOUTHEAST & WILDLIFE (Yala, Hambantota East, Monaragala, Udawalawe & Eastern Parks) ===
  'udawalawe-national-park': {
    lat: 6.4389, lng: 80.8886,
    representativePoint: 'Udawalawe National Park 7th Mile Post main visitor entrance & reservoir',
    source: 'Department of Wildlife Conservation Sri Lanka / OpenStreetMap',
  },
  'bundala-national-park': {
    lat: 6.1972, lng: 81.2100,
    representativePoint: 'Bundala National Park Weligatta main visitor entrance & Ramsar lagoons',
    source: 'Ramsar Sites Information Service / Department of Wildlife Conservation',
  },
  'kataragama': {
    lat: 6.4139, lng: 81.3325,
    representativePoint: 'Ruhunu Maha Kataragama Devalaya & Kiri Vehera sacred complex on Menik Ganga',
    source: 'Department of Archaeology Sri Lanka / OpenStreetMap',
  },
  'kumana-national-park': {
    lat: 6.5719, lng: 81.6939,
    representativePoint: 'Kumana National Park (Yala East) Okanda entrance & Kumana Villu',
    source: 'Department of Wildlife Conservation Sri Lanka / OpenStreetMap',
  },
  'ridiyagama-safari-park': {
    lat: 6.2103, lng: 80.9856,
    representativePoint: 'Ridiyagama Safari Park visitor entrance near Ridiyagama Tank, Ambalantota',
    source: 'Department of National Zoological Gardens Sri Lanka / OpenStreetMap',
  },
  'kirinda': {
    lat: 6.2147, lng: 81.3358,
    representativePoint: 'Kirinda Vihara Maha Devi rock temple & headland boulders',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'tissamaharama-tissa-wewa': {
    lat: 6.2814, lng: 81.2875,
    representativePoint: 'Tissamaharama Raja Maha Vihara & ancient Tissa Wewa reservoir',
    source: 'Department of Archaeology Sri Lanka / OpenStreetMap',
  },
  'okanda-devalaya': {
    lat: 6.6606, lng: 81.7706,
    representativePoint: 'Okanda Sri Murugan Kovil coastal boulder shrine',
    source: 'Survey Department of Sri Lanka / OpenStreetMap',
  },
  'gal-oya-national-park': {
    lat: 7.2286, lng: 81.4719,
    representativePoint: 'Gal Oya National Park Inginiyagala visitor entrance & boat jetty',
    source: 'Department of Wildlife Conservation Sri Lanka / OpenStreetMap',
  },
  'senanayake-samudraya': {
    lat: 7.2044, lng: 81.4481,
    representativePoint: 'Senanayake Samudraya main dam & Bird Island reservoir basin, Inginiyagala',
    source: 'Department of Irrigation Sri Lanka / OpenStreetMap',
  },
  'buduruwagala': {
    lat: 6.6872, lng: 81.0789,
    representativePoint: 'Buduruwagala 10th-century rock-cut Mahayana Buddhist reliefs, Wellawaya',
    source: 'Department of Archaeology Sri Lanka / OpenStreetMap',
  },
  'maligawila-buddha-statue': {
    lat: 6.7206, lng: 81.3514,
    representativePoint: 'Maligawila 7th-century free-standing limestone Buddha statue, Buttala',
    source: 'Department of Archaeology Sri Lanka / OpenStreetMap',
  },
  'maduru-oya-national-park': {
    lat: 7.4880, lng: 81.2080,
    representativePoint: 'Maduru Oya National Park main visitor entrance on Mahiyanganaya–Padiyatalawa road',
    source: 'Department of Wildlife Conservation Sri Lanka / OpenStreetMap',
  },
  'maduru-oya-ancient-sluice': {
    lat: 7.6486, lng: 81.2139,
    representativePoint: 'Maduru Oya Ancient Earthen Dam & Terracotta Sluice site at modern dam bund',
    source: 'Department of Archaeology / Mahaweli Authority of Sri Lanka',
  },
  'hambantota': {
    lat: 6.1246, lng: 81.1185,
    representativePoint: 'Hambantota bay, Martello Tower & Maha Lewaya salt pans',
    source: 'Survey Department of Sri Lanka / GeoNames',
  },
  'monaragala': {
    lat: 6.8728, lng: 81.3507,
    representativePoint: 'Monaragala town centre below Maragala mountain ridge',
    source: 'Survey Department of Sri Lanka / GeoNames',
  },
};
