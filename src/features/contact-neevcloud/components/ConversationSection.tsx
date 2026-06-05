import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import {
  CONTACT_INFO_CARDS,
  CONVERSATION_SECTION,
} from "../data/conversation-section.data";
import ContactConversationForm from "./ContactConversationForm";
import ContactInfoCard from "./ContactInfoCard";

const ConversationSection = () => {
  return (
    <section
      className="relative overflow-hidden bg-gray-10 py-8 md:py-16 2xl:py-25"
      aria-labelledby="conversation-section-heading"
    >
      <Container className="relative flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="conversation-section-heading"
          align="center"
          className="max-w-4xl"
        >
          {CONVERSATION_SECTION.titlePrefix}
          <Text as="span" variant="h2" textColor="primary">
            {CONVERSATION_SECTION.titleHighlight}
          </Text>
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="mt-2.5 max-w-xl"
        >
          {CONVERSATION_SECTION.description}
        </Text>

        <div className="mt-8 w-full md:mt-12.5 flex flex-col gap-5 md:flex-row">
          <div className="flex flex-col gap-5 w-full md:flex-1">
            {CONTACT_INFO_CARDS.map((card) => (
              <ContactInfoCard key={card.id} card={card} />
            ))}
          </div>
          <ContactConversationForm />
        </div>
      </Container>
    </section>
  );
};

export default ConversationSection;
