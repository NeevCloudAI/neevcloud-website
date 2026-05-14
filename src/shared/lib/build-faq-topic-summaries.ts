import type {
  FaqCategory,
  FaqItem,
  FaqTopic,
  FaqTopicSummary,
} from "@/shared/data/faq-section-types";

const TOPIC_DISPLAY_ORDER: readonly FaqCategory[] = [
  "Getting Started",
  "Networking",
  "Billing",
  "Scaling",
];

export function buildFaqTopicSummaries(
  items: readonly FaqItem[],
): FaqTopicSummary[] {
  const counts = new Map<FaqCategory, number>();
  for (const item of items) {
    counts.set(item.category, (counts.get(item.category) ?? 0) + 1);
  }

  const present = new Set(counts.keys());
  const ordered: FaqCategory[] = [
    ...TOPIC_DISPLAY_ORDER.filter((c) => present.has(c)),
    ...[...present].filter((c) => !TOPIC_DISPLAY_ORDER.includes(c)),
  ];

  const byCategory: FaqTopicSummary[] = ordered.map((label) => ({
    label,
    count: counts.get(label)!,
  }));

  const allLabel: FaqTopic = "All";
  return [{ label: allLabel, count: items.length }, ...byCategory];
}
