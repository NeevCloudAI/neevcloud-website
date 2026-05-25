import GovernmentServiceRow from "@/features/public-sector/components/GovernmentServiceRow";
import { GOVERNMENT_SERVICES } from "@/features/public-sector/data/government-section-data";
import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";

const GovernmentSection = () => {
  return (
    <section className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat bg-black py-8 md:py-16 2xl:py-25">
      <div className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-full md:w-[30%] h-[80%] top-20 right-[-5%] opacity-40 md:opacity-100" />
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" textColor="white" align="center" className="max-w-4xl">
          Complete AI Platform
          <Text as="span" variant="h2" textColor="primary">
            for government
          </Text>
        </Text>
        <Text as="h6" align="center" textColor="gray-10" className="max-w-2xl">
          A single sovereign stack, compute, inference, storage, and
          orchestration, built for public sector workloads.
        </Text>
        <div className="mt-4 flex w-full flex-col gap-3.75 md:mt-8">
          {GOVERNMENT_SERVICES.map((service) => (
            <GovernmentServiceRow key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default GovernmentSection;
