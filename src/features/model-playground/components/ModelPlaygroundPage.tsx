import FaqSection from "@/shared/components/faq/faq-section";
import { PLAYGROUND_FAQ_ITEMS } from "../data/faq-section-data";
import FooterComponent from "@/shared/components/footer";
import ModelBuilderSection from "@/shared/components/ModelBuilderSection";
import ModelPlaygroundHeroSection from "./ModelPlaygroundHeroSection";
import ModelsSection from "./ModelsSection";
import AvailableModelsSection from "./AvailableModelsSection";
import ExperimentationSection from "./ExperimentationSection";
import ExploreModelsSection from "./ExploreModelsSection";
import { MODEL_PLAYGROUND_FOOTER } from "../constants/model-playground-page.constants";

const ModelPlaygroundPage = () => {
  return (
    <>
      <ModelPlaygroundHeroSection />
      <ModelsSection />
      <AvailableModelsSection />
      <ExperimentationSection />
      <ExploreModelsSection />
      <ModelBuilderSection />
      <FaqSection items={PLAYGROUND_FAQ_ITEMS} />
      <FooterComponent {...MODEL_PLAYGROUND_FOOTER} />
    </>
  );
};

export default ModelPlaygroundPage;
