import { COMPLETE_AI_CARDS } from "../data/complete-ai-section.data";
import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { FeatureCard } from "@/shared/components/feature-card";

const CompleteAISection = () => {
  return (
    <section
      className="relative bg-black py-8 md:py-16 2xl:py-25"
      aria-labelledby="experimentation-section-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-full  md:w-[30%] h-[80%] top-20 right-[-5%] opacity-40 md:opacity-100"
        aria-hidden="true"
      />
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" id="experimentation-section-heading" textColor="white">
          Complete
          <Text as="span" variant="h2" textColor="primary">
            AI infrastructure control
          </Text>
        </Text>
        <ul className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 mt-4 md:mt-12.5 list-none p-0 m-0">
          {COMPLETE_AI_CARDS.map((feature) => (
            <li key={feature.title}>
              <FeatureCard
                title={feature.title}
                icon={feature.icon}
                description={feature.description}
                theme="transparent"
                className="bg-gray-120 backdrop-blur-md"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default CompleteAISection;
