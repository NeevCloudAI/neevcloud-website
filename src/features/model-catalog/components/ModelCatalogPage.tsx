import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import ModelCatalogHeroSection from "./ModelCatalogHeroSection";
import ModelActionSection from "./ModelActionSection";
import RightModelSection from "./RightModelSection";
import ModelInformationSection from "./ModelInformationSection";
import UseModelSection from "./UseModelSection";
import { MODEL_CATALOG_FOOTER } from "../constants/model-catalog-page.constants";
import { MODEL_CATALOG_FAQ_ITEMS } from "../data/faq-section.data";

const ModelCatalogPage = () => {
  return (
    <>
      <ModelCatalogHeroSection />
      <ModelActionSection />
      <RightModelSection />
      <ModelInformationSection />
      <UseModelSection />
      <FaqSection items={MODEL_CATALOG_FAQ_ITEMS} />
      <FooterComponent {...MODEL_CATALOG_FOOTER} />
    </>
  );
};

export default ModelCatalogPage;
