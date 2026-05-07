import Link from "next/link";
import Image from "next/image";
import { Button, Text } from "@/shared/ui-lib";

const gpuData = [
  {
    sku: "rtx-3090",
    vram: "24GB",
    cpu: 24,
    ram: "112GB",
    hourly: "₹48.60",
    s3: "₹48.60",
    s3save: "2%",
    s6: "₹48.60",
    s6save: "7%",
    s12: "₹48.60",
    s12save: "12%",
    status: "notify",
  },
  {
    sku: "a30",
    vram: "24GB",
    cpu: 24,
    ram: "192GB",
    hourly: "₹48.60",
    s3: "₹48.60",
    s3save: "2%",
    s6: "₹48.60",
    s6save: "7%",
    s12: "₹48.60",
    s12save: "12%",
    status: "ready",
  },
  {
    sku: "rtx-5090",
    vram: "32GB",
    cpu: 16,
    ram: "96GB",
    hourly: "₹48.60",
    s3: "₹48.60",
    s3save: "2%",
    s6: "₹48.60",
    s6save: "7%",
    s12: "₹48.60",
    s12save: "12%",
    status: "ready",
  },
  {
    sku: "a100",
    vram: "80GB",
    cpu: 12,
    ram: "125GB",
    hourly: "₹48.60",
    s3: "₹48.60",
    s3save: "2%",
    s6: "₹48.60",
    s6save: "7%",
    s12: "₹48.60",
    s12save: "12%",
    status: "notify",
  },
  {
    sku: "h100",
    vram: "80GB",
    cpu: 20,
    ram: "125GB",
    hourly: "₹48.60",
    s3: "₹48.60",
    s3save: "2%",
    s6: "₹48.60",
    s6save: "7%",
    s12: "₹48.60",
    s12save: "12%",
    status: "notify",
  },
  {
    sku: "h200",
    vram: "141GB",
    cpu: 20,
    ram: "192GB",
    hourly: "₹48.60",
    s3: "₹48.60",
    s3save: "2%",
    s6: "₹48.60",
    s6save: "7%",
    s12: "₹48.60",
    s12save: "12%",
    status: "notify",
  },
];

const features = [
  {
    title: "InfiniBand Networking",
    desc: "High-bandwidth inter-GPU communication",
  },
  { title: "NVMe-Attached Storage", desc: "Fast local storage for datasets" },
  { title: "Pre-Built ML Images", desc: "PyTorch 2.8, TensorFlow, CUDA 12.9" },
  { title: "DDoS Protection", desc: "Included at no additional cost" },
  { title: "India Data Centers", desc: "Complete data sovereignty" },
  { title: "99.9% Uptime SLA", desc: "Enterprise-grade reliability" },
];

const ClusterFeaturesSection = () => {
  return (
    <section
      className="w-full relative overflow-hidden"
      style={{ backgroundColor: "#05080a" }}
    >
      {/* Vector.svg decorative — hidden on mobile to avoid layout noise */}
      <div
        className="absolute w-195 h-137.25 lg:w-350 z-14 hidden md:block"
        style={{ top: "74px" }}
      >
        <Image
          src="/icons/Vector.svg"
          alt=""
          fill
          className="object-contain object-left-top md:w-64 lg:w-80 xl:w-96"
        />
      </div>

      {/* Subtle dark teal glow */}
      <div
        className="absolute pointer-events-none z-0"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "800px",
          height: "420px",
          background:
            "radial-gradient(ellipse 80% 80% at 50% 50%, rgba(0,60,52,0.60) 0%, rgba(0,40,35,0.30) 50%, transparent 75%)",
          filter: "blur(18px)",
        }}
      />

      <div className="relative z-10 flex flex-col items-center gap-8 px-4 sm:px-8 md:px-16 pt-12 sm:pt-16 pb-12 sm:pb-16">
        {/* Headline */}
        <div className="text-center">
          <Text as="h2" className="text-white font-semibold text-4xl">
            Every Workload
          </Text>
          <div className="flex flex-wrap justify-center items-center gap-2 font-semibold text-4xl">
            <Text as="h2" textColor="primary">
              Flat rate.
            </Text>
            <Text as="h2" className="text-white">
              Unmetered.
            </Text>
          </div>
          <Text as="h6" className="text-[#EAF4F4] mt-2">
            Commit and Save. The Longer the Plan, the Lower the Rate.
          </Text>
        </div>

        {/* Terminal wrapper */}
        <div className="w-full max-w-360 relative border border-white/20 rounded-xl">
          <div
            className="relative z-10 rounded-xl overflow-hidden border border-white/10"
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 4px 40px rgba(0,0,0,0.6)",
            }}
          >
            {/* Traffic lights bar */}
            <div
              className="flex items-center gap-2 px-4 py-3 border-b border-white/10"
              style={{ backgroundColor: "#1c1c1e" }}
            >
              <span className="w-3 h-3 rounded-full bg-red-500 flex-shrink-0" />
              <span className="w-3 h-3 rounded-full bg-yellow-400 flex-shrink-0" />
              <span className="w-3 h-3 rounded-full bg-green-500 flex-shrink-0" />
              <span
                className="ml-4 text-white/30 font-mono"
                style={{ fontSize: "12px" }}
              >
                ~ gpu-pricing — bash — 80×24
              </span>
            </div>

            {/* Terminal body — horizontally scrollable on mobile */}
            <div
              className="font-mono relative"
              style={{ backgroundColor: "#0d1117" }}
            >
              {/* Teal glow inside terminal */}
              <div
                className="absolute pointer-events-none"
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "75%",
                  height: "70%",
                  background:
                    "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(0,167,138,0.18) 0%, rgba(0,130,100,0.09) 45%, transparent 72%)",
                  filter: "blur(28px)",
                  zIndex: 0,
                }}
              />

              {/* Scrollable content */}
              <div
                className="relative z-10 overflow-x-auto px-4 sm:px-5 py-5"
                style={{ WebkitOverflowScrolling: "touch" }}
              >
                <p className="mb-1 text-white text-base whitespace-nowrap">
                  {">"} gpu list --pricing --currency=INR
                </p>
                <p
                  className="text-white/30 mb-4 whitespace-nowrap"
                  style={{ fontSize: "13px" }}
                >
                  {
                    "// fetched 6 SKUs · sorted by hourly rate · all amounts ₹/hr/gpu"
                  }
                </p>

                {/* Table — min-width keeps it readable, outer div scrolls */}
                <table
                  className="w-full text-left border-collapse"
                  style={{ minWidth: "760px" }}
                >
                  <thead>
                    <tr className="text-white/30 text-base">
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
                        <td className="pr-4 py-1.5 text-primary whitespace-nowrap text-base">
                          {gpu.sku}
                        </td>
                        <td className="pr-4 py-1.5 text-white/30 text-base">
                          {gpu.vram}
                        </td>
                        <td className="pr-4 py-1.5 text-white/30 text-base">
                          {gpu.cpu}
                        </td>
                        <td className="pr-4 py-1.5 text-white/30 text-base">
                          {gpu.ram}
                        </td>
                        <td className="pr-4 py-1.5 text-white text-base">
                          {gpu.hourly}
                        </td>
                        <td className="pr-4 py-1.5 text-white text-base whitespace-nowrap">
                          {gpu.s3}
                          <span
                            className="text-[#58D7A7] pl-10"
                            style={{ fontSize: "12px" }}
                          >
                            save upto {gpu.s3save}
                          </span>
                        </td>
                        <td className="pr-4 py-1.5 text-white text-base whitespace-nowrap">
                          {gpu.s6}
                          <span
                            className="text-[#58D7A7] pl-10"
                            style={{ fontSize: "12px" }}
                          >
                            save upto {gpu.s6save}
                          </span>
                        </td>
                        <td className="pr-4 py-1.5 text-white text-base whitespace-nowrap">
                          {gpu.s12}
                          <span
                            className="text-[#58D7A7] pl-8"
                            style={{ fontSize: "12px" }}
                          >
                            save upto {gpu.s12save}
                          </span>
                        </td>
                        <td className="py-1.5">
                          {gpu.status === "ready" ? (
                            <span className="text-primary whitespace-nowrap">
                              ·ready
                            </span>
                          ) : (
                            <span
                              className="whitespace-nowrap"
                              style={{ color: "#D29922" }}
                            >
                              notify
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <p className="text-white/20 mt-7 border-t pt-4 border-white/10 text-base whitespace-nowrap">
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
            <Button className="font-semibold bg-[#00A78A] w-full sm:w-auto">
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
                <div
                  className="w-5 h-5 rounded-sm flex-shrink-0"
                  style={{ backgroundColor: "#D9D9D9" }}
                />
                <Text as="h5" className="text-white font-semibold text-2xl">
                  {f.title}
                </Text>
                <Text as="h6" className="text-[#EAF4F4]">
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
