import type { Metadata } from "next";
import { MediaComponent } from "@/features/media-vfx";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Media & VFX | NeevCloud",
  description:
    "From 3D animation to cinematic effects, media workflows demand massive compute on tight deadlines. NeevCloud provides GPU infrastructure that scales with your production.",
  openGraph: {
    title: "Media & VFX | NeevCloud",
    description:
      "Scale your render farm on-demand with H100 and A100 GPUs for feature films, animation, and VFX. Per-second billing with instant provisioning.",
  },
};

const MediaVpxPage = () => {
  return <MediaComponent />;
};

export default MediaVpxPage;
