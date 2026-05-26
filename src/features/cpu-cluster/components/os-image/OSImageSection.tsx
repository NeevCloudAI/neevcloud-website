import Container from "@/shared/components/container";
import OSImageSectionClient from "@/features/cpu-cluster/components/os-image/OSImageSectionClient";
import { Text } from "@/shared/ui-lib";

const OSImageSection = () => {
  return (
    <section aria-labelledby="cpu-os-image-section-heading">
      <Container className="py-8 md:py-16 2xl:py-25 flex flex-col items-center justify-center">
        <Text as="h2" id="cpu-os-image-section-heading" align="center" className="max-w-4xl">
          Pre-built OS, and Images,
          <Text as="span" variant="h2" textColor="primary">
            Ready to Deploy
          </Text>
        </Text>
        <Text as="h6" align="center" textColor="black-5">
          Boot in seconds with curated stacks, or upload your own ISO.
        </Text>
        <OSImageSectionClient />
      </Container>
    </section>
  );
};

export default OSImageSection;
