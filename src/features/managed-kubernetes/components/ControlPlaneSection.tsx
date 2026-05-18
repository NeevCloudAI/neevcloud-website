import Container from "@/shared/components/container";
import { Divider, Text } from "@/shared/ui-lib";

const ControlPlaneSection = () => {
  return (
    <section className="relative bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat bg-black py-[3vh] md:py-[7vh]">
      <div className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-[50%] md:w-[30%] h-[75%] md:h-[50%] top-5 md:top-10 right-[-5%] opacity-50 md:opacity-100"></div>
      <Container className="flex flex-col items-center justify-center">
        <Text as="h2" textColor="white" weight="semibold" className="max-w-4xl">
          Control Plane
          <Text as="span" variant="h2" textColor="primary">
            Free.
          </Text>
          Pay Only for Nodes.
        </Text>
        <Text textColor="gray-10" align="center" className="max-w-2xl">
          The NKS control plane runs on our infrastructure at no charge. You pay
          only for GPU and CPU nodes in your cluster.
        </Text>
        <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-8 w-full">
          <div className="bg-black rounded-xl w-full shadow-sm font-mono border border-black-5">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-black-5">
              <div className="flex items-center gap-1">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              </div>
              <Text textColor="gray-75" fontFamily="spaceMono" className="ml-4">
                {`~ nks-pricing - bash - 80×24`}
              </Text>
            </div>

            <div className="px-2 md:px-5 py-2 md:py-8">
              <Text fontFamily="spaceMono" textColor="white">
                {`› nks list --pricing --currency=INR`}
              </Text>

              <Text fontFamily="spaceMono" textColor="gray-75" className="mt-1">
                {`// what you pay for all amounts in ₹`}
              </Text>

              <div className="flex items-center justify-between gap-2 mt-4">
                <Text fontFamily="spaceMono" textColor="gray-75">
                  category
                </Text>
                <Text fontFamily="spaceMono" textColor="primary">
                  Pricing
                </Text>
              </div>
              <Divider orientation="horizontal" className="my-4 bg-black-5" />

              <div className="flex items-center justify-between gap-2 mt-4">
                <Text fontFamily="spaceMono" textColor="primary" as="h6">
                  GPU nodes
                </Text>
                <Text fontFamily="spaceMono" textColor="red-50" as="h6">
                  on-demand pricing
                </Text>
              </div>
              <Divider orientation="horizontal" className="my-4 bg-black-5" />

              <div className="flex items-center justify-between gap-2 mt-4">
                <Text fontFamily="spaceMono" textColor="primary" as="h6">
                  CPU nodes
                </Text>
                <Text fontFamily="spaceMono" textColor="red-50" as="h6">
                  on-demand pricing
                </Text>
              </div>
              <Divider orientation="horizontal" className="my-4 bg-black-5" />

              <div className="flex items-center justify-between gap-2 mt-4">
                <Text fontFamily="spaceMono" textColor="primary" as="h6">
                  Persistent storage
                </Text>
                <Text fontFamily="spaceMono" textColor="red-50" as="h6">
                  ₹8.35/GB/mo
                </Text>
              </div>
              <Divider orientation="horizontal" className="my-4 bg-black-5" />

              <div className="flex items-center justify-between gap-2 mt-4">
                <Text fontFamily="spaceMono" textColor="primary" as="h6">
                  Egress (within India)
                </Text>
                <Text fontFamily="spaceMono" textColor="red-50" as="h6">
                  free
                </Text>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl w-full border border-black-5 p-4 md:p-8">
            <Text
              textColor="black"
              as="h3"
              weight="semibold"
            >{`What’s Included`}</Text>

            <div className="flex items-center justify-between gap-2 mt-4">
              <Text textColor="gray-75" as="h6">
                Control plane (API/scheduler/etcd)
              </Text>
              <Text fontFamily="spaceMono" textColor="primary" as="h6">
                ₹0
              </Text>
            </div>
            <Divider orientation="horizontal" className="my-4 bg-gray-60" />

            <div className="flex items-center justify-between gap-2 mt-4">
              <Text textColor="gray-75" as="h6">
                InfiniBand between nodes
              </Text>
              <Text fontFamily="spaceMono" textColor="primary" as="h6">
                ₹0
              </Text>
            </div>
            <Divider orientation="horizontal" className="my-4 bg-gray-60" />

            <div className="flex items-center justify-between gap-2 mt-4">
              <Text textColor="gray-75" as="h6">
                GPU device plugins
              </Text>
              <Text fontFamily="spaceMono" textColor="primary" as="h6">
                ₹0
              </Text>
            </div>
            <Divider orientation="horizontal" className="my-4 bg-gray-60" />

            <div className="flex items-center justify-between gap-2 mt-4">
              <Text textColor="gray-75" as="h6">
                Autoscaling + Prometheus + Grafana
              </Text>
              <Text fontFamily="spaceMono" textColor="primary" as="h6">
                ₹0
              </Text>
            </div>
            <Divider orientation="horizontal" className="my-4 bg-gray-60" />

            <div className="flex items-center justify-between gap-2 mt-4">
              <Text textColor="gray-75" as="h6">
                Private registry
              </Text>
              <Text fontFamily="spaceMono" textColor="primary" as="h6">
                ₹0
              </Text>
            </div>
            <Divider orientation="horizontal" className="my-4 bg-gray-60" />
          </div>
        </div>
        <div className="w-full mt-4 md:mt-8">
          <div className="rounded-t-xl bg-gray-10 p-4 md:p-6 flex flex-col md:flex-row justify-between items-center gap-2">
            <Text as="h3" weight="semibold">
              Reserved Node Pricing
            </Text>
            <Text textColor="primary" as="h6">
              {`commit longer  ·  pay less  ·  cancel anytime by EOL of term`}
            </Text>
          </div>
          <Divider orientation="horizontal" className="bg-gray-60" />
          <div className=" w-full bg-white rounded-b-xl flex items-center">
            <div className="flex flex-col items-center justify-center px-4 md:px-8 w-full">
              <Text textColor="gray-75">3 Months</Text>
              <Text as="h2" weight="semibold" textColor="primary">
                15%
                <Text as="span" textColor="gray-75" variant="h6">
                  off
                </Text>
              </Text>
              <Text textColor="gray-75" align="center">
                vs on-demand · billed monthly
              </Text>
            </div>
            <Divider orientation="vertical" className="h-40 bg-gray-60" />
            <div className="flex flex-col items-center justify-center px-4 md:px-8 w-full">
              <Text textColor="gray-75">6 Months</Text>
              <Text as="h2" weight="semibold" textColor="primary">
                20%
                <Text as="span" textColor="gray-75" variant="h6">
                  off
                </Text>
              </Text>
              <Text textColor="gray-75" align="center">
                vs on-demand · billed monthly
              </Text>
            </div>
            <Divider orientation="vertical" className="h-40 bg-gray-60" />
            <div className="flex flex-col items-center justify-center px-4 md:px-8 w-full">
              <Text textColor="gray-75">12 Months</Text>
              <Text as="h2" weight="semibold" textColor="primary">
                23%
                <Text as="span" textColor="gray-75" variant="h6">
                  off
                </Text>
              </Text>
              <Text textColor="gray-75" align="center">
                vs on-demand · billed monthly
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ControlPlaneSection;
