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
      <FooterComponent {...MODEL_CATALOG_FOOTER} />
    </>
  );
};

export default ModelCatalogPage;
