import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { LOCATIONS, SERVICES, BUSINESS, FAQS } from "@/lib/business";
import { Reveal } from "@/components/site/Reveal";
import { IconPhone, IconArrowRight, IconMapPin, IconCheck } from "@/components/site/Icons";

export const Route = createFileRoute("/locations/$slug")({
  loader: ({ params }) => {
    const loc = LOCATIONS.find((l) => l.slug === params.slug);
    if (!loc) throw notFound();
    return { loc };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Location not found" }, { name: "robots", content: "noindex" }] };
    const l = loaderData.loc;
    const title = `Electrician ${l.city}, AZ | APM Arizona Electric LLC`;
    const desc = `Licensed electricians serving ${l.city}, Arizona. Residential and commercial electrical repairs, lighting, ceiling fans and more. Call +1 (480) 619-0510.`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: `/locations/${l.slug}` },
        { property: "og:type", content: "website" },
      ],
      links: [{ rel: "canonical", href: `/locations/${l.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: `APM Arizona Electric LLC — ${l.city}`,
          telephone: "+1-480-619-0510",
          areaServed: { "@type": "City", name: `${l.city}, AZ` },
          address: { "@type": "PostalAddress", addressLocality: l.city, addressRegion: "AZ", addressCountry: "US" },
        }),
      }],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-[60vh] grid place-items-center container-x pt-32">
      <div className="text-center"><h1 className="text-4xl font-bold text-secondary">Location not found</h1><Link to="/" className="mt-6 btn-primary inline-flex">Back home</Link></div>
    </div>
  ),
  component: LocationDetail,
});

function LocationDetail() {
  const { loc: l } = Route.useLoaderData();

  return (
    <>
      <section className="relative pt-40 pb-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1520637836862-4d197d17c93a?auto=format&fit=crop&w=2000&q=70" alt={`${l.city} Arizona skyline`} className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.14 0.05 265 / 0.92), oklch(0.22 0.04 260 / 0.7))" }} />
        </div>
        <div className="container-x relative">
          <Reveal><span className="eyebrow bg-white/10 border-white/20 text-white"><IconMapPin className="h-3.5 w-3.5 text-primary" /> Serving {l.city}, AZ</span></Reveal>
          <Reveal delay={0.1}><h1 className="mt-6 text-5xl md:text-7xl font-bold max-w-4xl leading-[1.05]">Trusted <span className="text-gradient-primary">Electrician in {l.city}</span></h1></Reveal>
          <Reveal delay={0.2}><p className="mt-6 text-white/80 text-lg max-w-2xl">{l.blurb}</p></Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={BUSINESS.phoneHref} className="btn-primary"><IconPhone className="h-4 w-4" /> Call {BUSINESS.phone}</a>
              <Link to="/contact" className="btn-outline">Free Estimate <IconArrowRight className="h-4 w-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-2 items-start">
          <Reveal>
            <div>
              <span className="eyebrow">Local Expertise</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-secondary">Your neighborhood electricians in {l.city}.</h2>
              <p className="mt-4 text-muted-foreground text-lg">We know {l.city} — from older homes with dated wiring to new builds needing modern smart systems. Every neighborhood, every panel type, every code requirement.</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {l.landmarks.map((lm: string) => (
                  <span key={lm} className="inline-flex items-center gap-1 rounded-full bg-primary/10 border border-primary/20 px-3 py-1.5 text-xs font-semibold text-secondary">
                    <IconMapPin className="h-3 w-3 text-primary" /> {lm}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-secondary text-white p-8">
              <h3 className="text-xl font-bold">Why Choose a Local Electrician</h3>
              <ul className="mt-5 space-y-3">
                {["Faster response times", "Familiar with local codes", "Familiar with common local issues", "Support a family-owned business", "Same-day appointments"].map((b) => (
                  <li key={b} className="flex items-center gap-3 text-white/90"><IconCheck className="h-4 w-4 text-primary shrink-0" /> {b}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x">
          <Reveal><span className="eyebrow">Services in {l.city}</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-3xl md:text-4xl font-bold text-secondary">Full electrical service for {l.city}, AZ.</h2></Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.slice(0, 8).map((s) => (
              <Link key={s.slug} to="/services/$slug" params={{ slug: s.slug }} className="group rounded-2xl bg-white border border-border p-6 hover:-translate-y-0.5 hover:shadow-elegant transition-all">
                <h3 className="font-bold text-secondary">{s.title}</h3>
                <div className="mt-3 inline-flex items-center gap-2 text-sm text-primary font-semibold">Learn more <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x max-w-3xl">
          <Reveal><span className="eyebrow">FAQ</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-3xl md:text-4xl font-bold text-secondary">Common questions from {l.city} customers.</h2></Reveal>
          <div className="mt-10 space-y-3">
            {FAQS.slice(0, 5).map((f) => (
              <details key={f.q} className="group rounded-2xl bg-white border border-border p-6">
                <summary className="cursor-pointer list-none font-semibold text-secondary flex justify-between">{f.q}<span className="text-primary group-open:rotate-45 transition-transform">+</span></summary>
                <p className="mt-3 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
            <iframe title={`APM Arizona Electric ${l.city}`} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412478.3658121596!2d-117.31996582528662!3d33.35805185784505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0f0f2af0a919%3A0x97952056a9736ef4!2sApm%20Arizona%20Electric%20LLC!5e0!3m2!1sen!2sin!4v1784981145048!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
          </div>
        </div>
      </section>
    </>
  );
}
