export type ReviewStatsCard = {
  type: "stats";
  headline: string;
  subline: string;
};

export type ReviewTestimonialCard = {
  type: "testimonial";
  companyLabel: string;
  quote: string;
  logo: string;
};

export type ReviewRatingCard = {
  type: "rating";
  score: string;
  reviewCountLabel: string;
};

export type ReviewSectionCard =
  | ReviewStatsCard
  | ReviewTestimonialCard
  | ReviewRatingCard;
