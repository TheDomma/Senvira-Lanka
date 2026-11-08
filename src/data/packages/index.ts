import { culturalTriangleFirstTaste } from './itineraries/cultural-triangle-first-taste';
import { colomboGalleSouthCoast } from './itineraries/colombo-galle-south-coast';
import { teaCountryScenicRail } from './itineraries/tea-country-scenic-rail';
import { northernHeritageJaffna } from './itineraries/northern-heritage-jaffna';
import { familyIslandSampler } from './itineraries/family-island-sampler';
import { activeHighlandsRainforest } from './itineraries/active-highlands-rainforest';
import { classicIslandJourney } from './itineraries/classic-island-journey';
import { wildlifeAndCoastResponsibly } from './itineraries/wildlife-and-coast-responsibly';
import { classicIslandUnhurried } from './itineraries/classic-island-unhurried';
import { northAndEastDiscovery } from './itineraries/north-and-east-discovery';
import { wildLandscapesSouthernCoast } from './itineraries/wild-landscapes-southern-coast';
import { northEastCulturalHeart } from './itineraries/north-east-cultural-heart';
import { plannedPackages } from './drafts';
import { getPackageImage } from './images';
import { resolveMapPoint, resolveStop, type MapPoint } from './dsl';
import { bands, getBand, getTheme, themes } from './shared';
import type {
  DurationBandId,
  ItineraryDay,
  PackageImage,
  PlannedPackage,
  ThemeId,
  TravelPackage,
} from './types';

export * from './types';
export * from './shared';
export * from './images';
export * from './dsl';
export { plannedPackages } from './drafts';

export const launchPackages: TravelPackage[] = [
  culturalTriangleFirstTaste,
  colomboGalleSouthCoast,
  teaCountryScenicRail,
  northernHeritageJaffna,
  familyIslandSampler,
  activeHighlandsRainforest,
  classicIslandJourney,
  wildlifeAndCoastResponsibly,
  classicIslandUnhurried,
  northAndEastDiscovery,
  wildLandscapesSouthernCoast,
  northEastCulturalHeart,
];

/**
 * Build-time validation: verifies unique slugs, brief numbers, contiguous day coverage,
 * cleared image IDs, destination/experience links, and map coordinates.
 */
function validatePackages(packages: TravelPackage[], drafts: PlannedPackage[]): void {
  const seenSlugs = new Set<string>();
  const seenBriefNos = new Set<number>();

  for (const pkg of packages) {
    if (seenSlugs.has(pkg.slug)) {
      throw new Error(`[packages] Duplicate package slug "${pkg.slug}".`);
    }
    seenSlugs.add(pkg.slug);

    if (seenBriefNos.has(pkg.briefNo)) {
      throw new Error(`[packages] Duplicate briefNo "${pkg.briefNo}" on "${pkg.slug}".`);
    }
    seenBriefNos.add(pkg.briefNo);

    if (pkg.nights !== pkg.days - 1) {
      throw new Error(`[packages] Package "${pkg.slug}" has days=${pkg.days} but nights=${pkg.nights}.`);
    }

    getBand(pkg.band);
    getTheme(pkg.primaryTheme);
    for (const t of pkg.themes) {
      getTheme(t);
    }

    // Validate hero & card images
    const heroImg = getPackageImage(pkg.heroImage.id);
    const cardImg = getPackageImage(pkg.cardImage);
    if (heroImg.id === 'wilpattu-leopard' || cardImg.id === 'wilpattu-leopard') {
      throw new Error(`[packages] Package "${pkg.slug}" uses restricted image "wilpattu-leopard".`);
    }

    // Validate contiguous day coverage from 1..pkg.days
    let expectedDay = 1;
    for (const block of pkg.itinerary) {
      const [start, end] = block.days;
      if (start !== expectedDay || end < start) {
        throw new Error(
          `[packages] Package "${pkg.slug}" has non-contiguous itinerary days [${start}, ${end}] (expected start ${expectedDay}).`,
        );
      }
      expectedDay = end + 1;

      if (block.image) {
        const dayImg = getPackageImage(block.image.id);
        if (dayImg.id === 'wilpattu-leopard') {
          throw new Error(`[packages] Package "${pkg.slug}" day ${start} uses restricted image "wilpattu-leopard".`);
        }
      }

      if (block.stops) {
        for (const stop of block.stops) {
          resolveStop(stop);
        }
      }

      if (block.mapStop) {
        resolveMapPoint(block.mapStop);
      }
    }

    if (expectedDay - 1 !== pkg.days) {
      throw new Error(
        `[packages] Package "${pkg.slug}" itinerary ends on day ${expectedDay - 1}, expected ${pkg.days}.`,
      );
    }
  }

  for (const draft of drafts) {
    if (seenSlugs.has(draft.slug)) {
      throw new Error(`[packages] Duplicate draft slug "${draft.slug}".`);
    }
    seenSlugs.add(draft.slug);

    if (seenBriefNos.has(draft.briefNo)) {
      throw new Error(`[packages] Duplicate briefNo "${draft.briefNo}" on draft "${draft.slug}".`);
    }
    seenBriefNos.add(draft.briefNo);

    getBand(draft.band);
    for (const t of draft.themes) {
      getTheme(t);
    }
  }
}

validatePackages(launchPackages, plannedPackages);

export function getPackageBySlug(slug: string): TravelPackage | undefined {
  return launchPackages.find((pkg) => pkg.slug === slug);
}

export function getPackagesByBand(bandId: DurationBandId): TravelPackage[] {
  return launchPackages.filter((pkg) => pkg.band === bandId);
}

export function getPackagesByTheme(themeId: ThemeId): TravelPackage[] {
  return launchPackages.filter((pkg) => pkg.themes.includes(themeId));
}

export function formatDayLabel(days: [number, number]): string {
  const [start, end] = days;
  return start === end ? `Day ${start}` : `Days ${start}–${end}`;
}

export function formatDayShort(days: [number, number]): string {
  const [start, end] = days;
  return start === end ? `D${start}` : `D${start}–${end}`;
}

/** Collects all unique cleared images used on a package detail page for the photo-credits ledger block. */
export function getPackageUsedImages(pkg: TravelPackage): PackageImage[] {
  const ids = new Set<string>([pkg.heroImage.id, pkg.cardImage]);
  for (const block of pkg.itinerary) {
    if (block.image) {
      ids.add(block.image.id);
    }
  }
  return Array.from(ids).map((id) => getPackageImage(id));
}

export interface RouteStopPoint extends MapPoint {
  stepNumber: number;
  dayIndices: number[];
  dayLabels: string[];
}

/** Builds an ordered list of unique route stops for the supplementary SVG route sketch. */
export function getPackageMapRoute(pkg: TravelPackage): RouteStopPoint[] {
  const points: RouteStopPoint[] = [];
  const byId = new Map<string, RouteStopPoint>();

  pkg.itinerary.forEach((block: ItineraryDay, idx: number) => {
    if (!block.mapStop) return;
    const label = formatDayLabel(block.days);
    const existing = byId.get(block.mapStop);
    if (existing) {
      existing.dayIndices.push(idx);
      existing.dayLabels.push(label);
    } else {
      const mp = resolveMapPoint(block.mapStop);
      const item: RouteStopPoint = {
        ...mp,
        stepNumber: points.length + 1,
        dayIndices: [idx],
        dayLabels: [label],
      };
      points.push(item);
      byId.set(block.mapStop, item);
    }
  });

  return points;
}

export { bands, themes };
