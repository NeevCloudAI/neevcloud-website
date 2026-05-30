import Container from "@/shared/components/container";
import ServiceRow from "./government/GovernmentServiceRow";
import { ServiceListSectionProps } from "../types/service-section.types";
import { Text } from "@/shared/ui-lib";

const ServiceListSection = ({
  sectionId,
  heading,
  headingHighlight,
  description,
  services,
  ariaLabel,
}: ServiceListSectionProps) => {
  return (
    <section
      className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat bg-black py-8 md:py-16 2xl:py-25"
      aria-labelledby={sectionId}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-full md:w-[30%] h-[80%] top-20 right-[-5%] opacity-40 md:opacity-100"
        aria-hidden="true"
      />
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id={sectionId}
          textColor="white"
          align="center"
          className="max-w-4xl"
        >
          {heading}
          {headingHighlight && (
            <Text as="span" variant="h2" textColor="primary">
              {headingHighlight}
            </Text>
          )}
        </Text>
        <Text as="h6" align="center" textColor="gray-10" className="max-w-2xl">
          {description}
        </Text>
        <ul
          className="mt-4 flex w-full list-none flex-col gap-3.75 p-0 m-0 md:mt-8"
          aria-label={ariaLabel}
        >
          {services.map((service) => (
            <li key={service.id}>
              <ServiceRow service={service} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default ServiceListSection;
