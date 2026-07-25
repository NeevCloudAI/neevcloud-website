import Container from "@/shared/components/container";
import { FeatureCard } from "@/shared/components/feature-card";
import { Text } from "@/shared/ui-lib";
import { DEDICATED_INFERENCING_PRACTICE_ITEMS } from "../data/practice-section.data";

const PracticeSection = () => {
  return (
    <section
      className="relative bg-cloud-gray py-8 md:py-16 2xl:py-25"
      aria-labelledby="dedicated-inferencing-practice-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="dedicated-inferencing-practice-heading"
          textColor="black"
          align="center"
          className="max-w-3xl"
        >
          What Reserved Inference
          <Text as="span" variant="h2" textColor="primary" weight="semibold">
            Means in Practice
          </Text>
        </Text>

        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-4 md:mt-12.5 list-none p-0 m-0">
          {DEDICATED_INFERENCING_PRACTICE_ITEMS.map((item) => (
            <li key={item.title}>
              <FeatureCard {...item} theme="light" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default PracticeSection;
