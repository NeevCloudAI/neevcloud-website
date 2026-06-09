export const EXTERNAL_LINKS = {
  projectOrion: "https://www.neevcloud.com/project-orion/",
  aiInferencePlayground:
    "https://console.ai.neevcloud.com/ai-inference/playground",
  aiInferenceDedicatedModel:
    "https://console.ai.neevcloud.com/ai-inference/dedicated-model",
  aiSupercloudConsole: "https://console.ai.neevcloud.com/",
} as const;

export type ExternalLinkKey = keyof typeof EXTERNAL_LINKS;
