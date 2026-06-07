import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { HEALTHCARE_PERFORMANCE_SUMMARY_METRICS } from "../data/performance-section.data";
import PerformanceBenchmarkTable from "./performance/PerformanceBenchmarkTable";
import PerformanceSummaryCard from "./performance/PerformanceSummaryCard";

const HealthcarePerformanceSection = () => {
  return (
    <section
      className="relative bg-black py-8 md:py-16 2xl:py-25"
      aria-labelledby="healthcare-performance-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="healthcare-performance-section-heading"
          textColor="primary"
          align="center"
          className="max-w-4xl"
        >
          Performance Benchmarks
          <Text as="span" variant="h2" textColor="white">
            for Medical AI
          </Text>
        </Text>
        <Text
          as="h6"
          textColor="gray-75"
          align="center"
          className="max-w-3xl mt-2.5"
        >
          Real workloads on production hardware. H100 vs A100 across the three
          workhorse medical-AI tasks, segmentation, structure prediction, and
          variant calling.
        </Text>
        <div className="grid w-full grid-cols-1 gap-5 p-0 m-0 pt-4 md:grid-cols-3 md:pt-10">
          {HEALTHCARE_PERFORMANCE_SUMMARY_METRICS.map((metric) => (
            <PerformanceSummaryCard key={metric.id} metric={metric} />
          ))}
        </div>
        <PerformanceBenchmarkTable />
      </Container>
    </section>
  );
};

export default HealthcarePerformanceSection;
