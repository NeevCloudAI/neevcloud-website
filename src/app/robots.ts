import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { NON_INDEXABLE_ROUTES } from "@/lib/site-routes";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [...NON_INDEXABLE_ROUTES],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
