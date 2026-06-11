import type { GpuUseCasesSectionContent } from "@/shared/types/gpu-use-cases-section.types";

export const NVIDIA_A100_USE_CASES_SECTION: GpuUseCasesSectionContent = {
  titlePrefix: "Use Cases of",
  titleHighlight: "Nvidia A100",
  cards: [
    {
      id: "large-scale-ai-training",
      title: "Large-Scale AI Model Training & Fine-Tuning",
      imageSrc: "/images/fine-tuning.png",
      imageAlt: "Large-scale AI model training and fine-tuning",
      description:
        "Rent NVIDIA A100 GPU cloud instances with 40GB or 80GB HBM2e memory for training large-scale AI models. A100 delivers 20X faster training than previous generations with 3rd-gen Tensor Cores supporting TF32, FP16, and INT8 precision. Deploy cloud-based A100 for transformer models, computer vision, and NLP workloads requiring massive parallel compute with multi-GPU scaling via NVLink.",
    },
    {
      id: "production-ai-inference",
      title: "Production AI Inference & MLOps Deployment",
      imageSrc: "/images/mlops.png",
      imageAlt: "Production AI inference and MLOps deployment",
      description:
        "Access A100 GPU cloud rental for deploying production AI inference with Multi-Instance GPU (MIG) technology partitioning into 7 isolated instances. Each MIG instance provides dedicated compute, memory, and bandwidth for serving multiple AI models simultaneously. Rent A100 on-demand for conversational AI, recommendation systems, and real-time inference requiring predictable performance and optimal resource utilization at scale.",
    },
    {
      id: "hpc-simulation",
      title: "High-Performance Computing & Simulation",
      imageSrc: "/images/simulation.png",
      imageAlt: "High-performance computing and simulation",
      description:
        "Deploy A100 GPU cloud rental for HPC workloads with double-precision Tensor Cores delivering 9.7 TFLOPS FP64 performance. A100 accelerates computational fluid dynamics, molecular dynamics, weather modeling, and quantum chemistry simulations with up to 20X faster performance than CPUs. Rent cloud-based A100 for genomics research, drug discovery, and materials science requiring massive parallel computing power.",
    },
    {
      id: "data-analytics-spark",
      title: "GPU-Accelerated Data Analytics & Apache Spark",
      imageSrc: "/images/apache-spark.png",
      imageAlt: "GPU-accelerated data analytics and Apache Spark",
      description:
        "Rent NVIDIA A100 cloud GPUs for accelerating big data analytics with RAPIDS libraries on Apache Spark. A100 80GB's 2TB/s memory bandwidth processes massive datasets in-memory, delivering up to 100X faster analytics than CPU-only systems. Deploy A100 instances for ETL pipelines, real-time fraud detection, financial analytics, and data science workflows requiring GPU acceleration for faster insights.",
    },
  ],
};

export const NVIDIA_A30_USE_CASES_SECTION: GpuUseCasesSectionContent = {
  titlePrefix: "Use Cases of",
  titleHighlight: "Nvidia A30",
  cards: [
    {
      id: "mainstream-ai-inference",
      title: "Mainstream AI Inference",
      imageSrc: "/images/mainsteam.png",
      imageAlt: "Mainstream AI inference",
      description:
        "Rent NVIDIA A30 GPU cloud instances with 24GB HBM2 memory in a cost-effective 165W power envelope for production AI inference. Multi-Instance GPU (MIG) technology partitions into 4 isolated instances, enabling efficient multi-tenant deployments. Deploy A30 for NLP, computer vision, and recommendation systems.",
    },
    {
      id: "transfer-learning",
      title: "Transfer Learning & Model Fine-Tuning Workflows",
      imageSrc: "/images/transfer-learning.png",
      imageAlt: "Transfer learning and model fine-tuning workflows",
      description:
        "Access A30 GPU cloud rental for fine-tuning pre-trained foundation models, including BERT, GPT, and vision transformers. TF32 precision delivers 10X faster training than T4, enabling rapid iteration for domain-specific AI applications. Rent A30 on-demand for customizing large language models and developing industry-specific AI solutions without flagship GPU requirements.",
    },
    {
      id: "virtualized-hpc",
      title: "Virtualized HPC & Multi-User Scientific Computing",
      imageSrc: "/images/hpc.png",
      imageAlt: "Virtualized HPC and multi-user scientific computing",
      description:
        "Rent NVIDIA A30 cloud GPUs for high-performance computing in computational fluid dynamics, genomics, molecular dynamics, and engineering simulation. FP64 Tensor Cores with MIG enable multiple researchers to share GPU resources securely with guaranteed quality of service. Deploy A30-powered infrastructure for academic research, pharmaceutical development, and efficient scientific computing.",
    },
    {
      id: "data-analytics-etl",
      title: "GPU-Accelerated Data Analytics & ETL Pipelines",
      imageSrc: "/images/etl.png",
      imageAlt: "GPU-accelerated data analytics and ETL pipelines",
      description:
        "Deploy A30 GPU cloud rental for transforming big data processing with RAPIDS libraries and Apache Spark acceleration. With 933GB/s memory bandwidth, A30 handles large-scale ETL operations, real-time analytics, and machine learning efficiently. Rent A30 instances for business intelligence, fraud detection, and data science workflows requiring GPU acceleration without premium costs.",
    },
  ],
};

export const NVIDIA_B200_USE_CASES_SECTION: GpuUseCasesSectionContent = {
  titlePrefix: "Use Cases of",
  titleHighlight: "Nvidia B200",
  cards: [
    {
      id: "foundation-model-training",
      title: "Trillion-Parameter Foundation Model Training",
      imageSrc: "/images/model-training.png",
      imageAlt: "Trillion-parameter foundation model training",
      description:
        "Rent NVIDIA B200 GPU cloud instances for training frontier AI models beyond trillion parameters. Revolutionary Blackwell architecture with NVLink Fusion enables massive GPU clusters for next-generation foundation models. Deploy cloud-based B200 for multimodal AI research, enabling breakthroughs in language understanding, computer vision, and reasoning capabilities, defining artificial intelligence's future.",
    },
    {
      id: "generative-ai-inference",
      title: "Real-Time Generative AI & Production Inference",
      imageSrc: "/images/real-time.png",
      imageAlt: "Real-time generative AI and production inference",
      description:
        "Access B200 GPU cloud rental for deploying demanding generative AI applications with minimal latency. HBM3E memory and advanced Tensor Cores enable real-time inference for large language models, text-to-image generation, and interactive AI systems. Rent B200 instances for powering AI assistants, real-time translation services, and content generation platforms requiring immediate responses.",
    },
    {
      id: "exascale-scientific-computing",
      title: "Exascale Scientific Computing & Research",
      imageSrc: "/images/exascale.png",
      imageAlt: "Exascale scientific computing and research",
      description:
        "Deploy B200 GPU cloud rental for scientific research requiring exascale computing performance. B200 transforms climate modeling, nuclear fusion research, drug discovery, and materials science simulations. Rent cloud-based B200 for quantum chemistry calculations, cosmological research, and computational science, pushing boundaries of what's computationally possible in physics, chemistry, and biology.",
    },
    {
      id: "drug-discovery",
      title: "AI-Driven Drug Discovery & Molecular Modeling",
      imageSrc: "/images/drug-discovery.png",
      imageAlt: "AI-driven drug discovery and molecular modeling",
      description:
        "Rent NVIDIA B200 cloud GPUs for pharmaceutical research with AI-accelerated molecular modeling and protein structure prediction. Massive computing power enables screening billions of drug candidates rapidly, accelerating therapeutic development. Deploy B200 for AlphaFold-scale simulations, molecular dynamics, generative AI for novel therapeutics, and personalized medicine approaches transforming discovery timelines.",
    },
  ],
};

export const NVIDIA_B300_USE_CASES_SECTION: GpuUseCasesSectionContent = {
  titlePrefix: "Use Cases of",
  titleHighlight: "Nvidia B300",
  cards: [
    {
      id: "llm-training",
      title: "Training Next-Generation Large Language Models",
      imageSrc: "/images/model-training.png",
      imageAlt: "Training next-generation large language models",
      description:
        "Build and train advanced large language models with significantly faster turnaround times using NVIDIA Blackwell Ultra GPUs. With up to 72 PFLOPS of FP8 training performance and massive GPU memory capacity, DGX B300 enables enterprises to handle complex model architectures, reduce training cycles, and bring AI innovations to production faster.",
    },
    {
      id: "hyperscale-inference",
      title: "Real-Time AI Inference at Hyperscale",
      imageSrc: "/images/real-time.png",
      imageAlt: "Real-time AI inference at hyperscale",
      description:
        "Power ultra-fast inference workloads with up to 144 PFLOPS of FP4 performance, enabling real-time decision-making across applications. Whether it's conversational AI, recommendation systems, or intelligent automation, DGX B300 ensures low-latency, high-throughput inference that scales effortlessly to meet enterprise demands.",
    },
    {
      id: "climate-modeling",
      title: "Climate Modeling and Weather Prediction",
      imageSrc: "/images/exascale.png",
      imageAlt: "Climate modeling and weather prediction",
      description:
        "Research institutions use DGX B300 to process vast environmental datasets and run high-resolution climate models. This enables more accurate weather forecasting and long-term climate predictions by analyzing complex atmospheric patterns at scale.",
    },
    {
      id: "scalable-ai-deployments",
      title: "Scalable AI Deployments Across Cloud",
      imageSrc: "/images/drug-discovery.png",
      imageAlt: "Scalable AI deployments across cloud",
      description:
        "Adapt to evolving business needs with flexible deployment options across cloud and bare metal environments. DGX B300 enables organizations to scale AI workloads seamlessly, supported by NVLink connectivity and high-speed networking for efficient data movement and distributed computing.",
    },
  ],
};

export const NVIDIA_H200_USE_CASES_SECTION: GpuUseCasesSectionContent = {
  titlePrefix: "Use Cases of",
  titleHighlight: "Nvidia H200",
  cards: [
    {
      id: "trillion-parameter-llm-training",
      title: "Trillion-Parameter LLM Training",
      imageSrc: "/images/h200-trillion-parameter-llm-training.png",
      imageAlt: "Trillion-parameter LLM training on NVIDIA H200",
      description:
        "Rent NVIDIA H200 GPU cloud instances with 141GB HBM3E memory for training next-generation large language models. The H200 delivers 4.8TB/s bandwidth, nearly double H100 capacity, enabling trillion-parameter foundation models with larger batch sizes. Cloud-based H200 rental eliminates procurement delays, providing instant access to cutting-edge AI infrastructure for frontier models.",
    },
    {
      id: "realtime-llm-inference-rag",
      title: "Real-Time LLM Inference & RAG Applications",
      imageSrc: "/images/h200-realtime-llm-inference-rag.png",
      imageAlt: "Real-time LLM inference and RAG applications on NVIDIA H200",
      description:
        "Deploy H200 GPU cloud rental for production AI inference, delivering 1.9X faster performance than H100 on Llama2 70B models. Expanded memory bandwidth enables low-latency serving of large language models for retrieval-augmented generation (RAG), AI assistants, and knowledge systems. Rent H200 on-demand for scalable conversational AI supporting thousands of concurrent users.",
    },
    {
      id: "memory-intensive-hpc",
      title: "Memory-Intensive HPC & Scientific Simulation",
      imageSrc: "/images/h200-memory-intensive-hpc.png",
      imageAlt: "Memory-intensive HPC and scientific simulation on NVIDIA H200",
      description:
        "Access H200 GPU cloud instances for computational workloads requiring massive memory bandwidth, including weather forecasting, molecular simulations, and genomic analysis. The 141GB HBM3E memory handles datasets too large for standard GPUs, accelerating computational fluid dynamics, climate modeling, and protein folding research at unprecedented performance levels.",
    },
    {
      id: "ai-accelerated-data-science",
      title: "AI-Accelerated Data Science & Analytics",
      imageSrc: "/images/h200-ai-accelerated-data-science.png",
      imageAlt: "AI-accelerated data science and analytics on NVIDIA H200",
      description:
        "Rent NVIDIA H200 GPUs for large-scale data analytics, ETL pipelines, and GPU-accelerated machine learning workflows. Massive memory enables in-memory processing of multi-terabyte datasets for real-time business intelligence, fraud detection, and predictive analytics. Cloud-based H200 with RAPIDS acceleration transforms data warehousing, delivering insights faster while reducing ownership costs.",
    },
  ],
};

export const NVIDIA_H100_USE_CASES_SECTION: GpuUseCasesSectionContent = {
  titlePrefix: "Use Cases of",
  titleHighlight: "Nvidia H100",
  cards: [
    {
      id: "llm-training-fine-tuning",
      title: "Large Language Model Training & Fine-Tuning",
      imageSrc: "/images/llm.png",
      imageAlt: "Large language model training and fine-tuning",
      description:
        "The H100 GPU delivers 80GB HBM3 memory and 4th-generation Tensor Cores, providing the computational power needed for GPT, LLaMA, and diffusion models. Its distributed training capabilities with NVLink enable seamless scaling across multiple H100 instances, making it the best GPU for deep learning and neural network training in production environments.",
    },
    {
      id: "ai-inference-at-scale",
      title: "High-Performance AI Inference at Scale",
      imageSrc: "/images/ai-scale.png",
      imageAlt: "High-performance AI inference at scale",
      description:
        "Deploy H100 GPU cloud rental for real-time AI inference delivering up to 30X faster performance than previous-generation GPUs. With advanced Transformer Engine and FP8 precision support, H100 accelerates conversational AI, recommendation systems, and production LLM inference workloads.",
    },
    {
      id: "generative-ai-diffusion",
      title: "Generative AI & Diffusion Model Deployment",
      imageSrc: "/images/genai.png",
      imageAlt: "Generative AI and diffusion model deployment",
      description:
        "NVIDIA H100 GPUs for generative AI applications including Stable Diffusion, DALL-E, and custom text-to-image models. The H100's Tensor Cores accelerate diffusion model inference and training, enabling rapid iteration for AI artists and developers. Cloud-based H100 instances provide on-demand access to enterprise-grade compute for AI content creation, synthetic data generation, and multimodal AI research without capital investment in hardware.",
    },
    {
      id: "scientific-computing-hpc",
      title: "Scientific Computing & HPC Workloads",
      imageSrc: "/images/hpc-workload.png",
      imageAlt: "Scientific computing and HPC workloads",
      description:
        "Access H100 GPU cloud rental for high-performance computing applications in molecular dynamics, computational fluid dynamics, and climate modeling. With FP64 Tensor Cores delivering 67 TFLOPS double-precision performance, H100 accelerates scientific simulations requiring high numerical accuracy. Rent H100 instances on-demand for research projects in genomics, drug discovery, and quantum chemistry, enabling breakthrough scientific discoveries.",
    },
  ],
};
