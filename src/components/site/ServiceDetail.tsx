import { Link } from "@tanstack/react-router";
import { BUSINESS, LOCATIONS, SERVICES, type Service } from "@/lib/business";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { IconPhone, IconArrowRight, IconCheck, IconBolt, IconMapPin } from "@/components/site/Icons";

export function ServiceDetail({ service: s }: { service: Service }) {
  const related = s.related
    .map((slug) => SERVICES.find((x) => x.slug === slug))
    .filter((x): x is Service => Boolean(x));

  return (
    <>
      <section className="relative pt-40 pb-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={s.image} alt={`${s.title} for Phoenix, Arizona homeowners`} className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.14 0.05 265 / 0.92), oklch(0.22 0.04 260 / 0.7))" }} />
        </div>
        <div className="container-x relative">
          <Reveal>
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Services", path: "/services" },
                { name: s.title, path: `/${s.slug}` },
              ]}
            />
          </Reveal>
          <Reveal delay={0.05}><span className="mt-6 eyebrow bg-white/10 border-white/20 text-white"><IconBolt className="h-3.5 w-3.5 text-primary" /> Phoenix, Arizona</span></Reveal>
          <Reveal delay={0.1}><h1 className="mt-6 text-5xl md:text-6xl font-bold max-w-4xl leading-[1.05]">{s.h1}</h1></Reveal>
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
        <div className="container-x max-w-3xl">
          <Reveal><span className="eyebrow">Overview</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-3xl md:text-4xl font-bold text-secondary">{s.short}</h2></Reveal>
          {s.intro.map((p, i) => (
            <Reveal key={i} delay={0.15 + i * 0.05}><p className="mt-5 text-muted-foreground text-lg leading-relaxed">{p}</p></Reveal>
          ))}
        </div>
      </section>

      <section className="pb-4">
        <div className="container-x grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div>
              <span className="eyebrow">Benefits</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-secondary">Residential help for this electrical need.</h2>
              <ul className="mt-8 space-y-4">
                {s.benefits.map((b) => (
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
                {s.problems.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-white/85"><span className="h-1.5 w-1.5 rounded-full bg-primary" /> {p}</li>
                ))}
              </ul>
              <a href={BUSINESS.phoneHref} className="mt-8 btn-primary inline-flex"><IconPhone className="h-4 w-4" /> {BUSINESS.phone}</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <Reveal><span className="eyebrow">What's Included</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-3xl md:text-4xl font-bold text-secondary">Everything this service covers.</h2></Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {s.features.map((f, i) => (
              <Reveal key={f} delay={i * 0.04}>
                <div className="h-full rounded-2xl bg-white border border-border p-6 flex gap-3">
                  <IconCheck className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-secondary font-medium">{f}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x max-w-4xl">
          <Reveal><span className="eyebrow">Our Process</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-3xl md:text-4xl font-bold text-secondary">How providers may handle {s.title.toLowerCase()}.</h2></Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {s.process.map((step) => (
              <div key={step.n} className="rounded-2xl bg-white border border-border p-6">
                <div className="font-display text-3xl font-bold text-primary">{step.n}</div>
                <h3 className="mt-2 font-bold text-secondary">{step.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-12 lg:grid-cols-2 items-start">
          <Reveal>
            <div>
              <span className="eyebrow">Why Choose Us</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-secondary">A local team you can actually reach.</h2>
              <ul className="mt-8 space-y-4">
                {s.whyUs.map((w) => (
                  <li key={w} className="flex gap-4">
                    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/15 text-secondary"><IconCheck className="h-4 w-4" /></div>
                    <span className="text-secondary font-medium">{w}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-white border border-border p-8">
              <h3 className="text-xl font-bold text-secondary">Available across the Valley</h3>
              <p className="mt-2 text-muted-foreground text-sm">Request a connection for {s.title.toLowerCase()} in every city listed.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {LOCATIONS.map((l) => (
                  <Link key={l.slug} to="/$slug" params={{ slug: l.slug }} className="flex items-center gap-2 rounded-xl border border-border px-4 py-3 text-sm font-semibold text-secondary hover:border-primary/40 hover:-translate-y-0.5 transition-all">
                    <IconMapPin className="h-4 w-4 text-primary" /> {l.city}, AZ
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x max-w-3xl">
          <Reveal><span className="eyebrow">FAQ</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-3xl md:text-4xl font-bold text-secondary">{s.title} questions, answered.</h2></Reveal>
          <div className="mt-10 space-y-3">
            {s.faqs.map((f) => (
              <details key={f.q} className="group rounded-2xl bg-white border border-border p-6">
                <summary className="cursor-pointer list-none font-semibold text-secondary flex justify-between">{f.q}<span className="text-primary group-open:rotate-45 transition-transform">+</span></summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <Reveal><span className="eyebrow">Related Services</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-3xl md:text-4xl font-bold text-secondary">You may also need.</h2></Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((r) => (
              <Link key={r.slug} to="/$slug" params={{ slug: r.slug }} className="group overflow-hidden rounded-3xl bg-white border border-border transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="aspect-[16/10] overflow-hidden"><img src={r.image} alt={`${r.title} in Phoenix, AZ`} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" /></div>
                <div className="p-6">
                  <h3 className="font-bold text-secondary">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{r.short}</p>
                </div>
              </Link>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-12 rounded-3xl p-10 text-white relative overflow-hidden" style={{ background: "linear-gradient(135deg, oklch(0.22 0.04 260), oklch(0.14 0.05 265))" }}>
              <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full" style={{ background: "radial-gradient(circle, oklch(0.78 0.17 70 / 0.4), transparent 70%)" }} />
              <div className="relative max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold">Ready to book {s.title.toLowerCase()}?</h2>
                <p className="mt-3 text-white/75">Request help connecting with an independent local provider across Phoenix, Tempe, Mesa, Scottsdale, Chandler and Glendale.</p>
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
