import Container from "@/shared/components/container";
import { FeatureCard } from "@/shared/components/feature-card";
import { Text } from "@/shared/ui-lib";
import { PRICING_FEATURES } from "../data/pricing-feature.data";

const ComputeSection = () => {
  return (
    <section
      className="relative bg-black pb-8 md:pb-16 2xl:pb-25"
      aria-labelledby="gpu-compute-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" id="gpu-compute-section-heading" textColor="white">
          Every Instance
          <Text as="span" variant="h2" textColor="primary">
            Includes.
          </Text>
        </Text>

        <ul className="w-full flex flex-wrap justify-center gap-5 mt-4 md:mt-12.5 list-none p-0 m-0">
          {PRICING_FEATURES.map((feature) => (
            <li
              key={feature.title}
              className="w-full md:w-[calc((100%-2.5rem)/3)]"
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                theme="dark"
                lucideIcon={feature.lucideIcon}
                image={feature.image}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default ComputeSection;
