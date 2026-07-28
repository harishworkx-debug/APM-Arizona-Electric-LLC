import { createFileRoute, Link } from "@tanstack/react-router";
import { BUSINESS, SITE, abs, breadcrumbSchema } from "@/lib/business";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { IconPhone, IconArrowRight, IconCheck, IconShield, IconStar, IconHome } from "@/components/site/Icons";

const ABOUT_TITLE = "About Our Family-Owned Electricians | APM Arizona Electric LLC";
const ABOUT_DESC =
  "Meet APM Arizona Electric LLC, a family-owned, licensed electrical contractor in Tempe, AZ inspired by the legacy of Andres Portillo Marin and serving the Phoenix Metro Area.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: ABOUT_TITLE },
      { name: "description", content: ABOUT_DESC },
      { property: "og:title", content: ABOUT_TITLE },
      { property: "og:description", content: ABOUT_DESC },
      { property: "og:url", content: abs("/about") },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: ABOUT_TITLE },
      { name: "twitter:description", content: ABOUT_DESC },
    ],
    links: [{ rel: "canonical", href: abs("/about") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${SITE.url}/#organization`,
          name: BUSINESS.name,
          url: SITE.url,
          telephone: BUSINESS.phoneSchema,
          email: BUSINESS.email,
          address: {
            "@type": "PostalAddress",
            streetAddress: BUSINESS.street,
            addressLocality: BUSINESS.addressLocality,
            addressRegion: "AZ",
            postalCode: BUSINESS.postalCode,
            addressCountry: "US",
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])),
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const values = [
    { icon: IconShield, t: "Honesty", d: "Every estimate is upfront and every fix is explained plainly." },
    { icon: IconStar, t: "Quality Workmanship", d: "Code-compliant work you'd want in your own family's home." },
    { icon: IconHome, t: "Family Owned", d: "We're not a franchise — we're a family with your back." },
    { icon: IconCheck, t: "Customer First", d: "We do what we say, when we say, at the price we quoted." },
  ];
  return (
    <>
      <section className="relative pt-40 pb-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=2000&q=70" alt="Electrician team" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.14 0.05 265 / 0.92), oklch(0.22 0.04 260 / 0.7))" }} />
        </div>
        <div className="container-x relative">
          <Reveal><Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} /></Reveal>
          <Reveal delay={0.05}><span className="mt-6 eyebrow bg-white/10 border-white/20 text-white">Our Story</span></Reveal>
          <Reveal delay={0.1}><h1 className="mt-6 text-5xl md:text-7xl font-bold max-w-4xl leading-[1.05]">A family business, born from <span className="text-gradient-primary">a lineman's legacy</span>.</h1></Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.2fr] items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/10 rounded-3xl blur-2xl" />
              <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1400&q=70" alt="Legacy" loading="lazy" className="relative rounded-3xl w-full aspect-[4/5] object-cover shadow-elegant" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <span className="eyebrow">In Memory of Andres Portillo Marin</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-secondary">40 years on the lines. A lifetime of integrity.</h2>
              <div className="mt-6 space-y-5 text-muted-foreground text-lg leading-relaxed">
                <p>APM Arizona Electric LLC was founded in memory of Andres Portillo Marin — a dedicated utility lineman who proudly served the electrical industry from 1962 to 2002.</p>
                <p>His family created this company to continue his vision: delivering honest, dependable and affordable electrical services to Arizona homeowners and businesses.</p>
                <p>Every job we take on carries his standard. If it wouldn't have passed his inspection, it doesn't leave our truck.</p>
              </div>
              <a href={BUSINESS.phoneHref} className="mt-8 btn-primary inline-flex"><IconPhone className="h-4 w-4" /> {BUSINESS.phone}</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x grid gap-8 md:grid-cols-2">
          <Reveal><div className="rounded-3xl bg-white border border-border p-10"><span className="eyebrow">Mission</span><h3 className="mt-3 text-2xl font-bold text-secondary">Powering Phoenix with integrity.</h3><p className="mt-3 text-muted-foreground">Deliver electrical work that's safe, code-compliant, and priced fairly — treating every home and business like our own.</p></div></Reveal>
          <Reveal delay={0.1}><div className="rounded-3xl bg-secondary text-white p-10"><span className="eyebrow bg-white/10 border-white/20 text-white">Vision</span><h3 className="mt-3 text-2xl font-bold">The most trusted electricians in Arizona.</h3><p className="mt-3 text-white/70">Build a company that carries Andres's name — and his standards — into the next generation of the Valley.</p></div></Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal><span className="eyebrow">Our Values</span></Reveal>
            <Reveal delay={0.1}><h2 className="mt-4 text-4xl md:text-5xl font-bold text-secondary">What we stand for.</h2></Reveal>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 0.05}>
                <div className="h-full rounded-3xl bg-white border border-border p-8 hover:-translate-y-1 hover:shadow-elegant transition-all">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 text-secondary"><v.icon className="h-5 w-5" /></div>
                  <h3 className="mt-5 text-lg font-bold text-secondary">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x text-center max-w-3xl mx-auto">
          <Reveal><h2 className="text-4xl md:text-5xl font-bold text-secondary">Ready to work with a team that cares?</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-4 text-muted-foreground text-lg">We'd love to earn your trust. Call, message, or request a free estimate.</p></Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={BUSINESS.phoneHref} className="btn-primary"><IconPhone className="h-4 w-4" /> {BUSINESS.phone}</a>
              <Link to="/contact" className="btn-dark">Free Estimate <IconArrowRight className="h-4 w-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
