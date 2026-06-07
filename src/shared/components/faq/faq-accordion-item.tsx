import type { FaqItem } from "@/shared/data/faq-section-types";
import { ChevronDown } from "@/shared/icons/lucide-icon-map";
import { Text } from "@/shared/ui-lib";
import { cn } from "@/lib/utils";

type FaqAccordionItemProps = {
  faq: FaqItem;
  defaultOpen?: boolean;
};

export default function FaqAccordionItem({
  faq,
  defaultOpen = false,
}: FaqAccordionItemProps) {
  return (
    <details
      className={cn(
        "rounded-xl border border-white-10 bg-black-80 p-5 md:px-10 md:py-7.5",
        "[&[open]_summary_.faq-chevron]:rotate-180",
      )}
      open={defaultOpen}
    >
      <summary className="flex cursor-pointer items-center justify-between gap-4">
        <Text as="h3" textColor="white" weight="semibold">
          {faq.question}
        </Text>
        <ChevronDown
          className="faq-chevron h-5 w-5 shrink-0 text-white transition-transform duration-200"
          aria-hidden="true"
        />
      </summary>
      <Text as="h6" textColor="gray-10" className="mt-3">
        {faq.answer}
      </Text>
    </details>
  );
}
