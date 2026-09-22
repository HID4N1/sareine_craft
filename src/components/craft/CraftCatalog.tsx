"use client";

import { useState } from "react";

import type {
  CraftCategoryFilter,
  CraftPageData,
} from "@/types/craft";

import { CraftCategoriesSection } from "./CraftCategoriesSection/CraftCategoriesSection";
import { CraftCreationsSection } from "./CraftCreationsSection/CraftCreationsSection";

type CraftCatalogProps = {
  categories: CraftPageData["categories"];
  creations: CraftPageData["creations"];
};

export function CraftCatalog({
  categories,
  creations,
}: CraftCatalogProps) {
  const [activeCategory, setActiveCategory] =
    useState<CraftCategoryFilter>("all");

  function handleCategoryChange(category: CraftCategoryFilter) {
    setActiveCategory(category);

    window.requestAnimationFrame(() => {
      document
        .getElementById("creations")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  return (
    <>
      <CraftCategoriesSection
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
      />

      <CraftCreationsSection
        data={creations}
        activeCategory={activeCategory}
      />
    </>
  );
}