import type { FaqItem } from "@/shared/data/faq-section-types";

export const TRUST_CENTER_FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    category: "Networking",
    question: "Where is NeevCloud infrastructure located?",
    answer:
      "All infrastructure operates within India. Datacenters located in [specific regions] with Tier III certification.",
  },
  {
    id: 2,
    category: "Getting Started",
    question: "Can I get copies of compliance certifications?",
    answer:
      "Yes. ISO 27001 and Tier III certifications are available publicly. SOC 2 Type II reports available to customers under NDA.",
  },
  {
    id: 3,
    category: "Getting Started",
    question: "How is data encrypted?",
    answer:
      "Data encrypted at rest using AES-256. Data in transit is encrypted with TLS 1.3. Encryption keys are managed through secure key management systems.",
  },
  {
    id: 4,
    category: "Billing",
    question: "What happens during a security incident?",
    answer:
      "Immediate detection through monitoring, documented response procedures, containment and remediation, and transparent communication with affected customers.",
  },
  {
    id: 5,
    category: "Scaling",
    question: "Does NeevCloud have access to my data?",
    answer:
      "NeevCloud personnel do not access customer data except when explicitly requested for support or required for system operations, always with customer notification.",
  },
];
