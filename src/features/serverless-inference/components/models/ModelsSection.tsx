"use client";
import Container from "@/shared/components/container";
import { Text } from "@/shared/ui-lib";
import { useCallback, useState } from "react";
import ModelCard from "./ModelsCard";
import { MODELS_SECTIONS } from "@/features/serverless-inference/data/models-section-data";

const ModelsSection = () => {
  const [selectedModelTitle, setSelectedModelTitle] = useState<string>("");
  const handleSelect = useCallback((title: string) => {
    setSelectedModelTitle(title);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Centered radial teal glow at top */}
      <div className="absolute top-0 left-1/3 -translate-x-1/2 w-150 h-18 bg-teal-300/60 blur-3xl rounded-full pointer-events-none" />

      <Container className="py-[3vh] md:py-[7vh] relative">
        <Text as="h2" align="center" weight="semibold">
          20+ Models. One Endpoint.
        </Text>
        <Text as="h2" align="center" weight="semibold" textColor="primary">
          Billed in INR
        </Text>
        <Text as="h6" align="center" textColor="black" className="mt-2">
          From Kimi K2 to Llama 3 405B to GLM 4.5, every model runs on
          NeevCloud's GPU clusters in India and
        </Text>
        <Text as="h6" align="center" textColor="black" className="mt-2">
          is served through a unified API. Switch models with a single parameter
          change.
        </Text>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 md:mt-12">
          {MODELS_SECTIONS.map((item) => (
            <ModelCard
              key={item.title}
              {...item}
              isSelected={selectedModelTitle === item.title}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ModelsSection;
