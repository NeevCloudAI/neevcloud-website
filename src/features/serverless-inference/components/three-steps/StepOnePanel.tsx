import Image from "next/image";
import { Search } from "lucide-react";
import { Text } from "@/shared/ui-lib";
import {
  STEP_ONE_FILTERS,
  STEP_ONE_MODELS,
} from "../../data/three-steps-section.data";

const StepOnePanel = () => {
  return (
    <div className="bg-white rounded-xl w-full relative overflow-hidden h-125">
      <div className="absolute bottom-0 right-0 pointer-events-none select-none opacity-15">
        <Image
          src="/icons/logo.svg"
          alt=""
          aria-hidden="true"
          width={170}
          height={170}
          style={{ filter: "brightness(0)" }}
        />
      </div>

      <div className="p-6.25 pb-5">
        <div
          className="flex items-center gap-2.5 border border-gray-60 rounded-md px-3.75 py-2.25 mb-3"
          role="search"
        >
          <Search size={16} className="text-gray-85" aria-hidden="true" />
          <span className="text-gray-85 text-sm">Search 20+ models...</span>
        </div>
      </div>

      <div className="flex gap-1.25 px-4 flex-wrap">
        {STEP_ONE_FILTERS.map((f) => (
          <Text
            as="small"
            key={f}
            className={`px-2.5 py-0.75 rounded-full cursor-pointer font-medium ${f === "All" ? "bg-black text-white" : "bg-gray-60 text-gray-75"}`}
          >
            {f}
          </Text>
        ))}
      </div>

      <div className="flex flex-col divide-y divide-gray-100 mt-5 ">
        {STEP_ONE_MODELS.map((m, i) => (
          <div
            key={m.name}
            className={`flex items-center justify-between px-6.25 py-3.75 ${
              i === 0
                ? "border-l-3 border-l-primary border-b border-b-gray-200 [background:linear-gradient(to_right,#e6f7f5,transparent)]"
                : "border-b border-b-gray-60"
            }`}
          >
            <div>
              <Text as="h4" weight="semibold">
                {m.name}
              </Text>
              <Text textColor="black-5" as="h6">
                {m.meta}
              </Text>
            </div>
            <Text as="h6" weight="semibold" textColor="primary-70">
              {m.price}
            </Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StepOnePanel;
