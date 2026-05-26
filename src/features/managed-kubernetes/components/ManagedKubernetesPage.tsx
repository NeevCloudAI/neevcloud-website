import AnnouncementSection from "@/features/Home/components/AnnouncementSection";
import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import HeaderComponent from "@/shared/components/header";
import { CPU_CLUSTER_FAQ_ITEMS } from "@/shared/data/faq-section-data";
import { Divider } from "@/shared/ui-lib";
import { MANAGED_KUBERNETES_FOOTER } from "@/features/managed-kubernetes/constants/managed-kubernetes-page.constants";
import ControlPlaneSection from "@/features/managed-kubernetes/components/ControlPlaneSection";
import DeployWorkloadSection from "@/features/managed-kubernetes/components/DeployWorkloadSection";
import ManagedKubernetesHeroSection from "@/features/managed-kubernetes/components/ManagedKubernetesHeroSection";
import NeedsSection from "@/features/managed-kubernetes/components/NeedsSection";
import PurposeSection from "@/features/managed-kubernetes/components/PurposeSection";

const ManagedKubernetesPage = () => {
  return (
    <>
      <AnnouncementSection />
      <HeaderComponent />
      <Divider orientation="horizontal" />
      <ManagedKubernetesHeroSection />
      <PurposeSection />
      <NeedsSection />
      <DeployWorkloadSection />
      <ControlPlaneSection />
      <FaqSection
        items={CPU_CLUSTER_FAQ_ITEMS}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
      <FooterComponent
        title={MANAGED_KUBERNETES_FOOTER.title}
        description={MANAGED_KUBERNETES_FOOTER.description}
        button1Text={MANAGED_KUBERNETES_FOOTER.button1Text}
        button2Text={MANAGED_KUBERNETES_FOOTER.button2Text}
        className="pt-0 md:pt-0 2xl:pt-0"
        hasBGImage
      />
    </>
  );
};

export default ManagedKubernetesPage;
