import { CareersPage } from "@/features/careers";
import {
  KEKA_EMBED,
  KEKA_EMBED_CONFIG_JSON,
} from "@/features/careers/data/open-positions-section.data";
import Script from "next/script";

import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/careers",
  title: "Careers at NeevCloud - Join Our Team",
  description:
    "Build infrastructure that matters. Join NeevCloud's team working on AI cloud systems at scale. View open positions and apply today.",
});

const CareersRoutePage = () => {
  return (
    <>
      <link rel="preconnect" href={KEKA_EMBED.origin} crossOrigin="anonymous" />
      <link rel="preload" href={KEKA_EMBED.scriptSrc} as="script" />
      <Script id="keka-embed-config" strategy="afterInteractive">
        {`window.khConfig=${KEKA_EMBED_CONFIG_JSON};`}
      </Script>
      <Script
        id="keka-embed-jobs"
        src={KEKA_EMBED.scriptSrc}
        strategy="afterInteractive"
      />
      <CareersPage />
    </>
  );
};

export default CareersRoutePage;
