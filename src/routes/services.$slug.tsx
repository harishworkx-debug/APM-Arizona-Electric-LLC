import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SERVICES, LOCATIONS, BUSINESS, SITE, abs, breadcrumbSchema, faqSchema } from "@/lib/business";
import { ServiceDetail } from "@/components/site/ServiceDetail";
import { LocationDetail } from "@/components/site/LocationDetail";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (service) return { kind: "service" as const, service, location: null };
    
    throw notFound();
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Page Unavailable | APM Arizona Electric LLC" }, { name: "robots", content: "noindex" }] };
    }

    const isService = true;
    const item = loaderData.service!;
    const url = abs(`/services/${item.slug}`);
    const title = item.metaTitle;
    const desc = item.metaDescription;
    const faqs = item.faqs;

    const crumbs = isService
      ? [{ name: "Home", path: "/" }, { name: "Services", path: "/services" }, { name: loaderData.service!.title, path: `/services/${item.slug}` }]
      : [{ name: "Home", path: "/" }, { name: "Service Areas", path: "/services" }, { name: `${loaderData.location!.city}, AZ`, path: `/services/${item.slug}` }];

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
            "@type": "Organization",
            "@id": `${SITE.url}/#business`,
            name: BUSINESS.name,
            telephone: BUSINESS.phoneSchema,
          },
          areaServed: LOCATIONS.map((l) => ({ "@type": "City", name: `${l.city}, AZ` })),
        }
      : {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${url}#localbusiness`,
          name: `${BUSINESS.name} — ${loaderData.location!.city}`,
          url,
          telephone: BUSINESS.phoneSchema,
          priceRange: "$$",
          image: "https://images.unsplash.com/photo-1520637836862-4d197d17c93a?auto=format&fit=crop&w=1200&q=70",
          address: {
            "@type": "PostalAddress",
            streetAddress: BUSINESS.street,
            addressLocality: BUSINESS.addressLocality,
            addressRegion: "AZ",
            postalCode: BUSINESS.postalCode,
            addressCountry: "US",
          },
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
        <Link to="/" className="mt-6 btn-primary inline-flex">Back home</Link>
      </div>
    </div>
  );
}

function FlatPage() {
  const data = Route.useLoaderData();
  if (data.kind === "service") return <ServiceDetail service={data.service!} />;
  return <LocationDetail location={data.location!} />;
}
