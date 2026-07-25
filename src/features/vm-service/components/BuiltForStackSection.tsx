import Container from "@/shared/components/container";
import { FeatureCard } from "@/shared/components/feature-card";
import { Text } from "@/shared/ui-lib";
import { VM_SERVICE_BUILT_FOR_STACK_ITEMS } from "../data/built-for-stack-section.data";

const BuiltForStackSection = () => {
  return (
    <section
      className="relative bg-black py-8 md:py-16 2xl:py-25"
      aria-labelledby="vm-service-built-for-stack-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="vm-service-built-for-stack-heading"
          textColor="white"
          align="center"
        >
          Built for the
          <Text as="span" variant="h2" textColor="primary" weight="semibold">
            Whole AI Stack
          </Text>
        </Text>

        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-4 md:mt-12.5 list-none p-0 m-0">
          {VM_SERVICE_BUILT_FOR_STACK_ITEMS.map((item) => (
            <li key={item.title}>
              <FeatureCard {...item} theme="light" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default BuiltForStackSection;
