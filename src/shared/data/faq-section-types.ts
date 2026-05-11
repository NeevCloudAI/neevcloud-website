export type FaqCategory =
  | "Getting Started"
  | "Networking"
  | "Billing"
  | "Scaling";

export type FaqTopic = "All" | FaqCategory;

export type FaqItem = {
  id: number;
  category: FaqCategory;
  question: string;
  answer: string;
};

export type FaqTopicSummary = {
  label: FaqTopic;
  count: number;
};
