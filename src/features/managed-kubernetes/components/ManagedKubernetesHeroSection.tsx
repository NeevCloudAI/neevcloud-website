import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { MANAGED_KUBERNETES_HERO } from "../constants/managed-kubernetes-page.constants";

const ManagedKubernetesHeroSection = () => {
  return (
    <HeroSection
      title={
        <Text as="h1" align="center" className="max-w-6xl mt-4 md:mt-6">
          Kubernetes Built for GPUs.
          <Text
            variant="h1"
            as="span"
            textColor="primary"
            className="mr-0 md:mr-0"
          >
            Managed
          </Text>
          {`, So You Don't Have To Be.`}
        </Text>
      }
      description={MANAGED_KUBERNETES_HERO.description}
      primaryCta={MANAGED_KUBERNETES_HERO.primaryCta}
      secondaryCta={MANAGED_KUBERNETES_HERO.secondaryCta}
      badgeText={MANAGED_KUBERNETES_HERO.badgeText}
      image={MANAGED_KUBERNETES_HERO.image}
      trustBadges={[...MANAGED_KUBERNETES_HERO.trustBadges]}
    />
  );
};

export default ManagedKubernetesHeroSection;
