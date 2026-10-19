import { BUSINESS } from "@/lib/business";
import { IconPhone, IconBolt } from "./Icons";

export function StickyCTA() {
  const trackCall = () => {
    if (typeof window !== "undefined") {
      try {
        const win = window as unknown as { dataLayer?: Record<string, unknown>[] };
        win.dataLayer = win.dataLayer || [];
        win.dataLayer.push({
          event: "phone_call_click",
          phone_number: BUSINESS.phone,
        });
      } catch {
        // safe fallback
      }
    }
  };

  return (
    <>
      {/* Desktop floating button */}
      <div className="hidden md:flex fixed right-6 bottom-6 z-40 flex-col gap-3">
        <a
          href={BUSINESS.phoneHref}
          onClick={trackCall}
          aria-label="Call Arizona Electric at (480) 806-1832"
          className="group grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-primary to-primary-glow text-secondary shadow-[0_15px_40px_-10px_var(--primary)] transition-transform hover:scale-110 relative"
        >
          <span className="absolute inset-0 rounded-full animate-ping bg-primary/40" />
          <IconPhone className="h-6 w-6 relative" />
        </a>
      </div>

      {/* Mobile sticky bottom bar */}
      <div className="md:hidden fixed inset-x-0 bottom-0 z-40 bg-white/95 backdrop-blur-xl border-t border-border shadow-[0_-10px_30px_-10px_rgba(15,23,42,0.15)]">
        <div className="grid grid-cols-2">
          <a
            href={BUSINESS.phoneHref}
            onClick={trackCall}
            className="flex flex-col items-center gap-1 py-3 text-secondary"
            aria-label="Call Arizona Electric at (480) 806-1832"
          >
            <IconPhone className="h-5 w-5 text-primary" />
            <span className="text-[11px] font-semibold">Call (480) 806-1832</span>
          </a>
          <a
            href="/contact"
            className="flex flex-col items-center gap-1 py-3 text-secondary border-l border-border"
          >
            <IconBolt className="h-5 w-5 text-accent" />
            <span className="text-[11px] font-semibold">Estimate</span>
          </a>
        </div>
      </div>
    </>
  );
}
