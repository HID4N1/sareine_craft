import type {
  CraftCategoryFilter,
  CraftPageCategory,
} from "@/types/craft";

import styles from "./CraftCategoriesSection.module.css";

type CraftCategoriesSectionProps = {
  categories: CraftPageCategory[];
  activeCategory: CraftCategoryFilter;
  onCategoryChange: (category: CraftCategoryFilter) => void;
};

function CategoryIcon({ icon }: { icon: CraftPageCategory["icon"] }) {
  if (icon === "cake") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M8 14h16v12H8zM6 26h20M10 14v-3h12v3" />
        <path d="M13 11V7m6 4V7M13 7c0-1 1-2 1-3 1 1 2 2 2 3m3 0c0-1 1-2 1-3 1 1 2 2 2 3" />
      </svg>
    );
  }

  if (icon === "princess") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="9" r="4" />
        <path d="M11 14c-1 5-3 9-5 12h20c-2-3-4-7-5-12M11 14h10M13 6l3-3 3 3" />
      </svg>
    );
  }

  if (icon === "dress") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path d="M13 4h6l1 7 6 15H6l6-15 1-7Z" />
        <path d="M12 11h8M10 16h12" />
      </svg>
    );
  }

  if (icon === "angel") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="9" r="4" />
        <path d="M10 16c-5-4-8 0-6 5 2 4 6 4 9 1m9-6c5-4 8 0 6 5-2 4-6 4-9 1M12 15l-2 12h12l-2-12M12 4h8" />
      </svg>
    );
  }

  if (icon === "flower") {
    return (
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <circle cx="16" cy="16" r="3" />
        <path d="M16 13c-5-2-5-8 0-9 5 1 5 7 0 9Zm3 3c2-5 8-5 9 0-1 5-7 5-9 0Zm-3 3c5 2 5 8 0 9-5-1-5-7 0-9Zm-3-3c-2 5-8 5-9 0 1-5 7-5 9 0Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      <circle cx="7" cy="16" r="2" />
      <circle cx="16" cy="16" r="2" />
      <circle cx="25" cy="16" r="2" />
    </svg>
  );
}

export function CraftCategoriesSection({
  categories,
  activeCategory,
  onCategoryChange,
}: CraftCategoriesSectionProps) {
  return (
    <section className={styles.section} aria-label="Catégories de créations">
      <div className={styles.categories}>
        {categories.map((category) => {
          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              type="button"
              className={`${styles.category} ${
                isActive ? styles.active : ""
              }`}
              aria-pressed={isActive}
              onClick={() => onCategoryChange(category.id)}
            >
              <span className={styles.icon}>
                <CategoryIcon icon={category.icon} />
              </span>

              <span>{category.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}