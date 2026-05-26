import Container from "@/shared/components/container";
import IntelligenceCard from "@/features/model-api/components/IntelligenceCard";
import { INTELLIGENCE_CARDS } from "@/features/model-api/data/intelligence-section.data";
import { Text } from "@/shared/ui-lib";

const IntelligenceSection = () => {
  return (
    <section
      className="bg-gray-10 py-8 md:py-16 2xl:py-25"
      aria-labelledby="model-api-intelligence-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="model-api-intelligence-section-heading"
          textColor="black"
          align="center"
          className="max-w-4xl"
        >
          Skip the Infrastructure,
          <Text as="span" variant="h2" textColor="primary">
            Use the Intelligence
          </Text>
        </Text>

        <Text as="h6" align="center" textColor="gray-75" className="max-w-4xl">
          {`Building AI applications shouldn't require expertise in model
          deployment, scaling infrastructure, or GPU orchestration. Our Model
          API gives you direct access to production-grade models through
          standard HTTP requests, so you can focus on building features that
          matter to your users.`}
        </Text>
        <div className="mt-4 grid grid-cols-1 gap-4 md:mt-12.5 md:grid-cols-3 md:gap-5">
          {INTELLIGENCE_CARDS.map((card) => (
            <IntelligenceCard key={card.id} card={card} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default IntelligenceSection;
