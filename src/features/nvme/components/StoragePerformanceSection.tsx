import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { STORAGE_PERFORMANCE_CARDS } from "@/features/nvme/data/storage-performance-data";
import StoragePerformanceCard from "./StoragePerformanceCard";

const StoragePerformanceSection = () => {
  return (
    <section className="relative bg-gray-10 py-8 md:py-16 2xl:py-25">
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" textColor="black" align="center" className="max-w-4xl">
          Storage That Matches Your
          <Text as="span" variant="h2" textColor="primary">
            GPU Performance
          </Text>
        </Text>
        <Text align="center" textColor="black-5" className="max-w-2xl">
          NeevCloud&apos;s high-performance NVMe local disks deliver sustained
          throughput and microsecond-level latency, so your compute never waits
          on your storage.
        </Text>
        <div className="grid grid-cols-1 gap-5 pt-4 md:pt-12.5 md:grid-cols-2">
          {STORAGE_PERFORMANCE_CARDS.map((card) => (
            <StoragePerformanceCard key={card.id} card={card} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StoragePerformanceSection;
