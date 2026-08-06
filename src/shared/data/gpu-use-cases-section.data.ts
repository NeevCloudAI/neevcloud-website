import type { GpuUseCasesSectionContent } from "@/shared/types/gpu-use-cases-section.types";

export const NVIDIA_A100_USE_CASES_SECTION: GpuUseCasesSectionContent = {
  titlePrefix: "Use Cases of",
  titleHighlight: "Nvidia A100",
  cards: [
    {
      id: "large-scale-ai-training",
      title: "Large-Scale AI Model Training & Fine-Tuning",
      imageSrc: "/images/webp/fine-tuning.webp",
      imageAlt: "Large-scale AI model training and fine-tuning",
      description:
        "Rent NVIDIA A100 GPU cloud instances with 40GB or 80GB HBM2e memory for training large-scale AI models. A100 delivers 20X faster training than previous generations with 3rd-gen Tensor Cores supporting TF32, FP16, and INT8 precision. Deploy cloud-based A100 for transformer models, computer vision, and NLP workloads requiring massive parallel compute with multi-GPU scaling via NVLink.",
    },
    {
      id: "production-ai-inference",
      title: "Production AI Inference & MLOps Deployment",
      imageSrc: "/images/webp/mlops.webp",
      imageAlt: "Production AI inference and MLOps deployment",
      description:
        "Access A100 GPU cloud rental for deploying production AI inference with Multi-Instance GPU (MIG) technology partitioning into 7 isolated instances. Each MIG instance provides dedicated compute, memory, and bandwidth for serving multiple AI models simultaneously. Rent A100 on-demand for conversational AI, recommendation systems, and real-time inference requiring predictable performance and optimal resource utilization at scale.",
    },
    {
      id: "hpc-simulation",
      title: "High-Performance Computing & Simulation",
      imageSrc: "/images/webp/simulation.webp",
      imageAlt: "High-performance computing and simulation",
      description:
        "Deploy A100 GPU cloud rental for HPC workloads with double-precision Tensor Cores delivering 9.7 TFLOPS FP64 performance. A100 accelerates computational fluid dynamics, molecular dynamics, weather modeling, and quantum chemistry simulations with up to 20X faster performance than CPUs. Rent cloud-based A100 for genomics research, drug discovery, and materials science requiring massive parallel computing power.",
    },
    {
      id: "data-analytics-spark",
      title: "GPU-Accelerated Data Analytics & Apache Spark",
      imageSrc: "/images/webp/apache-spark.webp",
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
      imageSrc: "/images/webp/mainsteam.webp",
      imageAlt: "Mainstream AI inference",
      description:
        "Rent NVIDIA A30 GPU cloud instances with 24GB HBM2 memory in a cost-effective 165W power envelope for production AI inference. Multi-Instance GPU (MIG) technology partitions into 4 isolated instances, enabling efficient multi-tenant deployments. Deploy A30 for NLP, computer vision, and recommendation systems.",
    },
    {
      id: "transfer-learning",
      title: "Transfer Learning & Model Fine-Tuning Workflows",
      imageSrc: "/images/webp/transfer-learning.webp",
      imageAlt: "Transfer learning and model fine-tuning workflows",
      description:
        "Access A30 GPU cloud rental for fine-tuning pre-trained foundation models, including BERT, GPT, and vision transformers. TF32 precision delivers 10X faster training than T4, enabling rapid iteration for domain-specific AI applications. Rent A30 on-demand for customizing large language models and developing industry-specific AI solutions without flagship GPU requirements.",
    },
    {
      id: "virtualized-hpc",
      title: "Virtualized HPC & Multi-User Scientific Computing",
      imageSrc: "/images/webp/hpc.webp",
      imageAlt: "Virtualized HPC and multi-user scientific computing",
      description:
        "Rent NVIDIA A30 cloud GPUs for high-performance computing in computational fluid dynamics, genomics, molecular dynamics, and engineering simulation. FP64 Tensor Cores with MIG enable multiple researchers to share GPU resources securely with guaranteed quality of service. Deploy A30-powered infrastructure for academic research, pharmaceutical development, and efficient scientific computing.",
    },
    {
      id: "data-analytics-etl",
      title: "GPU-Accelerated Data Analytics & ETL Pipelines",
      imageSrc: "/images/webp/etl.webp",
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
      imageSrc: "/images/webp/model-training.webp",
      imageAlt: "Trillion-parameter foundation model training",
      description:
        "Rent NVIDIA B200 GPU cloud instances for training frontier AI models beyond trillion parameters. Revolutionary Blackwell architecture with NVLink Fusion enables massive GPU clusters for next-generation foundation models. Deploy cloud-based B200 for multimodal AI research, enabling breakthroughs in language understanding, computer vision, and reasoning capabilities, defining artificial intelligence's future.",
    },
    {
      id: "generative-ai-inference",
      title: "Real-Time Generative AI & Production Inference",
      imageSrc: "/images/webp/real-time.webp",
      imageAlt: "Real-time generative AI and production inference",
      description:
        "Access B200 GPU cloud rental for deploying demanding generative AI applications with minimal latency. HBM3E memory and advanced Tensor Cores enable real-time inference for large language models, text-to-image generation, and interactive AI systems. Rent B200 instances for powering AI assistants, real-time translation services, and content generation platforms requiring immediate responses.",
    },
    {
      id: "exascale-scientific-computing",
      title: "Exascale Scientific Computing & Research",
      imageSrc: "/images/webp/exascale.webp",
      imageAlt: "Exascale scientific computing and research",
      description:
        "Deploy B200 GPU cloud rental for scientific research requiring exascale computing performance. B200 transforms climate modeling, nuclear fusion research, drug discovery, and materials science simulations. Rent cloud-based B200 for quantum chemistry calculations, cosmological research, and computational science, pushing boundaries of what's computationally possible in physics, chemistry, and biology.",
    },
    {
      id: "drug-discovery",
      title: "AI-Driven Drug Discovery & Molecular Modeling",
      imageSrc: "/images/webp/drug-discovery.webp",
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
      imageSrc: "/images/webp/model-training.webp",
      imageAlt: "Training next-generation large language models",
      description:
        "Build and train advanced large language models with significantly faster turnaround times using NVIDIA Blackwell Ultra GPUs. With up to 72 PFLOPS of FP8 training performance and massive GPU memory capacity, DGX B300 enables enterprises to handle complex model architectures, reduce training cycles, and bring AI innovations to production faster.",
    },
    {
      id: "hyperscale-inference",
      title: "Real-Time AI Inference at Hyperscale",
      imageSrc: "/images/webp/real-time.webp",
      imageAlt: "Real-time AI inference at hyperscale",
      description:
        "Power ultra-fast inference workloads with up to 144 PFLOPS of FP4 performance, enabling real-time decision-making across applications. Whether it's conversational AI, recommendation systems, or intelligent automation, DGX B300 ensures low-latency, high-throughput inference that scales effortlessly to meet enterprise demands.",
    },
    {
      id: "climate-modeling",
      title: "Climate Modeling and Weather Prediction",
      imageSrc: "/images/webp/exascale.webp",
      imageAlt: "Climate modeling and weather prediction",
      description:
        "Research institutions use DGX B300 to process vast environmental datasets and run high-resolution climate models. This enables more accurate weather forecasting and long-term climate predictions by analyzing complex atmospheric patterns at scale.",
    },
    {
      id: "scalable-ai-deployments",
      title: "Scalable AI Deployments Across Cloud",
      imageSrc: "/images/webp/drug-discovery.webp",
      imageAlt: "Scalable AI deployments across cloud",
      description:
        "Adapt to evolving business needs with flexible deployment options across cloud and bare metal environments. DGX B300 enables organizations to scale AI workloads seamlessly, supported by NVLink connectivity and high-speed networking for efficient data movement and distributed computing.",
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
      imageSrc: "/images/webp/llm.webp",
      imageAlt: "Large language model training and fine-tuning",
      description:
        "The H100 GPU delivers 80GB HBM3 memory and 4th-generation Tensor Cores, providing the computational power needed for GPT, LLaMA, and diffusion models. Its distributed training capabilities with NVLink enable seamless scaling across multiple H100 instances, making it the best GPU for deep learning and neural network training in production environments.",
    },
    {
      id: "ai-inference-at-scale",
      title: "High-Performance AI Inference at Scale",
      imageSrc: "/images/webp/ai-scale.webp",
      imageAlt: "High-performance AI inference at scale",
      description:
        "Deploy H100 GPU cloud rental for real-time AI inference delivering up to 30X faster performance than previous-generation GPUs. With advanced Transformer Engine and FP8 precision support, H100 accelerates conversational AI, recommendation systems, and production LLM inference workloads.",
    },
    {
      id: "generative-ai-diffusion",
      title: "Generative AI & Diffusion Model Deployment",
      imageSrc: "/images/webp/genai.webp",
      imageAlt: "Generative AI and diffusion model deployment",
      description:
        "NVIDIA H100 GPUs for generative AI applications including Stable Diffusion, DALL-E, and custom text-to-image models. The H100's Tensor Cores accelerate diffusion model inference and training, enabling rapid iteration for AI artists and developers. Cloud-based H100 instances provide on-demand access to enterprise-grade compute for AI content creation, synthetic data generation, and multimodal AI research without capital investment in hardware.",
    },
    {
      id: "scientific-computing-hpc",
      title: "Scientific Computing & HPC Workloads",
      imageSrc: "/images/webp/hpc-workload.webp",
      imageAlt: "Scientific computing and HPC workloads",
      description:
        "Access H100 GPU cloud rental for high-performance computing applications in molecular dynamics, computational fluid dynamics, and climate modeling. With FP64 Tensor Cores delivering 67 TFLOPS double-precision performance, H100 accelerates scientific simulations requiring high numerical accuracy. Rent H100 instances on-demand for research projects in genomics, drug discovery, and quantum chemistry, enabling breakthrough scientific discoveries.",
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
      imageSrc: "/images/webp/trillion-parameter-llm-training.webp",
      imageAlt: "Trillion-parameter LLM training on NVIDIA H200",
      description:
        "Rent NVIDIA H200 GPU cloud instances with 141GB HBM3E memory for training next-generation large language models. The H200 delivers 4.8TB/s bandwidth, nearly double H100 capacity, enabling trillion-parameter foundation models with larger batch sizes. Cloud-based H200 rental eliminates procurement delays, providing instant access to cutting-edge AI infrastructure for frontier models.",
    },
    {
      id: "realtime-llm-inference-rag",
      title: "Real-Time LLM Inference & RAG Applications",
      imageSrc: "/images/webp/realtime-llm.webp",
      imageAlt: "Real-time LLM inference and RAG applications on NVIDIA H200",
      description:
        "Deploy H200 GPU cloud rental for production AI inference, delivering 1.9X faster performance than H100 on Llama2 70B models. Expanded memory bandwidth enables low-latency serving of large language models for retrieval-augmented generation (RAG), AI assistants, and knowledge systems. Rent H200 on-demand for scalable conversational AI supporting thousands of concurrent users.",
    },
    {
      id: "memory-intensive-hpc",
      title: "Memory-Intensive HPC & Scientific Simulation",
      imageSrc: "/images/webp/memory-intensive-hpc.webp",
      imageAlt: "Memory-intensive HPC and scientific simulation on NVIDIA H200",
      description:
        "Access H200 GPU cloud instances for computational workloads requiring massive memory bandwidth, including weather forecasting, molecular simulations, and genomic analysis. The 141GB HBM3E memory handles datasets too large for standard GPUs, accelerating computational fluid dynamics, climate modeling, and protein folding research at unprecedented performance levels.",
    },
    {
      id: "ai-accelerated-data-science",
      title: "AI-Accelerated Data Science & Analytics",
      imageSrc: "/images/webp/ai-accelerated-data-science.webp",
      imageAlt: "AI-accelerated data science and analytics on NVIDIA H200",
      description:
        "Rent NVIDIA H200 GPUs for large-scale data analytics, ETL pipelines, and GPU-accelerated machine learning workflows. Massive memory enables in-memory processing of multi-terabyte datasets for real-time business intelligence, fraud detection, and predictive analytics. Cloud-based H200 with RAPIDS acceleration transforms data warehousing, delivering insights faster while reducing ownership costs.",
    },
  ],
};

export const NVIDIA_RTX_3090_USE_CASES_SECTION: GpuUseCasesSectionContent = {
  titlePrefix: "Use Cases of",
  titleHighlight: "Nvidia RTX 3090",
  cards: [
    {
      id: "professional-video-editing",
      title: "Professional Video Editing & Color Grading",
      imageSrc: "/images/webp/professional-video-editing.webp",
      imageAlt:
        "Professional video editing and color grading on NVIDIA RTX 3090",
      description:
        "Rent NVIDIA RTX 3090 GPU cloud instances with 24GB GDDR6X memory for professional video production. RTX 3090 handles 8K video editing with real-time playback in Premiere Pro and DaVinci Resolve. Deploy cloud-based RTX 3090 for video effects, color grading workflows, and multi-stream 4K editing, enabling production teams to access professional GPU acceleration.",
    },
    {
      id: "3d-modeling-product-design",
      title: "3D Modeling & Product Design Visualization",
      imageSrc: "/images/webp/3d-modeling.webp",
      imageAlt:
        "3D modeling and product design visualization on NVIDIA RTX 3090",
      description:
        "Access RTX 3090 GPU cloud rental for CAD applications and 3D modeling in Maya, 3ds Max, and Cinema 4D. RT Cores provide real-time ray tracing for architectural and product visualization. Rent RTX 3090 instances for viewport performance optimization, rendering complex scenes with high polygon counts, and interactive design workflows requiring responsive graphics.",
    },
    {
      id: "ml-model-prototyping",
      title: "Machine Learning Model Prototyping & Research",
      imageSrc: "/images/webp/ml-model-prototyping.webp",
      imageAlt:
        "Machine learning model prototyping and research on NVIDIA RTX 3090",
      description:
        "Rent NVIDIA RTX 3090 cloud GPUs for deep learning research with sufficient memory for training mid-size models. Tensor Cores accelerate training and inference for computer vision and NLP experiments. Deploy cloud-based RTX 3090 for data scientists developing AI models, conducting experiments, and prototyping machine learning solutions before production deployment.",
    },
    {
      id: "high-resolution-rendering-vr",
      title: "High-Resolution Rendering & VR Development",
      imageSrc: "/images/webp/high-resolution-rendering.webp",
      imageAlt:
        "High-resolution rendering and VR development on NVIDIA RTX 3090",
      description:
        "Deploy RTX 3090 GPU cloud rental for 4K rendering, VR development, and game testing environments. RTX 3090 powers high-fidelity graphics with minimal latency for virtual reality experiences. Rent cloud-based RTX 3090 for game development studios, providing remote access to high-performance graphics for testing and optimization.",
    },
  ],
};

export const NVIDIA_RTX_5090_USE_CASES_SECTION: GpuUseCasesSectionContent = {
  titlePrefix: "Use Cases of",
  titleHighlight: "Nvidia RTX 5090",
  cards: [
    {
      id: "ai-enhanced-graphics",
      title: "AI-Enhanced Graphics",
      imageSrc: "/images/webp/ai-enhanced-graphics.webp",
      imageAlt: "AI-enhanced graphics on NVIDIA RTX 5090",
      description:
        "Rent NVIDIA RTX 5090 GPU cloud instances for ultimate gaming performance with Blackwell architecture and AI-powered DLSS technology. RTX 5090 delivers breakthrough ray tracing performance for 8K gaming with high frame rates. Deploy cloud-based RTX 5090 for cloud gaming platforms, game development.",
    },
    {
      id: "ai-accelerated-video-editing",
      title: "AI-Accelerated Video Editing & Content Creation",
      imageSrc: "/images/webp/ai-accelerated-video-editing.webp",
      imageAlt:
        "AI-accelerated video editing and content creation on NVIDIA RTX 5090",
      description:
        "Access RTX 5090 GPU cloud rental for professional content creation with AI-powered editing tools. Tensor Cores accelerate AI upscaling, style transfer, and automated editing in Adobe Creative Suite and DaVinci Resolve. Rent RTX 5090 for 8K video production, motion graphics, and visual effects rendering, leveraging AI acceleration for faster turnaround times.",
    },
    {
      id: "real-time-3d-rendering",
      title: "Real-Time 3D Rendering & Game Development",
      imageSrc: "/images/webp/real-time-3d-rendering.webp",
      imageAlt:
        "Real-time 3D rendering and game development on NVIDIA RTX 5090",
      description:
        "Deploy RTX 5090 GPU cloud rental for real-time rendering in Blender, Unreal Engine, and Unity. Advanced RT Cores enable instant visualization of complex scenes for game development and architectural visualization. Rent cloud-based RTX 5090 for animation workflows, procedural generation, and interactive 3D content creation, providing indie developers with flagship performance.",
    },
    {
      id: "ai-research-deep-learning",
      title: "AI Research & Deep Learning Model Development",
      imageSrc: "/images/webp/ai-research-deep-learning.webp",
      imageAlt:
        "AI research and deep learning model development on NVIDIA RTX 5090",
      description:
        "Rent NVIDIA RTX 5090 cloud GPUs for AI research and machine learning model development. Substantial memory capacity enables training and fine-tuning medium-scale models locally. Deploy RTX 5090 for PyTorch, TensorFlow, and JAX workflows in computer vision research, NLP experiments, and reinforcement learning development, providing accessible AI development power.",
    },
  ],
};

export const NVIDIA_A6000_USE_CASES_SECTION: GpuUseCasesSectionContent = {
  titlePrefix: "Use Cases of",
  titleHighlight: "Nvidia RTX A6000",
  cards: [
    {
      id: "3d-rendering-architectural",
      title: "3D Rendering & Architectural Visualization",
      imageSrc: "/images/webp/ai-enhanced-graphics.webp",
      imageAlt:
        "3D rendering and architectural visualization on NVIDIA RTX A6000",
      description:
        "Rent NVIDIA RTX A6000 GPU cloud instances with 48GB memory for photorealistic rendering and architectural visualization. Advanced RT Cores enable real-time ray tracing in Blender, V-Ray, Arnold, and 3ds Max. Deploy cloud-based A6000 for product visualization, virtual prototyping, and architectural walkthroughs, delivering professional rendering with pay-per-use pricing for design teams.",
    },
    {
      id: "ai-enhanced-cad",
      title: "AI-Enhanced CAD & Engineering Simulation",
      imageSrc: "/images/webp/ai-accelerated-video-editing.webp",
      imageAlt:
        "AI-enhanced CAD and engineering simulation on NVIDIA RTX A6000",
      description:
        "Access A6000 GPU cloud rental for AI-powered generative design, CAD acceleration, and engineering simulation workflows. Tensor Cores enable AI-driven design optimization, automated feature extraction, and simulation-based design. Rent A6000 instances for automotive, aerospace, and manufacturing teams requiring GPU-accelerated CAD applications, finite element analysis, and computational engineering tools.",
    },
    {
      id: "virtual-production-media",
      title: "Virtual Production & Media Creation Pipelines",
      imageSrc: "/images/webp/real-time-3d-rendering.webp",
      imageAlt:
        "Virtual production and media creation pipelines on NVIDIA RTX A6000",
      description:
        "Deploy RTX A6000 cloud GPUs for virtual production stages, real-time rendering, and 8K video editing workflows. NVLink support scales to 96GB memory, handling complex visual effects and post-production pipelines. Rent A6000 for DaVinci Resolve, Adobe Premiere, and Unreal Engine, enabling studios to access professional graphics without on-premise infrastructure investment.",
    },
    {
      id: "medical-imaging-scientific",
      title: "Medical Imaging & Scientific Visualization",
      imageSrc: "/images/webp/ai-research-deep-learning.webp",
      imageAlt:
        "Medical imaging and scientific visualization on NVIDIA RTX A6000",
      description:
        "Rent NVIDIA A6000 cloud GPUs for processing and visualizing medical imaging data from CT, MRI, and PET scans. Compute performance enables AI-assisted diagnosis, 3D reconstruction of anatomical structures, and volumetric rendering. Deploy cloud-based A6000 for molecular visualization, protein structure analysis, and scientific exploration requiring both graphics fidelity and computational power.",
    },
  ],
};

export const NVIDIA_A6000_SE_USE_CASES_SECTION: GpuUseCasesSectionContent = {
  titlePrefix: "Use Cases of",
  titleHighlight: "Nvidia RTX 6000 PRO Blackwell SE Se",
  cards: [
    {
      id: "enterprise-generative-ai",
      title: "Enterprise Generative AI Deployment",
      imageSrc: "/images/webp/enterprise-generative-ai.webp",
      imageAlt:
        "Enterprise generative AI deployment on Nvidia RTX 6000 PRO Blackwell SE Se",
      description:
        "Rent NVIDIA RTX PRO 6000 Blackwell Server GPU cloud instances for deploying generative AI models in enterprise environments. Enhanced Tensor Cores accelerate text-to-image generation, AI code assistants, and content creation tools with enterprise-grade reliability. Deploy cloud-based RTX PRO 6000 for running large language models and diffusion models with data center security.",
    },
    {
      id: "professional-visualization-services",
      title: "Cloud-Based Professional Visualization Services",
      imageSrc: "/images/webp/professional-visualization-services.webp",
      imageAlt:
        "Cloud-based professional visualization services on Nvidia RTX 6000 PRO Blackwell SE Se",
      description:
        "Access RTX PRO 6000 Server GPU cloud rental for powering cloud rendering services for distributed creative teams. Blackwell architecture provides real-time ray tracing and AI-accelerated rendering for remote workflows. Rent cloud-based RTX PRO 6000 for professional 3D artists, enabling high-performance graphics and compute access from any location with enterprise-grade infrastructure.",
    },
    {
      id: "digital-twin-simulation",
      title: "AI-Powered Digital Twin Simulation",
      imageSrc: "/images/webp/ai-powered-digital-twin-simulation.webp",
      imageAlt:
        "AI-powered digital twin simulation on Nvidia RTX 6000 PRO Blackwell SE Se",
      description:
        "Deploy RTX PRO 6000 Server GPU cloud rental for real-time simulation and visualization of industrial digital twins. RT Cores for physics-accurate rendering and Tensor Cores for AI inference power predictive maintenance and operational optimization. Rent instances for NVIDIA Omniverse applications in manufacturing, infrastructure planning, and smart city development requiring graphics and AI.",
    },
    {
      id: "visualization-as-a-service",
      title: "Professional Visualization as a Service (VaaS)",
      imageSrc: "/images/webp/professional-visualization-as-a-service.webp",
      imageAlt:
        "Professional visualization as a service on Nvidia RTX 6000 PRO Blackwell SE Se",
      description:
        "Rent Nvidia RTX 6000 PRO Blackwell SE Server cloud GPUs for delivering desktop-class graphics in data center environments. vGPU technology serves multiple concurrent users with GPU-accelerated applications. Deploy cloud-based instances for CAD, visualization, and design software, enabling remote workers to access professional graphics capabilities through virtual desktop infrastructure without hardware investment.",
    },
  ],
};

export const NVIDIA_TESLA_T4_USE_CASES_SECTION: GpuUseCasesSectionContent = {
  titlePrefix: "Use Cases of",
  titleHighlight: "Nvidia Tesla T4",
  cards: [
    {
      id: "cost-effective-ai-inference",
      title: "Cost-Effective AI Inference for Production",
      imageSrc: "/images/webp/cost-effective-ai-inference.webp",
      imageAlt: "Cost-effective AI inference for production on NVIDIA Tesla T4",
      description:
        "Rent NVIDIA T4 GPU cloud instances starting from ₹28.05/hr for deploying production AI models at scale. T4 delivers 40X faster inference than CPUs in a power-efficient 70W form factor. Multi-precision Tensor Cores support INT8, FP16, and mixed precision, accelerating conversational AI, recommendation engines, NLP, and computer vision for enterprise applications.",
    },
    {
      id: "intelligent-video-analytics",
      title: "Intelligent Video Analytics & Surveillance",
      imageSrc: "/images/webp/intelligent-video-analytics.webp",
      imageAlt:
        "Intelligent video analytics and surveillance on NVIDIA Tesla T4",
      description:
        "Deploy T4 GPU cloud rental for real-time video analytics processing up to 38 full-HD streams simultaneously with dedicated hardware decode engines. T4 integrates deep learning for object detection, facial recognition, behavior analysis, and anomaly detection. Rent T4 instances for smart city surveillance, retail analytics, and automated video content analysis.",
    },
    {
      id: "virtual-desktop-vdi",
      title: "Virtual Desktop (VDI) & Remote Work",
      imageSrc: "/images/webp/virtual-desktop-vdi.webp",
      imageAlt: "Virtual desktop and remote work on NVIDIA Tesla T4",
      description:
        "Access NVIDIA T4 cloud GPUs for GPU-accelerated virtual desktop infrastructure supporting remote workers, designers, and engineers. NVIDIA Virtual GPU technology enables multiple concurrent users with secure isolation and responsive graphics. Rent T4 instances for cloud-based CAD, visualization, and productivity applications, providing enterprise VDI with professional graphics acceleration.",
    },
    {
      id: "cloud-gaming-streaming",
      title: "Cloud Gaming & Graphics Streaming Services",
      imageSrc: "/images/webp/cloud-gaming-streaming.webp",
      imageAlt:
        "Cloud gaming and graphics streaming services on NVIDIA Tesla T4",
      description:
        "Rent T4 GPU cloud instances for deploying cloud gaming platforms with low-latency graphics rendering and streaming. RT Cores enable ray tracing for next-generation gaming experiences via cloud infrastructure. Deploy T4-powered game streaming supporting multiple concurrent sessions with dedicated resources, enabling scalable cloud gaming and VR applications from any device.",
    },
  ],
};

export const NVIDIA_NVL72_USE_CASES_SECTION: GpuUseCasesSectionContent = {
  titlePrefix: "Use Cases of",
  titleHighlight: "Nvidia GB200 NVL72",
  cards: [
    {
      id: "unified-multi-node-orchestration",
      title: "Unified Multi-Node Model Orchestration",
      imageSrc: "/images/webp/cost-effective-ai-inference.webp",
      imageAlt: "Unified multi-node model orchestration on NVIDIA GB200 NVL72",
      description:
        "Coordinate and run a single AI model seamlessly across dozens of tightly coupled GPUs as if operating on one system. GB200 NVL72 enables synchronized compute and memory sharing across nodes, eliminating fragmentation and unlocking true system-level performance.",
    },
    {
      id: "high-concurrency-inference",
      title: "Inference for High-Concurrency Applications",
      imageSrc: "/images/webp/intelligent-video-analytics.webp",
      imageAlt: "High-concurrency inference applications on NVIDIA GB200 NVL72",
      description:
        "Support millions of simultaneous inference requests with consistent performance under heavy load. Designed for environments where uptime and responsiveness are critical, GB200 NVL72 ensures stable, high-throughput execution even during peak demand.",
    },
    {
      id: "memory-intensive-model-execution",
      title: "Memory-Intensive Model Execution",
      imageSrc: "/images/webp/virtual-desktop-vdi.webp",
      imageAlt: "Memory-intensive model execution on NVIDIA GB200 NVL72",
      description:
        "Run extremely large models that exceed the limits of individual GPU memory by leveraging shared memory architectures across interconnected systems. GB200 NVL72 allows enterprises to execute larger, more sophisticated models without performance degradation.",
    },
    {
      id: "cross-node-data-synchronization",
      title: "High-Speed Cross-Node Data Synchronization",
      imageSrc: "/images/webp/cloud-gaming-streaming.webp",
      imageAlt:
        "High-speed cross-node data synchronization on NVIDIA GB200 NVL72",
      description:
        "Enable real-time data exchange across distributed compute nodes with minimal latency. GB200 NVL72 is optimized for workloads that depend on rapid synchronization, such as iterative model updates, parallel processing, and continuous data streaming.",
    },
  ],
};
