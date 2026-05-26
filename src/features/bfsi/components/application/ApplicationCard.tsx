import { cn } from "@/lib/utils";
import { Text } from "@/shared/ui-lib";
import Image from "next/image";
import { ApplicationCardProps } from "../../types/application-section.types";

const ApplicationCard = ({
  label,
  title,
  description,
  icon,
  theme = "light",
  image,
  className,
}: ApplicationCardProps) => {
  const isLight = theme === "light";

  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-md p-4 md:p-10",
        isLight ? "bg-white" : "bg-black",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-2.5">
        <div
          className={cn(
            "w-fit rounded-md p-3.75",
            isLight ? "bg-gray-10" : "bg-gray-90",
          )}
        >
          <Image src={icon} alt="" width={30} height={30} aria-hidden="true" />
        </div>
        <Text
          as="h5"
          weight="semibold"
          textColor={isLight ? "black" : "white"}
          className="shrink-0 uppercase tracking-wide"
        >
          {label}
        </Text>
      </div>
      <Text
        as="h3"
        weight="semibold"
        className="mt-5"
        textColor={isLight ? "black" : "white"}
      >
        {title}
      </Text>
      <Text as="h6" className="mt-2.5" textColor={isLight ? "black" : "white"}>
        {description}
      </Text>
      {image ? (
        <div className="relative mt-6 w-full flex-1 md:mt-8">
          <Image
            src={image}
            alt=""
            width={640}
            height={360}
            className="h-auto w-full object-contain"
            aria-hidden="true"
          />
        </div>
      ) : null}
    </article>
  );
};

export default ApplicationCard;
