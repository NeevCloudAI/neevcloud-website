import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import {
  AUTOSCALING_FEATURES,
  GPU_METRICS_TAGS,
  INFINIBAND_FEATURES,
  REGISTRY_TAGS,
} from "@/features/managed-kubernetes/data/needs-section-data";
import {
  GpuResourceCodeBlock,
  HelmDeployCodeBlock,
  NeedsFeatureCard,
  NeedsFeatureList,
  NeedsFeatureTags,
} from "./NeedsFeatureCard";

const NeedsSection = () => {
  return (
    <section className="bg-white py-8 md:py-16 2xl:py-25">
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" textColor="black" className="max-w-4xl" align="center">
          Everything You Need.
          <Text as="span" variant="h2" textColor="primary">
            {`Nothing You Don't.`}
          </Text>
        </Text>
        <div className="grid grid-cols-1 gap-5 mt-4 md:mt-12.5 md:grid-cols-3">
          <NeedsFeatureCard
            title="GPU Resources, Zero Configuration"
            description="NVIDIA device plugins run on every node. Request GPUs in pod specs, Kubernetes handles allocation. No manual plugin install."
            footer={<GpuResourceCodeBlock />}
          />
          <NeedsFeatureCard
            title="InfiniBand for Multi-GPU Training"
            description="Node pools connect over 400 Gbps InfiniBand with RDMA. Distributed training across 8, 16, or 64 GPUs runs at full speed."
            footer={<NeedsFeatureList items={INFINIBAND_FEATURES} />}
          />
          <NeedsFeatureCard
            title="Autoscaling That Understands Cost"
            description="Node pools scale from zero when pods are pending. Scale down to zero when idle. Eliminate GPU costs between workloads."
            footer={<NeedsFeatureList items={AUTOSCALING_FEATURES} />}
          />
          <NeedsFeatureCard
            title="One-Command Deployments"
            description="Pre-built Helm charts for common ML infrastructure. Deploy vLLM, Triton, or Jupyter in one command."
            footer={<HelmDeployCodeBlock />}
          />
          <NeedsFeatureCard
            title="GPU Metrics, Out of the Box"
            description="Node pools connect over 400 Gbps InfiniBand with RDMA. Distributed training across 8, 16, or 64 GPUs runs at full speed."
            footer={<NeedsFeatureTags items={GPU_METRICS_TAGS} />}
          />
          <NeedsFeatureCard
            title="Private Container Registry"
            description={`Push training images and model containers to NeevCloud's registry. Pull from any cluster without credential management.`}
            footer={<NeedsFeatureTags items={REGISTRY_TAGS} />}
          />
        </div>
      </Container>
    </section>
  );
};

export default NeedsSection;
