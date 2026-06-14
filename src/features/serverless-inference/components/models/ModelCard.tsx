import { LogOut } from "@/shared/icons/lucide-icon-map";
import Image from "next/image";
import { Divider, Text, LinkComponent } from "@/shared/ui-lib";
import { ModelCardData } from "../../types/models-section.types";
import { EXTERNAL_LINKS } from "@/shared/constants/external-links.constants";

type ModelCardProps = {
  model: ModelCardData;
};

const ModelCard = ({ model }: ModelCardProps) => {
  const { name, provider, icon, tags, context, price, params } = model;

  return (
    <article className="relative bg-cloud-gray rounded-lg p-4 md:p-6.25 flex flex-col gap-5 overflow-hidden">
      <div className="flex gap-5">
        <div className="p-3.25 bg-white rounded-md h-fit">
          <Image src={icon} alt={`${name} logo`} width={35} height={35} />
        </div>
        <div className="flex flex-col justify-between">
          <Text as="h4" weight="semibold" className="text-[22px]">
            {name}
          </Text>
          <Text textColor="black/82">{provider}</Text>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.25">
        {tags.map((tag) => (
          <Text
            key={tag.name}
            className={`bg-${tag.color} px-2.5 py-0.75 rounded-full text-[10px]`}
          >
            {tag.name}
          </Text>
        ))}
      </div>

      <div className="bg-white rounded-md py-2.5 px-9 flex justify-between gap-4 z-1 relative">
        <div className="flex flex-col items-center justify-between">
          <Text textColor="gray-02">CONTEXT</Text>
          <Text>{context}</Text>
        </div>
        <Divider className="bg-gray-01 h-10" />
        <div className="flex flex-col items-center justify-between">
          <Text textColor="gray-02">PRICE/1M</Text>
          <Text textColor="primary">{price}</Text>
        </div>
        <Divider className="bg-gray-01 h-10" />
        <div className="flex flex-col items-center justify-between">
          <Text textColor="gray-02">PARAMS</Text>
          <Text>{params}</Text>
        </div>
      </div>

      <div className="flex gap-2 justify-between">
        <LinkComponent
          href={EXTERNAL_LINKS.aiInferencePlayground}
          target="_blank"
          className="flex items-center gap-2"
        >
          <LogOut size="15" className="font-semibold" aria-hidden="true" />
          Try in Playground
        </LinkComponent>
        <LinkComponent
          href={EXTERNAL_LINKS.documentation}
          target="_blank"
          variant="outline"
          textColor="black"
          weight="semibold"
          borderRadius="sm"
        >
          Read Documentation
        </LinkComponent>
      </div>

      <div className="absolute bottom-0 right-0 opacity-80 pointer-events-none">
        <Image
          src="/icons/green-logo.svg"
          alt=""
          aria-hidden="true"
          width={100}
          height={100}
        />
      </div>
    </article>
  );
};

export default ModelCard;
