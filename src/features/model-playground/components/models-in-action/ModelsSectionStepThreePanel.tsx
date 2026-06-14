import { CircleCheck } from "@/shared/icons/lucide-icon-map";
import { Text } from "@/shared/ui-lib";
import ModelsSectionLiveBadge from "./ModelsSectionLiveBadge";
import ModelsSectionPanelLogo from "./ModelsSectionPanelLogo";

const ModelsSectionStepThreePanel = () => {
  return (
    <div className="relative bg-white rounded-xl w-full shadow-sm p-4 md:p-6.25 h-140">
      <ModelsSectionPanelLogo />
      <div className="flex items-center justify-between">
        <Text as="h5" weight="semibold">
          IDEA → PRODUCTION
        </Text>
        <ModelsSectionLiveBadge />
      </div>

      <div className="flex flex-col gap-2.5 mt-7.5">
        <div className="bg-cloud-gray p-5 rounded-xl flex items-center gap-2.5">
          <CircleCheck size={24} className="text-primary" aria-hidden="true" />
          <Text as="h6" fontFamily="spaceMono" textColor="gray-05">
            Test prompt in Playground ·
            <Text
              as="span"
              variant="h6"
              fontFamily="spaceMono"
              textColor="primary"
            >
              ~2 min
            </Text>
          </Text>
        </div>

        <div className="bg-cloud-gray p-5 rounded-xl flex items-center gap-2.5">
          <CircleCheck size={24} className="text-primary" aria-hidden="true" />
          <Text as="h6" fontFamily="spaceMono" textColor="gray-05">
            Compare models, pick the winner
          </Text>
        </div>

        <div className="bg-cloud-gray p-5 rounded-xl flex items-center gap-2.5">
          <Text className="bg-deep-blue text-white px-2 py-0.5 rounded-full">
            3
          </Text>
          <Text as="h6" fontFamily="spaceMono" textColor="gray-05">
            Get API key → integrate
          </Text>
        </div>

        <div className="bg-cloud-gray/50 p-5 rounded-xl flex items-center gap-2.5">
          <Text className="bg-gray-01 text-gray-05 px-2 py-0.5 rounded-full">
            4
          </Text>
          <Text as="h6" fontFamily="spaceMono" textColor="gray-05">
            Ship to production
          </Text>
        </div>
      </div>

      <div className="bg-black/80 backdrop-blur-md rounded-xl p-4 md:px-5 md:py-3.75 mt-3.25 space-y-1">
        <Text fontFamily="spaceMono" textColor="gray-05">
          # one line change
        </Text>
        <Text fontFamily="spaceMono" textColor="white">
          {`base_url="https://api.neevcloud.com/v1"`}
        </Text>
        <Text fontFamily="spaceMono" textColor="gray-05">
          {`# ↑ that's it. same billing in INR.`}
        </Text>
      </div>
    </div>
  );
};

export default ModelsSectionStepThreePanel;
