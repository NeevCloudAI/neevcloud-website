import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";

const NeedsSection = () => {
  return (
    <section className="bg-white py-[3vh] md:py-[7vh]">
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          textColor="black"
          weight="semibold"
          className="max-w-4xl"
          align="center"
        >
          Everything You Need.
          <Text as="span" variant="h2" textColor="primary">
            {`Nothing You Don't.`}
          </Text>
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 md:mt-8">
          <div className="bg-gray-10 p-4 md:p-8 rounded-md">
            <Text as="h3" weight="semibold">
              GPU Resources, Zero Configuration
            </Text>
            <Text textColor="gray-75" className="mt-2">
              NVIDIA device plugins run on every node. Request GPUs in pod
              specs, Kubernetes handles allocation. No manual plugin install.
            </Text>
            <div className="bg-black rounded-xl p-4 md:p-8 mt-4 md:mt-8">
              <Text as="small" textColor="white" fontFamily="spaceMono">
                resources:
              </Text>
              <Text as="small" textColor="white" fontFamily="spaceMono">
                &nbsp;&nbsp;limits:
              </Text>
              <Text as="small" textColor="primary" fontFamily="spaceMono">
                &nbsp;&nbsp;&nbsp;nvidia.com/gpu:
                <Text
                  as="span"
                  variant="small"
                  textColor="white"
                  fontFamily="spaceMono"
                >
                  1
                  <Text
                    as="span"
                    variant="small"
                    textColor="gray-75"
                    fontFamily="spaceMono"
                  >
                    # Just works
                  </Text>
                </Text>
              </Text>
            </div>
          </div>

          <div className="bg-gray-10 p-4 md:p-8 rounded-md">
            <Text as="h3" weight="semibold">
              InfiniBand for Multi-GPU Training
            </Text>
            <Text textColor="gray-85" className="mt-2">
              Node pools connect over 400 Gbps InfiniBand with RDMA. Distributed
              training across 8, 16, or 64 GPUs runs at full speed.
            </Text>
            <ul className="mt-4 space-y-2 list-disc list-inside marker:text-primary">
              {/* <li className="text-gray-85 text-sm">PyTorch FSDP</li> */}
              <li className="text-gray-90 text-sm">PyTorch FSDP</li>
              <li className="text-gray-90 text-sm">DeepSpeed</li>
              <li className="text-gray-90 text-sm">Horovod</li>
              <li className="text-gray-90 text-sm">
                NCCL (optimized for InfiniBand)
              </li>
            </ul>
          </div>

          <div className="bg-gray-10 p-4 md:p-8 rounded-md">
            <Text as="h3" weight="semibold">
              Autoscaling That Understands Cost
            </Text>
            <Text textColor="gray-85" className="mt-2">
              Node pools scale from zero when pods are pending. Scale down to
              zero when idle. Eliminate GPU costs between workloads.
            </Text>
            <ul className="mt-4 space-y-2 list-disc list-inside marker:text-primary">
              <li className="text-gray-90 text-sm">
                Pending pods trigger scale-up (60s)
              </li>
              <li className="text-gray-90 text-sm">
                Idle nodes scale down (10 min)
              </li>
              <li className="text-gray-90 text-sm">
                Min/max nodes configurable per pool
              </li>
              <li className="text-gray-90 text-sm">
                Respects pod disruption budgets
              </li>
            </ul>
          </div>

          <div className="bg-gray-10 p-4 md:p-8 rounded-md">
            <Text as="h3" weight="semibold">
              One-Command Deployments
            </Text>
            <Text textColor="gray-75" className="mt-2">
              Pre-built Helm charts for common ML infrastructure. Deploy vLLM,
              Triton, or Jupyter in one command.
            </Text>
            <div className="bg-black rounded-xl p-4 md:p-8 mt-4 md:mt-8">
              <Text as="small" textColor="primary" fontFamily="spaceMono">
                helm
                <Text
                  as="span"
                  variant="small"
                  textColor="white"
                  fontFamily="spaceMono"
                >
                  install vllm neevcloud/vllm \
                </Text>
              </Text>

              <Text as="small" textColor="primary" fontFamily="spaceMono">
                &nbsp;&nbsp; --set
                <Text
                  as="span"
                  variant="small"
                  textColor="white"
                  fontFamily="spaceMono"
                  className="mr-0 md:mr-0"
                >
                  model=
                </Text>
                <Text
                  as="span"
                  variant="small"
                  textColor="red-50"
                  fontFamily="spaceMono"
                  className="mx-0 md:mx-0"
                >
                  llama-3-70b
                </Text>
              </Text>
            </div>
          </div>

          <div className="bg-gray-10 p-4 md:p-8 rounded-md">
            <Text as="h3" weight="semibold">
              GPU Metrics, Out of the Box
            </Text>
            <Text textColor="gray-85" className="mt-2">
              Node pools connect over 400 Gbps InfiniBand with RDMA. Distributed
              training across 8, 16, or 64 GPUs runs at full speed.
            </Text>
            <div className="flex flex-wrap gap-2 mt-4">
              <Text
                fontFamily="spaceMono"
                as="small"
                textColor="white"
                className="bg-primary rounded-xl px-3 py-1"
              >
                GPU util/pod
              </Text>
              <Text
                fontFamily="spaceMono"
                as="small"
                textColor="white"
                className="bg-primary rounded-xl px-3 py-1"
              >
                Memory alloc
              </Text>
              <Text
                fontFamily="spaceMono"
                as="small"
                textColor="white"
                className="bg-primary rounded-xl px-3 py-1"
              >
                Inference latency
              </Text>
              <Text
                fontFamily="spaceMono"
                as="small"
                textColor="white"
                className="bg-primary rounded-xl px-3 py-1"
              >
                Node health
              </Text>
            </div>
          </div>

          <div className="bg-gray-10 p-4 md:p-8 rounded-md">
            <Text as="h3" weight="semibold">
              Private Container Registry
            </Text>
            <Text textColor="gray-85" className="mt-2">
              {`Push training images and model containers to NeevCloud's registry.
              Pull from any cluster without credential management.`}
            </Text>
            <div className="flex flex-wrap gap-2 mt-4">
              <Text
                fontFamily="spaceMono"
                as="small"
                textColor="white"
                className="bg-primary rounded-xl px-3 py-1"
              >
                Unlimited repos
              </Text>
              <Text
                fontFamily="spaceMono"
                as="small"
                textColor="white"
                className="bg-primary rounded-xl px-3 py-1"
              >
                Image scanning
              </Text>
              <Text
                fontFamily="spaceMono"
                as="small"
                textColor="white"
                className="bg-primary rounded-xl px-3 py-1"
              >
                Auto GC
              </Text>
              <Text
                fontFamily="spaceMono"
                as="small"
                textColor="white"
                className="bg-primary rounded-xl px-3 py-1"
              >
                Fast Pulls
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default NeedsSection;
