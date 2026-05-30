import { cn } from "@/lib/utils";
import type { ApplicationCardProps } from "@/shared/types/application-card.types";
import { Text } from "@/shared/ui-lib";
import Image from "next/image";

const ApplicationCard = ({
  label,
  title,
  description,
  icon,
  theme = "light",
  image,
  className,
  imageSpacing,
}: ApplicationCardProps) => {
  return (
    <article
      className={cn(
        "flex h-full flex-col rounded-md",
        image ? "" : "p-4 md:p-10",
        theme === "light"
          ? "bg-white"
          : theme === "dark"
            ? "bg-black"
            : "bg-gray-10",
        className
      )}
    >
      <div
        className={cn(
          "flex items-start justify-between gap-2.5",
          image ? "p-4 md:p-10 pb-0 md:pb-0" : ""
        )}
      >
        <div
          className={cn(
            "h-15 w-15 rounded-md flex items-center justify-center",
            theme === "light"
              ? "bg-gray-10"
              : theme === "dark"
                ? "bg-gray-90"
                : "bg-white"
          )}
        >
          <Image src={icon} alt="" width={30} height={30} aria-hidden="true" />
        </div>
        <Text
          as="h5"
          textColor={
            theme === "light" ? "black" : theme === "dark" ? "white" : "black"
          }
          className="shrink-0 uppercase tracking-wide"
        >
          {label}
        </Text>
      </div>
      <Text
        as="h3"
        weight="semibold"
        className={cn("mt-5", image ? "px-4 md:px-10" : "")}
        textColor={
          theme === "light" ? "black" : theme === "dark" ? "white" : "black"
        }
      >
        {title}
      </Text>
      <Text
        as="h6"
        className={cn("mt-2.5", image ? "px-4 md:px-10" : "")}
        textColor={
          theme === "light" ? "black" : theme === "dark" ? "white" : "black"
        }
      >
        {description}
      </Text>
      {image ? (
        // <div className="relative mt-5 w-full flex-1 ">
        <div
          className={cn(
            "relative mt-5 w-full flex-1",
            imageSpacing
              ? "flex flex-col justify-end overflow-hidden rounded-b-md"
              : ""
          )}
        >
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
