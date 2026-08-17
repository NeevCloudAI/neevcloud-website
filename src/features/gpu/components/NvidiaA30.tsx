import JsonLd from "@/shared/components/JsonLd";
import { buildFaqSchema, buildProductSchema } from "@/lib/seo";
import FaqSection from "@/shared/components/faq/faq-section";
import GpuChooseSection from "@/shared/components/gpu-choose-section";
import GpuHeroSection from "@/shared/components/gpu-hero-section";
import GpuUseCasesSection from "@/shared/components/gpu-use-cases-section";
import GpuWhyChooseNeevcloudSection from "@/shared/components/gpu-why-choose-neevcloud-section";
import GpuWhyChooseSection from "@/shared/components/gpu-why-choose-section";
import { NVIDIA_A30_CHOOSE_SECTION } from "@/shared/data/gpu-choose-section.data";
import { NVIDIA_A30_FAQ } from "@/shared/data/gpu-faq-section.data";
import { NVIDIA_A30_HERO } from "@/shared/data/gpu-hero-section.data";
import { GPU_WHY_CHOOSE_NEEVCLOUD_SECTION } from "@/shared/data/gpu-why-choose-neevcloud.data";
import { NVIDIA_A30_USE_CASES_SECTION } from "@/shared/data/gpu-use-cases-section.data";
import { NVIDIA_A30_WHY_CHOOSE_SECTION } from "@/shared/data/gpu-why-choose-section.data";
import GpuFooterSection from "@/shared/components/gpu-footer-section";
import GpuTechnicalSpecsSection from "@/shared/components/gpu-technical-specs-section";
import { NVIDIA_A30_FOOTER_SECTION } from "@/shared/data/gpu-footer.data";
import { NVIDIA_A30_TECHNICAL_SPECS_SECTION } from "@/shared/data/gpu-technical-specs-section.data";
import GpuOtherGpusSection from "@/shared/components/gpu-other-gpus-section";

const NvidiaA30 = () => {
  return (
    <>
      <JsonLd
        data={buildProductSchema({
          name: "Nvidia A30",
          description:
            "Designed for mainstream AI inference and virtualized multi-tenant deployments on NeevCloud's cloud platform with Multi-Instance GPU technology.",
          path: "/nvidia-a30",
          model: "A30",
          price: "77.38",
          priceCurrency: "INR",
          specs: [
            { name: "GPU Memory", value: "24GB HBM2" },
            { name: "Memory Bandwidth", value: "933GB/s" },
            { name: "TF32 Tensor Core Performance", value: "Up to 165 teraFLOPS" },
            { name: "Interconnect", value: "PCIe Gen4 (64GB/s), Third-gen NVLINK (200GB/s)" },
            { name: "Form Factor", value: "Dual-slot, full-height, full-length (FHFL)" },
            { name: "Max TDP", value: "165W" },
            { name: "Multi-Instance GPU (MIG)", value: "4 instances@ 6GB, 2 instances@ 12GB, 1 instance@ 24GB" },
          ],
        })}
      />
      <JsonLd data={buildFaqSchema([...NVIDIA_A30_FAQ])} />
      <GpuHeroSection {...NVIDIA_A30_HERO} />
      <GpuChooseSection {...NVIDIA_A30_CHOOSE_SECTION} />
      <GpuWhyChooseSection {...NVIDIA_A30_WHY_CHOOSE_SECTION} />
      <GpuWhyChooseNeevcloudSection {...GPU_WHY_CHOOSE_NEEVCLOUD_SECTION} />
      <GpuUseCasesSection {...NVIDIA_A30_USE_CASES_SECTION} />
      <GpuTechnicalSpecsSection {...NVIDIA_A30_TECHNICAL_SPECS_SECTION} />
      <GpuOtherGpusSection excludeId="nvidia-a30" />
      <FaqSection items={NVIDIA_A30_FAQ} description="Get Clarity Here!" />
      <GpuFooterSection {...NVIDIA_A30_FOOTER_SECTION} />
    </>
  );
};

export default NvidiaA30;
