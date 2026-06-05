import ApplicationCard from "@/shared/components/application-card";
import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { HEALTHCARE_APPLICATION_CARDS } from "../data/application-section.data";

const HealthcareApplicationSection = () => {
  return (
    <section
      className="relative bg-white py-8 md:py-25"
      aria-labelledby="healthcare-applications-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="healthcare-applications-section-heading"
          textColor="primary"
          align="center"
          className="max-w-4xl"
        >
          Healthcare Applications
          <Text as="span" variant="h2" textColor="black">
            on NeevCloud
          </Text>
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="max-w-3xl mt-2.5"
        >
          From hospital networks to research labs to digital-health startups,
          real medical AI workloads running on compliant GPU infrastructure.
        </Text>
        <ul className="grid w-full list-none grid-cols-1 gap-6 p-0 m-0 pt-4 md:grid-cols-6 md:pt-12.5">
          {HEALTHCARE_APPLICATION_CARDS.map((card) => (
            <li key={card.id} className={card.className}>
              <ApplicationCard
                label={card.label}
                title={card.title}
                description={card.description}
                icon={card.icon}
                theme={card.theme}
                image={card.image}
                imageSpacing={card.imageSpacing}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default HealthcareApplicationSection;
