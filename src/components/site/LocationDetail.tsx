import { Link } from "@tanstack/react-router";
import { BUSINESS, LOCATIONS, SERVICES, type Location } from "@/lib/business";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { IconPhone, IconArrowRight, IconMapPin, IconCheck, IconClock } from "@/components/site/Icons";

export function LocationDetail({ location: l }: { location: Location }) {
  const nearbyPages = LOCATIONS.filter((x) => x.slug !== l.slug);

  return (
    <>
      <section className="relative pt-40 pb-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1520637836862-4d197d17c93a?auto=format&fit=crop&w=2000&q=70" alt={`Electrician serving ${l.city}, Arizona`} className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.14 0.05 265 / 0.92), oklch(0.22 0.04 260 / 0.7))" }} />
        </div>
        <div className="container-x relative">
          <Reveal>
            <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Service Areas", path: "/services" }, { name: `${l.city}, AZ`, path: `/${l.slug}` }]} />
          </Reveal>
          <Reveal delay={0.05}><span className="mt-6 eyebrow bg-white/10 border-white/20 text-white"><IconMapPin className="h-3.5 w-3.5 text-primary" /> Serving {l.city}, AZ</span></Reveal>
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
        <div className="container-x max-w-3xl">
          <Reveal><span className="eyebrow">Local Information</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-3xl md:text-4xl font-bold text-secondary">Electrical work built around {l.city}.</h2></Reveal>
          {l.intro.map((p, i) => (
            <Reveal key={i} delay={0.15 + i * 0.05}><p className="mt-5 text-muted-foreground text-lg leading-relaxed">{p}</p></Reveal>
          ))}
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-2">
              {l.landmarks.map((lm) => (
                <span key={lm} className="inline-flex items-center gap-1 rounded-full bg-primary/10 border border-primary/20 px-3 py-1.5 text-xs font-semibold text-secondary">
                  <IconMapPin className="h-3 w-3 text-primary" /> {lm}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-4">
        <div className="container-x grid gap-12 lg:grid-cols-2 items-start">
          <Reveal>
            <div>
              <span className="eyebrow">Service Availability</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-secondary">When we can be at your door.</h2>
              <p className="mt-4 inline-flex items-center gap-2 text-secondary font-semibold"><IconClock className="h-4 w-4 text-primary" /> {l.responseTime}</p>
              <ul className="mt-6 space-y-4">
                {l.availability.map((a) => (
                  <li key={a} className="flex gap-4">
                    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/15 text-secondary"><IconCheck className="h-4 w-4" /></div>
                    <span className="text-secondary font-medium">{a}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-secondary text-white p-8">
              <h2 className="text-xl font-bold">Why {l.city} customers choose us</h2>
              <ul className="mt-5 space-y-3">
                {l.whyUs.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-white/90"><IconCheck className="h-4 w-4 text-primary shrink-0 mt-1" /> {b}</li>
                ))}
              </ul>
              <a href={BUSINESS.phoneHref} className="mt-7 btn-primary inline-flex"><IconPhone className="h-4 w-4" /> Call {BUSINESS.phone}</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x">
          <Reveal><span className="eyebrow">Services in {l.city}</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-3xl md:text-4xl font-bold text-secondary">Full electrical service for {l.city}, AZ.</h2></Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <Link key={s.slug} to="/$slug" params={{ slug: s.slug }} className="group rounded-2xl bg-white border border-border p-6 hover:-translate-y-0.5 hover:shadow-elegant transition-all">
                <h3 className="font-bold text-secondary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{s.short}</p>
                <div className="mt-3 inline-flex items-center gap-2 text-sm text-primary font-semibold">{n.title ?? "View service"} <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <Reveal><span className="eyebrow">Nearby Areas Served</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-3xl md:text-4xl font-bold text-secondary">We also cover the communities around {l.city}.</h2></Reveal>
          <Reveal delay={0.15}><p className="mt-4 text-muted-foreground max-w-2xl">Our {l.city} crews regularly work in {l.nearby.join(", ")} and the surrounding Phoenix Metro Area.</p></Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {nearbyPages.map((n) => (
              <Link key={n.slug} to="/$slug" params={{ slug: n.slug }} className="flex items-center gap-3 rounded-2xl border border-border bg-white p-5 hover:border-primary/40 hover:-translate-y-0.5 transition-all">
                <IconMapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="font-semibold text-secondary text-sm">Electrician {n.city}, AZ</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x max-w-3xl">
          <Reveal><span className="eyebrow">FAQ</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-3xl md:text-4xl font-bold text-secondary">Common questions from {l.city} customers.</h2></Reveal>
          <div className="mt-10 space-y-3">
            {l.faqs.map((f) => (
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
          <div className="relative overflow-hidden rounded-[2.5rem] p-10 md:p-14 text-white" style={{ background: "linear-gradient(135deg, oklch(0.22 0.04 260), oklch(0.14 0.05 265))" }}>
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full" style={{ background: "radial-gradient(circle, oklch(0.78 0.17 70 / 0.4), transparent 70%)" }} />
            <div className="relative max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">Need an electrician in {l.city} today?</h2>
              <p className="mt-4 text-white/70 text-lg">Call now or request a free written estimate. {l.responseTime}.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={BUSINESS.phoneHref} className="btn-primary"><IconPhone className="h-4 w-4" /> {BUSINESS.phone}</a>
                <Link to="/contact" className="btn-outline">Request Estimate <IconArrowRight className="h-4 w-4" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-x">
          <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
            <iframe title={`APM Arizona Electric LLC service area map for ${l.city}, AZ`} src={BUSINESS.mapEmbed} width="100%" height="450" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
          </div>
        </div>
      </section>
    </>
  );
}
