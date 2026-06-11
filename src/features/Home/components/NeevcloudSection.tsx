import Container from "@/shared/components/container";
import { Divider, Text } from "@/shared/ui-lib";
import Image from "next/image";
import CloudComparisonCard from "./CloudComparisonCard";
import { CLOUD_COMPARISON_CARDS } from "../data/cloud-comparison-cards";
import { Button } from "@/shared/ui-lib";
import LinkComponent from "@/shared/ui-lib/link";
import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

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
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 mt-4 md:mt-12.5">
        <div className="relative overflow-hidden flex flex-col justify-between p-5 bg-white border border-gray-200 bg-[url('/images/data.png')] bg-cover bg-center bg-no-repeat">
          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              <Text as="h3" weight="semibold" className="mb-1">
                Problems you face today
              </Text>
              <Text
                textColor="gray-66"
                className="max-w-60 mt-2.5"
                fontFamily="spaceMono"
              >
                High Cost. Low Flexibility. Hidden Limitations.
              </Text>

              <div className="w-fit">
                <Text as="h5" className="mt-6" fontFamily="spaceMono">
                  Legacy Cloud
                </Text>

                <Divider
                  orientation="horizontal"
                  className="mt-3 mb-5 h-0.5 bg-red-400 rounded-full"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                {LEGACY_CLOUD_PROBLEMS.map((problem) => (
                  <div
                    key={problem}
                    className="rounded-md px-5 py-2 bg-[#D9D9D9]/20"
                  >
                    <Text fontFamily="spaceMono">{problem}</Text>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-red-light py-3 text-center -mx-6 mt-4">
              <Text
                as="h6"
                fontFamily="spaceMono"
                className="text-red-text"
                weight="regular"
              >
                Expensive · Opaque · Risky
              </Text>
            </div>
          </div>
        </div>

        {/* ── Right Panel (spans 2 cols) - browser chrome + advantage list + computer image ── */}
        <div className="lg:col-span-2 border border-gray-200 flex flex-col">
          <div className="flex items-center gap-2 py-4 px-5.5 border-b border-gray-200">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <Text as="small">neevcloud.com</Text>
          </div>

          <div className="flex-1 flex flex-col justify-between p-8 bg-[url('/images/compute.png')] bg-right bg-no-repeat">
            <div className="max-w-md">
              <div>
                <Text as="h3" weight="semibold">
                  The NeevCloud Advantage
                </Text>
                <Divider
                  orientation="horizontal"
                  className="mt-3 mb-5 h-0.5 bg-primary-105 rounded-full w-50"
                />
                <div className="flex flex-col gap-1.5">
                  {NEEVCLOUD_ADVANTAGES.map((advantage) => (
                    <div
                      key={advantage}
                      className="rounded-md px-5 py-2 bg-gray-light"
                    >
                      <Text className="font-space-mono">{advantage}</Text>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 mt-2.5">
                <LinkComponent
                  href={EXTERNAL_LINKS.aiInferencePlayground}
                  target="_blank"
                  className="w-full text-black"
                >
                  Play with a Demo
                </LinkComponent>
                <LinkComponent
                  href={EXTERNAL_LINKS.aiSupercloudConsole}
                  target="_blank"
                  variant="black"
                  className="w-full"
                >
                  Get Started
                </LinkComponent>
              </div>
              <Text textColor="black" className="mt-3">
                AI Agent building your app...
              </Text>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 w-full">
        {CLOUD_COMPARISON_CARDS.map((item) => (
          <CloudComparisonCard key={item.id} item={item} />
        ))}
      </div>
    </Container>
  );
}
