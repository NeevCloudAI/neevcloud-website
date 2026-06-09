import FaqSection from "@/shared/components/faq/faq-section";
import { API_GENERAL_FAQ_ITEMS } from "../data/faq-section-data";
import FooterComponent from "@/shared/components/footer";
import ModelApiHeroSection from "./ModelApiHeroSection";
import IntelligenceSection from "./IntelligenceSection";
import ExploreApiSection from "./ExploreApiSection";
import PaySection from "./PaySection";
import { MODEL_API_FOOTER } from "../constants/model-api-page.constants";

const ModelApiPage = () => {
  return (
    <>
      <ModelApiHeroSection />
      <IntelligenceSection />
      <ExploreApiSection />
      <PaySection />
      <FaqSection
        items={API_GENERAL_FAQ_ITEMS}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
      <FooterComponent
        {...MODEL_API_FOOTER}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
    </>
  );
};

export default ModelApiPage;
