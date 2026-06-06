import { Divider, Text } from "@/shared/ui-lib";
import { DASHBOARD_STATS, DASHBOARD_TAGS } from "./data/console-section.data";
import ConsoleMockupCard from "./components/Consolemockupcard";

const DashboardPanel = () => {
  return (
    <ConsoleMockupCard title="DASHBOARD">
      <div className="px-4 md:px-7.5 mb-5 mt-2.5">
        <Divider orientation="horizontal" />
      </div>
      <div className="grid grid-cols-3 gap-4 mb-4 px-7.5 ">
        {DASHBOARD_STATS.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col gap-1 rounded-lg bg-black p-3.75"
          >
            <Text
              as="h6"
              className="font-medium uppercase tracking-widest"
              textColor="gray-75"
            >
              {stat.label}
            </Text>
            <Text as="h2" className="font-semibold mt-1.25" textColor="white">
              {stat.value}
            </Text>
            <Text textColor="primary">{stat.change}</Text>
          </div>
        ))}
      </div>

      <div className="relative h-32 w-full overflow-hidden rounded-lg">
        <svg
          viewBox="0 0 800 160"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full"
        >
          <defs>
            <linearGradient id="waveGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00A78B" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#00A78B" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M0,160 L0,110 C100,110 150,30 250,40 C350,50 380,100 450,95 C520,90 580,20 700,30 L800,35 L800,160 Z"
            fill="url(#waveGrad)"
          />
          <path
            d="M0,110 C100,110 150,30 250,40 C350,50 380,100 450,95 C520,90 580,20 700,30 L800,35"
            fill="none"
            stroke="#59D8A7"
            strokeWidth="3"
          />
        </svg>
      </div>

      <div className="px-4 md:px-7.5">
        <Divider orientation="horizontal" className="mb-5 mt-2.5" />
      </div>

      <div className="mt-5 pb-7.5 flex flex-wrap gap-1.25 px-7.5">
        {DASHBOARD_TAGS.map((tag) => (
          <Text
            as="small"
            key={tag}
            className="rounded-full bg-primary px-2.5 py-0.75"
            textColor="white"
          >
            {tag}
          </Text>
        ))}
      </div>
    </ConsoleMockupCard>
  );
};

export default DashboardPanel;
