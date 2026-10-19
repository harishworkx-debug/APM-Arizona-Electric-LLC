import { Link } from "@tanstack/react-router";
import { BUSINESS, LOCATIONS, SERVICES, type Location, locLabel } from "@/lib/business";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import {
  IconPhone,
  IconArrowRight,
  IconMapPin,
  IconCheck,
  IconClock,
  IconStar,
  IconShield,
  IconWrench,
  IconBolt,
} from "@/components/site/Icons";

export function LocationDetail({ location: l }: { location: Location }) {
  const nearbyPages = LOCATIONS.filter((x) => x.slug !== l.slug);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1520637836862-4d197d17c93a?auto=format&fit=crop&w=2000&q=70"
            alt={`Electrician serving ${l.city}, Arizona`}
            className="h-full w-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.14 0.05 265 / 0.94), oklch(0.22 0.04 260 / 0.75))",
            }}
          />
        </div>
        <div className="container-x relative">
          <Reveal>
            <Breadcrumbs
              items={[
                { name: "Home", path: "/" },
                { name: "Service Areas", path: "/services" },
                { name: `${l.city}, AZ`, path: `/${l.slug}` },
              ]}
            />
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="eyebrow bg-white/10 border-white/20 text-white">
                <IconMapPin className="h-3.5 w-3.5 text-primary" /> Serving {l.city}, AZ
              </span>
              <span className="eyebrow bg-white/10 border-white/20 text-white/90">
                <IconShield className="h-3.5 w-3.5 text-primary" /> ROC #341995 Licensed
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold max-w-4xl leading-[1.08] tracking-tight">
              {l.h1.includes(l.city) ? (
                <>
                  {l.h1.split(l.city)[0]}
                  <span className="text-gradient-primary">{l.city}</span>
                  {l.h1.split(l.city)[1]}
                </>
              ) : (
                l.h1
              )}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-white/85 text-lg md:text-xl max-w-2xl leading-relaxed">
              {l.blurb}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href={BUSINESS.phoneHref} className="btn-primary">
                <IconPhone className="h-4 w-4" /> Call {BUSINESS.phone}
              </a>
              <Link to="/contact" className="btn-outline">
                Request Service <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Local Community Context & Landmarks */}
      <section className="section-y bg-background">
        <div className="container-x max-w-4xl">
          <Reveal>
            <span className="eyebrow">Local Electrical Context</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-secondary">
              Electrical work engineered specifically for {l.city}.
            </h2>
          </Reveal>
          {l.intro.map((p, i) => (
            <Reveal key={i} delay={0.15 + i * 0.05}>
              <p className="mt-5 text-muted-foreground text-lg leading-relaxed">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <div className="mt-8 pt-6 border-t border-border">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Key Neighborhoods & Service Districts in {l.city}
              </h3>
              <div className="flex flex-wrap gap-2">
                {l.landmarks.map((lm) => (
                  <span
                    key={lm}
                    className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3.5 py-1.5 text-xs font-semibold text-secondary"
                  >
                    <IconMapPin className="h-3.5 w-3.5 text-primary" /> {lm}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Local Projects / Case Studies */}
      {l.projects && l.projects.length > 0 && (
        <section className="section-y bg-surface border-y border-border">
          <div className="container-x">
            <Reveal>
              <div className="max-w-2xl">
                <span className="eyebrow">Local Field Work</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-secondary">
                  Recent Electrical Projects in {l.city}.
                </h2>
                <p className="mt-3 text-muted-foreground text-lg">
                  Real examples of panel upgrades, wiring retrofits, and installations completed by
                  our licensed electricians in {l.city} neighborhoods.
                </p>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {l.projects.map((proj, idx) => (
                <Reveal key={proj.title} delay={0.1 * idx}>
                  <div className="h-full flex flex-col justify-between rounded-3xl bg-white border border-border p-7 shadow-elegant hover:-translate-y-1 transition-all">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-4">
                        <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-3 py-1 text-xs font-bold text-secondary">
                          <IconBolt className="h-3 w-3 text-primary" /> {proj.tag}
                        </span>
                        <span className="text-xs font-semibold text-muted-foreground flex items-center gap-1">
                          <IconMapPin className="h-3 w-3 text-primary" /> {proj.neighborhood}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-secondary leading-snug">
                        {proj.title}
                      </h3>
                      <p className="mt-3 text-muted-foreground text-sm leading-relaxed">
                        {proj.description}
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-xs font-semibold text-secondary">
                      <span className="flex items-center gap-1 text-emerald-600">
                        <IconCheck className="h-3.5 w-3.5" /> Code Inspected & Verified
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Verified Reviews Section */}
      {l.reviews && l.reviews.length > 0 && (
        <section className="section-y bg-background">
          <div className="container-x">
            <Reveal>
              <div className="max-w-2xl">
                <span className="eyebrow">Verified Local Reviews</span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-secondary">
                  What {l.city} Customers Say About Our Work.
                </h2>
              </div>
            </Reveal>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {l.reviews.map((rev, idx) => (
                <Reveal key={rev.author} delay={0.1 * idx}>
                  <div className="h-full flex flex-col justify-between rounded-3xl border border-border bg-surface p-8 shadow-sm">
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex gap-1 text-primary">
                          {[...Array(rev.rating)].map((_, i) => (
                            <IconStar key={i} className="h-4 w-4 fill-primary text-primary" />
                          ))}
                        </div>
                        <span className="text-xs font-semibold text-muted-foreground bg-white border border-border px-2.5 py-1 rounded-full">
                          {rev.service}
                        </span>
                      </div>
                      <p className="mt-4 text-secondary/90 italic leading-relaxed text-base">
                        "{rev.text}"
                      </p>
                    </div>
                    <div className="mt-6 pt-4 border-t border-border flex items-center justify-between text-sm">
                      <span className="font-bold text-secondary">{rev.author}</span>
                      <span className="text-muted-foreground text-xs flex items-center gap-1">
                        <IconMapPin className="h-3 w-3 text-primary" /> {rev.neighborhood}
                      </span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service Availability & Why Us */}
      <section className="section-y bg-surface border-t border-border">
        <div className="container-x grid gap-12 lg:grid-cols-2 items-start">
          <Reveal>
            <div>
              <span className="eyebrow">Service Availability & Dispatch</span>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-secondary">
                Transparent Scheduling in {l.city}.
              </h2>
              <div className="mt-5 inline-flex items-start gap-3 rounded-2xl bg-primary/10 border border-primary/20 p-4 text-secondary">
                <IconClock className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-sm">Dispatch Window & Response</p>
                  <p className="text-sm text-secondary/90 mt-1">{l.responseTime}</p>
                </div>
              </div>
              <ul className="mt-6 space-y-4">
                {l.availability.map((a) => (
                  <li key={a} className="flex gap-4">
                    <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/15 text-secondary">
                      <IconCheck className="h-4 w-4" />
                    </div>
                    <span className="text-secondary font-medium text-sm md:text-base leading-snug pt-1">
                      {a}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-secondary text-white p-8 md:p-10 shadow-elegant">
              <span className="eyebrow bg-white/10 border-white/20 text-white">Why Choose Us</span>
              <h3 className="mt-3 text-2xl md:text-3xl font-bold text-white">
                Why {l.city} Homeowners Trust APM Arizona Electric LLC
              </h3>
              <ul className="mt-6 space-y-3.5">
                {l.whyUs.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-white/90 text-sm md:text-base">
                    <IconCheck className="h-4 w-4 text-primary shrink-0 mt-1" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-3">
                <a href={BUSINESS.phoneHref} className="btn-primary inline-flex">
                  <IconPhone className="h-4 w-4" /> Call {BUSINESS.phone}
                </a>
                <Link to="/contact" className="btn-outline">
                  Schedule Online
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services in City */}
      <section className="section-y bg-background">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Comprehensive Coverage</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-secondary">
              Full Residential Electrical Services in {l.city}, AZ.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                to="/$slug"
                params={{ slug: s.slug }}
                className="group rounded-2xl bg-surface border border-border p-6 hover:-translate-y-1 hover:shadow-elegant transition-all flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-bold text-secondary text-lg group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                    {s.short}
                  </p>
                </div>
                <div className="mt-5 inline-flex items-center gap-2 text-sm text-primary font-semibold">
                  {s.navLabel ?? s.title}{" "}
                  <IconArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="section-y bg-surface border-t border-border">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Regional Service Network</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-secondary">
              We Also Serve Communities Surrounding {l.city}.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-muted-foreground max-w-2xl">
              Our licensed electricians regularly work across {l.nearby.join(", ")} and the wider
              Phoenix Metropolitan area.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {nearbyPages.map((n) => (
              <Link
                key={n.slug}
                to="/$slug"
                params={{ slug: n.slug }}
                className="flex items-center gap-3 rounded-2xl border border-border bg-white p-5 hover:border-primary/50 hover:-translate-y-0.5 hover:shadow-sm transition-all"
              >
                <IconMapPin className="h-5 w-5 text-primary shrink-0" />
                <span className="font-semibold text-secondary text-sm">{locLabel(n.city)}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* City FAQs */}
      <section className="section-y bg-background">
        <div className="container-x max-w-3xl">
          <Reveal>
            <span className="eyebrow">City-Specific FAQ</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold text-secondary">
              Frequently Asked Questions in {l.city}.
            </h2>
          </Reveal>
          <div className="mt-10 space-y-4">
            {l.faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl bg-surface border border-border p-6 [&_summary::-webkit-details-marker]:hidden"
              >
                <summary className="cursor-pointer list-none font-semibold text-secondary flex items-center justify-between gap-4">
                  <span>{f.q}</span>
                  <span className="text-primary text-xl font-bold transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-muted-foreground leading-relaxed text-sm md:text-base border-t border-border/50 pt-3">
                  {f.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-y">
        <div className="container-x">
          <div
            className="relative overflow-hidden rounded-[2.5rem] p-10 md:p-14 text-white"
            style={{
              background: "linear-gradient(135deg, oklch(0.22 0.04 260), oklch(0.14 0.05 265))",
            }}
          >
            <div
              className="absolute -right-20 -top-20 h-80 w-80 rounded-full"
              style={{
                background: "radial-gradient(circle, oklch(0.78 0.17 70 / 0.4), transparent 70%)",
              }}
            />
            <div className="relative max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Need an Electrician in {l.city}?
              </h2>
              <p className="mt-4 text-white/80 text-lg">
                Call now or request electrical service online. {l.responseTime}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href={BUSINESS.phoneHref} className="btn-primary">
                  <IconPhone className="h-4 w-4" /> Call {BUSINESS.phone}
                </a>
                <Link to="/contact" className="btn-outline">
                  Request an Estimate <IconArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="pb-24">
        <div className="container-x">
          <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
            <iframe
              title={`APM Arizona Electric LLC service area map for ${l.city}, AZ`}
              src={BUSINESS.mapEmbed}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>
    </>
  );
}
