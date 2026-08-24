import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import { AI_SUPERCLUSTERS_FOOTER } from "../constants/ai-superclusters-page.constants";
import { AI_SUPERCLUSTERS_FAQ_ITEMS } from "../data/faq-section.data";
import ComplianceSection from "./ComplianceSection";
import GpuLineupSection from "./gpu-lineup/GpuLineupSection";
import AiSuperclustersHeroSection from "./hero/AiSuperclustersHeroSection";
import HowItWorksSection from "./HowItWorksSection";
import ReserveNowSection from "./ReserveNowSection";
import UseCasesSection from "./UseCasesSection";

const AiSuperclustersPage = () => {
  return (
    <>
      <AiSuperclustersHeroSection />
      <GpuLineupSection />
      <HowItWorksSection />
      <ReserveNowSection />
      <UseCasesSection />
      <ComplianceSection />
      <FaqSection items={AI_SUPERCLUSTERS_FAQ_ITEMS} />
      <FooterComponent {...AI_SUPERCLUSTERS_FOOTER} />
    </>
  );
};

export default AiSuperclustersPage;
