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
      name="faq"
      className={cn(
        "rounded-xl border border-white/12 bg-white/6 p-4 md:px-10 md:py-7.5",
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
      <Text
        as="h6"
        textColor="cloud-gray"
        className="mt-3 border-t border-white/12 pt-4 md:border-none md:pt-0"
      >
        {faq.answer}
      </Text>
    </details>
  );
}
