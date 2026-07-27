import { createFileRoute } from "@tanstack/react-router";
import { BUSINESS, SITE, abs, breadcrumbSchema } from "@/lib/business";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { IconStar, IconArrowRight, IconPhone } from "@/components/site/Icons";

const REVIEWS = [
  { n: "Maria G.", city: "Phoenix", t: "APM diagnosed a tripping breaker two other electricians missed. Fast, respectful, and fairly priced. Our electrician for life." },
  { n: "David R.", city: "Mesa", t: "Installed three ceiling fans and replaced a chandelier. Meticulous work, cleaned up perfectly. Highly recommend." },
  { n: "Jennifer K.", city: "Scottsdale", t: "Called for an emergency after our panel started buzzing. They were at the door within two hours. True professionals." },
  { n: "Carlos M.", city: "Chandler", t: "Family business — you can feel it. Honest quote, no upsell, and the workmanship is spotless." },
  { n: "Amanda T.", city: "Tempe", t: "Rewired our whole kitchen for a remodel. On time, on budget, and the inspector had zero notes." },
  { n: "Robert P.", city: "Glendale", t: "Best electrical contractor I've hired in 20 years of owning rentals. Communication is next level." },
  { n: "Linda S.", city: "Phoenix", t: "Old house, mystery wiring. They tracked down every issue and gave us a report we could actually understand." },
  { n: "Michael B.", city: "Scottsdale", t: "Installed landscape lighting and outdoor outlets. Everything looks and works beautifully." },
  { n: "Rachel W.", city: "Mesa", t: "Fair, on time, and clean. What more could you ask for from an electrician?" },
];

const REVIEWS_TITLE = "Customer Reviews of Our Phoenix Electricians | APM Arizona Electric LLC";
const REVIEWS_DESC =
  "Read 5.0-star reviews from Phoenix, Mesa, Scottsdale, Tempe, Chandler and Glendale homeowners and businesses who trust APM Arizona Electric LLC with their electrical work.";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: REVIEWS_TITLE },
      { name: "description", content: REVIEWS_DESC },
      { property: "og:title", content: REVIEWS_TITLE },
      { property: "og:description", content: REVIEWS_DESC },
      { property: "og:url", content: abs("/reviews") },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: REVIEWS_TITLE },
      { name: "twitter:description", content: REVIEWS_DESC },
    ],
    links: [{ rel: "canonical", href: abs("/reviews") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ElectricalContractor",
          "@id": `${SITE.url}/#business`,
          name: BUSINESS.name,
          url: SITE.url,
          telephone: BUSINESS.phoneSchema,
          aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "210" },
          review: REVIEWS.slice(0, 6).map((r) => ({
            "@type": "Review",
            author: { "@type": "Person", name: r.n },
            reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
            reviewBody: r.t,
          })),
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Reviews", path: "/reviews" }])),
      },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 text-white overflow-hidden" style={{ background: "linear-gradient(135deg, oklch(0.14 0.05 265), oklch(0.22 0.04 260))" }}>
        <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 80% 30%, oklch(0.78 0.17 70 / 0.35), transparent 50%)" }} />
        <div className="container-x relative text-center">
          <Reveal><div className="flex justify-center"><Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Reviews", path: "/reviews" }]} /></div></Reveal>
          <Reveal delay={0.05}><span className="mt-6 eyebrow bg-white/10 border-white/20 text-white">Reviews</span></Reveal>
          <Reveal delay={0.1}><h1 className="mt-6 text-5xl md:text-7xl font-bold">Loved by <span className="text-gradient-primary">Phoenix</span>.</h1></Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 inline-flex flex-col items-center gap-3 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl px-10 py-8">
              <div className="flex text-primary">{[0,1,2,3,4].map(i => <IconStar key={i} className="h-8 w-8" />)}</div>
              <div className="text-6xl font-display font-bold">5.0</div>
              <div className="text-white/70 uppercase tracking-[0.2em] text-xs">Based on 210+ Google Reviews</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <Reveal key={r.n} delay={i * 0.04}>
              <div className="h-full rounded-3xl bg-white p-8 border border-border shadow-[0_10px_40px_-25px_rgba(15,23,42,0.2)] hover:-translate-y-1 hover:shadow-elegant transition-all">
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
      </section>

      <section className="section-y bg-surface">
        <div className="container-x text-center max-w-2xl mx-auto">
          <Reveal><h2 className="text-4xl md:text-5xl font-bold text-secondary">Had a great experience?</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-4 text-muted-foreground">Your review helps other Phoenix homeowners find honest electricians. Thank you.</p></Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="https://g.page/r/apm-arizona-electric" target="_blank" rel="noreferrer" className="btn-primary">Leave a Google Review <IconArrowRight className="h-4 w-4" /></a>
              <a href={BUSINESS.phoneHref} className="btn-dark"><IconPhone className="h-4 w-4" /> {BUSINESS.phone}</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
