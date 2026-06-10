import { AmbitionDetailCard } from "@/shared/components/ambition-detail-card";
import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { CPU_PRICING_SECTION_ITEMS } from "../data/cpu-pricing-section.data";

const CpuAiSection = () => {
  return (
    <section
      className="relative bg-gray-10 py-8 md:py-16 2xl:py-25"
      aria-labelledby="cpu-ai-section-heading"
      id="cpu-ai-section"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="cpu-ai-section-heading"
          textColor="black"
          align="center"
          className="max-w-4xl"
        >
          AI Runs on
          <Text as="span" variant="h2" textColor="primary">
            More Than GPUs
          </Text>
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="max-w-3xl mt-2.5"
        >
          {`Production AI systems involve preprocessing pipelines, API endpoints, databases, monitoring tools, and workflow orchestration. These workloads don't need GPUs-they need reliable, flexible CPU infrastructure that integrates seamlessly with your GPU resources.`}
        </Text>
        <ul className="grid w-full list-none grid-cols-1 gap-5 p-0 m-0 pt-4 md:grid-cols-3 md:pt-12.5">
          {CPU_PRICING_SECTION_ITEMS.map((item) => (
            <li key={item.id}>
              <AmbitionDetailCard item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default CpuAiSection;
