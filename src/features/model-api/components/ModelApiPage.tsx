import FaqSection from "@/shared/components/faq/faq-section";
import { CPU_CLUSTER_FAQ_ITEMS } from "@/shared/data/faq-section-data";
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
        items={CPU_CLUSTER_FAQ_ITEMS}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
      <FooterComponent
        title={MODEL_API_FOOTER.title}
        description={MODEL_API_FOOTER.description}
        button1Text={MODEL_API_FOOTER.button1Text}
        button2Text={MODEL_API_FOOTER.button2Text}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
    </>
  );
};

export default ModelApiPage;
