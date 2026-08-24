import JsonLd from "@/shared/components/JsonLd";
import { buildFaqSchema, buildServiceSchema } from "@/lib/seo";
import FaqSection from "@/shared/components/faq/faq-section";
import GpuChooseSection from "@/shared/components/gpu-choose-section";
import GpuHeroSection from "@/shared/components/gpu-hero-section";
import GpuUseCasesSection from "@/shared/components/gpu-use-cases-section";
import GpuWhyChooseNeevcloudSection from "@/shared/components/gpu-why-choose-neevcloud-section";
import GpuWhyChooseSection from "@/shared/components/gpu-why-choose-section";
import { AMD_MI300X_CHOOSE_SECTION } from "@/shared/data/gpu-choose-section.data";
import { AMD_MI300X_FAQ } from "@/shared/data/gpu-faq-section.data";
import { AMD_MI300X_HERO } from "@/shared/data/gpu-hero-section.data";
import { GPU_WHY_CHOOSE_NEEVCLOUD_SECTION } from "@/shared/data/gpu-why-choose-neevcloud.data";
import { AMD_MI300X_USE_CASES_SECTION } from "@/shared/data/gpu-use-cases-section.data";
import { AMD_MI300X_WHY_CHOOSE_SECTION } from "@/shared/data/gpu-why-choose-section.data";
import GpuFooterSection from "@/shared/components/gpu-footer-section";
import GpuTechnicalSpecsSection from "@/shared/components/gpu-technical-specs-section";
import { AMD_MI300X_FOOTER_SECTION } from "@/shared/data/gpu-footer.data";
import { AMD_MI300X_TECHNICAL_SPECS_SECTION } from "@/shared/data/gpu-technical-specs-section.data";
import GpuOtherGpusSection from "@/shared/components/gpu-other-gpus-section";

const AmdMi300x = () => {
  return (
    <>
      <JsonLd
        data={buildServiceSchema({
          name: "AMD Instinct MI300X",
          description:
            "AMD Instinct MI300X GPU cloud instances built on CDNA 3 architecture with 192GB HBM3 memory, for large language model training and inference.",
          path: "/amd-mi300x",
          serviceType: "GPU Cloud Compute",
        })}
      />
      <JsonLd data={buildFaqSchema([...AMD_MI300X_FAQ])} />
      <GpuHeroSection {...AMD_MI300X_HERO} />
      <GpuChooseSection {...AMD_MI300X_CHOOSE_SECTION} />
      <GpuWhyChooseSection {...AMD_MI300X_WHY_CHOOSE_SECTION} />
      <GpuWhyChooseNeevcloudSection {...GPU_WHY_CHOOSE_NEEVCLOUD_SECTION} />
      <GpuUseCasesSection {...AMD_MI300X_USE_CASES_SECTION} />
      <GpuTechnicalSpecsSection {...AMD_MI300X_TECHNICAL_SPECS_SECTION} />
      <GpuOtherGpusSection excludeId="amd-mi300x" />
      <FaqSection items={AMD_MI300X_FAQ} description="Get Clarity Here!" />
      <GpuFooterSection {...AMD_MI300X_FOOTER_SECTION} />
    </>
  );
};

export default AmdMi300x;
