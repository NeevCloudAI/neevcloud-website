import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { getIndexableRoutes } from "@/lib/site-routes";
import { getAllBlogSlugs } from "@/lib/blog.server";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogRoutes = getAllBlogSlugs().map((slug) => `/blog/${slug}`);

  return [...getIndexableRoutes(), ...blogRoutes].map((route) => ({
    url: `${SITE_URL}${route === "/" ? "" : route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
