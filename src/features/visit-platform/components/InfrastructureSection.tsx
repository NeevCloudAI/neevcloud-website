import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import {
  PURPOSE_CONSOLE_NODE,
  PURPOSE_SERVICE_NODES,
  PURPOSE_NETWORK_NODE,
  PURPOSE_CPU_NODE,
} from "../data/infrastructure-section.data";
import PurposeFlowCard from "./infrastructure/PurposeFlowCard";
import PurposeControlPlaneBlock from "./infrastructure/ControlPlaneBlock";
import PurposeControlPlaneBranchConnector from "./infrastructure/PurposeControlPlaneBranchConnector";
import PurposeServiceBranchConnector from "./infrastructure/PurposeServiceBranchConnector";

const PurposeSection = () => {
  return (
    <section
      className="py-8 md:py-16 2xl:py-25"
      aria-labelledby="purpose-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="purpose-section-heading"
          textColor="black"
          align="center"
          className="max-w-4xl"
        >
          Full-stack infrastructure
          <Text>
            <Text as="span" variant="h2" textColor="black">
              under{" "}
            </Text>
            <Text as="span" variant="h2" textColor="primary">
              your control
            </Text>
          </Text>
        </Text>

        <Text
          as="h6"
          align="center"
          textColor="black-15"
          className="max-w-3.5xl mt-2.5"
        >
          All services connect through high-speed private networking. Deploy GPU
          instances, attach storage, connect to CPU instances, and serve through
          inference, all working together seamlessly.
        </Text>

        <div
          className="mt-6 md:mt-12.5 flex w-full flex-col items-center"
          role="img"
          aria-label="Infrastructure architecture diagram"
        >
          {/* Console block at top */}
          <PurposeControlPlaneBlock node={PURPOSE_CONSOLE_NODE} />

          {/* Branch connector: console → 3 services */}
          <PurposeControlPlaneBranchConnector />

          {/* 3 service cards */}
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 md:-mt-1">
            {PURPOSE_SERVICE_NODES.map((node) => (
              <PurposeFlowCard
                key={node.id}
                node={node}
                className="bg-gray-10"
              />
            ))}
          </div>

          <PurposeServiceBranchConnector />

          {/* Private network block */}
          <PurposeFlowCard node={PURPOSE_NETWORK_NODE} className="bg-gray-60" />

          {/* Straight connector: private network → CPU */}
          <div className="flex flex-col items-center" aria-hidden="true">
            <div className="h-2 w-2 rounded-full bg-primary" />
            <div className="h-10 w-px bg-blue-40" />
            <div className="h-2 w-2 rounded-t-full bg-primary" />
          </div>

          {/* CPU Compute block */}
          <PurposeFlowCard node={PURPOSE_CPU_NODE} className="bg-gray-10 -mt-1" />
        </div>
      </Container>
    </section>
  );
};

export default PurposeSection;
