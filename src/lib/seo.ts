import type { Metadata } from "next";

export const SITE_URL = "https://neevcloud.com";
export const SITE_NAME = "NeevCloud";

export const DEFAULT_TITLE = "NeevCloud | India's AI SuperCloud";
export const DEFAULT_DESCRIPTION =
  "Full-stack AI infrastructure built to scale fearlessly. Run AI workloads with sovereign control, security, and scalability on India-resident GPU and CPU compute.";

export const DEFAULT_OG_IMAGE = {
  url: "/images/webp/ai-supercloud.webp",
  width: 1408,
  height: 700,
  alt: "NeevCloud — India's AI SuperCloud",
} as const;

export type OgImage = {
  url: string;
  width?: number;
  height?: number;
  alt: string;
};

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

const defaultOpenGraphImages: NonNullable<Metadata["openGraph"]>["images"] = [
  DEFAULT_OG_IMAGE,
];

const defaultTwitterImages: NonNullable<Metadata["twitter"]>["images"] = [
  DEFAULT_OG_IMAGE.url,
];

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
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: defaultOpenGraphImages,
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: defaultTwitterImages,
  },
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
  openGraphDescription?: string;
  openGraphImage?: OgImage;
  robots?: Metadata["robots"];
};

export function buildPageMetadata({
  title,
  description,
  path,
  openGraphDescription = description,
  openGraphImage = DEFAULT_OG_IMAGE,
  robots,
}: PageMetadataOptions): Metadata {
  const openGraphImages = [openGraphImage];

  return {
    title,
    description,
    ...(path
      ? {
          alternates: {
            canonical: path,
          },
        }
      : {}),
    ...(robots ? { robots } : {}),
    openGraph: {
      title,
      description: openGraphDescription,
      ...(path ? { url: path } : {}),
      images: openGraphImages,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: openGraphDescription,
      images: [openGraphImage.url],
    },
  };
}
