import JsonLd from "@/shared/components/JsonLd";
import { buildFaqSchema, buildProductSchema } from "@/lib/seo";
import FaqSection from "@/shared/components/faq/faq-section";
import GpuChooseSection from "@/shared/components/gpu-choose-section";
import GpuHeroSection from "@/shared/components/gpu-hero-section";
import GpuUseCasesSection from "@/shared/components/gpu-use-cases-section";
import GpuWhyChooseNeevcloudSection from "@/shared/components/gpu-why-choose-neevcloud-section";
import GpuWhyChooseSection from "@/shared/components/gpu-why-choose-section";
import { NVIDIA_NVL72_CHOOSE_SECTION } from "@/shared/data/gpu-choose-section.data";
import { NVIDIA_NVL72_FAQ } from "@/shared/data/gpu-faq-section.data";
import { NVIDIA_NVL72_HERO } from "@/shared/data/gpu-hero-section.data";
import { GPU_WHY_CHOOSE_NEEVCLOUD_SECTION } from "@/shared/data/gpu-why-choose-neevcloud.data";
import { NVIDIA_NVL72_USE_CASES_SECTION } from "@/shared/data/gpu-use-cases-section.data";
import { NVIDIA_NVL72_WHY_CHOOSE_SECTION } from "@/shared/data/gpu-why-choose-section.data";
import GpuFooterSection from "@/shared/components/gpu-footer-section";
import GpuTechnicalSpecsSection from "@/shared/components/gpu-technical-specs-section";
import { NVIDIA_NVL72_FOOTER_SECTION } from "@/shared/data/gpu-footer.data";
import { NVIDIA_NVL72_TECHNICAL_SPECS_SECTION } from "@/shared/data/gpu-technical-specs-section.data";

const NvidiaNvl72 = () => {
  return (
    <>
      <JsonLd
        data={buildProductSchema({
          name: "NVIDIA GB200 NVL72",
          description:
            "NVIDIA GB200 NVL72 is built to power massive AI workloads with breakthrough performance, enabling enterprises to scale training and inference across large, interconnected GPU systems.",
          path: "/nvidia-gb200-nvl72",
          model: "GB200 NVL72",
          price: "5.00",
          priceCurrency: "USD",
          specs: [
            { name: "Architecture", value: "NVIDIA Blackwell Architecture" },
            { name: "Configuration", value: "NVL72 System" },
            { name: "GPU Interconnect", value: "NVLink" },
            { name: "Performance", value: "High-performance AI training & inference" },
            { name: "Deployment", value: "Large-scale AI clusters & datacenters" },
          ],
        })}
      />
      <JsonLd data={buildFaqSchema([...NVIDIA_NVL72_FAQ])} />
      <GpuHeroSection {...NVIDIA_NVL72_HERO} />
      <GpuChooseSection {...NVIDIA_NVL72_CHOOSE_SECTION} />
      <GpuWhyChooseSection {...NVIDIA_NVL72_WHY_CHOOSE_SECTION} />
      <GpuWhyChooseNeevcloudSection {...GPU_WHY_CHOOSE_NEEVCLOUD_SECTION} />
      <GpuUseCasesSection {...NVIDIA_NVL72_USE_CASES_SECTION} />
      <GpuTechnicalSpecsSection {...NVIDIA_NVL72_TECHNICAL_SPECS_SECTION} />
      <FaqSection items={NVIDIA_NVL72_FAQ} description="Get Clarity Here!" />
      <GpuFooterSection {...NVIDIA_NVL72_FOOTER_SECTION} />
    </>
  );
};

export default NvidiaNvl72;
