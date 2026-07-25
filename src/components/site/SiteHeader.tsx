import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BUSINESS, NAV } from "@/lib/business";
import { IconPhone, IconMenu, IconX, IconBolt } from "./Icons";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 20);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/85 backdrop-blur-xl shadow-[0_10px_30px_-20px_rgba(15,23,42,0.3)]" : "bg-transparent"
      }`}
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
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                scrolled ? "text-secondary hover:text-primary" : "text-white/90 hover:text-primary"
              }`}
              activeProps={{ className: "text-primary font-semibold" }}
            >
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
            className="lg:hidden bg-white border-t border-border"
          >
            <div className="container-x py-4 flex flex-col gap-1">
              {NAV.map((n) => (
                <Link key={n.to} to={n.to} className="px-3 py-3 rounded-xl text-secondary font-medium hover:bg-muted">
                  {n.label}
                </Link>
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
