export const OFFERS_ARCHITECTURE_SECTION_ITEMS = [
  {
    id: "data-preprocessing",
    iconSrc: "/icons/pipeline.svg",
    iconAlt: "Data preprocessing pipeline",
    title: "Data Preprocessing Pipeline",
    description:
      "Use your free credit to clean and tokenize data on CPU instances, keeping GPU resources focused solely on model training.",
  },
  {
    id: "inference-serving",
    iconSrc: "/icons/inferencing.svg",
    iconAlt: "Inference serving",
    title: "Inference Serving",
    description:
      "Serve smaller or latency-tolerant models on CPU to save costs, scaling horizontally while reserving GPU inference for high-demand workloads.",
  },
  {
    id: "api-application-layer",
    iconSrc: "/icons/application.svg",
    iconAlt: "API and application layer",
    title: "API and Application Layer",
    description:
      "Run AI service frontends on CPU - APIs, auth, logging, business logic while connecting seamlessly to GPU inference and training backends.",
  },
  {
    id: "database-state-management",
    iconSrc: "/icons/database.svg",
    iconAlt: "Database and state management",
    title: "Database and State Management",
    description:
      "Store training metadata, logs, model versions, and application data on CPU instances using standard databases without GPU overhead.",
  },
] as const;
