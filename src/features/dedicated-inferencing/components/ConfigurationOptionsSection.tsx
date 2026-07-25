import Container from "@/shared/components/container";
import { FeatureCard } from "@/shared/components/feature-card";
import { Text } from "@/shared/ui-lib";
import { DEDICATED_INFERENCING_CONFIGURATION_ITEMS } from "../data/configuration-options-section.data";

const ConfigurationOptionsSection = () => {
  return (
    <section
      className="relative bg-cloud-gray py-8 md:py-16 2xl:py-25"
      aria-labelledby="dedicated-inferencing-configuration-heading"
    >
      <Container className="flex flex-col items-center">
        <Text
          as="h2"
          id="dedicated-inferencing-configuration-heading"
          textColor="black"
        >
          Configuration
          <Text as="span" variant="h2" textColor="primary" weight="semibold">
            Options
          </Text>
        </Text>
        <Text as="h6" textColor="cloud-gray" className="mt-2.5 max-w-2xl">
          Set these at deploy time to match your model and workload
          requirements.
        </Text>

        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-4 md:mt-12.5 list-none p-0 m-0">
          {DEDICATED_INFERENCING_CONFIGURATION_ITEMS.map((item) => (
            <li key={item.title}>
              <FeatureCard {...item} theme="light" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default ConfigurationOptionsSection;
