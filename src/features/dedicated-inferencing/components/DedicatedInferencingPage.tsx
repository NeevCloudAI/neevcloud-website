import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import DedicatedInferencingHeroSection from "./DedicatedInferencingHeroSection";
import PracticeSection from "./PracticeSection";
import HowItWorksSection from "./HowItWorksSection";
import ConfigurationOptionsSection from "./ConfigurationOptionsSection";
import BestFitSection from "./BestFitSection";
import BillingCtaSection from "./BillingCtaSection";
import { DEDICATED_INFERENCING_FOOTER } from "../constants/dedicated-inferencing-page.constants";
import { DEDICATED_INFERENCING_FAQ_ITEMS } from "../data/faq-section.data";

const DedicatedInferencingPage = () => {
  return (
    <>
      <DedicatedInferencingHeroSection />
      <PracticeSection />
      <HowItWorksSection />
      <ConfigurationOptionsSection />
      <BestFitSection />
      <BillingCtaSection />
      <FaqSection items={DEDICATED_INFERENCING_FAQ_ITEMS} />
      <FooterComponent {...DEDICATED_INFERENCING_FOOTER} />
    </>
  );
};

export default DedicatedInferencingPage;
