import { AmbitionDetailCard } from "@/shared/components/ambition-detail-card";
import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { GPU_PRICING_SECTION_ITEMS } from "../data/gpu-pricing-section.data";

const GpuAiSection = () => {
  return (
    <section
      className="relative bg-gray-10 py-8 md:py-25"
      aria-labelledby="gpu-ai-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="gpu-ai-section-heading"
          textColor="black"
          align="center"
          className="max-w-4xl"
        >
          Two Ways to Deploy
          <Text as="span" variant="h2" textColor="primary">
            GPUs
          </Text>
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="mt-2.5 max-w-3xl"
        >
          NeevCloud offers two purpose-built GPU compute modes: GPU AI Service
          for Kubernetes-native containerized workloads, and GPU VM Service for
          teams that need full Linux OS control. Both run on datacenter-grade
          NVIDIA hardware and are built specifically for AI—not repurposed
          general-purpose cloud infrastructure.
        </Text>
        <ul className="m-0 grid w-full list-none grid-cols-1 gap-5 p-0 pt-4 md:grid-cols-2 md:pt-12.5">
          {GPU_PRICING_SECTION_ITEMS.map((item) => (
            <li key={item.id}>
              <AmbitionDetailCard item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default GpuAiSection;
