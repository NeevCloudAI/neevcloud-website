import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { AVAILABLE_MODELS_FEATURES } from "../data/available-models-features";
import FeatureCard from "./FeatureCard";


const AvailableModelsSection = () => {
  return (
    <section className="relative bg-gray-10 py-[3vh] md:py-[10vh]">
      {/* Teal gradient top-center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-15 bg-teal-300/60 blur-3xl rounded-full pointer-events-none" />
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" weight={"semibold"} align="center">
          Skip the Infrastructure
        </Text>
        <Text as="span" variant="h2" textColor="primary" weight={"semibold"}>
          Use the Intelligence
        </Text>
        <Text as="h6" align="center" textColor="black" className="mt-2">
          Building AI applications shouldn't require expertise in model
          deployment, scaling infrastructure, or
        </Text>
        <Text as="h6" align="center" textColor="black">
          GPU orchestration. Our Model API gives you direct access to
          production-grade models through
        </Text>
        <Text as="h6" align="center" textColor="black">
          standard HTTP requests, so you can focus on building features that
          matter to your users.
        </Text>

        <div className="mt-8 md:mt-12 grid w-full grid-cols-1 gap-4 md:grid-cols-3">
          {AVAILABLE_MODELS_FEATURES.map((card) => (
            <FeatureCard key={card.index} {...card} />
          ))}
        </div>

      </Container>
    </section>
  );
};

export default AvailableModelsSection;
