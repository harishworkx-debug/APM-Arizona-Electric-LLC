import { SERVICES, LOCATIONS } from "./business";

/**
 * Maps legacy URLs, mistyped URLs, and duplicate-intent URLs to their canonical paths.
 * All destination URLs include a trailing slash to match sitemap and canonical tags.
 */
const STATIC_REDIRECTS: Record<string, string> = {
  // Residential Electrical Services -> Canonical Phoenix AZ URL
  "/services/residential-electrical-services": "/residential-electrical-phoenix-az/",
  "/services/residential-electrical-services/": "/residential-electrical-phoenix-az/",
  "/services/residential-electrical-phoenix-az": "/residential-electrical-phoenix-az/",
  "/services/residential-electrical-phoenix-az/": "/residential-electrical-phoenix-az/",
  "/services/residential-electrical": "/residential-electrical-phoenix-az/",
  "/services/residential-electrical/": "/residential-electrical-phoenix-az/",
  "/residential-electrical-services": "/residential-electrical-phoenix-az/",
  "/residential-electrical-services/": "/residential-electrical-phoenix-az/",
  "/residential-electrical-services-phoenix-az": "/residential-electrical-phoenix-az/",
  "/residential-electrical-services-phoenix-az/": "/residential-electrical-phoenix-az/",
  "/residential-electrical": "/residential-electrical-phoenix-az/",
  "/residential-electrical/": "/residential-electrical-phoenix-az/",

  // Legacy Service Slugs with -phoenix-az
  "/light-fixture-installation-phoenix-az": "/services/light-fixture-installation/",
  "/ceiling-fan-installation-phoenix-az": "/services/ceiling-fan-installation/",
  "/circuit-breaker-repair-phoenix-az": "/services/circuit-breaker-repair/",
  "/kitchen-electrical-repairs-phoenix-az": "/services/kitchen-electrical-repairs/",
  "/electrical-maintenance-phoenix-az": "/services/electrical-maintenance/",
  "/electrical-troubleshooting-phoenix-az": "/services/electrical-troubleshooting/",
  "/commercial-electrical-services-phoenix-az": "/services/",

  // Location Redirects: /locations/phoenix-az, /phoenix-az, /electricion-phoenix-az -> /electrician-phoenix-az/
  "/locations/phoenix-az": "/electrician-phoenix-az/",
  "/locations/phoenix-az/": "/electrician-phoenix-az/",
  "/phoenix-az": "/electrician-phoenix-az/",
  "/phoenix-az/": "/electrician-phoenix-az/",
  "/electricion-phoenix-az": "/electrician-phoenix-az/",
  "/electricion-phoenix-az/": "/electrician-phoenix-az/",

  "/locations/mesa-az": "/electrician-mesa-az/",
  "/locations/mesa-az/": "/electrician-mesa-az/",
  "/mesa-az": "/electrician-mesa-az/",
  "/mesa-az/": "/electrician-mesa-az/",
  "/electricion-mesa-az": "/electrician-mesa-az/",
  "/electricion-mesa-az/": "/electrician-mesa-az/",

  "/locations/scottsdale-az": "/electrician-scottsdale-az/",
  "/locations/scottsdale-az/": "/electrician-scottsdale-az/",
  "/scottsdale-az": "/electrician-scottsdale-az/",
  "/scottsdale-az/": "/electrician-scottsdale-az/",
  "/electricion-scottsdale-az": "/electrician-scottsdale-az/",
  "/electricion-scottsdale-az/": "/electrician-scottsdale-az/",

  "/locations/tempe-az": "/electrician-tempe-az/",
  "/locations/tempe-az/": "/electrician-tempe-az/",
  "/tempe-az": "/electrician-tempe-az/",
  "/tempe-az/": "/electrician-tempe-az/",
  "/electricion-tempe-az": "/electrician-tempe-az/",
  "/electricion-tempe-az/": "/electrician-tempe-az/",

  "/locations/chandler-az": "/electrician-chandler-az/",
  "/locations/chandler-az/": "/electrician-chandler-az/",
  "/chandler-az": "/electrician-chandler-az/",
  "/chandler-az/": "/electrician-chandler-az/",
  "/electricion-chandler-az": "/electrician-chandler-az/",
  "/electricion-chandler-az/": "/electrician-chandler-az/",

  "/locations/glendale-az": "/electrician-glendale-az/",
  "/locations/glendale-az/": "/electrician-glendale-az/",
  "/glendale-az": "/electrician-glendale-az/",
  "/glendale-az/": "/electrician-glendale-az/",
  "/electricion-glendale-az": "/electrician-glendale-az/",
  "/electricion-glendale-az/": "/electrician-glendale-az/",
};

// Build sets for dynamic lookup
const serviceSlugSet = new Set(SERVICES.map((s) => s.slug));
const locationSlugSet = new Set(LOCATIONS.map((l) => l.slug));

export function getRedirectDestination(rawPathname: string): string | null {
  // Normalize by stripping any trailing slash for matching
  const cleanPath = rawPathname.replace(/\/+$/, "") || "/";

  // 1. Direct match in static redirects table
  if (STATIC_REDIRECTS[cleanPath]) {
    return STATIC_REDIRECTS[cleanPath];
  }

  // 2. Any /locations/* path redirected to /electrician-[slug]/
  if (cleanPath.startsWith("/locations/")) {
    const slug = cleanPath.replace("/locations/", "");
    const candidate = slug.startsWith("electrician-") ? slug : `electrician-${slug}`;
    if (locationSlugSet.has(candidate)) {
      return `/${candidate}/`;
    }
  }

  // 3. Typo /electricion-* redirected to /electrician-*
  if (cleanPath.startsWith("/electricion-")) {
    const candidate = cleanPath.replace("/electricion-", "electrician-");
    if (locationSlugSet.has(candidate)) {
      return `/${candidate}/`;
    }
  }

  // 4. Missing trailing slash on canonical routes (to prevent duplicate URL indexing)
  if (cleanPath === "/residential-electrical-phoenix-az" && !rawPathname.endsWith("/")) {
    return "/residential-electrical-phoenix-az/";
  }

  if (cleanPath.startsWith("/electrician-") && !rawPathname.endsWith("/")) {
    const slug = cleanPath.replace("/", "");
    if (locationSlugSet.has(slug)) {
      return `/${slug}/`;
    }
  }

  if (cleanPath.startsWith("/services/") && !rawPathname.endsWith("/")) {
    const slug = cleanPath.replace("/services/", "");
    if (serviceSlugSet.has(slug)) {
      return `/services/${slug}/`;
    }
  }

  return null;
}
