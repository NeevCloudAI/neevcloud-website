import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";

const GpuDeploymentComparisonSection = () => {
  return (
    <section
      className="relative bg-black py-8 md:py-16 2xl:py-25"
      aria-labelledby="gpu-deployment-comparison-section-heading"
    >
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="gpu-deployment-comparison-section-heading"
          align="center"
          className="mt-4 max-w-4xl"
          textColor="white"
        >
          Deployment
          <Text as="span" variant="h2" textColor="primary">
            Modes Comparision
          </Text>
        </Text>
        <Text
          as="h6"
          textColor="gray-85"
          align="center"
          className="mt-2.5 max-w-3xl"
        >
          Choose the right deployment for your GPU workload
        </Text>
        <div className="grid w-full grid-cols-[140px_240px_1fr] grid-rows-[auto_auto_1fr] gap-0 border border-white">
          {/* Top Left */}
          <div className="border border-white col-[1/3] row-1">
            <Text as="h3" textColor="white">
              Both run on the same GPU hardware pick
              <Text as="span" variant="h3" textColor="primary">
                based on how much control you need.
              </Text>
            </Text>
          </div>

          {/* Top Right */}
          <div className="border border-white col-[3/4] row-[1/3]">
            <Text as="h3" textColor="white">
              Both run on the same GPU hardware pick
            </Text>
          </div>

          {/* Small Middle */}
          <div className="border border-white col-[2/3] row-2">
            <Text as="h3" textColor="white">
              Both run on the same GPU hardware pick
            </Text>
          </div>

          {/* Left Sidebar */}
          <div className="border border-white col-[1/2] row-[2/4]">
            <Text as="h3" textColor="white">
              Both run on the same GPU hardware pick
            </Text>
          </div>

          {/* Main Panel */}
          <div className="border border-white col-[2/4] row-[3/4]">
            <Text as="h3" textColor="white">
              Both run on the same GPU hardware pick
            </Text>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GpuDeploymentComparisonSection;
