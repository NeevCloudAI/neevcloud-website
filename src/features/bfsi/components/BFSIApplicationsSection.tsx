import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { BFSI_CARDS } from "../data/bfsi-applications.data";
import BFSICard from "./BFSICard";

export default function BFSIApplicationsSection() {
  const [flagship, ...rest] = BFSI_CARDS;
  const topRight = rest.slice(0, 2);
  const bottomRow = rest.slice(2);

  return (
    <section className="relative bg-gray-10 py-[3vh] md:py-[10vh]">
      <Container className="flex flex-col items-center justify-center gap-8 w-full">
        {/* Teal gradient top-center */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[550px] h-15 bg-teal-300/60 blur-3xl rounded-full pointer-events-none" />

        {/* Heading */}
        <div className="text-center">
          <Text as="h2" weight="semibold">
            <Text as="span" variant="h2" textColor="primary" weight="semibold">
              BFSI applications
            </Text>{" "}
            on NeevCloud.
          </Text>
          <Text
            as="h6"
            align="center"
            textColor="black"
            className="mt-2 max-w-2xl"
          >
            Real workloads from real institutions, fraud, risk, trading, claims,
            and compliance, running on GPU infrastructure with data sovereignty.
          </Text>
        </div>

        {/* Card grids constrained */}
        <div className="w-full max-w-6xl mx-auto flex flex-col gap-4">
          {/* Top grid: flagship left, 2 cards stacked right */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="md:row-span-2">
              <BFSICard {...flagship} />
            </div>
            {topRight.map((card) => (
              <BFSICard key={card.id} {...card} />
            ))}
          </div>

          {/* Bottom row: 3 equal cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {bottomRow.map((card) => (
              <BFSICard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
