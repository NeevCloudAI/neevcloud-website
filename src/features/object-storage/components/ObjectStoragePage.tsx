import FaqSection from "@/shared/components/faq/faq-section";
import { OBJECT_STORAGE_FAQ_ITEMS } from "../data/faq-section-data";
import FooterComponent from "@/shared/components/footer";
import CloudStorageSection from "./CloudStorageSection";
import GettingStartedSection from "./GettingStartedSection";
import MlWorkflowsSection from "./MlWorkflowsSection";
import ObjectStorageHeroSection from "./ObjectStorageHeroSection";
import TransparentPricingSection from "./TransparentPricingSection";
import { OBJECT_STORAGE_FOOTER } from "../constants/object-storage-page.constants";

const ObjectStoragePage = () => {
  return (
    <>
      <ObjectStorageHeroSection />
      <CloudStorageSection />
      <MlWorkflowsSection />
      <GettingStartedSection />
      <TransparentPricingSection />
      <FaqSection items={OBJECT_STORAGE_FAQ_ITEMS} />
      <FooterComponent
        {...OBJECT_STORAGE_FOOTER}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
    </>
  );
};

export default ObjectStoragePage;
