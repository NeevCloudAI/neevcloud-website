import type { FaqItem } from "@/shared/data/faq-section-types";

export const NVIDIA_A100_FAQ: readonly FaqItem[] = [
  {
    id: 1,
    category: "Pricing",
    question:
      "What is the A100 GPU price in India and how does cloud rental compare to buying?",
    answer:
      "The A100 GPU price in India can be very high when purchased outright due to hardware, power, cooling, and maintenance costs. With NeevCloud, you can avoid heavy upfront investment by choosing A100 GPU rental instead. Renting allows you to pay only for what you use while accessing enterprise-grade performance for AI, ML, and HPC workloads at a far lower total cost of ownership.",
  },
  {
    id: 2,
    category: "Use Cases",
    question:
      "Who should rent an NVIDIA A100 GPU instead of using consumer-grade GPUs?",
    answer:
      "The NVIDIA A100 is ideal for organizations running AI training, deep learning, machine learning, and HPC workloads that require high memory bandwidth, stability, and scalability. If you're working with large datasets, complex models, or production-grade AI systems, renting an A100 GPU server provides significantly better performance and reliability than consumer GPUs.",
  },
  {
    id: 3,
    category: "Infrastructure",
    question:
      "How does the NVIDIA A100 support scalable AI and HPC workloads in the cloud?",
    answer:
      "The A100 is built for scale, offering Multi-Instance GPU (MIG) technology, large HBM2e memory options, and advanced Tensor Cores. On NeevCloud, you can deploy A100 GPUs as part of scalable cloud GPU infrastructure, making it easy to expand from a single workload to multi-node AI and HPC environments without infrastructure complexity.",
  },
  {
    id: 4,
    category: "NeevCloud",
    question:
      "Why is NeevCloud a reliable choice for renting NVIDIA A100 GPUs in India?",
    answer:
      "NeevCloud delivers cloud GPU rental in India with enterprise-grade infrastructure, flexible reservation options, and predictable performance. By renting NVIDIA A100 GPUs on NeevCloud, teams gain access to high-performance AI compute, priority availability, and cost-efficient deployment-without managing physical servers or long-term commitments.",
  },
] as const;

export const NVIDIA_A30_FAQ: readonly FaqItem[] = [
  {
    id: 1,
    category: "Use Cases",
    question: "What is NVIDIA A30 best used for?",
    answer:
      "AI inference, medium-scale training, and data analytics workloads.",
  },
  {
    id: 2,
    category: "Use Cases",
    question: "Is A30 good for LLM and GenAI tasks?",
    answer:
      "Yes. It efficiently handles mid-size LLMs and generative AI inference.",
  },
  {
    id: 3,
    category: "Pricing",
    question: "What makes A30 cost-effective for AI?",
    answer: "High Tensor Core performance with balanced power consumption.",
  },
  {
    id: 4,
    category: "Infrastructure",
    question: "Can A30 scale in multi-GPU setups?",
    answer:
      "Yes. It supports multi-GPU clusters for faster training and inference.",
  },
  {
    id: 5,
    category: "Use Cases",
    question: "Who should use the NVIDIA A30?",
    answer: "Teams deploying scalable AI inference and analytics applications.",
  },
] as const;

export const NVIDIA_B200_FAQ: readonly FaqItem[] = [
  {
    id: 1,
    category: "Overview",
    question: "What is the NVIDIA B200 GPU and what workloads is it ideal for?",
    answer:
      "The NVIDIA B200, built on the Blackwell HGX architecture, is designed for high-performance computing (HPC) and AI workloads. It excels in large language models, recommender systems, chatbots, and generative AI, offering businesses the power to accelerate AI transformation and scale demanding computational tasks efficiently.",
  },
  {
    id: 2,
    category: "Specifications",
    question:
      "What are the key features and specifications of the NVIDIA B200 GPU?",
    answer:
      "The B200 leverages 12-high memory stacks, reaching up to 288GB, and provides 8 TB/s memory bandwidth with an advanced NVLink interface for seamless connectivity. It delivers 5X AI inferencing performance over previous generations, making it ideal for data-intensive AI and HPC applications.",
  },
  {
    id: 3,
    category: "Deployment",
    question:
      "How can I deploy the NVIDIA B200 in the cloud for AI and HPC workloads?",
    answer:
      "NeevCloud offers pre-configured B200 GPU instances optimized for cloud and hybrid deployments. You can scale quickly across virtual workstations, enterprise AI projects, or HPC clusters, ensuring maximum performance while avoiding the complexity of managing on-premise GPU infrastructure.",
  },
  {
    id: 4,
    category: "Pricing",
    question:
      "What is the NVIDIA B200 price and how can I access it on NeevCloud?",
    answer:
      "The NVIDIA B200 price depends on the instance type and rental duration. By renting B200 GPUs on NeevCloud, you gain cost-effective access to high-performance AI and HPC compute, eliminating large upfront hardware expenses. Check NeevCloud to view the latest nvidia b200 price and flexible rental options.",
  },
] as const;

export const NVIDIA_B300_FAQ: readonly FaqItem[] = [
  {
    id: 1,
    category: "Overview",
    question: "What is the NVIDIA B300?",
    answer:
      "The NVIDIA B300 is a next-generation GPU built on the Blackwell Ultra architecture. It features 288GB of HBM3e memory, 8TB/s bandwidth, and delivers 15 petaFLOPS of FP4 compute, making it one of the most powerful GPUs available for enterprise AI training and inference workloads.",
  },
  {
    id: 2,
    category: "Comparison",
    question: "What is the difference between NVIDIA B300 and B200?",
    answer:
      "The NVIDIA B300 is an upgraded version of the B200, offering 50% more GPU memory (288GB vs 192GB), 1.5x faster AI performance, and improved thermal design. The B300 is built for larger AI models and more demanding inference workloads that the B200 cannot handle as efficiently.",
  },
  {
    id: 3,
    category: "Infrastructure",
    question: "How much power does the NVIDIA B300 need?",
    answer:
      "The NVIDIA B300 requires up to 1,400W of power per GPU. It also requires liquid cooling infrastructure, making it essential for data centers to have advanced cooling and high-density power systems in place before deployment.",
  },
  {
    id: 4,
    category: "Pricing",
    question: "How much does a NVIDIA B300 cost?",
    answer:
      "The NVIDIA B300 price varies depending on deployment model and configuration. On NeevCloud, you can access the B300 GPU cloud at the best price with flexible hourly billing, eliminating the need for large upfront hardware investment. Contact our team for a custom quote.",
  },
] as const;

export const NVIDIA_H200_FAQ: readonly FaqItem[] = [
  {
    id: 1,
    category: "Overview",
    question: "What is the H200 GPU and why is it important for AI workloads?",
    answer:
      "The NVIDIA H200 Tensor Core GPU is the latest evolution in accelerated computing, designed to handle the most computationally intensive AI workloads. With up to 30% faster processing than the H100, enhanced energy efficiency, and advanced AI capabilities, it excels at AI training, inference, deep learning, and LLM workloads. Whether you're scaling a single GPU or a multi-GPU AI SuperCluster, the H200 delivers unmatched performance for cloud-based AI.",
  },
  {
    id: 2,
    category: "Deployment",
    question: "How can I pre-reserve or rent an H200 GPU on NeevCloud?",
    answer:
      "NeevCloud offers flexible H200 GPU rental options on a pay-as-you-go basis. By pre-reserving, you can lock in guaranteed access to H200 GPUs, ensuring your AI workloads run without delays. Pre-reservation also provides attractive early pricing, making it easy to scale AI experiments, deep learning, or LLM training efficiently.",
  },
  {
    id: 3,
    category: "Pricing",
    question: "What is the H200 GPU pricing and rental cost?",
    answer:
      "The H200 GPU is available on NeevCloud for just $1.99/hr (limited-time offer), making it one of the most cost-effective options for high-performance AI. You can also explore H200 GPU rent price over time, on-demand H200 pricing, and hourly rental options tailored for both short-term experiments and long-term production workloads.",
  },
  {
    id: 4,
    category: "Use Cases",
    question:
      "What makes the H200 GPU ideal for AI, deep learning, and cloud deployments?",
    answer:
      "The H200 GPU is optimized for cloud-based AI workloads, offering unmatched scalability, inference throughput, and advanced GPU interconnects. It's perfect for AI training, deep learning, LLMs, and rendering tasks, enabling organizations to maximize performance while minimizing costs. Renting an H200 GPU from NeevCloud gives you instant access to enterprise-grade GPU power without the overhead of physical infrastructure.",
  },
] as const;

export const NVIDIA_H100_FAQ: readonly FaqItem[] = [
  {
    id: 1,
    category: "Overview",
    question: "What is an NVIDIA HGX H100 GPU Cluster?",
    answer:
      "A high-performance AI supercomputing platform built for large-scale LLM training, GenAI, and HPC workloads with ultra-fast NVLink interconnect.",
  },
  {
    id: 2,
    category: "Use Cases",
    question: "Why is H100 ideal for training LLMs?",
    answer:
      "Its 4th-Gen Tensor Cores and massive memory bandwidth accelerate trillion-parameter models with minimal latency.",
  },
  {
    id: 3,
    category: "Infrastructure",
    question: "How does HGX H100 improve distributed AI training?",
    answer:
      "NVSwitch and NVLink enable GPUs to function as one massive GPU, dramatically reducing communication overhead.",
  },
  {
    id: 4,
    category: "Use Cases",
    question: "Can HGX H100 run scientific HPC workloads?",
    answer:
      "Yes. It is widely used for simulations, genomics, climate modeling, and financial analytics.",
  },
  {
    id: 5,
    category: "NeevCloud",
    question: "Can I deploy H100 on NeevCloud?",
    answer:
      "Yes. NeevCloud provides fully managed, scalable HGX H100 clusters for AI training, inference, and HPC.",
  },
] as const;
