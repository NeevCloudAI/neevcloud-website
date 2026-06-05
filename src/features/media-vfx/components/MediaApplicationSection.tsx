import ApplicationCard from "@/shared/components/application-card";
import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { MEDIA_APPLICATION_CARDS } from "../data/application-section.data";

const MediaApplicationSection = () => {
  return (
    <section
      className="relative bg-gray-10 py-8 md:py-25"
      aria-labelledby="media-applications-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="media-applications-section-heading"
          align="center"
          className="max-w-2xl"
        >
          BFSI applications
          <Text as="span" variant="h2" textColor="primary">
            on NeevCloud
          </Text>
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="max-w-3xl mt-2.5"
        >
          Real workloads from real institutions, fraud, risk, trading, claims,
          and compliance, running on GPU infrastructure with data sovereignty.
        </Text>
        <ul className="grid w-full list-none grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-6 p-0 m-0 pt-4 md:pt-12.5">
          {MEDIA_APPLICATION_CARDS.map((card) => (
            <li key={card.id} className={`${card.className}`}>
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

export default MediaApplicationSection;
