import ApplicationCard from "@/shared/components/application-card";
import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { GENERATIVE_AI_APPLICATION_CARDS } from "../data/application-section.data";

const GenerativeAiApplicationSection = () => {
  return (
    <section
      className="relative bg-white py-8 md:py-16 2xl:py-25"
      aria-labelledby="generative-ai-applications-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="generative-ai-applications-section-heading"
          textColor="black"
          align="center"
          className="max-w-4xl"
        >
          What You Can
          <Text as="span" variant="h2" textColor="primary">
            Build
          </Text>
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black/82"
          className="max-w-3xl mt-2.5"
        >
          Six strategic capability areas, pick one to explore the specific
          workloads, applications, and deployment patterns NeevCloud supports.
        </Text>
        <ul className="grid w-full list-none grid-cols-1 gap-6 p-0 m-0 pt-4 md:grid-cols-6 md:pt-12.5">
          {GENERATIVE_AI_APPLICATION_CARDS.map((card) => (
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

export default GenerativeAiApplicationSection;
