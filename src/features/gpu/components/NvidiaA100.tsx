import JsonLd from "@/shared/components/JsonLd";
import { buildFaqSchema, buildProductSchema } from "@/lib/seo";
import FaqSection from "@/shared/components/faq/faq-section";
import GpuChooseSection from "@/shared/components/gpu-choose-section";
import GpuHeroSection from "@/shared/components/gpu-hero-section";
import GpuFooterSection from "@/shared/components/gpu-footer-section";
import GpuTechnicalSpecsSection from "@/shared/components/gpu-technical-specs-section";
import GpuUseCasesSection from "@/shared/components/gpu-use-cases-section";
import GpuWhyChooseNeevcloudSection from "@/shared/components/gpu-why-choose-neevcloud-section";
import GpuWhyChooseSection from "@/shared/components/gpu-why-choose-section";
import { NVIDIA_A100_CHOOSE_SECTION } from "@/shared/data/gpu-choose-section.data";
import { NVIDIA_A100_FAQ } from "@/shared/data/gpu-faq-section.data";
import { NVIDIA_A100_HERO } from "@/shared/data/gpu-hero-section.data";
import { GPU_WHY_CHOOSE_NEEVCLOUD_SECTION } from "@/shared/data/gpu-why-choose-neevcloud.data";
import { NVIDIA_A100_USE_CASES_SECTION } from "@/shared/data/gpu-use-cases-section.data";
import { NVIDIA_A100_WHY_CHOOSE_SECTION } from "@/shared/data/gpu-why-choose-section.data";
import { NVIDIA_A100_FOOTER_SECTION } from "@/shared/data/gpu-footer.data";
import { NVIDIA_A100_TECHNICAL_SPECS_SECTION } from "@/shared/data/gpu-technical-specs-section.data";
import GpuOtherGpusSection from "@/shared/components/gpu-other-gpus-section";

const NvidiaA100 = () => {
  return (
    <>
      <JsonLd
        data={buildProductSchema({
          name: "Nvidia A100",
          description:
            "Industry-leading platform for large-scale AI training, high-performance computing, and GPU-accelerated analytics on NeevCloud's enterprise-grade cloud infrastructure.",
          path: "/nvidia-a100",
          model: "A100",
          price: "127.68",
          priceCurrency: "INR",
          specs: [
            { name: "GPU Architecture", value: "NVIDIA Ampere" },
            { name: "GPU Count per Node", value: "Up to 8x NVIDIA A100 Tensor Core GPUs" },
            { name: "GPU Memory", value: "40GB / 80GB HBM2e per GPU" },
            { name: "NVLink Bandwidth", value: "600 GB/s total bidirectional bandwidth" },
            { name: "Interconnect", value: "NVIDIA NVSwitch for full GPU-to-GPU bandwidth" },
            { name: "Compute Performance", value: "Up to 5 petaFLOPS of AI performance" },
            { name: "Supported Workloads", value: "AI Training, Deep Learning, HPC, Inference" },
            { name: "Form Factor", value: "Scalable data center platform" },
            { name: "Power Efficiency", value: "Optimized for maximum throughput per watt" },
          ],
        })}
      />
      <JsonLd data={buildFaqSchema([...NVIDIA_A100_FAQ])} />
      <GpuHeroSection {...NVIDIA_A100_HERO} />
      <GpuChooseSection {...NVIDIA_A100_CHOOSE_SECTION} />
      <GpuWhyChooseSection {...NVIDIA_A100_WHY_CHOOSE_SECTION} />
      <GpuWhyChooseNeevcloudSection {...GPU_WHY_CHOOSE_NEEVCLOUD_SECTION} />
      <GpuUseCasesSection {...NVIDIA_A100_USE_CASES_SECTION} />
      <GpuTechnicalSpecsSection {...NVIDIA_A100_TECHNICAL_SPECS_SECTION} />
      <GpuOtherGpusSection excludeId="nvidia-a100" />
      <FaqSection items={NVIDIA_A100_FAQ} description="Get Clarity Here!" />
      <GpuFooterSection {...NVIDIA_A100_FOOTER_SECTION} />
    </>
  );
};

export default NvidiaA100;
