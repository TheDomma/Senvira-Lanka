# Senvira Lanka Experiences Discovery Platform

## Product, content and implementation brief for Anti-Gravity and Codex

**Status:** Theme audit and expansion recommendation for review
**Prepared:** 5 November 2026  
**Project:** Senvira Lanka

---

## 1. Product direction

Senvira Lanka should build an **experience discovery platform**, not a long generic list of tourist activities. Its purpose is to help a visitor discover a side of Sri Lanka they did not know existed, understand what they could actually do, find where the experience happens, and decide whether it fits their interests, time, abilities and travel dates.

The Destinations area answers **“Where can I go?”** The Experiences area answers **“What could I discover or do there?”** The two should link to each other without duplicating content. A place is a destination; a safari, guided walk, cooking session, train journey or wildlife encounter is an experience.

Examples:

- **Destination:** Ella. **Experience:** Walk a highland trail through tea country to a viewpoint.
- **Destination:** Polonnaruwa Ancient City. **Experience:** Cycle between the archaeological monuments.
- **Destination:** Mirissa. **Experience:** Join a responsible, seasonal whale-watching trip.
- **Destination:** Kandy. **Experience:** Explore the city’s sacred heritage and traditional performing arts.

### The structural change proposed in this brief

Do not put every experience on one crowded page. Create:

1. An **Experiences discovery hub** that introduces the range of Sri Lanka and helps visitors choose a theme.
2. A **dedicated landing page for each major experience theme** (for example, Wildlife Safaris, Marine Wildlife, Surfing, Hiking, Heritage and Food.
3. Optional individual detail pages later for especially distinctive, complex or bookable experiences. A detail page is not necessary for every card at launch.

Each theme page should still be curated and readable. More inventory can be available through search and filters, while the first screen highlights the most recognizable and distinctive experiences.

## 2. What the earlier conversation established

The original “Sri Lanka Experiences Research” conversation began with a request for a broad inventory, then established several important principles:

- Sri Lanka has hundreds of possible activities; trying to put roughly 450 entries on one page could overwhelm visitors.
- The first effort should organize experiences into clear categories and identify the strongest choices in each.
- An experience should connect to a destination, not replace it. For example, Yala is a destination; leopard viewing, birding and photography are experiences connected to Yala.
- The earlier recommendation proposed roughly 12–14 major categories, with around 5–10 strong experiences in each as the catalogue grows.
- The user’s current direction is to give experience categories their own pages. The categories can hold more activities because visitors can browse one relevant subject at a time.
- The larger inventory in that conversation also raised useful future subjects beyond the first shortlist: birding, rainforest walks, crafts, food regions, village life, festivals, spiritual journeys, wellness, photography, cycling, climbing, paddling, diving and scenic flights.

This brief preserves the discovery-first intent and audits the **17 dedicated theme pages already present in the Senvira experiences catalogue**. They are the current working structure, not a proposal to create a new theme count. The audit below expands the activity inventory, identifies editorial risks and gaps, and maps each live theme to the additions or verification needed.

### Audit scope and editorial method (5 November 2026)

I reviewed `src/data/experiences.ts` (17 theme definitions and the current experience records) against the 17 theme inventories in this brief. The theme records contain useful guidance and cross-links, but the live catalogue is uneven: detailed records are concentrated in a few themes, while many categories have no comparable set of destination-linked entries. Several activities are named only as research candidates. Treat this brief as a backlog and validation plan, not as evidence that every listed activity or operator is currently available.

Use these editorial states throughout:

- **Established candidate:** supported by official tourism/regulatory material or a current location-specific offering; still verify access and conditions before publishing.
- **Research before listing:** plausible or regulated activity, but current local service, permissions, provider credentials, or public access has not been established.
- **Do not promise:** avoid guarantees about wildlife, weather, safety, availability, visibility, or operator quality.

The current live dataset has 17 themes, but much less breadth of detailed experience records than this document’s working inventory. Do not turn the inventories into public claims wholesale. Each published card needs a distinct visitor activity, accurate place links, practical guidance, source and review date.

## 3. Existing project context and destination mapping

The current repository contains a live implementation and catalogue. For this audit, `src/data/experiences.ts` is the source of truth for the 17 theme records and current experience cards. This brief maps candidates to named destinations and proposes additional places where coverage is thin. Cross-check all destination labels and IDs against the live destination data before implementation.

**Destination does not have to mean an existing destination-page entry.** Use a precise place, park, coast, route, region or island for the experience location. If that place merits a full destination page later, add it to the destination catalogue through the site’s normal content process.

## 4. Goals and boundaries

### Goals

1. Make discovery feel personal and inspiring, and specific to Sri Lanka.
2. Let visitors browse by experience theme, place, season and, where useful, effort or trip style.
3. Give each theme its own page with clear subtypes, representative experiences, locations and practical guidance.
4. Connect the experience catalogue to existing destination pages, while allowing additional valid locations.
5. State uncertainty, seasonality, physical demands, safety and cultural etiquette clearly and briefly.
6. Keep the content model expandable, searchable and maintainable.

### Boundaries for the first build

- Do not attempt to publish every item from the historical long-list at once. Launch with reviewed content on each theme page; expand as locations and facts are verified.
- Do not invent or imply bookings, operator endorsements, prices, opening hours, wildlife guarantees, live availability or accessibility facts.
- Do not promote elephant rides, touching or feeding wildlife, whale swimming, staged animal interactions or irresponsible turtle-release activities.
- Do not make every attraction into a separate experience or every experience into a destination.
- Do not duplicate category content on the hub and theme pages; the hub previews and links to the page that owns the details.

## 5. Proposed site structure

### Experiences discovery hub

The hub should open with an evocative Sri Lanka-specific message, then help visitors choose a way to explore. It is an entry point, not the full catalogue.

Recommended hub sections:

1. **Discovery hero:** a concise promise, striking image, and “Explore experiences” action.
2. **Explore by theme:** 17 clear category tiles with short descriptions and representative imagery.
3. **Discover something unexpected:** a small rotating or editorially curated group such as “Beyond the usual route,” “A slower side of the island,” or “Wild Sri Lanka.” Avoid inventing live curation if content is static.
4. **Browse by place:** destination or region entry points for visitors who already know where they are going.
5. **Plan around the season:** a short coast/season guide with links to relevant theme pages and an explicit reminder that conditions can change.
6. **Related destinations:** contextual destination links, not duplicate destination summaries.

### Theme landing page

Each of the 17 themes below gets its own URL and page. Keep a consistent template so visitors can learn the structure once:

1. Theme title, one-sentence promise and a distinctive lead image.
2. A short “What makes this special in Sri Lanka?” introduction.
3. The strongest experiences first, grouped by meaningful subcategory.
4. A map or location list showing where each experience is available.
5. Season, effort, duration range and practical notes only where verified and useful.
6. A “Plan your visit” section with preparation, etiquette and safety notes.
7. Related theme pages and linked destination pages.
8. An editorial source/last-reviewed record in the content system; public-facing source links can be shown where they help visitors verify rules or current access.

### Later individual experience detail pages

Create a separate detail page when an experience has enough unique information to justify one: a multi-day route, a complex seasonal activity, a culturally sensitive visit, a specific permitted activity, or a verified bookable offering. Otherwise, keep it as a well-written card or section on its theme page.

## 6. Experience taxonomy and location-linked catalogue

The lists below are a **working content universe** for the dedicated theme pages. They are not all approved for immediate publication. Items marked as future or conditional require evidence of current availability, safe operation, access rights and a credible local provider before becoming visitor-facing recommendations.

### 1. Wildlife Safaris

**Page promise:** Meet Sri Lanka’s wild landscapes through ethical, guided observation of mammals, reptiles and park habitats.

| Experience | Suitable destination links | Season / practical notes |
|---|---|---|
| Leopard-focused safari | Yala National Park; Wilpattu National Park | Sightings are never guaranteed. Yala can be busy; Wilpattu is a different, more forested experience. Check park access and rules. |
| Elephant safari in open habitat | Udawalawe National Park | Open landscapes can make observation easier, but sightings remain wild and unguaranteed. |
| Seasonal elephant gathering safari | Minneriya National Park; Kaudulla National Park; Hurulu Eco Park (additional location) | Herds move with water and grazing conditions. Minneriya is often associated with the dry-season gathering; local park choice changes. Check current guidance. |
| Quiet-forest safari | Wilpattu National Park | Long drives through forest and villus; wildlife can be harder to spot than in open parks. |
| Wetland and coastal wildlife safari | Bundala National Park; Kumana National Park | Strong bird and wetland context; conditions and species vary seasonally. |
| Boat-based wildlife watching | Gal Oya National Park; Senanayake Samudraya | Specialized experience; verify current permits, boat operation and wildlife distance rules. |
| Dry-zone wildlife and reservoir safari | Wasgamuwa National Park; Maduru Oya National Park (additional location) | Check access and current operator coverage before featuring prominently. |
| Safari at Lunugamvehera | Lunugamvehera National Park (additional location) | Add only after current access, park status and operator availability are confirmed. |
| Guided nature walk in a permitted protected area | Horton Plains National Park; Sinharaja Forest Reserve; other permitted reserves | Routes and guide requirements depend on site rules. Do not imply walking safaris are permitted in every park. |
| Wildlife photography outing | Yala; Udawalawe; Wilpattu; Bundala | Responsible distance and no baiting/calling wildlife. Avoid promising a target animal. |
| Ethical wildlife observation by habitat | Kaudulla; Hurulu Eco Park; Wasgamuwa; Maduru Oya; Lunugamvehera (current access check) | Add named choices for wetland, reservoir-edge and forest habitats; verify current park access and do not promise sightings. |
| Night wildlife observation | Approved private/community conservation areas only (verify exact location) | Research before listing; do not imply night drives in national parks unless specifically authorized. No flash or disturbance. |
| Wildlife photography and naturalist interpretation | Yala; Wilpattu; Udawalawe; Wasgamuwa; Minneriya; Kaudulla | Add distinct guided observation/photography formats where providers and park rules allow; never imply guaranteed subjects or proximity. |
| Conservation education visit | Elephant Transit Home, Udawalawe area (verify current visitor format); recognized conservation projects | Educational visit only; explain the organization’s role and avoid presenting captive-animal contact as the attraction. |

**Audit gap:** Expand beyond familiar leopard/elephant framing. Add named park experiences for wetland wildlife, villus, reservoir edges, dry-zone forest, bird-rich coastal scrub and community-guided interpretation. Distinguish parks by habitat, route and visitor format; confirm current blocks, permits and access. Do not list walking safaris as a general park activity.

**Editorial rule:** A safari page should help visitors choose between ecosystems and styles, not just rank parks by how likely they are to produce a leopard photo.

### 2. Marine Wildlife & Ocean Encounters

**Page promise:** Discover whales, dolphins, reefs and coastal habitats while keeping wildlife welfare and sea conditions at the center.

| Experience | Suitable destination links | Season / practical notes |
|---|---|---|
| Blue-whale watching | Mirissa; Trincomalee | IWC handbook indicates different coast windows: Mirissa mainly December–March and Trincomalee March–July. Verify local conditions and current rules. |
| Sperm-whale and deep-water marine mammal watching | Trincomalee; Kalpitiya | Sightings vary; do not advertise a guaranteed species. Observe from boats under regulations. |
| Dolphin watching | Kalpitiya; Trincomalee; Mirissa | Ask operators about distance, vessel behavior and group size. No chasing, encircling or feeding. |
| Reef snorkelling | Pigeon Island National Park; Hikkaduwa; Nilaveli; Unawatuna | Access, visibility and currents vary. Explain reef-safe behavior and any permits or fees. |
| Scuba diving on reefs | Hikkaduwa; Unawatuna; Trincomalee; Nilaveli; Batticaloa | Site and dive conditions are seasonal. Confirm operator qualifications and diver prerequisites. |
| Wreck diving | Trincomalee; Galle; Colombo (specific sites subject to operator verification) | Advanced or certified diving may be required; do not list a wreck as accessible without local confirmation. |
| Sea-turtle habitat observation | Kosgoda; Rekawa (additional location); selected south/east coast sites | Wildlife timing varies. Avoid hatchery contact/release claims and verify conservation practices. |
| Mangrove and estuary wildlife by boat | Madu Ganga; Bentota River; Negombo Lagoon; Puttalam Lagoon (additional location) | Choose operators who keep distance from birds and mangrove roots and use safe vessels. |
| Coastal bird and shore-life walk | Bundala; Mannar Island; Kalpitiya; Kumana | Best species and conditions are seasonal; use knowledgeable guides. |
| Lagoon and mangrove wildlife interpretation | Madu Ganga; Bentota River; Negombo Lagoon; Puttalam Lagoon | Add a quiet, habitat-focused option distinct from a generic boat ride; verify route, operator, vessel and disturbance practices. |
| Shoreline tide-pool and intertidal observation | Rocky shore sites with safe, permitted access (site-specific research) | Research before listing; tide, footing and habitat disturbance matter. Do not handle animals or remove shells/coral. |
| Marine conservation learning visit | Location depends on a verified active project | Future/conditional. Do not frame volunteering as a guaranteed hands-on wildlife encounter. |
| Snorkelling with a qualified guide | Pigeon Island; Nilaveli; Hikkaduwa; Unawatuna; Pasikuda (site verification) | No guarantee of turtles or other animals. Confirm swimming ability, current, permitted access and sea condition. |

**Editorial rule:** Do not normalize swimming or diving with whales. Refer to SLTDA marine mammal guidance and current law; emphasize regulated boat-based observation.

### 3. Birdwatching & Biodiversity

**Page promise:** Find endemic birds, migrating waterbirds and rainforest life with local naturalists.

| Experience | Suitable destination links | Season / practical notes |
|---|---|---|
| Endemic birding in rainforest | Sinharaja Forest Reserve | Guided walk recommended; humid, wet trails and leeches can be factors. |
| Highland birding | Horton Plains; Nuwara Eliya; Hakgala Strict Nature Reserve (additional location) | Early starts and cool, wet weather are common; check access and trail rules. |
| Wetland and migratory birding | Bundala; Kumana; Anawilundawa Wetland Sanctuary | Migratory presence is seasonal; avoid giving static species promises. |
| Lagoon birding by boat | Kalpitiya; Negombo Lagoon; Madu Ganga | Select low-disturbance operators and quiet routes. |
| Dry-zone bird and wildlife walk | Wilpattu; Minneriya; Kaudulla; Wasgamuwa | Park rules determine whether walking is allowed; use vehicle safari when required. |
| Northern wetland and coastal birding | Chundikkulam National Park; Mannar Island; Jaffna Peninsula | Access and season-specific sightings should be confirmed locally. |
| Bird photography outing | Bundala; Kumana; Sinharaja; Horton Plains | No baiting, playback abuse, nest disturbance or habitat trampling. |
| Butterfly and insect observation | Sinharaja; Knuckles; Horton Plains; selected gardens | Specialist guide improves the experience; avoid handling or collecting. |
| Amphibian and rainforest night walk | Sinharaja area or other approved private/community site (verify) | Research before listing; guide-led and low-light only, with permissions confirmed. Do not promise rare species. |
| Naturalist-led biodiversity walk | Knuckles; Sinharaja; Horton Plains; Ritigala; Kitulgala forest edge | Site permissions and guide requirements vary. Add focused butterfly, amphibian, reptile and plant interpretation only with qualified naturalists and conservation rules. |
| Low-impact nature photography walk | Named reserve/forest edges and wetlands with guide access | Add species-aware photography guidance, seasonal light and ethical distance; do not bait, call or disturb wildlife. |
| Wetland birding by boat or on foot | Anawilundawa; Bundala; Kumana; Mannar/Vankalai | Separate habitat and season options; use quiet routes, current access rules and qualified local guides. |

### 4. Surfing & Board Sports

**Page promise:** Match a visitor’s skill and travel month to the right coast, wave and instructor.

| Experience | Suitable destination links | Season / practical notes |
|---|---|---|
| First surf lesson in a beginner-friendly bay | Weligama; Hiriketiya (additional location) | Confirm instructor, conditions and board availability. A beginner-friendly label is not a safety guarantee. |
| South-coast surf town circuit | Weligama; Ahangama & Kabalana; Midigama (additional location); Hikkaduwa | Coast season is weather-dependent; breaks differ in difficulty. |
| Arugam Bay point-break surfing | Arugam Bay; Pottuvil Point (additional location) | Official tourism material describes roughly April–October as Arugam Bay’s main season. Breaks are not all beginner-level. |
| Surf guiding for intermediate/advanced surfers | Arugam Bay; Ahangama; Midigama; Hikkaduwa | Skill level and wave conditions must be clear. Use local instructors/guides. |
| Bodyboarding | Weligama; Hikkaduwa; Arugam Bay (site conditions vary) | Explain currents and suitable conditions. |
| Stand-up paddleboarding | Bentota; Weligama; Kalpitiya lagoon; Madu Ganga | Favor calm, supervised waters and suitable flotation equipment. |
| Windsurfing | Kalpitiya; Bentota | Wind conditions and operator availability determine season. |
| Kitesurfing | Kalpitiya; Mannar region (verify current operation) | Wind season and skill requirements; only list active, verified schools. |
| Surf camp or multi-day coaching | Weligama; Arugam Bay; Ahangama | Verify included instruction, equipment, safety and season before presenting packages. |
| Surf-and-yoga retreat | Weligama; Ahangama; Arugam Bay | Provider format varies; avoid health claims and check actual schedule. |
| Windsurfing and water-skiing | Bentota; Kalpitiya; other currently registered water-sport centers | Official tourism material lists these sport types; confirm current center registration, conditions and instruction. |
| Banana-boat, wakeboard or towable rides | Current registered water-sport centers only | Official tourism material lists motorized water sports; verify active center, vessel safety, flotation, weather limits and age/health restrictions before listing. |

### 5. Diving, Snorkelling & Underwater Exploration

Keep this separate from Marine Wildlife: visitors browse for different reasons, and certification/safety information deserves a focused page.

| Experience | Suitable destination links | Season / practical notes |
|---|---|---|
| Introductory discovery dive | Hikkaduwa; Unawatuna; Trincomalee | Instructor-led, subject to health requirements and conditions. |
| Certified reef dive | Hikkaduwa; Unawatuna; Nilaveli; Batticaloa | Dive site access and visibility are seasonal. |
| Wreck dive | Trincomalee; Galle; Colombo | Specify certification/experience only after confirming the operator’s current site guidance. |
| Pigeon Island snorkelling | Pigeon Island National Park; Nilaveli | Protected area rules, entry conditions, currents and reef etiquette apply. |
| Hikkaduwa reef snorkelling | Hikkaduwa | Conditions vary; avoid stepping on coral and never touch marine animals. |
| Freediving introduction | Only verified, qualified operators and confirmed sites | Future/conditional; verify instructor qualifications and safety procedures. |
| Underwater photography | Hikkaduwa; Trincomalee; Unawatuna | No animal baiting or reef contact; avoid claims about guaranteed subjects. |
| Snorkel boat excursion | Nilaveli; Pigeon Island; selected south-coast sites | Use appropriate flotation and weather guidance. |
| Seasonal reef and wreck site guide | Trincomalee; Colombo; Galle; Hikkaduwa | Explain coast-specific calm-water windows and site/certification differences. Never imply all wrecks are beginner accessible. |
| Freediving course or introduction | Only current, qualified providers and confirmed sites | Research before listing; verify instructor credentials, rescue plan, depth limits and conditions. |
| Kayak-and-snorkel or shore-entry combinations | Named, verified sites only | Publish only where operator, route, reef access and equipment are confirmed; do not bundle activities into vague promises. |

**Audit gap:** Separate beginner try-dives, certified reef dives, wrecks, snorkelling, freediving and underwater photography. Add more named sites only after confirming active dive operations, permissions, season, depth/skill requirements and safe entry conditions. “Marine wildlife” should not become a claim that encounters are guaranteed underwater.

### 6. Hiking, Trekking & Mountain Trails

**Page promise:** Help visitors choose a walk that fits their time, fitness and appetite for hills, tea country or forest.

| Experience | Suitable destination links | Season / practical notes |
|---|---|---|
| Little Adam’s Peak walk | Ella | Popular, generally shorter walk; heat, rain and crowding vary. |
| Ella Rock hike | Ella | Longer and more demanding; route-finding and guide needs should be stated accurately. |
| Pidurangala Rock climb | Pidurangala Rock; Sigiriya | Steep rocky section; not suitable for everyone. Respect active religious areas. |
| Sigiriya climb | Sigiriya Rock Fortress | Many stairs, exposure and heat; explain effort and visitor rules. |
| Horton Plains and World’s End circuit | Horton Plains National Park | Early start advised for clearer views; weather changes quickly; follow park rules. |
| Knuckles day hike | Knuckles Mountain Range; Meemure (additional location) | Routes differ in difficulty; use a knowledgeable guide where needed and check permissions/weather. |
| Pekoe Trail stage walk | Kandy; Hatton; Nuwara Eliya; Haputale; Ella and named trail stages | Official trail has multiple stages; check official pass, maps and current closures. |
| Adam’s Peak pilgrimage climb | Adam’s Peak (Sri Pada); Hatton; Nallathanniya (additional location) | Strenuous night climb, crowded in pilgrimage season, weather-exposed. Clearly mark difficulty. |
| Sinharaja guided rainforest trek | Sinharaja Forest Reserve | Wet, humid and muddy; use permitted routes and guides. |
| Riverston and Pitawala Pathana walks | Riverston; Knuckles range (additional location) | Wind, cliffs and visibility may be hazards; confirm access and route conditions. |
| Waterfall approach walk | Diyaluma Falls; Bambarakanda Falls; Aberdeen Falls; Ravana Falls | Access and swimming safety vary; never imply every pool is safe. |
| Hanthana ridge walk | Kandy; Hanthana Mountain Range (additional location) | Weather and route conditions vary; identify a verified route and guide need. |
| Meemure village and surrounding trails | Meemure; Knuckles Mountain Range | Remote access, facilities and weather require planning; respect residents and private land. |
| Mountain sunrise walk | Ella; Pidurangala; Adam’s Peak; Haputale viewpoints | Avoid promising sunrise visibility; early starts and darkness need practical guidance. |
| Guided rock climbing or scrambling | Lakegala/Meemure; Ella-area routes; verified climbing sites | Research before listing; route grade, land permission, guide credentials, anchors and rescue arrangements must be confirmed. Keep distinct from ordinary hiking. |
| Via ferrata or fixed-route climbing | Only a current, audited provider and named route | Research before listing; verify equipment, inspections, participant restrictions and rescue plan. |
| Waterfall climbing or technical ascent | Only named routes with authorized technical operators | Research before listing; do not encourage climbing falls independently. Verify access, rainfall limits, ropes/anchors and emergency response. |
| Caving and guided cave exploration | Named caves with confirmed access and qualified guides | Research before listing; do not publish undocumented caves or routes; verify conservation, lighting, air and rescue issues. |

**Audit gap:** Distinguish easy viewpoint walks, full hikes, pilgrimage climbs, technical climbing, caving and waterfall approaches. Include route length/elevation only from dependable sources; clarify guide/permit requirements and whether a route is exposed, slippery or remote.

### 7. Cycling & Two-Wheel Exploration

| Experience | Suitable destination links | Notes |
|---|---|---|
| Cycle the Polonnaruwa ruins circuit | Polonnaruwa Ancient City | Heat, distance and uneven ground; follow archaeological site rules. |
| Cycle Anuradhapura’s sacred-city circuit | Anuradhapura Sacred City | Large distances and active sacred sites; respect worship and footwear rules. |
| Village and tank-road cycling | Sigiriya; Habarana (additional location); Polonnaruwa | Community-led route, road safety and heat planning matter. |
| Tea-country cycling | Haputale; Ella; Nuwara Eliya; Hatton | Steep grades, weather and traffic; indicate if assisted or guided. |
| Coastal cycling | Negombo; Bentota; Galle; Weligama | Road conditions and traffic vary; use helmets and safe routes. |
| Mountain biking | Knuckles; Ella; Haputale; Kitulgala | Only list verified routes/operators and describe technical difficulty honestly. |
| Guided city cycling | Colombo; Kandy; Galle | Traffic, route safety and local guide quality matter. |
| Multi-day supported cycling | Route-specific; possible coast-to-highlands routes | Future detail page; publish only when itinerary, support and safety are verified. |
| Guided mountain biking and trail riding | Ella; Knuckles; Haputale; Kitulgala (specific route/provider verification) | Research route grade, bike type, land permission, traffic exposure, maintenance and support vehicle before listing. |
| Electric bicycle or e-bike touring | Current providers and named routes | Research before listing; confirm vehicle legality, helmets, charging, route suitability and operator support. |

### 8. Rafting, Rivers & Inland Water

| Experience | Suitable destination links | Season / practical notes |
|---|---|---|
| White-water rafting | Kitulgala; Kelani River | Sri Lanka Tourism gives a November–April season for rafting near Kitulgala; river levels and operator advice control actual suitability. |
| Kayaking on the Kelani River | Kitulgala | Use trained operators and safety briefing; currents and levels vary. |
| Calm-water kayaking | Bentota River; Madu Ganga; Negombo Lagoon; Kalpitiya lagoon | Conditions, tides, wildlife and route differ by location. |
| Canoeing or traditional boat outing | Madu Ganga; village reservoirs; selected lagoons | Confirm vessel, life jackets, permitted routes and guide. |
| Stream scrambling and supervised water slides/jumps | Kitulgala (specific named route and operator required) | Research before listing. No unsupervised jumps, depth claims or casual-safety language. |
| Reservoir or lake boat trip | Gal Oya; Senanayake Samudraya; selected tanks | Access permits and seasonal water levels matter. |
| Waterfall walk and viewpoint | Diyaluma; Bambarakanda; Aberdeen; St Clair’s; Devon | Access routes and safe swimming information need current verification. |
| Canyoning or waterfall abseiling | Kitulgala; Laxapana/Hatton area (provider and route specific) | Current local operators advertise these formats; treat as technical activities, not ordinary waterfall swimming. Verify SLTDA registration, gear/anchor inspection, guide qualifications, rescue arrangements, weather cancellation rules and participant criteria before listing. |
| Stand-up paddleboarding | Bentota; Kalpitiya lagoon; Madu Ganga | Calm water and supervision; use flotation equipment. |
| Sailing or small-vessel outing | Trincomalee; Bentota; selected coastal harbours | Confirm licensed operation, weather limits and safety equipment. |
| Waterfall slides, stream scrambling and confidence jumps | Kitulgala (specific named route and operator required) | Research before listing. Distinguish natural stream features from an operator-managed activity; no unsupervised jumps or depth claims. |
| ATV / off-road vehicle rides | Kitulgala and other claimed locations (current operator/route verification required) | Research before listing; confirm legal route access, environmental impact, vehicle/helmet standards, guide, insurance and age/driver restrictions. Avoid implying access to protected habitat or private land. |
| Zipline and high-rope courses | Ella / Little Adam’s Peak area; other current registered sites | Ella has a clearly marketed zipline; SLTDA has High Rope Activities guidance that includes ziplines. Verify current registration, inspection, harness/backup systems, operator status, access and restrictions before a public recommendation. |
| Kayak/canoe trips and paddle instruction | Kelani; Kalu; Bentota; Madu Ganga; Negombo and Puttalam lagoons | Expand by water type and skill: moving river, sheltered lagoon, reservoir and coastal paddle. Confirm permits, tides/levels, craft, buoyancy aids and rescue cover. |
| Waterfall photography and viewpoint visits | Diyaluma; Bambarakanda; Ravana; Aberdeen; St Clair’s; Devon and other verified falls | Add as low-intensity experiences distinct from canyoning. Verify public viewpoints/access, trail condition and safe viewing areas; never promote cliff-edge posing or entering unsafe pools. |

**Audit gap:** Represent the full inland-water spectrum: rafting, river kayaking, flatwater paddling, boat wildlife trips, stream scrambling, canyoning/abseiling, waterfall viewing and supervised water-based play. Link approach walks to hiking and ocean activities to the coast theme. A waterfall visit does not imply swimming access.

### 9. Scenic Train, Road & Water Journeys

| Experience | Suitable destination links | Practical notes |
|---|---|---|
| Hill-country train journey | Kandy; Hatton; Nuwara Eliya; Haputale; Ella | Timetables, reservations and operations can change; avoid promising a particular train or seat. |
| Short scenic rail segment | Choose the route segment according to the visitor’s itinerary | Explain boarding/end stations and allow for disruption; check railway information at build time. |
| Coastal rail journey | Colombo; Galle; Matara | Scenic sections vary; not a guaranteed uninterrupted service. |
| Northern rail journey | Anuradhapura; Vavuniya; Jaffna | Check current timetable and route operations. |
| Tea-country road journey | Nuwara Eliya; Hatton; Haputale; Ella | Narrow, winding roads and travel time; recommend planned stops rather than unrealistic timing. |
| Lagoon or mangrove boat journey | Madu Ganga; Bentota River; Negombo Lagoon; Kalpitiya | Keep environmental and safety guidance with the trip. |
| Island-hopping boat journey | Jaffna Peninsula; Delft Island; Nainativu | Ferry/boat schedules and sea conditions can change; confirm before travel. |
| Scenic flight or seaplane | Route/operator-dependent (verify current service) | Research before listing; route, availability, aviation approvals, baggage and weather rules need current verification. |
| Hot-air balloon flight over the Cultural Triangle | Dambulla; Sigiriya; Habarana region | Verify current operators, approvals, schedule and weather policy; do not imply daily operation. |
| Scenic helicopter or fixed-wing flight | Route/operator-dependent (verify current service) | Research before listing; confirm licensed operator, aircraft, landing permissions, route and current schedule. |

### 10. Tea, Spice & Plantation Landscapes

| Experience | Suitable destination links | Practical notes |
|---|---|---|
| Working tea factory visit | Nuwara Eliya; Ella; Haputale; Hatton | Confirm factory access, production hours and photography rules. |
| Ceylon tea tasting or tea flight | Nuwara Eliya; Haputale; Kandy; Colombo | Specify venue and tasting format only after confirming public access. |
| Tea-estate walk | Haputale; Ella; Nuwara Eliya; Hatton | Use permissioned routes and locally knowledgeable guides; respect workers’ privacy. |
| Lipton’s Seat sunrise/viewpoint visit | Haputale | Visibility is weather-dependent; early transport and tea-estate access should be explained. |
| Pekoe Trail through tea country | Named official trail stages | Provide current stage links and note pass/closure guidance. |
| Low-country tea experience | Handunugoda Tea Estate area; Galle (additional location) | Verify current public tours and distinguish low-country tea from high-grown tea. |
| Tea blending and sensory workshop | Named tea venues in Nuwara Eliya; Haputale; Kandy; Colombo | Verify that visitors can participate rather than only purchase products; explain tea grades and tasting without unsupported wellness claims. |
| Plantation landscape and labor-history walk | Named permitted estate routes in Hatton; Haputale; Nuwara Eliya | Add context on labor, migration and estate history with knowledgeable local interpretation; respect privacy and working conditions. |
| Spice garden and spice-growing education | Matale; Kandy region | Avoid unsubstantiated health claims and high-pressure sales. Verify the garden’s educational value. |
| Cinnamon-growing heritage visit | Galle District; coastal low-country estates (verify exact site) | Explain the product and local practice; ensure visitor access is genuine. |
| Rubber, coconut or mixed-farm visit | Selected working farms (location-specific, verify) | Community/owner consent and fair compensation; do not list generic farms as open attractions. |

**Audit gap:** Broaden this beyond factory visits and viewpoints: tea tasting, production learning, estate landscapes, spice/cinnamon heritage, home gardens and plantation history. Distinguish high-grown, mid-grown and low-country products accurately; do not present workers or working estates as scenery without consent.

### 11. Ancient Cities, Architecture & Archaeology

| Experience | Suitable destination links | Practical notes |
|---|---|---|
| Explore Sigiriya’s palace, frescoes and water gardens | Sigiriya Rock Fortress | Heat, stairs, ticketing and active site rules. |
| Cycle Polonnaruwa’s ancient city | Polonnaruwa Ancient City | Large outdoor archaeological zone; dress/behaviour at shrines. |
| Explore Anuradhapura’s sacred city | Anuradhapura Sacred City | Active pilgrimage landscape, extensive distances and sacred etiquette. |
| Visit Dambulla’s cave-shrine complex | Dambulla Cave Temple | Steps, footwear and respectful clothing; confirm current visitor guidance. |
| Climb Mihintale’s heritage landscape | Mihintale | Stairs and heat; pilgrimage setting. |
| Walk the forested monastic ruins at Ritigala | Ritigala Strict Nature Reserve | Access and conservation rules; stay on marked/approved paths. |
| Discover Yapahuwa Rock Fortress | Yapahuwa Rock Fortress | Steep stairway; check access and heat. |
| Visit Gal Vihara and Polonnaruwa’s signature monuments | Polonnaruwa Ancient City | Respect sacred images and site restrictions. |
| Explore Kandy’s temple and royal heritage | Kandy; Temple of the Tooth | Worship site etiquette and current access rules. |
| Walk Galle Fort’s layered architecture | Galle Fort | Living community and heritage site; use a guide who handles colonial history thoughtfully. |
| Explore Jaffna and Mannar fort heritage | Jaffna; Jaffna Fort; Mannar Island; Mannar Fort | Contextualize regional history accurately and sensitively. |
| Discover colonial Colombo on foot | Colombo; Pettah (additional location) | Traffic and heat; use a clear route and explain that Colombo is a living city. |
| Visit Kandy’s temple circuit | Embekka Devalaya; Lankatilaka Vihara; Gadaladeniya Vihara | Confirm access and dress/photography rules for each temple. |
| Learn ancient irrigation and tank heritage | Minneriya; Polonnaruwa; Anuradhapura; Maduru Oya | Add a knowledgeable guide and explain the living water landscape. |
| Archaeology with a specialist guide | Anuradhapura; Polonnaruwa; Sigiriya; Dambulla; Ritigala | Add interpretation by period, function and conservation; verify guide knowledge and site access. |
| Architecture and living-heritage walk | Galle Fort; Colombo; Jaffna; Kandy | Include local, colonial and contemporary layers with historical balance; respect homes and religious sites. |
| Museum or conservation-lab learning visit | Named public museums/collections only | Research current public access, opening and collection rules; do not imply behind-the-scenes access without permission. |

**Audit gap:** Cover more of the island’s ancient capitals, irrigation landscapes, rock sites, monasteries, forts, civic architecture and living heritage. Give sites their own context; group them into a usable visitor route only when geography and time make sense.

### 12. Spirituality, Pilgrimage & Sacred Places

| Experience | Suitable destination links | Practical notes |
|---|---|---|
| Adam’s Peak pilgrimage climb | Adam’s Peak (Sri Pada); Hatton; Nallathanniya | Seasonal pilgrimage, night climb and strenuous ascent. |
| Buddhist sacred-city visit | Anuradhapura; Mihintale; Polonnaruwa | Explain active worship and respectful conduct. |
| Temple of the Tooth visit | Kandy | Confirm access and observance expectations; no sensational framing. |
| Dambulla cave-shrine visit | Dambulla Cave Temple | Footwear, clothing and stairs. |
| Hindu temple heritage visit | Nallur Kandaswamy Kovil; Koneswaram Temple; Nainativu | (Add Nallur as an attraction if not already present.) Follow temple rules; festival dates change. |
| Multi-faith pilgrimage town visit | Kataragama | Present the site’s multi-faith character accurately and respectfully. |
| Island pilgrimage visit | Nainativu (Nagadeepa); Delft Island (only where relevant) | Boat schedules and weather; sacred etiquette. |
| Shrine visit in a forest setting | Madhu Church & Shrine | Major pilgrimage destination; confirm current access and seasonal crowds. |
| Observe a major religious festival | Kandy Esala Perahera; Nallur Festival; Kataragama festival | Date-specific and crowded; verify official dates, procession access and visitor behavior each year. |
| Meditation or temple retreat | Only verified participating centers | Future/conditional; explain duration, participation rules and whether it is a visitor program or religious practice. |
| Multi-faith sacred-place route | Named Buddhist, Hindu, Muslim and Christian sites in a coherent region | Build with community/historian review; explain distinct traditions accurately and do not imply all sites welcome casual entry. |
| Public pilgrimage-season observation | Sri Pada, Kataragama, Nallur or Madhu where appropriate | Guide visitors to public routes and respectful observation; confirm season, crowd management, access and photography rules. |

**Audit gap:** Include the breadth of Buddhist, Hindu, Muslim and Christian sacred landscapes and the island’s multi-faith pilgrimage traditions, while keeping each place accurate to its own community. Separate visitor interpretation from worship and date-specific festivals.

### 13. Food, Markets & Culinary Learning

| Experience | Suitable destination links | Practical notes |
|---|---|---|
| Sri Lankan rice-and-curry cooking class | Colombo; Kandy; Galle; Sigiriya/Habarana area | Verify host, dietary options, format and photography consent. |
| Learn to make hoppers or string hoppers | Kandy; Galle; Colombo; village hosts | Make clear which dish and method the visitor will learn. |
| Jaffna food discovery | Jaffna; Nallur; local markets (additional location) | Regional cuisine has distinctive identity; use local hosts/guides and confirm dietary details. |
| Colombo street-food walk | Colombo; Pettah | Food hygiene, allergies, spice level and route/traffic considerations. |
| Galle market-to-table cooking | Galle Fort; Galle | Local provider example; confirm current offering and avoid overstating authenticity. |
| Visit a fish market and learn coastal food culture | Negombo; Jaffna; Batticaloa; Galle | Working markets: ask before photographing and explain morning timing. |
| Taste regional sweets and snacks | Colombo; Kandy; Jaffna; Galle | Specify the actual foods and vendors; consider allergy information. |
| Ceylon tea and food pairing | Nuwara Eliya; Haputale; Colombo | Confirm tasting venue and explain tea types in plain language. |
| Spice and ingredient walk | Matale; Kandy; Colombo markets | Avoid unsupported medicinal claims or sales-led content. |
| Sri Lankan home meal with a local host | Community/host-specific locations | Prioritize consent, clear host benefit, accessibility and dietary disclosure. |
| Seafood cooking or tasting | Negombo; Trincomalee; Batticaloa; south coast | Season, sourcing and dietary needs; avoid claims about sustainable sourcing without evidence. |
| Farm-to-table meal | Verified farms or community venues | Publish only named providers with transparent provenance and current access. |
| Vegetarian and vegan Sri Lankan food trail | Colombo; Kandy; Jaffna; Galle | Distinguish vegetarian, vegan and dairy-containing dishes accurately. |
| Market visit with a cook or food guide | Colombo; Kandy; Jaffna; Galle | Treat markets as working places, not a staged set. |
| Regional food comparison trail | Colombo; Jaffna; Batticaloa; Kandy; Galle; Negombo | Show regional variety through named dishes and local guides; distinguish daily foods from tourist-oriented menus. |
| Tea, toddy or locally made beverage learning | Named producers and public venues only | Research legal service, production claims and responsible-consumption guidance; do not assume all products or venues are open to visitors. |
| Seasonal fruit, spice or harvest market visit | Named markets in relevant growing regions | Align with actual harvest season; verify market days, respectful photography and food-safety guidance. |

**Audit gap:** Expand the geographic and culinary range: Jaffna and eastern dishes, coastal seafood traditions, tea, spices, markets, sweets, vegetarian food, cooking and home meals. Name the food and format; make allergy, dietary and hygiene details clear where confirmed.

### 14. Village, Community & Everyday Life

This page needs careful editorial practice. “Authentic” should not be used as a promise or as a label for people. Explain who hosts, what visitors participate in, how the community benefits, and what is private.

| Experience | Suitable destination links | Practical notes |
|---|---|---|
| Community-led village walk and meal | Sigiriya/Habarana; Polonnaruwa; Meemure (verify providers) | Consent, local benefit, photography guidance and realistic expectations. |
| Traditional boat and village cooking day | Sigiriya/Habarana area; selected rural tanks | Local operator offering examples exist; verify route, host consent and safety. |
| Meet a tea-estate community through a local guide | Haputale; Hatton; Nuwara Eliya | Do not enter homes or photograph workers without permission; contextualize plantation history. |
| Visit a working paddy or home garden with the host | Cultural Triangle; Kandy region; east coast villages | Seasonal farm work and weather; do not assume public access. |
| Lagoon and fishing-community experience | Negombo; Kalpitiya; Batticaloa; Jaffna | Make participation voluntary and respect working hours and privacy. |
| Community-led nature guiding | Knuckles; Sinharaja; Gal Oya; Meemure | Confirm guide credentials and community benefit; explain conservation boundaries. |
| Learn a local craft from an artisan | Kandy; Matale; Galle; Jaffna | Pay for the workshop fairly; identify the craft and host accurately. |
| Paddling or fishing with a community guide | Location-specific rivers, lagoons and coastal villages | Research before listing; confirm community benefit, permits, gear, safety and that participation does not disrupt livelihoods. |
| Home-garden, paddy or seasonal harvest learning | Named willing hosts in the Cultural Triangle; Kandy region; Jaffna; east coast | Match activity to actual agricultural season; confirm access, payment, safety and visitor participation. Do not imply visitors can join daily work without prior agreement. |
| Community-led food, music or storytelling evening | Named host/community venue | Verify public format, fair compensation, consent, accessibility and schedule; avoid packaging private life as a performance. |
| Rural market and food traditions | Jaffna; Polonnaruwa; Kandy; regional towns | Ask before photographing people or stalls. |
| Indigenous heritage education with community consent | Dambana | Only offer a community-designed experience; no intrusive “village visit” or staged performance. |
| Stay with a local host or homestay | Location-specific, verified listings | Accommodation content may be separate; confirm safety, amenities and host permission. |

### 15. Wellness, Ayurveda & Slow Travel

| Experience | Suitable destination links | Practical notes |
|---|---|---|
| Ayurveda consultation and treatment | Colombo; Kandy; Bentota; Ella; resort locations | Provider qualifications and treatment details; no cure or guaranteed health claims. |
| Traditional spa or massage | Colombo; Bentota; Galle; Kandy | Describe service and provider standards; not a substitute for medical advice. |
| Yoga by the coast | Bentota; Weligama; Ahangama; Tangalle | Provider and class level vary; do not promise therapeutic results. |
| Yoga in hill country | Ella; Kandy; Knuckles region | Confirm location, instructor and session access. |
| Meditation or mindfulness session | Verified retreat/center locations | Be clear whether it is a short visitor class or a longer retreat. |
| Multi-day wellness retreat | Kandy; central highlands; south coast | Detail duration and inclusions only after provider verification. |
| Tea-country slow stay and guided walk | Hatton; Haputale; Nuwara Eliya | Explain the experience, not just the accommodation; consider mobility and elevation. |
| Forest bathing or mindful nature walk | Knuckles; Horton Plains; Sinharaja (permitted routes) | Present as a guided nature walk; avoid clinical claims. |
| Wellness and food learning | Location-specific qualified providers | Avoid unsupported nutrition or health statements. |
| Ayurveda and herbal-knowledge learning visit | Named, appropriately qualified educational provider | Separate cultural education from treatment. Check practitioner credentials and product claims; no diagnosis, cure, or guaranteed outcome language. |
| Slow rail, garden or village stay with a light guided walk | Named accessible route and host/provider | Describe pace and actual activity, not generic “wellness”; include verified terrain, transport and inclusions. |

**Audit gap:** Include more than massage and retreats: low-intensity walks, yoga/meditation classes, tea-country slow itineraries and carefully sourced Ayurveda learning. Make clear what is cultural, recreational or clinical, and never promise health outcomes.

### 16. Arts, Crafts, Festivals & Evening Culture

Combine related creative activities in one page but separate evergreen craft visits from date-specific events.

| Experience | Suitable destination links | Practical notes |
|---|---|---|
| Kandyan dance and drumming performance | Kandy | Explain that formats differ; verify performance schedule and context. |
| Low-country dance and mask traditions | Galle; Ambalangoda (additional location) | Verify artisan/performer access and avoid treating sacred forms as spectacle. |
| Mask-making workshop | Ambalangoda; Galle region | Book with an artisan and explain the craft tradition accurately. |
| Handloom weaving visit | Kandy; Galle; Jaffna; selected workshops | Confirm public access and whether hands-on participation is offered. |
| Wood carving or lacquerware demonstration | Kandy region; Matale | Name the craft and workshop; avoid generic “local crafts” claims. |
| Gem heritage and ethical gem education | Ratnapura | Verify reputable, transparent venues; clearly distinguish education from sales. |
| Batik workshop | Kandy; Colombo; Galle | Identify the actual studio and what visitors make. |
| Traditional puppetry or folk theatre | Location/event-specific | Future/conditional; verify current performances and cultural context. |
| Kandy Esala Perahera | Kandy | Annual dates and procession arrangements vary; crowd, access and religious etiquette. |
| Nallur Festival | Jaffna | Annual dates vary; verify current calendar and temple visitor guidance. |
| Kataragama festival | Kataragama | Date-specific, crowded pilgrimage; explain respectful attendance. |
| Vesak lanterns and city observances | Islandwide; Colombo and Kandy (examples) | Dates follow religious calendar; content needs yearly verification. |
| Sinhala and Tamil New Year customs and public celebrations | Islandwide; specific community events and venues must be named | Dates and formats vary by year and community. Feature public, consent-based events; do not imply private household traditions are open to visitors. |
| Ramadan and Eid public food/cultural context | Colombo; Kattankudy; other named Muslim communities/venues | Calendar dates shift yearly. Include only explicitly public events with community consultation; avoid presenting worship or private observance as entertainment. |
| Full-moon Poya observances and temple events | Named public sites, with local guidance | Dates change with lunar calendar. Explain that this is religious observance; visitors should follow site-specific conduct and photography rules. |
| Contemporary music, theatre, gallery and live performance | Colombo; Kandy; Galle and current named venues | Verify event listings and venue opening close to travel dates; separate year-round venues from one-off events. |
| Artisan-led craft learning | Ambalangoda; Matale; Kandy; Jaffna; named workshops | Expand from shopping to making/learning; verify artisan consent, public access, fair payment and actual workshop format. |
| Colombo evening food and arts walk | Colombo | Verify venues and current opening; avoid promises about nightlife or safety beyond evidence. |

**Audit gap:** Keep evergreen craft and performance experiences separate in presentation from annual events that require calendar updates. Expand beyond one or two famous festivals to community-confirmed public celebrations, contemporary arts, craft demonstrations and participatory workshops. Give religious events context and visitor etiquette, not spectacle language.

### 17. Beaches, Coast & Island Life

This page is about the coastal mood and beach activities. Surfing, diving and marine wildlife have dedicated pages, and should be previewed here with links rather than duplicated in full.

| Experience | Suitable destination links | Season / practical notes |
|---|---|---|
| Choose a calm-water beach day | Nilaveli; Pasikuda; Unawatuna; Bentota | Conditions vary by coast and month; swimming safety must be checked locally. |
| Walk a historic fort-and-coast route | Galle Fort; Trincomalee; Jaffna | Heat and site access; link to heritage page. |
| Explore a fishing harbor at dawn | Negombo; Mirissa; Trincomalee; Batticaloa | Working harbor etiquette and photography consent. |
| Lagoon-side sunset trip | Kalpitiya; Negombo; Batticaloa; Madu Ganga | Conditions and operator behavior; use safe, suitable vessels. |
| Island day trip | Delft; Nainativu; Pigeon Island; nearby islands where permitted | Boat timetables, access permissions, sea conditions and conservation rules. |
| Beach picnic or sunset experience | Bentota; Tangalle; Pasikuda; Nilaveli | Only at permitted locations; disclose transport and any booked meal inclusions. |
| Coastal cycling or walking | Galle; Weligama; Negombo; Batticaloa | Route safety, tides and traffic vary. |
| Turtle conservation learning visit | Kosgoda; Rekawa (additional location) | Vet the organization; avoid touching, crowding, artificial lighting and staged releases. |
| Coastal rock-pool and shoreline nature walk | Site-specific safe, permitted rocky shores | Research location, tide and footing before listing; never invite visitors to collect or disturb marine life. |
| Beach-combing and coastal geology walk | Selected beaches with appropriate tide and access | Focus on observation and interpretation; no collecting shells, coral, eggs, or cultural/archaeological material. |
| Sand-dune and lagoon landscape walk | Kalpitiya; Mannar; selected east-coast sites (route/access verification) | Confirm conservation rules, guide access, heat exposure and vehicle restrictions; avoid fragile dune vegetation. |
| Sea-kayaking or coastal paddle | Registered operators and sheltered, named routes | Distinguish lagoon paddling from exposed sea kayaking; verify wind, currents, rescue support and flotation. |

**Audit gap:** This page should cover shore walks, island/lagoon crossings, calm-water beach days, harbours, coastal nature and island life without duplicating the full surfing, diving or marine-wildlife catalogue. Add swimming advice only from current local conditions and qualified sources.

### Additional specialist themes for later expansion

These may become dedicated pages if the content, destinations and verified providers justify them:

- **Photography & creative travel:** landscape, wildlife, bird, street and cultural photography. Provide consent and wildlife-distance guidance.
- **Family-friendly experiences:** a cross-cutting collection, not a duplicate activity category; include age, effort, facilities and safety only when verified.
- **Accessible experiences:** a cross-cutting collection requiring reliable step-free, transport, restroom and support information. Do not publish generic “accessible” labels without an audit.
- **Camping & stargazing:** permitted camps, sky conditions and safety verified by site.
- **Fishing & sailing:** separate pages if current licensed providers and visitor demand warrant them.
- **Air-based adventure:** ballooning, paragliding, paramotoring, scenic flights and similar offerings only after operator/licence, safety, season and current availability are confirmed.
- **Special interest learning:** archaeology, tea, conservation, food, architecture and local history with qualified interpreters.

## 7. Discovery and filtering across pages

### Hub navigation

Make the primary choice simple: **Explore by experience** or **Explore by destination**. The experience hub should feature all major themes as human-readable tiles, not a filter panel as the first thing a new visitor sees.

### Filters on a theme page

Use only filters that help visitors choose and are backed by structured content:

- **Location/region** (show destination names plainly)
- **Season/months** (only verified seasonal data; otherwise “conditions vary”)
- **Experience type** (theme-specific subtype, e.g. reef, wreck or beginner surf)
- **Effort/skill** where relevant (easy, moderate, challenging, with a short definition)
- **Duration** only once reliable ranges are available
- **Indoor/outdoor** or **guided/self-guided** only if consistently reviewed

Search should understand experience names, themes and destination names. Filters need a visible reset action, result count, mobile-friendly controls and a useful empty state. Do not introduce price, live availability, family suitability or accessibility filters until those fields are reliably maintained.

### Cross-linking rules

- Every experience links to a primary place and can link to supporting destinations.
- Every destination page can show its related experience cards.
- Theme pages can preview related themes without copying their full content.
- An experience should not be repeated as separate cards just because it occurs in multiple places; use one card with multiple destination links if the visitor’s activity is materially the same.
- If the location changes the nature, season or skill level of the activity, create distinct experience entries and explain the difference.

## 8. Content model for the site

Recommended structured fields:

| Field | Purpose |
|---|---|
| `themeId` | Dedicated page/category to which the experience belongs |
| `experienceId` | Stable unique content identifier |
| `title` | Specific, plain-language visitor-facing name |
| `intro` | Short explanation of what the visitor does or discovers |
| `whyDistinctive` | What makes the experience particularly Sri Lankan or noteworthy, evidence-based |
| `subtype` | Theme-specific grouping such as birding, reef dive or food walk |
| `primaryDestinationId` | Main place record, if the site has one |
| `locations` | Additional destination IDs or named locations, with their type (destination, region, route, park, site) |
| `season` | Plain-language description; allow “year-round, conditions permitting” |
| `seasonMonths` | Optional month range and coast/region scope, with source |
| `durationRange` | Optional, only after reliable verification |
| `effort` | Optional defined level; use only when it helps visitors prepare |
| `skillLevel` | Optional for surfing, diving, cycling or technical activities |
| `visitorNotes` | Concise practical, safety, etiquette, access and uncertainty notes |
| `sustainabilityNotes` | Wildlife, reef, community or heritage practices visitors should follow |
| `relatedExperienceIds` | Related ideas without duplicating content |
| `relatedDestinationIds` | Links back to destination pages |
| `sources` | Source URLs, source type, relevant claim, and last checked date |
| `editorialStatus` | Proposed, research-needed, reviewed, published or retired |
| `reviewBy` | Next review date for time-sensitive information |

Do not make operator names, prices, opening times, booking links, accessibility or availability first-class public claims until there is a content owner and verification process for them.

## 9. Page design and writing principles

- Use welcoming language that assumes no prior knowledge of Sri Lanka.
- Make page titles precise: “Wildlife Safaris in Sri Lanka” or “Marine Wildlife” rather than vague labels such as “Nature.”
- Lead with the experience and why it is interesting; show the location immediately afterward.
- Use a small number of descriptive tags, not a dense badge cloud.
- Keep safety and etiquette guidance specific and actionable, without alarmist copy.
- Use maps or small location groupings where they clarify geography; do not make the page map-only.
- Make cards readable on mobile and avoid excessive nested navigation.
- For a theme with many experiences, group into 3–6 meaningful subtypes and let visitors filter within that page.
- Use real images that represent the stated location and activity. Do not use a photo of a generic elephant encounter to imply an ethical wild safari.
- Provide image alternative text and accessible contrast, keyboard navigation, labels and focus states.

## 10. Trust, safety and editorial standards

1. **Wildlife:** Use “you may see” rather than “you will see.” Do not promote feeding, touching, chasing, baiting, elephant riding, animal shows or unsafe proximity.
2. **Whales and dolphins:** Prioritize licensed operators and SLTDA guidance. Do not present swimming with whales as a normal visitor activity.
3. **Adventure:** Check SLTDA’s current activity guidance, operator status, qualifications, equipment and safety briefing expectations. Conditions change; a location listing is not a safety guarantee.
4. **Water:** State that sea, river, wind and visibility conditions vary. Do not imply swimming is safe at every beach, pool or waterfall.
5. **Culture and religion:** Explain dress, photography, footwear and worship etiquette in plain, respectful language. Recheck festival dates every year.
6. **Community:** Use community-led experiences, consent and transparent benefit. Avoid “authentic” as a blanket promise and do not market people’s homes or daily work without permission.
7. **Accessibility and difficulty:** Do not infer accessibility or fitness requirements from a short description; verify routes and facilities.
8. **Seasonality:** State which coast/region the season applies to. Sri Lanka does not have one simple islandwide beach or wildlife season.
9. **Sources:** Keep a source record for claims about seasons, access, regulations, duration and safety. Refresh time-sensitive facts before the relevant season.
10. **Operators:** A provider page can show that an activity is offered; it does not establish quality or endorsement. Label any future recommendations and criteria transparently.

## 11. Research sources

### Audit and current adventure discovery sources

- [Sri Lanka Tourism: Adventure and Special Interest Sports](https://www.srilanka.travel/adventure_and_sports): Official overview lists surfing, scuba/reef and wreck diving, snorkelling, windsurfing, water-skiing, kayaking/canoeing, rafting, trekking, paragliding, rock climbing, cave treks and mountain biking. It describes Kitulgala rafting as November–April. These are activity-type leads; they do not establish current availability at every named place.
- [SLTDA: Register with Us / Adventure Activities](https://www.sltda.gov.lk/en/register-with-us): Current activity categories and linked guidelines, including high-rope activities.
- [SLTDA: High Rope Activities guideline (PDF)](https://www.sltda.gov.lk/storage/common_media/1%20High%20Rope%20Activities.pdf): Defines high-rope activities and includes zipline elements; use for regulatory and safety checks.
- [SLTDA: Adventure activity registration application (PDF)](https://www.sltda.gov.lk/storage/common_media/Manual%20Application%20for%20Water%20based%20and%20air%20based%20adventure.pdf): Lists categories including skydiving, paragliding and rock climbing/abseiling/rappelling; category inclusion is not proof of current operating supply.
- [Flying Ravana: Mega Zip Line](https://www.flyingravana.com/activities/mega-zip-line.html): Location-specific lead for the Ella zipline near Little Adam’s Peak. Provider information is not an endorsement; verify current status and registration independently.
- [Outdoor Adventure Center Kitulgala: activity terms](https://outdooradventure.lk/terms): Current local listing of rafting, rainforest canyoning, waterfall abseiling and ziplining. Use as an availability lead only; independently verify status, route permissions and safety credentials.
- [Rapid Adventures: Kitulgala abseiling](https://www.rapidadventures.lk/experiences/waterfall-abseiling-at-kitulgala): Location-specific lead for waterfall abseiling at Sandun Ella; verify current operation and safety independently.
- [Sri Lanka Tourism: Adventure Sports](https://www.srilanka.travel/adventure-sports): Official overview mentions rock climbing and waterfall climbing, including a Bambarakanda lead. It does not establish public access or a currently audited operator.

**Current availability note:** The desk search found SLTDA categories for paragliding and skydiving, and current pages marketing the Ella zipline and Kitulgala canyoning/abseiling. It did not establish a current, reliable visitor-facing skydiving, paragliding or bungee-jumping service. Keep these marked **research-needed** until an active operator, permissions/registration, schedule and safety process are independently verified. Do not publish “available” based solely on a regulatory category, an old advertisement or an operator’s coming-soon page.

### Earlier conversation references

The original research conversation proposed a broad 14-theme framework: Wildlife & Safaris; Adventure & Outdoors; Beaches & Ocean; Culture & Heritage; Food & Culinary; Nature & Scenic; Tea & Plantation Life; Village & Local Life; Wellness & Ayurveda; Spiritual & Pilgrimage; Scenic Journeys; Arts, Crafts & Shopping; Festivals & Entertainment; and Photography & Special Interests. It also raised a broad inventory including hiking, cycling, rafting, diving, birding, cooking, markets, festivals, crafts, wellness, village experiences and conservation learning. The current live project has since organized these visitor intents into 17 separate themes; retain that live structure while linking overlapping activities rather than duplicating them.

The earlier conversation mentioned Viathra Leisure, ACT Sri Lanka, Tour The Sri Lanka and Visit Lanka as discovery sources. Treat those as leads for further research; verify current URLs, operation and specific claims before relying on them.

### Official tourism, regulatory and conservation sources

- [Sri Lanka Tourism: What to Do](https://www.srilanka.travel/what-to-do): Official tourism experience discovery structure.
- [Sri Lanka Tourism: Wild Safaris](https://www.srilanka.travel/wild-safaris): Wildlife and protected-area positioning.
- [Sri Lanka Tourism: Wildlife](https://www.srilanka.travel/wildlife): Wildlife, biodiversity and park context.
- [Sri Lanka Tourism: Adventure and Special Interest Sports](https://www.srilanka.travel/adventure_and_sports): Surfing, diving, sailing, paddling, rafting and hiking overview; source states Kitulgala rafting season as November–April.
- [SLTDA: Register with Us / Adventure Activities](https://www.sltda.gov.lk/en/register-with-us): Current activity categories and linked guidelines for water, air and land adventure.
- [SLTDA: Adventure Tourism Activity Descriptions (PDF)](https://www.sltda.gov.lk/storage/common_media/AdventureTourismActivitiesWaterBased%26AirBasedDecsriptions.pdf): Categories and definitions for adventure offerings.
- [SLTDA: Manual application for land, water and air adventure activities (PDF)](https://www.sltda.gov.lk/storage/common_media/Manual%20Application%20for%20Water%20based%20and%20air%20based%20adventure.pdf): Lists activities such as trekking, cycling, safari operations, rafting, diving, surfing, kayaking and air-based activities.
- [SLTDA: Whale and Dolphin Watching Guideline (PDF)](https://www.sltda.gov.lk/storage/common_media/GuidelineForWhaleandDolphinWatching.pdf): Marine mammal watching guidance.
- [International Whaling Commission: Sri Lanka profile](https://wwhandbook.iwc.int/en/country-profiles/sri-lanka): Whale watching locations, season windows and regulatory context.
- [Department of Wildlife Conservation: Protected Areas](https://www.dwc.gov.lk/?page_id=72): Protected-area administration and permits.
- [Sri Lanka Tourism: Arugam Bay](https://www.srilanka.travel/attraction?attraction_id=49): Arugam Bay surf season reference.
- [Sri Lanka Tourism: Minneriya](https://www.srilanka.travel/attraction?attraction_id=173): Elephant gathering and park context.
- [SLTDA: Visitor Management report (PDF)](https://sltda.gov.lk/storage/common_media/Final%20Report%20VM%20Sri%20Lanka%20-%20Final%20Dec%202025%20-%20Vol%201.pdf): Seasonal elephant movements among Minneriya, Kaudulla and Hurulu, as described in its visitor management research.
- [The Pekoe Trail: Official stages](https://portal.thepekoetrail.org/pekoe-stages): Stage information and official trail access.

### Local operator examples for product discovery

These help identify experiences currently marketed locally; they are not endorsements and should not replace licensing, safety or quality checks.

- [Island Life Sri Lanka: Experiences](https://islandlifesrilanka.com/experiences/): Local examples of cooking, tea, village and walking experiences.
- [MAG Adventures](https://www.magadventures.com/): Local examples of cycling, boat, village and cooking combinations.
- [Sri Lanka In Style: Galle experiences](https://www.srilankainstyle.com/location-experiences/galle): Examples of Galle-area cooking, tea and village activities.
- [Welikande Sri Lanka: Nature and cultural experiences](https://www.welikandeyogaretreats.com/nature/experiences/): Examples of community, village, tea and nature experiences.

## 12. Work required before and during implementation

### Discovery and content validation

1. Compare this brief to `src/data/experiences.ts`; keep the 17 current theme IDs stable unless a separate IA review authorizes a change.
2. Create a 17-row coverage matrix: existing detailed records, theme guidance, missing experience clusters, destinations needing IDs, source status and next review date.
3. Cross-check destination names and IDs against live destination data; identify missing destination pages and preserve precise place/route/park types.
4. Verify each candidate activity’s actual location, current availability, season, access permissions, operator registration and safety/etiquette notes using authoritative sources and independently checked local information.
5. Prioritize **Launch**, **Next** and **Research** entries. Keep paragliding, skydiving, bungee, ATV/off-road, waterfall climbing and similar technical products in **Research** until current supply and authorization are established.
6. Review sensitive content about wildlife, religious practices, communities, Indigenous heritage and colonial history with knowledgeable Sri Lankan reviewers.
7. Recheck time-sensitive claims immediately before publication and record the source, claim it supports, checked date and review date.

### Information architecture and design

8. Produce a sitemap for the hub and theme landing pages, including URL patterns and breadcrumbs.
9. Design one representative theme page and the discovery hub before populating every page.
10. Test whether a first-time visitor can answer: what is this, where can I do it, when should I go, how demanding is it, and what should I know?
11. Establish a shared card, location chip, season indicator, practical note and related-destination pattern.
12. Ensure mobile usability, readable typography, keyboard access, focus visibility, alt text and accessible filter controls.

### Content model and build

13. Implement theme pages and experience records as structured content, not repeated hard-coded copy; this brief’s candidate inventory is not already reviewed public content.
14. Connect experience location records to destination pages, while allowing route/region/park/site names where no destination page exists.
15. Add search and filters in stages: theme page first, then location and season; add difficulty or skill only for applicable themes.
16. Add empty states, filter reset, related experiences and destination cross-links.
17. Make it possible for an editor to update a season note or close a page without changing the layout.
18. Do not add booking or operator recommendations until there is a verification and maintenance process.

### Release readiness

19. Review all titles for duplicates and distinguish activities that genuinely differ by place or format.
20. Check every public claim against its source and record last-reviewed date.
21. Confirm all destination links work and added locations use a consistent naming convention.
22. Review mobile layouts and accessible interaction.
23. Remove or defer any unverified offering, date, operator, safety claim or guarantee.
24. Launch with a curated, accurate baseline on all 17 theme pages, then add researched entries gradually. Avoid empty themes, but do not inflate the catalogue with duplicates or unverified offerings.

## 13. What success looks like

Visitors can start with a theme or a destination, discover a compelling and relevant activity, understand where and when it happens, see practical considerations, and continue planning through linked destination pages. They do not need to scan hundreds of unrelated activities to find an idea.

Senvira Lanka can add and update experiences over time without duplicating destinations or redesigning the page system. Every published entry has a clear owner, source record and review date when information is time-sensitive.

## 14. Recommended decision for the builder

Use **one discovery hub plus dedicated landing pages for the 17 current themes**. Populate each page with a reviewed baseline selection and expandable additional entries. Keep individual experience detail pages for later, where an activity needs more depth than a card can provide.

The most important design outcome is that the site helps someone discover a side of Sri Lanka they did not even know existed, then gives them enough clear, reliable information to decide what to explore next.
