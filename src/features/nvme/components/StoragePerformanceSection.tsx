import Container from "@/shared/components/container";
import StoragePerformanceCard from "./storage-performance/StoragePerformanceCard";
import { STORAGE_PERFORMANCE_CARDS } from "../data/storage-performance-section.data";
import { Text } from "@/shared/ui-lib";

const StoragePerformanceSection = () => {
  return (
    <section
      className="relative bg-gray-10 py-8 md:py-25"
      aria-labelledby="nvme-storage-performance-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="nvme-storage-performance-section-heading"
          textColor="black"
          align="center"
          className="max-w-4xl"
        >
          Storage That Matches Your
          <Text as="span" variant="h2" textColor="primary">
            GPU Performance
          </Text>
        </Text>
        <Text align="center" textColor="black-5" className="max-w-2xl mt-2.5">
          NeevCloud&apos;s high-performance NVMe local disks deliver sustained
          throughput and microsecond-level latency, so your compute never waits
          on your storage.
        </Text>
        <ul className="grid grid-cols-1 gap-5 mt-4 md:mt-12.5 md:grid-cols-2 list-none w-full">
          {STORAGE_PERFORMANCE_CARDS.map((card) => (
            <li key={card.id}>
              <StoragePerformanceCard card={card} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default StoragePerformanceSection;
