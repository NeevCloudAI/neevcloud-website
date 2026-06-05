import ConsoleMockupCard from "../console/Consolemockupcard";
import {
  INFERENCE_MODELS,
  INFERENCE_TAGS,
} from "../../data/console-section.data";
import { Search } from "lucide-react";
import { Text } from "@/shared/ui-lib";

/**
 * Right-panel mockup for the "Inference Management" tab.
 * Shows model search, filter tags, and a list of available models with pricing.
 */
const InferenceManagementPanel = () => {
  return (
    <ConsoleMockupCard title="LAUNCH GPU INSTANCE">
      {/* Search */}
     
      <div className="px-7.5 py-5">
        <div
          className="flex items-center gap-2.5 border border-gray-60 rounded-md px-3.75 py-2.25 mb-3"
          role="search"
        >
          <Search size={16} className="text-gray-85" aria-hidden="true" />
          <span className="text-gray-85 text-sm">Search 20+ models...</span>
        </div>
      </div>
      {/* Tags */}
      <div className="flex gap-1.25 px-7.5 flex-wrap">
        {INFERENCE_TAGS.map((f, i) => (
          <Text
            as="small"
            key={f}
            className={`px-2.5 py-0.75 rounded-full cursor-pointer font-medium ${f === "All" ? "bg-black text-white" : "bg-gray-60 text-gray-75"}`}
          >
            {f}
          </Text>
        ))}
      </div>

      {/* Model list */}
      <div className="flex flex-col divide-y divide-gray-100 mt-5">
        {INFERENCE_MODELS.map((model, i) => (
          <div
            key={model.name}
            className={`flex items-center justify-between px-6.25 py-3.75 ${
              i === 0
                ? "border-l-3 border-l-primary [background:linear-gradient(to_right,#e6f7f5,transparent)]"
                : ""
            } ${i < INFERENCE_MODELS.length - 1 ? "border-b border-b-gray-60" : ""}`}
          >
            <div>
              <Text as="h4" weight="semibold">
                {model.name}
              </Text>
              <Text textColor="black-5" as="h6">
                {model.provider} · {model.context}
              </Text>
            </div>
            <Text as="h6" weight="semibold" textColor="primary-70">
              {model.price}
            </Text>
          </div>
        ))}
      </div>
    </ConsoleMockupCard>
  );
};

export default InferenceManagementPanel;
