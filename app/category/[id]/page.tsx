import { Metadata } from "next";
import { categories } from "@/lib/data";
import { CategoryView } from "@/components/category-view";

export const metadata: Metadata = {
  title: "Category Details - LeetCode Progress Tracker",
  description: "View detailed progress for this category",
};

// Required for static site generation with dynamic routes
export function generateStaticParams() {
  return categories.map((category) => ({
    id: category.id.toString(),
  }));
}

export default function CategoryPage({ params }: { params: { id: string } }) {
  const category = categories.find((c) => c.id === Number(params.id));

  if (!category) {
    return <div>Category not found</div>;
  }

  return <CategoryView category={category} />;
}