"use client";

import { type ReactNode, useState } from "react";
import Container from "@/shared/components/container";
import { Button, Divider, Text } from "@/shared/ui-lib";
import { cn } from "@/lib/utils";

const WORKLOAD_OPTIONS = [
  { id: "gpu-cluster", label: "Create GPU Cluster" },
  { id: "vllm", label: "Deploy vLLM Inference" },
  { id: "training", label: "Distributed Training Job" },
  { id: "scale", label: "Scale Node Pool" },
] as const;

const getButtonRadiusClasses = (index: number, total: number) => {
  if (index === 0) {
    return "rounded-none rounded-t-md md:rounded-t-none md:rounded-b-none md:rounded-l-md md:rounded-r-none";
  }
  if (index === total - 1) {
    return "rounded-none rounded-b-md md:rounded-t-none md:rounded-b-none md:rounded-r-md md:rounded-l-none";
  }
  return "rounded-none";
};

type WorkloadCodeCardProps = {
  children: ReactNode;
  panelId: string;
  labelledBy: string;
};

const WorkloadCodeCard = ({
  children,
  panelId,
  labelledBy,
}: WorkloadCodeCardProps) => (
  <div
    id={panelId}
    role="tabpanel"
    aria-labelledby={labelledBy}
    className="bg-black rounded-md w-full font-mono border border-black-5 mt-4"
  >
    <div className="flex items-center justify-between gap-2 px-4 py-3 border-b border-black-5">
      <div className="flex items-center gap-1">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
      </div>
      <Text textColor="gray-75" fontFamily="spaceMono" className="ml-4">
        ~/create.sh ·
        <Text as="span" variant="p" textColor="primary">
          ready to copy
        </Text>
      </Text>
    </div>

    <div className="px-2 md:px-5 py-2 md:py-8">{children}</div>

    <Divider orientation="horizontal" className="mb-4 bg-black-5" />
    <div className="flex items-center justify-end pb-4 pr-4">
      <Text textColor="primary" fontFamily="spaceMono" className="underline">
        View Complete Documentation
      </Text>
    </div>
  </div>
);

const GpuClusterContent = () => (
  <>
    <Text fontFamily="spaceMono" textColor="gray-75" className="mt-1">
      # Create NKS cluster on AI Factory infrastructure
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      neevcloud
      <Text as="span" variant="p" textColor="white">
        nks
      </Text>
      create
      <Text as="span" variant="p" textColor="white">
        production-cluster \
      </Text>
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp; --region
      <Text as="span" variant="p" textColor="white">
        indore \
      </Text>
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp; --node-pool
      <Text as="span" variant="p" textColor="white">
        h100 \
      </Text>
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp; --nodes
      <Text as="span" variant="p" textColor="white">
        16 \
      </Text>
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp; --cooling
      <Text as="span" variant="p" textColor="white">
        liquid-immersion \
      </Text>
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp; --power
      <Text as="span" variant="p" textColor="white">
        renewable
      </Text>
    </Text>
    <Text fontFamily="spaceMono" textColor="gray-75" className="mt-4 md:mt-6">
      # InfiniBand networking configured automatically
    </Text>
  </>
);

const VllmContent = () => (
  <>
    <Text fontFamily="spaceMono" textColor="gray-75" className="mt-1">
      # Add NeevCloud Helm repo
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      helm
      <Text as="span" variant="p" textColor="white">
        repo add neevcloud
      </Text>
      <Text as="span" variant="p" textColor="red-50" className="ml-0 md:ml-0">
        https://charts.neevcloud.com
      </Text>
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      helm
      <Text as="span" variant="p" textColor="white">
        repo update
      </Text>
    </Text>
    <Text fontFamily="spaceMono" textColor="gray-75" className="mt-4 md:mt-8">
      # Install vLLM with Llama 3 70B
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      helm
      <Text as="span" variant="p" textColor="white">
        install llama-server neevcloud/vllm
      </Text>
      \
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp; --set
      <Text as="span" variant="p" textColor="white" className="mr-0 md:mr-0">
        model=
      </Text>
      <Text as="span" variant="p" textColor="red-50" className="ml-0 md:ml-0">
        meta-llama/Llama-3-70b-instruct
      </Text>
      \
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp; --set
      <Text as="span" variant="p" textColor="white">
        gpus=1
      </Text>
      \
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp; --set
      <Text as="span" variant="p" textColor="white" className="mr-0 md:mr-0">
        nodepool=
      </Text>
      <Text as="span" variant="p" textColor="red-50" className="ml-0 md:ml-0">
        h100
      </Text>
      \
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp; --set
      <Text as="span" variant="p" textColor="white" className="mr-0 md:mr-0">
        replicas=
      </Text>
      2
    </Text>
    <Text fontFamily="spaceMono" textColor="gray-75" className="mt-4 md:mt-6">
      # Service available at llama-server.default.svc.cluster.local:8000
    </Text>
  </>
);

const TrainingContent = () => (
  <>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      apiVersion:
      <Text as="span" variant="h6" textColor="white">
        batch/v1
      </Text>
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      kind:
      <Text as="span" variant="h6" textColor="white">
        Job
      </Text>
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      metadata:
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp;&nbsp;name:
      <Text as="span" variant="h6" textColor="white">
        llama-finetune
      </Text>
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      spec:
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp;&nbsp;parallelism:
      <Text as="span" variant="h6">
        8
      </Text>
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp;&nbsp;template:
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp;&nbsp;&nbsp;&nbsp;spec:
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;containers:
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- name:
      <Text as="span" variant="h6" textColor="white">
        trainer
      </Text>
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;image:
      <Text as="span" variant="h6" textColor="red-50">
        neevcloud.com/registry/pytorch:2.4
      </Text>
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;command:
      <Text as="span" variant="h6" textColor="white" className="mx-0 md:mx-0">
        [
      </Text>
      <Text as="span" variant="h6" textColor="red-50" className="mx-0 md:mx-0">
        &quot;torchrun&quot;
      </Text>
      <Text as="span" variant="h6" textColor="white" className="mx-0 md:mx-0">
        ,{" "}
      </Text>
      <Text as="span" variant="h6" textColor="red-50" className="mx-0 md:mx-0">
        &quot;--nproc_per_node=8&quot;
      </Text>
      <Text as="span" variant="h6" textColor="white" className="mx-0 md:mx-0">
        ,{" "}
      </Text>
      <Text as="span" variant="h6" textColor="red-50" className="mx-0 md:mx-0">
        &quot;train.py&quot;
      </Text>
      <Text as="span" variant="h6" textColor="white" className="mx-0 md:mx-0">
        ]
      </Text>
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resources:
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;limits:
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nvidia.com/gpu:
      <Text as="span" variant="p" textColor="white">
        1
      </Text>
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;nodeSelector:
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;gpu:
      <Text as="span" variant="p" textColor="white">
        h100
      </Text>
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;restartPolicy:
      <Text as="span" variant="p" textColor="white">
        OnFailure
      </Text>
    </Text>
  </>
);

const ScaleContent = () => (
  <>
    <Text fontFamily="spaceMono" textColor="gray-75" className="mt-1">
      # Scale H100 pool to 4 nodes
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      neevcloud
      <Text as="span" variant="p" textColor="white">
        nks scale my-cluster
      </Text>
      --node-pool
      <Text as="span" variant="p" textColor="white">
        h100
      </Text>
      --nodes 4
    </Text>

    <Text fontFamily="spaceMono" textColor="gray-75" className="mt-4 md:mt-6">
      # Scale down to 0 (autoscaler can still scale up)
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      neevcloud
      <Text as="span" variant="p" textColor="white">
        nks scale my-cluster
      </Text>
      --node-pool
      <Text as="span" variant="p" textColor="white">
        h100
      </Text>
      --nodes 0
    </Text>

    <Text fontFamily="spaceMono" textColor="gray-75" className="mt-4">
      # Watch the scale event
    </Text>
    <Text fontFamily="spaceMono" textColor="primary" as="h6">
      kubectl
      <Text as="span" variant="p" textColor="white">
        get nodes
      </Text>
      -w
    </Text>
  </>
);

const WORKLOAD_PANELS = [
  GpuClusterContent,
  VllmContent,
  TrainingContent,
  ScaleContent,
] as const;

const DeployWorkloadSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const ActivePanel = WORKLOAD_PANELS[selectedIndex];

  return (
    <section className="bg-gray-10 py-[3vh] md:py-[7vh]">
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          textColor="black"
          weight="semibold"
          className="max-w-4xl"
          align="center"
        >
          Deploy Your
          <Text as="span" variant="h2" textColor="primary">
            First Workload
          </Text>
        </Text>
        <Text textColor="black-5" align="center" className="max-w-2xl">
          Four primitives, create, deploy, train, scale. Same CLI surface, same
          auth, same cluster.
        </Text>
        <div
          className="w-full grid grid-cols-1 md:grid-cols-4 items-center justify-between mt-4 md:mt-8"
          role="tablist"
          aria-label="Workload options"
        >
          {WORKLOAD_OPTIONS.map((option, index) => {
            const isSelected = selectedIndex === index;
            const isLast = index === WORKLOAD_OPTIONS.length - 1;
            const tabId = `workload-tab-${option.id}`;

            return (
              <Button
                key={option.id}
                id={tabId}
                type="button"
                role="tab"
                size="full"
                aria-selected={isSelected}
                aria-controls={`workload-panel-${option.id}`}
                fontFamily="spaceMono"
                spacing="lg"
                borderRadius="none"
                variant={isSelected ? undefined : "black"}
                onClick={() => setSelectedIndex(index)}
                className={cn(
                  "py-4 transition-colors",
                  getButtonRadiusClasses(index, WORKLOAD_OPTIONS.length),
                  !isLast && "border-b md:border-b-0 md:border-r",
                  isSelected
                    ? "bg-primary-100 text-black"
                    : "border-gray-90 text-gray-65"
                )}
              >
                {option.label}
              </Button>
            );
          })}
        </div>

        <WorkloadCodeCard
          key={WORKLOAD_OPTIONS[selectedIndex].id}
          panelId={`workload-panel-${WORKLOAD_OPTIONS[selectedIndex].id}`}
          labelledBy={`workload-tab-${WORKLOAD_OPTIONS[selectedIndex].id}`}
        >
          <ActivePanel />
        </WorkloadCodeCard>
      </Container>
    </section>
  );
};

export default DeployWorkloadSection;
