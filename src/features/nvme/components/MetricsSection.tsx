import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { METRIC_CARDS } from "@/features/nvme/data/metrics-data";
import MetricCard from "./MetricCard";
import { STORAGE_METRICS_CARD } from "../data/storage-comparison-data";
import StorageMetricsCard from "./StorageMetricsCard";

const MetricsSection = () => {
  return (
    <section className="relative bg-white py-[3vh] md:py-[7vh]">
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" weight="semibold" className="max-w-4xl" align="center">
          Real-World
          <Text as="span" variant="h2" textColor="primary">
            Performance Metrics
          </Text>
        </Text>
        <Text className="mt-2 max-w-2xl" align="center">
          Measured with typical AI workloads, model training, checkpoint saves,
          and dataset streaming.
        </Text>
        <div className="mt-4 grid w-full grid-cols-2 gap-4 md:mt-8 md:grid-cols-4">
          {METRIC_CARDS.map((metric) => (
            <MetricCard key={metric.id} metric={metric} />
          ))}
        </div>
        <div className="mt-6 w-full grid grid-cols-1 gap-6 md:grid-cols-2">
          {STORAGE_METRICS_CARD.map((card) => (
            <StorageMetricsCard key={card.id} card={card} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MetricsSection;
