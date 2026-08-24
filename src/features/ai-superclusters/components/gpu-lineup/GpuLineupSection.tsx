import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { AI_SUPERCLUSTERS_GPU_LINEUP } from "../../data/gpu-lineup.data";
import GpuLineupCard from "./GpuLineupCard";

const GpuLineupSection = () => {
  return (
    <section
      id="gpu-lineup"
      className="relative bg-white py-8 md:py-16 2xl:py-25"
      aria-labelledby="ai-superclusters-gpu-lineup-heading"
    >
      <Container>
        <Text as="h2" id="ai-superclusters-gpu-lineup-heading" align={"center"}>
          Every accelerator.
          <Text as="span" variant="h2" textColor="primary" weight="semibold">
            One control plane.
          </Text>
        </Text>
        <Text as="h6" textColor="black/60" className="mt-2.5" align={"center"}>
          Six production-grade GPU SKUs, all reservable at the AI Gigacampus in
          Raipur.
        </Text>

        <div className="mt-6 md:mt-12.5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AI_SUPERCLUSTERS_GPU_LINEUP.map((gpu) => (
            <GpuLineupCard key={gpu.id} gpu={gpu} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default GpuLineupSection;
