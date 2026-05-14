import Container from "@/shared/components/container";
import {
  FeatureCard,
  FeatureCardProps,
} from "@/shared/components/feature-card";
import { Text } from "@/shared/ui-lib";

const EXPERIMENTATION_SECTION_FEATURES: FeatureCardProps[] = [
  {
    title: "Interactive Testing Interface",
    description:
      "Try models through a clean, intuitive interface. Enter text, upload files, or paste URLs depending on the model type. See results instantly with clear formatting and metadata.",
  },
  {
    title: "Parameter Control",
    description:
      "Adjust model parameters to see how they affect outputs. Experiment with temperature for creativity. Understand how different settings change behavior.",
  },
  {
    title: "Side-by-Side Comparison",
    description:
      "Run the same input through multiple models simultaneously. Compare response quality, speed, and format to choose the best model for your needs.",
  },
  {
    title: "Example Prompts",
    description:
      "Not sure where to start? Each model includes example prompts that demonstrate its capabilities. Use them as-is or modify them to test your specific use case.",
  },
  {
    title: "Export and Share",
    description:
      "Save interesting results, export test cases, or share examples with your team. The Playground makes it easy to document findings and communicate discoveries.",
  },
  {
    title: "Usage Limits",
    description:
      "Free access includes generous usage limits for exploration. 100 requests per day per model category, 50 file uploads per day, Standard response times.",
  },
];

const ExperimentationSection = () => {
  return (
    <section className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat bg-black py-[3vh] md:py-[10vh]">
      <div className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-full  md:w-[30%] h-[80%] top-20 right-[-5%] opacity-40 md:opacity-100"></div>
      <div className="pointer-events-none absolute inset-0 z-1 bg-radial from-teal-300/30 via-transparent to-transparent blur-xl"></div>
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" textColor="white" weight={"semibold"}>
          Built For
          <Text as="span" variant="h2" textColor="primary" weight={"semibold"}>
            Experimentation
          </Text>
        </Text>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:mt-8">
          {EXPERIMENTATION_SECTION_FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              theme="dark"
              className="bg-gray-120 backdrop-blur-xs"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ExperimentationSection;
