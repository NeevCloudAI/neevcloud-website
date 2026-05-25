import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { CONTRIBUTE_CATEGORIES } from "../data/contribute-data";
import { CategoryFeatureCard } from "@/shared/components/category-feature-card";

const ContributeSection = () => {
  return (
    <section className="relative bg-white py-8 md:py-16 2xl:py-25">
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" textColor="black" align="center" className="max-w-4xl">
          Contributing to
          <Text as="span" variant="h2" textColor="primary">
            National AI Infrastructure
          </Text>
          Goals
        </Text>
        <Text as="h6" align="center" textColor="black-5" className="max-w-3xl">
          {`The India AI Mission aims to democratize AI access, build indigenous
          capabilities, and position India as a global AI leader. NeevCloud's
          infrastructure directly supports these objectives through accessible,
          sovereign, and scalable AI compute.`}
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-4 md:pt-12.5">
          {CONTRIBUTE_CATEGORIES.map((category) => (
            <CategoryFeatureCard key={category.title} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ContributeSection;
