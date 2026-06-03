import Container from "@/shared/components/container";
import OSImageSectionClient from "./OSImageSectionClient";
import { Text } from "@/shared/ui-lib";

const OSImageSection = () => {
  return (
    <section aria-labelledby="cpu-os-image-section-heading">
      <Container className="pb-8 md:pb-16 2xl:py-25 flex flex-col items-center justify-center">
        <Text
          as="h3"
          id="cpu-os-image-section-heading"
          align="center"
          className="max-w-4xl font-semibold text-2xl md:text-3xl"
        >
          Supported Softwares
         
        </Text>
        <OSImageSectionClient />
      </Container>
    </section>
  );
};

export default OSImageSection;
