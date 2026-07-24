import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { MANAGED_KUBERNETES_HERO } from "../constants/managed-kubernetes-page.constants";

const ManagedKubernetesHeroSection = () => {
  return (
    <HeroSection
      title={
        <>
          <Text
            as="h1"
            align="center"
            className="max-w-6xl mt-4 md:mt-6"
            textColor={"white"}
          >
            Kubernetes Built for GPUs.
            <Text
              variant="h1"
              as="span"
              textColor="primary"
              className="mr-0 md:mr-0"
            >
              Managed
            </Text>
            {`,`}
          </Text>
          <Text
            as="h1"
            align="center"
            className="max-w-6xl"
            textColor={"white"}
          >
            {`So You Don't Have To Be.`}
          </Text>
        </>
      }
      {...MANAGED_KUBERNETES_HERO}
    />
  );
};

export default ManagedKubernetesHeroSection;
