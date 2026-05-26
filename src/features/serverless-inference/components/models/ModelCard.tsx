import { LogOut } from "lucide-react";
import Image from "next/image";
import { Button, Divider, Text } from "@/shared/ui-lib";
import type { ModelCardData } from "@/features/serverless-inference/types/models-section.types";

type ModelCardProps = {
  model: ModelCardData;
};

const ModelCard = ({ model }: ModelCardProps) => {
  const { name, provider, icon, tags, context, price, params } = model;

  return (
    <article className="relative bg-gray-10 rounded-lg p-4 md:p-6.25 flex flex-col gap-5 overflow-hidden">
      <div className="flex gap-5">
        <div className="p-3.25 bg-white rounded-md h-fit">
          <Image src={icon} alt={`${name} logo`} width={35} height={35} />
        </div>
        <div className="flex flex-col justify-between">
          <Text as="h4" weight="semibold" className="text-[22px]">
            {name}
          </Text>
          <Text textColor="black-5">{provider}</Text>
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
          <Text textColor="blue-40">CONTEXT</Text>
          <Text>{context}</Text>
        </div>
        <Divider className="bg-gray-60 h-10" />
        <div className="flex flex-col items-center justify-between">
          <Text textColor="blue-40">PRICE/1M</Text>
          <Text textColor="primary">{price}</Text>
        </div>
        <Divider className="bg-gray-60 h-10" />
        <div className="flex flex-col items-center justify-between">
          <Text textColor="blue-40">PARAMS</Text>
          <Text>{params}</Text>
        </div>
      </div>

      <div className="flex gap-2 justify-between">
        <Button
          className="flex items-center gap-2"
          weight="semibold"
          borderRadius="sm"
        >
          <LogOut size="15" className="font-semibold" aria-hidden="true" />
          Try in Playground
        </Button>
        <Button
          variant="outline"
          textColor="black"
          weight="semibold"
          borderRadius="sm"
        >
          Read Documentation
        </Button>
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
