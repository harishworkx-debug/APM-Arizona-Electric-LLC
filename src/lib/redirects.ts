import { SERVICES, LOCATIONS } from "./business";

/**
 * Maps legacy URLs and duplicate-intent URLs to their canonical, authoritative paths.
 * All destination URLs include a trailing slash to match sitemap and canonical tags.
 */
const STATIC_REDIRECTS: Record<string, string> = {
  // Legacy Service Slugs with -phoenix-az
  "/light-fixture-installation-phoenix-az": "/services/light-fixture-installation/",
  "/ceiling-fan-installation-phoenix-az": "/services/ceiling-fan-installation/",
  "/circuit-breaker-repair-phoenix-az": "/services/circuit-breaker-repair/",
  "/residential-electrical-services-phoenix-az": "/services/residential-electrical-services/",
  "/kitchen-electrical-repairs-phoenix-az": "/services/kitchen-electrical-repairs/",
  "/electrical-maintenance-phoenix-az": "/services/electrical-maintenance/",
  "/electrical-troubleshooting-phoenix-az": "/services/electrical-troubleshooting/",
  "/commercial-electrical-services-phoenix-az": "/services/",

  // Legacy Location Slugs with electrician- prefix
  "/electrician-phoenix-az": "/locations/phoenix-az/",
  "/electrician-mesa-az": "/locations/mesa-az/",
  "/electrician-scottsdale-az": "/locations/scottsdale-az/",
  "/electrician-tempe-az": "/locations/tempe-az/",
  "/electrician-chandler-az": "/locations/chandler-az/",
  "/electrician-glendale-az": "/locations/glendale-az/",
};

// Add dynamically generated flat root URLs for services & locations
const serviceSlugSet = new Set(SERVICES.map((s) => s.slug));
const locationSlugSet = new Set(LOCATIONS.map((l) => l.slug));

export function getRedirectDestination(rawPathname: string): string | null {
  // Normalize by stripping any trailing slash for matching
  const cleanPath = rawPathname.replace(/\/+$/, "") || "/";

  // 1. Direct match in static redirects table
  if (STATIC_REDIRECTS[cleanPath]) {
    return STATIC_REDIRECTS[cleanPath];
  }

  // 2. Flat service URL at root, e.g. /light-fixture-installation -> /services/light-fixture-installation/
  const singleSlug = cleanPath.startsWith("/") ? cleanPath.slice(1) : cleanPath;
  if (serviceSlugSet.has(singleSlug)) {
    return `/services/${singleSlug}/`;
  }

  // 3. Flat location URL at root, e.g. /phoenix-az -> /locations/phoenix-az/
  if (locationSlugSet.has(singleSlug)) {
    return `/locations/${singleSlug}/`;
  }

  // 4. Missing trailing slash on canonical routes (to prevent duplicate URL indexing)
  if (cleanPath.startsWith("/services/") && !rawPathname.endsWith("/")) {
    const slug = cleanPath.replace("/services/", "");
    if (serviceSlugSet.has(slug)) {
      return `/services/${slug}/`;
    }
  }

  if (cleanPath.startsWith("/locations/") && !rawPathname.endsWith("/")) {
    const slug = cleanPath.replace("/locations/", "");
    if (locationSlugSet.has(slug)) {
      return `/locations/${slug}/`;
    }
  }

  return null;
}
