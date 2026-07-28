import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { BUSINESS, SERVICES, LOCATIONS, FAQS, INDUSTRIES, STATS, SITE, abs, localBusinessSchema, faqSchema, breadcrumbSchema } from "@/lib/business";
import { Reveal } from "@/components/site/Reveal";
import {
  IconPhone, IconArrowRight, IconStar, IconCheck, IconShield, IconBolt,
  IconHome, IconBuilding, IconFan, IconLightbulb, IconWrench, IconSparkle, IconClock, IconMapPin,
} from "@/components/site/Icons";

const HERO = "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=2000&q=70";

const HOME_TITLE = "Electrician in Phoenix, AZ | APM Arizona Electric LLC";
const HOME_DESC =
  "Licensed residential and commercial electricians serving Phoenix, Tempe, Mesa, Scottsdale, Chandler and Glendale, AZ. Panel upgrades, rewiring, lighting, ceiling fans and breaker repair. Call +1 (480) 619-0510 for a free estimate.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: HOME_DESC },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: HOME_DESC },
      { property: "og:image", content: HERO },
      { property: "og:url", content: abs("/") },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: HERO },
      { name: "twitter:title", content: HOME_TITLE },
      { name: "twitter:description", content: HOME_DESC },
    ],
    links: [
      { rel: "canonical", href: abs("/") },
      { rel: "preload", as: "image", href: HERO, fetchpriority: "high" },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(localBusinessSchema()) },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "@id": `${SITE.url}/#website`,
          url: SITE.url,
          name: BUSINESS.name,
          publisher: { "@id": `${SITE.url}/#business` },
        }),
      },
      { type: "application/ld+json", children: JSON.stringify(faqSchema(FAQS)) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema([{ name: "Home", path: "/" }])) },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <LocalIntro />
      <WhyChoose />
      <ServicesGrid />
      <Stats />
      <ResVsCom />
      <Industries />
      <Process />
      <Gallery />
      <SafetyTips />
      <Testimonials />
      <EmergencyBanner />
      <ServiceAreas />
      <FAQ />
      <FinalCTA />
      <MapSection />
    </>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden text-white">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={HERO} alt="Licensed electrician working on a residential electrical panel in Phoenix, Arizona" className="h-full w-full object-cover" fetchPriority="high" />
      </motion.div>
      <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.14 0.05 265 / 0.92) 0%, oklch(0.22 0.04 260 / 0.75) 60%, oklch(0.22 0.04 260 / 0.4) 100%)" }} />
      <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 80% 20%, oklch(0.78 0.17 70 / 0.35), transparent 40%)" }} />

      <div className="container-x relative z-10 flex min-h-[100svh] w-full max-w-full items-center pt-28 pb-44 md:pb-40">
        <div className="w-full max-w-3xl">
          <Reveal>
            <span className="eyebrow bg-white/10 border-white/20 text-white max-w-full">
              <IconBolt className="h-3.5 w-3.5 shrink-0 text-primary" /> Licensed · Insured · Family-Owned
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-[2rem] sm:text-4xl md:text-7xl font-bold leading-[1.08] md:leading-[1.02] tracking-tight">
              Trusted Electricians <br className="hidden md:block" />
              Serving <span className="text-gradient-primary">Phoenix, Arizona</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-2xl text-base sm:text-lg md:text-xl text-white/80 leading-relaxed">
              Professional residential & commercial electrical services backed by honest workmanship and family values — inspired by the legacy of a lineman who served the industry for 40 years.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex w-full flex-wrap gap-3 sm:gap-4">
              <a href={BUSINESS.phoneHref} className="btn-primary w-full max-w-full sm:w-auto">
                <IconPhone className="h-4 w-4 shrink-0" /> Call Now · {BUSINESS.phone}
              </a>
              <Link to="/contact" className="btn-outline w-full max-w-full sm:w-auto">
                Request Free Estimate <IconArrowRight className="h-4 w-4 shrink-0" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-white/80">
              <div className="flex items-center gap-2"><div className="flex text-primary">{[0,1,2,3,4].map(i => <IconStar key={i} className="h-4 w-4" />)}</div><span>5.0 · 210+ Reviews</span></div>
              <div className="flex items-center gap-2"><IconShield className="h-4 w-4 text-primary" /> Fully Licensed</div>
              <div className="flex items-center gap-2"><IconClock className="h-4 w-4 text-primary" /> Same-Day Service</div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Stats card overlay */}
      <div className="absolute inset-x-0 bottom-0 z-10 pb-24 md:pb-12">
        <div className="container-x">
          <Reveal delay={0.5}>
            <div className="glass-card grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden bg-white/70">
              {[
                { n: "1,200+", l: "Projects Completed" },
                { n: "950+", l: "Happy Customers" },
                { n: "40+", l: "Years of Legacy" },
                { n: "24/7", l: "Emergency Calls" },
              ].map((s) => (
                <div key={s.l} className="bg-white/80 p-6 md:p-8 text-center">
                  <div className="font-display text-3xl md:text-4xl font-bold text-secondary">{s.n}</div>
                  <div className="mt-1 text-xs md:text-sm uppercase tracking-widest text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const badges = ["Licensed Electricians", "Family Owned", "Affordable Pricing", "Fast Response", "5-Star Rated"];
  return (
    <section className="py-10 bg-surface border-y border-border">
      <div className="container-x flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm font-medium text-muted-foreground">
        {badges.map((b) => (
          <div key={b} className="flex items-center gap-2"><IconCheck className="h-4 w-4 text-primary" /> {b}</div>
        ))}
      </div>
    </section>
  );
}

function WhyChoose() {
  const items = [
    { icon: IconShield, t: "Licensed & Insured", d: "Fully credentialed Arizona electrical contractor. Every job is code-compliant and permitted when required." },
    { icon: IconBolt, t: "Honest Pricing", d: "Upfront estimates before we start. No surprises, no upsells, no hidden fees — ever." },
    { icon: IconClock, t: "Fast Response", d: "Same-day appointments and 24/7 emergency service across the Phoenix Metro Area." },
    { icon: IconStar, t: "5-Star Workmanship", d: "210+ five-star reviews from Phoenix homeowners and businesses who trust our work." },
    { icon: IconHome, t: "Family Owned", d: "Built on the legacy of Andres Portillo Marin. We treat every customer like family." },
    { icon: IconSparkle, t: "Clean & Respectful", d: "Shoe covers, drop cloths and tidy work areas. We leave your space cleaner than we found it." },
  ];
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal><span className="eyebrow">Why Choose Us</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-4xl md:text-5xl font-bold text-secondary">Electricians you can actually trust.</h2></Reveal>
          <Reveal delay={0.15}><p className="mt-4 text-muted-foreground text-lg">We built APM Arizona Electric on the same principles a lineman lived by: show up, do it right, tell the truth.</p></Reveal>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.05}>
              <div className="group h-full rounded-3xl border border-border bg-white p-8 shadow-[0_10px_40px_-25px_rgba(15,23,42,0.25)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-25px_rgba(15,23,42,0.3)] hover:border-primary/30">
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 text-secondary transition-transform group-hover:scale-110 group-hover:rotate-3">
                  <it.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-secondary">{it.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const ICON_MAP: Record<string, typeof IconHome> = {
  "residential-electrical": IconHome,
  "commercial-electrical": IconBuilding,
  "ceiling-fan-installation": IconFan,
  "light-fixture-installation": IconLightbulb,
  "circuit-breaker-repairs": IconBolt,
  "kitchen-electrical-repairs": IconSparkle,
  "electrical-maintenance": IconShield,
  "electrical-troubleshooting": IconWrench,
};

function ServicesGrid() {
  return (
    <section id="services" className="section-y bg-surface">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal><span className="eyebrow">Our Services</span></Reveal>
            <Reveal delay={0.1}><h2 className="mt-4 text-4xl md:text-5xl font-bold text-secondary">Full-service electrical, done right.</h2></Reveal>
          </div>
          <Reveal delay={0.15}>
            <Link to="/services" className="btn-dark self-start">View All Services <IconArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            const Icon = ICON_MAP[s.slug] ?? IconBolt;
            return (
              <Reveal key={s.slug} delay={i * 0.04}>
                <Link to="/$slug" params={{ slug: s.slug }} className="group block h-full">
                  <div className="relative h-full overflow-hidden rounded-3xl bg-white border border-border shadow-[0_10px_40px_-25px_rgba(15,23,42,0.2)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-25px_rgba(15,23,42,0.35)]">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/20 to-transparent" />
                      <div className="absolute top-4 left-4 grid h-11 w-11 place-items-center rounded-2xl bg-white/95 backdrop-blur text-secondary">
                        <Icon className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-secondary text-lg leading-snug group-hover:text-primary transition-colors">{s.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{s.short}</p>
                      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all">
                        {s.navLabel ?? s.title} <IconArrowRight className="h-4 w-4 shrink-0" />
                      </div>
                    </div>

                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ResVsCom() {
  const cards = [
    { icon: IconHome, tag: "Residential", title: "For Your Home", items: ["Whole-home rewires", "Panel upgrades", "Ceiling fans & lighting", "GFCI & AFCI protection", "Smart home wiring"], img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=70" },
    { icon: IconBuilding, tag: "Commercial", title: "For Your Business", items: ["Tenant improvements", "Office & retail lighting", "Emergency response", "Preventive maintenance", "Code compliance"], img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=70" },
  ];
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal><span className="eyebrow">Residential vs Commercial</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-4xl md:text-5xl font-bold text-secondary">Wherever the power flows, we serve.</h2></Reveal>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {cards.map((c, i) => (
            <Reveal key={c.tag} delay={i * 0.1}>
              <div className="group relative overflow-hidden rounded-3xl h-[480px]">
                <img src={c.img} alt={c.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-secondary/10" />
                <div className="relative h-full flex flex-col justify-end p-8 md:p-10 text-white">
                  <div className="inline-flex items-center gap-2 self-start rounded-full bg-primary/90 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary">
                    <c.icon className="h-4 w-4" /> {c.tag}
                  </div>
                  <h3 className="mt-4 text-3xl md:text-4xl font-bold">{c.title}</h3>
                  <ul className="mt-6 grid grid-cols-1 gap-2">
                    {c.items.map((it) => (
                      <li key={it} className="flex items-center gap-2 text-white/90"><IconCheck className="h-4 w-4 text-primary shrink-0" /> {it}</li>
                    ))}
                  </ul>
                  <a href={BUSINESS.phoneHref} className="mt-8 btn-primary self-start"><IconPhone className="h-4 w-4" /> {BUSINESS.phone}</a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Call or Request", d: "Reach us by phone, WhatsApp or web form. We answer fast and schedule same-day when possible." },
    { n: "02", t: "Free Estimate", d: "A licensed electrician assesses the work and gives you a clear, honest, written estimate — no pressure." },
    { n: "03", t: "Quality Workmanship", d: "We show up on time, do the work right, keep it clean and pull permits when required." },
    { n: "04", t: "Follow-Up & Guarantee", d: "We stand behind every job with a workmanship guarantee and a phone number you can actually reach." },
  ];
  return (
    <section className="section-y bg-secondary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ background: "radial-gradient(circle at 90% 10%, oklch(0.78 0.17 70 / 0.25), transparent 40%)" }} />
      <div className="container-x relative">
        <div className="max-w-2xl">
          <Reveal><span className="eyebrow bg-white/10 border-white/20 text-white">Our Process</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-4xl md:text-5xl font-bold">Simple, transparent, no runaround.</h2></Reveal>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08}>
              <div className="relative rounded-3xl bg-white/5 border border-white/10 p-7 backdrop-blur-md h-full">
                <div className="text-5xl font-display font-bold text-primary">{s.n}</div>
                <h3 className="mt-4 text-xl font-bold">{s.t}</h3>
                <p className="mt-3 text-white/70 text-sm leading-relaxed">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const imgs = [
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=70",
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=70",
    "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=70",
    "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=1200&q=70",
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=70",
    "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=70",
  ];
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal><span className="eyebrow">Featured Projects</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-4xl md:text-5xl font-bold text-secondary">Recent work across the Valley.</h2></Reveal>
        </div>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {imgs.map((src, i) => (
            <Reveal key={src} delay={i * 0.05}>
              <div className={`overflow-hidden rounded-3xl ${i === 0 || i === 4 ? "md:row-span-2 md:aspect-[3/4]" : "aspect-square"}`}>
                <img src={src} alt="APM Arizona Electric featured electrical project" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function SafetyTips() {
  const tips = [
    { t: "Never ignore repeated breaker trips", d: "It's your panel telling you something is wrong. Call us before it becomes a fire." },
    { t: "Watch for warm outlets or switches", d: "Heat at a device is a serious warning sign of loose or overloaded connections." },
    { t: "Test GFCIs monthly", d: "Kitchens, baths, garages and outdoor outlets need working ground-fault protection." },
    { t: "Don't chain power strips", d: "Overloading a circuit is the #1 avoidable cause of residential electrical fires." },
  ];
  return (
    <section className="section-y bg-surface">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/10 blur-2xl" />
            <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=70" alt="Electrical safety inspection" loading="lazy" className="relative rounded-3xl w-full aspect-[4/5] object-cover shadow-elegant" />
          </div>
        </Reveal>
        <div>
          <Reveal><span className="eyebrow">Safety Tips</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-4xl md:text-5xl font-bold text-secondary">Simple habits that prevent big problems.</h2></Reveal>
          <div className="mt-8 space-y-5">
            {tips.map((t, i) => (
              <Reveal key={t.t} delay={0.1 + i * 0.05}>
                <div className="flex gap-4 rounded-2xl bg-white p-5 border border-border">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-secondary"><IconShield className="h-5 w-5" /></div>
                  <div>
                    <h3 className="font-bold text-secondary">{t.t}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{t.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { n: "Maria G.", city: "Phoenix", t: "APM diagnosed a tripping breaker two other electricians missed. Fast, respectful, and fairly priced. This is our electrician for life." },
    { n: "David R.", city: "Mesa", t: "Installed three ceiling fans and replaced a chandelier. Meticulous work, cleaned up perfectly. Highly recommend." },
    { n: "Jennifer K.", city: "Scottsdale", t: "Called for an emergency after our panel started buzzing. They were at the door within two hours. True professionals." },
    { n: "Carlos M.", city: "Chandler", t: "Family business you can feel it. Honest quote, no upsell, and the workmanship is spotless." },
    { n: "Amanda T.", city: "Tempe", t: "Rewired our whole kitchen for a remodel. On time, on budget, and the inspector had zero notes. Amazing." },
    { n: "Robert P.", city: "Glendale", t: "Best electrical contractor I've hired in 20 years of owning rentals. Communication is next level." },
  ];
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal><span className="eyebrow">Customer Reviews</span></Reveal>
            <Reveal delay={0.1}><h2 className="mt-4 text-4xl md:text-5xl font-bold text-secondary">Phoenix trusts APM Arizona.</h2></Reveal>
          </div>
          <Reveal delay={0.15}>
            <div className="flex items-center gap-4 rounded-2xl bg-secondary text-white px-6 py-4">
              <div className="flex text-primary">{[0,1,2,3,4].map(i => <IconStar key={i} className="h-5 w-5" />)}</div>
              <div>
                <div className="font-bold text-xl">5.0 · 210+ Reviews</div>
                <div className="text-xs uppercase tracking-widest text-white/60">Google Verified</div>
              </div>
            </div>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.n} delay={i * 0.05}>
              <div className="h-full rounded-3xl bg-white p-8 border border-border shadow-[0_10px_40px_-25px_rgba(15,23,42,0.2)]">
                <div className="flex text-primary mb-4">{[0,1,2,3,4].map(k => <IconStar key={k} className="h-4 w-4" />)}</div>
                <p className="text-secondary leading-relaxed">"{r.t}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-secondary font-bold">{r.n[0]}</div>
                  <div>
                    <div className="font-semibold text-secondary">{r.n}</div>
                    <div className="text-xs text-muted-foreground">{r.city}, AZ</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function EmergencyBanner() {
  return (
    <section className="py-16 relative overflow-hidden" style={{ background: "linear-gradient(120deg, oklch(0.22 0.04 260), oklch(0.16 0.05 265))" }}>
      <div className="absolute inset-0 opacity-50" style={{ background: "radial-gradient(circle at 30% 50%, oklch(0.78 0.17 70 / 0.35), transparent 50%)" }} />
      <div className="container-x relative flex flex-col md:flex-row items-center gap-8 text-white">
        <div className="flex-1">
          <div className="flex items-center gap-3 text-primary text-sm font-bold uppercase tracking-[0.2em]">
            <span className="relative flex h-2.5 w-2.5"><span className="absolute inset-0 animate-ping rounded-full bg-primary/60" /><span className="relative rounded-full h-2.5 w-2.5 bg-primary" /></span>
            24/7 Emergency Service
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Electrical emergency? We're here.</h2>
          <p className="mt-2 text-white/70 max-w-xl">Power out, burning smell, sparks or exposed wiring — call now and we'll dispatch a licensed electrician immediately.</p>
        </div>
        <a href={BUSINESS.phoneHref} className="btn-primary text-base px-8 py-4"><IconPhone className="h-5 w-5" /> {BUSINESS.phone}</a>
      </div>
    </section>
  );
}

function ServiceAreas() {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal><span className="eyebrow">Service Areas</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-4xl md:text-5xl font-bold text-secondary">Proudly serving the Valley.</h2></Reveal>
        </div>
        <div className="mt-14 grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3 [&>*]:min-w-0">
          {LOCATIONS.map((l, i) => (
            <Reveal key={l.slug} delay={i * 0.04}>
              <Link to="/$slug" params={{ slug: l.slug }} className="group flex w-full min-w-0 items-center gap-4 rounded-3xl border border-border bg-white p-5 sm:p-6 transition-all hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-25px_rgba(15,23,42,0.3)] hover:border-primary/40">
                <div className="grid h-12 w-12 sm:h-14 sm:w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 text-secondary"><IconMapPin className="h-6 w-6" /></div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-bold text-secondary">{l.city === "Phoenix" ? "Electrician Phoenix, AZ" : `${l.city}, AZ`}</h3>
                  <p className="truncate text-sm text-muted-foreground">{l.blurb}</p>
                </div>
                <IconArrowRight className="h-5 w-5 text-primary shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section className="section-y bg-surface">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <Reveal><span className="eyebrow">FAQ</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-4xl md:text-5xl font-bold text-secondary">Questions? We've got answers.</h2></Reveal>
          <Reveal delay={0.15}><p className="mt-4 text-muted-foreground">Still curious? Give us a call — we're happy to talk through any electrical concern.</p></Reveal>
          <Reveal delay={0.2}>
            <a href={BUSINESS.phoneHref} className="mt-6 btn-dark inline-flex"><IconPhone className="h-4 w-4" /> {BUSINESS.phone}</a>
          </Reveal>
        </div>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <details className="group rounded-2xl bg-white p-6 border border-border open:shadow-[0_20px_50px_-25px_rgba(15,23,42,0.25)]">
                <summary className="flex items-center justify-between cursor-pointer list-none font-semibold text-secondary">
                  {f.q}
                  <span className="ml-4 grid h-8 w-8 place-items-center rounded-full bg-primary/15 text-secondary transition-transform group-open:rotate-45"><IconArrowRight className="h-4 w-4 rotate-[-45deg]" /></span>
                </summary>
                <p className="mt-3 text-muted-foreground leading-relaxed">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2.5rem] p-10 md:p-16 text-white" style={{ background: "linear-gradient(135deg, oklch(0.22 0.04 260), oklch(0.14 0.05 265))" }}>
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full" style={{ background: "radial-gradient(circle, oklch(0.78 0.17 70 / 0.4), transparent 70%)" }} />
          <div className="relative max-w-2xl">
            <span className="eyebrow bg-white/10 border-white/20 text-white">Ready When You Are</span>
            <h2 className="mt-5 text-4xl md:text-6xl font-bold leading-tight">Get a free estimate today.</h2>
            <p className="mt-4 text-white/70 text-lg">Whether it's a flickering light or a full commercial buildout — call, message or request an estimate. We'll take it from there.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={BUSINESS.phoneHref} className="btn-primary"><IconPhone className="h-4 w-4" /> {BUSINESS.phone}</a>
              <Link to="/contact" className="btn-outline">Request Free Estimate <IconArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <section className="py-16" style={{ background: "linear-gradient(135deg, oklch(0.22 0.04 260), oklch(0.14 0.05 265))" }}>
      <div className="container-x grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-white">
        {STATS.map((s, i) => (
          <Reveal key={s.l} delay={i * 0.06}>
            <div className="text-center">
              <div className="font-display text-5xl font-bold text-primary">{s.v}</div>
              <div className="mt-2 text-sm text-white/70">{s.l}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="section-y">
      <div className="container-x">
        <div className="max-w-2xl">
          <Reveal><span className="eyebrow">Industries We Serve</span></Reveal>
          <Reveal delay={0.1}><h2 className="mt-4 text-4xl md:text-5xl font-bold text-secondary">Commercial electricians who understand your business.</h2></Reveal>
          <Reveal delay={0.15}><p className="mt-4 text-muted-foreground text-lg">Every industry has its own load profile, code requirements and downtime tolerance. We plan around yours.</p></Reveal>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((it, i) => (
            <Reveal key={it.t} delay={i * 0.05}>
              <div className="h-full rounded-3xl border border-border bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-elegant">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/15 text-secondary"><IconBuilding className="h-5 w-5" /></div>
                <h3 className="mt-5 text-xl font-bold text-secondary">{it.t}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function LocalIntro() {
  return (
    <section className="section-y bg-surface">
      <div className="container-x grid gap-12 lg:grid-cols-2 items-start">
        <Reveal>
          <div>
            <span className="eyebrow">Phoenix Metro Electricians</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-bold text-secondary">Electrical work built for Arizona conditions.</h2>
            <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
              Arizona is hard on electrical systems. Attic temperatures over 150°F degrade insulation, monsoon storms drive surges through service entrances, and homes built for 1970s loads are now running two air conditioners, a pool pump and an EV charger. Our work accounts for all of it.
            </p>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              APM Arizona Electric LLC is based at {BUSINESS.address} and serves Phoenix, Tempe, Mesa, Scottsdale, Chandler and Glendale. Every job starts with a free written estimate, is performed by licensed and insured electricians, and is permitted and inspected wherever code requires it.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={BUSINESS.phoneHref} className="btn-primary"><IconPhone className="h-4 w-4" /> {BUSINESS.phone}</a>
              <Link to="/services" className="btn-dark">Browse Services <IconArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { t: "Licensed & Insured", d: "Arizona-licensed electrical contractor with full liability coverage.", i: IconShield },
              { t: "Upfront Pricing", d: "Written, itemized quotes before any work begins — no surprises.", i: IconCheck },
              { t: "Fast Local Response", d: "Same-day and next-day appointments across the Valley.", i: IconClock },
              { t: "Family Owned", d: "A local family business, not a national franchise call center.", i: IconHome },
            ].map((c) => (
              <div key={c.t} className="rounded-3xl border border-border bg-white p-6">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/15 text-secondary"><c.i className="h-5 w-5" /></div>
                <h3 className="mt-4 font-bold text-secondary">{c.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MapSection() {
  return (
    <section className="pb-20">
      <div className="container-x">
        <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
          <iframe
            title="APM Arizona Electric LLC on Google Maps"
            src={BUSINESS.mapEmbed}
            width="100%" height="500" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>
      </div>
    </section>
  );
}
