import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { GPU_STORAGE_PRICING_ITEMS } from "../data/storage-pricing-section.data";
import GpuStoragePricingCard from "./GpuStoragePricingCard";

const GpuStoragePricingSection = () => {
  return (
    <section
      className="relative bg-black pb-8 md:pb-16 2xl:pb-25"
      aria-labelledby="gpu-storage-pricing-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="gpu-storage-pricing-section-heading"
          align="center"
          textColor="primary"
          className="max-w-4xl"
        >
          Storage
          <Text as="span" variant="h2" textColor="white">
            Pricing
          </Text>
        </Text>

        <ul className="m-0 mt-4 grid w-full list-none grid-cols-1 gap-4 p-0 md:mt-12.5 md:grid-cols-3 md:gap-5">
          {GPU_STORAGE_PRICING_ITEMS.map((item) => (
            <li key={item.id} className="h-full">
              <GpuStoragePricingCard item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default GpuStoragePricingSection;
