"use client";

import { useMemo, useState } from "react";
import { Search } from "@/shared/icons/lucide-icon-map";
import { Text, LinkComponent } from "@/shared/ui-lib";
import type { DevelopersDocumentationSearchClientProps } from "../../types/documentation-section.types";
import Image from "next/image";

const DevelopersDocumentationSearchClient = ({
  categories,
  searchPlaceholder,
  noMatchesLabel,
}: DevelopersDocumentationSearchClientProps) => {
  const [query, setQuery] = useState("");

  const filteredCategories = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return categories.map((category) => ({
        ...category,
        visibleTags: category.tags,
        hasMatches: true,
      }));
    }

    return categories.map((category) => {
      const visibleTags = category.tags.filter((tag) =>
        tag.label.toLowerCase().includes(normalizedQuery)
      );

      return {
        ...category,
        visibleTags,
        hasMatches: visibleTags.length > 0,
      };
    });
  }, [categories, query]);

  return (
    <div className="mt-4 w-full md:mt-12.5">
      <label htmlFor="developers-documentation-search" className="sr-only">
        {searchPlaceholder}
      </label>
      <div className="relative max-w-3xl mx-auto">
        <Search
          className="pointer-events-none absolute top-1/2 left-4 size-5.5 -translate-y-1/2 text-gray-03"
          aria-hidden="true"
        />
        <input
          id="developers-documentation-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={searchPlaceholder}
          className="w-full rounded-lg bg-cloud-gray py-3.75 pr-4 pl-12 text-md text-black outline-none focus:border-primary max-w-3xl"
        />
      </div>

      <ul
        className="m-0 mt-6 list-none p-0 md:mt-12.5"
        aria-live="polite"
        aria-relevant="additions removals"
      >
        {filteredCategories.map((category) => (
          <li
            key={category.id}
            className="grid grid-cols-1 md:grid-cols-[20%_80%] gap-3 border-b border-gray-01 py-5 last:border-b-0"
          >
            <div className="flex items-center gap-2.5">
              <Image src={category.iconSrc} alt="" width={30} height={30} />
              <Text as="h5" weight="semibold" textColor="black">
                {category.title}
              </Text>
            </div>

            {category.hasMatches ? (
              <ul className="m-0 flex list-none flex-wrap justify-start gap-2 p-0 md:flex-1 ml-10">
                {category.visibleTags.map((tag) => (
                  <li key={tag.id}>
                    <LinkComponent
                      href={tag.href}
                      target="_blank"
                      variant="ghost"
                      spacing="xs"
                      weight="medium"
                      className="rounded-md text-gray-02 bg-cloud-gray px-3 py-1.5"
                    >
                      {tag.label}
                    </LinkComponent>
                  </li>
                ))}
              </ul>
            ) : (
              <Text as="h6" textColor="gray-03">
                {noMatchesLabel}
              </Text>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DevelopersDocumentationSearchClient;
