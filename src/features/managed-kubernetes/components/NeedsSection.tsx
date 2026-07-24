import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import GpuResourceCodeBlock from "./needs/GpuResourceCodeBlock";
import HelmDeployCodeBlock from "./needs/HelmDeployCodeBlock";
import NeedsFeatureCard from "./needs/NeedsFeatureCard";
import NeedsFeatureList from "./needs/NeedsFeatureList";
import NeedsFeatureTags from "./needs/NeedsFeatureTags";
import {
  AUTOSCALING_FEATURES,
  GPU_METRICS_TAGS,
  INFINIBAND_FEATURES,
  REGISTRY_TAGS,
} from "../data/needs-section.data";

const NeedsSection = () => {
  return (
    <section
      className="bg-white py-8 md:py-16 2xl:py-25"
      aria-labelledby="needs-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="needs-section-heading"
          textColor="black"
          className="max-w-4xl"
          align="center"
        >
          Everything You Need.
          <Text as="span" variant="h2" textColor="primary">
            {`Nothing You Don't.`}
          </Text>
        </Text>
        <ul className="grid grid-cols-1 gap-5 mt-4 md:mt-12.5 md:grid-cols-3 list-none p-0 m-0 w-full items-stretch">
          <li className="h-full">
            <NeedsFeatureCard
              title="GPU Resources, Zero Configuration"
              description="NVIDIA device plugins run on every node. Request GPUs in pod specs, Kubernetes handles allocation. No manual plugin install."
              footer={<GpuResourceCodeBlock />}
            />
          </li>
          <li className="h-full">
            <NeedsFeatureCard
              title="Autoscaling That Understands Cost"
              description="Node pools scale from zero when pods are pending. Scale down to zero when idle. Eliminate GPU costs between workloads."
              footer={<NeedsFeatureList items={AUTOSCALING_FEATURES} />}
            />
          </li>
          <li className="h-full">
            <NeedsFeatureCard
              title="One-Command Deployments"
              description="Pre-built Helm charts for common ML infrastructure. Deploy vLLM, Triton, or Jupyter in one command."
              footer={<HelmDeployCodeBlock />}
            />
          </li>
          <li className="h-full">
            <NeedsFeatureCard
              title="GPU Metrics, Out of the Box"
              description="Node pools connect over 400 Gbps with RDMA. Distributed training across 8, 16, or 64 GPUs runs at full speed."
              footer={<NeedsFeatureTags items={GPU_METRICS_TAGS} />}
            />
          </li>
          <li className="h-full">
            <NeedsFeatureCard
              title="Private Container Registry"
              description={`Push training images and model containers to NeevCloud's registry. Pull from any cluster without credential management.`}
              footer={<NeedsFeatureTags items={REGISTRY_TAGS} />}
            />
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default NeedsSection;
