import { Text } from "@/shared/ui-lib";

const GpuClusterWorkloadContent = () => (
  <>
    <Text fontFamily="spaceMono" textColor="gray-75" className="mt-1 leading-7">
      # Create NKS cluster on AI Factory infrastructure
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      neevcloud
      <Text as="span" variant="p" textColor="white">
        nks
      </Text>
      create
      <Text as="span" variant="p" textColor="white">
        production-cluster \
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp; --region
      <Text as="span" variant="p" textColor="white">
        indore \
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp; --node-pool
      <Text as="span" variant="p" textColor="white">
        h100 \
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp; --nodes
      <Text as="span" variant="p" textColor="white">
        16 \
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp; --cooling
      <Text as="span" variant="p" textColor="white">
        liquid-immersion \
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp; --power
      <Text as="span" variant="p" textColor="white">
        renewable
      </Text>
    </Text>
    <Text fontFamily="spaceMono" textColor="gray-75" className="mt-4 md:mt-6">
      # InfiniBand networking configured automatically
    </Text>
  </>
);

export default GpuClusterWorkloadContent;
