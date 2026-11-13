# Senvira Lanka — Thoughtful Sri Lankan Journeys

[![Built with Astro](https://img.shields.io/badge/Astro-5.x-BC52EE.svg?style=flat&logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7+-3178C6.svg?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Styling](https://img.shields.io/badge/Styles-Design_Tokens_&_Modern_CSS-145B59.svg)](#design-system--styling)

> **Senvira Lanka** is an editorial travel discovery and curated journey planning platform for Sri Lanka. Designed with a boutique, calm aesthetic, it presents the island’s layered heritage, highland landscapes, wildlife reserves, living culture, and coastal shores.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Design System & Styling](#design-system--styling)
- [Tech Stack](#tech-stack)
- [Project Architecture](#project-architecture)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Image Sourcing Pipeline](#image-sourcing-pipeline)
- [Content & Data Architecture](#content--data-architecture)
- [Documentation & References](#documentation--references)
- [Contact & Socials](#contact--socials)

---

## Overview

Senvira Lanka moves away from generic, fast-paced tourism templates to deliver an editorial, human-centered travel exploration experience. The platform combines deep editorial storytelling with interactive exploration tools, helping travelers discover Sri Lanka at their own pace.

- **Brand Essence:** Calm, assured, warm, and deeply rooted in Sri Lankan character.
- **Editorial Voice:** Knowledgeable guidance grounded in real places, history, and authentic experiences without marketing hype or tourism clichés.
- **Visual Feel:** Refined typography, warm ivory surfaces, deep forest teal tones, subtle amber accents, and curated authentic photography.

---

## Key Features

- **Interactive Destination Catalogue & Map**
  - Searchable and categorized directory of Sri Lankan destinations, landmarks, national parks, and coastal hideaways.
  - Interactive SVG map (`SriLankaMap.astro`) with geographic coordinate plotting (`destinationCoordinates.ts`).
  - Destination drawer and detail views (`DestinationDetail.astro`) providing regional context, best times to visit, and highlights.

- **Thematic Experiences Guide**
  - Deep-dive thematic collections: Heritage & Ancient Cities, Highland & Tea Country, Wildlife & Conservation, Coastal Living & Surfing, Wellness & Ayurveda, and Culinary Traditions.
  - Dynamic route-based experience pages (`/experiences/[theme]/[id]`).

- **Curated Multi-Day Travel Packages**
  - Rich itinerary blueprints (`/packages/[slug]`) detailing daily schedules, pacing, route sketches, and highlights.
  - Direct inquiry capture with `PackageEnquiryForm.astro`.

- **Automated Image Ingestion & Sync Pipeline**
  - Dedicated asset pipeline (`scripts/sync-destination-images.mjs`) to process, optimize, match, and register destination imagery directly into the TypeScript data layer.

---

## Design System & Styling

The visual identity is codified through semantic tokens in `src/styles/tokens.css`:

| Element | Specification / Token | Hex / Value |
|---|---|---|
| **Primary Brand** | `--color-teal` | `#145B59` |
| **Warm Canvas** | `--color-ivory` | `#F6F1E7` |
| **Accent & Markers** | `--color-amber` | `#D99A45` |
| **Headings & Body** | `--color-charcoal` | `#263238` |
| **Serif Display** | `--font-serif` | *Cormorant Garamond* |
| **Interface Sans** | `--font-sans` | *Plus Jakarta Sans* |

- **Glassmorphism & Surface Tokens:** Subtle backdrop filters, elevated cards (`--shadow-card`), and responsive fluid typography scales using `clamp()`.

---

## Tech Stack

- **Framework:** [Astro 5](https://astro.build/) (Static Site Generation / Content-first performance)
- **Language:** [TypeScript](https://www.typescriptlang.org/) (Strict type safety across catalog data, navigation, and packages)
- **Image Processing:** [Sharp](https://sharp.pixelplumbing.com/) & Astro Assets pipeline
- **Type Checking:** `@astrojs/check`
- **Styling:** Native CSS Custom Properties (CSS variables) with modern fluid layouts (zero heavy CSS runtime)

---

## Project Architecture

```plaintext
Senvira-Lanka/
├── docs/                                # Brand guides, briefs & checklists
│   ├── senvira-brand-and-website-brief.md
│   ├── destination-image-sourcing-checklist.md
│   ├── Senvira-Lanka-Experiences-Discovery-Brief.md
│   └── Senvira-Lanka-Packages-Research-Brief.md
├── public/                              # Static public assets & brand icons
│   └── brand/                           # Emblems, wordmarks, and logos
├── scripts/                             # Automation & tooling
│   └── sync-destination-images.mjs     # Image ingestion and catalog sync script
├── src/
│   ├── assets/                          # Bundled images & assets processed by Astro
│   ├── components/
│   │   ├── destinations/                # Destination directory, detail, & SVG map
│   │   ├── experiences/                 # Theme cards and experience components
│   │   ├── packages/                    # Package cards, itineraries, and inquiry form
│   │   ├── Footer.astro                 # Global editorial footer
│   │   ├── Header.astro                 # Responsive navigation header
│   │   └── Hero.astro                   # Homepage hero section
│   ├── config/
│   │   └── site.ts                      # Global site configuration, navigation & contact info
│   ├── data/
│   │   ├── destinations.ts              # Core destination records
│   │   ├── destinationCatalogue.ts      # Extended destination catalog
│   │   ├── destinationCoordinates.ts    # Map coordinates (lat/long)
│   │   ├── experiences.ts               # Experience stories & theme metadata
│   │   ├── homepage.ts                  # Curated homepage content collections
│   │   └── packages/                    # Multi-day itineraries and package schema
│   ├── layouts/
│   │   └── BaseLayout.astro             # Global HTML layout shell & SEO meta
│   ├── pages/                           # File-based routing
│   │   ├── index.astro                  # Homepage
│   │   ├── destinations.astro           # Destination directory & interactive map
│   │   ├── experiences.astro            # Experiences overview
│   │   ├── experiences/                 # Dynamic theme & detail routes
│   │   └── packages/                    # Packages catalog & itinerary detail pages
│   └── styles/
│       ├── tokens.css                   # Brand design tokens (colors, typography, spacing)
│       └── global.css                   # Global reset and baseline typography
├── astro.config.mjs                     # Astro project configuration
├── package.json                         # Dependencies and npm scripts
└── tsconfig.json                        # TypeScript configuration
```

---

## Getting Started

### Prerequisites

- **Node.js**: `v18.17.0` or `v20.0.0` and above
- **Package Manager**: `npm` (or `pnpm` / `yarn`)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/senvira-lanka.git
   cd senvira-lanka
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:4321`.

---

## Available Scripts

| Command | Action |
|---|---|
| `npm run dev` | Starts the Astro development server at `http://localhost:4321` |
| `npm run build` | Runs Astro type check (`astro check`) and compiles the static production build into `dist/` |
| `npm run preview` | Starts a local server to preview the production build output |
| `npm run sync:images` | Synchronizes, verifies, and updates destination images against the catalog |
| `npm run watch:images` | Runs the destination image sync script in continuous watch mode |

---

## Image Sourcing Pipeline

High-quality, authentic photography is vital to Senvira Lanka’s visual storytelling. The project includes an automated image sync tool:

```bash
# Sync and register new images located in src/assets/images/destinations
npm run sync:images
```

The script:
1. Scans images against `docs/destination-image-sourcing-checklist.md`.
2. Matches files to entries in `src/data/destinationCatalogue.ts`.
3. Auto-generates type-safe asset import mappings in `src/data/catalogueCardImages.ts`.

---

## Content & Data Architecture

All content is managed through structured, type-safe TypeScript models under `src/data/`:

- **Destinations (`destinationCatalogue.ts` & `destinationCoordinates.ts`):** Complete inventory of cities, parks, landmarks, coordinates, and regional groupings.
- **Experiences (`experiences.ts`):** Organized into distinct thematic categories with narrative descriptions, practical tips, and travel considerations.
- **Packages (`src/data/packages/`):** Full multi-day journey definitions, day-by-day itineraries, lodging types, highlights, and travel style recommendations.

---

## Documentation & References

Internal planning documents and design references are located in the `docs/` directory:

- [Brand, Website & Visual Direction](docs/senvira-brand-and-website-brief.md)
- [Destination Image Sourcing Checklist](docs/destination-image-sourcing-checklist.md)
- [Experiences Discovery Brief](docs/Senvira-Lanka-Experiences-Discovery-Brief.md)
- [Packages Research Brief](docs/Senvira-Lanka-Packages-Research-Brief.md)

---

## Contact & Socials

- **Brand:** Senvira Lanka
- **Email:** [senviralanka@gmail.com](mailto:senviralanka@gmail.com)
- **Instagram:** [@senviralanka](https://www.instagram.com/senviralanka/)
- **Facebook:** [Senvira Lanka](https://www.facebook.com/profile.php?id=61595934223008)
