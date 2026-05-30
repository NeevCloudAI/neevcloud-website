import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { PERFORMANCE_METRICS } from "../data/performance-section.data";
import PerformanceMetricCard from "./performance/PerformanceMetricCard";

const PerformanceSection = () => {
  return (
    <section
      className="relative bg-black py-8 md:py-16 2xl:py-25"
      aria-labelledby="bfsi-performance-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="bfsi-performance-section-heading"
          textColor="white"
          align="center"
          className="max-w-xl"
        >
          Performance that
          <Text as="span" variant="h2" textColor="primary">
            financial services
          </Text>
          depend on.
        </Text>
        <ul className="grid w-full list-none grid-cols-1 gap-5 p-0 m-0 pt-4 md:grid-cols-4 md:pt-12.5">
          {PERFORMANCE_METRICS.map((metric) => (
            <li key={metric.id}>
              <PerformanceMetricCard metric={metric} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default PerformanceSection;
