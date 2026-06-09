import type { FaqItem } from "@/shared/data/faq-section-types";

export const DEVELOPERS_FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    category: "API",
    question: "Is the API really OpenAI-compatible?",
    answer:
      "Yes. Change base_url to https://api.neevcloud.com/v1 in your OpenAI SDK configuration. All standard parameters work identically. Use from neevcloud.compat import OpenAI for drop-in replacement.",
  },
  {
    id: 2,
    category: "Getting Started",
    question: "How do I get started with the API?",
    answer:
      "Create an account at console.ai.neevcloud.com, generate an API key, make first request. Free tier: 2,00,000 tokens/day. Full quickstart in docs takes under 5 minutes.",
  },
  {
    id: 3,
    category: "SDKs",
    question: "What SDKs and tools are available?",
    answer:
      "Official Python SDK, Node.js SDK, CLI tool (neev), and Terraform provider. All open-source on GitHub. Full type hints, async support, auto-retry built-in.",
  },
  {
    id: 4,
    category: "Support",
    question: "Where can I get help?",
    answer:
      "Discord for real-time community support, GitHub for issues and examples, monthly office hours with the engineering team, complete documentation at docs.neevcloud.com.",
  },
  {
    id: 5,
    category: "Contributing",
    question: "Can I contribute to the SDKs?",
    answer:
      "Yes. All SDKs and tools are open-source on GitHub. Contribution guides available. Join the Discord #contributors channel for collaboration.",
  },
];
