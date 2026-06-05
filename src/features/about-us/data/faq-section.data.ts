import type { FaqItem } from "@/shared/data/faq-section-types";

export const ABOUT_US_FAQ_ITEMS: readonly FaqItem[] = [
  {
    id: 1,
    category: "Company",
    question: "What is NeevCloud?",
    answer:
      "NeevCloud is India's first AI SuperCloud. We design and operate full-stack AI infrastructure, from datacenters and GPU clusters to orchestration and serving, to make advanced computing accessible to anyone with the ambition to build.",
  },
  {
    id: 2,
    category: "Company",
    question: "Where does NeevCloud operate?",
    answer:
      "We operate within India, providing indigenous AI infrastructure with data residency and sovereignty. Our offices are in Bengaluru, Mumbai, and Indore.",
  },
  {
    id: 3,
    category: "Infrastructure",
    question: "What does full-stack control mean?",
    answer:
      "We own and operate every layer of our stack: datacenters, cooling systems, GPU clusters, orchestration software, and serving infrastructure. This lets us optimize for performance, reliability, and transparent costs.",
  },
  {
    id: 4,
    category: "Infrastructure",
    question: "Who is NeevCloud built for?",
    answer:
      "Startups, researchers, enterprises, and public sector teams running AI workloads. We remove traditional barriers of cost, access, and vendor lock-in so builders can focus on their ideas.",
  },
  {
    id: 5,
    category: "Getting Started",
    question: "How do I get started with NeevCloud?",
    answer:
      "Create an account, choose GPU or CPU resources, and deploy your workloads through our console or APIs. Our team is available for guidance on architecture, scaling, and cost optimization.",
  },
] as const;
