export type FaqTopic = "All" | string;

export type FaqItem = {
  id: number;
  category: string;
  question: string;
  answer: string;
};

export type FaqTopicSummary = {
  label: FaqTopic;
  count: number;
};
