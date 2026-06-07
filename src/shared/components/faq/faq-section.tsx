import Container from "@/shared/components/container";
import type { FaqItem } from "@/shared/data/faq-section-types";
import { cn } from "@/lib/utils";
import FaqAccordionItem from "./faq-accordion-item";
import FaqSectionHeader from "./faq-section-header";

type FaqSectionProps = {
  items: readonly FaqItem[];
  description?: string;
  className?: string;
};

export default function FaqSection({
  items,
  description,
  className,
}: FaqSectionProps) {
  return (
    <section
      aria-labelledby="faq-section-heading"
      className={cn("bg-black py-8 md:py-16 2xl:py-25", className)}
    >
      <Container className="flex flex-col items-center justify-center">
        <FaqSectionHeader id="faq-section-heading" description={description} />

        <ul className="mt-4 flex w-full max-w-4xl list-none flex-col gap-4 md:mt-12.5 md:gap-5">
          {items.map((faq, index) => (
            <li key={faq.id}>
              <FaqAccordionItem faq={faq} defaultOpen={index === 0} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
