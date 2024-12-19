"use client";

import { Category } from "@/lib/types";
import { CategoryCard } from "./category-card";

interface ICategoryGridProps {
  categories: Category[];
}
export function CategoryGrid({ categories }: ICategoryGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <CategoryCard key={category.category_id} category={category} />
      ))}
    </div>
  );
}
