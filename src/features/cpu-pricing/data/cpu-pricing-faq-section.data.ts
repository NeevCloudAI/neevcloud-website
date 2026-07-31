import type { FaqItem } from "@/shared/data/faq-section-types";

export const CPU_PRICING_FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    category: "Compliance",
    question: "Is KYC required to use NeevCloud?",
    answer:
      "Yes. Verification is required for regulatory compliance. Complete KYC during account registration to activate services.",
  },
  {
    id: 2,
    category: "Getting Started",
    question: "What operating systems are available?",
    answer:
      "Ubuntu, CentOS/Rocky Linux, Debian, Fedora, Red Hat, Windows Server, and custom images. Full list available in instance creation dashboard.",
  },
  {
    id: 3,
    category: "Storage",
    question: "Can I attach multiple storage volumes?",
    answer:
      "Yes. Attach multiple persistent volumes per instance for separate storage needs. Configure during instance creation or add later.",
  },
  {
    id: 4,
    category: "Networking",
    question: "How does networking work with GPU instances?",
    answer:
      "CPU and GPU instances in the same region share a private network. No bandwidth charges for inter-instance traffic. Perfect for preprocessing pipelines and API gateways.",
  },
  {
    id: 5,
    category: "Privacy",
    question: "Can NeevCloud access my stored data?",
    answer:
      "No. Your data remains private unless explicit access is granted or legally required. Full control over access permissions and encryption.",
  },
];
