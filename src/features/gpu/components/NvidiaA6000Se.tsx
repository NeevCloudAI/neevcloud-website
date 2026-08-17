import JsonLd from "@/shared/components/JsonLd";
import { buildFaqSchema, buildProductSchema } from "@/lib/seo";
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
import GpuOtherGpusSection from "@/shared/components/gpu-other-gpus-section";

const NvidiaA6000Se = () => {
  return (
    <>
      <JsonLd
        data={buildProductSchema({
          name: "Nvidia RTX 6000 PRO Blackwell SE",
          description:
            "Enterprise-grade solution for AI deployment and professional visualization as a service on our Blackwell-powered data center infrastructure.",
          path: "/nvidia-rtx-pro-6000",
          model: "RTX 6000 PRO Blackwell SE",
          price: "148.95",
          priceCurrency: "INR",
          specs: [
            { name: "GPU Architecture", value: "NVIDIA Blackwell" },
            { name: "CUDA Cores", value: "24,064" },
            { name: "Tensor Cores", value: "5th Generation" },
            { name: "Ray Tracing Cores", value: "4th Generation" },
            { name: "AI TOPS", value: "4000 TOPS" },
            { name: "Single-Precision FP32", value: "125 TFLOPS" },
            { name: "RT Core Performance", value: "380 TFLOPS" },
            { name: "GPU Memory", value: "96 GB GDDR7 with ECC" },
            { name: "Memory Interface", value: "512-bit" },
            { name: "Memory Bandwidth", value: "1792 GB/s" },
            { name: "Compute APIs", value: "CUDA 12.8, OpenCL 3.0, DirectCompute" },
          ],
        })}
      />
      <JsonLd data={buildFaqSchema([...NVIDIA_A6000_SE_FAQ])} />
      <GpuHeroSection {...NVIDIA_A6000_SE_HERO} />
      <GpuChooseSection {...NVIDIA_A6000_SE_CHOOSE_SECTION} />
      <GpuWhyChooseSection {...NVIDIA_A6000_SE_WHY_CHOOSE_SECTION} />
      <GpuWhyChooseNeevcloudSection {...GPU_WHY_CHOOSE_NEEVCLOUD_SECTION} />
      <GpuUseCasesSection {...NVIDIA_A6000_SE_USE_CASES_SECTION} />
      <GpuTechnicalSpecsSection {...NVIDIA_A6000_SE_TECHNICAL_SPECS_SECTION} />
      <GpuOtherGpusSection excludeId="nvidia-a6000se" />
      <FaqSection items={NVIDIA_A6000_SE_FAQ} description="Get Clarity Here!" />
      <GpuFooterSection {...NVIDIA_A6000_SE_FOOTER_SECTION} />
    </>
  );
};

export default NvidiaA6000Se;
