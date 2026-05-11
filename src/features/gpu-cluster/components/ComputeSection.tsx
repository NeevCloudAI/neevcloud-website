import Container from "@/shared/components/container";
import { FeatureCard } from "@/shared/components/feature-card";
import { Text } from "@/shared/ui-lib";
import { PRICING_FEATURES } from "../data/pricing-feature.data";

const ComputeSection = () => {
  return (
    <section className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat bg-black pb-[3vh] md:pb-[7vh]">
      <Container className="flex flex-col items-center justify-center">
        <Text as="h3" textColor="white">
          Every Instance
          <Text as="span" weight="semibold" variant="h3" textColor="primary">
            Includes.
          </Text>
        </Text>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:mt-8">
          {PRICING_FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              theme="dark"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ComputeSection;
