import type { Metadata } from "next";
import { HomeComponent } from "@/features/Home";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "NeevCloud | India's AI SuperCloud",
  description:
    "Full-stack AI infrastructure built to scale fearlessly. Run AI workloads with sovereign control, security, and scalability on India-resident GPU and CPU compute.",
  openGraph: {
    title: "NeevCloud | India's AI SuperCloud",
    description:
      "Full-stack AI infrastructure built to scale fearlessly. Run AI workloads with sovereign control, security, and scalability on India-resident GPU and CPU compute.",
  },
};

const HomePage = () => {
  return <HomeComponent />;
};

export default HomePage;
