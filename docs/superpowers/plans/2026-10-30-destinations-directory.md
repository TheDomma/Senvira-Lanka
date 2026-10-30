# Island-Wide Destinations Directory Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build an expandable Sri Lanka destination directory at `/destinations/` with a synchronized interactive 3D island map and real, source-documented destination photography.

**Architecture:** Keep destination records in a focused typed data module, render the page from small Astro components, and use a lightweight SVG/CSS map with client-side selection state rather than introducing a mapping or 3D engine dependency. The textual directory remains the accessible source of truth and synchronizes with the map markers and detail panel.

**Tech Stack:** Astro 5 static routes, TypeScript data, SVG/CSS, browser-native client script, Astro image pipeline.

**Spec:** `docs/superpowers/specs/2026-10-30-destinations-directory-design.md`

## Global Constraints

- Use the brand palette: deep teal `#145B59`, warm ivory `#F6F1E7`, spice amber `#D99A45`, ink charcoal `#263238`.
- No individual destination detail routes.
- Do not reuse homepage destination photos.
- Destination photos must be real and have source/photographer/credit/license metadata; never substitute AI-generated destination photos.
- AI-generated artwork is allowed only for decorative map artwork; geographic outlines and marker placements must be checked against real geography.
- Keep the map illustrative rather than claiming survey or routing accuracy.
- Keep a text-based directory and keyboard-operable markers so the map is not the only browsing method.
- Honor reduced-motion preferences and prevent mobile overflow.
- Do not add a 3D/map dependency unless a separate prototype demonstrates SVG/CSS is insufficient.

## Review Focus

- Unknown or missing destination IDs in URL fragments: selecting a valid default must keep the page usable; cover in Task 4.
- Empty search or no region match: show an explicit empty state and a clear reset; cover in Task 3.
- Destination with an unverified/unavailable image source: omit that photo rather than show a broken or generated replacement; cover in Task 2.
- Keyboard selection and map-marker names: every map marker must be reachable and announce its place; cover in Task 5.
- Reduced-motion preference: map and panel updates must remain understandable without animation; cover in Task 5.

---

### Task 1: Establish the destination catalog and sourced imagery

**Files:**
- Create: `src/data/destinations.ts`
- Create: `src/assets/images/destination-sources.md`
- Modify: `src/data/homepage.ts` only to share compatible existing types if needed; do not change homepage image assignments.

**Interfaces:**
- Produces `Destination` records with `id`, `name`, `regionId`, `coordinates` (normalized map coordinates), `summary`, `highlights`, `activities`, and `images`.
- Each `DestinationImage` includes imported local image metadata, useful alt text, source URL, photographer/credit, and license/permission note.
- Begin with 12–16 destinations across Sri Lanka’s regions; structure records so more destinations can be added without component changes.

- [ ] Inventory homepage image imports and exclude all of them from destination records.
- [ ] Source real, rights-clear destination photos; record source and usage details in `destination-sources.md` and retain original credits.
- [ ] Add 12–16 initial destination records with verified region/coordinates and concise content.
- [ ] Check each record has a unique ID, known region, valid normalized coordinates, non-empty alt text, and source metadata; use `npm run build` to confirm imported assets resolve.

### Task 2: Create the lightweight island map

**Files:**
- Create: `src/components/destinations/SriLankaMap.astro`
- Create: `src/components/destinations/sri-lanka-map.svg` (or an inline SVG in the component if sharing is unnecessary)

**Interfaces:**
- Props: `destinations: Destination[]`, `regions: DestinationRegion[]`, `selectedId: string`.
- Emits/dispatches a `destination-select` event carrying `{ id: string }` when a marker is activated.

- [ ] Add the stylized island silhouette with separate region emphasis shapes and normalized marker placement.
- [ ] Render each destination as a labeled keyboard-operable button marker with active/hover states.
- [ ] Keep decorative terrain/map artwork separate from geographic marker geometry; if AI map art is used, add it as decorative texture only and retain accurate hand-checked outline/markers.
- [ ] Verify map buttons expose destination names and scale legibly at desktop and mobile widths.

### Task 3: Build directory controls and destination detail panel

**Files:**
- Create: `src/components/destinations/DestinationDirectory.astro`
- Create: `src/components/destinations/DestinationDetail.astro`

**Interfaces:**
- `DestinationDirectory` props: `destinations`, `regions`, `selectedId`.
- `DestinationDetail` props: `destination: Destination`.
- Directory selection and map selection use the same `destination-select` event contract.

- [ ] Render region grouping, text search, and region filters with clear selected states.
- [ ] Add a no-results state and reset control for search/filter combinations that return no destination.
- [ ] Render selected destination summary, verified highlights/activities, and a compact real-photo gallery with meaningful alt text and explicit dimensions.
- [ ] Add a journey-planning CTA that points to the existing `/journeys/` route.
- [ ] Use the approved palette and restrained glass/shadow treatment; avoid dense copy.

### Task 4: Assemble route and synchronize state

**Files:**
- Create: `src/pages/destinations.astro`
- Modify: `src/components/index.astro` only if the existing homepage destination preview needs its “All destinations” link corrected to `/destinations/`.

**Interfaces:**
- Page owns selected destination, query, and selected region state.
- A valid `#<destination-id>` fragment selects a destination; missing/unknown fragments fall back to the first catalog entry.
- List or map selection updates the detail panel, selected list state, map highlight, and URL fragment without full-page navigation.

- [ ] Compose the directory, map, and detail panel with the page title, intro, and responsive layout.
- [ ] Initialize selection from a valid URL fragment or the first catalog entry.
- [ ] Synchronize list and marker selection, and update the URL fragment with `history.replaceState`.
- [ ] Confirm homepage links land on the new route and no individual destination routes are introduced.

### Task 5: Responsive, accessibility, motion, and final verification

**Files:**
- Modify: `src/components/destinations/*.astro`
- Modify: `src/pages/destinations.astro`

- [ ] At phone widths, stack or switch the directory/map/detail into clearly labeled surfaces; prevent page-level horizontal overflow.
- [ ] Support keyboard search, filters, directory selection, map markers, and a visible focus state.
- [ ] Announce selected destination changes accessibly without forcing focus unexpectedly.
- [ ] Disable non-essential map/panel transitions under `prefers-reduced-motion`.
- [ ] Check unavailable images degrade to text/remaining images without broken-image UI.
- [ ] Run `npm run build` and manually inspect desktop, tablet, and phone layouts and interactions in the local preview.

### Task 6: Review the finished branch

- [ ] Review the diff against the approved design, with attention to sourced-photo credits, homepage-image exclusion, map accuracy labeling, and accessibility.
- [ ] Report changed files and verification results; do not commit or merge without the user’s instruction.
