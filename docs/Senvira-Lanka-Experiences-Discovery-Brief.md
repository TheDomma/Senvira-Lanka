# Senvira Lanka Experiences Discovery Platform

## Product, content and implementation brief for Anti-Gravity and Codex

**Status:** Expanded recommendation for review  
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
2. A **dedicated landing page for each major experience theme**—for example, Wildlife Safaris, Marine Wildlife, Surfing, Hiking, Heritage and Food.
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

This brief preserves the discovery-first intent and expands the taxonomy to **17 dedicated theme pages**. They are a proposed structure for the builder to compare with the existing Senvira design and navigation.

## 3. Existing project context and destination mapping

The supplied project mirror contains [senvira-lanka-destination-catalogue.md](senvira-lanka-destination-catalogue.md), a 158-entry destination and attraction catalogue arranged into Featured, Main directory and Extended collection tiers. It covers the Cultural Triangle, central highlands, Colombo and the west, south, east, north, islands and inland areas. Its own guidance says to connect activities to places and group nearby attractions where appropriate.

The supplied mirror has no separate page implementation and its `sources/` folder is empty. This brief maps experiences to named destinations in that catalogue where possible, and proposes additional places where the existing list is not enough. Anti-Gravity should inspect the actual working repository before building; labels, IDs and existing content may have changed since the mirror was created.

**Destination does not have to mean an existing destination-page entry.** Use a precise place, park, coast, route, region or island for the experience location. If that place merits a full destination page later, add it to the destination catalogue through the site’s normal content process.

## 4. Goals and boundaries

### Goals

1. Make discovery feel personal and inspiring, and specific to Sri Lanka.
2. Let visitors browse by experience theme, place, season and—where useful—effort or trip style.
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
| Night wildlife observation | Approved private/community conservation areas only (verify exact location) | Conditional; do not advertise night access to national parks unless explicitly authorized. No flash or disturbance. |
| Conservation education visit | Elephant Transit Home, Udawalawe area (verify visitor format); recognized conservation projects | Educational visits only; explain the organization’s role and avoid presenting captive-animal contact as the attraction. |

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
| Marine conservation learning visit | Location depends on a verified active project | Future/conditional. Do not frame volunteering as a guaranteed hands-on wildlife encounter. |
| Snorkelling with a qualified guide | Pigeon Island; Nilaveli; Hikkaduwa; Unawatuna | No guarantee of turtles or other animals. Confirm swimming ability, current and sea condition. |

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
| Amphibian and rainforest night walk | Sinharaja area or other approved private/community site (verify) | Conditional, guide-led and low-light only; do not promise rare species. |
| Naturalist-led biodiversity walk | Knuckles; Sinharaja; Horton Plains; Ritigala | Site permissions and guide requirements vary. |

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

### 8. Rafting, Rivers & Inland Water

| Experience | Suitable destination links | Season / practical notes |
|---|---|---|
| White-water rafting | Kitulgala; Kelani River | Sri Lanka Tourism gives a November–April season for rafting near Kitulgala; river levels and operator advice control actual suitability. |
| Kayaking on the Kelani River | Kitulgala | Use trained operators and safety briefing; currents and levels vary. |
| Calm-water kayaking | Bentota River; Madu Ganga; Negombo Lagoon; Kalpitiya lagoon | Conditions, tides, wildlife and route differ by location. |
| Canoeing or traditional boat outing | Madu Ganga; village reservoirs; selected lagoons | Confirm vessel, life jackets, permitted routes and guide. |
| River tubing | Kitulgala (only verified operators) | Conditions and safety requirements vary; do not present as a casual unsupervised swim. |
| Reservoir or lake boat trip | Gal Oya; Senanayake Samudraya; selected tanks | Access permits and seasonal water levels matter. |
| Waterfall walk and viewpoint | Diyaluma; Bambarakanda; Aberdeen; St Clair’s; Devon | Access routes and safe swimming information need current verification. |
| Canyoning or waterfall abseiling | Kitulgala or other verified operator location | Conditional adventure product. Verify SLTDA guidance, operator status, rescue capability and participant requirements. |
| Stand-up paddleboarding | Bentota; Kalpitiya lagoon; Madu Ganga | Calm water and supervision; use flotation equipment. |
| Sailing or small-vessel outing | Trincomalee; Bentota; selected coastal harbours | Confirm licensed operation, weather limits and safety equipment. |

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
| Scenic flight or seaplane | Route/operator-dependent (verify current service) | Conditional; route, availability, baggage and weather rules need current provider verification. |
| Balloon flight over the Cultural Triangle | Dambulla; Sigiriya; Habarana region | Conditional; dawn weather, operator availability and safety credentials must be checked. |

### 10. Tea, Spice & Plantation Landscapes

| Experience | Suitable destination links | Practical notes |
|---|---|---|
| Working tea factory visit | Nuwara Eliya; Ella; Haputale; Hatton | Confirm factory access, production hours and photography rules. |
| Ceylon tea tasting or tea flight | Nuwara Eliya; Haputale; Kandy; Colombo | Specify venue and tasting format only after confirming public access. |
| Tea-estate walk | Haputale; Ella; Nuwara Eliya; Hatton | Use permissioned routes and locally knowledgeable guides; respect workers’ privacy. |
| Lipton’s Seat sunrise/viewpoint visit | Haputale | Visibility is weather-dependent; early transport and tea-estate access should be explained. |
| Pekoe Trail through tea country | Named official trail stages | Provide current stage links and note pass/closure guidance. |
| Low-country tea experience | Handunugoda Tea Estate area; Galle (additional location) | Verify current public tours and distinguish low-country tea from high-grown tea. |
| Spice garden and spice-growing education | Matale; Kandy region | Avoid unsubstantiated health claims and high-pressure sales. Verify the garden’s educational value. |
| Cinnamon-growing heritage visit | Galle District; coastal low-country estates (verify exact site) | Explain the product and local practice; ensure visitor access is genuine. |
| Rubber, coconut or mixed-farm visit | Selected working farms (location-specific, verify) | Community/owner consent and fair compensation; do not list generic farms as open attractions. |

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
| Colombo evening food and arts walk | Colombo | Verify venues and current opening; avoid promises about nightlife or safety beyond evidence. |

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
| `editorialStatus` | Proposed, fact-check, reviewed, published or retired |
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

### Earlier conversation references

The original research conversation proposed a broad 14-theme framework—Wildlife & Safaris; Adventure & Outdoors; Beaches & Ocean; Culture & Heritage; Food & Culinary; Nature & Scenic; Tea & Plantation Life; Village & Local Life; Wellness & Ayurveda; Spiritual & Pilgrimage; Scenic Journeys; Arts, Crafts & Shopping; Festivals & Entertainment; and Photography & Special Interests. It also raised a broad inventory including hiking, cycling, rafting, diving, birding, cooking, markets, festivals, crafts, wellness, village experiences and conservation learning. This expanded brief separates themes where the visitor intent or practical guidance is meaningfully different, for a total of 16 main pages plus later specialist themes.

The earlier conversation mentioned Viathra Leisure, ACT Sri Lanka, Tour The Sri Lanka and Visit Lanka as discovery sources. Treat those as leads for further research; verify current URLs, operation and specific claims before relying on them.

### Official tourism, regulatory and conservation sources

- [Sri Lanka Tourism — What to Do](https://www.srilanka.travel/what-to-do): Official tourism experience discovery structure.
- [Sri Lanka Tourism — Wild Safaris](https://www.srilanka.travel/wild-safaris): Wildlife and protected-area positioning.
- [Sri Lanka Tourism — Wildlife](https://www.srilanka.travel/wildlife): Wildlife, biodiversity and park context.
- [Sri Lanka Tourism — Adventure and Special Interest Sports](https://www.srilanka.travel/adventure_and_sports): Surfing, diving, sailing, paddling, rafting and hiking overview; source states Kitulgala rafting season as November–April.
- [SLTDA — Register with Us / Adventure Activities](https://www.sltda.gov.lk/en/register-with-us): Current activity categories and linked guidelines for water, air and land adventure.
- [SLTDA — Adventure Tourism Activity Descriptions (PDF)](https://www.sltda.gov.lk/storage/common_media/AdventureTourismActivitiesWaterBased%26AirBasedDecsriptions.pdf): Categories and definitions for adventure offerings.
- [SLTDA — Manual application for land, water and air adventure activities (PDF)](https://www.sltda.gov.lk/storage/common_media/Manual%20Application%20for%20Water%20based%20and%20air%20based%20adventure.pdf): Lists activities such as trekking, cycling, safari operations, rafting, diving, surfing, kayaking and air-based activities.
- [SLTDA — Whale and Dolphin Watching Guideline (PDF)](https://www.sltda.gov.lk/storage/common_media/GuidelineForWhaleandDolphinWatching.pdf): Marine mammal watching guidance.
- [International Whaling Commission — Sri Lanka profile](https://wwhandbook.iwc.int/en/country-profiles/sri-lanka): Whale watching locations, season windows and regulatory context.
- [Department of Wildlife Conservation — Protected Areas](https://www.dwc.gov.lk/?page_id=72): Protected-area administration and permits.
- [Sri Lanka Tourism — Arugam Bay](https://www.srilanka.travel/attraction?attraction_id=49): Arugam Bay surf season reference.
- [Sri Lanka Tourism — Minneriya](https://www.srilanka.travel/attraction?attraction_id=173): Elephant gathering and park context.
- [SLTDA — Visitor Management report (PDF)](https://sltda.gov.lk/storage/common_media/Final%20Report%20VM%20Sri%20Lanka%20-%20Final%20Dec%202025%20-%20Vol%201.pdf): Seasonal elephant movements among Minneriya, Kaudulla and Hurulu, as described in its visitor management research.
- [The Pekoe Trail — Official stages](https://portal.thepekoetrail.org/pekoe-stages): Stage information and official trail access.

### Local operator examples for product discovery

These help identify experiences currently marketed locally; they are not endorsements and should not replace licensing, safety or quality checks.

- [Island Life Sri Lanka — Experiences](https://islandlifesrilanka.com/experiences/): Local examples of cooking, tea, village and walking experiences.
- [MAG Adventures](https://www.magadventures.com/): Local examples of cycling, boat, village and cooking combinations.
- [Sri Lanka In Style — Galle experiences](https://www.srilankainstyle.com/location-experiences/galle): Examples of Galle-area cooking, tea and village activities.
- [Welikande Sri Lanka — Nature and cultural experiences](https://www.welikandeyogaretreats.com/nature/experiences/): Examples of community, village, tea and nature experiences.

## 12. Work required before and during implementation

### Discovery and content validation

1. Inspect the live Senvira Lanka project, homepage, destinations page, route conventions, design tokens and components.
2. Compare destination labels and IDs against `senvira-lanka-destination-catalogue.md`; identify destinations not yet represented in the current live site.
3. Decide whether the site navigation will say **Experiences**, **Discover**, or another term, while preserving the central discovery promise.
4. Confirm the 17 proposed theme pages against the existing navigation and user journeys. Merge themes only where doing so makes visitor intent clearer; do not split pages solely to inflate page count.
5. Verify each proposed activity’s actual locations, current availability, season, access permissions and safety/etiquette notes using authoritative sources and local providers.
6. Mark items **Launch**, **Next**, or **Research** so the first release is controlled even though the information architecture supports a larger catalogue.
7. Review sensitive content about wildlife, religious practices, communities, Indigenous heritage and colonial history with knowledgeable Sri Lankan reviewers.

### Information architecture and design

8. Produce a sitemap for the hub and theme landing pages, including URL patterns and breadcrumbs.
9. Design one representative theme page and the discovery hub before populating every page.
10. Test whether a first-time visitor can answer: what is this, where can I do it, when should I go, how demanding is it, and what should I know?
11. Establish a shared card, location chip, season indicator, practical note and related-destination pattern.
12. Ensure mobile usability, readable typography, keyboard access, focus visibility, alt text and accessible filter controls.

### Content model and build

13. Implement theme pages and experience records as structured content, not repeated hard-coded copy.
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
24. Launch with a curated set per theme page, then add researched entries gradually.

## 13. What success looks like

Visitors can start with a theme or a destination, discover a compelling and relevant activity, understand where and when it happens, see practical considerations, and continue planning through linked destination pages. They do not need to scan hundreds of unrelated activities to find an idea.

Senvira Lanka can add and update experiences over time without duplicating destinations or redesigning the page system. Every published entry has a clear owner, source record and review date when information is time-sensitive.

## 14. Recommended decision for the builder

Use **one discovery hub plus dedicated theme landing pages**, with 17 proposed themes as the working taxonomy. Populate each page with a reviewed launch selection and expandable additional entries. Keep individual experience detail pages for later, where an activity needs more depth than a card can provide.

The most important design outcome is that the site helps someone discover a side of Sri Lanka they did not even know existed—then gives them enough clear, reliable information to decide what to explore next.
