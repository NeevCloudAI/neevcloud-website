import { FaqItem } from "@/shared/data/faq-section-types";
import { Text } from "@/shared/ui-lib";

type FaqItemCardProps = {
  faq: FaqItem;
};

export default function FaqItemCard({ faq }: FaqItemCardProps) {
  return (
    <article className="rounded-lg p-2 md:p-8 bg-gray-110 flex flex-col gap-2">
      <Text
        as="small"
        textColor="white"
        className="bg-gray-95 w-fit px-2.5 py-0.5 rounded-lg"
      >
        {faq.category}
      </Text>
      <Text as="h3" textColor="white" weight="semibold">
        {faq.question}
      </Text>
      <Text textColor="white">{faq.answer}</Text>
    </article>
  );
}
