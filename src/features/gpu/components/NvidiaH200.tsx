import JsonLd from "@/shared/components/JsonLd";
import { buildFaqSchema, buildProductSchema } from "@/lib/seo";
import FaqSection from "@/shared/components/faq/faq-section";
import GpuChooseSection from "@/shared/components/gpu-choose-section";
import GpuHeroSection from "@/shared/components/gpu-hero-section";
import GpuUseCasesSection from "@/shared/components/gpu-use-cases-section";
import GpuWhyChooseNeevcloudSection from "@/shared/components/gpu-why-choose-neevcloud-section";
import GpuWhyChooseSection from "@/shared/components/gpu-why-choose-section";
import { NVIDIA_H200_CHOOSE_SECTION } from "@/shared/data/gpu-choose-section.data";
import { NVIDIA_H200_FAQ } from "@/shared/data/gpu-faq-section.data";
import { NVIDIA_H200_HERO } from "@/shared/data/gpu-hero-section.data";
import { GPU_WHY_CHOOSE_NEEVCLOUD_SECTION } from "@/shared/data/gpu-why-choose-neevcloud.data";
import { NVIDIA_H200_USE_CASES_SECTION } from "@/shared/data/gpu-use-cases-section.data";
import { NVIDIA_H200_WHY_CHOOSE_SECTION } from "@/shared/data/gpu-why-choose-section.data";
import GpuFooterSection from "@/shared/components/gpu-footer-section";
import GpuTechnicalSpecsSection from "@/shared/components/gpu-technical-specs-section";
import { NVIDIA_H200_FOOTER_SECTION } from "@/shared/data/gpu-footer.data";
import { NVIDIA_H200_TECHNICAL_SPECS_SECTION } from "@/shared/data/gpu-technical-specs-section.data";
import GpuOtherGpusSection from "@/shared/components/gpu-other-gpus-section";

const NvidiaH200 = () => {
  return (
    <>
      <JsonLd
        data={buildProductSchema({
          name: "Nvidia H200",
          description:
            "Built for frontier AI research and memory-intensive workloads requiring massive compute power on our high-performance cloud GPU infrastructure with flexible scaling.",
          path: "/nvidia-h200",
          model: "H200",
          price: "231.17",
          priceCurrency: "INR",
          specs: [
            { name: "GPU", value: "NVIDIA H200 Tensor Core GPU" },
            { name: "Base Architecture", value: "Hopper (H100 Family)" },
            { name: "GPU Count (HGX H200)", value: "8 GPUs per server node" },
            { name: "Total GPU Memory (Per Node)", value: "1.13 TB (8 x 141 GB)" },
            { name: "Memory Type", value: "HBM3e (High Bandwidth Memory)" },
            { name: "GPU Interconnect", value: "NVIDIA NVSwitch (Fully Connected Mesh)" },
            { name: "Host Interface", value: "PCIe Gen 5" },
            { name: "AI Performance (FP8)", value: "Up to 32 PFLOPS per HGX System" },
            { name: "Power Efficiency", value: "Optimized for energy-efficient AI compute" },
            { name: "Deployment Options", value: "On-Prem, Private Cloud, and NeevCloud AI SuperCloud" },
          ],
        })}
      />
      <JsonLd data={buildFaqSchema([...NVIDIA_H200_FAQ])} />
      <GpuHeroSection {...NVIDIA_H200_HERO} />
      <GpuChooseSection {...NVIDIA_H200_CHOOSE_SECTION} />
      <GpuWhyChooseSection {...NVIDIA_H200_WHY_CHOOSE_SECTION} />
      <GpuWhyChooseNeevcloudSection {...GPU_WHY_CHOOSE_NEEVCLOUD_SECTION} />
      <GpuUseCasesSection {...NVIDIA_H200_USE_CASES_SECTION} />
      <GpuTechnicalSpecsSection {...NVIDIA_H200_TECHNICAL_SPECS_SECTION} />
      <GpuOtherGpusSection excludeId="nvidia-h200" />
      <FaqSection items={NVIDIA_H200_FAQ} description="Get Clarity Here!" />
      <GpuFooterSection {...NVIDIA_H200_FOOTER_SECTION} />
    </>
  );
};

export default NvidiaH200;
