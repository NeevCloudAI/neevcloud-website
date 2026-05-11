import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import {
  ComputeInstanceCard,
  NetworkFlowSummary,
} from "@/features/cpu-cluster/components/private-network";
import {
  COMPUTE_INSTANCES,
  NETWORKING_FEATURES,
  ZERO_EGRESS_DESCRIPTION,
  ZERO_EGRESS_DESCRIPTION_LINES,
  ZERO_EGRESS_PRICE,
  ZERO_EGRESS_TITLE,
} from "@/features/cpu-cluster/data/private-network-section-data";
import { FeatureCard } from "@/shared/components/feature-card";

function PrivateNetworkSection() {
  return (
    <div className="bg-gray-10">
      <Container className="py-[3vh] md:py-[7vh]">
        <Text as="h2" weight="semibold" align="center">
          Same Private Network,
        </Text>
        <Text as="h2" weight="semibold" align="center" textColor="primary">
          as your GPU Cluster.
        </Text>
        <Text as="h6" align="center" textColor="black" className="mt-2">
          Boot in seconds with curated stacks, or upload your own ISO.
        </Text>
        <div className="mt-4 flex flex-col items-stretch justify-between md:mt-8 md:flex-row">
          <ComputeInstanceCard {...COMPUTE_INSTANCES[0]} />
          <NetworkFlowSummary />
          <ComputeInstanceCard {...COMPUTE_INSTANCES[1]} />
        </div>
        <Text
          as="h3"
          weight="semibold"
          className="mt-6 md:mt-12"
          align="center"
        >
          Networking Features
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          {NETWORKING_FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        <div className="flex justify-center mt-4 md:mt-12">
          <div className="flex flex-col md:flex-row items-stretch p-4 md:p-8 bg-primary w-fit gap-4 rounded-lg">
            <Text
              as="h2"
              weight="semibold"
              textColor="black"
              className="bg-gray-10 px-4 py-4 md:py-5 rounded-md w-fit"
            >
              {ZERO_EGRESS_PRICE}
            </Text>
            <div className="flex flex-col text-white">
              <Text as="h3" weight="semibold" className="mb-2">
                {ZERO_EGRESS_TITLE}
              </Text>
              <Text className="block md:hidden">{ZERO_EGRESS_DESCRIPTION}</Text>
              <Text className="hidden md:block">
                {ZERO_EGRESS_DESCRIPTION_LINES[0]}
              </Text>
              <Text className="hidden md:block">
                {ZERO_EGRESS_DESCRIPTION_LINES[1]}
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default PrivateNetworkSection;
