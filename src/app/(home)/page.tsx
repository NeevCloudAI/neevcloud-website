import { HomeComponent } from "@/features/Home";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-static";

export const metadata = buildPageMetadata({
  path: "/",
  title: "NeevCloud | India's AI SuperCloud",
  description:
    "Full-stack AI infrastructure built to scale fearlessly. Run AI workloads with sovereign control, security, and scalability on India-resident GPU and CPU compute.",
});

const HomePage = () => {
  return <HomeComponent />;
};

export default HomePage;
