import { createFileRoute, Link } from "@tanstack/react-router";
import { SERVICES, LOCATIONS, BUSINESS, SITE, abs, breadcrumbSchema, locLabel } from "@/lib/business";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { IconPhone, IconArrowRight, IconCheck, IconMapPin } from "@/components/site/Icons";

const SERVICES_TITLE = "Electrical Services in Phoenix, AZ | APM Arizona Electric LLC";
const SERVICES_DESC =
  "Explore residential electrical service information across Phoenix, AZ — panel upgrades, rewiring, ceiling fans, lighting, breaker repair and maintenance. Connect with a local provider.";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: SERVICES_TITLE },
      { name: "description", content: SERVICES_DESC },
      { property: "og:title", content: SERVICES_TITLE },
      { property: "og:description", content: SERVICES_DESC },
      { property: "og:url", content: abs("/services") },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: SERVICES_TITLE },
      { name: "twitter:description", content: SERVICES_DESC },
    ],
    links: [{ rel: "canonical", href: abs("/services") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Electrical Services in Phoenix, AZ",
          itemListElement: SERVICES.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            name: s.title,
            url: abs(`/${s.slug}`),
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${SITE.url}/#business`,
          name: BUSINESS.name,
          url: SITE.url,
          telephone: BUSINESS.phoneSchema,
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])),
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=2000&q=70" alt="Residential electrical service in Phoenix, Arizona" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.14 0.05 265 / 0.9), oklch(0.22 0.04 260 / 0.75))" }} />
        </div>
        <div className="container-x relative">
          <Reveal><Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]} /></Reveal>
          <Reveal delay={0.05}><span className="mt-6 eyebrow bg-white/10 border-white/20 text-white">Our Services</span></Reveal>
          <Reveal delay={0.1}><h1 className="mt-6 text-5xl md:text-7xl font-bold max-w-4xl leading-[1.05]">Complete <span className="text-gradient-primary">electrical services</span> for Phoenix.</h1></Reveal>
          <Reveal delay={0.2}><p className="mt-6 text-white/80 text-lg max-w-2xl">From a single outlet to a panel upgrade, explore residential electrical needs and request a connection with an independent local provider.</p></Reveal>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.04}>
              <div className="group h-full flex flex-col overflow-hidden rounded-3xl bg-white border border-border shadow-[0_10px_40px_-25px_rgba(15,23,42,0.2)] transition-all hover:-translate-y-1 hover:shadow-[0_30px_60px_-25px_rgba(15,23,42,0.35)]">
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-7 flex flex-col flex-1">
                  <h2 className="text-xl font-bold text-secondary">{s.title}</h2>
                  <p className="mt-2 text-muted-foreground text-sm">{s.short}</p>
                  <ul className="mt-4 space-y-2 mb-6">
                    {s.benefits.slice(0, 3).map((b) => (
                      <li key={b} className="flex items-center gap-2 text-sm text-secondary"><IconCheck className="h-4 w-4 text-primary shrink-0" /> {b}</li>
                    ))}
                  </ul>
                  <div className="mt-auto flex flex-wrap gap-2">
                    <Link to="/$slug" params={{ slug: s.slug }} className="btn-dark text-xs px-5 py-2.5">{s.navLabel ?? s.title} <IconArrowRight className="h-3.5 w-3.5 shrink-0" /></Link>
                    <a href={BUSINESS.phoneHref} className="btn-primary text-xs px-5 py-2.5"><IconPhone className="h-3.5 w-3.5" /> {BUSINESS.phone}</a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <Reveal><span className="eyebrow">Service Areas</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-3xl md:text-4xl font-bold text-secondary">Every service, across the Phoenix Metro Area.</h2></Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {LOCATIONS.map((l) => (
              <Link key={l.slug} to="/$slug" params={{ slug: l.slug }} className="flex items-center gap-3 rounded-2xl border border-border bg-white p-6 hover:border-primary/40 hover:-translate-y-0.5 transition-all">
                <IconMapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="font-semibold text-secondary">{locLabel(l.city)}</span>
              </Link>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-12 rounded-3xl p-10 text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg, oklch(0.22 0.04 260), oklch(0.14 0.05 265))" }}>
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full" style={{ background: "radial-gradient(circle, oklch(0.78 0.17 70 / 0.4), transparent 70%)" }} />
              <div className="relative max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold">Not sure which service you need?</h2>
                <p className="mt-3 text-white/75">Tell us what you are seeing and request help connecting with an independent local provider.</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href={BUSINESS.phoneHref} className="btn-primary"><IconPhone className="h-4 w-4" /> {BUSINESS.phone}</a>
                  <Link to="/contact" className="btn-outline">Request Connection <IconArrowRight className="h-4 w-4" /></Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
