import type { ReviewSectionCard } from "../types/reviews-section.types";

export const REVIEWS_SECTION_CARDS: ReviewSectionCard[] = [
  {
    type: "stats",
    headline: "1000+",
    subline: "Industry Leading Clients",
  },
  {
    type: "testimonial",
    companyLabel: "NeuroBridge",
    quote:
      "NeevCloud provides the high-performance GPU infrastructure we need to accelerate AI research and deploy production-grade AI systems at scale. Its reliability, scalability, and seamless access to compute resources make it a trusted foundation for our innovation.",
    logo: "/icons/neurobridge-logo.svg",
  },
  {
    type: "testimonial",
    companyLabel: "Videoverse",
    quote:
      "NeevCloud delivers the scalable GPU computing power required for our AI-driven video processing workloads. Its robust infrastructure, consistent performance, and enterprise-grade reliability enable us to innovate faster and deliver exceptional video experiences at scale.",
    logo: "/icons/videoverse-logo.svg",
  },
  {
    type: "rating",
    score: "4.8",
    reviewCountLabel: "50+ Reviews",
  },
  {
    type: "testimonial",
    companyLabel: "Msg91",
    quote:
      "NeevCloud's reliable GPU infrastructure and scalable cloud platform empower us to build, deploy, and scale communication-driven AI solutions with confidence.",
    logo: "/icons/msg91-logo.svg",
  },
];
