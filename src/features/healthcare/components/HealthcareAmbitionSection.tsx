import { AmbitionDetailCard } from "@/shared/components/ambition-detail-card";
import Container from "@/shared/components/container";
import { HEALTHCARE_AMBITION_ITEMS } from "../data/ambition-section.data";
import { Text } from "@/shared/ui-lib";

const HealthcareAmbitionSection = () => {
  return (
    <section
      className="relative bg-gray-10 py-8 md:py-25"
      aria-labelledby="healthcare-ambition-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="healthcare-ambition-section-heading"
          textColor="black"
          align="center"
          className="max-w-4xl"
        >
          Why
          <Text as="span" variant="h2" textColor="primary">
            Healthcare Organizations
          </Text>
          choose NeevCloud
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="max-w-3xl mt-2.5"
        >
          Medical AI workloads, from diagnostic imaging to genomic analysis,
          demand infrastructure that balances computational power with strict
          security and compliance requirements. NeevCloud delivers GPU
          infrastructure with healthcare-grade certifications.
        </Text>
        <ul className="grid w-full list-none grid-cols-1 gap-5 p-0 m-0 pt-4 md:grid-cols-3 md:items-stretch md:pt-12.5">
          {HEALTHCARE_AMBITION_ITEMS.map((item) => (
            <li key={item.id} className="h-full">
              <AmbitionDetailCard item={item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default HealthcareAmbitionSection;
