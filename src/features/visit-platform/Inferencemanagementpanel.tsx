import { Search } from "@/shared/icons/lucide-icon-map";
import { Text } from "@/shared/ui-lib";
import ConsoleMockupCard from "./components/Consolemockupcard";
import { INFERENCE_MODELS, INFERENCE_TAGS } from "./data/console-section.data";

const InferenceManagementPanel = () => {
  return (
    <ConsoleMockupCard title="LAUNCH GPU INSTANCE">
      <div className="px-7.5 py-5">
        <div
          className="flex items-center gap-2.5 border border-gray-01 rounded-md px-3.75 py-2.25 mb-3"
          role="search"
        >
          <Search size={16} className="text-gray-03" aria-hidden="true" />
          <span className="text-gray-03 text-sm">Search 20+ models...</span>
        </div>
      </div>
      <div className="flex gap-1.25 px-7.5 flex-wrap">
        {INFERENCE_TAGS.map((f) => (
          <Text
            as="small"
            key={f}
            textColor={f === "All" ? "white" : "gray-04"}
            className={`px-2.5 py-0.75 rounded-full ${f === "All" ? "bg-black" : "bg-gray-01"}`}
          >
            {f}
          </Text>
        ))}
      </div>

      <div className="flex flex-col divide-y divide-gray-100 mt-5">
        {INFERENCE_MODELS.map((model, i) => (
          <div
            key={model.name}
            className={`flex items-center justify-between px-6.25 py-3.75 ${
              i === 0
                ? "border-l-3 border-l-primary [background:linear-gradient(to_right,#e6f7f5,transparent)]"
                : ""
            } ${i < INFERENCE_MODELS.length - 1 ? "border-b border-b-gray-01" : ""}`}
          >
            <div>
              <Text as="h4" weight="semibold">
                {model.name}
              </Text>
              <Text textColor="black/82" as="h6">
                {model.provider} · {model.context}
              </Text>
            </div>
            <Text as="h6" weight="semibold" textColor="primary-90">
              {model.price}
            </Text>
          </div>
        ))}
      </div>
    </ConsoleMockupCard>
  );
};

export default InferenceManagementPanel;
