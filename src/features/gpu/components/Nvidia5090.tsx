import JsonLd from "@/shared/components/JsonLd";
import { buildFaqSchema, buildProductSchema } from "@/lib/seo";
import FaqSection from "@/shared/components/faq/faq-section";
import GpuChooseSection from "@/shared/components/gpu-choose-section";
import GpuHeroSection from "@/shared/components/gpu-hero-section";
import GpuUseCasesSection from "@/shared/components/gpu-use-cases-section";
import GpuWhyChooseNeevcloudSection from "@/shared/components/gpu-why-choose-neevcloud-section";
import GpuWhyChooseSection from "@/shared/components/gpu-why-choose-section";
import { NVIDIA_RTX_5090_CHOOSE_SECTION } from "@/shared/data/gpu-choose-section.data";
import { NVIDIA_RTX_5090_FAQ } from "@/shared/data/gpu-faq-section.data";
import { NVIDIA_RTX_5090_HERO } from "@/shared/data/gpu-hero-section.data";
import { GPU_WHY_CHOOSE_NEEVCLOUD_SECTION } from "@/shared/data/gpu-why-choose-neevcloud.data";
import { NVIDIA_RTX_5090_USE_CASES_SECTION } from "@/shared/data/gpu-use-cases-section.data";
import { NVIDIA_RTX_5090_WHY_CHOOSE_SECTION } from "@/shared/data/gpu-why-choose-section.data";
import GpuFooterSection from "@/shared/components/gpu-footer-section";
import GpuTechnicalSpecsSection from "@/shared/components/gpu-technical-specs-section";
import { NVIDIA_RTX_5090_FOOTER_SECTION } from "@/shared/data/gpu-footer.data";
import { NVIDIA_RTX_5090_TECHNICAL_SPECS_SECTION } from "@/shared/data/gpu-technical-specs-section.data";
import GpuOtherGpusSection from "@/shared/components/gpu-other-gpus-section";

const Nvidia5090 = () => {
  return (
    <>
      <JsonLd
        data={buildProductSchema({
          name: "Nvidia RTX 5090",
          description:
            "Ultimate solution for 8K rendering, professional content creation, and AI-powered video editing on our high-performance cloud gaming platform.",
          path: "/nvidia-rtx-5090",
          model: "RTX 5090",
          price: "94.79",
          priceCurrency: "INR",
          specs: [
            { name: "GPU", value: "NVIDIA RTX 5090" },
            { name: "Architecture", value: "Blackwell Next-Gen" },
            { name: "GPU Memory", value: "32 GB GDDR7" },
            { name: "Memory Bandwidth", value: "1.7 TB/s" },
            { name: "CUDA Cores", value: "21760" },
            { name: "Tensor Cores", value: "Advanced 5th-gen for enhanced AI workloads" },
            { name: "Ray Tracing Cores", value: "4th-gen RT cores for accelerated computation" },
            { name: "Power Consumption", value: "575W (Cloud-optimized configurations)" },
          ],
        })}
      />
      <JsonLd data={buildFaqSchema([...NVIDIA_RTX_5090_FAQ])} />
      <GpuHeroSection {...NVIDIA_RTX_5090_HERO} />
      <GpuChooseSection {...NVIDIA_RTX_5090_CHOOSE_SECTION} />
      <GpuWhyChooseSection {...NVIDIA_RTX_5090_WHY_CHOOSE_SECTION} />
      <GpuWhyChooseNeevcloudSection {...GPU_WHY_CHOOSE_NEEVCLOUD_SECTION} />
      <GpuUseCasesSection {...NVIDIA_RTX_5090_USE_CASES_SECTION} />
      <GpuTechnicalSpecsSection {...NVIDIA_RTX_5090_TECHNICAL_SPECS_SECTION} />
      <GpuOtherGpusSection excludeId="nvidia-rtx-5090" />
      <FaqSection items={NVIDIA_RTX_5090_FAQ} description="Get Clarity Here!" />
      <GpuFooterSection {...NVIDIA_RTX_5090_FOOTER_SECTION} />
    </>
  );
};

export default Nvidia5090;
