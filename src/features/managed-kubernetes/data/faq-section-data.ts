import type { FaqItem } from "@/shared/data/faq-section-types";

export const KUBERNETES_CLUSTER_FAQ_ITEMS: FaqItem[] = [
  {
    id: 1,
    category: "Networking",
    question: "Do I need to install GPU device plugins?",
    answer:
      "No. Device plugins are pre-installed and managed on every GPU node pool. Just request GPUs in your pod specs.",
  },
  {
    id: 2,
    category: "Getting Started",
    question: "Can I mix different GPU types in one cluster?",
    answer:
      "Yes. Create multiple node pools (H100, H200, A100) in the same cluster. Use node selectors to target specific GPU types.",
  },
  {
    id: 3,
    category: "Getting Started",
    question: "How does autoscaling work?",
    answer:
      "Cluster autoscaler watches for pending pods. If pods can't schedule due to lack of resources, it scales up the node pool. Idle nodes scale down after 10 minutes.",
  },
  {
    id: 4,
    category: "Billing",
    question: "What Kubernetes version do you run?",
    answer:
      "NKS runs the latest stable Kubernetes release. Control plane upgrades are automatic and non-disruptive. Node pool upgrades are manual with rolling updates.",
  },
  {
    id: 5,
    category: "Scaling",
    question: "Can I access nodes directly?",
    answer:
      "Nodes are managed by NeevCloud. You interact through Kubernetes API only. For debugging, use kubectl debug to run privileged pods on nodes.",
  },
];
