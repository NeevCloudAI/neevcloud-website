import FaqSection from "@/shared/components/faq/faq-section";
import { GPU_CLUSTER_FAQ_ITEMS } from "../data/faq-section-data";
import FooterComponent from "@/shared/components/footer";
import GpuClusterHeroSection from "./GpuClusterHeroSection";
import PricingSection from "./PricingSection";
import ComputeSection from "./ComputeSection";
import UseCasesSection from "./UseCasesSection";
import { GPU_CLUSTER_FOOTER } from "../constants/gpu-cluster-page.constants";

const GpuClusterPage = () => {
  return (
    <>
      <GpuClusterHeroSection />
      <PricingSection />
      <ComputeSection />
      <UseCasesSection />
      <FaqSection items={GPU_CLUSTER_FAQ_ITEMS} />
      <FooterComponent
        title={GPU_CLUSTER_FOOTER.title}
        description={GPU_CLUSTER_FOOTER.description}
        button1Text={GPU_CLUSTER_FOOTER.button1Text}
        button2Text={GPU_CLUSTER_FOOTER.button2Text}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
    </>
  );
};

export default GpuClusterPage;
