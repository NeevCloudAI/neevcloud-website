import { MediaComponent } from "@/features/media-vfx";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/media-vfx",
  title: "GPU Cloud for Media & VFX | NeevCloud",
  description:
    "GPU-accelerated rendering for film, VFX, and animation. Scale render farms on-demand. H100, A100 GPUs for real-time workflows.",
});

const MediaVpxPage = () => {
  return <MediaComponent />;
};

export default MediaVpxPage;
