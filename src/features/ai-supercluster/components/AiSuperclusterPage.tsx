import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import { AI_SUPERCLUSTER_FOOTER } from "../constants/ai-supercluster-page.constants";
import { AI_SUPERCLUSTER_FAQ_ITEMS } from "../data/faq-section.data";
import ComplianceSection from "./ComplianceSection";
import GpuLineupSection from "./gpu-lineup/GpuLineupSection";
import AiSuperclusterHeroSection from "./hero/AiSuperclusterHeroSection";
import HowItWorksSection from "./HowItWorksSection";
import ReserveNowSection from "./ReserveNowSection";
import UseCasesSection from "./UseCasesSection";

const AiSuperclusterPage = () => {
  return (
    <>
      <AiSuperclusterHeroSection />
      <GpuLineupSection />
      <HowItWorksSection />
      <ReserveNowSection />
      <UseCasesSection />
      <ComplianceSection />
      <FaqSection items={AI_SUPERCLUSTER_FAQ_ITEMS} />
      <FooterComponent {...AI_SUPERCLUSTER_FOOTER} />
    </>
  );
};

export default AiSuperclusterPage;
