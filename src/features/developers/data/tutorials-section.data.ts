import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";
import type { DevelopersTutorialCardItem } from "../types/tutorials-section.types";

export const DEVELOPERS_TUTORIALS_SECTION = {
  titlePrefix: "Build Something Real in Under",
  titleHighlight: "30 Minutes",
  description:
    "Hands-on guides from first API call to production-grade AI systems.",
  cardCtaLabel: "Start Tutorials",
  viewAllCta: "View All Tutorials",
  viewAllCtaRoute: EXTERNAL_LINKS.tutorials,
  viewAllCtaTarget: "_blank",
} as const;

export const DEVELOPERS_TUTORIAL_CARDS: readonly DevelopersTutorialCardItem[] =
  [
    {
      id: "comfyui-ai-template",
      title: "Running ComfyUI Using AI Template on NeevCloud GPU",
      difficulty: "Beginner",
      duration: "15 MIN",
      ctaHref:
        "https://docs.ai.neevcloud.com/tutorials/running-comfyui-using-ai-template-on-neevcloud-gpu",
      ctaTarget: "_blank",
    },
    {
      id: "deploy-openclaw-agentic-studio",
      title: "Deploy OpenClaw on NeevCloud Agentic Studio",
      difficulty: "Intermediate",
      duration: "20 MIN",
      ctaHref:
        "https://docs.ai.neevcloud.com/tutorials/deploy-openclaw-using-agentic-studio-on-neevcloud",
      ctaTarget: "_blank",
    },
    {
      id: "first-sandbox-agentic-studio-js-sdk",
      title:
        "Create Your First Sandbox in NeevCloud Agentic Studio (JavaScript SDK)",
      difficulty: "Beginner",
      duration: "10 MIN",
      ctaHref:
        "https://docs.ai.neevcloud.com/tutorials/create-your-first-sandbox-in-neevcloud-agentic-studio-javascript-sdk",
      ctaTarget: "_blank",
    },
    {
      id: "tensorflow-cuda-template",
      title: "Running TensorFlow CUDA Template on NeevCloud GPU",
      difficulty: "Beginner",
      duration: "15 MIN",
      ctaHref:
        "https://docs.ai.neevcloud.com/tutorials/running-tensorflow-cuda-template-on-neevcloud-gpu",
      ctaTarget: "_blank",
    },
    {
      id: "gpus-with-vscode-windows",
      title: "How to Use NeevCloud GPUs with VS Code (Windows)",
      difficulty: "Beginner",
      duration: "10 MIN",
      ctaHref:
        "https://docs.ai.neevcloud.com/tutorials/how-to-use-neevcloud-gpus-with-vs-code-windows",
      ctaTarget: "_blank",
    },
    {
      id: "fine-tuning-h2o-llm-studio",
      title:
        "Fine-Tuning Large Language Models Using H2O LLM Studio on NeevCloud GPU",
      difficulty: "Intermediate",
      duration: "30 MIN",
      ctaHref:
        "https://docs.ai.neevcloud.com/tutorials/fine-tuning-large-language-models-using-h2o-llm-studio-on-neevcloud-gpu",
      ctaTarget: "_blank",
    },
  ] as const;
