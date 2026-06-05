import { Text } from "@/shared/ui-lib";

const FleetManagementContent = () => (
  <>
    <Text fontFamily="spaceMono" textColor="gray-75" className="mt-1 leading-7">
      # Scale agent fleet across GPU nodes
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      neevcloud agents scale research-agent \
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp; --replicas
      <Text as="span" variant="h6" textColor="primary">
        10
      </Text>
      \
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp; --gpu
      <Text as="span" variant="h6" textColor="white">
        a100
      </Text>
      \
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp; --min-ready
      <Text as="span" variant="h6" textColor="primary">
        8
      </Text>
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="gray-75"
      className="mt-4 md:mt-6 leading-7"
    >
      # Rolling update with zero downtime
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      neevcloud agents update research-agent \
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp; --image
      <Text as="span" variant="h6" textColor="red-50">
        neevcloud.com/registry/research-agent:v2
      </Text>
      \
    </Text>
    <Text
      fontFamily="spaceMono"
      textColor="primary"
      as="h6"
      className="leading-7"
    >
      &nbsp; --strategy
      <Text as="span" variant="h6" textColor="white">
        RollingUpdate
      </Text>
    </Text>
  </>
);

export default FleetManagementContent;
