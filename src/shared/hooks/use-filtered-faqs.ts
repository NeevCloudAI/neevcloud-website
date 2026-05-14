import type { FaqItem, FaqTopic } from "@/shared/data/faq-section-types";
import { useMemo } from "react";

export function useFilteredFaqs(
  items: readonly FaqItem[],
  activeTopic: FaqTopic,
): FaqItem[] {
  return useMemo(() => {
    if (activeTopic === "All") {
      return [...items];
    }
    return items.filter((item) => item.category === activeTopic);
  }, [items, activeTopic]);
}
