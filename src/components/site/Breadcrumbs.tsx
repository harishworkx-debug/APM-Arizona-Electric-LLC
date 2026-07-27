import { Link } from "@tanstack/react-router";

export type Crumb = { name: string; path: string; slug?: string };

export function Breadcrumbs({ items, tone = "light" }: { items: Crumb[]; tone?: "light" | "dark" }) {
  const base = tone === "light" ? "text-white/60" : "text-muted-foreground";
  const current = tone === "light" ? "text-white" : "text-secondary";
  return (
    <nav aria-label="Breadcrumb" className={`text-sm ${base}`}>
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.path} className="flex items-center gap-2">
              {last ? (
                <span className={`font-medium ${current}`} aria-current="page">{c.name}</span>
              ) : (
                <>
                  {c.slug ? (
                    <Link to="/$slug" params={{ slug: c.slug }} className="hover:text-primary transition-colors">{c.name}</Link>
                  ) : (
                    <Link to={c.path as "/"} className="hover:text-primary transition-colors">{c.name}</Link>
                  )}
                  <span aria-hidden>/</span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
