import JsonLd from "@/shared/components/JsonLd";
import { buildFaqSchema, buildProductSchema } from "@/lib/seo";
import FaqSection from "@/shared/components/faq/faq-section";
import GpuChooseSection from "@/shared/components/gpu-choose-section";
import GpuHeroSection from "@/shared/components/gpu-hero-section";
import GpuUseCasesSection from "@/shared/components/gpu-use-cases-section";
import GpuWhyChooseNeevcloudSection from "@/shared/components/gpu-why-choose-neevcloud-section";
import GpuWhyChooseSection from "@/shared/components/gpu-why-choose-section";
import { NVIDIA_B300_CHOOSE_SECTION } from "@/shared/data/gpu-choose-section.data";
import { NVIDIA_B300_FAQ } from "@/shared/data/gpu-faq-section.data";
import { NVIDIA_B300_HERO } from "@/shared/data/gpu-hero-section.data";
import { GPU_WHY_CHOOSE_NEEVCLOUD_SECTION } from "@/shared/data/gpu-why-choose-neevcloud.data";
import { NVIDIA_B300_USE_CASES_SECTION } from "@/shared/data/gpu-use-cases-section.data";
import { NVIDIA_B300_WHY_CHOOSE_SECTION } from "@/shared/data/gpu-why-choose-section.data";
import GpuFooterSection from "@/shared/components/gpu-footer-section";
import GpuTechnicalSpecsSection from "@/shared/components/gpu-technical-specs-section";
import { NVIDIA_B300_FOOTER_SECTION } from "@/shared/data/gpu-footer.data";
import { NVIDIA_B300_TECHNICAL_SPECS_SECTION } from "@/shared/data/gpu-technical-specs-section.data";
import GpuOtherGpusSection from "@/shared/components/gpu-other-gpus-section";

const NvidiaB300 = () => {
  return (
    <>
      <JsonLd
        data={buildProductSchema({
          name: "Nvidia DGX B300",
          description:
            "With NVIDIA Blackwell Ultra GPUs, DGX B300 delivers 11x faster inference and 4x quicker training compared to previous generations in a compact form factor.",
          path: "/nvidia-b300",
          model: "DGX B300",
          price: "5.00",
          priceCurrency: "USD",
          specs: [
            { name: "GPU", value: "NVIDIA Blackwell Ultra GPUs" },
            { name: "CPU", value: "Dual Intel® Xeon® Processors" },
            { name: "Total GPU Memory", value: "2.3TB" },
            { name: "Performance", value: "72 PFLOPS FP8 training; 144 PFLOPS FP4 inference" },
            { name: "Networking", value: "8x OSFP ports; Up to 800Gb/s NVIDIA Ethernet; 2x dual-port QSFP112 NVIDIA BlueField-3 DPU" },
            { name: "Storage", value: "OS: 2x 1.9TB NVMe M.2; Internal: 8x 3.84TB NVMe E1.S" },
          ],
        })}
      />
      <JsonLd data={buildFaqSchema([...NVIDIA_B300_FAQ])} />
      <GpuHeroSection {...NVIDIA_B300_HERO} />
      <GpuChooseSection {...NVIDIA_B300_CHOOSE_SECTION} />
      <GpuWhyChooseSection {...NVIDIA_B300_WHY_CHOOSE_SECTION} />
      <GpuWhyChooseNeevcloudSection {...GPU_WHY_CHOOSE_NEEVCLOUD_SECTION} />
      <GpuUseCasesSection {...NVIDIA_B300_USE_CASES_SECTION} />
      <GpuTechnicalSpecsSection {...NVIDIA_B300_TECHNICAL_SPECS_SECTION} />
      <GpuOtherGpusSection excludeId="nvidia-b300" />
      <FaqSection items={NVIDIA_B300_FAQ} description="Get Clarity Here!" />
      <GpuFooterSection {...NVIDIA_B300_FOOTER_SECTION} />
    </>
  );
};

export default NvidiaB300;
