import { AIStackSectionFeature } from "../types/ai-stack-types";

export const AI_STACK_SECTION_FEATURES: AIStackSectionFeature[] = [
  {
    title: "Model API Gateway",
    description:
      "Your inference backend runs on GPU. Your users call a REST API. That API server—handling auth, routing, rate limiting, and logging, runs on CPU. Route to different GPU backends based on model, user tier, or latency target.",
  },
  {
    title: "RAG Orchestration Workers",
    description:
      "Your RAG pipeline has multiple steps, query rewriting, vector search, context assembly, and re-ranking. These orchestration steps run on CPU, with only the final generation call hitting the GPU endpoint.",
  },
  {
    title: "Embedding Pipeline Workers",
    description:
      "Generate embeddings at scale for your knowledge base or product catalog. Run parallel CPU workers that call the NeevCloud Embeddings API and write results to your vector store.",
  },
  {
    title: "Data Pre-processing Pipeline",
    description:
      "Clean, tokenize, and format training data before it reaches your GPU cluster. CPU-intensive, parallel, and billed by the hour. Stop instances when the pipeline is done.",
  },
  {
    title: "Monitoring Stack",
    description:
      "Prometheus, Grafana, and log aggregation run on CPU instances co-located with your GPU cluster. Low-latency scraping, no egress cost, full GPU visibility.",
  },
];
