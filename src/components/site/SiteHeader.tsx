import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BUSINESS, SERVICES, LOCATIONS, locLabel } from "@/lib/business";
import { IconPhone, IconMenu, IconX, IconBolt, IconArrowRight } from "./Icons";

const SIMPLE_NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<null | "services" | "areas">(null);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => { setOpen(false); setMenu(null); }, [pathname]);

  const linkTone = scrolled ? "text-secondary hover:text-primary" : "text-white/90 hover:text-primary";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/85 backdrop-blur-xl shadow-[0_10px_30px_-20px_rgba(15,23,42,0.3)]" : "bg-transparent"
      }`}
      onMouseLeave={() => setMenu(null)}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-primary to-primary-glow text-secondary shadow-[0_10px_25px_-10px_var(--primary)] transition-transform group-hover:scale-105">
            <IconBolt className="h-5 w-5" />
          </span>
          <div className="min-w-0">
            <div className={`text-sm font-bold leading-tight ${scrolled ? "text-secondary" : "text-white"}`}>APM Arizona</div>
            <div className={`text-[10px] font-semibold uppercase tracking-[0.2em] ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>Electric LLC</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <Link to="/" activeOptions={{ exact: true }} className={`relative px-4 py-2 text-sm font-medium transition-colors ${linkTone}`} activeProps={{ className: "text-primary font-semibold" }}>Home</Link>

          <div className="relative" onMouseEnter={() => setMenu("services")}>
            <Link to="/services" className={`relative inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors ${linkTone}`} activeProps={{ className: "text-primary font-semibold" }}>
              Services
              <span className={`text-[10px] transition-transform ${menu === "services" ? "rotate-180" : ""}`}>▾</span>
            </Link>
            <AnimatePresence>
              {menu === "services" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.18 }}
                  className="absolute left-1/2 top-full w-[520px] -translate-x-1/2 pt-3"
                >
                  <div className="rounded-3xl border border-border bg-white p-3 shadow-[0_30px_70px_-30px_rgba(15,23,42,0.45)]">
                    <div className="grid grid-cols-2 gap-1">
                      {SERVICES.map((s) => (
                        <Link key={s.slug} to="/$slug" params={{ slug: s.slug }} className="rounded-2xl px-4 py-3 text-sm font-medium text-secondary hover:bg-muted transition-colors">
                          {s.navLabel}
                        </Link>
                      ))}
                    </div>
                    <Link to="/services" className="mt-2 flex items-center justify-between rounded-2xl bg-secondary px-4 py-3 text-sm font-semibold text-white">
                      View all services <IconArrowRight className="h-4 w-4 text-primary" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative" onMouseEnter={() => setMenu("areas")}>
            <button className={`relative inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors ${linkTone}`}>
              Service Areas
              <span className={`text-[10px] transition-transform ${menu === "areas" ? "rotate-180" : ""}`}>▾</span>
            </button>
            <AnimatePresence>
              {menu === "areas" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.18 }}
                  className="absolute left-1/2 top-full w-[300px] -translate-x-1/2 pt-3"
                >
                  <div className="rounded-3xl border border-border bg-white p-3 shadow-[0_30px_70px_-30px_rgba(15,23,42,0.45)]">
                    {LOCATIONS.map((l) => (
                      <Link key={l.slug} to="/$slug" params={{ slug: l.slug }} className="block rounded-2xl px-4 py-3 text-sm font-medium text-secondary hover:bg-muted transition-colors">
                        {locLabel(l.city)}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {SIMPLE_NAV.slice(1).map((n) => (
            <Link key={n.to} to={n.to} className={`relative px-4 py-2 text-sm font-medium transition-colors ${linkTone}`} activeProps={{ className: "text-primary font-semibold" }}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={BUSINESS.phoneHref} className="btn-primary text-sm py-2.5 px-5">
            <IconPhone className="h-4 w-4" /> {BUSINESS.phone}
          </a>
        </div>

        <button
          className={`lg:hidden grid h-11 w-11 place-items-center rounded-full ${scrolled ? "bg-secondary text-white" : "bg-white/10 text-white backdrop-blur"}`}
          onClick={() => setOpen((s) => !s)}
          aria-label="Menu"
        >
          {open ? <IconX className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-white border-t border-border max-h-[75vh] overflow-y-auto"
          >
            <div className="container-x py-4 flex flex-col gap-1">
              <Link to="/" className="px-3 py-3 rounded-xl text-secondary font-medium hover:bg-muted">Home</Link>
              <Link to="/services" className="px-3 py-3 rounded-xl text-secondary font-medium hover:bg-muted">Services</Link>
              <div className="pl-3">
                {SERVICES.map((s) => (
                  <Link key={s.slug} to="/$slug" params={{ slug: s.slug }} className="block px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:bg-muted">
                    {s.navLabel}
                  </Link>
                ))}
              </div>
              <div className="px-3 pt-3 pb-1 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Service Areas</div>
              <div className="pl-3">
                {LOCATIONS.map((l) => (
                  <Link key={l.slug} to="/$slug" params={{ slug: l.slug }} className="block px-3 py-2.5 rounded-xl text-sm text-muted-foreground hover:bg-muted">
                    {locLabel(l.city)}
                  </Link>
                ))}
              </div>
              {SIMPLE_NAV.slice(1).map((n) => (
                <Link key={n.to} to={n.to} className="px-3 py-3 rounded-xl text-secondary font-medium hover:bg-muted">{n.label}</Link>
              ))}
              <a href={BUSINESS.phoneHref} className="btn-primary mt-3">
                <IconPhone className="h-4 w-4" /> Call {BUSINESS.phone}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
