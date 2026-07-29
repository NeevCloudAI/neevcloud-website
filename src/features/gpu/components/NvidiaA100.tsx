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
