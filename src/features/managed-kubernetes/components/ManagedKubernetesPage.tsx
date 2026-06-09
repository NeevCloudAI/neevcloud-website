import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import { CPU_CLUSTER_FAQ_ITEMS } from "@/shared/data/faq-section-data";
import ManagedKubernetesHeroSection from "./ManagedKubernetesHeroSection";
import PurposeSection from "./PurposeSection";
import NeedsSection from "./NeedsSection";
import DeployWorkloadSection from "./DeployWorkloadSection";
import ControlPlaneSection from "./ControlPlaneSection";
import { MANAGED_KUBERNETES_FOOTER } from "../constants/managed-kubernetes-page.constants";

const ManagedKubernetesPage = () => {
  return (
    <>
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
        primaryCta={MANAGED_KUBERNETES_FOOTER.primaryCta}
        secondaryCta={MANAGED_KUBERNETES_FOOTER.secondaryCta}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
    </>
  );
};

export default ManagedKubernetesPage;
