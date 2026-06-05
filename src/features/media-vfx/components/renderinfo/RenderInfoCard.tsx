import { Text } from "@/shared/ui-lib";
import { CardRow } from "../../types/four-steps-section.types";

interface RenderInfoCardProps {
  rows: CardRow[];
  leftColumnWidth?: string;
  variant?: "config" | "download";
}

const RenderInfoCard = ({
  rows,
  leftColumnWidth = "w-36",
  variant = "download",
}: RenderInfoCardProps) => {
  return (
    <div className="bg-black rounded-xl p-4 md:px-6.25 md:py-5">
      <div className="flex flex-col gap-1.25">
        {rows.map((row, index) => (
          <div
            key={index}
            className={`bg-gray-90 rounded-lg p-4 md:px-5 md:py-2.5 flex items-center ${
              variant === "config" ? "justify-start" : "justify-between"
            }`}
          >
            {variant === "config" ? (
              <>
                <div className={`${leftColumnWidth} shrink-0`}>
                  <Text
                    as="h6"
                    fontFamily="spaceMono"
                    textColor={row.leftColor || "gray-85"}
                  >
                    {row.left}
                  </Text>
                </div>

                <Text
                  fontFamily="spaceMono"
                  textColor={row.rightColor || "white"}
                >
                  {row.right}
                </Text>
              </>
            ) : (
              <>
                <div className="flex items-center gap-3">
                  {row.icon && (
                    <Text
                      fontFamily="spaceMono"
                      textColor={row.iconColor || "gray-85"}
                    >
                      {row.icon}
                    </Text>
                  )}

                  <Text
                    fontFamily="spaceMono"
                    textColor={row.leftColor || "white"}
                  >
                    {row.left}
                  </Text>
                </div>

                <Text
                  fontFamily="spaceMono"
                  textColor={row.rightColor || "gray-85"}
                >
                  {row.right}
                </Text>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RenderInfoCard;
