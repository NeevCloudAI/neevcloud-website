import type { Metadata } from "next";
import { FOOTER_SOCIAL_LINKS } from "@/shared/data/footer-data";
import type { FaqItem } from "@/shared/data/faq-section-types";

export const SITE_URL = "https://neevcloud.com";
export const SITE_NAME = "NeevCloud";

export const DEFAULT_TITLE = "NeevCloud | AI Supercloud for the world";
export const DEFAULT_DESCRIPTION =
  "Full-stack AI infrastructure built to scale fearlessly. Run AI workloads with sovereign control, security, and scalability on India-resident GPU and CPU compute.";

export const DEFAULT_OG_IMAGE = {
  url: "/images/og/neevcloud-og.jpg",
  width: 1200,
  height: 630,
  alt: "NeevCloud — Full Stack AI Native SuperCloud",
} as const;

export type OgImage = {
  url: string;
  width?: number;
  height?: number;
  alt: string;
};

export const SITE_ICONS = {
  icon: [
    { url: "/favicon.ico", sizes: "48x48" },
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
  shortcut: "/favicon.ico",
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

export type JsonLdSchema = Record<string, unknown>;

export function buildOrganizationSchema(): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/icons/logo-white-with-name.svg`,
    sameAs: FOOTER_SOCIAL_LINKS.map((link) => link.href),
  };
}

export function buildFaqSchema(items: readonly FaqItem[]): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

type ServiceSchemaOptions = {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
};

export function buildServiceSchema({
  name,
  description,
  path,
  serviceType = name,
}: ServiceSchemaOptions): JsonLdSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    serviceType,
    description,
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: `${SITE_URL}/`,
    },
    url: `${SITE_URL}${path}`,
    areaServed: {
      "@type": "Place",
      name: "India",
    },
    audience: {
      "@type": "Audience",
      audienceType: "Businesses, Developers, AI Researchers, Enterprises",
    },
  };
}

type ProductSpec = { name: string; value: string };

type ProductSchemaOptions = {
  name: string;
  description: string;
  path: string;
  model: string;
  price: string;
  priceCurrency?: string;
  brand?: string;
  specs: ProductSpec[];
};

export function buildProductSchema({
  name,
  description,
  path,
  model,
  price,
  priceCurrency = "INR",
  brand = "NVIDIA",
  specs,
}: ProductSchemaOptions): JsonLdSchema {
  const url = `${SITE_URL}${path}`;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    model,
    category: "GPU Compute",
    additionalProperty: specs.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.name,
      value: spec.value,
    })),
    offers: {
      "@type": "Offer",
      url,
      price,
      priceCurrency,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: SITE_NAME,
        url: `${SITE_URL}/`,
      },
    },
  };
}
