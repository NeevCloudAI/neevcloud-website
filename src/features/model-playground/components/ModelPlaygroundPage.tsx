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
      <FooterComponent
        title={MODEL_PLAYGROUND_FOOTER.title}
        description={MODEL_PLAYGROUND_FOOTER.description}
        button1Text={MODEL_PLAYGROUND_FOOTER.button1Text}
        button2Text={MODEL_PLAYGROUND_FOOTER.button2Text}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
    </>
  );
};

export default ModelPlaygroundPage;
