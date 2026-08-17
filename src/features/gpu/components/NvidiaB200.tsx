import JsonLd from "@/shared/components/JsonLd";
import { buildFaqSchema, buildProductSchema } from "@/lib/seo";
import FaqSection from "@/shared/components/faq/faq-section";
import GpuChooseSection from "@/shared/components/gpu-choose-section";
import GpuHeroSection from "@/shared/components/gpu-hero-section";
import GpuUseCasesSection from "@/shared/components/gpu-use-cases-section";
import GpuWhyChooseNeevcloudSection from "@/shared/components/gpu-why-choose-neevcloud-section";
import GpuWhyChooseSection from "@/shared/components/gpu-why-choose-section";
import { NVIDIA_B200_CHOOSE_SECTION } from "@/shared/data/gpu-choose-section.data";
import { NVIDIA_B200_FAQ } from "@/shared/data/gpu-faq-section.data";
import { NVIDIA_B200_HERO } from "@/shared/data/gpu-hero-section.data";
import { GPU_WHY_CHOOSE_NEEVCLOUD_SECTION } from "@/shared/data/gpu-why-choose-neevcloud.data";
import { NVIDIA_B200_USE_CASES_SECTION } from "@/shared/data/gpu-use-cases-section.data";
import { NVIDIA_B200_WHY_CHOOSE_SECTION } from "@/shared/data/gpu-why-choose-section.data";
import GpuFooterSection from "@/shared/components/gpu-footer-section";
import GpuTechnicalSpecsSection from "@/shared/components/gpu-technical-specs-section";
import { NVIDIA_B200_FOOTER_SECTION } from "@/shared/data/gpu-footer.data";
import { NVIDIA_B200_TECHNICAL_SPECS_SECTION } from "@/shared/data/gpu-technical-specs-section.data";
import GpuOtherGpusSection from "@/shared/components/gpu-other-gpus-section";

const NvidiaB200 = () => {
  return (
    <>
      <JsonLd
        data={buildProductSchema({
          name: "Nvidia DGX B200",
          description:
            "Revolutionary dual-chip architecture for next-generation AI reasoning and trillion-parameter foundation models on NeevCloud's Blackwell-powered cloud infrastructure.",
          path: "/nvidia-b200",
          model: "DGX B200",
          price: "5.00",
          priceCurrency: "USD",
          specs: [
            { name: "GPU", value: "8x NVIDIA Blackwell GPUs" },
            { name: "GPU Memory", value: "1,440 GB total, 64 TB/s HBM3e bandwidth" },
            { name: "Performance", value: "FP4 Tensor Core: 144 PFLOPS | 72 PFLOPS*\nFP8 Tensor Core: 72 PFLOPS**" },
            { name: "NVIDIA NVSwitch", value: "2X" },
            { name: "NVIDIA NVLink Bandwidth", value: "14.4 TB/s aggregate bandwidth" },
            { name: "System Power Usage", value: "~14.3 kW max" },
            { name: "CPU", value: "2 Intel® Xeon® Platinum 8570 Processors\n112 Cores total, 2.1 GHz (Base), 4 GHz (Max Boost)" },
            { name: "System Memory", value: "2 TB, configurable to 4 TB" },
            { name: "Rack Units (RU)", value: "10 RU" },
          ],
        })}
      />
      <JsonLd data={buildFaqSchema([...NVIDIA_B200_FAQ])} />
      <GpuHeroSection {...NVIDIA_B200_HERO} />
      <GpuChooseSection {...NVIDIA_B200_CHOOSE_SECTION} />
      <GpuWhyChooseSection {...NVIDIA_B200_WHY_CHOOSE_SECTION} />
      <GpuWhyChooseNeevcloudSection {...GPU_WHY_CHOOSE_NEEVCLOUD_SECTION} />
      <GpuUseCasesSection {...NVIDIA_B200_USE_CASES_SECTION} />
      <GpuTechnicalSpecsSection {...NVIDIA_B200_TECHNICAL_SPECS_SECTION} />
      <GpuOtherGpusSection excludeId="nvidia-b200" />
      <FaqSection items={NVIDIA_B200_FAQ} description="Get Clarity Here!" />
      <GpuFooterSection {...NVIDIA_B200_FOOTER_SECTION} />
    </>
  );
};

export default NvidiaB200;
