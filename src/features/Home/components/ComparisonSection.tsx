"use client";

import Container from "@/shared/components/container";
import { Button, Divider, Text } from "@/shared/ui-lib";
import { useState } from "react";

const ComparisonCard = ({
  title,
  description,
  subtitle,
  subtitle2,
  description2,
  bgColor,
  comparisonStatus,
}: {
  title: string;
  description: string;
  subtitle: string;
  subtitle2: string;
  description2: string;
  bgColor: string;
  comparisonStatus: boolean;
}) => {
  return (
    <div
      className={`p-4 md:p-8 rounded-md flex flex-col md:flex-row items-start md:items-center justify-between bg-${bgColor} text-${comparisonStatus ? "black" : "white"}`}
    >
      <Text as="h1">{title}</Text>
      <div className="flex flex-col gap-2">
        <Text as="small">{subtitle}</Text>
        <Text as="h6" weight={"semibold"}>
          {subtitle2}
        </Text>
      </div>
      <div className="">
        <Text as="small">{description}</Text>
        <Text as="small">{description2}</Text>
      </div>
    </div>
  );
};

const ComparisonSection = () => {
  const [comparisonStatus, setComparisonStatus] = useState<boolean>(true);

  return (
    <div
      className={`${comparisonStatus ? "bg-gray-10 " : "bg-black bg-[url('/images/bg-home.png')] bg-cover bg-center bg-no-repeat"}`}
    >
      <Container className="flex flex-col py-[3vh] md:py-[7vh] items-center gap-8">
        <div className="flex flex-col items-center w-full">
          <Text as="h2" textColor={comparisonStatus ? "black" : "white"}>
            From manual toil
          </Text>
          <div className="flex items-center gap-1 md:gap-2">
            <Text as="h2" textColor={comparisonStatus ? "black" : "white"}>
              to
            </Text>
            <Text as="h2" textColor={comparisonStatus ? "primary" : "white"}>
              AI-scale leverage
            </Text>
          </div>
          <Text
            textColor={comparisonStatus ? "black" : "white"}
            align={"center"}
            className="mt-2"
          >
            Get rid of tedious cloud cost management with automation that works
            in real time.
          </Text>
        </div>
        <div className="flex items-center">
          <Button
            variant="outline-primary"
            className={`rounded-r-none ${comparisonStatus ? "bg-white" : "bg-gray-90 text-white"}`}
            textColor="black"
            weight="semibold"
            onClick={() => setComparisonStatus(false)}
          >
            Without NeevCloud
          </Button>
          <Button
            className={`rounded-l-none ${comparisonStatus ? "" : "bg-gray-100 text-white"}`}
            onClick={() => setComparisonStatus(true)}
          >
            With NeevCloud
          </Button>
        </div>
        <div className="mt-4 flex flex-col md:flex-row items-center gap-4 w-full">
          <div
            className={`flex md:flex-2 flex-col ${comparisonStatus ? "bg-primary" : "bg-gray-100"} p-4 md:p-8 rounded-md w-full gap-4`}
          >
            <ComparisonCard
              title="73%"
              subtitle="Cost Reduction"
              subtitle2="vs. hyperscale on-demand"
              description="Committed capacity plus idle reclamation."
              description2="Your finance team will notice."
              bgColor={comparisonStatus ? "white" : "gray-90"}
              comparisonStatus={comparisonStatus}
            />
            <ComparisonCard
              title="10x"
              subtitle="Throughput"
              subtitle2="Faster iteration on large runs"
              description="Deterministic interconnect eliminates"
              description2="straggler nodes in distributed training."
              bgColor={comparisonStatus ? "white" : "gray-90"}
              comparisonStatus={comparisonStatus}
            />
            <ComparisonCard
              title="30%"
              subtitle="Low Latency"
              subtitle2="Guaranteed Reduction"
              description="Removing the limits of geography and"
              description2="latency to redefine how AI is deployed and scaled."
              bgColor={comparisonStatus ? "white" : "gray-90"}
              comparisonStatus={comparisonStatus}
            />
          </div>
          <div className="flex flex-col md:flex-1 w-full">
            <Text
              as="h3"
              weight="semibold"
              textColor={comparisonStatus ? "black" : "white"}
            >
              With NeevCloud
            </Text>
            <Text
              as="h3"
              weight={"normal"}
              textColor={comparisonStatus ? "black" : "white"}
            >
              AI-First by design
            </Text>
            <Text
              className="mt-8"
              textColor={comparisonStatus ? "black" : "white"}
            >
              Purpose-built for AI workloads
            </Text>
            <Divider
              orientation="horizontal"
              className={`${comparisonStatus ? "bg-black-10" : "bg-white-10"} my-4`}
            />
            <Text textColor={comparisonStatus ? "black" : "white"}>
              Purpose-built for AI workloads
            </Text>
            <Divider
              orientation="horizontal"
              className={`${comparisonStatus ? "bg-black-10" : "bg-white-10"} my-4`}
            />
            <Text textColor={comparisonStatus ? "black" : "white"}>
              Purpose-built for AI workloads
            </Text>
            <Divider
              orientation="horizontal"
              className={`${comparisonStatus ? "bg-black-10" : "bg-white-10"} my-4`}
            />
            <Text textColor={comparisonStatus ? "black" : "white"}>
              Purpose-built for AI workloads
            </Text>
            <Divider
              orientation="horizontal"
              className={`${comparisonStatus ? "bg-black-10" : "bg-white-10"} my-4`}
            />
            <Text textColor={comparisonStatus ? "black" : "white"}>
              Purpose-built for AI workloads
            </Text>
            <Divider
              orientation="horizontal"
              className={`${comparisonStatus ? "bg-black-10" : "bg-white-10"} my-4`}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ComparisonSection;
