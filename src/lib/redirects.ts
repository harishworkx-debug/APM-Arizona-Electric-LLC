import { SERVICES, LOCATIONS } from "./business";

/**
 * Maps legacy URLs, mistyped URLs, and duplicate-intent URLs to their canonical paths.
 * All destination URLs are clean paths without trailing slashes to match Vercel/TanStack Start conventions.
 */
const STATIC_REDIRECTS: Record<string, string> = {
  // Residential Electrical Services aliases -> Canonical Phoenix AZ URL
  "/services/residential-electrical-services": "/residential-electrical-phoenix-az",
  "/services/residential-electrical-services/": "/residential-electrical-phoenix-az",
  "/services/residential-electrical-phoenix-az": "/residential-electrical-phoenix-az",
  "/services/residential-electrical-phoenix-az/": "/residential-electrical-phoenix-az",
  "/services/residential-electrical": "/residential-electrical-phoenix-az",
  "/services/residential-electrical/": "/residential-electrical-phoenix-az",
  "/residential-electrical-services": "/residential-electrical-phoenix-az",
  "/residential-electrical-services/": "/residential-electrical-phoenix-az",
  "/residential-electrical-services-phoenix-az": "/residential-electrical-phoenix-az",
  "/residential-electrical-services-phoenix-az/": "/residential-electrical-phoenix-az",
  "/residential-electrical": "/residential-electrical-phoenix-az",
  "/residential-electrical/": "/residential-electrical-phoenix-az",

  // Commercial Electrical
  "/commercial-electrical-services-phoenix-az": "/services",
  "/commercial-electrical-services-phoenix-az/": "/services",

  // Location Redirects: /locations/phoenix-az, /phoenix-az, /electricion-phoenix-az -> /electrician-phoenix-az
  "/locations/phoenix-az": "/electrician-phoenix-az",
  "/locations/phoenix-az/": "/electrician-phoenix-az",
  "/phoenix-az": "/electrician-phoenix-az",
  "/phoenix-az/": "/electrician-phoenix-az",
  "/electricion-phoenix-az": "/electrician-phoenix-az",
  "/electricion-phoenix-az/": "/electrician-phoenix-az",

  "/locations/mesa-az": "/electrician-mesa-az",
  "/locations/mesa-az/": "/electrician-mesa-az",
  "/mesa-az": "/electrician-mesa-az",
  "/mesa-az/": "/electrician-mesa-az",
  "/electricion-mesa-az": "/electrician-mesa-az",
  "/electricion-mesa-az/": "/electrician-mesa-az",

  "/locations/scottsdale-az": "/electrician-scottsdale-az",
  "/locations/scottsdale-az/": "/electrician-scottsdale-az",
  "/scottsdale-az": "/electrician-scottsdale-az",
  "/scottsdale-az/": "/electrician-scottsdale-az",
  "/electricion-scottsdale-az": "/electrician-scottsdale-az",
  "/electricion-scottsdale-az/": "/electrician-scottsdale-az",

  "/locations/tempe-az": "/electrician-tempe-az",
  "/locations/tempe-az/": "/electrician-tempe-az",
  "/tempe-az": "/electrician-tempe-az",
  "/tempe-az/": "/electrician-tempe-az",
  "/electricion-tempe-az": "/electrician-tempe-az",
  "/electricion-tempe-az/": "/electrician-tempe-az",

  "/locations/chandler-az": "/electrician-chandler-az",
  "/locations/chandler-az/": "/electrician-chandler-az",
  "/chandler-az": "/electrician-chandler-az",
  "/chandler-az/": "/electrician-chandler-az",
  "/electricion-chandler-az": "/electrician-chandler-az",
  "/electricion-chandler-az/": "/electrician-chandler-az",

  "/locations/glendale-az": "/electrician-glendale-az",
  "/locations/glendale-az/": "/electrician-glendale-az",
  "/glendale-az": "/electrician-glendale-az",
  "/glendale-az/": "/electrician-glendale-az",
  "/electricion-glendale-az": "/electrician-glendale-az",
  "/electricion-glendale-az/": "/electrician-glendale-az",
};

// Build sets for dynamic lookup
const serviceSlugSet = new Set(SERVICES.map((s) => s.slug));
const locationSlugSet = new Set(LOCATIONS.map((l) => l.slug));

export function getRedirectDestination(rawPathname: string): string | null {
  // Normalize path by stripping trailing slashes for lookup
  const cleanPath = rawPathname.replace(/\/+$/, "") || "/";

  // Root does not redirect
  if (cleanPath === "/") return null;

  // 1. Direct match in static redirects table
  if (STATIC_REDIRECTS[rawPathname]) {
    return STATIC_REDIRECTS[rawPathname];
  }
  if (STATIC_REDIRECTS[cleanPath]) {
    return STATIC_REDIRECTS[cleanPath];
  }

  // 2. Any /services/* path redirected to flat root /[slug]-phoenix-az
  if (cleanPath.startsWith("/services/")) {
    const serviceSlug = cleanPath.replace("/services/", "");
    if (serviceSlugSet.has(serviceSlug)) {
      return `/${serviceSlug}`;
    }
    const withPhoenix = `${serviceSlug}-phoenix-az`;
    if (serviceSlugSet.has(withPhoenix)) {
      return `/${withPhoenix}`;
    }
  }

  // 3. Direct service slug requested without -phoenix-az suffix -> redirect to flat -phoenix-az
  const directSlug = cleanPath.replace(/^\//, "");
  const suffixed = `${directSlug}-phoenix-az`;
  if (serviceSlugSet.has(suffixed)) {
    return `/${suffixed}`;
  }

  // 4. Any /locations/* path redirected to /electrician-[slug]
  if (cleanPath.startsWith("/locations/")) {
    const slug = cleanPath.replace("/locations/", "");
    const candidate = slug.startsWith("electrician-") ? slug : `electrician-${slug}`;
    if (locationSlugSet.has(candidate)) {
      return `/${candidate}`;
    }
  }

  // 5. Typo /electricion-* redirected to /electrician-*
  if (cleanPath.startsWith("/electricion-")) {
    const candidate = cleanPath.replace("/electricion-", "electrician-");
    if (locationSlugSet.has(candidate)) {
      return `/${candidate}`;
    }
  }

  // 6. If request has a trailing slash (e.g. /electrician-scottsdale-az/),
  // redirect to the clean URL without trailing slash (/electrician-scottsdale-az).
  // This matches Vercel cleanUrls and avoids ping-pong loops.
  if (rawPathname.length > 1 && rawPathname.endsWith("/")) {
    return cleanPath;
  }

  return null;
}
