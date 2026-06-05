import Container from "@/shared/components/container";
import ControlPlanePricingTerminal from "./control-plane/ControlPlanePricingTerminal";
import ControlPlaneWhatsIncludedCard from "./control-plane/ControlPlaneWhatsIncludedCard";
import ReservedNodePricing from "./control-plane/ReservedNodePricing";
import { Text } from "@/shared/ui-lib";

const ControlPlaneSection = () => {
  return (
    <section
      className="relative bg-black py-8 md:py-25"
      aria-labelledby="control-plane-section-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-[50%] md:w-[30%] h-[75%] md:h-[50%] top-5 md:top-10 right-[-5%] opacity-50 md:opacity-100"
        aria-hidden="true"
      />
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="control-plane-section-heading"
          textColor="white"
          className="max-w-4xl"
        >
          Control Plane
          <Text as="span" variant="h2" textColor="primary">
            Free.
          </Text>
          Pay Only for Nodes.
        </Text>
        <Text
          as="h6"
          textColor="gray-10"
          align="center"
          className="max-w-2xl mt-2.5"
        >
          The NKS control plane runs on our infrastructure at no charge. You pay
          only for GPU and CPU nodes in your cluster.
        </Text>
        <div className="flex flex-col md:flex-row gap-5 mt-4 md:mt-8 w-full">
          <ControlPlanePricingTerminal />
          <ControlPlaneWhatsIncludedCard />
        </div>
        <ReservedNodePricing />
      </Container>
    </section>
  );
};

export default ControlPlaneSection;
