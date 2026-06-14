import Container from "@/shared/components/container";
import CPUConfigurationPanel from "./CPUConfigurationPanel";
import CpuWorkloadSectionActions from "./CpuWorkloadSectionActions";
import CpuWorkloadTerminalHeader from "./CpuWorkloadTerminalHeader";
import { Text } from "@/shared/ui-lib";

const CPUWorkloadSection = () => {
  return (
    <section
      className="relative bg-black py-8 md:py-16 2xl:py-25"
      aria-labelledby="cpu-workload-section-heading"
      id="cpu-workload-section"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[url('/icons/logo-mid.svg')] bg-cover bg-center bg-no-repeat w-full md:w-[30%] h-[60%] top-20 right-[-5%] opacity-40 md:opacity-100"
        aria-hidden="true"
      />
      <Container className="flex flex-col items-center justify-center">
        <Text
          as="h2"
          id="cpu-workload-section-heading"
          textColor="white"
          align="center"
          className="max-w-4xl"
        >
          Every Workload.
          <Text as="span" variant="h2" textColor="primary">
            Scale Without Limits.
          </Text>
          Pay Per Minute.
        </Text>
        <Text
          as="h6"
          textColor="cloud-gray"
          align="center"
          className="max-w-3xl mt-2.5"
        >
          Commit and Save. The Longer the Plan, the Lower the Rate.
        </Text>

        <div
          className="bg-white/6 backdrop-blur-md rounded-lg w-full shadow-sm font-mono border border-white/12 mt-4 md:mt-12.5"
          role="region"
          aria-label="Terminal-style CPU configuration"
        >
          <CpuWorkloadTerminalHeader />

          <div className="px-4 py-5 md:py-7.5 min-h-120">
            <CPUConfigurationPanel />
          </div>
        </div>

        <CpuWorkloadSectionActions />
      </Container>
    </section>
  );
};

export default CPUWorkloadSection;
