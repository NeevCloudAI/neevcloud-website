import type { Metadata } from "next";

export const SITE_URL = "https://neevcloud.com";
export const SITE_NAME = "NeevCloud";

export const DEFAULT_TITLE = "NeevCloud | India's AI SuperCloud";
export const DEFAULT_DESCRIPTION =
  "Full-stack AI infrastructure built to scale fearlessly. Run AI workloads with sovereign control, security, and scalability on India-resident GPU and CPU compute.";

export const SITE_ICONS = {
  icon: [
    {
      url: "/icons/logo-black.svg",
      type: "image/svg+xml",
      media: "(prefers-color-scheme: light)",
    },
    {
      url: "/icons/logo-white.svg",
      type: "image/svg+xml",
      media: "(prefers-color-scheme: dark)",
    },
  ],
  shortcut: "/icons/logo-black.svg",
  apple: "/icons/logo-black.svg",
} satisfies Metadata["icons"];

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s",
  },
  description: DEFAULT_DESCRIPTION,
  icons: SITE_ICONS,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
  },
};

type PageMetadataOptions = {
  title: string;
  description: string;
  openGraphDescription?: string;
  robots?: Metadata["robots"];
};

export function buildPageMetadata({
  title,
  description,
  openGraphDescription = description,
  robots,
}: PageMetadataOptions): Metadata {
  return {
    title,
    description,
    ...(robots ? { robots } : {}),
    openGraph: {
      title,
      description: openGraphDescription,
    },
    twitter: {
      title,
      description: openGraphDescription,
    },
  };
}
