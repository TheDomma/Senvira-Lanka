# Senvira Lanka Packages — Research, Audit & Page Brief

**Prepared:** 8 November 2026  
**Purpose:** Research-backed content and UX handoff for the Senvira Lanka `/packages/` page and individual package itinerary pages.  
**Status:** Strategic recommendation; routes are editorial proposals, not yet supplier-confirmed offers. All prices below are deliberately presented as a validation framework, not bookable quotes.

## Executive recommendation

Build a **small, well-curated set of private, land-only journeys** that act as clear starting points and can be adapted after enquiry. Each package should have a named audience, day count, route, comfortable pace, seasonal notes, and a complete indicative itinerary on its own URL. On each route detail page, clearly separate what the route includes from activities that cost extra. Do not claim “all-inclusive,” publish a fixed starting price, or promise guide/vehicle/hotel standards until Senvira has confirmed its operating model, licensed suppliers, contract rates, room basis, and cancellation terms.

Start with **eight packages in four time bands**: 4–6 days (two), 7–9 days (two), 12–15 days (two), and 20–22 days (two). This offers meaningful choice without creating a catalogue of near-identical loops. Build 28–30 day extensions after supplier and demand validation; a one-month route has different accommodation, transport and pacing needs and should not be a padded version of the standard circuit.

## 1. Current Senvira context

- Existing navigation already includes **Packages → `/packages/`** in `src/config/site.ts`, but no packages page or package data currently exists.
- The established brand direction is calm, editorial, warm, locally grounded and premium through craft rather than luxury clichés. The destinations and experiences areas already provide browseable place/activity discovery; packages should answer **“How could I combine these into a complete trip?”**
- The repository contains an extensive destination photo library. `src/assets/images/destination-sources.md` records credits and licenses for selected directory assets. Use assets only after checking that file’s specific rights entry. `src/assets/images/destination-image-sourcing-checklist.md` documents known gaps/unclear rights; do not infer that every local image is cleared for commercial reuse.
- Strong locally available candidates include licensed directory photos for Sigiriya, Anuradhapura, Polonnaruwa, Trincomalee, Kandy, Nuwara Eliya, Ella, Galle, Mirissa and Yala. Existing experience assets include train journey, tea tasting, whale watching, village cooking and safari. These are candidates, not blanket rights clearance; verify the source/credit record and exact image identity before publication.
- Reuse the existing destination/experience IDs and link each stop to its current destination or experience page when available. Avoid duplicating their long-form descriptions.

## 2. Research and competitive audit

### Official Sri Lankan references

1. **Sri Lanka Tourism’s Suggested Itineraries** — [srilanka.travel/suggested-itineraries](https://srilanka.travel/suggested-itineraries). Official tourism groups ideas into themes such as Untamed, Heritage, Beach, Rejuvenating, Romantic and Northern Sri Lanka. Its guidance says routes are generally 7–11 days, can be adjusted, and can be mixed and matched. **Takeaway:** organize by travel motivation and region, not only duration; allow sensible customization.
2. **Official weather / season context** — [Sri Lanka Tourism weather](https://www.srilanka.travel/weather) and [travel tips](https://www.srilanka.travel/travel-tips). Sri Lanka has two monsoon systems; the official guidance describes the east coast as better aligned with the May–September dry-zone period and south/west coast as favorable in the northern winter. Weather is variable, so show seasonal guidance as a planning aid, never a guarantee. **Takeaway:** package itinerary pages need month-aware coast alternatives and a “conditions can change” note.
3. **Licensed guide categories** — [SLTDA guide services notice (PDF)](https://www.sltda.gov.lk/storage/common_media/SLTDA%20Licensed%20Guide%20Service.pdf) and [SLTDA registration and training](https://sltda.gov.lk/en/register-with-us). SLTDA distinguishes National, Chauffeur, Area and Site guides and calls for verification of valid licenses; chauffeur guide permissions are not the same as a specialist site guide. **Takeaway:** do not call every driver a guide; explain which guide service is included and verify supplier credentials.
4. **Whale and dolphin watching** — [SLTDA guideline (PDF)](https://www.sltda.gov.lk/storage/common_media/GuidelineForWhaleandDolphinWatching.pdf). Official guidance discourages swimming/snorkelling/diving with or touching whales and dolphins and addresses regulated, low-disturbance observation. **Takeaway:** marine wildlife is optional, seasonal and operator-dependent; never promise sightings or advertise in-water interaction.
5. **Official heritage ticket channel** — [Central Cultural Fund eTicketing](https://www.eservices.ccf.gov.lk/eticketing/landing). Site fees are separate, changeable costs and can vary by visitor category/site. **Takeaway:** avoid stale ticket fee tables in package totals; state if admissions are excluded and link to the official current source.
6. **Wildlife responsibility** — [SLTDA Nature & Wildlife Tourism Toolkit (PDF)](https://www.sltda.gov.lk/storage/common_media/Nature_wildlife_Tourism_Toolkit.pdf). Use this to set responsible encounter principles. Safaris are wild observation, not guaranteed sightings; avoid captive elephant rides, baiting, crowding and proximity promises.

### Operator and itinerary references

| Reference | What it does well | Useful lesson for Senvira | Caution |
|---|---|---|---|
| [Sri Lanka Journeys package pages](https://srilankatour.travel/sri-lanka-tour-packages) | Clearly states day count, route, inclusions, two-sharing basis, land-only status, price review date, and exclusions; distinguishes 7-, 10- and 14-day pacing. | State the exact price basis, inclusions, exclusions and review date beside each price. Use drive-time realism to protect trip quality. | Price bands are one operator’s 2026 data and must not be treated as Senvira supplier rates. |
| [Vacation Ceylon Tours](https://vacationceylon.com/tours) | Six named itineraries with day-by-day route lists, audience/style labels, private vs tailor-made explanation, and written quote CTA. | Keep package cards scannable; reveal the whole route and send visitors to dedicated details; make “price on request” honest and explain quote dependencies. | The operator’s advertised inclusions/exclusions are not universal standards. |
| [Sri Lanka official itinerary hub](https://srilanka.travel/suggested-itineraries) | Theme-first official inspiration and mix-and-match framing. | Offer culture, wildlife, active, coast and north-themed journeys alongside classic routes. | Official inspiration does not establish current availability, supplier rates or exact transport time. |
| [Responsible Travel 21-day tour](https://www.responsibletravel.com/holiday/3839/sri-lanka-21-day-tour) and [Lankan 21-day adventure route](https://lankan.lk/travel/itineraries/twenty-one-days-adventure) | Longer routes show the value of slow travel, activity focus, and route-specific detail; one publishes a clear package basis. | Long trips should add regions and rest time, not simply stack famous stops; include physical-demand labels. | Third-party itinerary and price conditions vary by departure and operator. |

### Repeating market patterns

- Common package lengths: 5–7 days for a first taste, 8–10 days for a classic circuit, 12–14 days for a more complete island trip, and 20–21 days for deeper regional coverage.
- Common first-visit combination: Cultural Triangle → Kandy → tea country / Ella → wildlife → coast / Galle.
- Stronger competitors publish route + day-by-day plan, pace/audience, hotel/transport basis, inclusions/exclusions, seasonal alternatives, price basis and a direct enquiry path.
- Weak trust patterns to avoid: unexplained low “from” prices, unclear per-person vs couple total, no accommodation grade, fine-print exclusions, activity listed as included when only the stop is included, impossible drive-heavy days, and guaranteed animal sightings.

## 3. Recommended product structure

### Package family labels

- **First taste** — under a week; one clear region or a compact sampler.
- **Island highlights** — 7–10 days; first-time visitor route, culture + highlands + one wildlife/coast chapter.
- **Two-week journeys** — 12–15 days; room for slower stays and a second coast/region selected by season.
- **Deep island journeys** — 20–22 days; North/East or broad island coverage at a more considered pace.
- **Extended stay** — 28–30 days; add only after operations validation, with optional rest days and regional variants.

A package can be filtered by **duration**, **travel style** (culture, wildlife, coast, active, family, food/local life), **pace** (relaxed / balanced / active) and **best seasonal fit**. Do not create an overly complicated filter panel at launch.

## 4. Proposed launch portfolio (8 packages)

These are **itinerary concepts**. Overnight counts assume the arrival and departure day are counted in trip duration; adapt to actual flight times. Suggested prices are **not provided** because Senvira’s supplier cost, hotel tier, group size and inclusions are not yet verified. Do not display the research-site prices as Senvira prices.

### A. 4 days / 3 nights — Cultural Triangle Short Stay

**For:** short stopover, first Sri Lanka visit, heritage-focused traveler. **Pace:** balanced. **Route:** Airport/Negombo → Dambulla → Sigiriya/Habarana → departure. Keep the route compact; do not add Kandy or the south coast.

1. Arrival; meet pre-arranged transport; transfer to Sigiriya/Habarana; rest.
2. Dambulla Cave Temple and nearby area; late afternoon at leisure or local village experience if verified.
3. Early Sigiriya visit; optional Pidurangala only if suitable; relaxed afternoon.
4. Breakfast and transfer to airport. A departure from Colombo may require a very early start or an extra night; disclose transfer time once verified.

**Season:** year-round concept; heat/rain can affect climbs. **Images:** licensed Sigiriya / Dambulla assets; verify exact locally stored file source.

### B. 6 days / 5 nights — Hill Country & Scenic Rail

**For:** landscapes, tea and train journey; visitors who prefer highlands to safari/beach. **Pace:** balanced, moderate walking. **Route:** Airport/Negombo → Kandy → Nuwara Eliya or tea country → Ella → departure.

1. Arrival and overnight near airport/Negombo or transfer to Kandy depending on arrival time.
2. Kandy: lake, temple-area visit with appropriate dress and verified licensed site guide if offered.
3. Tea country transfer; tea estate/factory visit only after confirming opening and visitor program.
4. Scenic rail segment toward Ella if seat/operating schedule is confirmed; driver meets guests at agreed station. Rail ticket class and seat availability must be explicit.
5. Ella: choose one or two suitable walks, Nine Arch Bridge, or waterfall stop; avoid cramming every landmark.
6. Transfer to airport. Consider adding a night if flight timing makes this a long day.

**Season:** rail/visibility/weather vary; never promise a specific train seat or view. **Images:** licensed Kandy, Nuwara Eliya and Ella files; existing train asset subject to image rights audit.

### C. 7 days / 6 nights — Sri Lanka First Journey

**For:** first-time visitors wanting heritage, hill country, one safari and a short coast finish. **Pace:** active/balanced, at least two-night base where route supports it. **Route:** Airport → Sigiriya/Habarana → Kandy → Ella → Udawalawe → south coast/Galle → airport (sequence may need adjustment to flight time).

1. Arrival; overnight Negombo or transfer to Cultural Triangle only for an early arrival.
2. Sigiriya early; optional Dambulla later (admissions separate unless quoted).
3. Drive to Kandy; afternoon rest or light city visit.
4. Transfer to Ella; scenic railway only if confirmed, otherwise road transfer.
5. Ella easy hike / Nine Arch Bridge; keep afternoon flexible.
6. Morning safari at Udawalawe **or** alternate wildlife activity; continue to south coast.
7. Brief Galle Fort or coast time only if departure timing allows; otherwise add a night or finish at airport.

**Operational note:** this route is ambitious. If adding Galle before a flight, quote a late flight or add a night; do not imply a full Galle visit and comfortable airport arrival are always compatible. **Season:** safari park selection and coast should be checked for travel month.

### D. 9 days / 8 nights — Heritage, Hills & Southern Coast

**For:** first visit with more breathing room; couples and small parties. **Pace:** balanced. **Route:** Negombo → Sigiriya/Habarana → Kandy → Nuwara Eliya → Ella → Udawalawe/Yala → Galle/south coast → departure.

1. Arrival and rest near airport.
2. Transfer to Cultural Triangle; Dambulla en route if arrival timing allows.
3. Sigiriya early; optional Polonnaruwa only as a full day/alternate, not an add-on.
4. Kandy transfer; evening at leisure.
5. Kandy highlights, then tea country or overnight in Nuwara Eliya.
6. Tea country experience; rail segment to Ella if available and scheduled.
7. Ella walk and landscape; one or two stops only.
8. Safari at an appropriate park after checking current animal movement/season and transfer to south coast.
9. Galle/coast, then airport only if departure time and driving plan are comfortable; otherwise turn this into 10 days.

**Recommendation:** Prefer 10 days as the lead classic trip if actual road transfer timing makes nine too rushed.

### E. 14 days / 13 nights — Classic Island, Slowly

**For:** first visit with a full mix of heritage, highlands, wildlife, coast and recovery time. **Pace:** relaxed/balanced. **Route:** Negombo → Anuradhapura or Polonnaruwa → Sigiriya/Habarana → Kandy → tea country → Ella → wildlife → south coast/Galle → departure.

1. Arrival/Negombo.
2–3. Anuradhapura **or** Polonnaruwa and Habarana; choose one ancient-city focus according to interest rather than race between both.
4. Sigiriya and Dambulla, with optional rest block.
5. Transfer to Kandy.
6. Kandy city and heritage; optional botanical gardens.
7. Transfer to Nuwara Eliya/tea country.
8. Tea experience and/or rail journey to Ella if schedule allows.
9–10. Ella with one active day and one open/slow day.
11. Transfer to wildlife base.
12. Safari (choose park with local operator based on season/conditions; sightings not guaranteed).
13. South coast or Galle Fort; optional rest.
14. Departure; use prior-night airport-side stay when flight is early.

**Seasonal variant:** May–September can swap some south-coast nights for Trincomalee / Nilaveli / Pasikuda; December–March favors south/west coast planning. Do not combine both east and south coasts in 14 days if doing so forces exhausting transfer days.

### F. 14 days / 13 nights — North & East: Ancient Cities to the Sea

**For:** repeat visitors, culture-curious travelers, and visitors traveling in the drier east/north season. **Pace:** balanced, more road travel. **Route:** Negombo → Anuradhapura → Jaffna → Trincomalee → Sigiriya/Polonnaruwa → departure. **Best seasonal fit:** broadly May–September for east-coast beach focus; confirm actual weather/access locally.

1. Arrival/Negombo.
2. Transfer to Anuradhapura.
3. Ancient city with licensed site guide option.
4. Transfer north to Jaffna; keep stops limited.
5–6. Jaffna: fort, Nallur precinct (respect worship and dress customs), local food/market experience with a named provider only after verification.
7. Transfer to Trincomalee.
8–9. Trincomalee / Nilaveli: coast and optional regulated boat/snorkel product only if operators, safety and sea conditions are verified.
10. Transfer to Polonnaruwa/Sigiriya area.
11. Polonnaruwa or rest; avoid squeezing both full ancient cities into one day.
12. Sigiriya or Dambulla, optional based on interests.
13. Return toward airport with overnight near airport if flight timing demands.
14. Departure.

**Caution:** this is a longer-distance route. Validate roads, transfer times, and named accommodation bases before price publication. Anuradhapura and Polonnaruwa can be alternatives rather than both mandatory.

### G. 21 days / 20 nights — Wild Sri Lanka & Slow Coast

**For:** wildlife/nature lovers who want more than a “leopard chase” and a restful coast segment. **Pace:** active plus recovery days. **Route:** Negombo → Wilpattu/Anuradhapura → Cultural Triangle → Kandy/Knuckles (optional active segment) → tea country/Horton Plains → Ella → Udawalawe or Yala → Sinharaja (if conditions/guide access verified) → south coast → departure.

1. Arrival/rest.
2–3. Wilpattu area: one or two guided vehicle safaris; no guaranteed species.
4. Anuradhapura heritage or recovery day.
5–6. Sigiriya/Habarana with one heritage day and one open day.
7. Kandy transfer and visit.
8. Kandy/Knuckles area; trek only with route, guide, fitness and weather checks.
9. Transfer to Nuwara Eliya.
10. Horton Plains early walk if conditions and access permit.
11–12. Ella: rail segment if available; one active day and one rest/optional day.
13. Transfer to Udawalawe/Yala area.
14. Safari selected for conditions and guest interest.
15. Recovery/transfer day; do not plan back-to-back long drives and dawn safaris.
16–17. Sinharaja area only with suitable licensed/local guide and current access confirmation; alternatively add a highland or coast day if rainforest access is unsuitable.
18–20. South coast base (Galle, Weligama, Tangalle selected to match interests/season); optional whale watching only in suitable season and with compliant operator.
21. Departure.

**Caution:** seasonally dependent, multi-park trip; avoid over-selling sightings. Prefer this as a flexible enquiry itinerary with clearly named alternatives, not a fixed promise.

### H. 21 days / 20 nights — North, East & Cultural Heart

**For:** travelers who want a deeper route beyond the standard southern loop, local food and heritage, and a coast selected for the season. **Pace:** balanced/slow; long transfers broken by overnight bases. **Route:** Negombo → Anuradhapura → Jaffna → Mannar (optional/verification) → Trincomalee → Pasikuda/Arugam Bay seasonal option → Polonnaruwa/Sigiriya → Kandy → departure.

1. Arrival/rest.
2. Transfer to Anuradhapura.
3. Anuradhapura heritage day.
4. Transfer to Jaffna.
5–7. Jaffna and nearby islands/temples only with current ferry/access check; allow one open day.
8. Transfer toward Mannar only if accommodation and route logistics confirmed; otherwise add time to Jaffna.
9. Mannar local heritage/nature (optional route, all access verified).
10. Transfer to Trincomalee.
11–13. Trincomalee/ Nilaveli: coast, rest, optional licensed water-based activity subject to conditions.
14–15. Pasikuda or alternate east coast base; avoid hopping hotels daily.
16. Polonnaruwa heritage.
17–18. Sigiriya/Habarana, with one open/rest day.
19. Kandy transfer.
20. Kandy or airport-side overnight depending flight.
21. Departure.

**Seasonal variant:** Arugam Bay is a surf-focused alternative, not a generic family beach substitute; verify conditions and traveler ability. For December–March, substitute south/west-coast time and avoid claiming east-coast sea conditions.

### Future 28–30 day extension

Build only after validating supplier capacity and demand. Offer modular 3–5 night extensions (Jaffna, east coast, north-west wildlife, extra tea/highland walking, south-coast rest) with at least two open days and no “whole island in a month” checklist. A 30-day detail route should show travel days and rest days plainly and have a custom quote rather than a public fixed fare until costing is robust.

## 5. Pricing and trust policy

### Before any Senvira price appears, confirm

1. The product type: private land arrangement, shared group departure, or accommodation/activity bundle.
2. Currency and whether price is **per person**, **per couple/group**, or total booking.
3. Party basis: default display should be “per person, based on two adults sharing a double/twin room”; quote solo supplement, child rate and larger-group total separately.
4. Exact accommodation grade / named sample properties / meal plan and whether hotel is guaranteed or illustrative.
5. Vehicle class, passenger/luggage capacity, air-conditioning, driver/guide category and what driver expenses are covered.
6. Whether airport transfers, fuel, tolls, parking, train tickets, attraction admissions, safari jeep/park tickets, specialist guides, meals, water, taxes and tips are included.
7. Date validity, high-season supplement, currency conversion, availability conditions, deposit, balance date, amendment/cancellation/refund terms.
8. Final supplier quote and a margin model approved by Senvira; recheck prices against actual contracted rates and travel dates.

### Safe launch presentation if prices are not ready

Use **“Request a date-specific quote”**, then explain in one short sentence that accommodation level, month, party size and selected activities affect the confirmed total. Show “indicative itinerary” and list all known exclusions. Once quotes are reliable, publish a real **“From US$X per person”** with basis, review date and exclusions adjacent to it—not in a distant FAQ. Never use competitor prices as Senvira prices.

### Standard inclusion/exclusion block

Use only after the facts are confirmed. Possible inclusion fields: private transfers/vehicle, driver/guide category, accommodation, named meal plan, named experiences, train segment, airport pickup/drop-off, taxes. Possible exclusions to call out: flights, visa, travel insurance, meals not listed, attraction tickets, park fees/jeep, train tickets unless reserved, gratuities, personal spend, optional activities. For each package, mark every line “included,” “optional extra,” or “not included.”

## 6. Individual package page specification

Every package gets a stable URL, e.g. `/packages/cultural-triangle-short-stay/`.

### Above the fold

- Breadcrumb: Home → Packages → package title.
- Title written for the traveler (“A first journey through…”) and a short factual promise.
- Duration as days + nights; route in one line; pace/activity level; best travel window (with caveat); party/price basis.
- One strong licensed hero photo, descriptive alt text, and a visible “Request this itinerary” action.
- Price state: confirmed price with basis, or quote-based. Do not use placeholder prices.

### Interactive itinerary

- Accessible day-by-day stepper/timeline, usable on touch, keyboard and screen reader.
- Each day has number/date-agnostic heading, overnight base, a concise plan, approximate drive/transfer duration only once verified, included/optional markers, realistic activity effort/access note, and at least one relevant image with credit metadata.
- Selecting a day updates the detail panel and map highlight. On small screens use a stacked timeline/accordion; no horizontal overflow or map-only meaning.
- Include a route overview map as a visual aid, not navigation; text route is the source of truth. Provide “Show all days” and clear selected day state.
- Include season/route variant panel; do not silently change itinerary based on month.
- Alternatives show why/when they fit and any price or duration impact.

### Practical detail before enquiry

- Accommodation category and sample/confirmed status.
- Transport and guide service as actually offered.
- Inclusions and exclusions in parallel, scannable lists.
- Total travel pace, walking demand, child/accessibility suitability (fact-checked, not medical claims).
- Seasonal caveats and wildlife/sea/weather uncertainty.
- Cancellation/payment summary and quote validity.
- FAQ: price basis, solo traveler, children, dietary needs, luggage, changes, arrival/departure times, what if weather changes, whether fees are included.
- Related destination and experience links.
- Enquiry form fields: package, dates, adults/children/ages, room count, accommodation level, interests/access needs, contact. Confirm a request is an enquiry, not a booking/availability guarantee.

## 7. Packages hub page specification

1. **Hero:** concise editorial introduction; “Choose a journey by time, then shape it around your travel month.” One primary CTA to browse packages and one secondary to plan/customize.
2. **Duration selector:** Under a week / About a week / Two weeks / Three weeks / Extended. Cards show actual days/nights, who it suits, and pace.
3. **Featured journeys:** 6–8 packages, with distinct route and audience. Every card shows duration, route, style tags, pace, seasonal fit, price basis/state, and a “View itinerary” link.
4. **Choose by travel style:** Culture, wildlife, highlands/rail, coast, active, north/east. Avoid redundant filters for small inventory.
5. **How pricing works:** visible explanation of private vs shared, hotel tier, group size, and activities/fees. State whether quoted price includes admission and accommodation.
6. **Build around your dates:** month-aware coast/wildlife notes and a custom inquiry CTA.
7. **Trust:** real operational proof only: registered supplier references, licensed guide verification, named local partner where permitted, transparent terms, real reviews only with source/permission.
8. **FAQ/footer:** short common questions, contact and response expectation only if staff can honor it.

## 8. Image and content standards

- Prefer repository assets with a traceable usage record; cite the local image ledger during implementation and retain source/credit in data. A local copy does not equal a commercial license.
- Use one strong card image per trip; on detail pages use day-specific photos, not the same hero repeated throughout.
- Suggested route image groups: Cultural Triangle (Sigiriya, Dambulla, Polonnaruwa), highlands (tea/Nuwara Eliya, rail/Ella), wildlife (Yala/Udawalawe/Wilpattu), south coast/Galle, North/East (Jaffna/Trincomalee).
- If any route needs an image with unclear rights (notably some older destination files), source a licensed replacement and add its photographer, source page, license and attribution requirements to the ledger before use.
- Alt text describes the actual image (“Tea bushes on a hillside in Nuwara Eliya”), not the package’s marketing promise.
- For heritage/religious sites: respectful dress/behavior, no disrespectful posing with Buddha imagery, and check local photography rules. Avoid promising access to religious spaces or community experiences without consent/permissions.

## 9. Operational and editorial validation checklist

Before a package is bookable or prices are shown:

- [ ] Confirm Senvira’s SLTDA business registration/licensing position and what regulated services it sells directly vs arranges through a licensed partner.
- [ ] Verify each guide’s valid category/license and each activity supplier’s relevant registration, safety procedures and insurance.
- [ ] Get accommodation/transport/activity quotes for defined months, group sizes, rooming, meal plan and vehicle capacity; include margin, taxes and contingency.
- [ ] Validate drive times, train timetable/seat availability, park operations, seasonal access, ferry routes and site hours immediately before publishing.
- [ ] Confirm park selection and animal-welfare standards; no sighting guarantees.
- [ ] Confirm water-sport/rafting/hiking provider competence and weather cancellation plan; identify optional activities clearly.
- [ ] Add terms, deposit/refund policy, quote expiry and customer-support contact process.
- [ ] Check images and credits package by package.
- [ ] Review content with a Sri Lankan tourism operator/local expert and recheck official sources before launch.
- [ ] Date-stamp pricing, seasonal notes and operational review; establish a recurring review owner.

## 10. Antigravity handoff prompt

> Build the Senvira Lanka Packages experience from this brief and the current repository. First inspect the existing Astro design system, navigation, destinations and experiences data, image/source ledgers, and responsive patterns. Create a curated Packages hub and individual package detail pages using shared typed package data. Preserve Senvira’s calm editorial visual identity and existing palette. Use only cleared image assets and retain image credits/source metadata. Make every itinerary day interactive and accessible, with a text-first timeline, selected-day detail, route overview, images, overnight base, realistic transfer details only where verified, included/optional labels, seasonal alternatives, price basis, inclusion/exclusion lists, and an enquiry CTA. Treat all routes in this brief as proposed, not guaranteed supplier inventory; show quote-on-request until actual rates and terms are confirmed. Do not invent prices, licensed credentials, supplier partners, hotel names, review scores, drive times, availability, or wildlife outcomes. Keep the hub easy to browse by duration and travel style, and make every detail page usable on mobile, tablet and desktop.

## 11. Source list and interpretation limits

Official/current references checked on **8 November 2026**:

- [Sri Lanka Tourism: Suggested Itineraries](https://srilanka.travel/suggested-itineraries) — official themes and 7–11 day adaptable itinerary framing.
- [Sri Lanka Tourism: Weather](https://www.srilanka.travel/weather) — official seasonal climate framing; weather is not a guarantee.
- [Sri Lanka Tourism: Travel Tips](https://www.srilanka.travel/travel-tips) — practical and seasonal context; recheck before launch.
- [SLTDA: Register with us / guides](https://sltda.gov.lk/en/register-with-us) — guide and service registration context.
- [SLTDA: Licensed Guide Services notice (PDF)](https://www.sltda.gov.lk/storage/common_media/SLTDA%20Licensed%20Guide%20Service.pdf) — guide categories and validity verification.
- [SLTDA: Whale and Dolphin Watching Guideline (PDF)](https://www.sltda.gov.lk/storage/common_media/GuidelineForWhaleandDolphinWatching.pdf) — regulated, low-disturbance marine mammal viewing.
- [SLTDA: Nature & Wildlife Tourism Toolkit (PDF)](https://www.sltda.gov.lk/storage/common_media/Nature_wildlife_Tourism_Toolkit.pdf) — wildlife-tourism principles.
- [Central Cultural Fund eTicketing](https://www.eservices.ccf.gov.lk/eticketing/landing) — official heritage ticket channel; fees require fresh verification.
- [Sri Lanka Journeys package comparison](https://srilankatour.travel/sri-lanka-tour-packages) — current 2026 example of clear duration, basis, inclusions, exclusions and reviewed from-prices.
- [Vacation Ceylon Tours](https://vacationceylon.com/tours) — current example of themed package catalog, day-by-day itineraries and quote-based pricing.
- [Responsible Travel: Sri Lanka 21-day tour](https://www.responsibletravel.com/holiday/3839/sri-lanka-21-day-tour) — long-form itinerary benchmark.
- [Lankan: 21-day adventure route](https://lankan.lk/travel/itineraries/twenty-one-days-adventure) — independent route pacing benchmark.

**Interpretation limit:** Operator pages are commercial examples, not independent proof of reliability or a recommendation to buy from them. Published package prices differ in room grade, occupancy, dates, fees and inclusions and cannot be compared as though they are equivalent. Official tourism sources guide themes, seasonal awareness and service standards; they do not confirm that any proposed Senvira package is currently available. Exact fares, schedules, licenses, operational access, safety, image permissions and legal obligations must be verified with primary providers before publication.

---

# Expanded Portfolio, Budget Research & Antigravity Prompt

**Updated:** 8 November 2026  
This addendum supersedes the earlier eight-package shortlist and quote-only budget guidance above. The earlier audit and individual page specification remain useful; use the expanded portfolio and estimate rules below for the next design/build handoff.

## A. Budget guidance to show visitors

Current commercial 2026 references vary widely. Sri Lanka Journeys quotes about **US$55–85/person/day budget-friendly, US$125–195 comfortable, US$340+ premium** based on two sharing, private car/driver and land arrangements, with tickets extra. ZipCeylon quotes **US$55–80 budget, US$90–180 mid-range, US$200–350 boutique luxury** with different assumptions. Trustker’s 7-day comfort example is **US$780/person** based on two adults sharing, hotels/breakfast, private transport and selected experiences, with entry and variable activity fees separate. RideLKA’s 7-day sedan starts around **US$665 per car**, with hotels and tickets excluded. These are not directly comparable or official tariffs; they are reference points only.

Sources: [Sri Lanka Journeys packages/pricing](https://srilankatour.travel/sri-lanka-tour-packages), [ZipCeylon pricing](https://zipceylon.com/services/pricing/), [Trustker 7-day example](https://www.trustker.com/sri-lanka-tour-packages/7-day-classic-sri-lanka-private-tour/), [RideLKA vehicle-only example](https://ridelka.com/tours/7-day-sri-lanka-car-with-driver/), [One Sri Lanka cost guide](https://www.onesrilanka.lk/guides/sri-lanka-trip-cost).

### Indicative planning ranges

All amounts below are **USD per person, two adults sharing one double/twin room, land-only planning estimates**. Assume accommodation and breakfast plus core private ground transport. Exclude international flights, visa, insurance, tips, lunches/dinners and most attraction, park, safari-jeep, train and optional activity fees unless a future written quote explicitly includes them. “Budget” assumes simpler guesthouses and fewer inclusions; “Comfort” modest hotels/boutique guesthouses and private transport; “Premium” upscale/boutique accommodation and specialist service. These are broad research estimates, **not Senvira supplier quotes**.

| Duration | Budget | Comfort | Premium |
|---|---:|---:|---:|
| 4–5 days | $250–450 | $450–850 | $1,000–1,900+ |
| 6–7 days | $350–650 | $650–1,250 | $1,500–3,000+ |
| 8–10 days | $500–900 | $900–1,850 | $2,000–4,300+ |
| 12–14 days | $750–1,250 | $1,350–2,600 | $3,000–6,000+ |
| 15–16 days | $900–1,450 | $1,650–3,000 | $3,600–6,800+ |
| 20–22 days | $1,200–2,000 | $2,200–4,100 | $5,000–9,000+ |
| 28–30 days | $1,700–2,800 | $3,200–5,800 | $7,000–13,000+ |

Show the words **“Indicative planning budget · USD per person · two adults sharing · land-only estimate · reviewed 8 Nov 2026”** beside the range. Say a confirmed quote depends on dates, group size, accommodation, vehicle and selected activities. A long itinerary, single traveler, holiday dates, safari fees, specialist guide or premium lodge can materially change the total. Short trips can have higher daily cost because transfers are spread over fewer nights. Do not show a visitor a supposed total holiday budget as though it were the package price.

### Pricing display rules

- Never present these research ranges as “confirmed,” guaranteed availability or Senvira’s actual contracted price.
- Keep the per-person / two-sharing / land-only basis beside the amount, not in distant fine print.
- Each cost item must say **included**, **optional extra**, or **excluded**: stay, breakfast, vehicle, driver/guide category, airport transfer, fuel/toll, admission, safari jeep/park ticket, rail seat, activity, taxes, tips and meals.
- Quote solo, child, family, triple and group rates separately. Do not silently multiply a two-sharing amount.
- Publish actual fixed/from rates only after supplier quotes, dates, margin, terms and quote validity are confirmed. Add a review date and recheck regularly.
- CTA until validated: **Request a confirmed quote**. An enquiry is not a booking.

## B. Expanded portfolio: multiple choices by duration

**Notation:** Every P/C/Pr price below is an indicative estimate in USD/person for two adults sharing, land-only basis above. Admissions, park/safari/jeep, train and optional activities remain extras until explicitly costed. Routes are concepts and need transfer, supplier, schedule, season and flight-timing validation. Sightings, weather, sea conditions, access and train seats are never guaranteed.

### Under a week and 6–7 days

#### 1. 4 days / 3 nights — Cultural Triangle First Taste
**For:** stopover, heritage-first visitor. **Route:** Airport/Negombo → Dambulla → Sigiriya/Habarana. **P/C/Pr:** $250–450 / $450–850 / $1,000–1,900+.
1. Arrival; Habarana only if arrival time allows, otherwise Negombo overnight.
2. Dambulla cave temple and rest; local experience only after provider verification.
3. Early Sigiriya climb; optional Pidurangala by interest/ability; relaxed afternoon.
4. Airport transfer; add airport night for early or Colombo-based departure.
**Keep it regional:** do not add Kandy or coast. State stair/heat demands and ticket exclusions.

#### 2. 5 days / 4 nights — Colombo, Galle & South Coast
**For:** coastal escape with heritage. **Route:** Airport/Negombo → optional Colombo → Galle → south coast. **P/C/Pr:** $300–550 / $550–1,000 / $1,200–2,300+.
1. Arrival; Negombo or Colombo according to landing time.
2. Transfer south; Colombo stop only if flight and traffic allow.
3. Galle Fort walk; guide optional.
4. Beach/rest; surf lesson or boat outing only through verified provider and suitable conditions.
5. Airport transfer with traffic buffer; add a night for early flight.

#### 3. 6 days / 5 nights — Tea Country & Scenic Rail
**For:** highland scenery, tea and rail. **Route:** Airport → Kandy → Nuwara Eliya → Ella. **P/C/Pr:** $350–650 / $650–1,150 / $1,500–2,800+.
1. Arrive; Negombo or Kandy overnight according to flight.
2. Kandy heritage and rest.
3. Tea-country transfer; visit only a confirmed public program.
4. Reserved rail segment toward Ella if timetable/seats are confirmed; otherwise road transfer.
5. Ella: Nine Arch Bridge and one suitable walk/waterfall.
6. Airport transfer; verify timing or add a night.
**Clarify** ticket class/reservation and driver luggage coordination.

#### 4. 6 days / 5 nights — Wildlife & Elephant Country
**For:** wildlife-led short break. **Route:** Airport → Habarana → Kandy → Udawalawe area. **P/C/Pr:** $400–750 / $750–1,400 / $1,700–3,200+.
1. Arrive and transfer to Habarana if practical.
2. Sigiriya or Dambulla.
3. One safari at Minneriya/Kaudulla chosen with a local operator for current conditions; no sighting promise.
4. Kandy transfer/rest.
5. Toward Udawalawe; ethical wildlife learning only from a verified provider.
6. Airport transfer; a seventh night may be needed for comfort.
**Do not** stack parks or promise an elephant gathering.

#### 5. 7 days / 6 nights — Classic Highlights Sampler
**For:** active first-time visitor. **Route:** Negombo → Sigiriya → Kandy → Ella → safari → coast. **P/C/Pr:** $400–700 / $700–1,350 / $1,600–3,100+.
1. Arrival/Negombo.
2. Cultural Triangle transfer; Dambulla only if time.
3. Sigiriya early; continue to Kandy only if transfer is realistic.
4. Kandy and highland transfer (validate long drive).
5. Ella by reserved rail or road; one walk.
6. Safari or coast transfer; don’t promise long safari and leisure beach time together.
7. Depart; Galle only for late flight or with extra night.
**Label active sampler; recommend 9–10 days for relaxed pace.**

#### 6. 7 days / 6 nights — Northern Heritage & Jaffna
**For:** repeat visitors, food and culture. **Route:** Airport → Anuradhapura → Jaffna. **P/C/Pr:** $450–800 / $800–1,500 / $1,800–3,400+.
1. Arrive; airport-side night.
2. Transfer to Anuradhapura.
3. Ancient city; licensed site guide option and respectful dress/behavior note.
4. Long transfer to Jaffna with rest stop.
5. Fort, Nallur precinct, food and open time; respect worship schedule.
6. Island outing only if ferry/access is confirmed; otherwise second culture day.
7. Return south is often too long for a same-day flight; add night or use verified alternative transport.

### 8–10 days

#### 7. 8 days / 7 nights — Family Island Sampler
**For:** families. **Route:** Negombo → Habarana → Kandy → Ella → coast. **P/C/Pr:** $500–850 / $850–1,650 / $1,900–3,700+.
1. Arrival/rest.
2–3. Habarana base: one heritage day, one rest/pool or optional safari day.
4. Kandy transfer and light visit.
5. Train or road to Ella, based on availability/family needs.
6. Short Ella outing and free time.
7. Coast transfer/rest.
8. Airport transfer with flight timing checked.
**Confirm** child ages, car seats, family rooms, pool safety and minimum ages. Avoid animal-contact attractions.

#### 8. 9 days / 8 nights — Heritage, Hills & South Coast
**For:** balanced first visit. **Route:** Negombo → Sigiriya/Habarana → Kandy → tea country → Ella → safari → Galle/coast. **P/C/Pr:** $550–950 / $1,000–1,850 / $2,200–4,300+.
1. Arrival.
2. Triangle transfer; Dambulla only if time.
3. Sigiriya and free afternoon.
4. Kandy transfer/rest.
5. Kandy heritage; onward tea-country transfer only if realistic.
6. Tea visit and rail/road to Ella.
7. Ella walk/open time.
8. Safari; coast transfer only if feasible.
9. Galle/coast and departure only with suitable flight; otherwise add night.
**Audit transfer times; make this 10 days if pace is rushed.**

#### 9. 9 days / 8 nights — Active Highlands & Rainforest
**For:** hikers and nature lovers. **Route:** Kandy/Knuckles → Nuwara Eliya/Horton Plains → Ella → Sinharaja or alternate. **P/C/Pr:** $600–1,050 / $1,100–2,100 / $2,500–4,800+.
1. Arrival/overnight based on flight.
2. Rest and short walk.
3. Knuckles trek only with route, guide, weather and fitness checks.
4. Nuwara Eliya transfer.
5. Horton Plains if access/weather permits.
6–7. Ella: active day and recovery/open block.
8. Sinharaja only with confirmed access/guide; otherwise extra highland day.
9. Airport plan that avoids an exhausting drive.

#### 10. 10 days / 9 nights — Classic Island Journey
**For:** recommended balanced first trip. **Route:** Negombo → Triangle → Kandy → tea country → Ella → safari → south coast. **P/C/Pr:** $650–1,100 / $1,150–2,100 / $2,600–5,000+.
1. Arrival/Negombo.
2–3. Habarana base: choose Sigiriya, Dambulla and/or Polonnaruwa by interest; don’t cram all.
4. Kandy transfer.
5. Kandy heritage/rest.
6. Tea-country transfer/experience.
7. Reserved rail or road to Ella.
8. Ella walk and open time.
9. Safari; coast transfer only if realistic.
10. Galle/coast or airport-side night; extend for real beach time.

#### 11. 10 days / 9 nights — East Coast & Ancient Cities (seasonal)
**For:** mid-year beach and heritage. **Route:** Anuradhapura/Sigiriya → Polonnaruwa → Trincomalee/Nilaveli → Kandy. **P/C/Pr:** $650–1,100 / $1,150–2,200 / $2,600–5,200+.
1. Arrival/rest.
2. Anuradhapura or Sigiriya depending landing.
3. Sigiriya/Dambulla.
4. Polonnaruwa or open day.
5. Trincomalee transfer.
6–7. Nilaveli/Trincomalee rest; Pigeon Island optional only with permit/provider/sea checks.
8. Kandy transfer.
9. Kandy or rest.
10. Airport transfer; add night for early flight.

#### 12. 10 days / 9 nights — Wildlife & Coast, Responsibly
**For:** wildlife-led travelers. **Route:** Wilpattu or Habarana → Kandy/highlands → Udawalawe/Yala → south coast. **P/C/Pr:** $700–1,200 / $1,250–2,350 / $2,800–5,500+.
1. Arrival/rest.
2–3. Choose one wildlife region; one/two drives.
4. Transfer toward Kandy.
5. Kandy heritage/rest.
6. Tea country/rail.
7. Ella open day.
8. Wildlife-base transfer.
9. One safari; second optional and separately costed.
10. Coast/airport; extend for beach time.
**No animal sightings guaranteed.**

### 12–16 days

#### 13. 12 days / 11 nights — Ancient Cities & Living Culture
**For:** archaeology, sacred sites and local culture. **Route:** Anuradhapura → Habarana → Polonnaruwa → Kandy → Colombo/Galle. **P/C/Pr:** $750–1,250 / $1,350–2,450 / $3,000–5,800+.
1. Arrival.
2–3. Anuradhapura: guided heritage day and flexible day.
4. Habarana transfer.
5. Sigiriya or Dambulla.
6. Polonnaruwa full day, or omit for slower pace.
7. Kandy transfer.
8–9. Kandy heritage, gardens and verified craft/food activity.
10. Transfer to Colombo or Galle.
11. City/fort culture and free time.
12. Depart.
**Include temple respect, photography and admission notes.**

#### 14. 12 days / 11 nights — Tea Trails & Hill Country Walks
**For:** highland-focused walkers. **Route:** Kandy → Knuckles → Nuwara Eliya → Haputale → Ella. **P/C/Pr:** $800–1,350 / $1,450–2,650 / $3,200–6,200+.
1. Arrival/Kandy depending flight.
2. Kandy heritage/rest.
3–4. Knuckles walks with guide/fitness/weather checks, or tea-country alternative.
5. Nuwara Eliya.
6. Horton Plains if open/conditions permit.
7. Tea estate/recovery.
8. Rail/road to Haputale.
9. Lipton’s Seat or moderate walk if conditions permit.
10–11. Ella walk plus open day.
12. Airport transfer; add coast nights if desired.

#### 15. 14 days / 13 nights — Classic Island, Unhurried
**For:** first visit with breathing room. **Route:** Negombo → selected ancient city → Triangle → Kandy → tea country → Ella → wildlife → south coast. **P/C/Pr:** $850–1,450 / $1,550–2,800 / $3,400–6,500+.
1. Arrival.
2–3. Choose Anuradhapura or Polonnaruwa focus, with recovery.
4. Sigiriya/Dambulla.
5. Habarana open day/optional safari.
6. Kandy transfer.
7. Kandy heritage/rest.
8. Tea country.
9. Rail/road to Ella.
10–11. Ella active day and open day.
12. Wildlife base.
13. One safari, no sighting promise.
14. Coast/Galle or airport-side night; extend if coast time matters.

#### 16. 14 days / 13 nights — North & East Discovery
**For:** returning/culturally curious visitors, especially mid-year. **Route:** Anuradhapura → Jaffna → Trincomalee → Polonnaruwa/Sigiriya. **P/C/Pr:** $900–1,550 / $1,650–3,050 / $3,700–7,000+.
1. Arrival.
2–3. Anuradhapura.
4. Jaffna transfer.
5–7. Fort, Nallur area, food and flexible day; island access checked.
8. Trincomalee transfer.
9–10. Coast/rest; water activity optional and conditional.
11. Polonnaruwa.
12. Sigiriya or Dambulla.
13. Airport-side night.
14. Depart.

#### 17. 15 days / 14 nights — Coast-to-Coast Island
**For:** beach-first visitors wanting coast plus heritage. **Route:** Cultural Triangle → Trincomalee/east coast → Kandy → Galle/south coast. **P/C/Pr:** $950–1,600 / $1,750–3,200 / $3,900–7,200+.
1. Arrival.
2–4. Triangle base: two visits plus open day.
5. East-coast transfer.
6–8. Trincomalee/Nilaveli or Pasikuda base, season dependent.
9. Kandy transfer.
10. Kandy heritage/rest.
11. Tea/highland stop.
12. South-coast transfer.
13–14. Galle/coast at slow pace.
15. Airport transfer, timing verified.
**Publish seasonal variants; don’t claim both coasts are ideal year-round.**

#### 18. 16 days / 15 nights — Sri Lanka with Children, Slowly
**For:** family and multigenerational travel. **Route:** Negombo → Habarana → Kandy → tea country → Ella → Udawalawe → coast. **P/C/Pr:** $1,000–1,700 / $1,850–3,450 / $4,100–7,800+.
1. Arrival/rest.
2–4. Habarana: one heritage outing/day, rest/pool, optional safari.
5. Kandy transfer.
6. Easy Kandy/gardens.
7–8. Tea country with short outings.
9. Train if seats/family logistics work; road alternative.
10–11. Ella short walks/free time.
12. Udawalawe transfer.
13. Safari after child/vehicle suitability check; no animal contact.
14–15. Coast rest.
16. Departure plan.
**Confirm ages, rooms, car seats, pool safety, minimum ages and child rates.**

### 20–22 days

#### 19. 20 days / 19 nights — Wild Landscapes & Southern Coast
**For:** nature lovers seeking habitat variety and rest. **Route:** Wilpattu → Triangle → Kandy/Knuckles → tea country → Ella → safari → optional Sinharaja → south coast. **P/C/Pr:** $1,250–2,100 / $2,300–4,200 / $5,200–9,200+.
1. Arrival.
2–3. Wilpattu base, one/two drives.
4. Anuradhapura or recovery.
5–7. Habarana/Sigiriya, heritage and open day.
8. Kandy transfer.
9–10. Kandy/Knuckles optional trek and recovery.
11. Tea-country transfer.
12. Horton Plains/tea visit if access permits.
13–14. Ella active and open days; rail only if confirmed.
15. Safari-region transfer.
16. One safari; second optional.
17. Recovery/transfer.
18. Sinharaja only after access/guide/weather check, otherwise alternative stay.
19. Coast rest.
20. Depart or add airport night.

#### 20. 21 days / 20 nights — Sri Lanka Adventure Circuit
**For:** active adults. **Route:** Kitulgala → Horton Plains/Adam’s Peak option → Ella → safari → surf coast/Galle. **P/C/Pr:** $1,300–2,200 / $2,400–4,400 / $5,400–9,800+.
1. Arrival/rest.
2–3. Kitulgala rafting/walk via vetted provider and conditions.
4. Nuwara Eliya transfer.
5. Horton Plains if open.
6. Adam’s Peak only in season with effort/overnight detail; otherwise rest.
7–9. Ella hikes staged with recovery.
10. Safari-base transfer.
11. Safari; no sighting promise.
12. Recovery/coast transfer.
13–15. Surf base chosen for season/ability; qualified lesson optional.
16. Transfer toward Galle.
17. Galle Fort.
18–20. Coast rest or verified nature extension.
21. Depart.
**State fitness and weather dependencies.**

#### 21. 21 days / 20 nights — North, East & Cultural Heart
**For:** regional culture and food. **Route:** Anuradhapura → Jaffna → optional Mannar → Trincomalee → east coast → Polonnaruwa/Sigiriya → Kandy. **P/C/Pr:** $1,300–2,200 / $2,400–4,500 / $5,500–10,000+.
1. Arrival.
2–3. Anuradhapura.
4. Transfer to Jaffna.
5–7. Jaffna heritage/food/open day; check island access.
8. Mannar only with confirmed logistics, otherwise more Jaffna.
9–10. Optional Mannar nature or recovery.
11. Trincomalee transfer.
12–14. Coast/rest, optional regulated activity.
15–16. East-coast base, seasonal.
17. Polonnaruwa.
18–19. Habarana/Sigiriya and rest.
20. Kandy or airport-side stay depending flight.
21. Depart.

#### 22. 22 days / 21 nights — Grand Island Journey
**For:** broad first visit with three weeks. **Route:** Triangle → Jaffna → Trincomalee/east → Kandy/tea country → Ella → safari → south coast. **P/C/Pr:** $1,400–2,350 / $2,600–4,800 / $5,800–10,500+.
1. Arrival.
2–4. Anuradhapura/Habarana with selective heritage.
5. Jaffna transfer.
6–8. Jaffna culture/open day, island trip conditional.
9. Trincomalee transfer.
10–12. East-coast base in suitable season.
13. Polonnaruwa transfer/visit.
14. Habarana rest/Sigiriya.
15. Kandy transfer.
16. Kandy heritage.
17. Tea-country transfer.
18. Rail/road to Ella.
19–20. Ella walks/rest.
21. Safari only if transfer time permits; consider staged overnight.
22. Departure only if practical; 23-day version may be better.
**Route distances require local validation.**

### 28–30 days

#### 23. 28 days / 27 nights — Sri Lanka, Slowly
**For:** extended stay with proper rest. **Route:** Triangle → Jaffna → east coast → Kandy/tea country → Ella → south coast. **P/C/Pr:** $1,700–2,700 / $3,200–5,600 / $7,000–12,500+.
1. Arrival/rest.
2–5. Cultural Triangle: two visits, one optional nature day, one rest day.
6–9. Jaffna heritage/food/flexible time; island access checked.
10. Trincomalee transfer.
11–14. East-coast base/rest, season-dependent.
15–16. Polonnaruwa/Habarana, one visit and one recovery day.
17–19. Kandy/tea country.
20. Rail/road to Ella.
21–23. Ella active day, optional activity and open day.
24–27. One or two south-coast bases; Galle day trip, no daily hotel hops.
28. Departure/airport buffer.

#### 24. 30 days / 29 nights — Complete Island, Regional Edition
**For:** extended-stay travelers wanting north, east, highlands, wildlife and coast. **Route:** Wilpattu/Anuradhapura → Jaffna → optional Mannar → Trincomalee/east → Triangle → Kandy/Knuckles → tea country/Ella → safari → south coast. **P/C/Pr:** $1,850–2,900 / $3,500–6,000 / $7,500–13,500+.
1. Arrival/rest.
2–4. Wilpattu/Anuradhapura; safari conditional.
5–9. Jaffna culture, food and open day; Mannar only if logistics verified.
10. Trincomalee transfer.
11–14. East-coast base; seasonal activities optional.
15–17. Triangle with selective visits and rest.
18. Kandy transfer.
19–20. Kandy/Knuckles; trek optional and checked.
21–23. Nuwara Eliya/Haputale tea country.
24–25. Ella; rail only if scheduled/confirmed.
26. Wildlife-region transfer.
27. One safari, no guarantees.
28–29. South coast/Galle selected for the month.
30. Depart.
**Prefer custom quotation and modular extensions.**

## C. Packages hub and detail page requirements

### Hub page
1. Concise editorial hero aligned with the existing site; position routes as starting points visitors can shape around dates/interests.
2. Browse by duration: under a week, 6–7, 8–10, 12–16, 20–22, 28–30 days.
3. A simple Budget / Comfort / Premium selector only if assumptions remain explicit.
4. Package cards with days/nights, route, audience, theme, pace, seasonal fit, budget range/basis and “View itinerary.”
5. Browse by heritage, wildlife, highlands/rail, coast, North & East, family, active/adventure and food/local life.
6. Pricing explainer, seasonal note, custom enquiry and FAQ.
7. Keep hub scannable: do not put 24 full itineraries in a single wall of text. Start with 10–12 verified public offers and retain remaining entries as planned content.

### Each package page
- Stable URL; breadcrumb; clear title and promise; days/nights, route, audience, pace/effort, seasonal fit and budget basis in first screen.
- “Indicative planning budget” with currency, per-person/two-sharing/land-only basis, review date and quote CTA.
- One cleared hero image; keep source/credit/license in data. Each itinerary day gets a relevant image only where rights are verified, descriptive alt text, base/overnight, activities, known transfer information, exertion/access note and included/optional/excluded markers.
- Accessible text-first interactive day selector/timeline. Selected day may update a detail panel and supporting route map. Map is supplementary; route text is source of truth. Add “Show all days.”
- Mobile stacked timeline/accordion; keyboard, screen reader, touch, reduced-motion, visible focus and no horizontal overflow. Design tablet portrait/landscape and desktop deliberately.
- Accommodation/vehicle/driver-guide basis, inclusion/exclusion lists, fees, season alternatives, pace/access/family notes, FAQ, and enquiry form (dates, travelers/ages, rooms, style, budget, needs, contact). An enquiry is not a booking.
- Only show exact hotel, supplier, license, travel time, ticket, rail, activity, terms or availability details when verified.

## D. Before anything is called bookable

- [ ] Confirm Senvira business/licensing status and licensed partner roles.
- [ ] Check guide category and valid license; verify activity suppliers, insurance, training and operating conditions.
- [ ] Obtain date/party/room/meal/vehicle/activity-specific supplier rates; add approved margin, taxes and contingency.
- [ ] Define Budget/Comfort/Premium by actual accommodation and service level.
- [ ] Verify routes, drive times, road conditions, train/ferry schedules, opening hours, fees, permits and seasonal access.
- [ ] Confirm deposit, balance, changes, cancellation/refund and quote validity.
- [ ] Review wildlife ethics and activity safety; never guarantee weather/sightings/rail seats.
- [ ] Audit photo permissions, credits and alt text.
- [ ] Have a local tourism professional check route realism and cultural respect; assign owner/review date for future rates and season notes.

---

## E. Standalone prompt for Google Antigravity — Claude Sonnet 5.5

Copy this prompt separately into Antigravity with this brief and the Senvira repository available as context.

```text
You are Claude Sonnet 5.5 in Google Antigravity working on the existing Senvira Lanka website. Build the Packages hub and dedicated package itinerary pages from this research brief and the repository. Treat the repository as the implementation and design source of truth. First inspect the Astro pages, shared layout, tokens, fonts, components, homepage, destinations and experiences data, image-rights ledgers, and navigation. The homepage, destinations page and experiences page are finished for now: preserve them. Only make a shared integration change if necessary.

GOAL
Visitors must quickly understand which Sri Lankan trip fits their time, interests, pace, season and budget. Build a clear packages hub and individual detail pages. Each package must have an understandable complete itinerary, interactive day navigation, relevant cleared imagery, practical details, transparent price basis, inclusions/exclusions and a request-quote action.

AESTHETIC
Follow the existing Senvira visual language: calm and assured, editorial, warm and human, rooted in real Sri Lankan places, premium through care and restraint. Use current fonts and tokens; approved colors are deep teal #145B59, warm ivory #F6F1E7, spice amber #D99A45 and ink charcoal #263238. Use strong authentic photography, deliberate whitespace, readable hierarchy, restrained motion and mobile-first clarity. Avoid a generic travel template, clutter, huge gradients, glass effects, heavy shadows, neon colors, cliché luxury copy and unsupported superlatives. Do not copy a competitor’s identity.

RELIABILITY / PRICING
All routes and rates in the brief are planning estimates and proposals, not confirmed Senvira inventory. Never invent hotel names, suppliers, availability, guide licenses, credentials, reviews, awards, exact prices, drive times, tickets, train seats, activity access or terms. Show ranges only as “Indicative planning budget” and put this basis right beside them: USD per person, two adults sharing one room, land-only estimate; accommodation/breakfast and core private transport assumed; most entry, safari/park/jeep, rail and optional activity fees excluded unless verified. State final quote depends on dates, party size, lodging, transport and selected activities; show a review date. Never label a request as a booking or imply availability. Never use competitor fares as Senvira prices. If assumptions would be unclear on a card, show “Request a confirmed quote” instead of a numeric range.

PORTFOLIO
The brief contains 24 distinct options spanning under one week, 6–7, 8–10, 12–16, 20–22 and 28–30 days. Preserve multiple choices at common lengths; do not reduce to one package per duration. Select around 10–12 distinct and route-feasible offers for the first public launch, representing heritage, wildlife, family, highlands/rail, coast, North & East and active travel. Keep the remaining options as draft/planned inventory, not deleted. Give each selected package a stable detail URL and complete itinerary.

HUB
Create /packages/ with concise editorial hero; browse by duration; a simple budget selector only if the price assumptions stay clear; cards showing duration, route, audience, style, pace, season, indicative range/basis and detail link; browse-by-theme; pricing explanation; seasonal guidance; custom quote enquiry and FAQ. Keep it scannable. Do not place every full itinerary on the hub.

DETAIL PAGES
Each route page includes: clear title/promise; days and nights; route; audience, theme, pace and effort; seasonal fit/caveat; estimate and basis; licensed hero; complete day-by-day text itinerary; overnight base; practical activity description; transfer information only if verified; physical/accessibility note; included/optional/excluded labels; route overview; seasonal alternatives; lodging/transport/guide basis; inclusions/exclusions; fee treatment; useful FAQ and quote-enquiry form. Link stops to real current destination/experience routes after checking them. Keep uncertain supplier facts out of public claims.

INTERACTION / ACCESSIBILITY
Use accessible semantic buttons/links for day selection or accordion. Support keyboard, touch and screen readers with visible focus, announced selected state, descriptive alt text, reduced-motion and adequate contrast. The map is optional and supplementary; route text is the source of truth. Phone layout should stack cleanly; support tablet portrait/landscape and desktop without tiny controls or horizontal overflow. Provide an all-days text fallback.

IMAGES
Use only images whose commercial rights are documented in the project ledger, or source a licensed replacement and record source URL, creator, license and attribution. A local file does not prove rights. Do not generate documentary images of actual destinations or repeat one photograph indiscriminately. Alt text must describe what is visible.

IMPLEMENTATION
Follow existing Astro 5, TypeScript and Astro image pipeline conventions. Create typed package data, focused reusable components and stable package routes. Reuse existing layout/navigation/fonts/tokens and responsive patterns. Avoid unnecessary dependencies, heavy maps, APIs and unrelated redesign. Do not modify the completed homepage, destinations or experiences pages except for necessary shared integration.

WORK SEQUENCE
1. Inspect the repository and summarize relevant patterns and conflicts/gaps in this brief.
2. Recommend the 10–12 launch packages and explain their distinct audiences and operational risks.
3. Implement the hub, typed package data and dedicated pages for every selected package, with reusable components.
4. Apply consistent estimated-budget language and explicit inclusion/exclusion labels.
5. Check actual image rights, internal destination links, mobile/tablet/desktop layouts, keyboard/touch behavior, reduced motion and text fallback.
6. Report files and routes changed, packages held as draft, what was checked, and supplier facts Senvira must confirm before selling.

Deliver functional, usable pages matching the current Senvira website, not only a mockup or generic listing page. Visitor understanding and truthful information take priority over visual decoration.
```

### Sources and limits

Official/regulatory: [Sri Lanka Tourism Suggested Itineraries](https://srilanka.travel/suggested-itineraries), [Weather](https://www.srilanka.travel/weather), [Travel Tips](https://www.srilanka.travel/travel-tips), [SLTDA guide registration](https://sltda.gov.lk/en/register-with-us), [licensed guide notice](https://www.sltda.gov.lk/storage/common_media/SLTDA%20Licensed%20Guide%20Service.pdf), [whale and dolphin guideline](https://www.sltda.gov.lk/storage/common_media/GuidelineForWhaleandDolphinWatching.pdf), [wildlife tourism toolkit](https://www.sltda.gov.lk/storage/common_media/Nature_wildlife_Tourism_Toolkit.pdf), [Central Cultural Fund ticketing](https://www.eservices.ccf.gov.lk/eticketing/landing).

Commercial benchmarks: [Sri Lanka Journeys](https://srilankatour.travel/sri-lanka-tour-packages), [ZipCeylon](https://zipceylon.com/services/pricing/), [Trustker](https://www.trustker.com/sri-lanka-tour-packages/7-day-classic-sri-lanka-private-tour/), [RideLKA](https://ridelka.com/tours/7-day-sri-lanka-car-with-driver/), [One Sri Lanka](https://www.onesrilanka.lk/guides/sri-lanka-trip-cost), [Vacation Ceylon](https://vacationceylon.com/tours), [Responsible Travel 21-day trip](https://www.responsibletravel.com/holiday/3839/sri-lanka-21-day-tour), [Lankan 21-day adventure](https://lankan.lk/travel/itineraries/twenty-one-days-adventure).

Operator pages are commercial examples, not independent certification. Their rates differ by dates, room occupancy, hotels, vehicle, meals and inclusions. Official sources do not confirm Senvira prices, services or package availability. Check rates, regulations, schedules, fees, licenses, operating access and photo rights directly before launch.
