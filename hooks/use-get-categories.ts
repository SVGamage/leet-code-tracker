import { Category } from "@/lib/types";
import { useEffect, useState } from "react";

export const useGetCategories = (userId: number) => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch("/api/category", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId,
          }),
        });
        if (!response.ok) {
          console.error("Failed to fetch categories:", await response.text());
          return;
        }
        const categories: Category[] = await response.json();
        setCategories(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    getCategories();
  }, [userId]);
  return categories;
};
