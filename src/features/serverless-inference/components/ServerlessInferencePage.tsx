import AnnouncementSection from "@/features/Home/components/AnnouncementSection";
import FaqSection from "@/shared/components/faq/faq-section";
import { CPU_CLUSTER_FAQ_ITEMS } from "@/shared/data/faq-section-data";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import ModelBuilderSection from "@/shared/components/ModelBuilderSection";
import { Divider } from "@/shared/ui-lib";
import { SERVERLESS_INFERENCE_FOOTER } from "@/features/serverless-inference/constants/serverless-inference-page.constants";
import InferenceStackSection from "@/features/serverless-inference/components/InferenceStackSection";
import ModelsSection from "@/features/serverless-inference/components/ModelsSection";
import ServerlessInferenceHeroSection from "@/features/serverless-inference/components/ServerlessInferenceHeroSection";
import ThreeStepsSection from "@/features/serverless-inference/components/ThreeStepsSection";
import TokenPricingSection from "@/features/serverless-inference/components/TokenPricingSection";

const ServerlessInferencePage = () => {
  return (
    <>
      <AnnouncementSection />
      <HeaderComponent />
      <Divider orientation="horizontal" />
      <ServerlessInferenceHeroSection />
      <ThreeStepsSection />
      <ModelBuilderSection />
      <ModelsSection />
      <TokenPricingSection />
      <InferenceStackSection />
      <FaqSection
        items={CPU_CLUSTER_FAQ_ITEMS}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
      <FooterComponent
        title={SERVERLESS_INFERENCE_FOOTER.title}
        description={SERVERLESS_INFERENCE_FOOTER.description}
        button1Text={SERVERLESS_INFERENCE_FOOTER.button1Text}
        button2Text={SERVERLESS_INFERENCE_FOOTER.button2Text}
        className="pt-0 md:pt-0 2xl:pt-0"
        hasBGImage
      />
    </>
  );
};

export default ServerlessInferencePage;
