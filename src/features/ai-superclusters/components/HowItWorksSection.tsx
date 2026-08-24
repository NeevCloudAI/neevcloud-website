import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { AI_SUPERCLUSTERS_STEPS } from "../data/how-it-works.data";

const HowItWorksSection = () => {
  return (
    <section
      className="relative bg-cloud-gray py-8 md:py-16 2xl:py-25"
      aria-labelledby="ai-superclusters-how-it-works-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" id="ai-superclusters-how-it-works-heading" align="center">
          From spec sheet to{" "}
          <Text as="span" variant="h2" textColor="primary" weight="semibold">
            SSH access.
          </Text>
        </Text>
        <Text as="h6" textColor="black/60" align="center" className="mt-2.5 max-w-2xl">
          No procurement cycles, no hyperscaler quotas, no shared tenancy. A
          dedicated cluster, built to your spec, racked at our AI Gigacampus.
        </Text>

        <ol className="w-full mt-6 md:mt-12.5 grid grid-cols-2 md:grid-cols-4 gap-5 list-none p-0 m-0">
          {AI_SUPERCLUSTERS_STEPS.map((step) => (
            <li
              key={step.number}
              className="flex flex-col gap-2.5 rounded-md bg-white p-5"
            >
              <Text as="h3" weight="semibold" textColor="primary">
                {step.number}
              </Text>
              <Text as="h5" weight="semibold">
                {step.title}
              </Text>
              <Text as="small" textColor="black/60">
                {step.description}
              </Text>
              <Text as="small" textColor="primary" className="mt-auto uppercase tracking-wide">
                {step.tag}
              </Text>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
};

export default HowItWorksSection;
