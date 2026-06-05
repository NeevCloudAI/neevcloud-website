import Image from "next/image";
import Container from "@/shared/components/container";
import { Divider, Text } from "@/shared/ui-lib";
import { INFRASTRUCTURE_GPU_AVAILABILITY_ROWS } from "../constants/infrastructure-section.constants";
import GpuAvailabilityRow from "./GpuAvailabilityRow";

function InfrastructureNativeFlowDiagram() {
  return (
    <figure className="mt-4 md:mt-10.75 flex w-full flex-col items-center">
      <div className="flex w-full gap-8">
        <Text
          textColor="white"
          className="w-full border border-black-90 bg-black-50 rounded-lg px-2 py-2 text-center shadow-sm"
        >
          Gen AI Models
        </Text>
        <Text
          textColor="white"
          className="w-full border border-black-90 bg-black-50 rounded-lg px-2 py-2 text-center "
        >
          Your Applications
        </Text>
      </div>

      <svg
        className="h-14 w-full shrink-0 text-white"
        viewBox="0 0 280 56"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M 70 0 L 70 22 H 210 L 210 0 M 140 22 L 140 56"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <Text
        as="h4"
        weight="semibold"
        textColor="white"
        className="border border-gray-25 bg-gray-83 rounded-lg px-4 md:px-5 py-2 md:py-4 text-center shadow-sm"
      >
        AI SuperCloud
      </Text>
      <Image
        src="/icons/up-icon.svg"
        alt="AI SuperCloud"
        width={20}
        height={20}
      />

      <div className="flex items-center justify-center gap-2 rounded-lg border border-primary-65 bg-primary-110 px-6 md:px-12 py-2 md:py-4">
        <Image
          src="/icons/logo-white.svg"
          alt="NeevCloud Logo"
          width={150}
          height={150}
        />
      </div>
    </figure>
  );
}

export default function InfrastructureSectionContent() {
  const rowCount = INFRASTRUCTURE_GPU_AVAILABILITY_ROWS.length;

  return (
    <div className="relative bg-black text-white">
      <Container className="flex flex-col items-center py-8 md:py-25">
        <Text as="h2" align="center" className="max-w-4xl">
          Infrastructure That
          <Text
            as="span"
            variant="h2"
            textColor="primary"
            className="w-full max-w-4xl mr-0 md:mr-0"
          >
            Removes Barriers
          </Text>
          , Not Adds Them
        </Text>

        <Text
          as="h6"
          className="mt-2.5 max-w-2xl"
          textColor="gray-10"
          align="center"
        >
          We built NeevCloud to give every innovator access to world-class AI
          infrastructure without the traditional limits of cost, complexity, or
          control.
        </Text>

        <div className="flex flex-col md:flex-row mt-4 md:mt-12.5 gap-5">
          <div className="flex-2 bg-black-95 rounded-md">
            <div className="p-4 md:p-10">
              <Text as="h3" weight="semibold" className="text-[30px]">
                On-Demand GPU Access
              </Text>
              <Text as="h4" textColor="primary" className="mt-1.25">
                Available When You Need It
              </Text>
              <Text as="h6" className="mt-3.75" textColor="gray-10">
                Provision GPU resources in minutes without long wait times or
                complex procurement processes. Start training immediately and
                scale as your projects grow.
              </Text>
            </div>
            <Divider orientation="horizontal" className="bg-white-10" />
            {INFRASTRUCTURE_GPU_AVAILABILITY_ROWS.map((row, index) => (
              <GpuAvailabilityRow
                key={row.id}
                rowId={row.id}
                modelName={row.modelName}
                showDividerBelow={index < rowCount - 1}
              />
            ))}
          </div>
          <div className="flex flex-1.5 flex-col rounded-md p-4 md:p-10 bg-black-95">
            <Text as="h3" weight="semibold" className="text-[30px]">
              AI-Native Infrastructure
            </Text>
            <Text as="h4" textColor="primary" className="mt-1.25">
              Purpose-Built for Modern AI
            </Text>
            <Text as="h6" className="mt-3.75 max-w-md" textColor="gray-10">
              Every layer of our stack is designed specifically for AI
              workloads. We engineer for performance and efficiency.
            </Text>
            <InfrastructureNativeFlowDiagram />
          </div>
        </div>

        <div className=" w-full flex flex-col md:flex-row mt-5 gap-5">
          <div className="relative flex-1 rounded-md p-4 md:p-10 bg-black-95">
            <Text as="h3" weight="semibold" className="text-[30px]">
              High Memory Capacity
            </Text>
            <Text as="h4" textColor="primary" className="mt-1.25">
              Handle Larger Models, Faster
            </Text>
            <Text as="h6" textColor="gray-10" className="mt-3.75">
              Work with massive datasets and complex models without hitting
              memory bottlenecks. Our GPU configurations provide the capacity
              your most ambitious projects demand.{" "}
            </Text>
            <div className="absolute bottom-0 left-0">
              <Image
                src="/icons/fast.svg"
                alt="High Memory Capacity"
                width={300}
                height={300}
                className="hidden md:block"
              />
            </div>
          </div>
          <div className="flex-2 rounded-md p-4 md:p-10 bg-black-95">
            <Text as="h3" weight="semibold" className="text-[30px]">
              24x7 Best-in-Class Support
            </Text>
            <Text as="h4" textColor="primary" className="mt-1.25">
              Expert Help, Always Available
            </Text>
            <Text as="h6" textColor="gray-10" className="mt-3.75">
              Our team understands AI infrastructure because we built it. Get
              responsive support from engineers who know the platform inside and
              out, whenever you need it.
            </Text>
            <div className="flex justify-center">
              <Image
                src="/images/chat-screenshot.png"
                alt="24x7 Best-in-Class Support"
                width={750}
                height={750}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
