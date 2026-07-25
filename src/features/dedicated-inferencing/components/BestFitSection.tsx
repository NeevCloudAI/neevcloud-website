import Container from "@/shared/components/container";
import { FeatureCard } from "@/shared/components/feature-card";
import { Text } from "@/shared/ui-lib";
import { DEDICATED_INFERENCING_BEST_FIT_ITEMS } from "../data/best-fit-section.data";

const BestFitSection = () => {
  return (
    <section
      className="relative bg-black py-8 md:py-16 2xl:py-25"
      aria-labelledby="dedicated-inferencing-best-fit-heading"
    >
      <Container className="flex flex-col items-center">
        <Text
          as="h2"
          id="dedicated-inferencing-best-fit-heading"
          textColor="white"
        >
          Best
          <Text as="span" variant="h2" textColor="primary" weight="semibold">
            Fit
          </Text>
        </Text>
        <Text
          as="h6"
          textColor="cloud-gray"
          className="mt-2.5 max-w-md"
          align={"center"}
        >
          Dedicated Inferencing is ideal for workloads that need stability,
          privacy, and full resource control.
        </Text>

        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-4 md:mt-12.5 list-none p-0 m-0">
          {DEDICATED_INFERENCING_BEST_FIT_ITEMS.map((item) => (
            <li key={item.title}>
              <FeatureCard {...item} theme="light" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default BestFitSection;
