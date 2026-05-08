import Link from "next/link";
import Image from "next/image";
import { Button, Text } from "@/shared/ui-lib";
import { gpuData, features } from "@/lib/clusterData";

const ClusterFeaturesSection = () => {
  return (
    <section className="w-full relative overflow-hidden bg-surface-dark">
      {/* Vector.svg decorative — hidden on mobile to avoid layout noise */}
      <div className="absolute w-195 h-137.25 lg:w-350 z-14 hidden md:block top-[74px]">
        <Image
          src="/icons/Vector.svg"
          alt=""
          fill
          className="object-contain object-left-top md:w-64 lg:w-80 xl:w-96"
        />
      </div>

      {/* Section-level teal glow */}
      <div className="absolute pointer-events-none z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[420px] bg-glow-teal blur-[18px]" />

      <div className="relative z-10 flex flex-col items-center gap-8 px-4 sm:px-8 md:px-16 pt-12 sm:pt-16 pb-12 sm:pb-16">
        {/* Headline */}
        <div className="text-center">
          <Text as="h2" className="text-white font-semibold">
            Every Workload
          </Text>
          <div className="flex flex-wrap justify-center items-center gap-2 font-semibold">
            <Text as="h2" textColor="primary">
              Flat rate.
            </Text>
            <Text as="h2" className="text-white">
              Unmetered.
            </Text>
          </div>
          <Text as="h6" className="text-gray-10 mt-2">
            Commit and Save. The Longer the Plan, the Lower the Rate.
          </Text>
        </div>

        {/* Terminal wrapper */}
        <div className="w-full max-w-360 relative border border-white/20 rounded-xl">
          <div className="relative z-10 rounded-xl overflow-hidden terminal-card">
            {/* Traffic lights bar */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-surface-darker">
              <span className="w-3 h-3 rounded-full bg-red-500 flex-shrink-0" />
              <span className="w-3 h-3 rounded-full bg-yellow-400 flex-shrink-0" />
              <span className="w-3 h-3 rounded-full bg-green-500 flex-shrink-0" />
              <span className="ml-4 text-white/30 font-mono text-xs">
                ~ gpu-pricing — bash — 80×24
              </span>
            </div>

            {/* Terminal body — horizontally scrollable on mobile */}
            <div className="font-mono relative bg-surface-terminal">
              {/* Inner teal glow */}
              <div className="absolute pointer-events-none z-0 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[70%] bg-glow-terminal blur-[28px]" />

              {/* Scrollable content */}
              <div className="relative z-10 overflow-x-auto px-4 sm:px-5 py-5 [-webkit-overflow-scrolling:touch]">
                <p className="mb-1 text-white whitespace-nowrap">
                  {">"} gpu list --pricing --currency=INR
                </p>
                <p className="text-white/30 mb-4 whitespace-nowrap text-xs">
                  {
                    "// fetched 6 SKUs · sorted by hourly rate · all amounts ₹/hr/gpu"
                  }
                </p>

                {/* Table — min-width keeps it readable, outer div scrolls */}
                <table className="w-full text-left border-collapse min-w-[760px]">
                  <thead>
                    <tr className="text-white/30">
                      <th className="pr-4 pb-2 font-normal">sku</th>
                      <th className="pr-4 pb-2 font-normal">vram</th>
                      <th className="pr-4 pb-2 font-normal">cpu</th>
                      <th className="pr-4 pb-2 font-normal">ram</th>
                      <th className="pr-4 pb-2 font-normal">hourly</th>
                      <th className="pr-4 pb-2 font-normal">
                        3-months <span className="pl-2">commitment</span>
                      </th>
                      <th className="pr-4 pb-2 font-normal">
                        6-months <span className="pl-2">commitment</span>
                      </th>
                      <th className="pr-4 pb-2 font-normal">
                        1-year <span className="pl-2">commitment</span>
                      </th>
                      <th className="pb-2 font-normal">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {gpuData.map((gpu) => (
                      <tr
                        key={gpu.sku}
                        className="border-t border-white/5 border-b"
                      >
                        <td className="pr-4 py-1.5 text-primary whitespace-nowrap">
                          {gpu.sku}
                        </td>
                        <td className="pr-4 py-1.5 text-white/30">
                          {gpu.vram}
                        </td>
                        <td className="pr-4 py-1.5 text-white/30">{gpu.cpu}</td>
                        <td className="pr-4 py-1.5 text-white/30">{gpu.ram}</td>
                        <td className="pr-4 py-1.5 text-white">{gpu.hourly}</td>
                        <td className="pr-4 py-1.5 text-white whitespace-nowrap">
                          {gpu.s3}
                          <span className="text-success pl-10 text-xs">
                            save upto {gpu.s3save}
                          </span>
                        </td>
                        <td className="pr-4 py-1.5 text-white whitespace-nowrap">
                          {gpu.s6}
                          <span className="text-success pl-10 text-xs">
                            save upto {gpu.s6save}
                          </span>
                        </td>
                        <td className="pr-4 py-1.5 text-white whitespace-nowrap">
                          {gpu.s12}
                          <span className="text-success pl-8 text-xs">
                            save upto {gpu.s12save}
                          </span>
                        </td>
                        <td className="py-1.5">
                          {gpu.status === "ready" ? (
                            <span className="text-primary whitespace-nowrap">
                              ·ready
                            </span>
                          ) : (
                            <span className="text-warning whitespace-nowrap">
                              notify
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <p className="text-white/20 mt-7 border-t pt-4 border-white/10 whitespace-nowrap text-xs">
                  {
                    "// reserved plans bill for full window · run `gpu calc <sku> --hours=N` to estimate"
                  }
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Buttons — stack on very small screens */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          <Link href="#" className="w-full sm:w-auto">
            <Button className="font-semibold bg-primary w-full sm:w-auto">
              View Complete Pricing
            </Button>
          </Link>
          <Link href="#" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="text-black bg-white font-semibold w-full sm:w-auto"
            >
              Contact for Custom Plans
            </Button>
          </Link>
        </div>

        {/* Every Instance Includes */}
        <div className="w-full max-w-360 mt-4">
          <div className="text-center mb-8">
            <div className="flex flex-wrap justify-center items-center gap-2">
              <Text as="h2" className="text-white">
                Every Instance
              </Text>
              <Text as="h2" textColor="primary">
                Includes.
              </Text>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-lg p-6 flex flex-col gap-3 backdrop-blur-[20px] bg-white/5 border border-white/10"
              >
                <div className="w-5 h-5 rounded-sm flex-shrink-0 bg-gray-50" />
                <Text as="h5" className="text-white font-semibold">
                  {f.title}
                </Text>
                <Text as="h6" className="text-gray-10">
                  {f.desc}
                </Text>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClusterFeaturesSection;
