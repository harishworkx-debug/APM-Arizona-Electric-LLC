import { createFileRoute, Link } from "@tanstack/react-router";
import { BUSINESS, SITE, abs, breadcrumbSchema, LOCATIONS, SERVICES } from "@/lib/business";
import { REVIEWS } from "@/lib/reviews-data";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { IconPhone, IconArrowRight, IconCheck, IconShield, IconStar, IconHome, IconBolt, IconMapPin } from "@/components/site/Icons";

const ABOUT_TITLE = "About APM Arizona Electric LLC | Phoenix, AZ Electricians";
const ABOUT_DESC =
  "We are a family-owned electrical contractor providing residential and commercial electrical services, troubleshooting, and repairs across the Phoenix Metro Area.";

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
    { icon: IconShield, t: "Integrity", d: "Every estimate is upfront and every fix is explained plainly. No hidden fees." },
    { icon: IconStar, t: "Quality Workmanship", d: "We take pride in our craft, ensuring every wire is run cleanly and safely." },
    { icon: IconHome, t: "Customer First", d: "We respect your home like it's our own, with shoe covers and tidy work areas." },
    { icon: IconCheck, t: "Safety Priority", d: "We never cut corners. All Arizona electrical services meet or exceed local codes." },
  ];
  return (
    <>
      <section className="relative pt-40 pb-20 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=2000&q=70" alt="Electrician team" className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, oklch(0.14 0.05 265 / 0.92), oklch(0.22 0.04 260 / 0.7))" }} />
        </div>
        <div className="container-x relative text-center">
          <Reveal><div className="flex justify-center"><Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "About", path: "/about" }]} /></div></Reveal>
          <Reveal delay={0.05}><span className="mt-6 eyebrow bg-white/10 border-white/20 text-white">About APM Arizona Electric LLC</span></Reveal>
          <Reveal delay={0.1}><h1 className="mt-6 text-5xl md:text-7xl font-bold max-w-4xl mx-auto leading-[1.05]">Phoenix, AZ <span className="text-gradient-primary">Electricians</span></h1></Reveal>
          <Reveal delay={0.15}><p className="mt-6 text-xl text-white/80 font-medium">Family-Owned Electrical Contractor Serving Phoenix & the Valley</p></Reveal>
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
              <span className="eyebrow">Our Story: Andres Portillo Marin (1962–2002)</span>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-secondary">A family legacy built on 40 years of utility-line experience.</h2>
              <div className="mt-6 space-y-5 text-muted-foreground text-lg leading-relaxed">
                <p>APM Arizona Electric LLC was founded in memory of Andres Portillo Marin — a dedicated utility lineman who proudly served the electrical industry.</p>
                <p>That legacy of hard work, integrity, and safety forms the foundation of our company today. We are a real, local, family-owned electrical contractor providing residential and commercial electrical services across the Phoenix Metro Area.</p>
                <p>When you hire us, you are hiring highly trained electricians who provide clear pricing, honest assessments, and fully licensed workmanship.</p>
              </div>
              <a href={BUSINESS.phoneHref} className="mt-8 btn-primary inline-flex"><IconPhone className="h-4 w-4" /> {BUSINESS.phone}</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-y bg-surface">
        <div className="container-x grid gap-8 md:grid-cols-2">
          <Reveal><div className="rounded-3xl bg-white border border-border p-10 h-full"><span className="eyebrow">Our Mission</span><h3 className="mt-3 text-2xl font-bold text-secondary">Reliable electrical service for every homeowner.</h3><p className="mt-3 text-muted-foreground">To provide Arizona homeowners with safe, code-compliant, and long-lasting electrical repairs, ensuring every customer feels confident in their home's safety.</p></div></Reveal>
          <Reveal delay={0.1}><div className="rounded-3xl bg-secondary text-white p-10 h-full"><span className="eyebrow bg-white/10 border-white/20 text-white">Our Vision</span><h3 className="mt-3 text-2xl font-bold">The most trusted electricians in Arizona.</h3><p className="mt-3 text-white/70">To build an electrical contracting business that carries Andres's name — and his standards — into the next generation of the Valley.</p></div></Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal><span className="eyebrow">Our Values</span></Reveal>
            <Reveal delay={0.1}><h2 className="mt-4 text-4xl md:text-5xl font-bold text-secondary">Why Phoenix Homeowners Choose APM.</h2></Reveal>
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
        <div className="container-x grid gap-14 lg:grid-cols-2">
          <div>
            <Reveal><span className="eyebrow">Trust & Credentials</span></Reveal>
            <Reveal delay={0.1}><h2 className="mt-4 text-3xl md:text-4xl font-bold text-secondary">Licensed, Insured, and Verified.</h2></Reveal>
            <Reveal delay={0.2}>
              <div className="mt-6 space-y-4 text-lg text-muted-foreground">
                <p>We believe in complete transparency. Electrical work is not something to take lightly, and you deserve a verified contractor.</p>
                <ul className="space-y-3 mt-4">
                  <li className="flex items-center gap-3"><IconShield className="h-5 w-5 text-primary shrink-0" /> Fully Licensed in Arizona</li>
                  <li className="flex items-center gap-3"><IconShield className="h-5 w-5 text-primary shrink-0" /> Comprehensive Liability Insurance</li>
                  <li className="flex items-center gap-3"><IconShield className="h-5 w-5 text-primary shrink-0" /> Local Service Credentials</li>
                  <li className="flex items-center gap-3"><IconStar className="h-5 w-5 text-primary shrink-0" /> 5-Star Rated by Phoenix Homeowners</li>
                </ul>
              </div>
            </Reveal>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <Reveal delay={0.1}>
               <div className="rounded-3xl bg-white p-6 border border-border text-center h-full flex flex-col justify-center">
                 <IconBolt className="h-8 w-8 text-primary mx-auto mb-3" />
                 <div className="font-bold text-secondary">Residential Electrical Services</div>
               </div>
             </Reveal>
             <Reveal delay={0.2}>
               <div className="rounded-3xl bg-white p-6 border border-border text-center h-full flex flex-col justify-center">
                 <IconBolt className="h-8 w-8 text-primary mx-auto mb-3" />
                 <div className="font-bold text-secondary">Commercial Electrical Services</div>
               </div>
             </Reveal>
             <Reveal delay={0.3}>
               <div className="rounded-3xl bg-white p-6 border border-border text-center h-full flex flex-col justify-center">
                 <IconBolt className="h-8 w-8 text-primary mx-auto mb-3" />
                 <div className="font-bold text-secondary">Electrical Troubleshooting</div>
               </div>
             </Reveal>
             <Reveal delay={0.4}>
               <div className="rounded-3xl bg-white p-6 border border-border text-center h-full flex flex-col justify-center">
                 <IconBolt className="h-8 w-8 text-primary mx-auto mb-3" />
                 <div className="font-bold text-secondary">Electrical Panel Services</div>
               </div>
             </Reveal>
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto">
            <Reveal><span className="eyebrow">Areas We Serve</span></Reveal>
            <Reveal delay={0.1}><h2 className="mt-4 text-4xl md:text-5xl font-bold text-secondary">Serving the Phoenix Metro Area.</h2></Reveal>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
             {LOCATIONS.map((loc, i) => (
               <Reveal key={loc.slug} delay={i * 0.05}>
                  <Link to="/locations/$slug" params={{ slug: loc.slug }} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-surface border border-border hover:border-primary/50 transition-colors font-semibold text-secondary">
                    <IconMapPin className="h-4 w-4 text-primary" /> {loc.city}, AZ
                  </Link>
               </Reveal>
             ))}
          </div>
        </div>
      </section>

      <section className="section-y bg-secondary text-white">
        <div className="container-x text-center max-w-3xl mx-auto">
          <Reveal><h2 className="text-4xl md:text-5xl font-bold">Ready to work with a team that cares?</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-4 text-white/70 text-lg">Contact APM Arizona Electric for dependable electrical repairs today.</p></Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href={BUSINESS.phoneHref} className="btn-primary"><IconPhone className="h-4 w-4" /> {BUSINESS.phone}</a>
              <Link to="/contact" className="btn-outline border-white text-white hover:bg-white hover:text-secondary">Request Service <IconArrowRight className="h-4 w-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
