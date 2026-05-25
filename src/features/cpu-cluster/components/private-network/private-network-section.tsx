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
    <div className="relative bg-gray-10 py-8 md:py-16 2xl:py-25">
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" align="center" className="max-w-5xl">
          Same Private Network,
          <Text as="span" variant="h2" textColor="primary">
            as your GPU Cluster.
          </Text>
        </Text>
        <Text as="h6" align="center" textColor="black-5">
          Boot in seconds with curated stacks, or upload your own ISO.
        </Text>
        <div className="w-full mt-4 md:mt-12.5 flex flex-col items-stretch justify-between md:flex-row">
          <ComputeInstanceCard {...COMPUTE_INSTANCES[0]} />
          <NetworkFlowSummary />
          <ComputeInstanceCard {...COMPUTE_INSTANCES[1]} />
        </div>
        <Text
          as="h3"
          weight="semibold"
          className="mt-6 md:mt-12.5"
          align="center"
        >
          Networking Features
        </Text>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 mt-4 md:mt-7.5">
          {NETWORKING_FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
        <div className="flex justify-center mt-4 md:mt-12.5">
          <div className="flex flex-col md:flex-row items-stretch p-4 md:p-7.5 bg-primary w-fit gap-4 rounded-lg">
            <Text
              as="h3"
              weight="semibold"
              textColor="tertiary"
              className="text-[40px] bg-gray-10 rounded-md w-fit h-fit leading-none p-4 py-5"
            >
              {ZERO_EGRESS_PRICE}
            </Text>
            <div className="flex flex-col text-white">
              <Text as="h3" weight="semibold" className="mb-1.25">
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
