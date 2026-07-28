import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SITE } from "@/lib/business";

export const Route = createFileRoute("/robots.txt")({
  server: {
    handlers: {
      GET: async () => {
        const text = [
          `User-agent: *`,
          `Allow: /`,
          ``,
          `Sitemap: ${SITE.url}/sitemap.xml`,
        ].join("\n");
        return new Response(text, { 
          headers: { 
            "Content-Type": "text/plain", 
            "Cache-Control": "public, max-age=3600" 
          } 
        });
      },
    },
  },
});
