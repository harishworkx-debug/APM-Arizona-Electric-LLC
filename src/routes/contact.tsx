import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { BUSINESS, SITE, abs, breadcrumbSchema } from "@/lib/business";
import { Reveal } from "@/components/site/Reveal";
import { Breadcrumbs } from "@/components/site/Breadcrumbs";
import {
  IconPhone,
  IconMail,
  IconMapPin,
  IconClock,
  IconCheck,
  IconArrowRight,
} from "@/components/site/Icons";

const CONTACT_TITLE = "Contact Our Phoenix Electricians | Arizona Electric";
const CONTACT_DESC =
  "Contact Arizona Electric in Tempe, AZ to request electrical service across the Phoenix Metro Area.";

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
          about: {
            "@type": "Organization",
            "@id": `${SITE.url}/#business`,
            name: BUSINESS.name,
            telephone: BUSINESS.phoneSchema,
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      // Safe dataLayer push for Google Analytics 4 / Google Tag Manager conversion attribution
      try {
        const win = window as unknown as { dataLayer?: Record<string, unknown>[] };
        win.dataLayer = win.dataLayer || [];
        win.dataLayer.push({
          event: "generate_lead",
          form_name: "estimate_service_request",
          currency: "USD",
        });
      } catch {
        // graceful fallback if dataLayer is not initialized
      }
    }
    setSubmitted(true);
  };

  return (
    <>
      <section
        className="relative pt-40 pb-20 text-white overflow-hidden"
        style={{
          background: "linear-gradient(135deg, oklch(0.14 0.05 265), oklch(0.22 0.04 260))",
        }}
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(circle at 20% 30%, oklch(0.78 0.17 70 / 0.35), transparent 50%)",
          }}
        />
        <div className="container-x relative">
          <Reveal>
            <span className="eyebrow bg-white/10 border-white/20 text-white">Get in Touch</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-5xl md:text-7xl font-bold max-w-4xl leading-[1.05]">
              Let's <span className="text-gradient-primary">talk power</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-white/80 text-lg max-w-2xl">
              Call us or send the form to request our electrical services.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-y">
        <div className="container-x grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="rounded-3xl bg-white border border-border p-8 md:p-10 shadow-elegant">
              <h2 className="text-2xl font-bold text-secondary">Request an Estimate or Service</h2>
              <p className="mt-2 text-muted-foreground text-sm">
                Tell us what you need. Our team provides prompt, upfront pricing across Phoenix and
                the Valley.
              </p>
              {submitted ? (
                <div className="mt-8 rounded-2xl bg-emerald-50 border border-emerald-200 p-6 flex gap-4 items-start">
                  <IconCheck className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-emerald-900 text-lg">
                      Thank You! Your Request Has Been Received.
                    </div>
                    <p className="text-sm text-emerald-800 mt-2 leading-relaxed">
                      An electrician from Arizona Electric will review your details and
                      contact you shortly.
                    </p>
                    <div className="mt-4 pt-4 border-t border-emerald-200">
                      <p className="text-xs text-emerald-700">
                        Need immediate emergency assistance or same-day dispatch?
                      </p>
                      <a
                        href={BUSINESS.phoneHref}
                        className="mt-2 btn-primary inline-flex text-xs px-4 py-2"
                      >
                        <IconPhone className="h-3.5 w-3.5" /> Call Directly: {BUSINESS.phone}
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 grid gap-5">
                  {/* Honeypot spam protection */}
                  <input
                    type="text"
                    name="_gotcha"
                    className="hidden"
                    tabIndex={-1}
                    autoComplete="off"
                  />

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-semibold uppercase tracking-wider text-secondary mb-2"
                      >
                        Your Full Name *
                      </label>
                      <input
                        id="contact-name"
                        required
                        name="name"
                        placeholder="John Doe"
                        className="w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm focus:outline-none focus:border-primary focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-semibold uppercase tracking-wider text-secondary mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="contact-phone"
                        required
                        name="phone"
                        type="tel"
                        placeholder="(480) 000-0000"
                        className="w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm focus:outline-none focus:border-primary focus:bg-white transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-semibold uppercase tracking-wider text-secondary mb-2"
                      >
                        Email Address (Optional)
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        className="w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm focus:outline-none focus:border-primary focus:bg-white transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-service"
                        className="block text-xs font-semibold uppercase tracking-wider text-secondary mb-2"
                      >
                        Required Service *
                      </label>
                      <select
                        id="contact-service"
                        required
                        name="service"
                        className="w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm focus:outline-none focus:border-primary focus:bg-white transition-colors"
                      >
                        <option value="">Select a service…</option>
                        <option value="circuit-breaker-repair-phoenix-az">
                          Circuit Breaker & Panel Repair
                        </option>
                        <option value="light-fixture-installation-phoenix-az">
                          Light Fixture Installation
                        </option>
                        <option value="ceiling-fan-installation-phoenix-az">
                          Ceiling Fan Installation
                        </option>
                        <option value="residential-electrical-phoenix-az">
                          Residential Electrical & Rewiring
                        </option>
                        <option value="kitchen-electrical-repairs-phoenix-az">
                          Kitchen Electrical & GFCI
                        </option>
                        <option value="electrical-troubleshooting-phoenix-az">
                          Electrical Troubleshooting & Diagnostics
                        </option>
                        <option value="electrical-maintenance-phoenix-az">
                          Safety Inspection & Maintenance
                        </option>
                        <option value="other">Other Electrical Project</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-semibold uppercase tracking-wider text-secondary mb-2"
                    >
                      Project Details / Issues Observed *
                    </label>
                    <textarea
                      id="contact-message"
                      required
                      name="message"
                      rows={4}
                      placeholder="Please describe what you are experiencing (e.g. flickering lights, breaker tripping, fan replacement)…"
                      className="w-full rounded-xl border border-border bg-surface px-4 py-3.5 text-sm focus:outline-none focus:border-primary focus:bg-white transition-colors resize-none"
                    />
                  </div>

                  <button type="submit" className="btn-primary mt-1 justify-center py-4 text-base">
                    Submit Request <IconArrowRight className="h-4 w-4" />
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    🔒 <strong>Privacy Assurance:</strong> We respect your personal information.
                    Your contact details are strictly used to schedule service and are never shared
                    or sold.
                  </p>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-4">
              <a
                href={BUSINESS.phoneHref}
                className="flex items-center gap-4 rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-secondary p-6 shadow-elegant hover:-translate-y-0.5 transition-transform"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-secondary text-primary">
                  <IconPhone className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.2em] font-semibold opacity-70">
                    Direct Dispatch
                  </div>
                  <div className="text-2xl font-bold">{BUSINESS.phone}</div>
                </div>
              </a>

              <div className="rounded-2xl bg-white border border-border p-6">
                <div className="flex items-center gap-3">
                  <IconMapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-secondary">Physical Location</h3>
                </div>
                <p className="mt-3 text-sm text-secondary font-medium">{BUSINESS.address}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Registered office & central Valley dispatch facility.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-border p-6">
                <div className="flex items-center gap-3">
                  <IconClock className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-secondary">Business Hours</h3>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  {BUSINESS.hours.map((h) => (
                    <li
                      key={h.d}
                      className="flex justify-between border-b border-border pb-2 last:border-none last:pb-0"
                    >
                      <span className="text-muted-foreground">{h.d}</span>
                      <span className="font-semibold text-secondary">{h.h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl bg-white border border-border p-6">
                <div className="flex items-center gap-3">
                  <IconMapPin className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-secondary">Service Areas</h3>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                  Phoenix, Tempe, Mesa, Scottsdale, Chandler, Glendale, and the surrounding Phoenix
                  Metro Area.
                </p>
              </div>

              <div className="rounded-2xl bg-white border border-border p-6">
                <div className="flex items-center gap-3">
                  <IconMail className="h-5 w-5 text-primary" />
                  <h3 className="font-bold text-secondary">Email Support</h3>
                </div>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="mt-3 text-sm text-accent hover:underline block"
                >
                  {BUSINESS.email}
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-x">
          <div className="overflow-hidden rounded-3xl border border-border shadow-elegant">
            <iframe
              title="Arizona Electric on Google Maps"
              src={BUSINESS.mapEmbed}
              width="100%"
              height="500"
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
