import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import {
  GENERATIVE_AI_PERFORMANCE_CARDS,
  GENERATIVE_AI_PERFORMANCE_DESCRIPTION,
} from "../data/performance-section.data";
import GenerativeAiPerformanceCard from "./performance/GenerativeAiPerformanceCard";

const GenerativeAiPerformanceSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-black py-8 md:py-16 2xl:py-25"
      aria-labelledby="generative-ai-performance-section-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-full md:w-[30%] h-[60%] top-20 left-[-5%] opacity-20 md:opacity-40"
        aria-hidden="true"
      />
      <Container className="relative flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="generative-ai-performance-section-heading"
          textColor="white"
          align="center"
          className="max-w-4xl"
        >
          Production
          <Text as="span" variant="h2" textColor="primary">
            performance
          </Text>
        </Text>
        <Text
          as="h6"
          textColor="cloud-gray"
          align="center"
          className="max-w-3xl mt-2.5"
        >
          {GENERATIVE_AI_PERFORMANCE_DESCRIPTION}
        </Text>
        <ul className="grid w-full list-none grid-cols-1 gap-5 p-0 m-0 pt-4 md:grid-cols-2 md:pt-12.5">
          {GENERATIVE_AI_PERFORMANCE_CARDS.map((card) => (
            <li key={card.id}>
              <GenerativeAiPerformanceCard card={card} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default GenerativeAiPerformanceSection;
