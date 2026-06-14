import Container from "@/shared/components/container";
import DeployStorageAutomaticCard from "./deploy-storage/DeployStorageAutomaticCard";
import DeployStorageCustomTerminal from "./deploy-storage/DeployStorageCustomTerminal";
import { Text } from "@/shared/ui-lib";

const DeployStorageSection = () => {
  return (
    <section
      className="relative bg-cloud-gray py-8 md:py-16 2xl:py-25"
      aria-labelledby="nvme-deploy-storage-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="nvme-deploy-storage-section-heading"
          textColor="black"
          className="max-w-4xl"
          align="center"
        >
          How to Deploy
          <Text as="span" variant="h2" textColor="primary">
            NVMe Storage
          </Text>
        </Text>
        <Text
          as="h6"
          className="max-w-3xl mt-2.5"
          align="center"
          textColor="gray-05"
        >
          Choose your deployment mode, automatic provisioning at launch or
          custom capacity. Generate your exact CLI command instantly.
        </Text>

        <div className="w-full flex flex-col md:flex-row gap-4 mt-4 md:mt-12.5">
          <DeployStorageAutomaticCard />
          <DeployStorageCustomTerminal />
        </div>
      </Container>
    </section>
  );
};

export default DeployStorageSection;
