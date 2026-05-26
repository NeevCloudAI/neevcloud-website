import FaqSection from "@/shared/components/faq/faq-section";
import { CPU_CLUSTER_FAQ_ITEMS } from "@/shared/data/faq-section-data";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import ModelBuilderSection from "@/shared/components/ModelBuilderSection";
import { Divider } from "@/shared/ui-lib";
import AnnouncementSection from "@/shared/components/AnnouncementSection";
import ModelPlaygroundHeroSection from "./ModelPlaygroundHeroSection";
import ModelsSection from "./ModelsSection";
import AvailableModelsSection from "./AvailableModelsSection";
import ExperimentationSection from "./ExperimentationSection";
import ExploreModelsSection from "./ExploreModelsSection";
import { MODEL_PLAYGROUND_FOOTER } from "../constants/model-playground-page.constants";

const ModelPlaygroundPage = () => {
  return (
    <>
      <AnnouncementSection />
      <HeaderComponent />
      <Divider orientation="horizontal" />
      <ModelPlaygroundHeroSection />
      <ModelsSection />
      <AvailableModelsSection />
      <ExperimentationSection />
      <ExploreModelsSection />
      <ModelBuilderSection />
      <FaqSection items={CPU_CLUSTER_FAQ_ITEMS} />
      <FooterComponent
        title={MODEL_PLAYGROUND_FOOTER.title}
        description={MODEL_PLAYGROUND_FOOTER.description}
        button1Text={MODEL_PLAYGROUND_FOOTER.button1Text}
        button2Text={MODEL_PLAYGROUND_FOOTER.button2Text}
        className="pt-0 md:pt-0 2xl:pt-0"
        hasBGImage
      />
    </>
  );
};

export default ModelPlaygroundPage;
