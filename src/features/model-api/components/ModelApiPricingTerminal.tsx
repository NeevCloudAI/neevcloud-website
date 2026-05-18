import { Text } from "@/shared/ui-lib";
import {
  TERMINAL_LINES,
  PRICING_CATEGORIES,
  TERMINAL_FOOTER_LINES,
} from "../data/model-api-pricing";

const colorMap: Record<string, string> = {
  primary: "text-primary",
  "red-50": "text-red-50",
  yellow: "text-yellow-400",
};

export default function ModelApiPricingTerminal() {
  return (
    <div className="flex-1 bg-gray-110 rounded-lg border border-gray-90 overflow-hidden">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-gray-90">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <Text
          fontFamily="spaceMono"
          textColor="gray-75"
          className="text-xs ml-4"
        >
          model-api-pricing — bash — 80×24
        </Text>
      </div>

      {/* Terminal body */}
      <div className="p-4 md:p-6 flex flex-col gap-3">
        {TERMINAL_LINES.map((line, i) => (
          <Text
            key={i}
            fontFamily="spaceMono"
            textColor={line.type === "comment" ? "gray-75" : "white"}
            className="text-xs md:text-sm"
          >
            {line.text}
          </Text>
        ))}

        {/* Table header */}
        <div className="grid grid-cols-3 gap-4 mt-2">
          {["category", "price / request", "avg latency"].map((h) => (
            <Text
              key={h}
              fontFamily="spaceMono"
              textColor="gray-75"
              className="text-xs"
            >
              {h}
            </Text>
          ))}
        </div>

        {/* Table rows */}
        {/* Table rows */}
        {PRICING_CATEGORIES.map((row) => (
          <div
            key={row.category}
            className="grid grid-cols-3 gap-4 border-b border-gray-125 py-4"
          >
            <Text
              fontFamily="spaceMono"
              className={`text-xs md:text-sm ${colorMap[row.categoryColor]}`}
            >
              {row.category}
            </Text>
            <Text
              fontFamily="spaceMono"
              className={`text-xs md:text-sm ${colorMap[row.priceColor]}`}
            >
              {row.pricePerRequest}
            </Text>
            <Text
              fontFamily="spaceMono"
              textColor="gray-75"
              className="text-xs md:text-sm"
            >
              {row.avgLatency}
            </Text>
          </div>
        ))}

        {/* Footer comments */}
        <div className="mt-4 flex flex-col gap-1">
          {TERMINAL_FOOTER_LINES.map((line, i) => (
            <Text
              key={i}
              fontFamily="spaceMono"
              textColor="gray-75"
              className="text-xs"
            >
              {line.text}
              {line.highlight && (
                <Text
                  as="span"
                  fontFamily="spaceMono"
                  textColor="primary"
                  className="text-xs"
                >
                  {line.highlight}
                </Text>
              )}
              {line.end}
            </Text>
          ))}
        </div>
      </div>
    </div>
  );
}
