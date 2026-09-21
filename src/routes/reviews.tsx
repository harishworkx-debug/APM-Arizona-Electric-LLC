import { createFileRoute } from "@tanstack/react-router";
import { BUSINESS, SITE, abs, breadcrumbSchema } from "@/lib/business";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { IconArrowRight, IconPhone } from "@/components/site/Icons";

const REVIEWS_TITLE = "Homeowner Resources | APM Arizona Electric LLC";
const REVIEWS_DESC =
  "Residential electrical information for homeowners in Phoenix, Mesa, Scottsdale, Tempe, Chandler and Glendale, with connections to independent local providers.";

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
          "@type": "Organization",
          "@id": `${SITE.url}/#business`,
          name: BUSINESS.name,
          url: SITE.url,
          telephone: BUSINESS.phoneSchema,
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
          <Reveal delay={0.05}><span className="mt-6 eyebrow bg-white/10 border-white/20 text-white">Homeowner Resources</span></Reveal>
          <Reveal delay={0.1}><h1 className="mt-6 text-5xl md:text-7xl font-bold">Residential electrical help for <span className="text-gradient-primary">Phoenix</span>.</h1></Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 inline-flex flex-col items-center gap-3 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl px-10 py-8">
              <div className="text-2xl font-display font-bold">Connect with a local provider</div>
              <div className="text-white/70 uppercase tracking-[0.2em] text-xs">Residential service information</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Reveal><div className="rounded-3xl border border-border bg-white p-8"><h2 className="text-2xl font-bold text-secondary">Before you hire</h2><p className="mt-3 text-muted-foreground">Ask the independent provider about licensing, insurance, scope, pricing and availability before authorizing residential electrical work.</p></div></Reveal>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x text-center max-w-2xl mx-auto">
          <Reveal><h2 className="text-4xl md:text-5xl font-bold text-secondary">Need residential electrical help?</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-4 text-muted-foreground">Call or send a request to connect with an independent local provider.</p></Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="/contact" className="btn-primary">Request Connection <IconArrowRight className="h-4 w-4" /></a>
              <a href={BUSINESS.phoneHref} className="btn-dark"><IconPhone className="h-4 w-4" /> {BUSINESS.phone}</a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
