import FaqSection from "@/shared/components/faq/faq-section";
import FooterComponent from "@/shared/components/footer";
import ManagedKubernetesHeroSection from "./ManagedKubernetesHeroSection";
import PurposeSection from "./PurposeSection";
import NeedsSection from "./NeedsSection";
import DeployWorkloadSection from "./DeployWorkloadSection";
import ControlPlaneSection from "./ControlPlaneSection";
import { MANAGED_KUBERNETES_FOOTER } from "../constants/managed-kubernetes-page.constants";
import { KUBERNETES_CLUSTER_FAQ_ITEMS } from "../data/faq-section-data";

const ManagedKubernetesPage = () => {
  return (
    <>
      <ManagedKubernetesHeroSection />
      <PurposeSection />
      <NeedsSection />
      <DeployWorkloadSection />
      <ControlPlaneSection />
      <FaqSection
        items={KUBERNETES_CLUSTER_FAQ_ITEMS}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
      <FooterComponent
        title={MANAGED_KUBERNETES_FOOTER.title}
        description={MANAGED_KUBERNETES_FOOTER.description}
        button1Text={MANAGED_KUBERNETES_FOOTER.button1Text}
        button2Text={MANAGED_KUBERNETES_FOOTER.button2Text}
        className="pt-0 md:pt-0 2xl:pt-0"
      />
    </>
  );
};

export default ManagedKubernetesPage;
