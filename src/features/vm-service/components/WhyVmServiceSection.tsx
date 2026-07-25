import Container from "@/shared/components/container";
import { FeatureCard } from "@/shared/components/feature-card";
import { Text } from "@/shared/ui-lib";
import { VM_SERVICE_WHY_ITEMS } from "../data/why-vm-service-section.data";

const WhyVmServiceSection = () => {
  return (
    <section
      className="relative bg-cloud-gray py-8 md:py-16 2xl:py-25"
      aria-labelledby="vm-service-why-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="vm-service-why-heading"
          textColor="black"
          align="center"
          className="max-w-3xl"
        >
          CPU Compute That
          <Text as="span" variant="h2" textColor="primary" weight="semibold">
            Lives Next to Your GPUs
          </Text>
        </Text>
        <Text
          as="h6"
          textColor="black/82"
          align="center"
          className="mt-2.5 max-w-2xl"
        >
          Data preprocessing, APIs, and databases need cost-effective CPU
          compute — but running them on a separate cloud adds latency and
          overhead. NeevCloud VM Service keeps everything on one platform.
        </Text>

        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-4 md:mt-12.5 list-none p-0 m-0">
          {VM_SERVICE_WHY_ITEMS.map((item) => (
            <li key={item.title}>
              <FeatureCard {...item} theme="light" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default WhyVmServiceSection;
