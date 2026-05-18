export type CheckItem = {
  text: string;
  description: string;
};

export type Step = {
  number: string;
  label: string;
  title: string;
  description: string;
  heading: string;
  checkItems: CheckItem[];
};

export const STEPS: Step[] = [
  {
    number: "01",
    label: "Real-world performance",
    title: "Test Before You Commit",
    heading: "Why Use the Playground?",
    description:
      "Test models with your own data in the Playground to see real-world performance. Compare quality, speed, and output side by side, and make deployment decisions based on hands-on results.",
    checkItems: [
      {
        text: "Live benchmarks with your own prompts",
        description: "See tokens, latency and cost per call",
      },
      {
        text: "Side-by-side model comparison",
        description: "Same prompt, multiple models",
      },
      {
        text: "Decision confidence before you spend",
        description: "Pick the right model for your use case",
      },
    ],
  },
  {
    number: "02",
    label: "Zero setup, instant access",
    title: "Learn Without Infra",
    heading: "Explore AI Capabilities Instantly",
    description:
      "Explore AI effortlessly in the Playground, no accounts, no credit cards, no setup. Test language models, computer vision, and more, making AI accessible to developers, product managers, and your whole team.",
    checkItems: [
      {
        text: "First inference in under 60 seconds",
        description: "Open browser → pick model → run",
      },
      {
        text: "Text, vision, embedding, all in one place",
        description: "No switching tools or platforms",
      },
      {
        text: "For the whole team, not just engineers",
        description: "PMs, designers, and analysts can explore too",
      },
    ],
  },
  {
    number: "03",
    label: "Idea → prod in minutes",
    title: "Prototype Faster",
    heading: "From Idea to Demo in Minutes",
    description:
      "Validate ideas fast in the Playground, test prompts, experiment with parameters, and refine concepts interactively. Once ready, move seamlessly to production using the same models via our API.",
    checkItems: [
      {
        text: "Playground → production is one line",
        description: "Change base_url and your existing code works",
      },
      {
        text: "Same INR billing in playground and prod",
        description: "No pricing surprises when you ship",
      },
      {
        text: "Team demos in minutes",
        description: "Share a link, no login needed",
      },
    ],
  },
];
