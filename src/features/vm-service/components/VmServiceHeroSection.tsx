import HeroSection from "@/shared/components/HeroSection";
import { Text } from "@/shared/ui-lib";
import { VM_SERVICE_HERO } from "../constants/vm-service-page.constants";

const VmServiceHeroSection = () => {
  return (
    <HeroSection
      title={
        <>
          <Text
            as="h1"
            className="max-w-5xl text-center mt-4 md:mt-6"
            textColor="white"
          >
            General-Purpose Cloud VMs
          </Text>
          <Text as="h1" className="max-w-5xl text-center" textColor="white">
            with
            <Text as="span" variant="h1" textColor="primary" weight="semibold">
              Seamless GPU Integration
            </Text>
          </Text>
        </>
      }
      {...VM_SERVICE_HERO}
    />
  );
};

export default VmServiceHeroSection;
