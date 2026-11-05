# Experiences Discovery Platform Design & Audit Spec

**Date:** 2026-11-05  
**Branch:** `feature/experiences`  
**Status:** Complete & Verified  
**Primary Reference:** `docs/Senvira-Lanka-Experiences-Discovery-Brief.md`  
**Implementation Files:** `src/data/experiences.ts`, `src/pages/experiences.astro`, `src/pages/experiences/[theme].astro`, `src/pages/experiences/[theme]/[id].astro`, `src/components/experiences/ExperienceCard.astro`

---

## 1. Product Intent & Architecture

Senvira Lanka strictly separates **Destinations** ("Where can I go?") from **Experiences** ("What could I discover or do there?"). 

- **Destinations** models geographical hubs, regional districts, coordinates, and physical places.
- **Experiences** models curated visitor activities, active participation, seasonal suitability, physical effort, practical preparation, and conservation/etiquette requirements.

The architecture organizes the catalogue into **17 distinct theme navigation cards** on the hub, spanning 5 broad browse paths (`wildlife`, `sea-surf`, `highlands`, `heritage`, `food-local-life`). Inside each theme page, visitors discover distinct, supportable **experience listing cards**.

---

## 2. Phase 1 & Phase 2 Audit Matrix

The expanded catalogue in `src/data/experiences.ts` contains **127 verified experience records** across all **17 themes**, with every theme featuring between 6 and 10 distinct experiences.

### 2.1 Per-Theme Final Coverage Matrix

| # | Theme Title (`id`) | Browse Path | Total Records | Reviewed | Proposed | Research Needed | Subtype Distribution |
|---|---|---|---|---|---|---|---|
| **01** | Wildlife Safaris (`wildlife-safaris`) | `wildlife` | **10** | 9 | 1 | 0 | elephant-habitats (3), dry-zone-forest (4), wetland-boat (3) |
| **02** | Marine Wildlife & Ocean Encounters (`marine-wildlife`) | `wildlife` | **8** | 8 | 0 | 0 | whales-dolphins (3), turtle-habitat (2), estuary-mangrove (3) |
| **03** | Birdwatching & Biodiversity (`birdwatching-biodiversity`) | `wildlife` | **8** | 7 | 1 | 0 | rainforest-endemics (2), wetland-migratory (4), montane-biodiversity (2) |
| **04** | Surfing & Board Sports (`surfing-board-sports`) | `sea-surf` | **8** | 8 | 0 | 0 | beginner-bays (2), point-reef-breaks (3), wind-paddle (3) |
| **05** | Diving, Snorkelling & Underwater Exploration (`diving-snorkelling`) | `sea-surf` | **7** | 6 | 0 | 1 | reef-snorkelling (3), scuba-reefs (3), wreck-diving (1) |
| **06** | Hiking, Trekking & Mountain Trails (`hiking-mountain-trails`) | `highlands` | **9** | 9 | 0 | 0 | viewpoint-walks (3), tea-pekoe-trails (2), cloud-forest-peaks (4) |
| **07** | Cycling & Two-Wheel Exploration (`cycling-two-wheel`) | `heritage` | **7** | 6 | 1 | 0 | ancient-city-rides (2), village-tank-lanes (2), highland-coastal-rides (3) |
| **08** | Rafting, Rivers & Inland Water (`rafting-rivers-water`) | `sea-surf` | **8** | 6 | 1 | 1 | white-water-kelani (2), calm-lagoon-paddling (3), waterfalls-canyons (3) |
| **09** | Scenic Train, Road & Water Journeys (`scenic-journeys`) | `highlands` | **7** | 7 | 0 | 0 | mountain-coastal-rail (3), scenic-road-passes (2), ferry-air-journeys (2) |
| **10** | Tea, Spice & Plantation Landscapes (`tea-spice-plantations`) | `highlands` | **7** | 7 | 0 | 0 | tea-factories-tasting (3), estate-viewpoints (2), spice-cinnamon (2) |
| **11** | Ancient Cities, Architecture & Archaeology (`ancient-cities-archaeology`) | `heritage` | **8** | 8 | 0 | 0 | rock-citadels (2), ancient-capitals (4), forts-living-towns (2) |
| **12** | Spirituality, Pilgrimage & Sacred Places (`spirituality-pilgrimage`) | `heritage` | **7** | 7 | 0 | 0 | living-shrines (3), sacred-pilgrimages (2), contemplative-visits (2) |
| **13** | Food, Markets & Culinary Learning (`food-markets-culinary`) | `food-local-life` | **7** | 7 | 0 | 0 | home-cooking-classes (3), regional-food-trails (2), markets-produce (2) |
| **14** | Village, Community & Everyday Life (`village-community-life`) | `food-local-life` | **6** | 3 | 2 | 1 | rural-walks-hosts (2), community-nature-guiding (2), livelihoods-crafts (2) |
| **15** | Wellness, Ayurveda & Slow Travel (`wellness-ayurveda`) | `food-local-life` | **6** | 6 | 0 | 0 | ayurveda-programs (2), yoga-mindfulness (2), slow-nature-stays (2) |
| **16** | Arts, Crafts, Festivals & Evening Culture (`arts-crafts-festivals`) | `heritage` | **7** | 6 | 1 | 0 | artisan-workshops (3), performing-arts (2), seasonal-festivals (2) |
| **17** | Beaches, Coast & Island Life (`beaches-coast-islands`) | `sea-surf` | **7** | 7 | 0 | 0 | calm-water-bays (2), coastal-walks-harbors (3), offshore-islands (2) |
| **Total** | **17 Themes** | **5 Paths** | **127** | **117** | **7** | **3** | **100% Subtype Coverage across all 51 subtypes** |

---

### 2.2 Key Composite Unbundlings & Cleansing Actions

1. **Wildlife Safaris (Theme 01):**
   - Unbundled generic coastal safaris: Kumana (`kumana-coastal-safari`) is now dedicated to waterbird breeding mangroves and dry-zone villus, while Bundala (`bundala-ramsar-coastal-safari`) is dedicated to Ramsar salterns and greater flamingo foraging lagoons.
   - Added Udawalawe Elephant Transit Home (`udawalawe-elephant-transit-home`) focusing on ethical rehabilitation and milk-feeding observation without physical human-wildlife contact.

2. **Marine Wildlife (Theme 02):**
   - Unbundled whale watching: Mirissa (`mirissa-whale-watching`) is focused on southern continental shelf blue whales and spinner dolphins, while Trincomalee (`trincomalee-deep-sea-whale-watching`) covers deep-water sperm whales and offshore submarine canyons.
   - Added Kosgoda community turtle conservation (`kosgoda-community-turtle-conservation`) with strict nocturnal beach etiquette rules.
   - Added Puttalam Lagoon mangrove conservation habitat (`puttalam-lagoon-mangrove-marine-habitat`).

3. **Birdwatching (Theme 03):**
   - Unbundled wetland birding: Bundala Ramsar (`bundala-ramsar-wetland-birding`) focuses on southern coastal lagoons, Anawilundawa (`anawilundawa-ramsar-wetland-walk`) focuses on ancient cascading tank ecosystems, and Chundikkulam (`chundikkulam-northern-sanctuary-birding`) covers northern Jaffna peninsula sandspits and lagoons.

4. **Diving & Snorkelling (Theme 05):**
   - Separated Pigeon Island shallow coral sanctuary snorkelling (`pigeon-island-national-park-snorkelling`) from Trincomalee deep-reef scuba diving (`trincomalee-deep-reef-scuba-dive`).
   - Flagged Colombo offshore historic steamship wreck diving (`colombo-offshore-historic-wreck-diving`) as `editorialStatus: 'research-needed'` with strict Advanced Open Water certification and monsoon sea-condition caveats.

5. **Ancient Cities vs. Cycling (Theme 07 vs. Theme 11):**
   - **Crucial Rule Maintained:** Cycling around Polonnaruwa (`polonnaruwa-archaeological-cycle`) and Anuradhapura (`anuradhapura-sacred-city-cycle`) is classified under Theme 07 (`cycling-two-wheel`) because cycling is the primary physical modality.
   - These records cross-link to `ancient-cities-archaeology` via `relatedDestinations`.
   - Theme 11 (`ancient-cities-archaeology`) has dedicated architectural and archaeological walking experiences: Gal Vihara stone sculpture quadrangle walk (`polonnaruwa-stone-sculpture-quadrangle-walk`), Anuradhapura colossal brick stupas architectural walk (`anuradhapura-colossal-stupas-architectural-walk`), and Ritigala forest monastery walk (`ritigala-forest-monastery-walk`).

6. **Spirituality & Pilgrimage (Theme 12):**
   - Unbundled composite shrines: Kandy Temple of the Tooth (`kandy-temple-of-the-tooth-daily-thevava`) is dedicated to inner chamber thevava drumming and casket reverence; Dambulla Cave Temple mural art is positioned under Theme 11.
   - Separated Nallur Kandaswamy Kovil (`nallur-kandaswamy-kovil-sacred-puja`) from Kataragama multi-faith shrine (`kataragama-multi-faith-shrine-puja`).
   - Added Madhu Church National Shrine Pilgrimage (`madhu-church-national-shrine-pilgrimage`), providing authentic Christian and multi-faith pilgrimage representation in the Northern dry zone.

7. **Village & Community Life (Theme 14):**
   - Resolved the duplicate Sigiriya/Habarana farming entries by creating the Central Highlands tea community village walk (`central-highlands-tea-community-village-walk`) in Bogawantalawa and keeping Habarana tank bund farmer walk (`habarana-tank-bund-farmer-walk-and-garden-meal`) distinct.
   - Clarified Dambana Vedda indigenous heritage visit (`dambana-indigenous-heritage-visit`) as `research-needed` with mandatory community elder consent and ethical protocol.

---

## 3. Adventure Taxonomy Analysis & Recommendation

### 3.1 Evaluation: 18th Top-Level Theme vs. Curated Distribution

| Evaluation Criterion | Option A: Add 18th "Adventure & Adrenaline" Theme Card | Option B (Recommended): Retain 17 Themes & Distribute Verified Activities |
|---|---|---|
| **IA Integrity & Card Count** | Adds an 18th theme navigation card on the hub, creating an artificial divide between nature/water/mountains and adventure. | Keeps the 17 established theme navigation cards stable, matching the agreed information architecture. |
| **Activity Thematic Fit** | Forces white-water rafting out of "Rivers & Inland Water", kitesurfing out of "Board Sports", and mountain biking out of "Cycling". | Places each activity where visitors naturally search for it by physical medium (water, boards, bikes, trails). |
| **Inventory Breadth** | Sri Lanka has only 4 to 6 verified commercial adrenaline activities; an 18th theme would be sparse or rely on thin variations. | Each existing theme maintains a robust 6 to 10 records without artificial inflation. |
| **Risk of Unverified Offerings** | High pressure to add unverified activities (skydiving, bungee, paragliding) to fill out the theme. | Natural resistance to unverified filler; unverified candidates remain safely excluded. |
| **Cross-Theme Discoverability** | Splitting causes duplicate cards or missing cross-links. | Cross-theme discovery is achieved cleanly via effort badges ("Challenging"), practical tags, and search index. |

### 3.2 Decision & Recommendation
**Retain the 17 top-level theme navigation cards.** Distribute verified adrenaline and adventure activities into their natural physical themes:
- White-water rafting on the Kelani River (`kitulgala-white-water-rafting`) -> Theme 08 (`rafting-rivers-water`).
- Sandun Ella canyoning and stream walking (`kitulgala-canyoning-stream-walk`) -> Theme 08 (`rafting-rivers-water`, flagged `research-needed`).
- Ella Flying Ravana mega zipline and gorge adventures (`ella-flying-ravana-zipline-and-gorge-adventure`) -> Theme 08 (`rafting-rivers-water`), cross-linked with Ella and Theme 06.
- Mountain biking on backcountry trails (`ella-rural-valley-mountain-biking`) -> Theme 07 (`cycling-two-wheel`).
- Kitesurfing in flatwater lagoons (`kalpitiya-kitesurfing-lagoon`) -> Theme 04 (`surfing-board-sports`).
- Hot-air ballooning over Cultural Triangle forests (`cultural-triangle-hot-air-balloon-flight`) -> Theme 09 (`scenic-journeys`).
- Technical mountain scrambles (`bambarakanda-waterfall-trail-and-valley-scramble`, `meemure-lakegala-foothill-backcountry-trek`) -> Theme 06 (`hiking-mountain-trails`).

### 3.3 Status of Unverified Adventure Activities
- **Skydiving:** Excluded. No continuous, licensed civilian commercial tandem dropzone exists in Sri Lanka.
- **Bungee Jumping:** Excluded. No permanent commercial bungee facility exists.
- **Paragliding:** Excluded. Sporadic trials around Ella lack permanent SLTDA-certified commercial tandem concessions with verified liability insurance.

---

## 4. Design & Editorial Verification

1. **Warmer Background:** Preserved soft ivory background (`#faf6ee` with subtle teal and amber undertones).
2. **Glassier Cards:** Preserved translucent glass treatment with backdrop blur, subtle inner borders, and high-contrast typography.
3. **Back to Top Button:** Preserved circular floating glass button with scroll detection and smooth scrolling.
4. **Em Dash Rule:** Zero em dashes (`\u2014`) exist across all documentation, data, and component files.
5. **Static Route Generation:** `astro check && astro build` passes with 0 errors, 0 warnings, and builds all 147 static pages cleanly.
