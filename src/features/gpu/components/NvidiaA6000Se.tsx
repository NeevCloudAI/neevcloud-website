import FaqSection from "@/shared/components/faq/faq-section";
import GpuChooseSection from "@/shared/components/gpu-choose-section";
import GpuHeroSection from "@/shared/components/gpu-hero-section";
import GpuUseCasesSection from "@/shared/components/gpu-use-cases-section";
import GpuWhyChooseNeevcloudSection from "@/shared/components/gpu-why-choose-neevcloud-section";
import GpuWhyChooseSection from "@/shared/components/gpu-why-choose-section";
import { NVIDIA_A6000_SE_CHOOSE_SECTION } from "@/shared/data/gpu-choose-section.data";
import { NVIDIA_A6000_SE_FAQ } from "@/shared/data/gpu-faq-section.data";
import { NVIDIA_A6000_SE_HERO } from "@/shared/data/gpu-hero-section.data";
import { GPU_WHY_CHOOSE_NEEVCLOUD_SECTION } from "@/shared/data/gpu-why-choose-neevcloud.data";
import { NVIDIA_A6000_SE_USE_CASES_SECTION } from "@/shared/data/gpu-use-cases-section.data";
import { NVIDIA_A6000_SE_WHY_CHOOSE_SECTION } from "@/shared/data/gpu-why-choose-section.data";
import GpuFooterSection from "@/shared/components/gpu-footer-section";
import GpuTechnicalSpecsSection from "@/shared/components/gpu-technical-specs-section";
import { NVIDIA_A6000_SE_FOOTER_SECTION } from "@/shared/data/gpu-footer.data";
import { NVIDIA_A6000_SE_TECHNICAL_SPECS_SECTION } from "@/shared/data/gpu-technical-specs-section.data";

const NvidiaA6000Se = () => {
  return (
    <>
      <GpuHeroSection {...NVIDIA_A6000_SE_HERO} />
      <GpuChooseSection {...NVIDIA_A6000_SE_CHOOSE_SECTION} />
      <GpuWhyChooseSection {...NVIDIA_A6000_SE_WHY_CHOOSE_SECTION} />
      <GpuWhyChooseNeevcloudSection {...GPU_WHY_CHOOSE_NEEVCLOUD_SECTION} />
      <GpuUseCasesSection {...NVIDIA_A6000_SE_USE_CASES_SECTION} />
      <GpuTechnicalSpecsSection {...NVIDIA_A6000_SE_TECHNICAL_SPECS_SECTION} />
      {/* <GpuOtherGpusSection excludeId="nvidia-a6000se" /> */}
      <FaqSection items={NVIDIA_A6000_SE_FAQ} description="Get Clarity Here!" />
      <GpuFooterSection {...NVIDIA_A6000_SE_FOOTER_SECTION} />
    </>
  );
};

export default NvidiaA6000Se;
