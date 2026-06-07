import ApplicationCard from "@/shared/components/application-card";
import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import {
  AI_DEVELOPMENT_CARDS,
  AI_DEVELOPMENT_SECTION,
} from "../data/ai-development-section.data";

const AiDevelopmentSection = () => {
  return (
    <section
      className="relative bg-gray-10 py-8 md:py-16 2xl:py-25"
      aria-labelledby="ai-development-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="ai-development-section-heading"
          textColor="black"
          align="center"
          className="max-w-4xl"
        >
          {AI_DEVELOPMENT_SECTION.titlePrefix}
          <Text as="span" variant="h2" textColor="primary">
            {AI_DEVELOPMENT_SECTION.titleHighlight}
          </Text>
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="max-w-3xl mt-2.5"
        >
          {AI_DEVELOPMENT_SECTION.description}
        </Text>
        <ul className="grid w-full list-none grid-cols-1 gap-6 p-0 m-0 pt-4 md:grid-cols-6 md:pt-12.5">
          {AI_DEVELOPMENT_CARDS.map((card) => (
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

export default AiDevelopmentSection;
