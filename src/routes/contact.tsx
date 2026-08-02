import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BUSINESS, SITE, abs, breadcrumbSchema } from "@/lib/business";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import { IconPhone, IconWhatsapp, IconMail, IconMapPin, IconClock, IconCheck, IconArrowRight } from "@/components/site/Icons";

const CONTACT_TITLE = "Contact Our Phoenix Electricians | APM Arizona Electric LLC";
const CONTACT_DESC =
  "Contact APM Arizona Electric LLC in Tempe, AZ. Call (480) 790-4269, message us on WhatsApp or request a free written estimate for electrical work across the Phoenix Metro Area.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: CONTACT_TITLE },
      { name: "description", content: CONTACT_DESC },
      { property: "og:title", content: CONTACT_TITLE },
      { property: "og:description", content: CONTACT_DESC },
      { property: "og:url", content: abs("/contact") },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: CONTACT_TITLE },
      { name: "twitter:description", content: CONTACT_DESC },
    ],
    links: [{ rel: "canonical", href: abs("/contact") }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: abs("/contact"),
          about: { "@type": "ElectricalContractor", "@id": `${SITE.url}/#business`, name: BUSINESS.name, telephone: BUSINESS.phoneSchema },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const msg = `New estimate request:%0A%0AName: ${data.get("name")}%0APhone: ${data.get("phone")}%0AService: ${data.get("service")}%0AMessage: ${data.get("message")}`;
    window.open(`${BUSINESS.whatsapp}?text=${msg}`, "_blank");
    setSubmitted(true);
  };

  return (
    <>
      <section className="relative pt-40 pb-20 text-white overflow-hidden" style={{ background: "linear-gradient(135deg, oklch(0.14 0.05 265), oklch(0.22 0.04 260))" }}>
        <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 20% 30%, oklch(0.78 0.17 70 / 0.35), transparent 50%)" }} />
        <div className="container-x relative">
          <Reveal><span className="eyebrow bg-white/10 border-white/20 text-white">Get in Touch</span></Reveal>
          <Reveal delay={0.1}><h1 className="mt-6 text-5xl md:text-7xl font-bold max-w-4xl leading-[1.05]">Let's <span className="text-gradient-primary">talk power</span>.</h1></Reveal>
          <Reveal delay={0.2}><p className="mt-6 text-white/80 text-lg max-w-2xl">Call, message on WhatsApp, or send the form. A licensed electrician will get right back to you.</p></Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="rounded-3xl bg-white border border-border p-8 md:p-10 shadow-elegant">
              <h2 className="text-2xl font-bold text-secondary">Request a Free Estimate</h2>
              <p className="mt-2 text-muted-foreground text-sm">We'll respond within a business hour.</p>
              {submitted ? (
                <div className="mt-8 rounded-2xl bg-primary/15 p-6 flex gap-4 items-start">
                  <IconCheck className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-secondary">Sent via WhatsApp!</div>
                    <p className="text-sm text-muted-foreground mt-1">If it didn't open, please call {BUSINESS.phone} directly.</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <input required name="name" placeholder="Your name" className="w-full rounded-xl border border-border bg-surface px-4 py-3.5 focus:outline-none focus:border-primary" />
                    <input required name="phone" type="tel" placeholder="Phone number" className="w-full rounded-xl border border-border bg-surface px-4 py-3.5 focus:outline-none focus:border-primary" />
                  </div>
                  <input name="email" type="email" placeholder="Email (optional)" className="w-full rounded-xl border border-border bg-surface px-4 py-3.5 focus:outline-none focus:border-primary" />
                  <select required name="service" className="w-full rounded-xl border border-border bg-surface px-4 py-3.5 focus:outline-none focus:border-primary">
                    <option value="">Select a service</option>
                    <option>Residential Electrical</option>
                    <option>Commercial Electrical</option>
                    <option>Ceiling Fan Installation</option>
                    <option>Light Fixture Installation</option>
                    <option>Circuit Breaker Repair</option>
                    <option>Emergency Service</option>
                    <option>Other</option>
                  </select>
                  <textarea required name="message" rows={5} placeholder="Tell us about the electrical work…" className="w-full rounded-xl border border-border bg-surface px-4 py-3.5 focus:outline-none focus:border-primary resize-none" />
                  <button type="submit" className="btn-primary mt-2 justify-center">Send via WhatsApp <IconArrowRight className="h-4 w-4" /></button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              <a href={BUSINESS.phoneHref} className="flex items-center gap-4 rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-secondary p-6 shadow-elegant hover:-translate-y-0.5 transition-transform">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-primary"><IconPhone className="h-6 w-6" /></div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] font-semibold opacity-70">Call Now</div>
                  <div className="text-2xl font-bold">{BUSINESS.phone}</div>
                </div>
              </a>
              <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl bg-whatsapp text-white p-6 hover:-translate-y-0.5 transition-transform">
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15"><IconWhatsapp className="h-6 w-6" /></div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] font-semibold opacity-80">WhatsApp</div>
                  <div className="text-xl font-bold">Chat with us</div>
                </div>
              </a>
              <div className="rounded-2xl bg-white border border-border p-6">
                <div className="flex items-center gap-3"><IconClock className="h-5 w-5 text-primary" /><h3 className="font-bold text-secondary">Business Hours</h3></div>
                <ul className="mt-4 space-y-2 text-sm">
                  {BUSINESS.hours.map((h) => (
                    <li key={h.d} className="flex justify-between border-b border-border pb-2 last:border-none last:pb-0">
                      <span className="text-muted-foreground">{h.d}</span>
                      <span className="font-semibold text-secondary">{h.h}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-white border border-border p-6">
                <div className="flex items-center gap-3"><IconMapPin className="h-5 w-5 text-primary" /><h3 className="font-bold text-secondary">Service Area</h3></div>
                <p className="mt-3 text-sm text-muted-foreground">Phoenix, Mesa, Scottsdale, Tempe, Chandler, Glendale and the entire Phoenix Metro Area.</p>
              </div>
              <div className="rounded-2xl bg-white border border-border p-6">
                <div className="flex items-center gap-3"><IconMail className="h-5 w-5 text-primary" /><h3 className="font-bold text-secondary">Email</h3></div>
                <a href={`mailto:${BUSINESS.email}`} className="mt-3 text-sm text-accent hover:underline block">{BUSINESS.email}</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
            <iframe
              title="APM Arizona Electric LLC on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3412478.3658121596!2d-117.31996582528662!3d33.35805185784505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b0f0f2af0a919%3A0x97952056a9736ef4!2sApm%20Arizona%20Electric%20LLC!5e0!3m2!1sen!2sin!4v1784981145048!5m2!1sen!2sin"
              width="100%" height="500" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </section>
    </>
  );
}
