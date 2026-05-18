import Container from "@/shared/components/container";
import {
  PURPOSE_CONTROL_PLANE,
  PURPOSE_FEATURES,
  PURPOSE_FLOW_STACK,
  PURPOSE_LEGEND,
  PURPOSE_NODE_POOLS,
  PURPOSE_STORAGE_LABELS,
  type PurposeFlowNode,
} from "@/features/managed-kubernetes/data/purpose-section-data";
import { Divider, Text } from "@/shared/ui-lib";
import { cn } from "@/lib/utils";

type FlowCardProps = { node: PurposeFlowNode; className?: string };

function FlowConnector({ className }: { className?: string }) {
  return (
    <div
      className={cn("absolute top-[95%] flex flex-col items-center", className)}
      aria-hidden
    >
      <div className="z-3 h-2 w-2 rounded-full bg-primary" />
      <div className="h-5 w-px bg-gray-60 md:h-10" />
      <div className="h-2 w-2 rounded-full bg-primary" />
    </div>
  );
}

function ConnectorDot({ className }: { className?: string }) {
  return (
    <div
      className={cn("absolute h-2 w-2 rounded-full bg-primary", className)}
    />
  );
}

function ControlPlaneBranchConnector() {
  return (
    <div className="flex w-full flex-col items-center" aria-hidden>
      <div className="flex flex-col items-center md:hidden">
        <div className="h-2 w-2 rounded-full bg-primary" />
        <div className="h-5 w-px bg-gray-60" />
        <div className="h-2 w-2 rounded-full bg-primary" />
      </div>

      <div className="relative hidden h-12 w-full md:block md:h-14 lg:h-16">
        <svg
          className="absolute inset-0 size-full overflow-visible"
          viewBox="0 0 1000 64"
          preserveAspectRatio="none"
        >
          <line
            x1="500"
            y1="0"
            x2="167"
            y2="58"
            stroke="var(--gray-60)"
            strokeWidth="1"
          />
          <line
            x1="500"
            y1="0"
            x2="500"
            y2="58"
            stroke="var(--gray-60)"
            strokeWidth="1"
          />
          <line
            x1="500"
            y1="0"
            x2="833"
            y2="58"
            stroke="var(--gray-60)"
            strokeWidth="1"
          />
        </svg>
        <ConnectorDot className="z-4 left-1/2 top-0 -translate-x-1/2 -translate-y-1/2" />
        <ConnectorDot className="bottom-1 left-[16.67%] -translate-x-1/2 translate-y-1/2" />
        <ConnectorDot className="bottom-1 left-1/2 -translate-x-1/2 translate-y-1/2" />
        <ConnectorDot className="bottom-1 left-[83.33%] -translate-x-1/2 translate-y-1/2" />
      </div>
    </div>
  );
}

function FlowCard({ node, className }: FlowCardProps) {
  return (
    <div
      className={cn(
        "z-3 flex flex-col items-center gap-1 bg-white rounded-lg p-4 md:px-24",
        className
      )}
    >
      {node.badge && (
        <Text
          as="small"
          textColor="white"
          className="bg-primary rounded-full px-3 py-0.5"
        >
          {node.badge}
        </Text>
      )}
      <Text as="h4" weight="semibold">
        {node.title}
      </Text>
      <Text as="h6" textColor="gray-85">
        {node.subtitle}
      </Text>

      {node.details && (
        <div className="flex flex-col items-center">
          {node.details.map((detail) => (
            <Text as="h6" textColor="gray-85" key={detail}>
              {detail}
            </Text>
          ))}
        </div>
      )}
    </div>
  );
}

const PurposeSection = () => {
  return (
    <section className="bg-gray-10 py-[3vh] md:py-[7vh]">
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          textColor="black"
          weight="semibold"
          align="center"
          className="max-w-4xl"
        >
          Purpose-Built for
          <Text as="span" variant="h2" textColor="primary">
            GPU Workloads
          </Text>
        </Text>

        <Text align="center" textColor="gray-75" className="max-w-2xl">
          Click any node to inspect it. The diagram is the deploy: everything
          below the control plane is what you pay for; everything above runs on
          us.
        </Text>

        <div className="mt-6 flex w-full gap-4 md:gap-12 flex-col items-center md:mt-10">
          {PURPOSE_FLOW_STACK.map((node, index) => (
            <div
              key={node.id}
              className="relative flex w-full flex-col items-center"
            >
              <FlowCard node={node} />
              {index < PURPOSE_FLOW_STACK.length && <FlowConnector />}
            </div>
          ))}

          <div className="flex w-full flex-col items-center">
            <div className="z-2 w-fit flex flex-col items-center gap-1 bg-black rounded-lg p-4 md:px-24">
              <Text as="h4" weight="semibold" textColor="white">
                {PURPOSE_CONTROL_PLANE.title}
              </Text>
              <Text as="h6" textColor="gray-85">
                {PURPOSE_CONTROL_PLANE.subtitle}
              </Text>
              <Text textColor="primary">{PURPOSE_CONTROL_PLANE.footer}</Text>
            </div>

            <ControlPlaneBranchConnector />
            <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 md:gap-12 md:-mt-1">
              {PURPOSE_NODE_POOLS.map((node) => (
                <FlowCard key={node.id} node={node} />
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

        <ul className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8 md:gap-8">
          {PURPOSE_LEGEND.map((item) => (
            <li key={item.id} className="flex items-center gap-2">
              <span
                className={cn("h-5 w-5 shrink-0 rounded-sm", item.swatchClass)}
                aria-hidden
              />
              <Text textColor="gray-75">{item.label}</Text>
            </li>
          ))}
        </ul>

        <div className="mt-6 w-full rounded-lg bg-white md:mt-10 grid grid-cols-1 md:grid-cols-5">
          {PURPOSE_FEATURES.map((feature, index) => (
            <div
              key={feature.number}
              className="relative flex flex-col gap-1 px-4 py-5 md:px-5 md:py-6"
            >
              {index > 0 ? (
                <Divider
                  orientation="vertical"
                  className="absolute left-0 top-0 hidden h-full bg-gray-60 md:block"
                />
              ) : null}
              {index > 0 ? (
                <Divider
                  orientation="horizontal"
                  className="absolute top-0 left-4 right-4 bg-gray-60 md:hidden"
                />
              ) : null}
              <Text as="small" textColor="primary">
                {feature.number}
              </Text>
              <Text as="h4" weight="semibold">
                {feature.title}
              </Text>
              <Text as="h6" textColor="gray-75">
                {feature.description}
              </Text>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PurposeSection;
