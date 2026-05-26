import AnnouncementSection from "@/features/Home/components/AnnouncementSection";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import ModelActionSection from "@/features/model-catalog/components/ModelActionSection";
import ModelCatalogHeroSection from "@/features/model-catalog/components/ModelCatalogHeroSection";
import ModelInformationSection from "@/features/model-catalog/components/ModelInformationSection";
import RightModelSection from "@/features/model-catalog/components/RightModelSection";
import UseModelSection from "@/features/model-catalog/components/UseModelSection";
import { MODEL_CATALOG_FOOTER } from "@/features/model-catalog/constants/model-catalog-page.constants";
import { Divider } from "@/shared/ui-lib";

const ModelCatalogPage = () => {
  return (
    <>
      <AnnouncementSection />
      <HeaderComponent />
      <Divider orientation="horizontal" />
      <ModelCatalogHeroSection />
      <ModelActionSection />
      <RightModelSection />
      <ModelInformationSection />
      <UseModelSection />
      <FooterComponent
        title={MODEL_CATALOG_FOOTER.title}
        description={MODEL_CATALOG_FOOTER.description}
        button1Text={MODEL_CATALOG_FOOTER.button1Text}
        button2Text={MODEL_CATALOG_FOOTER.button2Text}
      />
    </>
  );
};

export default ModelCatalogPage;
