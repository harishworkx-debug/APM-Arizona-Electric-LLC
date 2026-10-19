import { createFileRoute, redirect, notFound } from "@tanstack/react-router";
import { getRedirectDestination } from "@/lib/redirects";

export const Route = createFileRoute("/$")({
  beforeLoad: ({ location }) => {
    const target = getRedirectDestination(location.pathname);
    if (target) {
      throw redirect({
        href: target,
        statusCode: 301,
      });
    }
    throw notFound();
  },
  notFoundComponent: SplatNotFound,
  component: SplatNotFound,
});

function SplatNotFound() {
  return (
    <div className="min-h-[60vh] grid place-items-center container-x pt-32">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-secondary">Page not found</h1>
        <p className="mt-3 text-muted-foreground">The page you are looking for does not exist.</p>
        <a href="/" className="mt-6 btn-primary inline-flex">
          Back home
        </a>
      </div>
    </div>
  );
}
