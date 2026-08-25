import Image from "next/image";
import { cn } from "@/lib/utils";
import { LinkComponent, Text } from "@/shared/ui-lib";
import { AI_SUPERCLUSTER_CALENDLY_URL } from "../../constants/ai-supercluster-page.constants";
import type { AiSuperclusterLineupItem } from "../../types/ai-supercluster.types";

type GpuLineupCardProps = {
  gpu: AiSuperclusterLineupItem;
};

const GpuLineupCard = ({ gpu }: GpuLineupCardProps) => {
  return (
    <article className="flex h-full flex-col rounded-md border border-black/10 bg-cloud-gray p-5">
      <div className="relative mb-4 h-36 w-full overflow-hidden rounded-sm bg-white">
        <Image src={gpu.image} alt={`NVIDIA ${gpu.name}`} fill className="object-contain" />
      </div>

      <Text as="small" textColor="black/60" className="uppercase tracking-wide">
        {gpu.tier}
      </Text>
      <Text as="h4" weight="semibold" className="mt-1">
        {gpu.name}
      </Text>

      <div className="mt-2 flex items-center gap-2">
        {gpu.badge && (
          <span
            className={cn(
              "rounded-xs px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white",
              gpu.badge === "NEW" ? "bg-primary" : "bg-pulse-red",
            )}
          >
            {gpu.badge}
          </span>
        )}
        <Text as="small" textColor="primary">
          {gpu.availability}
        </Text>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3 border-t border-black/10 pt-4">
        <div>
          <Text as="small" textColor="black/60" className="uppercase tracking-wide">
            Architecture
          </Text>
          <Text as="small" weight="semibold">
            {gpu.architecture}
          </Text>
        </div>
        <div>
          <Text as="small" textColor="black/60" className="uppercase tracking-wide">
            VRAM
          </Text>
          <Text as="small" weight="semibold">
            {gpu.vram}
          </Text>
        </div>
        <div>
          <Text as="small" textColor="black/60" className="uppercase tracking-wide">
            TDP
          </Text>
          <Text as="small" weight="semibold">
            {gpu.tdp}
          </Text>
        </div>
        <div>
          <Text as="small" textColor="black/60" className="uppercase tracking-wide">
            Peak Compute
          </Text>
          <Text as="small" weight="semibold">
            {gpu.peakCompute}
          </Text>
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        <div className="flex gap-1.5 text-xs">
          <Text as="span" textColor="primary" weight="semibold">
            Fabric
          </Text>
          <Text as="span" textColor="black/60">
            {gpu.fabric}
          </Text>
        </div>
        <div className="flex gap-1.5 text-xs">
          <Text as="span" textColor="primary" weight="semibold">
            Memory BW
          </Text>
          <Text as="span" textColor="black/60">
            {gpu.memoryBandwidth}
          </Text>
        </div>
        <div className="flex gap-1.5 text-xs">
          <Text as="span" textColor="primary" weight="semibold">
            Best for
          </Text>
          <Text as="span" textColor="black/60">
            {gpu.bestFor}
          </Text>
        </div>
      </div>

      <LinkComponent
        href={AI_SUPERCLUSTER_CALENDLY_URL}
        target="_blank"
        size="full"
        className="mt-5 text-center"
      >
        Schedule a Call →
      </LinkComponent>
    </article>
  );
};

export default GpuLineupCard;
