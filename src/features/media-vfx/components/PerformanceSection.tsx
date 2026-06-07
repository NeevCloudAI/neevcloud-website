import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import {
  PerformanceBenchmarkCard,
  FastestConfigCard,
} from "../components/performance/PerformanceCard";
import {
  BENCHMARK_ITEMS,
  BENCHMARK_FOOTNOTE,
  FASTEST_CONFIG_FEATURES,
} from "../data/performance-section.data";

const EnterpriseSection = () => {
  return (
    <section
      className="relative bg-white py-8 md:py-16 2xl:py-25"
      aria-labelledby="bfsi-enterprise-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="bfsi-enterprise-section-heading"
          align="center"
          className="max-w-4xl"
        >
          Rendering performance
          <Text as="span" variant="h2" textColor="primary">
            benchmarks
          </Text>
        </Text>

        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="max-w-3xl mt-2.5"
        >
          Blender Cycles with path tracing on a single 4K frame. Actual times
          vary by scene complexity, samples, and rendering settings, but the
          relative gain is consistent.
        </Text>

        <div className="mt-8 md:mt-12.5 grid w-full grid-cols-1 gap-5 md:grid-cols-2">
          <PerformanceBenchmarkCard
            items={BENCHMARK_ITEMS}
            footnote={BENCHMARK_FOOTNOTE}
          />

          <FastestConfigCard
            minutesPerFrame={2}
            features={FASTEST_CONFIG_FEATURES}
          />
        </div>
      </Container>
    </section>
  );
};

export default EnterpriseSection;
