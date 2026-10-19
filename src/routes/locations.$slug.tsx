import { createFileRoute, Link, redirect, notFound } from "@tanstack/react-router";
import { LOCATIONS } from "@/lib/business";
import { LocationDetail } from "@/components/site/LocationDetail";

export const Route = createFileRoute("/locations/$slug")({
  loader: ({ params }) => {
    const raw = params.slug.replace(/^electrician-|^electricion-/, "");
    const location = LOCATIONS.find(
      (l) =>
        l.slug === params.slug ||
        l.slug === `electrician-${raw}` ||
        l.city.toLowerCase() === raw.toLowerCase() ||
        l.slug === `electrician-${params.slug}`
    );
    if (location) {
      throw redirect({
        href: `/${location.slug}/`,
        statusCode: 301,
      });
    }
    throw notFound();
  },
  notFoundComponent: PageNotFound,
  component: FlatPage,
});

function PageNotFound() {
  return (
    <div className="min-h-[60vh] grid place-items-center container-x pt-32">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-secondary">Page not found</h1>
        <p className="mt-3 text-muted-foreground">The page you are looking for does not exist.</p>
        <Link to="/" className="mt-6 btn-primary inline-flex">
          Back home
        </Link>
      </div>
    </div>
  );
}

function FlatPage() {
  return <PageNotFound />;
}
