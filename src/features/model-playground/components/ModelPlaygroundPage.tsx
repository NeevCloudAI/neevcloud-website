import AnnouncementSection from "@/features/Home/components/AnnouncementSection";
import FaqSection from "@/shared/components/faq/faq-section";
import { CPU_CLUSTER_FAQ_ITEMS } from "@/shared/data/faq-section-data";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import ModelBuilderSection from "@/shared/components/ModelBuilderSection";
import { Divider } from "@/shared/ui-lib";
import { MODEL_PLAYGROUND_FOOTER } from "@/features/model-playground/constants/model-playground-page.constants";
import AvailableModelsSection from "@/features/model-playground/components/AvailableModelsSection";
import ExperimentationSection from "@/features/model-playground/components/ExperimentationSection";
import ExploreModelsSection from "@/features/model-playground/components/ExploreModelsSection";
import ModelPlaygroundHeroSection from "@/features/model-playground/components/ModelPlaygroundHeroSection";
import ModelsSection from "@/features/model-playground/components/ModelsSection";

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
