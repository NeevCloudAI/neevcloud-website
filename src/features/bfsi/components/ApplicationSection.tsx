import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { BFSI_APPLICATION_CARDS } from "../data/application-section.data";
import ApplicationCard from "@/shared/components/application-card";

const ApplicationSection = () => {
  return (
    <section
      className="relative bg-gray-10 py-8 md:py-16 2xl:py-25"
      aria-labelledby="bfsi-applications-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="bfsi-applications-section-heading"
          textColor="primary"
          align="center"
          className="max-w-4xl"
        >
          BFSI applications
          <Text as="span" variant="h2" textColor="black">
            on NeevCloud.
          </Text>
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="max-w-3xl mt-2.5"
        >
          {`Real workloads from real institutions, fraud, risk, trading, claims, and compliance, running on GPU infrastructure with data sovereignty.`}
        </Text>
        <ul className="grid w-full list-none grid-cols-1 gap-6 p-0 m-0 pt-4 md:grid-cols-6 md:pt-12.5">
          {BFSI_APPLICATION_CARDS.map((card) => (
            <li key={card.id} className={card.className}>
              <ApplicationCard
                label={card.label}
                title={card.title}
                description={card.description}
                icon={card.icon}
                theme={card.theme}
                image={card.image}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default ApplicationSection;
