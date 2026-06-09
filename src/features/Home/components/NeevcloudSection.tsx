import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import Image from "next/image";
import CloudComparisonCard from "./CloudComparisonCard";
import { CLOUD_COMPARISON_CARDS } from "../data/cloud-comparison-cards";
import { Button } from "@/shared/ui-lib";

const LEGACY_CLOUD_PROBLEMS = [
  "Vendor Lock-In",
  "Unpredictable Costs",
  "Data Compliance Risks",
  "Limited Data Sovereignty",
  "Security Vulnerabilities",
];

const NEEVCLOUD_ADVANTAGES = [
  "AI-native infrastructure",
  "Multi-cloud portability",
  "India-first data residency",
  "Open-source compatible",
  "AI-native Pay-as-you-grow pricing",
];

export default function NeevcloudSection() {
  return (
    <Container className="flex flex-col items-center justify-between py-8 md:py-16 2xl:py-25">
      <div>
        <Text as="h2" className="max-w-4xl" align="center">
          Why the
          <Text as="span" variant="h2" textColor="primary">
            world
          </Text>
          Needs NeevCloud?
        </Text>
        <Text
          as="h6"
          align="center"
          textColor="black-5"
          className="max-w-3xl mt-2.5"
        >
          Legacy cloud providers and expensive &quot;neoclouds&quot; often force
          a choice between performance and price. We believe you should have
          both. NeevCloud is India’s first AI Supercloud, built from the ground
          up to make intelligence accessible to everyone.
        </Text>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-3  mt-4 md:mt-12.5">
        {/* ── Left Panel — coded, data.png as bg ── */}
        <div className="relative overflow-hidden flex flex-col justify-between p-5 pb-0 bg-white border border-gray-200">
          {/* data.png as background */}
          <Image
            src="/images/data.png"
            alt=""
            fill
            className="object-cover object-center"
          />

          {/* Content on top */}
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <Text as="h3" weight="semibold" className="mb-1">
                Problems you face today
              </Text>
              <Text textColor="black-5" className="font-space-mono">
                High Cost. Low Flexibility. Hidden Limitations.
              </Text>

              <Text as="h5" className="font-space-mono mt-6 mb-3.5">
                Legacy Cloud
              </Text>
              <div className="w-36 h-1 bg-red-400 mb-4" />

              <div className="flex flex-col gap-2 ml-5 mr-10.5">
                {LEGACY_CLOUD_PROBLEMS.map((problem) => (
                  <div
                    key={problem}
                    className="border border-gray-200 rounded-md px-5 py-2 bg-gray-light"
                  >
                    <Text className="font-space-mono">{problem}</Text>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer bar */}
            <div className="bg-red-light py-3 text-center -mx-6">
              <Text as="h6" className="font-space-mono text-red-text">
                Expensive · Opaque · Risky
              </Text>
            </div>
          </div>
        </div>
        {/* ── Right Panel (spans 2 cols) — browser chrome + advantage list + computer image ── */}
        <div className="lg:col-span-2 border border-gray-200 flex flex-col">
          {/* Browser chrome bar */}
          <div className="flex items-center gap-2 py-4 px-5.5 border-b border-gray-200">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <Text as="small">neevcloud.com</Text>
          </div>

          {/* Inner content: advantage list left, computer image right */}
          <div className="flex flex-1">
            {/* Advantage list */}
            <div className="flex flex-col justify-between p-8 flex-1">
              <div>
                <Text as="h3" weight="semibold">
                  The NeevCloud Advantage
                </Text>
                <div className="w-36 h-1 bg-primary mt-3.5 mb-4" />
                <div className="flex flex-col gap-1.5">
                  {NEEVCLOUD_ADVANTAGES.map((advantage) => (
                    <div
                      key={advantage}
                      className="border border-gray-200 rounded-md px-5 py-2 bg-gray-light"
                    >
                      <Text className="font-space-mono">{advantage}</Text>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <div className="flex gap-3">
                  <Button
                    className="flex-1 bg-primary rounded-md py-2 px-5.5 text-sm font-medium"
                    textColor="black"
                  >
                    Play with a Demo
                  </Button>
                  <Button className="flex-1 bg-black text-white rounded-md py-2 text-sm font-medium">
                    Get Started
                  </Button>
                </div>
                <Text textColor="black">AI Agent building your app...</Text>
              </div>
            </div>

            {/* Computer image with logo badge — right side */}
            <div className="relative flex-1 hidden md:block">
              <Image
                src="/images/computer.png"
                alt="NeevCloud Dashboard"
                fill
                className="object-center"
              />
              <div className="absolute top-4 right-4 flex items-center bg-white rounded-xl shadow-md px-4 py-2.5 z-10">
                <Image
                  src="/icons/logo-black.svg"
                  alt="NeevCloud"
                  width={120}
                  height={32}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom 3 Comparison Cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full">
        {CLOUD_COMPARISON_CARDS.map((item) => (
          <CloudComparisonCard key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
}
