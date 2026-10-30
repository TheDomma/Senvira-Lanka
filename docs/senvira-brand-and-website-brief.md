# Senvira Lanka — Brand, Website & Visual Direction

> Handoff brief for continuing the Senvira Lanka website in Antigravity, Google Gemini, or another design/build tool.
>
> **How to use this brief:** The palette and destinations experience below are recorded decisions from earlier project work. Other details are guidance where the original work did not set an exact rule. Check the current code and assets before changing implementation.

## 1. Project overview

**Brand:** Senvira Lanka  
**Website:** Sri Lanka travel discovery and journey planning  
**Platform recorded in the project:** Astro 5, static pages, TypeScript data, Astro image pipeline  
**Visual references:**

- [Reise Ceylon](https://www.reiseceylon.com/) — reference for polished, professional, aesthetic travel presentation and visual storytelling.
- [Feel Sri Lanka](https://feelsrilanka-frontend.vercel.app/) — an earlier dummy/prototype website created for this project. Use it as project history and a reference for ideas or existing direction, while recognizing it is not the finished Senvira design.
- [Feel Sri Lanka source on GitHub](https://github.com/yeharakobbagala-lgtm/feelsrilanka_frontend) — source repository for that earlier dummy.

Use these references for inspiration and continuity; do not copy another brand’s identity. Reise Ceylon is the aesthetic reference, while Feel Sri Lanka is the project’s earlier prototype.

The first homepage was created with Google Gemini. The user liked its clean presentation and fonts, but felt it was too generic, showed too much at once, and did not work well with the available images. The redesign should keep the clean typographic foundation while bringing stronger art direction, more interesting pacing, and imagery that feels intentionally chosen and composed.

## 2. Brand identity

### Brand idea

Help visitors feel the character of Sri Lanka and imagine a journey shaped around them. Present the island as layered and varied: ancient places, highland landscapes, wildlife, living culture, and coast. The website should feel like a thoughtful local travel editor or boutique journey specialist.

### Brand qualities

- **Calm and assured:** clear hierarchy, purposeful whitespace, restrained motion.
- **Editorial:** strong photography, thoughtful crops, concise writing, intentional page rhythm.
- **Warm and human:** welcoming language and a genuine sense of place.
- **Rooted in Sri Lanka:** show real places, landscapes, architecture, and culture with care.
- **Premium through craft and restraint:** quality comes from details, not ornament or luxury clichés.
- **Exploratory:** invite discovery without overwhelming visitors with options.

### Voice and writing

Write like a knowledgeable, warm guide. Use plain, evocative language grounded in place. Keep headlines memorable and concise; use supporting copy for useful context. Avoid generic superlatives, tourism clichés, hard-sell urgency, and unsupported claims. Do not promise every trip is bespoke unless the service supports that.

A confirmed homepage line in existing content is **“Sri Lanka · journeys shaped around you”**. The headline begins **“Find your rhythm…”**; check the current source for the full approved wording before reusing it.

## 3. Color palette

The project’s approved design documents specify these four core colors:

| Color | Hex | Main use |
|---|---|---|
| Deep teal | `#145B59` | Primary brand color, links, primary buttons, selected states, map highlights |
| Warm ivory | `#F6F1E7` | Main warm background and light section surfaces |
| Spice amber | `#D99A45` | Small accents, labels, map markers, moments of emphasis |
| Ink charcoal | `#263238` | Headings, body text, dark surfaces, high-contrast details |

Use teal as the principal brand signal and ivory to keep the page warm and soft. Amber is an accent, not a dominant surface color. White can support cards or image contrast, but the overall canvas should not feel stark.

### Color application

- Use warm ivory for the main page background; separate sections with white or subtle warm neutrals.
- Set headings and body copy in ink charcoal for readability.
- Use deep teal for important actions, links, navigation accents, and selected interface states.
- Use amber sparingly for tags, markers, and small visual emphasis.
- Ensure text over images has reliable contrast at desktop and mobile crops.
- Avoid neon colors, saturated rainbow palettes, large gradients, and heavy shadows that compete with photography.

Optional supporting neutrals, if needed, should be muted and warm. Suggested starting points (not confirmed tokens): sand `#E8DFD0`, pale stone `#E9E6DE`, muted gray-green `#71817A`. Check contrast and real assets before adopting them.

## 4. Typography

The user liked the original homepage fonts. Keep the current font choices if they remain available and improve hierarchy, spacing, and scale before replacing them. Confirm exact font family names and licensing in the current project before handing off changes.

Use at most two font families: an editorial display face for large headlines if it fits the existing brand, and a highly legible body sans serif. Use moderate weights, comfortable line lengths, readable mobile sizes, and avoid overly tight tracking.

## 5. Photography and image direction

Photography is central to the redesign. Build a coherent travel story rather than a collection of unrelated stock images.

### Image character

- Use real, location-authentic photography for destinations and experiences.
- Favor natural light, believable color, atmosphere, and a clear subject.
- Show variety across Sri Lanka: heritage, hill country and tea, wildlife, rail journeys, and coast. Avoid making the whole site feel like only beaches or only temples.
- Keep editing consistent: warm, natural, slightly cinematic. Avoid oversaturation, extreme HDR, artificial teal-orange grading, and heavy filters.
- Prefer clean compositions and negative space when text needs to sit over an image.
- Choose crop and aspect ratio for each component. Never stretch an image or force one asset into every card shape.

### Integrity and accessibility

- The destinations design requires real destination photos with documented source, photographer/credit, and license metadata.
- Do not use AI-generated imagery as documentary photography of actual places. The destination plan permits generated artwork only for decorative map artwork; geographic outlines and marker positions must still be checked against real geography.
- Do not reuse homepage destination photos in the new destinations directory; this constraint appears in the implementation plan.
- If a properly licensed destination photo is unavailable, use a neutral designed fallback or omit it rather than inventing a scene.
- Provide meaningful alt text describing the visible image, not keyword lists or promotional copy.
- Track source, credit, and license alongside image data for future maintenance.
- Use responsive image sizes and optimized formats, preserve intrinsic dimensions, and prevent layout shift.

### Composition by use

- **Hero:** a confident, atmospheric landscape with a clear focal point and a responsive text-safe region.
- **Destination cards:** consistent ratios and deliberate crops; keep the place recognizable at small sizes.
- **Editorial details:** use people, food, craft, rail, or architecture to break up panoramas.
- **Galleries:** vary viewpoint and scale while keeping a consistent color treatment and truthful captions.

## 6. Homepage redesign intent

The homepage was already clean. The problem was that it felt generic, too full, and disconnected from the available imagery. Make it more distinctive through stronger art direction, better pacing, and more selective content.

1. Establish the brand promise immediately with a strong hero and clear primary action.
2. Let a small number of excellent images carry the story; keep overlay copy brief.
3. Alternate spacious editorial sections with compact practical information.
4. Curate a few destinations and experiences on the homepage; send visitors to the full directory for breadth.
5. Make navigation and calls to action clear without repeating the same CTA in every section.
6. Fit card layouts to the actual image library and keep the crops intentional.
7. Design image crops and section density deliberately across phone, tablet/iPad, and laptop/desktop layouts.

### Device compatibility

The entire site must be responsive and usable on phones, laptops, tablets, and iPads in both portrait and landscape orientations. Adapt navigation, grids, map/directory layout, typography, image focal points, controls, and spacing at appropriate breakpoints. Avoid horizontal overflow, tiny touch targets, clipped content, and layouts that only work at one desktop width. Check real narrow-phone widths, common tablet/iPad widths, and laptop/desktop widths during implementation.

### Homepage content and imagery recorded earlier

The homepage data module includes hero content and destination/experience highlights. Assets referenced in the earlier project inspection include Sigiriya, Anuradhapura, Kandy, Ella, elephants, an entrance/hero image, Nine Arch Bridge, the south coast/Tangalle, Mirissa, Yala, Nuwara Eliya, Galle, and Bentota.

The homepage links to `/destinations/` entries for Sigiriya, Kandy, Ella, Nuwara Eliya, Yala National Park, Galle Fort, Mirissa, and Bentota, plus an “All destinations” link. Verify the current working tree and asset availability before changing this content.

## 7. Destinations directory: designed experience

A dedicated island-wide directory was designed for `/destinations/`. It helps visitors discover places without creating a separate detail route for every destination.

### Experience requirements recorded in the design

- A searchable directory grouped into meaningful Sri Lankan regions.
- An interactive, illustrative map of Sri Lanka that highlights the selected destination.
- A detail panel that updates with the selected place, with a concise description, verified highlights or activities, and a small gallery of real photos.
- On desktop, keep the directory and map/detail information useful together.
- On phones, stack or switch between list and map/detail surfaces without tiny controls or horizontal overflow.
- On tablets/iPads, use the available width thoughtfully; do not simply stretch the phone layout or compress the desktop layout. Ensure touch controls work in portrait and landscape.
- On laptops and desktop screens, keep the directory and map/detail information useful together without excessive empty space.
- Treat the map as a discovery aid, not a survey-accurate or turn-by-turn map.
- Keep the text directory as the accessible source of truth. Make map markers keyboard-operable and synchronize selection among list, map, and detail panel.
- Allow the catalog to grow beyond an initial curated set of roughly 12–16 places.
- Provide clear search/filter selected states, an empty-results state, and a reset action.
- Respect reduced-motion preferences.

### Technical direction recorded in the plan

The recorded plan uses Astro 5 static routes, typed destination data, focused Astro components, SVG/CSS, and browser-native client-side selection. Avoid a map or 3D dependency unless a separate prototype proves it is needed.

The directory scope excludes individual destination routes, booking, accounts, live maps, and route planning. Keep descriptions concise and factual; avoid dense copy.

## 8. Shared interface guidance

- Use generous but purposeful whitespace and clear section boundaries.
- Align headings, cards, and controls to a consistent grid and content width.
- Use rounded corners and shadows sparingly; avoid excessive glass effects.
- Make primary buttons clear and tactile in deep teal. Use text links or quiet outlines for secondary actions.
- Design hover, focus, active, selected, disabled, and empty states deliberately.
- Use motion only when it helps communicate a transition or hierarchy. Honor `prefers-reduced-motion`.
- Keep image overlays legible at every crop and breakpoint.
- Use semantic headings and controls, visible keyboard focus, and accessible labels.

## 9. Suggested site flow

1. **Home:** brand promise, immersive hero, curated starting points, distinctive experiences, context/trust, and a clear invitation to plan or explore.
2. **Destinations:** searchable island-wide directory with regional context, map selection, details, and sourced imagery.
3. **Journeys/planning:** explain how planning works and what visitors should do next.
4. **About/trust:** introduce the people or expertise behind Senvira using only claims the business can support.
5. **Contact/inquiry:** provide a simple, welcoming way to get in touch.

The earlier work references `/destinations/` and `/journeys/`. Check which routes currently exist before creating new ones.

## 10. Project continuity notes

- The project was recorded as an Astro 5 website with a homepage data module and Astro-processed imagery.
- The known feature branch was `feature/destinations`.
- Earlier work created a destinations design document and implementation plan under `docs/superpowers/specs/` and `docs/superpowers/plans/`.
- Uncommitted changes and unsaved files were a concern in the original conversation. Inspect Git status and preserve existing user work.
- Do not commit, merge, or discard changes unless the owner asks.
- Use the approved destination spec and plan as the source of truth for that feature.

## 11. Details to verify before locking them in

The available project history did not establish these as final brand rules:

- Exact font family names and font licenses.
- Final homepage section order, copy, and CTA labels.
- Logo artwork, clear space, or secondary lockups.
- Supporting neutral colors beyond the four confirmed palette colors.
- Final photo selection, photographer credits, licenses, and asset availability.
- Current route inventory and inquiry form behavior.
- Full wording of the “Find your rhythm…” headline.

Inspect the current repository and assets first; document meaningful assumptions when a decision must be made.

## 12. Builder checklist

- Read the homepage, global styles, shared layout/header/footer, homepage data, destination design spec, and implementation plan.
- Check the active branch and Git status; preserve user changes.
- Keep the approved palette and calm, editorial, image-led direction consistent across pages.
- Fit components to real image assets and make crops intentional.
- Keep destination photography real, credited, and license-aware. Keep generated visuals out of documentary place photography.
- Keep the homepage curated and the directory useful as its catalog grows.
- Check responsive behavior, accessibility, image crops, text contrast, and reduced-motion behavior.
- Check layouts and interactions on phones, laptops, tablets, and iPads in portrait and landscape where relevant.
- Make reversible choices when details are open and record meaningful assumptions.

---

## Short creative brief

Create a calm, editorial Sri Lanka travel brand with the polish of a boutique travel journal. Use Reise Ceylon as an aesthetic reference and Feel Sri Lanka as the project’s earlier dummy/prototype. Let authentic photography and strong pacing make the site memorable. Use deep teal `#145B59`, warm ivory `#F6F1E7`, spice amber `#D99A45`, and ink charcoal `#263238` with restraint. Keep the homepage curated, the writing warm and grounded, and the island-wide destination explorer accessible, map-led, and clear that its geography is illustrative. Make every page work well on phones, laptops, tablets, and iPads.
