import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import GettingStartedPanel from "./GettingStartedPanel";

const GettingStartedSection = () => {
  return (
    <section
      className="relative bg-black py-8 md:py-16 2xl:py-25"
      aria-labelledby="object-storage-getting-started-section-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 top-20 right-[-5%] h-[60%] w-full bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat opacity-40 md:w-[30%] md:opacity-100"
        aria-hidden="true"
      />
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="object-storage-getting-started-section-heading"
          align="center"
          textColor="primary"
          className="max-w-md"
        >
          Getting Started
          <Text as="span" variant="h2" textColor="white">
            with Object Storage
          </Text>
        </Text>

        <div
          className="mt-4 w-full rounded-lg border border-white/12 bg-white/6 font-mono shadow-sm backdrop-blur-md md:mt-12.5"
          role="region"
          aria-label="Object storage getting started terminal"
        >
          <GettingStartedPanel />
        </div>
      </Container>
    </section>
  );
};

export default GettingStartedSection;
