import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import {
  PURPOSE_CONTROL_PLANE,
  PURPOSE_FLOW_STACK,
  PURPOSE_NODE_POOLS,
  PURPOSE_STORAGE_LABELS,
} from "../data/purpose-section.data";
import PurposeFlowCard from "./purpose/PurposeFlowCard";
import PurposeFlowConnector from "./purpose/PurposeFlowConnector";
import PurposeControlPlaneBlock from "./purpose/PurposeControlPlaneBlock";
import PurposeControlPlaneBranchConnector from "./purpose/PurposeControlPlaneBranchConnector";
import PurposeLegend from "./purpose/PurposeLegend";
import PurposeFeaturesGrid from "./purpose/PurposeFeaturesGrid";

const PurposeSection = () => {
  return (
    <section
      className="bg-gray-10 py-8 md:py-16 2xl:py-25"
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
          Purpose-Built for
          <Text as="span" variant="h2" textColor="primary">
            GPU Workloads
          </Text>
        </Text>

        <Text
          as="h6"
          align="center"
          textColor="black-15"
          className="max-w-2xl mt-2.5"
        >
          Click any node to inspect it. The diagram is the deploy: everything
          below the control plane is what you pay for; everything above runs on
          us.
        </Text>

        <div
          className="mt-6 md:mt-12.5 flex w-full gap-4 md:gap-12.5 flex-col items-center "
          role="img"
          aria-label="Kubernetes architecture diagram showing team, tools, control plane, node pools, and storage"
        >
          {PURPOSE_FLOW_STACK.map((node, index) => (
            <div
              key={node.id}
              className="relative flex w-full flex-col items-center"
            >
              <PurposeFlowCard node={node} />
              {index < PURPOSE_FLOW_STACK.length && <PurposeFlowConnector />}
            </div>
          ))}

          <div className="flex w-full flex-col items-center">
            <PurposeControlPlaneBlock node={PURPOSE_CONTROL_PLANE} />
            <PurposeControlPlaneBranchConnector />
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-12 md:-mt-1">
              {PURPOSE_NODE_POOLS.map((node) => (
                <PurposeFlowCard key={node.id} node={node} />
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {PURPOSE_STORAGE_LABELS.map((label) => (
              <Text
                key={label}
                weight="semibold"
                className="rounded-md border border-black px-6 py-1.5"
              >
                {label}
              </Text>
            ))}
          </div>
        </div>

        <PurposeLegend />
        <PurposeFeaturesGrid />
      </Container>
    </section>
  );
};

export default PurposeSection;
