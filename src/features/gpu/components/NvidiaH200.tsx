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
