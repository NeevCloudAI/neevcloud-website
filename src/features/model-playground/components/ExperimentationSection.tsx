import Container from "@/shared/components/container";
import { FeatureCard } from "@/shared/components/feature-card";
import { EXPERIMENTATION_SECTION_FEATURES } from "../data/experimentation-section.data";
import { Text } from "@/shared/ui-lib";

const ExperimentationSection = () => {
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
        <Text
          as="h2"
          id="experimentation-section-heading"
          textColor="white"
          weight={"semibold"}
        >
          Built For
          <Text as="span" variant="h2" textColor="primary" weight={"semibold"}>
            Experimentation
          </Text>
        </Text>
        <ul className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 mt-4 md:mt-12.5 list-none p-0 m-0">
          {EXPERIMENTATION_SECTION_FEATURES.map((feature) => (
            <li key={feature.title}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                theme="transparent"
                icon={feature.icon}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default ExperimentationSection;
