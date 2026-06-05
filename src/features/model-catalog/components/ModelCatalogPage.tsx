import FooterComponent from "@/shared/components/footer";
import ModelCatalogHeroSection from "./ModelCatalogHeroSection";
import ModelActionSection from "./ModelActionSection";
import RightModelSection from "./RightModelSection";
import ModelInformationSection from "./ModelInformationSection";
import UseModelSection from "./UseModelSection";
import { MODEL_CATALOG_FOOTER } from "../constants/model-catalog-page.constants";

const ModelCatalogPage = () => {
  return (
    <>
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
