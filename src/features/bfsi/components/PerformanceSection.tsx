import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { PERFORMANCE_METRICS } from "../data/performance-section-data";
import { PerformanceMetricCard } from "./PerformanceMetricCard";

const PerformanceSection = () => {
  return (
    <section className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat bg-black py-8 md:py-16 2xl:py-25">
      <div className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-full md:w-[30%] h-[60%] top-20 right-[-5%] opacity-40 md:opacity-100"></div>
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" textColor="white" align="center" className="max-w-xl">
          Performance that
          <Text as="span" variant="h2" textColor="primary">
            financial services
          </Text>
          depend on.
        </Text>
        <div className="grid w-full grid-cols-1 gap-5 pt-4 md:grid-cols-4 md:pt-12.5">
          {PERFORMANCE_METRICS.map((metric) => (
            <PerformanceMetricCard key={metric.id} metric={metric} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PerformanceSection;
