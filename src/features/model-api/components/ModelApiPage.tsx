import AnnouncementSection from "@/features/Home/components/AnnouncementSection";
import FaqSection from "@/shared/components/faq/faq-section";
import { CPU_CLUSTER_FAQ_ITEMS } from "@/shared/data/faq-section-data";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import ExploreApiSection from "@/features/model-api/components/ExploreApiSection";
import IntelligenceSection from "@/features/model-api/components/IntelligenceSection";
import ModelApiHeroSection from "@/features/model-api/components/ModelApiHeroSection";
import PaySection from "@/features/model-api/components/PaySection";
import { MODEL_API_FOOTER } from "@/features/model-api/constants/model-api-page.constants";
import { Divider } from "@/shared/ui-lib";

const ModelApiPage = () => {
  return (
    <>
      <AnnouncementSection />
      <HeaderComponent />
      <Divider orientation="horizontal" />
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
        hasBGImage
      />
    </>
  );
};

export default ModelApiPage;
