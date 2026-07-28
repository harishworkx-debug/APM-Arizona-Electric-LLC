import { Link } from "@tanstack/react-router";
import { BUSINESS, NAV, SERVICES, LOCATIONS, locLabel } from "@/lib/business";
import { IconBolt, IconPhone, IconMail, IconMapPin, IconClock } from "./Icons";

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-white/80 pt-20 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: "radial-gradient(circle at 20% 0%, oklch(0.78 0.17 70 / 0.25), transparent 50%)" }} />
      <div className="container-x relative">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-secondary">
                <IconBolt className="h-5 w-5" />
              </span>
              <div>
                <div className="text-white font-bold">APM Arizona Electric LLC</div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/50">Licensed Electricians</div>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Family-owned electrical contractor serving Phoenix, Arizona with honest workmanship, fair pricing and the legacy of Andres Portillo Marin.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <a href={BUSINESS.phoneHref} className="flex items-center gap-3 text-white hover:text-primary transition"><IconPhone className="h-4 w-4 text-primary" /> {BUSINESS.phone}</a>
              <a href={BUSINESS.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-primary transition"><IconMail className="h-4 w-4 text-primary" /> WhatsApp Us</a>
              <div className="flex items-center gap-3"><IconMapPin className="h-4 w-4 text-primary" /> Phoenix, Arizona</div>
              <div className="flex items-center gap-3"><IconClock className="h-4 w-4 text-primary" /> Mon–Fri 7am–4pm</div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">Company</h4>
            <ul className="space-y-3 text-sm">
              {NAV.map((n) => (
                <li key={n.to}><Link to={n.to} className="hover:text-primary transition">{n.label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">Services</h4>
            <ul className="space-y-3 text-sm">
              {SERVICES.slice(0, 7).map((s) => (
                <li key={s.slug}><Link to="/$slug" params={{ slug: s.slug }} className="hover:text-primary transition">{s.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-5">Service Areas</h4>
            <ul className="space-y-3 text-sm">
              {LOCATIONS.map((l) => (
                <li key={l.slug}><Link to="/$slug" params={{ slug: l.slug }} className="hover:text-primary transition">{locLabel(l.city)}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {new Date().getFullYear()} APM Arizona Electric LLC. All rights reserved. Licensed & Insured.</p>
          <p>In loving memory of Andres Portillo Marin — Lineman 1962–2002.</p>
        </div>
      </div>
    </footer>
  );
}
