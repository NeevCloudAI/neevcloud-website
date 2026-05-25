import Container from "@/shared/components/container";
import { FeatureCard } from "@/shared/components/feature-card";
import { Text } from "@/shared/ui-lib";
import { PRICING_FEATURES } from "../data/pricing-feature.data";

const ComputeSection = () => {
  return (
    <section className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat bg-black pb-8 md:pb-16 2xl:pb-25">
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" textColor="white">
          Every Instance
          <Text as="span" variant="h2" textColor="primary">
            Includes.
          </Text>
        </Text>

        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 mt-4 md:mt-12.5">
          {PRICING_FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              theme="dark"
              className="bg-gray-120"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ComputeSection;
