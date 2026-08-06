import FaqSection from "@/shared/components/faq/faq-section";
import { GPU_AI_SERVICE_FAQ_ITEMS } from "../data/faq-section-data";
import FooterComponent from "@/shared/components/footer";
import GpuAiServiceHeroSection from "./GpuAiServiceHeroSection";
import PricingSection from "./PricingSection";
import ComputeSection from "./ComputeSection";
import UseCasesSection from "./UseCasesSection";
import { GPU_AI_SERVICE_FOOTER } from "../constants/gpu-ai-service-page.constants";

const GpuAiServicePage = () => {
  return (
    <>
      <GpuAiServiceHeroSection />
      <PricingSection />
      <ComputeSection />
      <UseCasesSection />
      <FaqSection items={GPU_AI_SERVICE_FAQ_ITEMS} />
      <FooterComponent {...GPU_AI_SERVICE_FOOTER} />
    </>
  );
};

export default GpuAiServicePage;
