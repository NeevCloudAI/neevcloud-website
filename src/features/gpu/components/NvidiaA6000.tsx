import JsonLd from "@/shared/components/JsonLd";
import { buildFaqSchema, buildProductSchema } from "@/lib/seo";
import FaqSection from "@/shared/components/faq/faq-section";
import GpuChooseSection from "@/shared/components/gpu-choose-section";
import GpuHeroSection from "@/shared/components/gpu-hero-section";
import GpuUseCasesSection from "@/shared/components/gpu-use-cases-section";
import GpuWhyChooseNeevcloudSection from "@/shared/components/gpu-why-choose-neevcloud-section";
import GpuWhyChooseSection from "@/shared/components/gpu-why-choose-section";
import { NVIDIA_A6000_CHOOSE_SECTION } from "@/shared/data/gpu-choose-section.data";
import { NVIDIA_A6000_FAQ } from "@/shared/data/gpu-faq-section.data";
import { NVIDIA_A6000_HERO } from "@/shared/data/gpu-hero-section.data";
import { GPU_WHY_CHOOSE_NEEVCLOUD_SECTION } from "@/shared/data/gpu-why-choose-neevcloud.data";
import { NVIDIA_A6000_USE_CASES_SECTION } from "@/shared/data/gpu-use-cases-section.data";
import { NVIDIA_A6000_WHY_CHOOSE_SECTION } from "@/shared/data/gpu-why-choose-section.data";
import GpuFooterSection from "@/shared/components/gpu-footer-section";
import GpuTechnicalSpecsSection from "@/shared/components/gpu-technical-specs-section";
import { NVIDIA_A6000_FOOTER_SECTION } from "@/shared/data/gpu-footer.data";
import { NVIDIA_A6000_TECHNICAL_SPECS_SECTION } from "@/shared/data/gpu-technical-specs-section.data";
import GpuOtherGpusSection from "@/shared/components/gpu-other-gpus-section";

const NvidiaA6000 = () => {
  return (
    <>
      <JsonLd
        data={buildProductSchema({
          name: "Nvidia RTX A6000",
          description:
            "Purpose-built for professional 3D rendering, AI-powered CAD workflows, and photorealistic visualization on our RTX-optimized cloud platform.",
          path: "/nvidia-rtx-a6000",
          model: "RTX A6000",
          price: "81.25",
          priceCurrency: "INR",
          specs: [
            { name: "GPU", value: "NVIDIA RTX™ A6000" },
            { name: "GPU Memory", value: "48GB GDDR6 with error-correcting code (ECC)" },
            { name: "Display Ports", value: "4x Display Port 1.4a" },
            { name: "Thermal", value: "Active cooling for optimal temperature management" },
            { name: "NVLink", value: "2-way low profile; enables connection of 2 RTX A6000 GPUs" },
            { name: "vGPU Software Support", value: "NVIDIA vPC/vApps, NVIDIA RTX Virtual Workstation, NVIDIA Virtual Compute Server" },
            { name: "VR Ready", value: "Yes" },
          ],
        })}
      />
      <JsonLd data={buildFaqSchema([...NVIDIA_A6000_FAQ])} />
      <GpuHeroSection {...NVIDIA_A6000_HERO} />
      <GpuChooseSection {...NVIDIA_A6000_CHOOSE_SECTION} />
      <GpuWhyChooseSection {...NVIDIA_A6000_WHY_CHOOSE_SECTION} />
      <GpuWhyChooseNeevcloudSection {...GPU_WHY_CHOOSE_NEEVCLOUD_SECTION} />
      <GpuUseCasesSection {...NVIDIA_A6000_USE_CASES_SECTION} />
      <GpuTechnicalSpecsSection {...NVIDIA_A6000_TECHNICAL_SPECS_SECTION} />
      <GpuOtherGpusSection excludeId="nvidia-a6000" />
      <FaqSection items={NVIDIA_A6000_FAQ} description="Get Clarity Here!" />
      <GpuFooterSection {...NVIDIA_A6000_FOOTER_SECTION} />
    </>
  );
};

export default NvidiaA6000;
