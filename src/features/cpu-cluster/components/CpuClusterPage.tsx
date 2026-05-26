import AnnouncementSection from "@/features/Home/components/AnnouncementSection";
import FaqSection from "@/shared/components/faq/faq-section";
import { CPU_CLUSTER_FAQ_ITEMS } from "@/shared/data/faq-section-data";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import { Divider } from "@/shared/ui-lib";
import { CPU_CLUSTER_FOOTER } from "@/features/cpu-cluster/constants/cpu-cluster-page.constants";
import AIStackSection from "@/features/cpu-cluster/components/AIStackSection";
import CpuClusterHeroSection from "@/features/cpu-cluster/components/CpuClusterHeroSection";
import CPUWorkloadSection from "@/features/cpu-cluster/components/CPUWorkloadSection";
import OSImageSection from "@/features/cpu-cluster/components/os-image/OSImageSection";
import PrivateNetworkSection from "@/features/cpu-cluster/components/private-network/PrivateNetworkSection";

const CpuClusterPage = () => {
  return (
    <>
      <AnnouncementSection />
      <HeaderComponent />
      <Divider orientation="horizontal" />
      <CpuClusterHeroSection />
      <CPUWorkloadSection />
      <AIStackSection />
      <OSImageSection />
      <PrivateNetworkSection />
      <FaqSection items={CPU_CLUSTER_FAQ_ITEMS} />
      <FooterComponent
        title={CPU_CLUSTER_FOOTER.title}
        description={CPU_CLUSTER_FOOTER.description}
        button1Text={CPU_CLUSTER_FOOTER.button1Text}
        button2Text={CPU_CLUSTER_FOOTER.button2Text}
        className="pt-0 md:pt-0 2xl:pt-0"
        hasBGImage
      />
    </>
  );
};

export default CpuClusterPage;
