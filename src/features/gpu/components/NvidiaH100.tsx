import JsonLd from "@/shared/components/JsonLd";
import { buildFaqSchema, buildProductSchema } from "@/lib/seo";
import FaqSection from "@/shared/components/faq/faq-section";
import GpuChooseSection from "@/shared/components/gpu-choose-section";
import GpuHeroSection from "@/shared/components/gpu-hero-section";
import GpuUseCasesSection from "@/shared/components/gpu-use-cases-section";
import GpuWhyChooseNeevcloudSection from "@/shared/components/gpu-why-choose-neevcloud-section";
import GpuWhyChooseSection from "@/shared/components/gpu-why-choose-section";
import { NVIDIA_H100_CHOOSE_SECTION } from "@/shared/data/gpu-choose-section.data";
import { NVIDIA_H100_FAQ } from "@/shared/data/gpu-faq-section.data";
import { NVIDIA_H100_HERO } from "@/shared/data/gpu-hero-section.data";
import { GPU_WHY_CHOOSE_NEEVCLOUD_SECTION } from "@/shared/data/gpu-why-choose-neevcloud.data";
import { NVIDIA_H100_USE_CASES_SECTION } from "@/shared/data/gpu-use-cases-section.data";
import { NVIDIA_H100_WHY_CHOOSE_SECTION } from "@/shared/data/gpu-why-choose-section.data";
import GpuFooterSection from "@/shared/components/gpu-footer-section";
import GpuTechnicalSpecsSection from "@/shared/components/gpu-technical-specs-section";
import { NVIDIA_H100_FOOTER_SECTION } from "@/shared/data/gpu-footer.data";
import { NVIDIA_H100_TECHNICAL_SPECS_SECTION } from "@/shared/data/gpu-technical-specs-section.data";
import GpuOtherGpusSection from "@/shared/components/gpu-other-gpus-section";

const NvidiaH100 = () => {
  return (
    <>
      <JsonLd
        data={buildProductSchema({
          name: "Nvidia H100",
          description:
            "Engineered for training trillion-parameter LLMs and enterprise AI workloads at scale on our NVIDIA-certified cloud platform with instant deployment.",
          path: "/nvidia-h100",
          model: "H100",
          price: "192.48",
          priceCurrency: "INR",
          specs: [
            { name: "GPU Memory", value: "80GB" },
            { name: "GPU Memory Bandwidth", value: "3.35TB/s" },
            { name: "Max Thermal Design Power (TDP)", value: "Up to 700W (configurable)" },
            { name: "Multi-Instance GPUs", value: "Up to 7 MIGS @ 10GB each" },
            { name: "Interconnect", value: "NVIDIA NVLink™: 900GB/s\nPCIe Gen5: 128GB/s" },
            { name: "Server Options", value: "NVIDIA HGX H100 Partner and NVIDIA-Certified Systems™ with 4 or 8 GPUs\nNVIDIA DGX H100 with 8 GPUs" },
            { name: "Decoders", value: "7 NVDEC\n7 JPEG" },
            { name: "Form Factor", value: "SXM" },
            { name: "Power Efficiency", value: "Optimized for maximum throughput per watt" },
          ],
        })}
      />
      <JsonLd data={buildFaqSchema([...NVIDIA_H100_FAQ])} />
      <GpuHeroSection {...NVIDIA_H100_HERO} />
      <GpuChooseSection {...NVIDIA_H100_CHOOSE_SECTION} />
      <GpuWhyChooseSection {...NVIDIA_H100_WHY_CHOOSE_SECTION} />
      <GpuWhyChooseNeevcloudSection {...GPU_WHY_CHOOSE_NEEVCLOUD_SECTION} />
      <GpuUseCasesSection {...NVIDIA_H100_USE_CASES_SECTION} />
      <GpuTechnicalSpecsSection {...NVIDIA_H100_TECHNICAL_SPECS_SECTION} />
      <GpuOtherGpusSection excludeId="nvidia-h100" />
      <FaqSection items={NVIDIA_H100_FAQ} description="Get Clarity Here!" />
      <GpuFooterSection {...NVIDIA_H100_FOOTER_SECTION} />
    </>
  );
};

export default NvidiaH100;
