import type { ReviewSectionCard } from "@/features/Home/types/reviews-section.types";

export const REVIEWS_SECTION_TITLE_PREFIX = "Powering ";

export const REVIEWS_SECTION_TITLE_HIGHLIGHT = "AI Breakthroughs";

export const REVIEWS_SECTION_TITLE_SUFFIX = " Across";

export const REVIEWS_SECTION_TITLE_SUFFIX_2 = "Industries";

export const REVIEWS_SECTION_SUBTITLE =
  "From startups building their first models to enterprises deploying AI at scale, teams choose";

export const REVIEWS_SECTION_SUBTITLE_2 =
  "NeevCloud for reliable performance and transparent operations.";

export const REVIEWS_SECTION_CARDS: ReviewSectionCard[] = [
  {
    type: "stats",
    headline: "1000+",
    subline: "Industry Leading Clients",
  },
  {
    type: "testimonial",
    companyLabel: "roar.ai",
    quote:
      "We used the NeevCloud to train and fine-tune our large language models, and the performance was consistently reliable. Setup was quick, training times were noticeably faster, and the support team was responsive whenever we needed assistance.",
    role: "AI Engineer",
    attributionCompany: "roar.ai",
  },
  {
    type: "testimonial",
    companyLabel: "northbeam.io",
    quote:
      "We used the NeevCloud to train and fine-tune our large language models, and the performance was consistently reliable. Setup was quick, training times were noticeably faster, and the support team was responsive whenever we needed assistance.",
    role: "ML Lead",
    attributionCompany: "northbeam.io",
  },
  {
    type: "rating",
    score: "4.8",
    reviewCountLabel: "50+ Reviews",
  },
  {
    type: "testimonial",
    companyLabel: "vertex labs",
    quote:
      "We used the NeevCloud to train and fine-tune our large language models, and the performance was consistently reliable. Setup was quick, training times were noticeably faster, and the support team was responsive whenever we needed assistance.",
    role: "Research Engineer",
    attributionCompany: "vertex labs",
  },
  {
    type: "testimonial",
    companyLabel: "vertex labs",
    quote:
      "We used the NeevCloud to train and fine-tune our large language models, and the performance was consistently reliable. Setup was quick, training times were noticeably faster, and the support team was responsive whenever we needed assistance.",
    role: "Research Engineer",
    attributionCompany: "vertex labs",
  },
];
