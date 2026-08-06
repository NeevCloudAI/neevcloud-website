import { NeevcloudArenaPage } from "@/features/neevcloud-arena";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/neevcloud-arena",
  title: "NeevCloud ARENA - Experience AI Infrastructure",
  description:
    "Try AI models, build workloads, and see real use cases. Experience NeevCloud infrastructure hands-on before you commit.",
});

const NeevcloudArenaRoutePage = () => {
  return <NeevcloudArenaPage />;
};

export default NeevcloudArenaRoutePage;
