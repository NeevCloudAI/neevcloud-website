import { Text } from "@/shared/ui-lib";

const ScaleWorkloadContent = () => (
  <>
    <Text fontFamily="spaceMono" textColor="gray-75" className="mt-1">
      # Scale H100 pool to 4 nodes
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      neevcloud
      <Text as="span" variant="p" textColor="white">
        nks scale my-cluster
      </Text>
      --node-pool
      <Text as="span" variant="p" textColor="white">
        h100
      </Text>
      --nodes 4
    </Text>

    <Text fontFamily="spaceMono" textColor="gray-75" className="mt-4 md:mt-6">
      # Scale down to 0 (autoscaler can still scale up)
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      neevcloud
      <Text as="span" variant="p" textColor="white">
        nks scale my-cluster
      </Text>
      --node-pool
      <Text as="span" variant="p" textColor="white">
        h100
      </Text>
      --nodes 0
    </Text>

    <Text fontFamily="spaceMono" textColor="gray-75" className="mt-4">
      # Watch the scale event
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      kubectl
      <Text as="span" variant="p" textColor="white">
        get nodes
      </Text>
      -w
    </Text>
  </>
);

export default ScaleWorkloadContent;
