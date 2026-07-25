import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SERVICES, BUSINESS, FAQS } from "@/lib/business";
import { Reveal } from "@/components/site/Reveal";
import { IconPhone, IconArrowRight, IconCheck, IconBolt } from "@/components/site/Icons";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = SERVICES.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] };
    const s = loaderData.service;
    const title = `${s.title} | APM Arizona Electric LLC`;
    return {
      meta: [
        { title },
        { name: "description", content: `${s.short} Serving Phoenix, AZ. Call +1 (480) 619-0510 for a free estimate.` },
        { property: "og:title", content: title },
        { property: "og:description", content: s.short },
        { property: "og:image", content: s.image },
        { property: "og:url", content: `/services/${s.slug}` },
        { property: "og:type", content: "website" },
        { name: "twitter:image", content: s.image },
      ],
      links: [{ rel: "canonical", href: `/services/${s.slug}` }],
      scripts: [{
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.title,
          description: s.description,
          provider: { "@type": "ElectricalContractor", name: "APM Arizona Electric LLC", telephone: "+1-480-619-0510" },
          areaServed: "Phoenix, AZ",
          image: s.image,
        }),
      }],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-[60vh] grid place-items-center container-x pt-32">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-secondary">Service not found</h1>
        <Link to="/services" className="mt-6 btn-primary inline-flex">Back to services</Link>
      </div>
    </div>
  ),
  component: ServiceDetail,
});

function ServiceDetail() {
  const { service: s } = Route.useLoaderData();
  const related = SERVICES.filter((x) => x.slug !== s.slug).slice(0, 3);

  return (
    <>
      <section className="relative pt-40 pb-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={s.image} alt={s.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.14 0.05 265 / 0.92), oklch(0.22 0.04 260 / 0.7))" }} />
        </div>
        <div className="container-x relative">
          <Reveal>
            <nav className="text-sm text-white/60 mb-6">
              <Link to="/" className="hover:text-primary">Home</Link> / <Link to="/services" className="hover:text-primary">Services</Link> / <span className="text-white">{s.title}</span>
            </nav>
          </Reveal>
          <Reveal delay={0.05}><span className="eyebrow bg-white/10 border-white/20 text-white"><IconBolt className="h-3.5 w-3.5 text-primary" /> Phoenix, Arizona</span></Reveal>
          <Reveal delay={0.1}><h1 className="mt-6 text-5xl md:text-6xl font-bold max-w-4xl leading-[1.05]">{s.title}</h1></Reveal>
          <Reveal delay={0.2}><p className="mt-6 text-white/80 text-lg max-w-2xl">{s.description}</p></Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={BUSINESS.phoneHref} className="btn-primary"><IconPhone className="h-4 w-4" /> Call {BUSINESS.phone}</a>
              <Link to="/contact" className="btn-outline">Request Estimate <IconArrowRight className="h-4 w-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <span className="eyebrow">Benefits</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-secondary">Why homeowners & businesses choose us for this.</h2>
              <ul className="mt-8 space-y-4">
                {s.benefits.map((b: string) => (
                  <li key={b} className="flex gap-4">
                    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/15 text-secondary"><IconCheck className="h-4 w-4" /></div>
                    <span className="text-secondary font-medium">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-secondary text-white p-10 relative overflow-hidden">
              <div className="absolute -top-16 -right-16 h-60 w-60 rounded-full" style={{ background: "radial-gradient(circle, oklch(0.78 0.17 70 / 0.35), transparent 70%)" }} />
              <span className="eyebrow bg-white/10 border-white/20 text-white">Common Issues We Fix</span>
              <h3 className="mt-4 text-2xl font-bold">Sound familiar?</h3>
              <ul className="mt-6 space-y-3">
                {s.problems.map((p: string) => (
                  <li key={p} className="flex items-center gap-3 text-white/85"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> {p}</li>
                ))}
              </ul>
              <a href={BUSINESS.phoneHref} className="mt-8 btn-primary inline-flex"><IconPhone className="h-4 w-4" /> Get It Fixed</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x max-w-4xl">
          <Reveal><span className="eyebrow">Our Process</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-3xl md:text-4xl font-bold text-secondary">How we handle every {s.title.toLowerCase()} job.</h2></Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {[
              { n: "01", t: "Free Estimate", d: "Clear pricing before we start." },
              { n: "02", t: "Schedule", d: "Same-day when available." },
              { n: "03", t: "Quality Work", d: "Licensed, code-compliant." },
              { n: "04", t: "Guarantee", d: "Workmanship stands behind us." },
            ].map((step) => (
              <div key={step.n} className="rounded-2xl bg-white border border-border p-6">
                <div className="font-display text-3xl font-bold text-primary">{step.n}</div>
                <h4 className="mt-2 font-bold text-secondary">{step.t}</h4>
                <p className="mt-1 text-sm text-muted-foreground">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x max-w-3xl">
          <Reveal><span className="eyebrow">FAQ</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-3xl md:text-4xl font-bold text-secondary">Common questions.</h2></Reveal>
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

      <section className="section-y bg-surface">
        <div className="container-x">
          <Reveal><span className="eyebrow">Related Services</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-3xl md:text-4xl font-bold text-secondary">You may also need.</h2></Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} to="/services/$slug" params={{ slug: r.slug }} className="group overflow-hidden rounded-3xl bg-white border border-border transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="aspect-[16/10] overflow-hidden"><img src={r.image} alt={r.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" /></div>
                <div className="p-6">
                  <h3 className="font-bold text-secondary">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{r.short}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
