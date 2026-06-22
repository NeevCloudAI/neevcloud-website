import type { MetadataRoute } from "next";
import {
  DEFAULT_DESCRIPTION,
  SITE_ICONS,
  SITE_NAME,
} from "@/lib/seo";

export const dynamic = "force-static";

const MANIFEST_ICONS: MetadataRoute.Manifest["icons"] = [
  {
    src: SITE_ICONS.icon[0].url,
    sizes: "any",
    type: SITE_ICONS.icon[0].type,
    purpose: "any",
  },
  {
    src: SITE_ICONS.apple,
    sizes: "180x180",
    type: "image/svg+xml",
    purpose: "maskable",
  },
];

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} | India's AI SuperCloud`,
    short_name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#00a78b",
    icons: MANIFEST_ICONS,
  };
}
