import { FaqItem } from "@/shared/data/faq-section-types";
import { Text } from "@/shared/ui-lib";

type FaqItemCardProps = {
  faq: FaqItem;
};

export default function FaqItemCard({ faq }: FaqItemCardProps) {
  return (
    <article className="rounded-lg p-2 md:p-10 bg-black-80 flex flex-col">
      <Text
        as="small"
        textColor="white"
        className="bg-gray-95 w-fit px-2.5 py-0.75 rounded-lg"
      >
        {faq.category}
      </Text>
      <Text as="h3" textColor="white" weight="semibold" className="mt-2.5">
        {faq.question}
      </Text>
      <Text as="h6" textColor="white" className="mt-2.5">
        {faq.answer}
      </Text>
    </article>
  );
}
