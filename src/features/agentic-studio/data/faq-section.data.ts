import type { FaqItem } from "@/shared/data/faq-section-types";

export const AGENTIC_STUDIO_FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    category: "General",
    question: "What is Agentic Studio?",
    answer:
      "A managed, secure environment for running AI agents and code in isolated, on-demand sandboxes. It gives agents a safe place to act, separate from your local machine and your production systems.",
  },
  {
    id: 2,
    category: "General",
    question: "What's the difference between Sandboxes and Agents?",
    answer:
      "Sandboxes are isolated environments you provision and control yourself, with full access to files, command execution, and snapshots. Agents are pre-built coding assistants that run inside a sandbox NeevCloud configures for you. Use Sandboxes for full control; use Agents to get running fast.",
  },
  {
    id: 3,
    category: "Getting Started",
    question: "Which pre-built agents are available?",
    answer:
      "Claude Code, Codex CLI, OpenClaw, and Opencode each launched inside a ready-configured sandbox.",
  },
  {
    id: 4,
    category: "Security",
    question: "Is it safe to run agent-generated code?",
    answer:
      "Yes. Sandboxes are fully isolated, so untrusted or agent-generated code runs without affecting other systems, and every action stays auditable.",
  },
  {
    id: 5,
    category: "General",
    question: "Can I run multi-agent workflows?",
    answer:
      "Yes. You can assign separate compute environments to different roles, planning, execution, validation, and reporting and orchestrate them together.",
  },
  {
    id: 6,
    category: "General",
    question: "What can I do with snapshots?",
    answer:
      "Snapshot, pause, restore, and fork environments to save state, branch experiments, and reproduce workflows exactly.",
  },
  {
    id: 7,
    category: "Compliance",
    question: "Where do agents run?",
    answer:
      "Within India's data infrastructure, giving you a sovereign, auditable execution model suited to regulated and compliance-sensitive industries.",
  },
];
