import FaqSection from "@/shared/components/faq/faq-section";
import { CPU_CLUSTER_FAQ_ITEMS } from "@/shared/data/faq-section-data";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import { Divider } from "@/shared/ui-lib";
import AnnouncementSection from "@/shared/components/AnnouncementSection";
import NvmeHeroSection from "./NvmeHeroSection";
import StoragePerformanceSection from "./StoragePerformanceSection";
import MetricsSection from "./MetricsSection";
import DeployStorageSection from "./DeployStorageSection";
import TransparentPricingSection from "./TransparentPricingSection";
import { NVME_FOOTER } from "../constants/nvme-page.constants";

const NvmePage = () => {
  return (
    <>
      <AnnouncementSection />
      <HeaderComponent />
      <Divider orientation="horizontal" />
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
        button1Text={NVME_FOOTER.button1Text}
        button2Text={NVME_FOOTER.button2Text}
        className="pt-0 md:pt-0 2xl:pt-0"
        hasBGImage
      />
    </>
  );
};

export default NvmePage;
