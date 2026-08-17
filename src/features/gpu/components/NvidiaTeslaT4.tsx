import JsonLd from "@/shared/components/JsonLd";
import { buildFaqSchema, buildProductSchema } from "@/lib/seo";
import FaqSection from "@/shared/components/faq/faq-section";
import GpuChooseSection from "@/shared/components/gpu-choose-section";
import GpuHeroSection from "@/shared/components/gpu-hero-section";
import GpuUseCasesSection from "@/shared/components/gpu-use-cases-section";
import GpuWhyChooseNeevcloudSection from "@/shared/components/gpu-why-choose-neevcloud-section";
import GpuWhyChooseSection from "@/shared/components/gpu-why-choose-section";
import { NVIDIA_TESLA_T4_CHOOSE_SECTION } from "@/shared/data/gpu-choose-section.data";
import { NVIDIA_TESLA_T4_FAQ } from "@/shared/data/gpu-faq-section.data";
import { NVIDIA_TESLA_T4_HERO } from "@/shared/data/gpu-hero-section.data";
import { GPU_WHY_CHOOSE_NEEVCLOUD_SECTION } from "@/shared/data/gpu-why-choose-neevcloud.data";
import { NVIDIA_TESLA_T4_USE_CASES_SECTION } from "@/shared/data/gpu-use-cases-section.data";
import { NVIDIA_TESLA_T4_WHY_CHOOSE_SECTION } from "@/shared/data/gpu-why-choose-section.data";
import GpuFooterSection from "@/shared/components/gpu-footer-section";
import GpuTechnicalSpecsSection from "@/shared/components/gpu-technical-specs-section";
import { NVIDIA_TESLA_T4_FOOTER_SECTION } from "@/shared/data/gpu-footer.data";
import { NVIDIA_TESLA_T4_TECHNICAL_SPECS_SECTION } from "@/shared/data/gpu-technical-specs-section.data";
import GpuOtherGpusSection from "@/shared/components/gpu-other-gpus-section";

const NvidiaTeslaT4 = () => {
  return (
    <>
      <JsonLd
        data={buildProductSchema({
          name: "Nvidia Tesla T4",
          description:
            "Optimized for production AI inference and cost-effective deep learning deployment, now accessible through our enterprise cloud platform with pay-per-hour pricing.",
          path: "/nvidia-tesla-t4",
          model: "Tesla T4",
          price: "28.05",
          priceCurrency: "INR",
          specs: [
            { name: "GPU Architecture", value: "NVIDIA Turing" },
            { name: "CUDA Cores", value: "2,560" },
            { name: "Tensor Cores", value: "320" },
            { name: "GPU Memory", value: "16 GB GDDR6" },
            { name: "ECC Support", value: "Yes" },
            { name: "FP32 (Single Precision)", value: "8.1 TFLOPS" },
            { name: "Interconnect Bandwidth", value: "32 GB/sec" },
            { name: "Memory Bandwidth", value: "300 GB/sec" },
            { name: "Compute APIs", value: "CUDA, NVIDIA TensorRT™, ONNX" },
            { name: "Virtualization (vGPU) Support", value: "Yes" },
          ],
        })}
      />
      <JsonLd data={buildFaqSchema([...NVIDIA_TESLA_T4_FAQ])} />
      <GpuHeroSection {...NVIDIA_TESLA_T4_HERO} />
      <GpuChooseSection {...NVIDIA_TESLA_T4_CHOOSE_SECTION} />
      <GpuWhyChooseSection {...NVIDIA_TESLA_T4_WHY_CHOOSE_SECTION} />
      <GpuWhyChooseNeevcloudSection {...GPU_WHY_CHOOSE_NEEVCLOUD_SECTION} />
      <GpuUseCasesSection {...NVIDIA_TESLA_T4_USE_CASES_SECTION} />
      <GpuTechnicalSpecsSection {...NVIDIA_TESLA_T4_TECHNICAL_SPECS_SECTION} />
      <GpuOtherGpusSection excludeId="nvidia-teslat4" />
      <FaqSection items={NVIDIA_TESLA_T4_FAQ} description="Get Clarity Here!" />
      <GpuFooterSection {...NVIDIA_TESLA_T4_FOOTER_SECTION} />
    </>
  );
};

export default NvidiaTeslaT4;
