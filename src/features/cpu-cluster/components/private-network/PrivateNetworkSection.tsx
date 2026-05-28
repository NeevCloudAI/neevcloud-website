import Container from "@/shared/components/container";
import { FeatureCard } from "@/shared/components/feature-card";
import ComputeInstanceCard from "./ComputeInstanceCard";
import NetworkFlowSummary from "./NetworkFlowSummary";
import ZeroEgressCallout from "./ZeroEgressCallout";
import {
  COMPUTE_INSTANCES,
  NETWORKING_FEATURES,
} from "../../data/private-network-section.data";
import { Text } from "@/shared/ui-lib";

const PrivateNetworkSection = () => {
  return (
    <section
      className="relative bg-gray-10 py-8 md:py-16 2xl:py-25"
      aria-labelledby="cpu-private-network-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="cpu-private-network-section-heading"
          align="center"
          className="max-w-5xl"
        >
          Same Private Network,
          <Text as="span" variant="h2" textColor="primary">
            as your GPU Cluster.
          </Text>
        </Text>
        <Text as="h6" align="center" textColor="black-5" className="mt-2.5">
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
        <ul className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 mt-4 md:mt-7.5 list-none p-0 m-0">
          {NETWORKING_FEATURES.map((feature) => (
            <li key={feature.title}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
              />
            </li>
          ))}
        </ul>
        <ZeroEgressCallout />
      </Container>
    </section>
  );
};

export default PrivateNetworkSection;
