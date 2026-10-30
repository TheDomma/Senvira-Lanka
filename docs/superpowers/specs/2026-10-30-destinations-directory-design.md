# Destinations Directory Design

Date: 2026-10-30
Branch: `feature/destinations`
Status: Draft for user approval

## Intent

Create an island-wide Sri Lanka destination directory that helps travelers discover places without creating a separate page for each destination. It should feel like Senvira: calm, editorial, image-led, and aligned with deep teal, warm ivory, spice amber, and ink charcoal.

## Goals

- Add a dedicated `/destinations/` route, which the homepage already links to.
- Support an island-wide directory that can grow beyond the first 12–16 curated destinations.
- Let visitors browse destinations grouped by region, search/filter the list, and select a destination.
- Make the selected place clear on an interactive, decorative 3D map of Sri Lanka.
- Show a changing detail panel with a concise description, highlights/activities, and several destination photos.
- Keep the desktop layout map-led but usable: directory and map/detail information remain visible together.
- Adapt for mobile: list and map/detail become stacked or switchable surfaces; no tiny controls or horizontal overflow.
- Provide real destination photos from documented sources, with source/credit/license metadata; do not reuse homepage photos or use AI-generated photos for places.
- AI-generated imagery is permitted only for the map artwork/base treatment, and must not be mistaken for geographic or navigational accuracy.
- Link the homepage destination preview and “All destinations” links to the new route.

## Non-goals

- Individual destination detail routes.
- Booking, route planning, accounts, or a live mapping service.
- Claiming the illustrated map is a survey-accurate or turn-by-turn map.

## Proposed experience

1. Page opens with the directory grouped into meaningful Sri Lankan regions and a selected destination, with the map and detail panel visible.
2. Search and region filters narrow the directory without changing routes.
3. Selecting a list item updates the selected marker/region and detail panel in place; selection is reflected in the URL fragment so a destination can be linked directly.
4. Selecting a map marker selects the matching directory item and detail content.
5. Detail content stays short: region, one-line character, several verified highlights/activities, a small real-photo gallery, and a route back to the journey-planning CTA.
6. On narrow screens, the directory is primary; the map and detail are available as clearly labeled panels or a stacked detail sheet. The interaction remains keyboard-accessible and honors reduced-motion preferences.

## Map direction

Use a bespoke, stylized 3D/isometric island illustration, with selectable region shapes and destination markers. The map is an expressive navigation aid, not a geographic authority. Markers must be keyboard-operable controls with names, and map selection must remain available through the textual directory. Use restrained motion and the brand palette; avoid a generic Google-map look. Do not introduce a 3D engine dependency unless the design prototype proves CSS/SVG layering insufficient.

## Content and image sourcing

Start with 12–16 major traveler destinations, represented in data so the island-wide catalog can expand. The data model should separate destination identity, region, coordinates/marker position, summaries, highlights, activities, and image records. Each image record needs a source URL/photographer/credit/license note and alt text. Before selecting images, inventory current homepage assets and exclude all of them. Prefer rights-clear, locally stored originals from primary/authoritative tourism or open-license sources; retain a source-and-license ledger. Do not use AI-generated place photos. AI map artwork is allowed, but the map's location markers and outlines must be manually checked against real geography.

## Visual system and motion

- Brand palette: deep teal `#145B59`, warm ivory `#F6F1E7`, spice amber `#D99A45`, ink charcoal `#263238`.
- Destination rows/cards use subtle glass/shadow treatment and clear active state.
- Detail panel uses real photography, a strong title, short copy, and compact highlight chips/list.
- Selection transitions are brief and calm; map motion is limited to marker/region emphasis and a soft camera/pan response. Disable non-essential movement when reduced motion is requested.

## Approaches considered

1. **Directory + interactive map + updating detail panel (recommended and selected).** Balances island-wide discovery and visible context; map selection and text browsing stay synchronized.
2. Map-first marker browsing. Most immersive, but dense locations become difficult to target and browse.
3. Directory-first with a small static map. Easiest to implement and accessible, but does not deliver the requested interactive centerpiece.

## Constraints and open implementation choices

- Existing app is Astro 5 static output with no current `/destinations/` route; homepage destination content is a four-item data object in `src/data/homepage.ts`.
- Homepage already has `/destinations/` links; the route is the missing piece.
- The implementation must not alter unrelated homepage visuals or reuse homepage destination photos.
- Builder may choose a light SVG/CSS map implementation after a small technical spike, provided interactions, performance, and accessibility meet the requirements above.
- The initial destination roster and legally usable photo set should be confirmed from verified sources while building; if a rights-clear photo cannot be sourced for a place, do not substitute a generated image.

## Approval gate

This design is for review only. No destination-page implementation begins until the user approves this document.
