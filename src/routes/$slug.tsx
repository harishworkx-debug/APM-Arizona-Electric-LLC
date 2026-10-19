import { createFileRoute, Link, redirect, notFound } from "@tanstack/react-router";
import {
  SERVICES,
  LOCATIONS,
  BUSINESS,
  SITE,
  abs,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/business";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { LocationDetail } from "@/components/site/LocationDetail";

export const Route = createFileRoute("/$slug")({
  loader: ({ params }) => {
    const slug = params.slug;

    // Handle common typos or legacy aliases with 301 redirect
    if (slug === "electricion-phoenix-az" || slug === "phoenix-az") {
      throw redirect({ href: "/electrician-phoenix-az/", statusCode: 301 });
    }
    if (slug === "electricion-mesa-az" || slug === "mesa-az") {
      throw redirect({ href: "/electrician-mesa-az/", statusCode: 301 });
    }
    if (slug === "electricion-scottsdale-az" || slug === "scottsdale-az") {
      throw redirect({ href: "/electrician-scottsdale-az/", statusCode: 301 });
    }
    if (slug === "electricion-tempe-az" || slug === "tempe-az") {
      throw redirect({ href: "/electrician-tempe-az/", statusCode: 301 });
    }
    if (slug === "electricion-chandler-az" || slug === "chandler-az") {
      throw redirect({ href: "/electrician-chandler-az/", statusCode: 301 });
    }
    if (slug === "electricion-glendale-az" || slug === "glendale-az") {
      throw redirect({ href: "/electrician-glendale-az/", statusCode: 301 });
    }
    if (slug === "electricion-gilbert-az" || slug === "gilbert-az") {
      throw redirect({ href: "/electrician-gilbert-az/", statusCode: 301 });
    }
    if (slug === "electricion-peoria-az" || slug === "peoria-az") {
      throw redirect({ href: "/electrician-peoria-az/", statusCode: 301 });
    }
    if (slug === "electricion-surprise-az" || slug === "surprise-az") {
      throw redirect({ href: "/electrician-surprise-az/", statusCode: 301 });
    }
    if (slug === "electricion-goodyear-az" || slug === "goodyear-az") {
      throw redirect({ href: "/electrician-goodyear-az/", statusCode: 301 });
    }
    if (slug === "electricion-paradise-valley-az" || slug === "paradise-valley-az") {
      throw redirect({ href: "/electrician-paradise-valley-az/", statusCode: 301 });
    }

    if (
      slug === "residential-electrical-services" ||
      slug === "residential-electrical-services-phoenix-az" ||
      slug === "residential-electrical"
    ) {
      throw redirect({ href: "/residential-electrical-phoenix-az/", statusCode: 301 });
    }

    const service = SERVICES.find((s) => s.slug === slug);
    if (service) return { kind: "service" as const, service, location: null };

    // If accessed without -phoenix-az suffix, 301 redirect to canonical flat URL
    const serviceWithSuffix = SERVICES.find((s) => s.slug === `${slug}-phoenix-az`);
    if (serviceWithSuffix) {
      throw redirect({ href: `/${serviceWithSuffix.slug}/`, statusCode: 301 });
    }

    const location = LOCATIONS.find((l) => l.slug === slug);
    if (location) return { kind: "location" as const, service: null, location };

    const locationWithPrefix = LOCATIONS.find((l) => l.slug === `electrician-${slug}`);
    if (locationWithPrefix) {
      throw redirect({ href: `/${locationWithPrefix.slug}/`, statusCode: 301 });
    }

    throw notFound();
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Page Unavailable | APM Arizona Electric LLC" },
          { name: "robots", content: "noindex" },
        ],
      };
    }

    const isService = loaderData.kind === "service";
    const item = isService ? loaderData.service! : loaderData.location!;
    const url = abs(`/${item.slug}`);
    const title = item.metaTitle;
    const desc = item.metaDescription;
    const faqs = item.faqs;

    const crumbs = isService
      ? [
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: loaderData.service!.title, path: `/${item.slug}` },
        ]
      : [
          { name: "Home", path: "/" },
          { name: "Service Areas", path: "/services" },
          { name: `${loaderData.location!.city}, AZ`, path: `/${item.slug}` },
        ];

    const primarySchema = isService
      ? {
          "@context": "https://schema.org",
          "@type": "Service",
          "@id": `${url}#service`,
          name: loaderData.service!.title,
          serviceType: loaderData.service!.title,
          description: loaderData.service!.description,
          url,
          provider: {
            "@type": "Electrician",
            "@id": `${SITE.url}/#electrician`,
            name: BUSINESS.name,
            telephone: BUSINESS.phoneSchema,
          },
          areaServed: LOCATIONS.map((l) => ({ "@type": "City", name: `${l.city}, AZ` })),
        }
      : {
          "@context": "https://schema.org",
          "@type": "Electrician",
          "@id": `${url}#electrician`,
          name: `${BUSINESS.name} — ${loaderData.location!.city}`,
          url,
          telephone: BUSINESS.phoneSchema,
          priceRange: "$$",
          image:
            "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?auto=format&fit=crop&w=1200&q=70",
          address: {
            "@type": "PostalAddress",
            streetAddress: BUSINESS.street,
            addressLocality: BUSINESS.addressLocality,
            addressRegion: "AZ",
            postalCode: BUSINESS.postalCode,
            addressCountry: "US",
          },
          geo: {
            "@type": "GeoCoordinates",
            latitude: BUSINESS.geo.latitude,
            longitude: BUSINESS.geo.longitude,
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              opens: "07:00",
              closes: "19:00",
            },
          ],
          areaServed: { "@type": "City", name: `${loaderData.location!.city}, AZ` },
        };

    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(primarySchema) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema(crumbs)) },
        { type: "application/ld+json", children: JSON.stringify(faqSchema(faqs)) },
      ],
    };
  },
  notFoundComponent: PageNotFound,
  component: FlatPage,
});

function PageNotFound() {
  return (
    <div className="min-h-[60vh] grid place-items-center container-x pt-32">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-secondary">Page not found</h1>
        <p className="mt-3 text-muted-foreground">The page you are looking for does not exist.</p>
        <Link to="/" className="mt-6 btn-primary inline-flex">
          Back home
        </Link>
      </div>
    </div>
  );
}

function FlatPage() {
  const data = Route.useLoaderData();
  if (data.kind === "service") return <ServiceDetail service={data.service!} />;
  return <LocationDetail location={data.location!} />;
}
