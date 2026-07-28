import FaqSection from "@/shared/components/faq/faq-section";
import { NVME_INSTANCE_FAQ_ITEMS } from "../data/faq-section-data";
import FooterComponent from "@/shared/components/footer";
import NvmeHeroSection from "./NvmeHeroSection";
import StoragePerformanceSection from "./StoragePerformanceSection";
import MetricsSection from "./MetricsSection";
import DeployStorageSection from "./DeployStorageSection";
import TransparentPricingSection from "./TransparentPricingSection";
import { NVME_FOOTER } from "../constants/nvme-page.constants";

const NvmePage = () => {
  return (
    <>
      <NvmeHeroSection />
      <StoragePerformanceSection />
      <MetricsSection />
      <DeployStorageSection />
      {/* <TransparentPricingSection /> */}
      <FaqSection
        items={NVME_INSTANCE_FAQ_ITEMS}
      />
      <FooterComponent {...NVME_FOOTER} />
    </>
  );
};

export default NvmePage;
