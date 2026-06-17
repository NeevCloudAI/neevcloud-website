import { cn } from "@/lib/utils";
import { Text } from "@/shared/ui-lib";
import { Folder, Lock, Server } from "lucide-react";
import type { MlWorkflowCardVariant } from "../../types/ml-workflows-section.types";

type MlWorkflowCardPreviewProps = {
  variant: MlWorkflowCardVariant;
};

const PREVIEW_FRAME_CLASS =
  "rounded-md bg-gray-01 flex flex-col gap-2.5 p-4 md:p-5 min-h-28 md:min-h-45";

const ROW_CLASS =
  "flex items-center justify-between gap-2 rounded-sm bg-gray-02 p-4 md:px-5 md:py-2.5";

function VersioningPreview() {
  const rows = [
    { name: "model_v3.pt", meta: "latest", active: true },
    { name: "model_v2.pt", meta: "2 days ago", active: false },
    { name: "model_v1.pt", meta: "7 days ago", active: false },
  ] as const;

  return (
    <div className={PREVIEW_FRAME_CLASS} aria-hidden="true">
      {rows.map((row) => (
        <div key={row.name} className={ROW_CLASS}>
          <div className="flex items-center gap-2.5">
            <span
              className={cn(
                "size-2 shrink-0 rounded-full",
                row.active ? "bg-primary" : "bg-gray-04",
              )}
            />
            <Text
              as="span"
              className="truncate font-space-mono text-xs text-black"
            >
              {row.name}
            </Text>
          </div>
          {row.active ? (
            <Text
              as="small"
              textColor="white"
              className="px-2 py-0.75 bg-primary rounded-full"
            >
              {row.meta}
            </Text>
          ) : (
            <Text textColor="gray-04">{row.meta}</Text>
          )}
        </div>
      ))}
    </div>
  );
}

function ReplicationPreview() {
  const zones = ["AZ - 1", "AZ - 2", "AZ - 3"] as const;

  return (
    <div
      className={cn(
        PREVIEW_FRAME_CLASS,
        "flex-row items-center justify-between md:p-10",
      )}
      aria-hidden="true"
    >
      {zones.map((zone) => (
        <div key={zone} className="flex items-center">
          <div className="flex flex-col items-center gap-2.5">
            <div className="bg-gray-02 rounded-md p-5">
              <Server className="size-8 text-gray-04" strokeWidth={1.5} />
            </div>
            <Text as="small" textColor="gray-04">
              {zone}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
}

function AccessControlPreview() {
  const rows = [
    {
      name: "training-data/",
      tag: "read-write",
      tagClass: "bg-primary text-white",
      Icon: Folder,
    },
    {
      name: "checkpoints/",
      tag: "read-only",
      tagClass: "bg-deep-blue text-white",
      Icon: Folder,
    },
    {
      name: "secrets/",
      tag: "deny",
      tagClass: "bg-pulse-red text-white",
      Icon: Lock,
    },
  ] as const;

  return (
    <div className={PREVIEW_FRAME_CLASS} aria-hidden="true">
      {rows.map(({ name, tag, tagClass, Icon }) => (
        <div key={name} className={ROW_CLASS}>
          <div className="flex items-center gap-2.5">
            <Icon className="size-3" strokeWidth={1.5} />
            <Text>{name}</Text>
          </div>
          <Text
            as="small"
            className={cn("px-2.5 py-0.75 rounded-full", tagClass)}
          >
            {tag}
          </Text>
        </div>
      ))}
    </div>
  );
}

function PerformancePreview() {
  const rows = [
    { label: "Multipart", speed: "~7 GB/s", width: "w-[92%]" },
    { label: "Parallel", speed: "~6 GB/s", width: "w-[78%]" },
    { label: "Standard", speed: "~1.2 GB/s", width: "w-[34%]" },
  ] as const;

  return (
    <div className={PREVIEW_FRAME_CLASS} aria-hidden="true">
      {rows.map((row) => (
        <div key={row.label} className="flex flex-col items-center gap-1">
          <div className="flex w-full justify-between">
            <Text as="h6" textColor="gray-05" fontFamily="spaceMono">
              {row.label}
            </Text>
            <Text as="h6" textColor="primary" fontFamily="spaceMono">
              {row.speed}
            </Text>
          </div>
          <div className="w-full h-2.75 rounded-full bg-cloud-gray">
            <div
              className={cn(
                "h-full rounded-full bg-linear-to-r from-primary-210 to-primary-90",
                row.width,
              )}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

const MlWorkflowCardPreview = ({ variant }: MlWorkflowCardPreviewProps) => {
  switch (variant) {
    case "versioning":
      return <VersioningPreview />;
    case "replication":
      return <ReplicationPreview />;
    case "access-control":
      return <AccessControlPreview />;
    case "performance":
      return <PerformancePreview />;
  }
};

export default MlWorkflowCardPreview;
