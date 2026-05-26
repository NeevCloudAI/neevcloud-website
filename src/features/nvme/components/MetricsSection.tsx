import Container from "@/shared/components/container";
import MetricCard from "@/features/nvme/components/metrics/MetricCard";
import StorageMetricsCard from "@/features/nvme/components/storage-comparison/StorageMetricsCard";
import { METRIC_CARDS } from "@/features/nvme/data/metrics-section.data";
import { STORAGE_METRICS_CARDS } from "@/features/nvme/data/storage-comparison-section.data";
import { Text } from "@/shared/ui-lib";

const MetricsSection = () => {
  return (
    <section
      className="relative bg-white py-8 md:py-16 2xl:py-25"
      aria-labelledby="nvme-metrics-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" id="nvme-metrics-section-heading" className="max-w-4xl" align="center">
          Real-World
          <Text as="span" variant="h2" textColor="primary">
            Performance Metrics
          </Text>
        </Text>
        <Text as="h6" textColor="black-5" className="max-w-3xl" align="center">
          Measured with typical AI workloads, model training, checkpoint saves,
          and dataset streaming.
        </Text>
        <ul className="mt-4 md:mt-12.5 grid w-full grid-cols-2 gap-4 md:grid-cols-4 list-none p-0 m-0">
          {METRIC_CARDS.map((metric) => (
            <li key={metric.id}>
              <MetricCard metric={metric} />
            </li>
          ))}
        </ul>
        <ul className="mt-5 w-full grid grid-cols-1 gap-5 md:grid-cols-2 list-none p-0 m-0">
          {STORAGE_METRICS_CARDS.map((card) => (
            <li key={card.id}>
              <StorageMetricsCard card={card} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default MetricsSection;
