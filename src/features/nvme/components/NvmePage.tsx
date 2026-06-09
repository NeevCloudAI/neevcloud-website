import FaqSection from "@/shared/components/faq/faq-section";
import { CPU_CLUSTER_FAQ_ITEMS } from "@/shared/data/faq-section-data";
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
      <TransparentPricingSection />
      <FaqSection
        items={CPU_CLUSTER_FAQ_ITEMS}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
      <FooterComponent
        title={NVME_FOOTER.title}
        description={NVME_FOOTER.description}
        primaryCta={NVME_FOOTER.primaryCta}
        secondaryCta={NVME_FOOTER.secondaryCta}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
    </>
  );
};

export default NvmePage;
