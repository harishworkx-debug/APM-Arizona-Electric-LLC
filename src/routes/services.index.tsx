import { createFileRoute, Link } from "@tanstack/react-router";
import { SERVICES, BUSINESS } from "@/lib/business";
import { Reveal } from "@/components/site/Reveal";
import { IconPhone, IconArrowRight, IconCheck } from "@/components/site/Icons";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Electrical Services in Phoenix, AZ | APM Arizona Electric LLC" },
      { name: "description", content: "Professional residential and commercial electrical services across Phoenix, Arizona. Ceiling fans, lighting, breaker repairs, maintenance and more. Call +1 (480) 619-0510." },
      { property: "og:title", content: "Electrical Services in Phoenix, AZ | APM Arizona Electric LLC" },
      { property: "og:description", content: "Full-service residential and commercial electricians serving Phoenix and the Valley." },
      { property: "og:url", content: "/services" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=2000&q=70" alt="Electrical services" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.14 0.05 265 / 0.9), oklch(0.22 0.04 260 / 0.75))" }} />
        </div>
        <div className="container-x relative">
          <Reveal><span className="eyebrow bg-white/10 border-white/20 text-white">Our Services</span></Reveal>
          <Reveal delay={0.1}><h1 className="mt-6 text-5xl md:text-7xl font-bold max-w-4xl leading-[1.05]">Complete <span className="text-gradient-primary">electrical services</span> for Phoenix.</h1></Reveal>
          <Reveal delay={0.2}><p className="mt-6 text-white/80 text-lg max-w-2xl">From a single outlet to a full commercial buildout — our licensed electricians handle every job with the same honest craftsmanship.</p></Reveal>
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
                    <Link to="/$slug" params={{ slug: s.slug }} className="btn-dark text-xs px-5 py-2.5">Learn More <IconArrowRight className="h-3.5 w-3.5" /></Link>
                    <a href={BUSINESS.phoneHref} className="btn-primary text-xs px-5 py-2.5"><IconPhone className="h-3.5 w-3.5" /> Call</a>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
