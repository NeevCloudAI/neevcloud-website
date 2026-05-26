import AnnouncementSection from "@/features/Home/components/AnnouncementSection";
import FaqSection from "@/shared/components/faq/faq-section";
import { CPU_CLUSTER_FAQ_ITEMS } from "@/shared/data/faq-section-data";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import { Divider } from "@/shared/ui-lib";
import { GPU_CLUSTER_FOOTER } from "@/features/gpu-cluster/constants/gpu-cluster-page.constants";
import ComputeSection from "@/features/gpu-cluster/components/ComputeSection";
import GpuClusterHeroSection from "@/features/gpu-cluster/components/GpuClusterHeroSection";
import PricingSection from "@/features/gpu-cluster/components/PricingSection";
import UseCasesSection from "@/features/gpu-cluster/components/UseCasesSection";

const GpuClusterPage = () => {
  return (
    <>
      <AnnouncementSection />
      <HeaderComponent />
      <Divider orientation="horizontal" />
      <GpuClusterHeroSection />
      <PricingSection />
      <ComputeSection />
      <UseCasesSection />
      <FaqSection items={CPU_CLUSTER_FAQ_ITEMS} />
      <FooterComponent
        title={GPU_CLUSTER_FOOTER.title}
        description={GPU_CLUSTER_FOOTER.description}
        button1Text={GPU_CLUSTER_FOOTER.button1Text}
        button2Text={GPU_CLUSTER_FOOTER.button2Text}
        className="pt-0 md:pt-0 2xl:pt-0"
        hasBGImage
      />
    </>
  );
};

export default GpuClusterPage;
