import Container from "@/shared/components/container";
import CloudStorageCard from "./cloud-storage/CloudStorageCard";
import { CLOUD_STORAGE_CARDS } from "../data/cloud-storage-section.data";
import { Text } from "@/shared/ui-lib";

const CloudStorageSection = () => {
  return (
    <section
      className="relative bg-cloud-gray py-8 md:py-16 2xl:py-25"
      aria-labelledby="object-storage-cloud-storage-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="object-storage-cloud-storage-section-heading"
          textColor="black"
          align="center"
          className="max-w-3xl"
        >
          Cloud Storage That
          <Text as="span" variant="h2" textColor="primary">
            Just Works
          </Text>
        </Text>
        <Text align="center" textColor="black/82" className="max-w-3xl mt-2.5">
          NeevCloud&apos;s S3-compatible object storage integrates seamlessly
          with your existing MLOps pipelines, frameworks, and tooling, and keeps
          your data within Indian jurisdiction.
        </Text>
        <ul className="grid grid-cols-1 gap-5 mt-4 md:mt-12.5 md:grid-cols-2 list-none w-full">
          {CLOUD_STORAGE_CARDS.map((card) => (
            <li key={card.id}>
              <CloudStorageCard card={card} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default CloudStorageSection;
